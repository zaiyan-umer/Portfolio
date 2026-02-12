import Link from "next/link"
import { check, fileSVG, folderSVG } from "./svgs"
import { ImagesBadge } from "@/components/ui/images-badge"
type NavLink = {
    title: string;
    description: string;
    time: string;
    href: string;
    scroll: boolean;
    images?: string[];
}

export const NavbarTable = () => {
    const table: NavLink[] = [
        {
            title: "Home",
            description: "Welcome to my portfolio",
            time: "Latest",
            href: "/",
            scroll: false
        },
        {
            title: "Projects",
            description: "Showcase of my work",
            time: "4 days ago",
            href: "/projects",
            scroll: false,
            images: [
                "/home.webp",
                "/landing.webp",
                "/details.webp",
            ]
        },
        {
            title: "Blog",
            description: "Tech articles & insights",
            time: "2 weeks ago",
            href: "/blog",
            scroll: false,
            images: [
                "/blog.webp"
            ]
        },
        {
            title: "Components",
            description: "Reusable UI components & design system",
            time: "1 week ago",
            href: "/docs",
            scroll: false,
            images: [
                "/projects-section.webp"
            ]
        },
        {
            title: "About Me",
            description: "Know more about me",
            time: "1 month ago",
            href: "#about",
            scroll: true
        },
        {
            title: "Contact",
            description: "Get in touch with me",
            time: "Always",
            href: "#contact",
            scroll: true
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
        <div className='navbar border border-black/10 w-full rounded-sm dark:border-gray-200/20 shadow-sm'>
            <div className='flex justify-between items-center w-full bg-(--gh-hover)/80 px-4 py-3 border-b border-black/10'>
                <div className='flex gap-4 items-center'>Zaiyan Umer <span className='ml-4 text-sm text-gray-500 font-light flex gap-1'>Web Developer {check('var(--gh-green)')}</span></div>
                <div className='text-sm text-gray-500'>{table.length} sections</div>
            </div>
            <div className='divide-y divide-gray'>
                {table.map((item, idx) => (
                    <NavTableLink item={item} key={idx} />
                ))}
                {files.map((item, idx) => (
                    <div key={idx} className="flex items-center px-4 py-3 transition-colors cursor-not-allowed gap-4">
                        <div className='flex items-center gap-2 w-80'>
                            <span className='text-blue-400'>{fileSVG('var(--gh-folder)')}</span>
                            <div className='font-light text-sm'>{item.title}</div>
                        </div>
                        <div className='text-sm text-gray-500 flex-1 hidden md:block'>{item.description}</div>
                        <div className='text-sm text-gray-500 shrink-0'>{item.time}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}

const NavTableLink = ({ item, key }: { item: NavLink, key: number }) => {
    return (
        <div className="divide-y divide-gray">
            <Link href={item.href} key={key} scroll={true} onClick={(e) => {
                if (item.scroll && item.href.startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                }
            }}
            >
                <ImagesBadge
                    text={item.title}
                    description={item.description}
                    time={item.time}
                    className="flex items-center px-4 py-3 transition-colors cursor-pointer gap-4"
                    images={item.images ?? []}
                />
            </Link>
        </div>
    )
}



// const NavTableLinkBkp = ({ item, key, className }: { item: NavLink, key: number, className?: string }) => {
//     return (
//         <Link href={item.href} key={key} scroll={true} onClick={(e) => {
//             if (item.scroll && item.href.startsWith("#")) {
//                 e.preventDefault();
//                 document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
//             }
//         }}
//             className={cn("flex items-center px-4 py-3 transition-colors cursor-pointer gap-4 hover:bg-(--gh-hover)/50", className)}>
//             <div className='flex items-center gap-2 w-80'>
//                 <span className='text-blue-400'>{folderSVG('var(--gh-folder)')}</span>
//                 <div className='font-light text-sm hover:text-(--gh-blue) hover:underline transition duration-50'>{item.title}</div>
//             </div>
//             <div className='text-sm text-gray-500 flex-1 hidden md:block'>{item.description}</div>
//             <div className='text-sm text-gray-500 shrink-0'>{item.time}</div>
//         </Link>
//     )
// }


