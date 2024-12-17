'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { CardData } from '../../types/dashboard'
import { formatCurrency } from '../../utils/format'

function CardLoadingSkeleton() {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      <div className="min-w-[300px] h-[180px] bg-gray-100 animate-pulse rounded-2xl p-6">
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-2">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-6 w-24 bg-gray-200 rounded" />
          </div>
          <div className="flex space-x-1">
            <div className="w-4 h-4 bg-gray-200 rounded-full" />
            <div className="w-4 h-4 bg-gray-200 rounded-full" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-5 w-48 bg-gray-200 rounded" />
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <div className="h-3 w-20 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-3 w-20 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[300px] h-[180px] bg-gray-50 animate-pulse rounded-2xl opacity-60" />
    </div>
  )
}

const card: CardData = {
  balance: 5756,
  cardHolder: "Eddy Cusuma",
  validThru: "12/22",
  cardNumber: "3778 **** **** 1234"
}

function MyCardsContent() {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="min-w-[300px] h-[180px] bg-primary rounded-2xl p-6 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20" />
          <div className="absolute left-0 bottom-0 w-40 h-40 bg-white rounded-full translate-y-20 -translate-x-20" />
        </div>

        <div className="relative">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-sm opacity-80">Balance</p>
              <p className="text-2xl font-semibold">{formatCurrency(card.balance)}</p>
            </div>
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-white/30 rounded-full" />
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg tracking-wider">{card.cardNumber}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs opacity-80">CARD HOLDER</p>
                <p className="font-medium">{card.cardHolder}</p>
              </div>
              <div>
                <p className="text-xs opacity-80">VALID THRU</p>
                <p className="font-medium">{card.validThru}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mirror card with reduced opacity */}
      <div className="min-w-[300px] h-[180px] bg-gray-100 rounded-2xl p-6 opacity-60">
        {/* Mirror card content */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-sm text-gray-600">Balance</p>
            <p className="text-2xl font-semibold text-gray-800">{formatCurrency(card.balance)}</p>
          </div>
          <div className="flex space-x-1">
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
            <div className="w-4 h-4 bg-gray-400 rounded-full" />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-800 tracking-wider">{card.cardNumber}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-600">CARD HOLDER</p>
              <p className="font-medium text-gray-800">{card.cardHolder}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">VALID THRU</p>
              <p className="font-medium text-gray-800">{card.validThru}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MyCards(): React.JSX.Element {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-primary-dark">My Cards</h2>
        <button className="text-primary text-sm">See All</button>
      </div>
      <Suspense fallback={<CardLoadingSkeleton />}>
        <MyCardsContent />
      </Suspense>
    </div>
  )
} 