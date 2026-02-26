import Image from "next/image"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { TECH_STACK } from "@/components/data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"
import { useTheme } from "@/store/theme.store"

export function TechStack() {
    const globaltheme = useTheme();
    return (
        <Panel id="stack">
            <PanelHeader>
                <PanelTitle>Additional Tech</PanelTitle>
            </PanelHeader>

            <PanelContent>
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
            </PanelContent>
        </Panel>
    )
}