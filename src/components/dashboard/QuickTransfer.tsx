'use client'

import React, { useState, useRef, useEffect } from 'react'
import { QuickTransferUser } from '../../types/dashboard'
import Image from 'next/image'
import toast from 'react-hot-toast';
import Loader from '../shared/Loader';

const users: QuickTransferUser[] = [
  { id: '1', name: 'Livia Bator', role: 'CEO', avatar: '/images/avatars/person-1.svg' },
  { id: '2', name: 'Randy Press', role: 'Director', avatar: '/images/avatars/person-2.svg' },
  { id: '3', name: 'Workman', role: 'Designer', avatar: '/images/avatars/person-3.svg' },
  { id: '4', name: 'Sarah Taylor', role: 'Marketing', avatar: '/images/avatars/person-4.svg' },
  { id: '5', name: 'Workman', role: 'Marketing', avatar: '/images/avatars/person-3.svg' }
]

export default function QuickTransfer(): React.JSX.Element {
  const [selectedUser, setSelectedUser] = useState<string>('')
  const [amount, setAmount] = useState<string>('525.50')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)
  const [isLoading, setIsLoading] = useState(false);

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setShowLeftButton(container.scrollLeft > 0)
      
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      )
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      checkScroll()
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll)
      }
    }
  }, [])

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 200
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 200
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleTransfer = async () => {
    if (!selectedUser) {
      toast.error('Please select a recipient');
      return;
    }

    if (!amount || isNaN(Number(amount))) {
      toast.error('Please enter a valid amount');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Transfer successful!');
      setAmount('0.00');
      setSelectedUser('');
    } catch (error) {
      toast.error('Transfer failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-primary-dark">Quick Transfer</h2>
      </div>

      <div className="relative w-full bg-white p-6 rounded-2xl h-[276px] flex flex-col justify-center">
        <div 
          ref={scrollContainerRef}
          className="flex space-x-3 mb-6 overflow-x-auto no-scrollbar"
        >
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user.id)}
              className="flex flex-col items-center min-w-[90px]"
            >
              <div className="relative w-[70px] h-[70px] mb-2">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  fill
                  className="rounded-full object-cover"
                />
                {selectedUser === user.id && (
                  <div className="absolute inset-0 ring-2 ring-primary rounded-full" />
                )}
              </div>
              <p className={`text-sm text-[#2B3674] ${ user.id == '1' ? 'font-bold' : 'font-medium'}`}>{user.name}</p>
              <p className={`text-xs ${ user.id == '1' ? 'font-bold text-[#718EBF]' : 'font-medium text-[#718EBF]'}`}>{user.role}</p>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {showLeftButton && (
          <button 
            onClick={scrollToPrev}
            className="absolute left-0 top-[45%] transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-gray-50 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        {showRightButton && (
          <button 
            onClick={scrollToNext}
            className="absolute right-0 top-[45%] transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-gray-50 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        <div className="flex items-center justify-between">
          <label className="text-[#718EBF] text-[16px] mr-3">Write Amount</label>

          <div className="relative flex items-center w-4/6">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-[50px] w-full rounded-full bg-[#F3F6FC] text-[#718EBF] text-base focus:outline-none focus:ring-0 pl-3"
            />
            <button 
              disabled={isLoading}
              className="absolute right-0 flex items-center justify-center h-full w-32 
              bg-black rounded-full text-white font-medium 
              hover:bg-gray-800 active:bg-gray-900 
              transform active:scale-95 transition-all duration-200 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
              disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleTransfer}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <Loader size="md" color="white" />
                </div>
              ) : (
                <>
                  <span>Send</span>
                  <Image src="/images/icons/send.svg" alt="send" width={20} height={20} className='ml-3'/>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
} 