'use client'

import React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import PageHeader from '@/components/layout/PageHeader'

export default function AccountsPage(): React.JSX.Element {
  return (
    <DashboardLayout>
      <PageHeader title="Settings" />
      <p className="text-gray">Settings page content will go here</p>
    </DashboardLayout>
  )
} 