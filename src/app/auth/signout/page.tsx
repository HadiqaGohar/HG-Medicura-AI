// src/app/auth/signout/page.tsx
'use client'

import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FiLogOut, FiHome } from 'react-icons/fi'

export default function SignOut() {
  const { data: session } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await signOut({ 
        callbackUrl: '/',
        redirect: true 
      })
    } catch (error) {
      console.error('Sign out error:', error)
      setLoading(false)
    }
  }

  const handleGoHome = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <FiLogOut className="text-white text-2xl" />
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign Out</h1>
          <p className="text-gray-600">
            {session?.user ? 
              `Are you sure you want to sign out, ${session.user.name?.split(' ')[0]}?` :
              'You are not currently signed in'
            }
          </p>
        </div>

        <div className="space-y-3">
          {session?.user ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSignOut}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg px-6 py-3 font-medium hover:from-red-600 hover:to-orange-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
              ) : (
                <FiLogOut className="w-5 h-5" />
              )}
              <span>{loading ? 'Signing out...' : 'Yes, Sign Out'}</span>
            </motion.button>
          ) : null}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoHome}
            className="w-full flex items-center justify-center gap-3 bg-gray-100 text-gray-700 rounded-lg px-6 py-3 font-medium hover:bg-gray-200 transition-all duration-200"
          >
            <FiHome className="w-5 h-5" />
            <span>Go to Home</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}