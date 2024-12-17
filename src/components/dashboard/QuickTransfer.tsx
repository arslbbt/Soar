'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { QuickTransferUser } from '../../types/dashboard'
import { cn } from '../../utils/cn'
import Image from 'next/image'

const users: QuickTransferUser[] = [
  { id: '1', name: 'Thomas Smith', role: 'Designer', avatar: '/images/avatars/person-1.svg' },
  { id: '2', name: 'Jessica Wilson', role: 'Developer', avatar: '/images/avatars/person-2.svg' },
  { id: '3', name: 'David Moore', role: 'Manager', avatar: '/images/avatars/person-3.svg' },
  { id: '4', name: 'Sarah Taylor', role: 'Marketing', avatar: '/images/avatars/person-4.svg' }
]

const amounts = [10, 50, 100, 200, 500, 1000]

export default function QuickTransfer(): React.JSX.Element {
  const [selectedUser, setSelectedUser] = useState<string>('')
  const [selectedAmount, setSelectedAmount] = useState<number>(0)

  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-primary-dark">Quick Transfer</h2>
        <p className="text-sm text-secondary">Send money quickly to your contacts</p>
      </div>

      {/* Users */}
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {users.map((user) => (
          <motion.button
            key={user.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedUser(user.id)}
            className={cn(
              "flex flex-col items-center space-y-2 min-w-[100px] p-3 rounded-xl transition-colors",
              selectedUser === user.id ? "bg-primary/10" : "hover:bg-gray-50"
            )}
          >
            <div className="relative w-12 h-12">
              <Image
                src={user.avatar}
                alt={user.name}
                fill
                className="rounded-full object-cover"
              />
              {selectedUser === user.id && (
                <div className="absolute -right-1 -top-1 w-4 h-4 bg-primary rounded-full border-2 border-white" />
              )}
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-primary-dark truncate max-w-[90px]">
                {user.name}
              </p>
              <p className="text-xs text-secondary truncate max-w-[90px]">
                {user.role}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Amount Selection */}
      <div className="mt-6">
        <p className="text-sm font-medium text-primary-dark mb-3">Select Amount</p>
        <div className="grid grid-cols-3 gap-3">
          {amounts.map((amount) => (
            <motion.button
              key={amount}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedAmount(amount)}
              className={cn(
                "py-2 px-4 rounded-xl text-sm font-medium transition-colors",
                selectedAmount === amount 
                  ? "bg-primary text-white"
                  : "bg-gray-50 text-primary-dark hover:bg-gray-100"
              )}
            >
              ${amount}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Transfer Button */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={cn(
          "w-full mt-6 py-3 rounded-xl text-white font-medium transition-opacity",
          selectedUser && selectedAmount 
            ? "bg-primary opacity-100"
            : "bg-primary opacity-50 cursor-not-allowed"
        )}
        disabled={!selectedUser || !selectedAmount}
      >
        Transfer Now
      </motion.button>
    </div>
  )
} 