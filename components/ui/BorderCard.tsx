'use client'
import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import { BorderBeam } from './border-beam';

type BorderCardProps = {
    className?: string,
    key: string | number,
    children: React.ReactNode
}

const BorderCard = ({ className, key, children }: BorderCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div key={key} className={cn("relative overflow-hidden", className)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {children}

            <BorderBeam
                duration={5}
                delay={4}
                size={400}
                borderWidth={1}
                className={cn('opacity-0 from-transparent via-blue-500 to-transparent', { 'opacity-100': isHovered })}
            />

        </div>
    )
}

export default BorderCard