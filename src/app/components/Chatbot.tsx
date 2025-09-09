// // 'use client'
// // import React, { useState, useEffect, useRef } from 'react';
// // import { TbMessageChatbotFilled } from "react-icons/tb";
// // import { FiSend, FiMaximize2, FiMinimize2, FiX, FiTrash2, FiExternalLink } from "react-icons/fi";
// // import { BiBot, BiUser } from "react-icons/bi";

// // interface Message {
// //   role: 'user' | 'bot';
// //   content: string ;
// //   type?: string;
// //   sources?: Array<{title: string, url: string}>;
// //   suggestions?: string[];
// //   timestamp?: string;
// // }

// // // Define types for side effects
// // interface SideEffect {
// //   side_effect: string;
// //   description: string;
// // }

// // // Define types for the content structure
// // interface ChatbotContent {
// //   common_side_effects?: SideEffect[];
// //   serious_side_effects?: SideEffect[];
// //   // Add other possible properties as needed
// //   [key: string]: unknown; // Use this only if content can have other unknown properties
// // }

// // // Type for the content parameter
// // type ContentType = string | ChatbotContent;


// // const Chatbot: React.FC = () => {
// //   const [isOpen, setIsOpen] = useState<boolean>(false);
// //   const [isMaximized, setIsMaximized] = useState<boolean>(false);
// //   const [messages, setMessages] = useState<Message[]>([]);
// //   const [input, setInput] = useState<string>('');
// //   const [isLoading, setIsLoading] = useState<boolean>(false);
// //   const [isInitialized, setIsInitialized] = useState<boolean>(false);
// //   const [sessionId] = useState<string>(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
// //   const messagesEndRef = useRef<HTMLDivElement>(null);
// //   const inputRef = useRef<HTMLInputElement>(null);
  
// //   // Dragging state
// //   const [position, setPosition] = useState({ x: 20, y: 20 });
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
// //   const chatbotRef = useRef<HTMLDivElement>(null);

// //   // Quick action suggestions
// //   const quickActions = [
// //     "Analyze my symptoms",
// //     "Check drug interactions",
// //     "Explain a medical term",
// //     "Provide health tips",
// //     "Find information about a condition"
// //   ];

