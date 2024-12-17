'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { CardData } from '@/types/dashboard'
import { CardInfo } from './CardInfo'
import { MastercardLogo } from './MastercardLogo'
import { CreditCardSkeleton } from './CreditCardSkeleton'

const card: CardData = {
  balance: 5756,
  cardHolder: "Eddy Cusuma",
  validThru: "12/22",
  cardNumber: "3778 **** **** 1234"
}

function CreditCardContent() {
  return (
    <div className="flex space-x-6 overflow-x-auto pb-4">
      {/* Dark Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="min-w-[380px] h-[220px] rounded-[20px] relative overflow-hidden"
        style={{
          background: 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)'
        }}
      >
        <CardInfo card={card} variant="dark" />
        <MastercardLogo variant="dark" />
      </motion.div>

      {/* Light Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="min-w-[380px] h-[220px] bg-white rounded-[20px] relative overflow-hidden shadow-sm border border-[#E9EDF7]"
      >
        <CardInfo card={card} variant="light" />
        <MastercardLogo variant="light" />
      </motion.div>
    </div>
  )
}

export default function CreditCard(): React.JSX.Element {
  return (
    <div className="bg-white p-6 rounded-[20px]">
      <div className="flex justify-between items-center mb-6">
      </div>
      <Suspense fallback={<CreditCardSkeleton />}>
        <CreditCardContent />
      </Suspense>
    </div>
  )
}