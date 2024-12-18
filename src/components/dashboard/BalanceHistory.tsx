'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { formatCurrency } from '../../utils/format'

const data = [
  { date: 'Jan', balance: 5000 },
  { date: 'Feb', balance: 7000 },
  { date: 'Mar', balance: 6000 },
  { date: 'Apr', balance: 9000 },
  { date: 'May', balance: 8500 },
  { date: 'Jun', balance: 11000 }
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
        <p className="text-sm text-gray-600">
          Balance: {formatCurrency(payload[0].value)}
        </p>
      </div>
    )
  }
  return null
}

export default function BalanceHistory(): React.JSX.Element {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-primary-dark">Balance History</h2>
        </div>
      </div>

      <div className="h-[300px] w-full bg-white p-6 rounded-2xl">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#A3AED0' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#A3AED0' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#4318FF"
              strokeWidth={2}
              dot={{ fill: '#4318FF', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 