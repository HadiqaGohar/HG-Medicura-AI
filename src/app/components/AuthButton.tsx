// src/app/components/AuthButton.tsx
'use client'

import { useSession, signIn } from 'next-auth/react'
import { motion } from 'framer-motion'
import { AiOutlineLogin } from 'react-icons/ai'
import UserProfile from './UserProfile'

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
    )
  }

  if (session?.user) {
    return <UserProfile />
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200"
    >
      <AiOutlineLogin className="text-lg" />
      <span className="hidden sm:inline">Sign In</span>
    </motion.button>
  )
}