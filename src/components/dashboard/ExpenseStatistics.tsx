'use client'

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { ExpenseData } from '../../types/dashboard'

const data: ExpenseData[] = [
  { name: 'Shopping', value: 1200, color: '#4318FF' },
  { name: 'Bills', value: 900, color: '#05CD99' },
  { name: 'Entertainment', value: 600, color: '#FFB547' },
  { name: 'Others', value: 300, color: '#FF5B5B' }
]

export default function ExpenseStatistics(): React.JSX.Element {
  return (
    <div className="">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-primary-dark">Expense Statistics</h2>
      </div>

      <div className="h-[322px] w-full bg-white p-6 rounded-2xl">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 