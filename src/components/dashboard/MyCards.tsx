'use client'

import React, { Suspense } from 'react'
import { CardData } from '../../types/dashboard'
import CreditCard from './cards/CreditCard'
import { CreditCardSkeleton } from './cards/CreditCardSkeleton'

const card: CardData = {
  balance: 5756,
  cardHolder: "Eddy Cusuma",
  validThru: "12/22",
  cardNumber: "3778 **** **** 1234"
}

export default function MyCards(): React.JSX.Element {
  return (
    <div className="rounded-[20px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-[#2B3674]">My Cards</h2>
        <button className="text-sm text-[#4318FF]">See All</button>
      </div>
      <Suspense fallback={<CreditCardSkeleton />}>
        <CreditCard card={card} />
      </Suspense>
    </div>
  )
} 