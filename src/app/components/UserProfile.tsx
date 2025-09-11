'use client'

import { useSession, signOut } from 'next-auth/react'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineUser, AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai'
// import { FiEdit3 } from 'react-icons/fi'
import Image from 'next/image'

export default function UserProfile() {
  const { data: session } = useSession()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!session?.user) return null

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="relative"
      >
        {/* Profile Image - Clean, no background */}
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || 'User'}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : (
            <AiOutlineUser className="text-white text-lg" />
          )}
        </div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
          >
            {/* User Info Header */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || 'User'}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <AiOutlineUser className="text-white text-xl" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 truncate">
                    {session.user.name}
                  </h3>
                  <p className="text-sm text-gray-600 truncate">
                    {session.user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2">
              <motion.button
                whileHover={{ backgroundColor: '#f3f4f6' }}
                onClick={() => {
                  setIsDropdownOpen(false)
                  window.location.href = '/profile'
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-left hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <AiOutlineUser className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">My Profile</p>
                  <p className="text-xs text-gray-500">View and edit profile</p>
                </div>
              </motion.button>

{/*               <motion.button
                whileHover={{ backgroundColor: '#f3f4f6' }}
                onClick={() => {
                  setIsDropdownOpen(false)
                  window.location.href = '/dashboard'
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-left hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <FiEdit3 className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">My Resumes</p>
                  <p className="text-xs text-gray-500">Manage your resumes</p>
                </div>
              </motion.button> */}

              <motion.button
                whileHover={{ backgroundColor: '#f3f4f6' }}
                onClick={() => {
                  setIsDropdownOpen(false)
                  // Navigate to settings page
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-left hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <AiOutlineSetting className="text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Settings</p>
                  <p className="text-xs text-gray-500">Account preferences</p>
                </div>
              </motion.button>

              {/* Divider */}
              <div className="my-2 border-t border-gray-100" />

              {/* Sign Out */}
              <motion.button
                whileHover={{ backgroundColor: '#fef2f2' }}
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-left hover:bg-red-50 transition-colors"
              >
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <AiOutlineLogout className="text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-red-600">Sign Out</p>
                  <p className="text-xs text-red-400">Sign out of your account</p>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
