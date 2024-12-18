'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Input from '@/components/ui/Input'
import { cn } from '@/utils/cn'

const tabs = [
  { id: 'edit', label: 'Edit Profile' },
  { id: 'preferences', label: 'Preferences' },
  { id: 'security', label: 'Security' }
]

export default function SettingsPage(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState('edit')
  const [formData, setFormData] = useState({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    dob: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    postalCode: '45962',
    city: 'San Jose',
    country: 'USA'
  })

  return (
    <DashboardLayout>
      <div className="bg-white rounded-[20px] p-6">
        {/* Tabs */}
        <div className="flex space-x-8 border-b border-[#E9EDF7]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "pb-4 text-sm font-medium relative",
                activeTab === tab.id
                  ? "text-black border-b-2 border-black"
                  : "text-[#718EBF] hover:text-black"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'edit' && (
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image Column */}
              <div className="md:w-[200px] flex-shrink-0 flex justify-center">
                <div className="relative w-24 h-24">
                  <Image
                    src="/images/avatars/person-5.svg"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 p-2 bg-black rounded-full">
                    <Image 
                      src="/images/icons/pencil.svg" 
                      alt="Edit" 
                      width={16} 
                      height={16} 
                    />
                  </button>
                </div>
              </div>

              {/* Form Column */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    label="User Name"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <Input
                    label="Password"
                    type="password"
                    value="********"
                    onChange={() => {}}
                  />
                  <Input
                    label="Date of Birth"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  />
                  <Input
                    label="Present Address"
                    value={formData.presentAddress}
                    onChange={(e) => setFormData({ ...formData, presentAddress: e.target.value })}
                  />
                  <Input
                    label="Permanent Address"
                    value={formData.permanentAddress}
                    onChange={(e) => setFormData({ ...formData, permanentAddress: e.target.value })}
                  />
                  <Input
                    label="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                  <Input
                    label="Postal Code"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  />
                  <Input
                    label="Country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                </div>

                {/* Save Button */}
                <div className="mt-8 flex justify-end">
                  <button className="w-full md:w-auto px-16 py-3 bg-black text-white rounded-2xl font-medium">
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <p className="text-gray-500">Preferences settings will go here</p>
          )}

          {activeTab === 'security' && (
            <p className="text-gray-500">Security settings will go here</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
} 