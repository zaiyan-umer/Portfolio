'use client'
import { cn } from '@/lib/utils'
import { Menu, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"


const Navbar = () => {
    const elements = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Projects",
            href: "/projects"
        },
        {
            title: "Blogs",
            href: "/blogs"
        }
    ]

    return (
        <div>
            <nav className='bg-red-500 h-25 flex items-center max-w-[80vw] mx-auto'>
                <ul className='flex text-black dark:text-white justify-between items-end w-full px-8 '>
                    <li className='flex gap-10 items-end'>
                        <LogoImage />
                        <div className="gap-5 items-end hidden sm:block">
                            <ul className="flex gap-5">
                                {elements.map(e => (
                                    <li key={e.href}>
                                        <Link
                                            href={e.href}
                                            className='text-md underline underline-offset-4 decoration-0.5 decoration-current/0 transition-[text-decoration-color] duration-200 hover:decoration-current'
                                        >
                                            {e.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>

                    <li className="h-full hidden sm:block">
                        <DarkMode />
                    </li>

                    {/* Mobile sidebar */}
                    <li className="mobile block sm:hidden">
                        <Sheet>
                            <SheetTrigger asChild className='cursor-pointer'>
                                <Button variant="outline" size="icon" className="rounded-md">
                                    <span className="sr-only">Open menu</span>
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-72 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-r border-border flex flex-col gap-6"
                            >
                                <SheetHeader className="text-left">
                                    <SheetTitle className="text-xl">Menu</SheetTitle>
                                    <SheetDescription className="text-sm">
                                        Quick navigation and theme toggle
                                    </SheetDescription>
                                </SheetHeader>

                                <nav className="space-y-3">
                                    {elements.map(e => (
                                        <Link
                                            key={e.href}
                                            href={e.href}
                                            className="block rounded-md px-3 py-2 text-lg font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                                        >
                                            {e.title}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="pt-4 border-t border-border flex items-center gap-4 justify-center">
                                    <span className="text-sm font-medium">Switch Theme</span>
                                    <DarkMode />
                                </div>

                                <SheetFooter className="mt-auto">
                                    <Button asChild className="w-full">
                                        <Link href="/contact">Contact</Link>
                                    </Button>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </li>
                </ul>
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