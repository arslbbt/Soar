import React from 'react'
import { Skeleton } from '@/components/shared/LoadingSkeleton'

export default function DashboardLoading(): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        {/* MyCards Loading */}
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
        
        {/* WeeklyActivity Loading */}
        <div className="bg-white p-6 rounded-2xl">
          <Skeleton className="h-6 w-40 mb-6" />
          <Skeleton className="h-[200px] w-full" />
        </div>
      </div>

      <div className="space-y-6">
        {/* Other components loading states */}
        <div className="bg-white p-6 rounded-2xl">
          <Skeleton className="h-6 w-40 mb-6" />
          <Skeleton className="h-[180px] w-full" />
        </div>
        <div className="bg-white p-6 rounded-2xl">
          <Skeleton className="h-6 w-40 mb-6" />
          <Skeleton className="h-[150px] w-full" />
        </div>
      </div>
    </div>
  )
} 