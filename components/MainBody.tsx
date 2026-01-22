import React from 'react'
import { check, folderSVG, fileSVG } from './svgs'
import Image from 'next/image'
import { Separator } from './ui/separator'
import Link from 'next/link'

const MainBody = () => {
    return (
        <div className='max-w-[80vw] mx-auto mt-8'>
            <div className="flex items-center gap-4 mb-4">
                <div><Image src={'/avatar.webp'} alt='Logo' width={28} height={24} className='rounded-md mb-1.5 cursor-pointer' /></div>
                <div className='font-bold text-xl'>My Portfolio</div>
                <div className='text-xs text-gray-600 dark:text-gray-400 border border-black/10 dark:border-gray-200/20 rounded-xl px-3 py-1'>Public</div>
            </div>
            <Separator className='dark:bg-gray-300/20'/>
            <div className='grid grid-cols-4 mt-6'>
                <div className="col-span-3">
                    <NavbarTable />
                </div>
                <div className="col-span-1">
                    <Profile />
                </div>
            </div>

        </div>
    )
}

const NavbarTable = () => {
    const table = [
        {
            title: "Home",
            description: "Welcome to my portfolio",
            time: "Latest",
            href: "/"
        },
        {
            title: "Projects",
            description: "Showcase of my work",
            time: "4 days ago",
            href: "/projects"
        },
        {
            title: "Blog",
            description: "Tech articles & insights",
            time: "2 weeks ago",
            href: "/blog"
        },
        {
            title: "About Me",
            description: "Know more about me",
            time: "1 month ago",
            href: "/about"
        },
        {
            title: "Contact",
            description: "Get in touch with me",
            time: "Always",
            href: "/contact"
        }
    ]
    const files = [
        {
            title: "package.json",
            description: "Project dependencies & config",
            time: "2 days ago",
        },
        {
            title: "README.md",
            description: "Project documentation",
            time: "1 week ago",
        }
    ]
    return (
        <div className='navbar border border-black/10 w-full rounded-sm dark:border-gray-200/20'>
            <div className='flex justify-between items-center w-full bg-(--gh-hover) px-4 py-3 border-b border-black/10'>
                <div className='flex gap-4 items-center'>Zaiyan Umer <span className='ml-4 text-sm text-gray-500 font-light flex gap-1'>Web Developer {check('var(--gh-green)')}</span></div>
                <div className='text-sm text-gray-500'>{table.length} sections</div>
            </div>
            <div className='divide-y divide-red '>
                {table.map((item, idx) => (
                    <Link href={item.href} key={idx} className="flex items-center px-4 py-3 hover:bg-(--gh-hover) transition-colors cursor-pointer gap-4">
                        <div className='flex items-center gap-2 w-80 shrink-0'>
                            <span className='text-blue-400'>{folderSVG('var(--gh-folder)')}</span>
                            <div className='font-light text-sm hover:text-(--gh-blue) hover:underline transition duration-50'>{item.title}</div>
                        </div>
                        <div className='text-sm text-gray-500 flex-1 hidden sm:block'>{item.description}</div>
                        <div className='text-sm text-gray-500 shrink-0'>{item.time}</div>
                    </Link>
                ))}
                {files.map((item, idx) => (
                    <div key={idx} className="flex items-center px-4 py-3 hover:bg-(--gh-hover) transition-colors cursor-pointer gap-4">
                        <div className='flex items-center gap-2 w-80 shrink-0'>
                            <span className='text-blue-400'>{fileSVG('var(--gh-folder)')}</span>
                            <div className='font-light text-sm hover:text-(--gh-blue) hover:underline transition duration-50'>{item.title}</div>
                        </div>
                        <div className='text-sm text-gray-500 flex-1 hidden sm:block'>{item.description}</div>
                        <div className='text-sm text-gray-500 shrink-0'>{item.time}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div>Profile</div>
    )
}


export default MainBody