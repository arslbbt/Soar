'use client'

import React, { useState, Suspense } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import GenericPageLoading from '@/app/dashboard/(routes)/loading'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      <div className="flex-1 flex flex-col overflow-hidden lg:pl-64">
        <Header 
          onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Suspense fallback={<GenericPageLoading />}>
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  )
} 