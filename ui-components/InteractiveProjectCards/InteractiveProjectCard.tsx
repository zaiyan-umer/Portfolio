'use client'
import { cn } from '@/lib/utils'
import { motion, useMotionValue, useSpring } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Project = {
    title: string
    href: string
    img: string
}

type ProjectCardProps = {
    project: Project
    className?: string
    titleClassName?: string

    imageWidth?: number
    imageHeight?: number

    parallaxFactor?: number
    rotateFactor?: number
    maxRotate?: number
    hoverScale?: number

    enableLink?: boolean
}

const InteractiveProjectCard: React.FC<ProjectCardProps> = ({
    project,
    className,
    titleClassName,

    imageWidth = 256,
    imageHeight = 256,

    parallaxFactor = 0.6,
    rotateFactor = 8,
    maxRotate = 6,
    hoverScale = 1.2,

    enableLink = true,
}) => {
    const parentRef = React.useRef<HTMLDivElement | null>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotate = useMotionValue(0)

    const springX = useSpring(x, { stiffness: 300, damping: 80 })
    const springY = useSpring(y, { stiffness: 300, damping: 80 })
    const springRotate = useSpring(rotate, { stiffness: 500, damping: 90 })

    const prevX = React.useRef(0)
    const prevTime = React.useRef(Date.now())

    const clamp = (value: number, min: number, max: number) =>
        Math.min(Math.max(value, min), max)

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = parentRef.current?.getBoundingClientRect()
        if (!rect) return

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const newX = event.clientX - rect.left - centerX
        const newY = event.clientY - rect.top - centerY

        const now = Date.now()
        const deltaX = newX - prevX.current
        const deltaTime = now - prevTime.current
        const velocity = deltaTime > 0 ? deltaX / deltaTime : 0

        rotate.set(clamp(velocity * rotateFactor, -maxRotate, maxRotate))

        x.set(newX * parallaxFactor)
        y.set(newY * parallaxFactor)

        prevX.current = newX
        prevTime.current = now
    }

    const handleMouseLeave = () => {
        rotate.set(0)
    }

    const CardContent = (
        <motion.div
            ref={parentRef}
            className={cn('relative cursor-pointer', className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover="show"
            initial="hidden"
        >
            <motion.div
                className={cn(
                    'text-6xl font-bold px-8 py-12 text-white',
                    titleClassName
                )}
                whileHover={{ x: 8, color: '#a8a8a8' }}
                transition={{ duration: 0.3 }}
            >
                {project.title}
            </motion.div>

            <motion.div
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    show: { opacity: 1, scale: hoverScale },
                }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                style={{
                    x: springX,
                    y: springY,
                    rotate: springRotate,
                }}
            >
                <Image
                    src={project.img}
                    width={imageWidth}
                    height={imageHeight}
                    className="object-cover rounded-md shadow-lg"
                    alt={project.title}
                    priority
                />
            </motion.div>
        </motion.div>
    )

    if (!enableLink) return CardContent

    return (
        <Link
            href={project.href}
            className="border-b border-gray-600 block"
        >
            {CardContent}
        </Link>
    )
}

export default InteractiveProjectCard
