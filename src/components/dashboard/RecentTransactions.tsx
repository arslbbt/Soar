'use client'

import React, { Suspense } from 'react'
import { formatCurrency } from '../../utils/format'
import { Transaction } from '../../types/dashboard'
import Image from 'next/image'

const recentTransactions: Transaction[] = [
  {
    id: '1',
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    type: 'withdrawal',
    icon: '/images/deposit_card.svg'
  },
  {
    id: '2',
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    type: 'deposit',
    icon: '/images/deposit_paypal.svg'
  },
  {
    id: '3',
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    type: 'deposit',
    icon: '/images/dollar.svg'
  }
]

function TransactionItem({ transaction }: { transaction: Transaction }) {
  const isNegative = transaction.amount < 0
  const amountColor = isNegative ? 'text-red-500' : 'text-green-500'
  const amountPrefix = isNegative ? '-' : '+'

  return (
    <div className="flex items-center justify-between py-2 first:pt-0 last:pb-0">
      <div className="flex items-center space-x-4">
        <Image
          src= {transaction.icon}
          alt='credit-card'
          width={55}
          height={55}
          className="object-contain"
        />
        <div>
          <p className="text-[#2B3674] font-medium">{transaction.title}</p>
          <p className="text-sm text-[#A3AED0]">{transaction.date}</p>
        </div>
      </div>
      <p className={`font-medium ${amountColor}`}>
        {amountPrefix}{formatCurrency(Math.abs(transaction.amount))}
      </p>
    </div>
  )
}

function TransactionLoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((index) => (
        <div key={index} className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-100 rounded animate-pulse" />
              <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
          <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
        </div>
      ))}
    </div>
  )
}

function TransactionsContent() {
  return (
    <div className="divide-y divide-gray-100">
      {recentTransactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  )
}

export default function RecentTransactions(): React.JSX.Element {
  return (
    <div className="rounded-[20px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-[#2B3674]">Recent Transaction</h2>
      </div>
      <div className='bg-white p-6 rounded-[20px]'>
        <Suspense fallback={<TransactionLoadingSkeleton />}>
            <TransactionsContent />
        </Suspense>
      </div>
    </div>
  )
} 