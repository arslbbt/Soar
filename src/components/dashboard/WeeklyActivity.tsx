'use client'

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { WeeklyActivityData } from '../../types/dashboard'
import { formatCurrency } from '../../utils/format'

const data: WeeklyActivityData[] = [
  { day: 'Mon', deposit: 2400, withdraw: 1400 },
  { day: 'Tue', deposit: 1398, withdraw: 800 },
  { day: 'Wed', deposit: 9800, withdraw: 2400 },
  { day: 'Thu', deposit: 3908, withdraw: 2000 },
  { day: 'Fri', deposit: 4800, withdraw: 3800 },
  { day: 'Sat', deposit: 3800, withdraw: 2400 },
  { day: 'Sun', deposit: 4300, withdraw: 2100 }
]

interface CustomTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center space-x-2">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">
              {entry.name === 'deposit' ? 'Deposit' : 'Withdraw'}: {formatCurrency(entry.value)}
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function WeeklyActivity(): React.JSX.Element {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-primary-dark">Weekly Activity</h2>
        </div>
      </div>

      <div className="h-[300px] w-full bg-white p-6 rounded-2xl">
        <div className="flex items-center justify-end space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#396AFF]" />
              <span className="text-sm text-secondary">Deposit</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-black" />
              <span className="text-sm text-secondary">Withdraw</span>
            </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          
          <BarChart
            data={data}
            margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
          >
            <XAxis 
              dataKey="day" 
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
            <Bar 
              dataKey="deposit" 
              fill="#396AFF" 
              radius={[4, 4, 0, 0]}
              maxBarSize={45}
            />
            <Bar 
              dataKey="withdraw" 
              fill="#000000" 
              radius={[4, 4, 0, 0]}
              maxBarSize={45}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 