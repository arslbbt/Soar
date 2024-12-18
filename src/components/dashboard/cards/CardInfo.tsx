'use client'

import React from 'react'
import { CardData } from '../../../types/dashboard'
import Image from 'next/image'

interface CardInfoProps {
    card: CardData
    variant: 'light' | 'dark'
}

export function CardInfo({ card, variant }: CardInfoProps) {
    const textColor = variant === 'dark'
        ? { primary: 'text-white', secondary: 'text-white/80' }
        : { primary: 'text-[#1B2559]', secondary: 'text-[#707EAE]' }
    const chipImage = variant === 'dark' ? '/images/chip_card.svg' : '/images/chip_card_light.svg'
    const masterCardLogo = variant === 'dark' ? '/images/mastercard_light.svg' : '/images/mastercard_dark.svg'

    const labelStyle = `text-xs ${textColor.secondary} uppercase tracking-wider font-medium`
    const valueStyle = `text-sm ${textColor.primary} mt-0.5 font-medium`
    const footerStyle = variant === 'dark' 
        ? { background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)' }
        : { background: 'transparent' }

    return (
        <div className="h-full flex flex-col">
            <div className="p-4 md:p-6 space-y-6 md:space-y-8 flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <p className={`text-sm ${textColor.secondary} uppercase`}>Balance</p>
                        <p className={`text-2xl font-semibold ${textColor.primary} mt-1`}>
                            ${card.balance.toLocaleString()}
                        </p>
                    </div>
                    <div className="relative w-10 h-10">
                        <Image
                            src={chipImage}
                            alt='credit-card'
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-end w-3/4">
                    <div>
                        <p className={labelStyle}>CARD HOLDER</p>
                        <p className={valueStyle}>{card.cardHolder}</p>
                    </div>
                    <div>
                        <p className={labelStyle}>VALID THRU</p>
                        <p className={valueStyle}>{card.validThru}</p>
                    </div>
                </div>
            </div>

            <div style={footerStyle} className="mt-auto">
                <div className="flex items-center justify-between p-4 md:p-6">
                    <p className={`text-base md:text-[18px] ${textColor.primary} tracking-[0.2em] font-medium`}>
                        {card.cardNumber}
                    </p>
                    <Image
                        src={masterCardLogo}
                        alt='credit-card'
                        width={40}
                        height={30}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}