'use client'

import React from 'react'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps): React.JSX.Element {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded-md ${className}`}
    />
  )
}

export function CardSkeleton(): React.JSX.Element {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-16" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  )
}