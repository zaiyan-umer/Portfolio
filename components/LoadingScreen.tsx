'use client'

import { motion } from 'motion/react'
import { Signature } from '@/components/svgs'

const floatTransition = {
    duration: 8,
    repeat: Infinity as const,
    repeatType: 'mirror' as const,
    ease: 'easeInOut' as const,
}

export default function LoadingScreen() {
    return (
        <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#f7f4ef]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
            <motion.div
                className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#efe6da] to-[#f7f4ef] blur-2xl"
                animate={{ x: [0, 30, 0], y: [0, 18, 0] }}
                transition={floatTransition}
            />
            <motion.div
                className="absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-gradient-to-tr from-[#f5efe7] to-[#fbf9f5] blur-2xl"
                animate={{ x: [0, -24, 0], y: [0, -12, 0] }}
                transition={floatTransition}
            />
            <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Signature color="#111111" className="w-[min(80vw,560px)] h-auto" />
            </motion.div>
        </motion.div>
    )
}
