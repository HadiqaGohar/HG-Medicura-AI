// 'use client';
// import React, { useState } from 'react';

// interface BugReportModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const BugReportModal: React.FC<BugReportModalProps> = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     location: '',
//     priority: 'Medium',
//     type: 'Visual/UI',
//     issue: '',
//     reproduce: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     try {
//       const response = await fetch('/api/bug-report', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setSubmitStatus('success');
//         setTimeout(() => {
//           onClose();
//           // Reset form
//           setFormData({
//             name: '',
//             email: '',
//             location: '',
//             priority: 'Medium',
//             type: 'Visual/UI',
//             issue: '',
//             reproduce: ''
//           });
//           setSubmitStatus('idle');
//         }, 2000);
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Error submitting bug report:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b">
//           <div className="flex items-center gap-2">
//             <span className="text-orange-500 text-xl">🐛</span>
//             <h2 className="text-xl font-semibold text-gray-800">Report a Bug</h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 text-xl"
//           >
//             ×
//           </button>
//         </div>

//         {/* Privacy Notice */}
//         <div className="px-6 pt-4">
//           <p className="text-sm text-gray-600 mb-4">
//             Help us fix issues quickly by providing key details.
//           </p>
//           <div className="bg-blue-50 p-3 rounded-lg mb-4">
//             <div className="flex items-start gap-2">
//               <span className="text-blue-500 mt-0.5">ℹ️</span>
//               <div>
//                 <p className="text-sm font-medium text-blue-800">Privacy</p>
//                 <p className="text-xs text-blue-600">
//                   Your contact info is only used for bug follow-up, never for marketing.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="px-6 pb-6">
//           {/* Name and Email */}
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@email.com"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 required
//               />
//             </div>
//           </div>

//           {/* Where did this happen */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               <span className="text-red-500">*</span> Where did this happen?
//             </label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="e.g., Login page, Dashboard Preview, Settings menu"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Priority and Type */}
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Priority
//               </label>
//               <select
//                 name="priority"
//                 value={formData.priority}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               >
//                 <option value="Low">Low - Minor issue</option>
//                 <option value="Medium">Medium - Affects use</option>
//                 <option value="High">High - Blocks feature</option>
//                 <option value="Critical">Critical - Site broken</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Type
//               </label>
//               <select
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               >
//                 <option value="Visual/UI">Visual/UI</option>
//                 <option value="Functionality">Functionality</option>
//                 <option value="Performance">Performance</option>
//                 <option value="Data/Content">Data/Content</option>
//                 <option value="Mobile">Mobile Issue</option>
//                 <option value="Browser">Browser Specific</option>
//               </select>
//             </div>
//           </div>

//           {/* What's the issue */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//              {" What's the issue?"}
//             </label>
//             <textarea
//               name="issue"
//               value={formData.issue}
//               onChange={handleChange}
//               placeholder="Describe what happened and what you expected..."
//               rows={4}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
//               required
//             />
//           </div>

//           {/* How to reproduce */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               How to reproduce? (optional)
//             </label>
//             <textarea
//               name="reproduce"
//               value={formData.reproduce}
//               onChange={handleChange}
//               placeholder="1. Go to... 2. Click... 3. See error"
//               rows={3}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
//             />
//           </div>

//           {/* Status Messages */}
//           {submitStatus === 'success' && (
//             <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
//               <div className="flex items-center gap-2">
//                 <span className="text-green-500">✅</span>
//                 <p className="text-sm text-green-700">
//                  {" Bug report sent successfully! You'll receive a confirmation email shortly. "}
//                 </p>
//               </div>
//             </div>
//           )}

