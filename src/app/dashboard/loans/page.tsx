'use client'

import React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import PageHeader from '@/components/layout/PageHeader'

export default function AccountsPage(): React.JSX.Element {
  return (
    <DashboardLayout>
      <PageHeader title="Loans" />
      <p className="text-gray">Loans page content will go here</p>
    </DashboardLayout>
  )
} 