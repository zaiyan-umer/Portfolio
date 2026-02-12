'use client'
import { cn } from '@/lib/utils'
import { motion, useMotionValue, useSpring } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'


type Project = {
    title: string
    href: string
    img: string
}

type ProjectsProps = {
    projects: Project[]
    className?: string        // wrapper styling
    heading?: string          // optional heading
    imageWidth?: number       // width for ProjectCards floating image
    imageHeight?: number      // height for ProjectCards floating image
    scaleOnHover?: number     // optional scale for floating image
    parallaxFactor?: number   // optional parallax multiplier
}

const ProjectCards: React.FC<ProjectsProps> = ({
    projects,
    className = '',
    heading,
    imageWidth = 190,
    imageHeight = 256,
    scaleOnHover = 1.2,
    parallaxFactor = 0.8,
}) => {
    if (!projects || projects.length === 0) return null

    return (
        <section className={cn('projects-wrapper relative', className)}>
            {heading && (
                <h2 className="text-4xl font-bold mb-6">{heading}</h2>
            )}

            {/* Internal reusable project cards component */}
            <ProjectCard
                projects={projects}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                scaleOnHover={scaleOnHover}
                parallaxFactor={parallaxFactor}
                className=''
            />
        </section>
    )
}

export default ProjectCards

type ProjectCardProps = {
    projects: Project[]
    className?: string             // allows custom wrapper styling
    imageWidth?: number            // width of floating image
    imageHeight?: number           // height of floating image
    scaleOnHover?: number          // scale of floating image on hover
    parallaxFactor?: number        // parallax movement multiplier
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    projects, className = '', imageWidth, imageHeight, scaleOnHover, parallaxFactor = 0.8,
}) => {
    const parentRef = useRef<HTMLDivElement | null>(null)
    const [activeImg, setActiveImg] = useState<string | null>(null)

    // Motion values
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { stiffness: 300, damping: 80 })
    const springY = useSpring(y, { stiffness: 300, damping: 80 })

    // Mouse move relative to parent
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!parentRef.current) return

        const rect = parentRef.current.getBoundingClientRect()
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const newX = event.clientX - rect.left - centerX
        const newY = event.clientY - rect.top - centerY

        x.set(newX * parallaxFactor)
        y.set(newY * parallaxFactor)
    }

    if (!projects || projects.length === 0) return null

    return (
        <div
            ref={parentRef}
            className={cn('relative', className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setActiveImg(null)}
        >
            {/* Floating image */}
            {activeImg && (
                <motion.div
                    className="hover-image pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: scaleOnHover }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    style={{ x: springX, y: springY }}
                >
                    <Image
                        src={activeImg}
                        className="w-full object-cover rounded-md shadow-lg"
                        width={imageWidth}
                        height={imageHeight}
                        alt="Project img"
                        priority
                    />
                </motion.div>
            )}

            {/* Project cards */}
            <div className="grid gap-4">
                {projects.map((project) => (
                    <Link
                        key={project.href}
                        href={project.href}
                        className="border-b border-gray-600 block"
                    >
                        <motion.div
                            className="parent relative cursor-pointer"
                            onMouseEnter={() => setActiveImg(project.img)}
                        >
                            <motion.div
                                className="text text-6xl font-bold px-8 py-12 text-shadow-2xs text-white"
                                whileHover={{ x: 8, color: '#a8a8a8' }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.title}
                            </motion.div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
