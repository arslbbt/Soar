'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Input from '@/components/ui/Input'
import { cn } from '@/utils/cn'
import toast from 'react-hot-toast'
import Loader from '@/components/shared/Loader'
import { useYupForm } from '@/hooks/useYupForm'
import { settingsSchema, type SettingsFormData } from '@/schemas/settingsValidation'
import ImageUpload from '@/components/ui/ImageUpload'

const tabs = [
  { id: 'edit', label: 'Edit Profile' },
  { id: 'preferences', label: 'Preferences' },
  { id: 'security', label: 'Security' }
]

export default function SettingsPage(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState('edit')
  const [isLoading, setIsLoading] = useState(false)
  const [profileImage, setProfileImage] = useState('/images/avatars/person-5.svg')

  const { formData, errors, handleChange, validateForm } = useYupForm<SettingsFormData>(
    settingsSchema,
    {
      name: 'Charlene Reed',
      username: 'Charlene Reed',
      email: 'charlenereed@gmail.com',
      dob: '25 January 1990',
      presentAddress: 'San Jose, California, USA',
      permanentAddress: 'San Jose, California, USA',
      postalCode: '45962',
      city: 'San Jose',
      country: 'USA'
    }
  )

  const handleSave = async () => {
    const isValid = await validateForm();
    if (!isValid) {
      toast.error('Please fix the form errors before saving');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Settings saved successfully!');
    } catch (error) {
      toast.error('Failed to save settings. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = async (file: File) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      toast.success('Profile picture updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile picture');
    }
  };

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
                <ImageUpload
                  currentImage={profileImage}
                  onImageChange={handleImageChange}
                />
              </div>

              {/* Form Column */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Your Name"
                    value={formData.name}
                    error={errors.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                  <Input
                    label="User Name"
                    value={formData.username}
                    error={errors.username}
                    onChange={(e) => handleChange('username', e.target.value)}
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    error={errors.email}
                    onChange={(e) => handleChange('email', e.target.value)}
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
                    error={errors.dob}
                    onChange={(e) => handleChange('dob', e.target.value)}
                  />
                  <Input
                    label="Present Address"
                    value={formData.presentAddress}
                    error={errors.presentAddress}
                    onChange={(e) => handleChange('presentAddress', e.target.value)}
                  />
                  <Input
                    label="Permanent Address"
                    value={formData.permanentAddress}
                    error={errors.permanentAddress}
                    onChange={(e) => handleChange('permanentAddress', e.target.value)}
                  />
                  <Input
                    label="City"
                    value={formData.city}
                    error={errors.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                  />
                  <Input
                    label="Postal Code"
                    value={formData.postalCode}
                    error={errors.postalCode}
                    onChange={(e) => handleChange('postalCode', e.target.value)}
                  />
                  <Input
                    label="Country"
                    value={formData.country}
                    error={errors.country}
                    onChange={(e) => handleChange('country', e.target.value)}
                  />
                </div>

                {/* Save Button */}
                <div className="mt-8 flex justify-end">
                  <button 
                    disabled={isLoading}
                    className="w-full md:w-auto px-16 py-3 bg-black text-white rounded-2xl font-medium
                    hover:bg-gray-800 active:bg-gray-900 transform active:scale-95 
                    transition-all duration-200 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 
                    disabled:cursor-not-allowed"
                    onClick={handleSave}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <Loader size="sm" color="white" />
                        <span>Saving...</span>
                      </div>
                    ) : (
                      'Save'
                    )}
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