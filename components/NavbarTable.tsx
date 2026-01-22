import Link from "next/link"
import { check, fileSVG, folderSVG } from "./svgs"

export const NavbarTable = () => {
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
                        <div className='flex items-center gap-2 w-80'>
                            <span className='text-blue-400'>{folderSVG('var(--gh-folder)')}</span>
                            <div className='font-light text-sm hover:text-(--gh-blue) hover:underline transition duration-50'>{item.title}</div>
                        </div>
                        <div className='text-sm text-gray-500 flex-1 hidden md:block'>{item.description}</div>
                        <div className='text-sm text-gray-500 shrink-0'>{item.time}</div>
                    </Link>
                ))}
                {files.map((item, idx) => (
                    <div key={idx} className="flex items-center px-4 py-3 hover:bg-(--gh-hover) transition-colors cursor-pointer gap-4">
                        <div className='flex items-center gap-2 w-80'>
                            <span className='text-blue-400'>{fileSVG('var(--gh-folder)')}</span>
                            <div className='font-light text-sm hover:text-(--gh-blue) hover:underline transition duration-50'>{item.title}</div>
                        </div>
                        <div className='text-sm text-gray-500 flex-1 hidden md:block'>{item.description}</div>
                        <div className='text-sm text-gray-500 shrink-0'>{item.time}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}
