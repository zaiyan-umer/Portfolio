'use client'
import { cn } from '@/lib/utils'
import { Github, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const Navbar = () => {
    return (
        <div>
            <nav className='h-25 flex items-center max-w-[80vw] mx-auto'>
                <div className='flex justify-between items-center w-full px-8 '>
                    <LogoImage />

                    <div className="h-full flex items-center gap-2">
                        <span className='border border-gray-400/20 px-3 py-2 rounded-xl inset-shadow-xs' >

                            <Link href='https://github.com/zaiyan-umer' target='_blank'> <Github /> </Link>
                        </span>
                        <DarkMode />
                    </div>
                </div>
            </nav>
        </div>
    )
}

const LogoImage = ({ className }: { className?: string }) => {
    return (
        <Image
            src={'/avatar.webp'}
            alt='Logo'
            width={50}
            height={50}
            className={cn('rounded-md mb-1.5 cursor-pointer', className)}
        />
    )
}

const DarkMode = ({ className }: { className?: string }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isRotating, setIsRotating] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleThemeChange = () => {
        setIsRotating(true);
        setIsPressed(true);
        const currentTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", currentTheme);
        setTheme(currentTheme);

        setTimeout(() => setIsRotating(false), 400);
        setTimeout(() => setIsPressed(false), 150);
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme") || "light";
        if (currentTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [])


    return (
        <>
            <style>{`
                @keyframes halfRotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(45deg);
                    }
                }
                @keyframes pressEffect {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(0.85);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                .rotate-icon {
                    animation: halfRotate 0.2s ease-out;
                }
                .press-effect {
                    animation: pressEffect 0.2s ease-out;
                }
            `}</style>
            <button
                onClick={handleThemeChange}
                className={cn('cursor-pointer', className)}
            >
                {theme === "light" ? (
                    <Sun className={`${isRotating ? 'rotate-icon' : ''} ${isPressed ? 'press-effect' : ''}`} />
                ) : (
                    <Moon className={`${isRotating ? 'rotate-icon' : ''} ${isPressed ? 'press-effect' : ''}`} />
                )}
            </button>
        </>
    )
}

export default Navbar