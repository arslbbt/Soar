
import React from 'react'

export function CreditCardSkeleton() {
    return (
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {[1, 2].map((index) => (
          <div
            key={index}
            className={`min-w-[380px] h-[220px] ${
              index === 1 ? 'bg-gray-100' : 'bg-gray-50'
            } animate-pulse rounded-[20px] p-6`}
          >
            <div className="flex justify-between items-start mb-8">
              <div className="space-y-2">
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="h-6 w-24 bg-gray-200 rounded" />
              </div>
              <div className="w-12 h-8 bg-gray-200 rounded" />
            </div>
            <div className="mt-auto space-y-6">
              <div className="h-5 w-48 bg-gray-200 rounded" />
              <div className="flex justify-between">
                <div className="space-y-1">
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                </div>
                <div className="space-y-1">
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }