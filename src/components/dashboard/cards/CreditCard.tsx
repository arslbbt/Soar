'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { CardData } from '@/types/dashboard'
import { CardInfo } from './CardInfo'
import { CreditCardSkeleton } from './CreditCardSkeleton'

const card: CardData = {
  balance: 5756,
  cardHolder: "Eddy Cusuma",
  validThru: "12/22",
  cardNumber: "3778 **** **** 1234"
}

function CreditCardContent() {
  return (
    <div className="relative">
      <div className="flex space-x-4 md:space-x-6 overflow-x-auto no-scrollbar pb-4">
        {/* Dark Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="min-w-[300px] md:min-w-[350px] lg:min-w-[330px] xl:min-w-[360px] h-[245px] md:h-[245px] rounded-[20px] relative overflow-hidden"
          style={{
            background: 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)'
          }}
        >
          <CardInfo card={card} variant="dark" />
        </motion.div>

        {/* Light Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="min-w-[300px] md:min-w-[350px] lg:min-w-[360px] xl:min-w-[360px] h-[245px] md:h-[245px] bg-white rounded-[20px] relative overflow-hidden shadow-sm border border-[#E9EDF7]"
        >
          <CardInfo card={card} variant="light" />
        </motion.div>
      </div>
    </div>
  )
}

export default function CreditCard(): React.JSX.Element {
  return (
    <Suspense fallback={<CreditCardSkeleton />}>
      <CreditCardContent />
    </Suspense>
  )
}