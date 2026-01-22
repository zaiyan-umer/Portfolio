'use client'
import { cn } from '@/lib/utils'
import { useTheme, useToggleTheme } from '@/store/theme.store'
import { GithubIcon, LinkedinIcon } from '@sanity/icons'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const Navbar = () => {
    return (
        <div>
            <nav className='h-25 flex items-center w-full md:max-w-[80vw] mx-auto'>
                <div className='flex justify-between items-center w-full px-8 '>
                    <Link href={"/"}>
                        <LogoImage />
                    </Link>

                    <div className="h-full flex items-center gap-2">
                        <span className='border border-gray-400/20 p-2 rounded-xl inset-shadow-xs' >
                            <Link href='https://github.com/zaiyan-umer' target='_blank'> <GithubIcon fontSize={24} /> </Link>
                        </span>
                        <span className='border border-gray-400/20 p-2 rounded-xl inset-shadow-xs' >
                            <Link href='https://www.linkedin.com/in/zaiyan-umer-935525324/' target='_blank'> <LinkedinIcon fontSize={24} /> </Link>
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
    const theme = useTheme();
    const toggleTheme = useToggleTheme();

    const [isRotating, setIsRotating] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        setIsRotating(true);
        setIsPressed(true);
        toggleTheme();

        setTimeout(() => setIsRotating(false), 400);
        setTimeout(() => setIsPressed(false), 150);
    };

    return (
        <button onClick={handleClick} className={cn("cursor-pointer", className)}>
            {theme === "light" ? (
                <Sun className={`${isRotating && "rotate-icon"} ${isPressed && "press-effect"}`} />
            ) : (
                <Moon className={`${isRotating && "rotate-icon"} ${isPressed && "press-effect"}`} />
            )}
        </button>
    );
};


export default Navbar