'use client'

import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { WeeklyActivityData } from '../../types/dashboard'
import { formatCurrency } from '../../utils/format'

const data: WeeklyActivityData[] = [
  { day: 'Sat', deposit: 200, withdraw: 450 },
  { day: 'Sun', deposit: 110, withdraw: 320 },
  { day: 'Mon', deposit: 260, withdraw: 300 },
  { day: 'Tue', deposit: 350, withdraw: 450 },
  { day: 'Wed', deposit: 230, withdraw: 150 },
  { day: 'Thu', deposit: 230, withdraw: 370 },
  { day: 'Fri', deposit: 320, withdraw: 370 }
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
  const [chartWidth, setChartWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      setChartWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateWidth)
    updateWidth()

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Calculate responsive gaps based on screen width
  const getBarGap = () => {
    if (chartWidth < 640) return 4  // mobile
    if (chartWidth < 1024) return 3  // tablet
    return 2  // desktop
  }

  const getBarCategoryGap = () => {
    if (chartWidth < 640) return 16  // mobile
    if (chartWidth < 1024) return 24  // tablet
    return 30  // desktop
  }

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-primary-dark">Weekly Activity</h2>
        </div>
      </div>

      <div className="h-[322px] w-full bg-white p-6 rounded-2xl">
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
            barGap={getBarGap()}
            barCategoryGap={getBarCategoryGap()}
            className="[&_.recharts-bar-rectangle]:!stroke-none"
          >
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#A3AED0', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#A3AED0', fontSize: 12 }}
              tickFormatter={(value) => value}
              tickCount={6}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />
            <Bar 
              dataKey="withdraw" 
              fill="#000000"
              radius={[20, 20, 0, 0]}
              maxBarSize={12}
            />
            <Bar 
              dataKey="deposit" 
              fill="#396AFF"
              radius={[20, 20, 0, 0]}
              maxBarSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 