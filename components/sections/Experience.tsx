'use client'

import { useState } from "react"
import Link from "next/link"
import { Briefcase, ChevronDown, ExternalLink, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import BorderCard from "@/components/ui/BorderCard"
import { TracingBeam } from "@/components/ui/tracing-beam"

const isCurrentRole = (endDate: string) => endDate.trim().toLowerCase() === "present"

type ExperienceData = {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location?: string;
    summary: string;
    bullets?: string[];
    tags?: string[];
    link?: string;
}

const Experience = ({ data, className }: { data: ExperienceData[], className?: string }) => {
    if (!data?.length) return null;

    const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true })

    const toggle = (idx: number) => setExpanded((s) => ({ ...s, [idx]: !s[idx] }))

    return (
        <section id="experience" className={cn("py-6", className)}>
            <div className="px-4">
                <h2 className="text-3xl font-semibold tracking-tight mt-6 ml-2 mb-0">Experience</h2>
            </div>

            <div className="px-4">
                <div className="pl-4 md:pl-20">
                    <TracingBeam className="py-6">
                        <div className="flex flex-col gap-6 max-w-2xl">
                            {data.map((item, idx) => {
                                const isActive = isCurrentRole(item.endDate)
                                const isOpen = !!expanded[idx]

                                return (
                                    <BorderCard key={idx} className="rounded-md border bg-muted/30 p-4 space-y-3">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-start gap-3">
                                                <div
                                                    className={cn(
                                                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border",
                                                        isActive
                                                            ? "border-(--gh-blue) bg-(--gh-blue)/15 text-(--gh-blue)"
                                                            : "border-border bg-muted text-muted-foreground"
                                                    )}
                                                >
                                                    <Briefcase size={16} />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg leading-snug">{item.role}</h3>
                                                    <p className="text-sm font-medium text-(--gh-blue) hover:text-white">{item.company}</p>
                                                </div>
                                            </div>
                                            <span className="shrink-0 whitespace-nowrap rounded-full border border-black/10 px-3 py-1 text-xs text-gray-600 dark:border-gray-200/20 dark:text-gray-400">
                                                {item.startDate} – {item.endDate}
                                            </span>
                                        </div>

                                        {item.location ? (
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <MapPin size={13} />
                                                <span>{item.location}</span>
                                            </div>
                                        ) : null}

                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>

                                        {item.bullets?.length ? (
                                            <div
                                                className={cn(
                                                    "grid transition-all duration-200 ease-out",
                                                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                )}
                                            >
                                                <ul className="min-h-0 space-y-2 overflow-hidden">
                                                    {item.bullets.map((bullet, bIdx) => (
                                                        <li key={bIdx} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--gh-blue)" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : null}

                                        {item.tags?.length ? (
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {item.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full border bg-muted/20 px-2.5 py-1 text-[11px] text-muted-foreground/80 transition-all duration-300 hover:bg-muted/50 hover:text-foreground"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : null}

                                        {(item.bullets?.length || item.link) ? (
                                            <div className="flex items-center justify-between pt-1">
                                                {item.bullets?.length ? (
                                                    <button
                                                        type="button"
                                                        onClick={() => toggle(idx)}
                                                        className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                                                    >
                                                        <ChevronDown
                                                            size={12}
                                                            className={cn("transition-transform duration-150", isOpen && "rotate-180")}
                                                        />
                                                        {isOpen ? "Show less" : "Show more"}
                                                    </button>
                                                ) : <span />}

                                                {item.link ? (
                                                    <Link
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
                                                    >
                                                        Learn more
                                                        <ExternalLink size={12} className="transition-transform duration-150 group-hover:translate-x-px group-hover:-translate-y-px" />
                                                    </Link>
                                                ) : null}
                                            </div>
                                        ) : null}
                                    </BorderCard>
                                )
                            })}
                        </div>
                    </TracingBeam>
                </div>
            </div>
        </section>
    )
}

export default Experience
