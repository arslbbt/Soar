'use client'

import React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import MyCards from '@/components/dashboard/MyCards'
import WeeklyActivity from '@/components/dashboard/WeeklyActivity'
import ExpenseStatistics from '@/components/dashboard/ExpenseStatistics'
import QuickTransfer from '@/components/dashboard/QuickTransfer'
import BalanceHistory from '@/components/dashboard/BalanceHistory'
import RecentTransactions from '@/components/dashboard/RecentTransactions'

export default function DashboardPage(): React.JSX.Element {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <MyCards />
          <RecentTransactions />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <WeeklyActivity />
          <ExpenseStatistics />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <QuickTransfer />
          <BalanceHistory />
        </div>
      </div>
    </DashboardLayout>
  )
} 