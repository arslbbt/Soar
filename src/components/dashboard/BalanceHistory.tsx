'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from 'recharts'
import { formatCurrency } from '../../utils/format'

const data = [
  { date: 'Jan', balance: 5000 },
  { date: 'Feb', balance: 7000 },
  { date: 'Mar', balance: 6000 },
  { date: 'Apr', balance: 9000 },
  { date: 'May', balance: 8500 },
  { date: 'Jun', balance: 11000 },
  { date: 'Jul', balance: 5000 },
  { date: 'Aug', balance: 7000 },
  { date: 'Sep', balance: 6000 },
  { date: 'Oct', balance: 9000 },
  { date: 'Nov', balance: 8500 },
  { date: 'Dec', balance: 11000 }
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
        <p className="text-sm text-gray-600">
          {formatCurrency(payload[0].value)}
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

      <div className="h-[276px] w-full bg-white p-6 rounded-2xl">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4318FF" stopOpacity={0.2}/>
                <stop offset="100%" stopColor="#4318FF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#A3AED0', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#A3AED0', fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
              tickCount={5}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={false}
            />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#4318FF"
              strokeWidth={2}
              fill="url(#colorBalance)"
              dot={false}
              activeDot={false}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#4318FF"
              strokeWidth={2}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 