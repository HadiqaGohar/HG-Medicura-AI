"use client";
import React, { useState, useEffect } from "react";
import {
  FiBell,
  FiPlus,
  FiTrash2,
  FiClock,
  FiX,
  FiCheck,
} from "react-icons/fi";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface MedicineReminder {
  id: string;
  medicine_name: string;
  dosage?: string;
  frequency: string;
  reminder_times: string[];
  is_active: boolean;
  created_at: string;
}

interface Country {
  name: string;
  timezone: string;
  flag: string;
}

const MedicineReminderHeader: React.FC = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [reminders, setReminders] = useState<MedicineReminder[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: "Pakistan",
    timezone: "Asia/Karachi",
    flag: "🇵🇰",
  });

  const [newReminder, setNewReminder] = useState({
    medicine_name: "",
    dosage: "",
    frequency: "",
    reminder_times: [""],
  });

  const countries: Country[] = [
    { name: "Pakistan", timezone: "Asia/Karachi", flag: "🇵🇰" },
    { name: "India", timezone: "Asia/Kolkata", flag: "🇮🇳" },
    { name: "United States", timezone: "America/New_York", flag: "🇺🇸" },
    { name: "United Kingdom", timezone: "Europe/London", flag: "🇬🇧" },
    { name: "Canada", timezone: "America/Toronto", flag: "🇨🇦" },
    { name: "Australia", timezone: "Australia/Sydney", flag: "🇦🇺" },
    { name: "Germany", timezone: "Europe/Berlin", flag: "🇩🇪" },
    { name: "France", timezone: "Europe/Paris", flag: "🇫🇷" },
    { name: "Japan", timezone: "Asia/Tokyo", flag: "🇯🇵" },
    { name: "China", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  ];

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeInCountry = now.toLocaleTimeString("en-US", {
        timeZone: selectedCountry.timezone,
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(timeInCountry);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [selectedCountry]);

  useEffect(() => {
    if (session?.user?.email && isOpen) {
      loadReminders();
    }
  }, [session, isOpen]);

  useEffect(() => {
    if (reminders.length > 0) {
      checkReminders();
    }
  }, [currentTime, reminders]);

  const loadReminders = async () => {
    try {
      const storedReminders = localStorage.getItem('medicineReminders');
      if (storedReminders) {
        const parsedReminders = JSON.parse(storedReminders);
        setReminders(parsedReminders);
        console.log("📋 Loaded reminders from localStorage:", parsedReminders);
        return;
      }

      const response = await fetch("/api/medicine-reminder");
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setReminders(data.reminders);
        }
      }
    } catch (error) {
      console.error("Failed to load reminders:", error);
    }
  };

  const checkReminders = () => {
    if (!session?.user?.email) return;

    console.log(`⏰ Checking reminders at ${currentTime}...`);
    
    reminders.forEach((reminder) => {
      reminder.reminder_times.forEach((reminderTime) => {
        console.log(`🔍 Checking ${reminder.medicine_name}: ${reminderTime} vs ${currentTime}, active: ${reminder.is_active}`);
        
        if (reminderTime === currentTime && reminder.is_active) {
          console.log(`🚨 ALARM TRIGGERED for ${reminder.medicine_name}!`);
          showMedicineAlert(reminder);
        }
      });
    });
  };

  const showMedicineAlert = (reminder: MedicineReminder) => {
    const message = `💊 Time to take: ${reminder.medicine_name}${
      reminder.dosage ? ` (${reminder.dosage})` : ""
    }`;

    toast(message, {
      icon: "💊",
      duration: 5000,
      position: "top-center",
      style: {
        background: "#10B981",
        color: "white",
        fontWeight: "bold",
        padding: "16px",
        borderRadius: "12px",
        fontSize: "16px",
        minWidth: "300px",
      },
    });

    if ("Notification" in window && Notification.permission === "granted") {
      const notification = new Notification("Medicine Reminder", {
        body: message,
        icon: "/favicon.ico",
        badge: "/favicon.ico",
        tag: `medicine-${reminder.id}`,
        requireInteraction: true,
      });

      setTimeout(() => notification.close(), 10000);
    }

    try {
      const audio = new Audio("/notification-sound.mp3");
      audio.play().catch(() => {
        // Fallback: create a simple beep sound using Web Audio API
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) {
            const audioContext = new AudioContext();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 800; // Frequency in Hz
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(
              0.01,
              audioContext.currentTime + 0.5
            );

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
          } else {
            console.log("AudioContext not available");
          }
        } catch (beepError) {
          console.log("Audio beep not available");
        }
      });
    } catch (error) {
      console.log("Audio notification not available");
    }
  };

  const addReminder = async () => {
    if (!session?.user?.email) {
      toast.error("Please sign in to set reminders");
      return;
    }

    if (
      !newReminder.medicine_name ||
      !newReminder.frequency ||
      !newReminder.reminder_times[0]
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const response = await fetch("/api/medicine-reminder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newReminder,
          reminder_times: newReminder.reminder_times.filter((time) =>
            time.trim()
          ),
          timezone: selectedCountry.timezone,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data.reminder) {
          const storedReminders = localStorage.getItem('medicineReminders');
          const existingReminders = storedReminders ? JSON.parse(storedReminders) : [];
          const updatedReminders = [...existingReminders, data.reminder];
          localStorage.setItem('medicineReminders', JSON.stringify(updatedReminders));
          
          console.log("💾 Stored reminder locally:", data.reminder);
          toast.success(`✅ Reminder set for ${newReminder.medicine_name} at ${newReminder.reminder_times.join(', ')}`);
        } else {
          toast.success(`Reminder set for ${newReminder.medicine_name}`);
        }
        
        setNewReminder({
          medicine_name: "",
          dosage: "",
          frequency: "",
          reminder_times: [""],
        });
        setShowAddForm(false);
        loadReminders();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to create reminder");
      }
    } catch (error) {
      console.error("Reminder creation error:", error);
      toast.error("Failed to create reminder");
    }
  };

  const deleteReminder = async (reminderId: string) => {
    try {
      const storedReminders = localStorage.getItem('medicineReminders');
      if (storedReminders) {
        const existingReminders = JSON.parse(storedReminders);
        const updatedReminders = existingReminders.filter((r: MedicineReminder) => r.id !== reminderId);
        localStorage.setItem('medicineReminders', JSON.stringify(updatedReminders));
        
        console.log("🗑️ Deleted reminder from localStorage:", reminderId);
        toast.success("Reminder deleted");
        loadReminders();
        return;
      }

      const response = await fetch(`/api/medicine-reminder/${reminderId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Reminder deleted");
        loadReminders();
      } else {
        toast.error("Failed to delete reminder");
      }
    } catch (error) {
      console.error("Delete reminder error:", error);
      toast.error("Failed to delete reminder");
    }
  };

  const toggleReminder = async (reminderId: string, isActive: boolean) => {
    try {
      const storedReminders = localStorage.getItem('medicineReminders');
      if (storedReminders) {
        const existingReminders = JSON.parse(storedReminders);
        const updatedReminders = existingReminders.map((r: MedicineReminder) => 
          r.id === reminderId ? { ...r, is_active: !isActive } : r
        );
        localStorage.setItem('medicineReminders', JSON.stringify(updatedReminders));
        
        console.log(`🔄 Toggled reminder ${reminderId} to ${!isActive ? 'active' : 'inactive'}`);
        toast.success(`Reminder ${!isActive ? "enabled" : "disabled"}`);
        loadReminders();
        return;
      }

      const response = await fetch(`/api/medicine-reminder/${reminderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: !isActive }),
      });

      if (response.ok) {
        toast.success(`Reminder ${!isActive ? "enabled" : "disabled"}`);
        loadReminders();
      } else {
        toast.error("Failed to update reminder");
      }
    } catch (error) {
      console.error("Toggle reminder error:", error);
      toast.error("Failed to update reminder");
    }
  };

  const addTimeSlot = () => {
    setNewReminder({
      ...newReminder,
      reminder_times: [...newReminder.reminder_times, ""],
    });
  };

  const removeTimeSlot = (index: number) => {
    const newTimes = newReminder.reminder_times.filter((_, i) => i !== index);
    setNewReminder({
      ...newReminder,
      reminder_times: newTimes.length > 0 ? newTimes : [""],
    });
  };

  const updateTimeSlot = (index: number, value: string) => {
    const newTimes = [...newReminder.reminder_times];
    newTimes[index] = value;
    setNewReminder({
      ...newReminder,
      reminder_times: newTimes,
    });
  };

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  if (!session?.user?.email) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded-full hover:bg-gray-100"
        title="Medicine Reminders"
      >
        <FiBell size={20} />
        {reminders.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {reminders.length}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Medicine Reminders
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedCountry.flag} {selectedCountry.name} -{" "}
                    {currentTime}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <div className="p-4 border-b border-gray-100">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Your Country/Timezone
                </label>
                <select
                  value={selectedCountry.name}
                  onChange={(e) => {
                    const country = countries.find(
                      (c) => c.name === e.target.value
                    );
                    if (country) setSelectedCountry(country);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-4 border-b border-gray-100">
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <FiPlus size={18} />
                  <span>Add New Reminder</span>
                </button>
                {reminders.length > 0 && (
                  <button
                    onClick={() => {
                      const testReminder = reminders[0];
                      console.log("🧪 Testing alarm for:", testReminder.medicine_name);
                      showMedicineAlert(testReminder);
                    }}
                    className="w-full flex items-center justify-center space-x-2 p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm"
                  >
                    <FiBell size={16} />
                    <span>Test Alarm</span>
                  </button>
                )}
              </div>
              {showAddForm && (
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Medicine name *"
                        value={newReminder.medicine_name}
                        onChange={(e) =>
                          setNewReminder({
                            ...newReminder,
                            medicine_name: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Dosage (e.g., 500mg)"
                        value={newReminder.dosage}
                        onChange={(e) =>
                          setNewReminder({
                            ...newReminder,
                            dosage: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <select
                        value={newReminder.frequency}
                        onChange={(e) =>
                          setNewReminder({
                            ...newReminder,
                            frequency: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      >
                        <option value="">Select frequency *</option>
                        <option value="Once daily">Once daily</option>
                        <option value="Twice daily">Twice daily</option>
                        <option value="Three times daily">
                          Three times daily
                        </option>
                        <option value="Four times daily">
                          Four times daily
                        </option>
                        <option value="As needed">As needed</option>
                        <option value="Weekly">Weekly</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Reminder Times *
                      </label>
                      {newReminder.reminder_times.map((time, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 mb-2"
                        >
                          <input
                            type="time"
                            value={time}
                            onChange={(e) =>
                              updateTimeSlot(index, e.target.value)
                            }
                            className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          />
                          {newReminder.reminder_times.length > 1 && (
                            <button
                              onClick={() => removeTimeSlot(index)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        onClick={addTimeSlot}
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                      >
                        <FiPlus size={14} />
                        <span>Add another time</span>
                      </button>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <button
                        onClick={addReminder}
                        className="flex-1 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                      >
                        Save Reminder
                      </button>
                      <button
                        onClick={() => setShowAddForm(false)}
                        className="flex-1 bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-400 transition-colors text-sm font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="p-4">
                {reminders.length > 0 ? (
                  <div className="space-y-3">
                    {reminders.map((reminder) => (
                      <div
                        key={reminder.id}
                        className={`p-3 rounded-lg border transition-all duration-200 ${
                          reminder.is_active
                            ? "bg-green-50 border-green-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">
                              {reminder.medicine_name}
                              {reminder.dosage && (
                                <span className="text-sm text-gray-600 ml-2">
                                  ({reminder.dosage})
                                </span>
                              )}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {reminder.frequency}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <FiClock size={14} className="text-gray-400" />
                              <span className="text-xs text-gray-500">
                                {reminder.reminder_times.join(", ")}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                toggleReminder(reminder.id, reminder.is_active)
                              }
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                                reminder.is_active
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                                  reminder.is_active
                                    ? "translate-x-6"
                                    : "translate-x-1"
                                }`}
                              />
                            </button>
                            <button
                              onClick={() => deleteReminder(reminder.id)}
                              className="p-1 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                              title="Delete reminder"
                            >
                              <FiTrash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FiBell size={48} className="mx-auto text-gray-300 mb-4" />
                    <h4 className="text-lg font-medium text-gray-800 mb-2">
                      No Reminders Set
                    </h4>
                    <p className="text-sm text-gray-600">
                      Add your first medicine reminder to get started
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MedicineReminderHeader;
