import React, { InputHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export default function Input({ 
  label, 
  error, 
  className, 
  ...props 
}: InputProps): React.JSX.Element {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-[#2B3674]">
        {label}
      </label>
      <input
        className={cn(
          "px-4 py-3 rounded-2xl border text-[#718EBF] border-[#E9EDF7] text-sm focus:outline-none focus:ring-2 focus:ring-[#718EBF]",
          "placeholder:text-[#718EBF]",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  )
} 