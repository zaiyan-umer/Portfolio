'use client'
import { cn } from '@/lib/utils';
import React, { useState, useRef } from 'react'
import BlobCursor from './blob-cursor';

type BorderCardProps = {
    className?: string,
    key?: string | number,
    children: React.ReactNode
}

const BorderCard = ({ className, children }: BorderCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div 
            ref={cardRef}
            className={cn(
                "relative overflow-hidden [&>*:not(.blob-cursor)]:relative [&>*:not(.blob-cursor)]:z-10", 
                className
            )} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {children}

            <BlobCursor className="blob-cursor" isHovered={isHovered} mouseX={mousePos.x} mouseY={mousePos.y} />

        </div>
    )
}

export default BorderCard