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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 xl:col-span-8 ">
            <MyCards />
          </div>
          <div className="lg:col-span-5 xl:col-span-4">
            <RecentTransactions />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 xl:col-span-8 ">
            <WeeklyActivity />
          </div>
          <div className="lg:col-span-5 xl:col-span-4">
            <ExpenseStatistics />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 xl:col-span-5 ">
            <QuickTransfer />
          </div>
          <div className="lg:col-span-7 xl:col-span-7">
            <BalanceHistory />
          </div>
        </div>


      </div>
    </DashboardLayout>
  )
} 