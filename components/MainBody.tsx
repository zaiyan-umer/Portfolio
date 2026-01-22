'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { VerifiedIcon, Volume2 } from 'lucide-react'
import { TechStack } from './TechStack'
import { cn } from '@/lib/utils'
import { NavbarTable } from './NavbarTable'

const MainBody = () => {
    return (
        <div className='max-w-[80vw] mx-auto mt-8'>
            <div className="flex items-center gap-4 mb-4">
                <div><Image src={'/avatar.webp'} alt='Logo' width={28} height={24} className='rounded-md mb-1.5 cursor-pointer' /></div>
                <div className='font-bold text-xl'>My Portfolio</div>
                <div className='text-xs text-gray-600 dark:text-gray-400 border border-black/10 dark:border-gray-200/20 rounded-xl px-3 py-1'>Public</div>
            </div>
            <Separator className='dark:bg-gray-300/20' />
            <div className='grid grid-cols-1 lg:grid-cols-4 mt-6'>
                <div className="col-span-3">
                    <NavbarTable />
                </div>
                <div className="col-span-1 mt-8 md:mt-0">
                    <Separator className='block md:hidden' />
                    <Profile className='mt-4 md:mt-0' />
                </div>
            </div>

        </div>
    )
}

const Profile = ({ className }: { className: string }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlayAudio = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return (
        <div className={cn('grid grid-cols-1', className)}>
            <div className='flex flex-col gap-4 px-5'>
                <div className='font-semibold text-lg'>About</div>
                <div className="name flex gap-1 items-center">
                    <span className='font-semibold text-md'>zaiyan umer</span>
                    <span><VerifiedIcon size={24} fill='var(--gh-blue)' color='var(--gh-hover)' /></span>
                    <span className='cursor-pointer hover:opacity-70 transition-opacity duration-100' onClick={handlePlayAudio}><Volume2 size={20} /> </span>
                </div>
                <audio ref={audioRef} src="/name-pronounciation.mp3" />
            </div>
            <div className='px-5 py-4 text-sm text-gray-500 dark:text-gray-400'>
                <p className='leading-relaxed'>
                    Full Stack Developer building modern web experiences. Meta Certified. Passionate about scalable apps & clean code.
                </p>
            </div>
            <div className='px-5 py-4'>
                <Separator />
                <TechStack />
            </div>
        </div>
    )
}

export default MainBody
