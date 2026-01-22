import { useTheme } from "@/store/theme.store";
import Image from "next/image";
import { useState } from "react";

interface TechStackItem {
    name: string;
    logo: string;
    color: string;
    percentage: number;
}

export const TechStack = () => {
    const theme = useTheme();
    const techStack: TechStackItem[] = [
    {
        name: "Next.js",
        logo: theme === "light" ? "./nextjs.svg" : "./nextjs-dark.svg",
        color: "#0D1117",
        percentage: 28
    },
    {
        name: "React",
        logo: "./react.svg",
        color: "#61DAFB",
        percentage: 22
    },
    {
        name: "TypeScript",
        logo: "./typescript.svg",
        color: "#3178C6",
        percentage: 20
    },
    {
        name: "JavaScript",
        logo: "./javascript.svg",
        color: "#F7DF1E",
        percentage: 10
    },
    {
        name: "Tailwind CSS",
        logo: "./tailwindcss.svg",
        color: "#38BDF8",
        percentage: 8
    },
    {
        name: "shadcn/ui",
        logo: theme === "light" ? "./shadcn.svg" : "./shadcn-dark.svg",
        color: "#FF7F50",
        percentage: 5
    },
    {
        name: "Node.js",
        logo: "./nodejs.svg",
        color: "#339933",
        percentage: 5
    },
    {
        name: "MongoDB",
        logo: "./mongodb.svg",
        color: "#47A248",
        percentage: 1
    },
    {
        name: "Git",
        logo: "./git.svg",
        color: "#F05032",
        percentage: 1
    }
];

    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    return (
        <div className='flex flex-col gap-5 mt-4'>
            <h3 className='font-semibold text-sm'>Tech I work with</h3>

            {/* Stacked Bar */}
            <div className='flex flex-col gap-3'>
                <div className='flex h-8 gap-px rounded-sm border border-black/10 dark:border-gray-200/20'>
                    {techStack.map((tech, idx) => (
                        <div
                            key={idx}
                            className='relative group cursor-pointer transition-opacity hover:opacity-85'
                            style={{
                                width: `${tech.percentage}%`,
                                backgroundColor: tech.color,
                                minWidth: tech.percentage > 0 ? '4px' : '0',
                            }}
                            onMouseEnter={() => setHoveredTech(tech.name)}
                            onMouseLeave={() => setHoveredTech(null)}
                        >
                            {/* Tooltip */}
                            {hoveredTech === tech.name && (
                                <div className='absolute h-full bottom-full left-1/2 -translate-x-1/2 mb-2 pl-2 pr-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-md whitespace-nowrap z-10 animate-in fade-in duration-200'>
                                    <div className='flex items-center gap-2'>
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={16}
                                            height={16}
                                            className='w-4 h-4'
                                        />
                                        <span className='font-medium'>{tech.name}</span>
                                        <span className='font-semibold'>{tech.percentage}%</span>
                                    </div>
                                    <div className='absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100'></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className='flex flex-col gap-2'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3'>
                    {techStack.map((tech, idx) => (
                        <div
                            key={idx}
                            className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors cursor-pointer'
                            onMouseEnter={() => setHoveredTech(tech.name)}
                            onMouseLeave={() => setHoveredTech(null)}
                        >
                            {/* Colored Dot */}
                            <div
                                className='w-2 h-2 rounded-full shrink-0'
                                style={{ backgroundColor: tech.color }}
                            />

                            {/* Logo */}
                            <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={16}
                                height={16}
                                className='w-4 h-4 shrink-0'
                            />

                            {/* Name and Percentage */}
                            <div className='flex items-center gap-1 min-w-0'>
                                <span className='text-xs font-medium truncate'>{tech.name}</span>
                                <span className='text-xs text-gray-500 dark:text-gray-400 shrink-0'>
                                    {tech.percentage}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};