// //   // API base URL
// //   const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// //   useEffect(() => {
// //     // Initialize with welcome message
// //     if (messages.length === 0) {
// //       setMessages([{
// //         role: 'bot',
// //         content: "Hi! I'm Medicura-AI Health, your personal AI health assistant. I can help you analyze symptoms, check drug interactions, explain medical terms, or answer health-related questions. How can I assist you today?",
// //         type: 'welcome'
// //       }]);
// //     }
// //     // Set initialized to true after component mounts
// //     setIsInitialized(true);
// //   }, [messages]);

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [messages]);

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   const getFallbackResponse = (message: string): string => {
// //     // Information about Hadiqa Gohar and Medicura-AI Health
// //     if (message.includes('creator') || message.includes('author') || message.includes('hadiqa') || message.includes('gohar')) {
// //       return `👋 Hi! I'm the Medicura-AI Health assistant. This innovative health assistant was created by **Hadiqa Gohar**, a talented Student Leader, Web Developer, Agentic AI Developer, UI/UX Specialist, and SEO Expert.

// // 🌟 **About Hadiqa Gohar:**
// // - Student Leader at Governor Sindh Initiative for AI & Computing
// // - 1+ years of web development experience
// // - Winner of a laptop from GIAIC
// // - 5K+ LinkedIn followers
// // - Contributor to Modern Python Colab Notebook

// // 💻 **Her Skills:** Next.js, React, TypeScript, Python, TailwindCSS, Figma, and many more!

// // You can learn more about her on the [About page](/about) or connect with her on [GitHub](https://github.com/HadiqaGohar).`;
// //     }

// //     if (message.includes('about') || message.includes('website') || message.includes('medicura') || message.includes('health assistant')) {
// //       return `Welcome to **Medicura-AI Health**! 🎉

// // This is a personal AI health assistant created by **Hadiqa Gohar** to help you with health-related questions from the comfort of your home.

// // ✨ **Features:**
// // - Symptom analysis
// // - Drug interaction checks
// // - Medical term explanations
// // - Personalized health support
// // - 24/7 health assistance

// // 🚀 **Get Started:**
// // - Ask about symptoms or medical terms
// // - Check drug interactions
// // - Get health tips and information

// // Need help with anything specific? Just ask!`;
// //     }

// //     if (message.includes('help') || message.includes('how') || message.includes('guide')) {
// //       return `I'm here to help you with Medicura-AI Health! 🤖

// // **What I can help you with:**
// // - Analyzing symptoms
// // - Checking drug interactions
// // - Explaining medical terms
// // - Providing health tips
// // - Information about the creator, Hadiqa Gohar

// // **Quick Actions:**
// // - "Analyze my symptoms" - Describe symptoms for analysis
// // - "Check drug interactions" - Check if medications are safe together
// // - "Explain a medical term" - Get clear explanations
// // - "About creator" - Learn about Hadiqa Gohar
// // - "Health tips" - Get personalized health advice

// // What would you like to know more about?`;
// //     }

// //     // Default response
// //     return `Hi! I'm the Medicura-AI Health assistant, created by **Hadiqa Gohar**. 

// // I'm here to help with your health-related questions! Unfortunately, I'm having trouble connecting to my main knowledge base right now, but I can still help with:

// // - Information about Medicura-AI Health
// // - Guidance on using our features
// // - Details about our creator, Hadiqa Gohar
// // - General health tips

// // What would you like to know? Try asking about "symptoms", "drug interactions", or "about creator"!`;
// //   };

// //   const handleSendMessage = async (messageText?: string) => {
// //     const messageToSend = messageText || input.trim();
// //     if (!messageToSend) return;

// //     const userMessage: Message = { 
// //       role: 'user', 
// //       content: messageToSend,
// //       timestamp: new Date().toISOString()
// //     };
    
// //     setMessages(prev => [...prev, userMessage]);
// //     setInput('');
// //     setIsLoading(true);

// //     try {
// //       const response = await fetch(`${API_BASE_URL}/api/chatbot`, {
// //         method: 'POST',
// //         headers: { 
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ 
// //           message: messageToSend,
// //           session_id: sessionId
// //         }),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       const data = await response.json();
      
// //       // Extract response content properly
// //       let botContent: string;
// //       if (typeof data === 'object' && data !== null) {
// //         // Try multiple possible fields for the response
// //         botContent = data.summary || 
// //                      data.response?.summary || 
// //                      data.analysis || 
// //                      data.detailed_analysis || 
// //                      'I apologize, I need more information to help you properly.';
// //       } else {
// //         botContent = String(data || 'Sorry, I couldn\'t process your request.');
// //       }
      
// //       const botMessage: Message = { 
// //         role: 'bot', 
// //         content: botContent,
// //         type: data.type || 'general',
// //         timestamp: data.timestamp || new Date().toISOString()
// //       };
      
// //       setMessages(prev => [...prev, botMessage]);
// //     } catch (error) {
// //       console.error('Chatbot error:', error);
      
// //       const fallbackResponse = getFallbackResponse(messageToSend.toLowerCase());
      
// //       const errorMessage: Message = { 
// //         role: 'bot',
// //         content: fallbackResponse,
// //         timestamp: new Date().toISOString(),
// //         type: 'fallback'
// //       };
// //       setMessages(prev => [...prev, errorMessage]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
// //     if (e.key === 'Enter' && !e.shiftKey) {
// //       e.preventDefault();
// //       handleSendMessage();
// //     }
// //   };

// //   const clearConversation = async () => {
// //     try {
// //       await fetch(`${API_BASE_URL}/api/chatbot/session/clear`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ session_id: sessionId }),
// //       });
      
// //       setMessages([{
// //         role: 'bot',
// //         content: "Conversation cleared! How can I help you with your health questions today?",
// //         type: 'welcome'
// //       }]);
// //     } catch (error) {
// //       console.error('Error clearing conversation:', error);
// //     }
// //   };

// //   const openLink = (url: string) => {
// //     window.open(url, '_blank', 'noopener,noreferrer');
// //   };

// //   const formatMessage = (content: string) => {
// //     // Simple formatting for better readability
// //     return content
// //       .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
// //       .replace(/\*(.*?)\*/g, '<em>$1</em>')
// //       .replace(/\n/g, '<br>');
// //   };

// //   const renderContent = (content: ContentType) => {
// //     if (typeof content === 'string') {
// //       return (
// //         <div 
// //           dangerouslySetInnerHTML={{ __html: formatMessage(content) }}
// //           className="text-sm"
// //         />
// //       );
// //     }

// //     // Fallback for object content (e.g., if full JSON is passed)
// //     if (typeof content === 'object' && content !== null) {
// //       let formattedContent = '';
// //       if (content.summary) {
// //         formattedContent += `<strong>Summary:</strong> ${content.summary}<br><br>`;
// //       }
// //       if (content.common_side_effects) {
// //         formattedContent += `<strong>Common Side Effects:</strong><br>`;
// //         content.common_side_effects.forEach((effect) => {
// //           formattedContent += `• ${effect.side_effect}: ${effect.description}<br>`;
// //         });
// //       }
// //       if (content.serious_side_effects) {
// //         formattedContent += `<br><strong>Serious Side Effects:</strong><br>`;
// //         content.serious_side_effects.forEach((effect) => {
// //           formattedContent += `• ${effect.side_effect}: ${effect.description}<br>`;
// //         });
// //       }

// //       return (
// //         <div 
// //           dangerouslySetInnerHTML={{ __html: formatMessage(formattedContent || JSON.stringify(content, null, 2)) }}
// //           className="text-sm"
// //         />
// //       );
// //     }

// //     return <div className="text-sm">No content available.</div>;
// //   };

// //   // Dragging functionality
// //   const handleMouseDown = (e: React.MouseEvent) => {
// //     if (chatbotRef.current) {
// //       const rect = chatbotRef.current.getBoundingClientRect();
// //       setDragOffset({
// //         x: e.clientX - rect.left,
// //         y: e.clientY - rect.top
// //       });
// //       setIsDragging(true);
// //     }
// //   };

// //   const handleTouchStart = (e: React.TouchEvent) => {
// //     if (chatbotRef.current) {
// //       const rect = chatbotRef.current.getBoundingClientRect();
// //       const touch = e.touches[0];
// //       setDragOffset({
// //         x: touch.clientX - rect.left,
// //         y: touch.clientY - rect.top
// //       });
// //       setIsDragging(true);
// //     }
// //   };

// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       if (isDragging) {
// //         const iconX = e.clientX - dragOffset.x;
// //         const iconY = e.clientY - dragOffset.y;
        
// //         // Convert to distance from bottom-right corner
// //         const newX = window.innerWidth - iconX - 56; // Distance from right edge
// //         const newY = window.innerHeight - iconY - 56; // Distance from bottom edge
        
// //         // Keep within screen bounds
// //         setPosition({
// //           x: Math.max(0, Math.min(newX, window.innerWidth - 56)),
// //           y: Math.max(0, Math.min(newY, window.innerHeight - 56))
// //         });
// //       }
// //     };

// //     const handleTouchMove = (e: TouchEvent) => {
// //       if (isDragging) {
// //         e.preventDefault();
// //         const touch = e.touches[0];
// //         const iconX = touch.clientX - dragOffset.x;
// //         const iconY = touch.clientY - dragOffset.y;
        
// //         // Convert to distance from bottom-right corner
// //         const newX = window.innerWidth - iconX - 56;
// //         const newY = window.innerHeight - iconY - 56;
        
// //         setPosition({
// //           x: Math.max(0, Math.min(newX, window.innerWidth - 56)),
// //           y: Math.max(0, Math.min(newY, window.innerHeight - 56))
// //         });
// //       }
// //     };

// //     const handleEnd = () => {
// //       setIsDragging(false);
// //     };

// //     if (isDragging) {
// //       document.addEventListener('mousemove', handleMouseMove);
// //       document.addEventListener('mouseup', handleEnd);
// //       document.addEventListener('touchmove', handleTouchMove, { passive: false });
// //       document.addEventListener('touchend', handleEnd);
// //     }

// //     return () => {
// //       document.removeEventListener('mousemove', handleMouseMove);
// //       document.removeEventListener('mouseup', handleEnd);
// //       document.removeEventListener('touchmove', handleTouchMove);
// //       document.removeEventListener('touchend', handleEnd);
// //     };
// //   }, [isDragging, dragOffset]);

// //   return (
// //     <div>
// //       {/* Draggable Chatbot Icon with notification dot */}
// //       {isInitialized && (
// //         <div 
// //           ref={chatbotRef}
// //           className="fixed z-[70]"
// //           style={{
// //             right: `${position.x}px`,
// //             bottom: `${position.y}px`,
// //           }}
// //         >
// //           <div
// //             className={`w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center cursor-move shadow-lg hover:shadow-xl transition-all duration-300 ${
// //               isDragging ? 'scale-110' : 'hover:scale-110'
// //             }`}
// //             onMouseDown={handleMouseDown}
// //             onTouchStart={handleTouchStart}
// //             onClick={() => {
// //               if (!isDragging) {
// //                 setIsOpen(!isOpen);
// //               }
// //             }}
// //           >
// //             <TbMessageChatbotFilled size={30} color='white'/>
// //           </div>
// //           {!isOpen && messages.length > 1 && (
// //             <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
// //           )}
// //         </div>
// //       )}

// //       {/* Enhanced Chatbot Interface */}
// //       {isOpen && (
// //         <div
// //           className={`fixed ${
// //             isMaximized 
// //               ? 'inset-0' 
// //               : 'w-96 h-[600px] rounded-lg'
// //           } bg-white shadow-2xl z-[60] flex flex-col transition-all duration-300 border border-gray-200`}
// //           style={
// //             !isMaximized ? {
// //               right: `${Math.min(position.x, window.innerWidth - 384)}px`,
// //               bottom: `${Math.max(position.y - 600, 20)}px`,
// //             } : {}
// //           }
// //         >
// //           {/* Enhanced Header */}
// //           <div className={`flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-blue-700 ${isMaximized ? 'rounded-none' : 'rounded-t-lg'}`}>
// //             <div className="flex items-center space-x-2">
// //               <BiBot className="text-white text-xl" />
// //               <h2 className="text-lg font-semibold text-white">Medicura-AI Health Assistant</h2>
// //             </div>
// //             <div className="flex space-x-2">
// //               <button
// //                 className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
// //                 onClick={clearConversation}
// //                 title="Clear conversation"
// //               >
// //                 <FiTrash2 size={18} />
// //               </button>
// //               <button
// //                 className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
// //                 onClick={() => setIsMaximized(!isMaximized)}
// //                 title={isMaximized ? "Minimize to window" : "Maximize to fullscreen"}
// //               >
// //                 {isMaximized ? <FiMinimize2 size={18} /> : <FiMaximize2 size={18} />}
// //               </button>
// //               <button
// //                 className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
// //                 onClick={() => setIsOpen(false)}
// //                 title="Close chat"
// //               >
// //                 <FiX size={18} />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Chat Area */}
// //           <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
// //             {messages.map((msg, index) => (
// //               <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
// //                 <div className={`flex items-start space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
// //                   <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
// //                     msg.role === 'user' 
// //                       ? 'bg-blue-500 text-white' 
// //                       : 'bg-blue-700 text-white'
// //                   }`}>
// //                     {msg.role === 'user' ? <BiUser size={16} /> : <BiBot size={16} />}
// //                   </div>
// //                   <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
// //                     msg.role === 'user' 
// //                       ? 'bg-blue-500 text-white' 
// //                       : 'bg-white text-gray-800 shadow-md border'
// //                   }`}>
// //                     {renderContent(msg.content)}
                    
// //                     {/* Sources */}
// //                     {msg.sources && msg.sources.length > 0 && (
// //                       <div className="mt-2 pt-2 border-t border-gray-200">
// //                         <p className="text-xs text-gray-600 mb-1">Sources:</p>
// //                         {msg.sources.map((source, idx) => (
// //                           <button
// //                             key={idx}
// //                             onClick={() => openLink(source.url)}
// //                             className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 mb-1"
// //                           >
// //                             <FiExternalLink size={10} />
// //                             <span className="truncate max-w-48">{source.title}</span>
// //                           </button>
// //                         ))}
// //                       </div>
// //                     )}
                    
// //                     {/* Suggestions */}
// //                     {msg.suggestions && msg.suggestions.length > 0 && (
// //                       <div className="mt-2 pt-2 border-t border-gray-200">
// //                         <p className="text-xs text-gray-600 mb-1">Quick actions:</p>
// //                         {msg.suggestions.slice(0, 2).map((suggestion, idx) => (
// //                           <button
// //                             key={idx}
// //                             onClick={() => handleSendMessage(suggestion)}
// //                             className="block text-xs text-blue-600 hover:text-blue-800 mb-1 text-left"
// //                           >
// //                             • {suggestion}
// //                           </button>
// //                         ))}
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
            
// //             {/* Loading indicator */}
// //             {isLoading && (
// //               <div className="flex items-start space-x-2 mb-4">
// //                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
// //                   <BiBot size={16} />
// //                 </div>
// //                 <div className="bg-white px-4 py-2 rounded-lg shadow-md border">
// //                   <div className="flex space-x-1">
// //                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
// //                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// //                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //             <div ref={messagesEndRef} />
// //           </div>

// //           {/* Quick Actions */}
// //           {messages.length <= 1 && (
// //             <div className="px-4 py-2 border-t bg-white">
// //               <p className="text-xs text-gray-600 mb-2">Quick actions:</p>
// //               <div className="flex flex-wrap gap-1">
// //                 {quickActions.slice(0, 3).map((action, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => handleSendMessage(action)}
// //                     className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors"
// //                   >
// //                     {action}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* Enhanced Input Area */}
// //           <div className="p-4 border-t bg-white rounded-b-lg">
// //             <div className="flex space-x-2">
// //               <input
// //                 ref={inputRef}
// //                 type="text"
// //                 value={input}
// //                 onChange={(e) => setInput(e.target.value)}
// //                 onKeyPress={handleKeyPress}
// //                 disabled={isLoading}
// //                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent disabled:bg-gray-100"
// //                 placeholder="Ask me about symptoms, drug interactions, medical terms, or health tips..."
// //               />
// //               <button
// //                 onClick={() => handleSendMessage()}
// //                 disabled={isLoading || !input.trim()}
// //                 className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg hover:from-blue-600 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
// //               >
// //                 <FiSend size={16} />
// //               </button>
// //             </div>
// //             <p className="text-xs text-gray-500 mt-2 text-center">
// //               I can help with symptoms, drug interactions, medical terms, and health information
// //             </p>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Chatbot;




// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { TbMessageChatbotFilled } from "react-icons/tb";
// import { FiSend, FiMaximize2, FiMinimize2, FiX, FiTrash2, FiExternalLink } from "react-icons/fi";
// import { BiBot, BiUser } from "react-icons/bi";

// interface Message {
//   role: 'user' | 'bot';
//   content: string;
//   type?: string;
//   sources?: Array<{ title: string; url: string }>;
//   suggestions?: string[];
//   timestamp?: string;
// }

// interface SideEffect {
//   side_effect: string;
//   description: string;
// }

// interface ChatbotContent {
//   common_side_effects?: SideEffect[];
//   serious_side_effects?: SideEffect[];
//   [key: string]: unknown;
// }

// type ContentType = string | ChatbotContent;

// const Chatbot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [isMaximized, setIsMaximized] = useState<boolean>(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isInitialized, setIsInitialized] = useState<boolean>(false);
//   const [sessionId] = useState<string>(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const chatbotRef = useRef<HTMLDivElement>(null);
//   const [position, setPosition] = useState({ x: 20, y: 20 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

//   const quickActions = [
//     "Analyze my symptoms",
//     "Check drug interactions",
//     "Explain a medical term",
//     "Provide health tips",
//     "Find information about a condition"
//   ];

//   useEffect(() => {
//     if (messages.length === 0) {
//       setMessages([{
//         role: 'bot',
//         content: "Hi! I'm Medicura-AI Health, your personal AI health assistant. I can help you analyze symptoms, check drug interactions, explain medical terms, or answer health-related questions. How can I assist you today?",
//         type: 'welcome'
//       }]);
//     }
//     setIsInitialized(true);
//   }, [messages]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const getFallbackResponse = (message: string): string => {
//     if (message.includes('creator') || message.includes('author') || message.includes('hadiqa') || message.includes('gohar')) {
//       return `👋 Hi! I'm the Medicura-AI Health assistant. This innovative health assistant was created by **Hadiqa Gohar**, a talented Student Leader, Web Developer, Agentic AI Developer, UI/UX Specialist, and SEO Expert.

// 🌟 **About Hadiqa Gohar:**
// - Student Leader at Governor Sindh Initiative for AI & Computing
// - 1+ years of web development experience
// - Winner of a laptop from GIAIC
// - 5K+ LinkedIn followers
// - Contributor to Modern Python Colab Notebook

// 💻 **Her Skills:** Next.js, React, TypeScript, Python, TailwindCSS, Figma, and many more!

// You can learn more about her on the [About page](/about) or connect with her on [GitHub](https://github.com/HadiqaGohar).`;
//     }

//     if (message.includes('about') || message.includes('website') || message.includes('medicura') || message.includes('health assistant')) {
//       return `Welcome to **Medicura-AI Health**! 🎉

// This is a personal AI health assistant created by **Hadiqa Gohar** to help you with health-related questions from the comfort of your home.

// ✨ **Features:**
// - Symptom analysis
// - Drug interaction checks
// - Medical term explanations
// - Personalized health support
// - 24/7 health assistance

// 🚀 **Get Started:**
// - Ask about symptoms or medical terms
// - Check drug interactions
// - Get health tips and information

// Need help with anything specific? Just ask!`;
//     }

//     if (message.includes('help') || message.includes('how') || message.includes('guide')) {
//       return `I'm here to help you with Medicura-AI Health! 🤖

// **What I can help you with:**
// - Analyzing symptoms
// - Checking drug interactions
// - Explaining medical terms
// - Providing health tips
// - Information about the creator, Hadiqa Gohar

// **Quick Actions:**
// - "Analyze my symptoms" - Describe symptoms for analysis
// - "Check drug interactions" - Check if medications are safe together
// - "Explain a medical term" - Get clear explanations
// - "About creator" - Learn about Hadiqa Gohar
// - "Health tips" - Get personalized health advice

// What would you like to know more about?`;
//     }

//     return `Hi! I'm the Medicura-AI Health assistant, created by **Hadiqa Gohar**. 

// I'm here to help with your health-related questions! Unfortunately, I'm having trouble connecting to my main knowledge base right now, but I can still help with:

// - Information about Medicura-AI Health
// - Guidance on using our features
// - Details about our creator, Hadiqa Gohar
// - General health tips

// What would you like to know? Try asking about "symptoms", "drug interactions", or "about creator"!`;
//   };

//   const handleSendMessage = async (messageText?: string) => {
//     const messageToSend = messageText || input.trim();
//     if (!messageToSend) return;

//     const userMessage: Message = { 
//       role: 'user', 
//       content: messageToSend,
//       timestamp: new Date().toISOString()
//     };
    
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       console.log('Sending request to /api/chatbot with message:', messageToSend);
//       const response = await fetch('/api/chatbot', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: messageToSend, session_id: sessionId }),
//       });

//       console.log('Response status:', response.status);
//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       let botContent: string;
//       if (typeof data === 'object' && data !== null) {
//         botContent = data.summary || 
//                      data.response?.summary || 
//                      data.analysis || 
//                      data.detailed_analysis || 
//                      'I apologize, I need more information to help you properly.';
//       } else {
//         botContent = String(data || 'Sorry, I couldn\'t process your request.');
//       }
      
//       const botMessage: Message = { 
//         role: 'bot', 
//         content: botContent,
//         type: data.type || 'general',
//         timestamp: data.timestamp || new Date().toISOString()
//       };
      
//       setMessages(prev => [...prev, botMessage]);
//     } catch (error: unknown) {
//       console.error('Chatbot fetch error:', error);
//       const fallbackResponse = getFallbackResponse(messageToSend.toLowerCase());
//       const errorMessage: Message = { 
//         role: 'bot',
//         content: fallbackResponse,
//         timestamp: new Date().toISOString(),
//         type: 'fallback'
//       };
//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const clearConversation = async () => {
//     try {
//       console.log('Clearing conversation for session:', sessionId);
//       const response = await fetch('/api/chatbot/session/clear', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ session_id: sessionId }),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to clear conversation: ${response.status}`);
//       }

//       setMessages([{
//         role: 'bot',
//         content: "Conversation cleared! How can I help you with your health questions today?",
//         type: 'welcome'
//       }]);
//     } catch (error: unknown) {
//       console.error('Error clearing conversation:', error);
//       setMessages(prev => [...prev, {
//         role: 'bot',
//         content: 'Failed to clear conversation. Please try again.',
//         type: 'error',
//         timestamp: new Date().toISOString()
//       }]);
//     }
//   };

//   const openLink = (url: string) => {
//     window.open(url, '_blank', 'noopener,noreferrer');
//   };

//   const formatMessage = (content: string) => {
//     return content
//       .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
//       .replace(/\*(.*?)\*/g, '<em>$1</em>')
//       .replace(/\n/g, '<br>');
//   };

//   const renderContent = (content: ContentType) => {
//     if (typeof content === 'string') {
//       return (
//         <div 
//           dangerouslySetInnerHTML={{ __html: formatMessage(content) }}
//           className="text-sm"
//         />
//       );
//     }

//     if (typeof content === 'object' && content !== null) {
//       let formattedContent = '';
//       if (content.summary) {
//         formattedContent += `<strong>Summary:</strong> ${content.summary}<br><br>`;
//       }
//       if (content.common_side_effects) {
//         formattedContent += `<strong>Common Side Effects:</strong><br>`;
//         content.common_side_effects.forEach((effect) => {
//           formattedContent += `• ${effect.side_effect}: ${effect.description}<br>`;
//         });
//       }
//       if (content.serious_side_effects) {
//         formattedContent += `<br><strong>Serious Side Effects:</strong><br>`;
//         content.serious_side_effects.forEach((effect) => {
//           formattedContent += `• ${effect.side_effect}: ${effect.description}<br>`;
//         });
//       }

//       return (
//         <div 
//           dangerouslySetInnerHTML={{ __html: formatMessage(formattedContent || JSON.stringify(content, null, 2)) }}
//           className="text-sm"
//         />
//       );
//     }

//     return <div className="text-sm">No content available.</div>;
//   };

//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (chatbotRef.current) {
//       const rect = chatbotRef.current.getBoundingClientRect();
//       setDragOffset({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//       });
//       setIsDragging(true);
//     }
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     if (chatbotRef.current) {
//       const rect = chatbotRef.current.getBoundingClientRect();
//       const touch = e.touches[0];
//       setDragOffset({
//         x: touch.clientX - rect.left,
//         y: touch.clientY - rect.top
//       });
//       setIsDragging(true);
//     }
//   };

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (isDragging) {
//         const iconX = e.clientX - dragOffset.x;
//         const iconY = e.clientY - dragOffset.y;
//         const newX = window.innerWidth - iconX - 56;
//         const newY = window.innerHeight - iconY - 56;
//         setPosition({
//           x: Math.max(0, Math.min(newX, window.innerWidth - 56)),
//           y: Math.max(0, Math.min(newY, window.innerHeight - 56))
//         });
//       }
//     };

//     const handleTouchMove = (e: TouchEvent) => {
//       if (isDragging) {
//         e.preventDefault();
//         const touch = e.touches[0];
//         const iconX = touch.clientX - dragOffset.x;
//         const iconY = touch.clientY - dragOffset.y;
//         const newX = window.innerWidth - iconX - 56;
//         const newY = window.innerHeight - iconY - 56;
//         setPosition({
//           x: Math.max(0, Math.min(newX, window.innerWidth - 56)),
//           y: Math.max(0, Math.min(newY, window.innerHeight - 56))
//         });
//       }
//     };

//     const handleEnd = () => {
//       setIsDragging(false);
//     };

//     if (isDragging) {
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseup', handleEnd);
//       document.addEventListener('touchmove', handleTouchMove, { passive: false });
//       document.addEventListener('touchend', handleEnd);
//     }

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleEnd);
//       document.removeEventListener('touchmove', handleTouchMove);
//       document.removeEventListener('touchend', handleEnd);
//     };
//   }, [isDragging, dragOffset]);

//   return (
//     <div>
//       {isInitialized && (
//         <div 
//           ref={chatbotRef}
//           className="fixed z-[70]"
//           style={{
//             right: `${position.x}px`,
//             bottom: `${position.y}px`,
//           }}
//         >
//           <div
//             className={`w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center cursor-move shadow-lg hover:shadow-xl transition-all duration-300 ${
//               isDragging ? 'scale-110' : 'hover:scale-110'
//             }`}
//             onMouseDown={handleMouseDown}
//             onTouchStart={handleTouchStart}
//             onClick={() => {
//               if (!isDragging) {
//                 setIsOpen(!isOpen);
//               }
//             }}
//           >
//             <TbMessageChatbotFilled size={30} color='white'/>
//           </div>
//           {!isOpen && messages.length > 1 && (
//             <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
//           )}
//         </div>
//       )}

//       {isOpen && (
//         <div
//           className={`fixed ${
//             isMaximized 
//               ? 'inset-0' 
//               : 'w-96 h-[600px] rounded-lg'
//           } bg-white shadow-2xl z-[60] flex flex-col transition-all duration-300 border border-gray-200`}
//           style={
//             !isMaximized ? {
//               right: `${Math.min(position.x, window.innerWidth - 384)}px`,
//               bottom: `${Math.max(position.y - 600, 20)}px`,
//             } : {}
//           }
//         >
//           <div className={`flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-blue-700 ${isMaximized ? 'rounded-none' : 'rounded-t-lg'}`}>
//             <div className="flex items-center space-x-2">
//               <BiBot className="text-white text-xl" />
//               <h2 className="text-lg font-semibold text-white">Medicura-AI Health Assistant</h2>
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
//                 onClick={clearConversation}
//                 title="Clear conversation"
//               >
//                 <FiTrash2 size={18} />
//               </button>
//               <button
//                 className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
//                 onClick={() => setIsMaximized(!isMaximized)}
//                 title={isMaximized ? "Minimize to window" : "Maximize to fullscreen"}
//               >
//                 {isMaximized ? <FiMinimize2 size={18} /> : <FiMaximize2 size={18} />}
//               </button>
//               <button
//                 className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
//                 onClick={() => setIsOpen(false)}
//                 title="Close chat"
//               >
//                 <FiX size={18} />
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
//             {messages.map((msg, index) => (
//               <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
//                 <div className={`flex items-start space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
//                   <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
//                     msg.role === 'user' 
//                       ? 'bg-blue-500 text-white' 
//                       : 'bg-blue-700 text-white'
//                   }`}>
//                     {msg.role === 'user' ? <BiUser size={16} /> : <BiBot size={16} />}
//                   </div>
//                   <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
//                     msg.role === 'user' 
//                       ? 'bg-blue-500 text-white' 
//                       : 'bg-white text-gray-800 shadow-md border'
//                   }`}>
//                     {renderContent(msg.content)}
//                     {msg.sources && msg.sources.length > 0 && (
//                       <div className="mt-2 pt-2 border-t border-gray-200">
//                         <p className="text-xs text-gray-600 mb-1">Sources:</p>
//                         {msg.sources.map((source, idx) => (
//                           <button
//                             key={idx}
//                             onClick={() => openLink(source.url)}
//                             className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 mb-1"
//                           >
//                             <FiExternalLink size={10} />
//                             <span className="truncate max-w-48">{source.title}</span>
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                     {msg.suggestions && msg.suggestions.length > 0 && (
//                       <div className="mt-2 pt-2 border-t border-gray-200">
//                         <p className="text-xs text-gray-600 mb-1">Quick actions:</p>
//                         {msg.suggestions.slice(0, 2).map((suggestion, idx) => (
//                           <button
//                             key={idx}
//                             onClick={() => handleSendMessage(suggestion)}
//                             className="block text-xs text-blue-600 hover:text-blue-800 mb-1 text-left"
//                           >
//                             • {suggestion}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex items-start space-x-2 mb-4">
//                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
//                   <BiBot size={16} />
//                 </div>
//                 <div className="bg-white px-4 py-2 rounded-lg shadow-md border">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {messages.length <= 1 && (
//             <div className="px-4 py-2 border-t bg-white">
//               <p className="text-xs text-gray-600 mb-2">Quick actions:</p>
//               <div className="flex flex-wrap gap-1">
//                 {quickActions.slice(0, 3).map((action, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleSendMessage(action)}
//                     className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors"
//                   >
//                     {action}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="p-4 border-t bg-white rounded-b-lg">
//             <div className="flex space-x-2">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 disabled={isLoading}
//                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent disabled:bg-gray-100"
//                 placeholder="Ask me about symptoms, drug interactions, medical terms, or health tips..."
//               />
//               <button
//                 onClick={() => handleSendMessage()}
//                 disabled={isLoading || !input.trim()}
//                 className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg hover:from-blue-600 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//               >
//                 <FiSend size={16} />
//               </button>
//             </div>
//             <p className="text-xs text-gray-500 mt-2 text-center">
//               I can help with symptoms, drug interactions, medical terms, and health information
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;










'use client'
import React, { useState, useEffect, useRef } from 'react';
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FiSend, FiMaximize2, FiMinimize2, FiX, FiTrash2, FiExternalLink } from "react-icons/fi";
import { BiBot, BiUser } from "react-icons/bi";

interface Message {
  role: 'user' | 'bot';
  content: string ;
  type?: string;
  sources?: Array<{title: string, url: string}>;
  suggestions?: string[];
  timestamp?: string;
}

// Define types for side effects
interface SideEffect {
  side_effect: string;
  description: string;
}

// Define types for the content structure
interface ChatbotContent {
  common_side_effects?: SideEffect[];
  serious_side_effects?: SideEffect[];
  // Add other possible properties as needed
  [key: string]: unknown; // Use this only if content can have other unknown properties
}

// Type for the content parameter
type ContentType = string | ChatbotContent;


const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [sessionId] = useState<string>(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Dragging state
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const chatbotRef = useRef<HTMLDivElement>(null);

  // Quick action suggestions
  const quickActions = [
    "Analyze my symptoms",
    "Check drug interactions",
    "Explain a medical term",
    "Provide health tips",
    "Find information about a condition"
  ];

  // API base URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

  useEffect(() => {
    // Initialize with welcome message
    if (messages.length === 0) {
      setMessages([{
        role: 'bot',
        content: "Hi! I'm Medicura-AI Health, your personal AI health assistant. I can help you analyze symptoms, check drug interactions, explain medical terms, or answer health-related questions. How can I assist you today?",
        type: 'welcome'
      }]);
    }
    // Set initialized to true after component mounts
    setIsInitialized(true);
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getFallbackResponse = (message: string): string => {
    // Information about Hadiqa Gohar and Medicura-AI Health
    if (message.includes('creator') || message.includes('author') || message.includes('hadiqa') || message.includes('gohar')) {
      return `👋 Hi! I'm the Medicura-AI Health assistant. This innovative health assistant was created by **Hadiqa Gohar**, a talented Student Leader, Web Developer, Agentic AI Developer, UI/UX Specialist, and SEO Expert.

🌟 **About Hadiqa Gohar:**
- Student Leader at Governor Sindh Initiative for AI & Computing
- 1+ years of web development experience
- Winner of a laptop from GIAIC
- 5K+ LinkedIn followers
- Contributor to Modern Python Colab Notebook

💻 **Her Skills:** Next.js, React, TypeScript, Python, TailwindCSS, Figma, and many more!

You can learn more about her on the [About page](/about) or connect with her on [GitHub](https://github.com/HadiqaGohar).`;
    }

    if (message.includes('about') || message.includes('website') || message.includes('medicura') || message.includes('health assistant')) {
      return `Welcome to **Medicura-AI Health**! 🎉

This is a personal AI health assistant created by **Hadiqa Gohar** to help you with health-related questions from the comfort of your home.

✨ **Features:**
- Symptom analysis
- Drug interaction checks
- Medical term explanations
- Personalized health support
- 24/7 health assistance

🚀 **Get Started:**
- Ask about symptoms or medical terms
- Check drug interactions
- Get health tips and information

Need help with anything specific? Just ask!`;
    }

    if (message.includes('help') || message.includes('how') || message.includes('guide')) {
      return `I'm here to help you with Medicura-AI Health! 🤖

**What I can help you with:**
- Analyzing symptoms
- Checking drug interactions
- Explaining medical terms
- Providing health tips
- Information about the creator, Hadiqa Gohar

**Quick Actions:**
- "Analyze my symptoms" - Describe symptoms for analysis
- "Check drug interactions" - Check if medications are safe together
- "Explain a medical term" - Get clear explanations
- "About creator" - Learn about Hadiqa Gohar
- "Health tips" - Get personalized health advice

What would you like to know more about?`;
    }

    // Default response
    return `Hi! I'm the Medicura-AI Health assistant, created by **Hadiqa Gohar**. 

I'm here to help with your health-related questions! Unfortunately, I'm having trouble connecting to my main knowledge base right now, but I can still help with:

- Information about Medicura-AI Health
- Guidance on using our features
- Details about our creator, Hadiqa Gohar
- General health tips

What would you like to know? Try asking about "symptoms", "drug interactions", or "about creator"!`;
  };

  const handleSendMessage = async (messageText?: string) => {
    const messageToSend = messageText || input.trim();
    if (!messageToSend) return;

    const userMessage: Message = { 
      role: 'user', 
      content: messageToSend,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chatbot`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: messageToSend,
          session_id: sessionId
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Extract response content properly
      let botContent: string;
      if (typeof data === 'object' && data !== null) {
        // Try multiple possible fields for the response
        botContent = data.summary || 
                     data.response?.summary || 
                     data.analysis || 
                     data.detailed_analysis || 
                     'I apologize, I need more information to help you properly.';
      } else {
        botContent = String(data || 'Sorry, I couldn\'t process your request.');
      }
      
      const botMessage: Message = { 
        role: 'bot', 
        content: botContent,
        type: data.type || 'general',
        timestamp: data.timestamp || new Date().toISOString()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      
      const fallbackResponse = getFallbackResponse(messageToSend.toLowerCase());
      
      const errorMessage: Message = { 
        role: 'bot',
        content: fallbackResponse,
        timestamp: new Date().toISOString(),
        type: 'fallback'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearConversation = async () => {
    try {
      await fetch(`${API_BASE_URL}/api/chatbot/session/clear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId }),
      });
      
      setMessages([{
        role: 'bot',
        content: "Conversation cleared! How can I help you with your health questions today?",
        type: 'welcome'
      }]);
    } catch (error) {
      console.error('Error clearing conversation:', error);
    }
  };

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const formatMessage = (content: string) => {
    // Simple formatting for better readability
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  };

  const renderContent = (content: ContentType) => {
    if (typeof content === 'string') {
      return (
        <div 
          dangerouslySetInnerHTML={{ __html: formatMessage(content) }}
          className="text-sm"
        />
      );
    }

    // Fallback for object content (e.g., if full JSON is passed)
    if (typeof content === 'object' && content !== null) {
      let formattedContent = '';
      if (content.summary) {
        formattedContent += `<strong>Summary:</strong> ${content.summary}<br><br>`;
      }
      if (content.common_side_effects) {
        formattedContent += `<strong>Common Side Effects:</strong><br>`;
        content.common_side_effects.forEach((effect) => {
          formattedContent += `• ${effect.side_effect}: ${effect.description}<br>`;
        });
      }
      if (content.serious_side_effects) {
        formattedContent += `<br><strong>Serious Side Effects:</strong><br>`;
        content.serious_side_effects.forEach((effect) => {
          formattedContent += `• ${effect.side_effect}: ${effect.description}<br>`;
        });
      }

      return (
        <div 
          dangerouslySetInnerHTML={{ __html: formatMessage(formattedContent || JSON.stringify(content, null, 2)) }}
          className="text-sm"
        />
      );
    }

    return <div className="text-sm">No content available.</div>;
  };

  // Dragging functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (chatbotRef.current) {
      const rect = chatbotRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (chatbotRef.current) {
      const rect = chatbotRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      setDragOffset({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const iconX = e.clientX - dragOffset.x;
        const iconY = e.clientY - dragOffset.y;
        
        // Convert to distance from bottom-right corner
        const newX = window.innerWidth - iconX - 56; // Distance from right edge
        const newY = window.innerHeight - iconY - 56; // Distance from bottom edge
        
        // Keep within screen bounds
        setPosition({
          x: Math.max(0, Math.min(newX, window.innerWidth - 56)),
          y: Math.max(0, Math.min(newY, window.innerHeight - 56))
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        const iconX = touch.clientX - dragOffset.x;
        const iconY = touch.clientY - dragOffset.y;
        
        // Convert to distance from bottom-right corner
        const newX = window.innerWidth - iconX - 56;
        const newY = window.innerHeight - iconY - 56;
        
        setPosition({
          x: Math.max(0, Math.min(newX, window.innerWidth - 56)),
          y: Math.max(0, Math.min(newY, window.innerHeight - 56))
        });
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, dragOffset]);

  return (
    <div>
      {/* Draggable Chatbot Icon with notification dot */}
      {isInitialized && (
        <div 
          ref={chatbotRef}
          className="fixed z-[70]"
          style={{
            right: `${position.x}px`,
            bottom: `${position.y}px`,
          }}
        >
          <div
            className={`w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center cursor-move shadow-lg hover:shadow-xl transition-all duration-300 ${
              isDragging ? 'scale-110' : 'hover:scale-110'
            }`}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onClick={() => {
              if (!isDragging) {
                setIsOpen(!isOpen);
              }
            }}
          >
            <TbMessageChatbotFilled size={30} color='white'/>
          </div>
          {!isOpen && messages.length > 1 && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          )}
        </div>
      )}

      {/* Enhanced Chatbot Interface */}
      {isOpen && (
        <div
          className={`fixed ${
            isMaximized 
              ? 'inset-0' 
              : 'w-96 h-[600px] rounded-lg'
          } bg-white shadow-2xl z-[60] flex flex-col transition-all duration-300 border border-gray-200`}
          style={
            !isMaximized ? {
              right: `${Math.min(position.x, window.innerWidth - 384)}px`,
              bottom: `${Math.max(position.y - 600, 20)}px`,
            } : {}
          }
        >
          {/* Enhanced Header */}
          <div className={`flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-blue-700 ${isMaximized ? 'rounded-none' : 'rounded-t-lg'}`}>
            <div className="flex items-center space-x-2">
              <BiBot className="text-white text-xl" />
              <h2 className="text-lg font-semibold text-white">Medicura-AI Health Assistant</h2>
            </div>
            <div className="flex space-x-2">
              <button
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
                onClick={clearConversation}
                title="Clear conversation"
              >
                <FiTrash2 size={18} />
              </button>
              <button
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
                onClick={() => setIsMaximized(!isMaximized)}
                title={isMaximized ? "Minimize to window" : "Maximize to fullscreen"}
              >
                {isMaximized ? <FiMinimize2 size={18} /> : <FiMaximize2 size={18} />}
              </button>
              <button
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
                onClick={() => setIsOpen(false)}
                title="Close chat"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-start space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.role === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-blue-700 text-white'
                  }`}>
                    {msg.role === 'user' ? <BiUser size={16} /> : <BiBot size={16} />}
                  </div>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white text-gray-800 shadow-md border'
                  }`}>
                    {renderContent(msg.content)}
                    
                    {/* Sources */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-xs text-gray-600 mb-1">Sources:</p>
                        {msg.sources.map((source, idx) => (
                          <button
                            key={idx}
                            onClick={() => openLink(source.url)}
                            className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 mb-1"
                          >
                            <FiExternalLink size={10} />
                            <span className="truncate max-w-48">{source.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {/* Suggestions */}
                    {msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-xs text-gray-600 mb-1">Quick actions:</p>
                        {msg.suggestions.slice(0, 2).map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(suggestion)}
                            className="block text-xs text-blue-600 hover:text-blue-800 mb-1 text-left"
                          >
                            • {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex items-start space-x-2 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  <BiBot size={16} />
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-md border">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 border-t bg-white">
              <p className="text-xs text-gray-600 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-1">
                {quickActions.slice(0, 3).map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(action)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Input Area */}
          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent disabled:bg-gray-100"
                placeholder="Ask me about symptoms, drug interactions, medical terms, or health tips..."
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg hover:from-blue-600 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <FiSend size={16} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              I can help with symptoms, drug interactions, medical terms, and health information
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