//           {submitStatus === 'error' && (
//             <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
//               <div className="flex items-center gap-2">
//                 <span className="text-red-500">❌</span>
//                 <p className="text-sm text-red-700">
//                   Failed to send bug report. Please try again or contact support directly.
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full py-3 px-4 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.02] ${
//               isSubmitting
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : submitStatus === 'success'
//                 ? 'bg-green-600 hover:bg-green-700'
//                 : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
//             } text-white`}
//           >
//             {isSubmitting ? (
//               <div className="flex items-center justify-center gap-2">
//                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                 Sending...
//               </div>
//             ) : submitStatus === 'success' ? (
//               'Sent Successfully!'
//             ) : (
//               'Submit Bug Report'
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BugReportModal;

'use client';
import React, { useState } from 'react';

interface BugReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BugReportModal: React.FC<BugReportModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    priority: 'Medium',
    type: 'Visual/UI',
    issue: '',
    reproduce: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [priorityOpen, setPriorityOpen] = useState(false); // Track priority dropdown
  const [typeOpen, setTypeOpen] = useState(false); // Track type dropdown

  const priorityOptions = [
    { value: 'Low', label: 'Low - Minor issue' },
    { value: 'Medium', label: 'Medium - Affects use' },
    { value: 'High', label: 'High - Blocks feature' },
    { value: 'Critical', label: 'Critical - Site broken' },
  ];

  const typeOptions = [
    { value: 'Visual/UI', label: 'Visual/UI' },
    { value: 'Functionality', label: 'Functionality' },
    { value: 'Performance', label: 'Performance' },
    { value: 'Data/Content', label: 'Data/Content' },
    { value: 'Mobile', label: 'Mobile Issue' },
    { value: 'Browser', label: 'Browser Specific' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/bug-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setFormData({
            name: '',
            email: '',
            location: '',
            priority: 'Medium',
            type: 'Visual/UI',
            issue: '',
            reproduce: '',
          });
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting bug report:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 text-xl">🐛</span>
            <h2 className="text-xl font-semibold text-gray-800">Report a Bug</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>

        {/* Privacy Notice */}
        <div className="px-6 pt-4">
          <p className="text-sm text-gray-600 mb-4">
            Help us fix issues quickly by providing key details.
          </p>
          <div className="bg-blue-50 p-3 rounded-lg mb-4">
            <div className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">ℹ️</span>
              <div>
                <p className="text-sm font-medium text-blue-800">Privacy</p>
                <p className="text-xs text-blue-600">
                  Your contact info is only used for bug follow-up, never for marketing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          {/* Name and Email */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Where did this happen */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="text-red-500">*</span> Where did this happen?
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Login page, Dashboard Preview, Settings menu"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Priority and Type */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Priority Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <input type="hidden" name="priority" value={formData.priority} />
              <div className="relative">
                <div
                  onClick={() => setPriorityOpen(!priorityOpen)}
                  className="p-2 border border-gray-300 rounded-md bg-gray-50 cursor-pointer flex justify-between items-center"
                >
                  {formData.priority
                    ? priorityOptions.find((opt) => opt.value === formData.priority)?.label
                    : 'Select priority'}
                  <span className="ml-2 text-gray-500">▼</span>
                </div>
                {priorityOpen && (
                  <ul className="absolute left-0 right-0 mt-1 border border-gray-300 rounded-md bg-white shadow-md z-10">
                    {priorityOptions.map((opt) => (
                      <li
                        key={opt.value}
                        onClick={() => {
                          setFormData({ ...formData, priority: opt.value });
                          setPriorityOpen(false);
                        }}
                        className="cursor-pointer hover:bg-purple-100 p-2 rounded"
                      >
                        {opt.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Type Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <input type="hidden" name="type" value={formData.type} />
              <div className="relative">
                <div
                  onClick={() => setTypeOpen(!typeOpen)}
                  className="p-2 border border-gray-300 rounded-md bg-gray-50 cursor-pointer flex justify-between items-center"
                >
                  {formData.type
                    ? typeOptions.find((opt) => opt.value === formData.type)?.label
                    : 'Select type'}
                  <span className="ml-2 text-gray-500">▼</span>
                </div>
                {typeOpen && (
                  <ul className="absolute left-0 right-0 mt-1 border border-gray-300 rounded-md bg-white shadow-md z-10">
                    {typeOptions.map((opt) => (
                      <li
                        key={opt.value}
                        onClick={() => {
                          setFormData({ ...formData, type: opt.value });
                          setTypeOpen(false);
                        }}
                        className="cursor-pointer hover:bg-purple-100 p-2 rounded"
                      >
                        {opt.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* What's the issue */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What&apos;s the issue?
            </label>
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              placeholder="Describe what happened and what you expected..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              required
            />
          </div>

          {/* How to reproduce */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              How to reproduce? (optional)
            </label>
            <textarea
              name="reproduce"
              value={formData.reproduce}
              onChange={handleChange}
              placeholder="1. Go to... 2. Click... 3. See error"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <p className="text-sm text-green-700">
                  Bug report sent successfully! You&apos;ll receive a confirmation email shortly.
                </p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <div className="flex items-center gap-2">
                <span className="text-red-500">❌</span>
                <p className="text-sm text-red-700">
                  Failed to send bug report. Please try again or contact support directly.
                </p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.02] ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : submitStatus === 'success'
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-800 hover:to-blue-900'
            } text-white`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Sending...
              </div>
            ) : submitStatus === 'success' ? (
              'Sent Successfully!'
            ) : (
              'Submit Bug Report'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BugReportModal;