import React from 'react'
import { Skeleton } from '@/components/shared/LoadingSkeleton'

export default function DashboardLoading(): React.JSX.Element {
  return (
    <div className="flex flex-col space-y-6">
      {/* First Row Loading */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            <Skeleton className="min-w-[300px] h-[180px]" />
            <Skeleton className="min-w-[300px] h-[180px] opacity-60" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl">
          <Skeleton className="h-6 w-40 mb-6" />
          <div className="space-y-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        </div>
      </div>

      {/* Second Row Loading */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl">
          <Skeleton className="h-6 w-40 mb-6" />
          <Skeleton className="h-[300px] w-full" />
        </div>
        <div className="bg-white p-6 rounded-2xl">
          <Skeleton className="h-6 w-40 mb-6" />
          <Skeleton className="h-[300px] w-full" />
        </div>
      </div>

      {/* Third Row Loading */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl">
          <Skeleton className="h-6 w-40 mb-6" />
          <Skeleton className="h-[200px] w-full" />
        </div>
        <div className="bg-white p-6 rounded-2xl">
          <Skeleton className="h-6 w-40 mb-6" />
          <Skeleton className="h-[200px] w-full" />
        </div>
      </div>
    </div>
  )
} 