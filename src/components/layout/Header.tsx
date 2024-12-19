'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { MagnifyingGlassIcon, Cog6ToothIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { navigationItems } from './Nav'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps): React.JSX.Element {
  const pathname = usePathname()
  
  const currentPage = navigationItems.find(item => item.href === pathname)?.name || 'Overview'

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="lg:hidden p-2 -ml-2 text-black hover:bg-gray-100 rounded-lg"
            onClick={onMenuClick}
            aria-label="Toggle menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-semibold text-primary-dark">{currentPage}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-background rounded-full px-4 py-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-secondary" />
            <input
              type="text"
              placeholder="Search for something"
              className="bg-transparent border-none outline-none ml-2 w-48"
            />
          </div>
          
          <button 
            type="button"
            className="p-2 hover:bg-background rounded-full transition-colors"
            aria-label="Settings"
          >
            <Cog6ToothIcon className="h-6 w-6 text-secondary" />
          </button>

          <button 
            type="button"
            className="p-2 hover:bg-background rounded-full transition-colors"
            aria-label="Settings"
          >
            <Image src="/images/icons/bell.svg" alt="bell" width={20} height={20} />
          </button>
          
          <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
            <Image
              src="/images/avatars/person-5.svg"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover cursor-pointer"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
} 