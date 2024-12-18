'use client'

import React from 'react'
import { ExpenseData } from '../../types/dashboard'

const data: ExpenseData[] = [
  { name: 'Fun', value: 30, color: '#FC7900', startAngle: -45, endAngle: 65 },
  { name: 'Bill', value: 15, color: '#F6866A', startAngle: 65, endAngle: 119 },
  { name: 'Others', value: 20, color: '#396AFF', startAngle: 119, endAngle: 191 },
  { name: 'Investment', value: 35, color: '#232323', startAngle: 191, endAngle: 315 }
]

const PieSlice = ({ startAngle, endAngle, color, label }: {
  startAngle: number
  endAngle: number
  color: string
  label?: { text: string; percentage: number }
}) => {
  const centerX = 100
  const centerY = 100
  const radius = 85
  const gap = 3 // Gap between sections
  
  const startRad = startAngle * (Math.PI / 180)
  const endRad = endAngle * (Math.PI / 180)
  
  // Calculate points with gap
  const x1 = centerX + (radius - gap) * Math.cos(startRad)
  const y1 = centerY + (radius - gap) * Math.sin(startRad)
  const x2 = centerX + (radius - gap) * Math.cos(endRad)
  const y2 = centerY + (radius - gap) * Math.sin(endRad)
  
  // Create separate arc with gap
  const arcRadius = radius - gap
  const d = [
    `M ${x1} ${y1}`,
    `A ${arcRadius} ${arcRadius} 0 ${endAngle - startAngle <= 180 ? '0' : '1'} 1 ${x2} ${y2}`,
    `L ${centerX + gap * Math.cos((endRad + startRad) / 2)} ${centerY + gap * Math.sin((endRad + startRad) / 2)}`,
    'Z'
  ].join(' ')

  const labelAngle = (startAngle + (endAngle - startAngle) / 2) * (Math.PI / 180)
  const labelRadius = radius * 0.65
  const labelX = centerX + labelRadius * Math.cos(labelAngle)
  const labelY = centerY + labelRadius * Math.sin(labelAngle)

  return (
    <g>
      <path 
        d={d} 
        fill={color}
        stroke="white"
        strokeWidth="2"
      />
      {label && (
        <>
          <text
            x={labelX}
            y={labelY + 15}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            className="text-[10px]"
          >
            {label.percentage}%
          </text>
          <text
            x={labelX}
            y={labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            className="text-[10px] font-medium"
          >
            {label.text}
          </text>

        </>
      )}
    </g>
  )
}

export default function ExpenseStatistics(): React.JSX.Element {
  return (
    <div className="">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-primary-dark">Expense Statistics</h2>
      </div>

      <div className="flex justify-center items-center h-[322px] w-full bg-white rounded-2xl">
      <div className="relative w-[300px] h-[300px]">

        <svg width="200" height="200" viewBox="0 0 200 200"
            className="w-full h-full"
        >
          <circle 
            cx="100" 
            cy="100" 
            r="88" 
            fill="white" 
          />
          {data.map((slice, index) => (
            <PieSlice
              key={index}
              startAngle={slice.startAngle}
              endAngle={slice.endAngle}
              color={slice.color}
              label={{ text: slice.name, percentage: slice.value }}
            />
          ))}
        </svg>
        </div>
      </div>
    </div>
  )
} 