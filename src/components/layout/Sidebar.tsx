'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import { navigationItems } from './Nav'

interface SidebarProps {
  isMobileMenuOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isMobileMenuOpen, onClose }: SidebarProps): React.JSX.Element {
  const pathname = usePathname()

  return (
    <>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-40",
          "transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <Image
              src="/images/logo.svg"
              alt="Soar Task"
              width={20}
              height={20}
              className="dark:invert"
            />
            <span className="text-xl font-bold text-black">Soar Task</span>
          </div>

          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium transition-colors relative",
                    isActive 
                      ? "text-black before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:h-full before:w-[5px] before:bg-black before:rounded-e-[5px]"
                      : "text-gray hover:bg-gray-light hover:text-black"
                  )}
                >
                  <Image 
                    src={`/images/icons/${item.icon}`} 
                    alt={item.name} 
                    width={20} 
                    height={20} 
                    className={cn(
                      "mr-3 transition-colors",
                      isActive ? "brightness-0" : "brightness-100 group-hover:brightness-0"
                    )}
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}