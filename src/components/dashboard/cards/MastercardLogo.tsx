interface MastercardLogoProps {
    variant: 'light' | 'dark'
  }
  import React from 'react'

  export function MastercardLogo({ variant }: MastercardLogoProps) {
    return (
      <div className="absolute bottom-6 right-6">
        <div className="flex -space-x-3 opacity-60">
          <div className={`w-7 h-7 rounded-full ${
            variant === 'dark' ? 'bg-white' : 'bg-[#1B2559]'
          }`} />
          <div className={`w-7 h-7 rounded-full ${
            variant === 'dark' ? 'bg-white' : 'bg-[#1B2559]'
          }`} />
        </div>
      </div>
    )
  }