'use client'

import React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import PageHeader from '@/components/layout/PageHeader'

export default function TransactionsPage(): React.JSX.Element {
  return (
    <DashboardLayout>
      <PageHeader title="Transactions" />
      <p className="text-gray">Transactions page content will go here</p>
    </DashboardLayout>
  )
} 