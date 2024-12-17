'use client'

import React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import MyCards from '@/components/dashboard/MyCards'
import WeeklyActivity from '@/components/dashboard/WeeklyActivity'
import ExpenseStatistics from '@/components/dashboard/ExpenseStatistics'
import QuickTransfer from '@/components/dashboard/QuickTransfer'
import BalanceHistory from '@/components/dashboard/BalanceHistory'

export default function DashboardPage(): React.JSX.Element {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <MyCards />
          <WeeklyActivity />
        </div>
        <div className="space-y-6">
          <ExpenseStatistics />
          <QuickTransfer />
          <BalanceHistory />
        </div>
      </div>
    </DashboardLayout>
  )
} 