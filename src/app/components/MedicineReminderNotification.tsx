// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
// import toast from 'react-hot-toast';
// import { FiBell, FiClock } from 'react-icons/fi';

// interface MedicineReminder {
//   id: string;
//   medicine_name: string;
//   dosage?: string;
//   frequency: string;
//   reminder_times: string[];
//   is_active: boolean;
// }

// const MedicineReminderNotification: React.FC = () => {
//   const { data: session } = useSession();
//   const [reminders, setReminders] = useState<MedicineReminder[]>([]);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     // Update current time every minute
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 60000);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (session?.user?.email) {
//       loadReminders();
//     }
//   }, [session]);

//   useEffect(() => {
//     // Check for medicine reminders every minute
//     checkReminders();
//   }, [currentTime, reminders]);

//   const loadReminders = async () => {
//     try {
//       const response = await fetch('/api/medicine-reminder');
//       if (response.ok) {
//         const data = await response.json();
//         if (data.success) {
//           setReminders(data.reminders);
//         }
//       }
//     } catch (error) {
//       console.error('Failed to load reminders:', error);
//     }
//   };

//   const checkReminders = () => {
//     // Only check reminders if user is logged in and has reminders
//     if (!session?.user?.email || reminders.length === 0) return;
    
//     const now = new Date();
//     const currentTimeString = now.toTimeString().slice(0, 5); // HH:MM format

//     reminders.forEach((reminder) => {
//       reminder.reminder_times.forEach((reminderTime) => {
//         if (reminderTime === currentTimeString && reminder.is_active) {
//           showMedicineReminder(reminder);
//         }
//       });
//     });
//   };

//   const showMedicineReminder = (reminder: MedicineReminder) => {
//     const message = `Time to take your medicine: ${reminder.medicine_name}${
//       reminder.dosage ? ` (${reminder.dosage})` : ''
//     }`;

//     // Only show toast if user has active reminders and is logged in
//     if (session?.user?.email) {
//       toast(message, {
//         icon: '💊',
//         duration: 5000, // Reduced to 5 seconds
//         position: 'top-right',
//         style: {
//           background: '#10B981',
//           color: 'white',
//           fontWeight: 'bold',
//           padding: '12px',
//           borderRadius: '8px',
//           fontSize: '14px',
//         },
//       });
//     }

//     // Show browser notification if permission granted and user is logged in
//     if (session?.user?.email && 'Notification' in window && Notification.permission === 'granted') {
//       new Notification('Medicine Reminder', {
//         body: message,
//         icon: '/favicon.ico',
//         badge: '/favicon.ico',
//       });
//     }
//   };

//   // Request notification permission on component mount
//   useEffect(() => {
//     if ('Notification' in window && Notification.permission === 'default') {
//       Notification.requestPermission();
//     }
//   }, []);

//   return null; // This component doesn't render anything visible
// };

// export default MedicineReminderNotification;

'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { FiBell, FiClock } from 'react-icons/fi';

interface MedicineReminder {
  id: string;
  medicine_name: string;
  dosage?: string;
  frequency: string;
  reminder_times: string[];
  is_active: boolean;
}

const MedicineReminderNotification: React.FC = () => {
  const { data: session } = useSession();
  const [reminders, setReminders] = useState<MedicineReminder[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update current time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (session?.user?.email) {
      loadReminders();
    }
  }, [session]);

  useEffect(() => {
    // Check for medicine reminders every minute
    checkReminders();
  }, [currentTime, reminders]);

  const loadReminders = async () => {
    try {
      const response = await fetch('/api/medicine-reminder');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setReminders(data.reminders);
        }
      }
    } catch (error) {
      console.error('Failed to load reminders:', error);
    }
  };

  const checkReminders = () => {
    // Only check reminders if user is logged in and has reminders
    if (!session?.user?.email || reminders.length === 0) return;
    
    const now = new Date();
    const currentTimeString = now.toTimeString().slice(0, 5); // HH:MM format

    reminders.forEach((reminder) => {
      reminder.reminder_times.forEach((reminderTime) => {
        if (reminderTime === currentTimeString && reminder.is_active) {
          showMedicineReminder(reminder);
        }
      });
    });
  };

  const showMedicineReminder = (reminder: MedicineReminder) => {
    const message = `Time to take your medicine: ${reminder.medicine_name}${
      reminder.dosage ? ` (${reminder.dosage})` : ''
    }`;

    // Show only toast notification if user is logged in
    if (session?.user?.email) {
      toast(message, {
        icon: '💊',
        duration: 5000,
        position: 'top-right',
        style: {
          background: '#10B981',
          color: 'white',
          fontWeight: 'bold',
          padding: '12px',
          borderRadius: '8px',
          fontSize: '14px',
        },
      });
    }
  };

  return null; // This component doesn't render anything visible
};

export default MedicineReminderNotification;



