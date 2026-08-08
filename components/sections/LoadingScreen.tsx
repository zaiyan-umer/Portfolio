'use client'

import { motion } from 'motion/react'
import { Signature } from '@/components/ui/svgs'
import { useTheme } from '@/store/theme.store'

const floatTransition = {
    duration: 8,
    repeat: Infinity,
    repeatType: 'mirror' as const,
    ease: 'easeInOut' as const,
}

export default function LoadingScreen() {
    const theme = useTheme();
    const isDark = theme === 'dark';
    
    return (
        <motion.div
            className={`fixed inset-0 z-[999] flex items-center justify-center overflow-hidden ${
                isDark ? 'bg-[#0D1117]' : 'bg-[#f7f4ef]'
            }`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
            <motion.div
                className={`absolute -top-24 -left-24 h-72 w-72 rounded-full blur-2xl ${
                    isDark 
                        ? 'bg-linear-to-br from-[#161B22] to-[#0D1117]' 
                        : 'bg-linear-to-br from-[#efe6da] to-[#f7f4ef]'
                }`}
                animate={{ x: [0, 30, 0], y: [0, 18, 0] }}
                transition={floatTransition}
            />
            <motion.div
                className={`absolute -bottom-30 -right-20 h-80 w-80 rounded-full blur-2xl ${
                    isDark 
                        ? 'bg-linear-to-tr from-[#1C2128] to-[#0D1117]' 
                        : 'bg-linear-to-tr from-[#f5efe7] to-[#fbf9f5]'
                }`}
                animate={{ x: [0, -24, 0], y: [0, -12, 0] }}
                transition={floatTransition}
            />
            <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Signature 
                    color={isDark ? '#F0F6FC' : '#111111'} 
                    className="w-[min(80vw,560px)] h-auto" 
                />
            </motion.div>
        </motion.div>
    )
}
