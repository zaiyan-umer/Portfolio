'use client'
import { VerifiedIcon, Volume2 } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import { NavbarTable } from '@/components/layout/NavbarTable'

const MainBody = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlayAudio = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return (
        <div className='relative'>
            <div className="flex items-center gap-4 mb-6 justify-center sm:justify-start px-2 py-3 layout-standard">
                <div className='hidden sm:block'><Image src={'/avatar.webp'} alt='Logo' width={28} height={24} className='rounded-md mb-1.5 cursor-pointer' /></div>
                <div className='font-bold text-xl flex gap-1 items-center'>
                    <span className='font-semibold text-md'>Hi, I&apos;m Zaiyan Umer</span>
                    <span><VerifiedIcon size={24} fill='var(--gh-blue)' color='var(--gh-hover)' /></span>
                    <span className='cursor-pointer hover:opacity-70 transition-opacity duration-100' onClick={handlePlayAudio}><Volume2 size={20} /> </span>
                </div>
                <audio ref={audioRef} src="/name-pronounciation.mp3" />
                <div className='text-xs text-gray-600 dark:text-gray-400 border border-black/10 dark:border-gray-200/20 rounded-xl px-3 py-1 hidden sm:block'>Public</div>
            </div>

            <div className="relative layout-wide">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px blur-sm bg-linear-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent opacity-50" />
            </div>

            <div className="layout-wide mt-6">
                <NavbarTable />
            </div>
        </div>
    )
}

export default MainBody
