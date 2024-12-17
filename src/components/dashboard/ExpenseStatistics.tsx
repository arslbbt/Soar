'use client'

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { ExpenseData } from '../../types/dashboard'
import { formatCurrency } from '../../utils/format'

const data: ExpenseData[] = [
  { name: 'Shopping', value: 1200, color: '#4318FF' },
  { name: 'Bills', value: 900, color: '#05CD99' },
  { name: 'Entertainment', value: 600, color: '#FFB547' },
  { name: 'Others', value: 300, color: '#FF5B5B' }
]

const CustomLegend = ({ payload }: any) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {payload.map((entry: any) => (
        <div key={entry.value} className="flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <div>
            <p className="text-sm font-medium text-primary-dark">{entry.value}</p>
            <p className="text-xs text-secondary">{formatCurrency(data.find(d => d.name === entry.value)?.value || 0)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ExpenseStatistics(): React.JSX.Element {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-primary-dark">Expense Statistics</h2>
        <p className="text-sm text-secondary">Monthly expenses by category</p>
      </div>

      <div className="h-[300px]">
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
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 