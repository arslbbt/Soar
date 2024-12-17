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

    const labelStyle = `text-xs ${textColor.secondary} uppercase tracking-wider font-medium`
    const valueStyle = `text-sm ${textColor.primary} mt-0.5 font-medium`

    return (
        <div className="h-full flex flex-col p-6">
            <div className="flex justify-between items-start">
                <div>
                    <p className={`text-sm ${textColor.secondary} uppercase`}>Balance</p>
                    <p className={`text-2xl font-semibold ${textColor.primary} mt-1`}>
                        ${card.balance.toLocaleString()}
                    </p>
                </div>
                <div className="relative w-10 h-10">
                    <Image
                        src={'/images/chip_card.svg'}
                        alt='credit-card'
                        fill
                        className=" object-cover"
                    />
                </div>
            </div>
            <div className="flex justify-between items-end w-3/4 mt-5">
                <div>
                    <p className={labelStyle}>CARD HOLDER</p>
                    <p className={valueStyle}>{card.cardHolder}</p>
                </div>
                <div>
                    <p className={labelStyle}>VALID THRU</p>
                    <p className={valueStyle}>{card.validThru}</p>
                </div>
            </div>

            <div className="mt-auto space-y-6">
                <p className={`text-[18px] ${textColor.primary} tracking-[0.2em] font-medium`}>
                    {card.cardNumber}
                </p>

            </div>


        </div>
    )
}