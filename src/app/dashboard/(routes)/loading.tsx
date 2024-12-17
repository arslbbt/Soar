import React from 'react'
import { CardSkeleton, Skeleton } from '@/components/shared/LoadingSkeleton'

export default function GenericPageLoading(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="h-8 w-48">
        <Skeleton className="h-full w-full" />
      </div>
      <CardSkeleton />
      <CardSkeleton />
    </div>
  )
} 