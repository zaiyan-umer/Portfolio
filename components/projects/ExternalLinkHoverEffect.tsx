'use client'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

type ExternalLinkHoverProps = {
    children: React.ReactNode,
    className?: string,
    href: string
}

const ExternalLinkHoverEffect = ({ children, className, href }: ExternalLinkHoverProps) => {
    return (
        <motion.div whileHover="animate">
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-lg transition text-white", className)}
            >
                <motion.span>                
                    <ExternalLink className='external-link'/>
                </motion.span>
                <span>{children}</span>
            </Link>
        </motion.div>
    )
}

export default ExternalLinkHoverEffect

const ExternalLink = ({ className }: { className?: string }) => {
    const pathVariants = {
        initial: { x: 0, y: 0 },
        animate: { x: 2, y: -2 }
    }

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("lucide lucide-external-link-icon lucide-external-link", className)}
        >
            <motion.path d="M10 14 21 3" variants={pathVariants}/>
            <motion.path d="M15 3h6v6" variants={pathVariants}/>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </motion.svg>
    )
}