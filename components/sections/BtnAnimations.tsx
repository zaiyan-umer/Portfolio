'use client'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

export const showLoadingAnimation = async (animate: any) => {
    // Hide submit text and arrow
    animate(".submit-text", {
        width: 0,
        opacity: 0
    }, { duration: 0.3 })

    animate(".arrow-right", {
        opacity: 0,
        display: "none"
    }, { duration: 0.3 })

    // Show loading spinner
    await animate(".loading-svg", {
        width: 24,
        height: 24,
        display: "inline-block",
        opacity: 1
    }, { duration: 0.3 })
}

export const showSuccessAnimation = async (animate: any) => {
    // Hide loading spinner
    await animate(".loading-svg", {
        opacity: 0,
        display: "none"
    }, { duration: 0.2 })

    // Change button background to green
    animate("button[type='submit']", {
        backgroundColor: "rgb(34, 197, 94)" // green-500
    }, { duration: 0.3})

    // Show check icon
    animate(".check-svg", {
        width: 24,
        height: 24,
        display: "inline-block"
    }, { duration: 0.3 })

    // Animate check path
    await animate(".check-svg path", {
        pathLength: 1
    }, { duration: 0.9 })

    // Wait a bit to show the check
    await new Promise(resolve => setTimeout(resolve, 800))

    // Reset everything back
    animate(".check-svg", {
        display: "none",
        width: 0,
        height: 0
    }, { duration: 0.2 })

    animate(".check-svg path", {
        pathLength: 0
    }, { duration: 0.2 })

    // Reset button background to original color
    animate("button[type='submit']", {
        backgroundColor: "" // removes inline style, reverts to class
    }, { duration: 0.3 })

    animate(".submit-text", {
        width: "auto",
        opacity: 1
    }, { duration: 0.3 })

    await animate(".arrow-right", {
        opacity: 1,
        display: "inline-block"
    }, { duration: 0.3 })
}

export const ArrowButton = () => {
    return (
        <motion.span className="arrow-right" variants={{ hover: { x: 3 } }} transition={{ stiffness: 300, type: "spring" }}>
            <ArrowRight />
        </motion.span>
    )
}