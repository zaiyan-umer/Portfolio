import Image from "next/image"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { TECH_STACK } from "@/components/data/tech-stack"
import { useTheme } from "@/store/theme.store"
import { cn } from "@/lib/utils"

export function TechStack({ className }: { className?: string }) {
    const globaltheme = useTheme();
    return (
        <section id="stack" className={cn("py-6", className)}>
            <div className="px-4">
                <h2 className="text-3xl font-semibold tracking-tight mt-6 ml-2 mb-0">Tech I work with</h2>
            </div>

            <div className="px-4 py-4">
                <ul className="flex flex-wrap gap-2 select-none">
                    {TECH_STACK.map((tech) => {
                        return (
                            <li key={tech.key} className="flex">
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a
                                            href={tech.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={tech.title}
                                        >
                                            {tech.theme ? (
                                                <>
                                                    <Image
                                                        src={`https://ik.imagekit.io/mllj8vxiah/${tech.key}-light.svg`}
                                                        alt={`${tech.title} light icon`}
                                                        width={32}
                                                        height={32}
                                                        className={`${globaltheme === 'light'? 'block' : 'hidden'}`}
                                                        unoptimized
                                                    />
                                                    <Image
                                                        src={`https://ik.imagekit.io/mllj8vxiah/${tech.key}-dark.svg`}
                                                        alt={`${tech.title} dark icon`}
                                                        width={32}
                                                        height={32}
                                                        className={`${globaltheme === 'dark'? 'block' : 'hidden'}`}
                                                        unoptimized
                                                    />
                                                </>
                                            ) : (
                                                <Image
                                                    src={`https://ik.imagekit.io/mllj8vxiah/${tech.key}.svg`}
                                                    alt={`${tech.title} icon`}
                                                    width={32}
                                                    height={32}
                                                    unoptimized
                                                />
                                            )}
                                        </a>

                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{tech.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}