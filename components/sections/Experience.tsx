'use client'

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Briefcase, ChevronDown, ExternalLink, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { EXPERIENCE } from "@/components/data/experience"
import BorderCard from "@/components/ui/BorderCard"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/ui/panel"

const isCurrentRole = (endDate: string) => endDate.trim().toLowerCase() === "present"

const Experience = ({ className }: { className?: string }) => {
    const trackRef = useRef<HTMLDivElement>(null)
    const glowRef = useRef<HTMLDivElement>(null)
    const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true })

    const toggle = (idx: number) => setExpanded((s) => ({ ...s, [idx]: !s[idx] }))

    useEffect(() => {
        let raf = 0

        const onScroll = () => {
            if (raf) return
            raf = requestAnimationFrame(() => {
                raf = 0
                const track = trackRef.current
                const glow = glowRef.current
                if (!track || !glow) return

                const rect = track.getBoundingClientRect()
                const viewportCenter = window.innerHeight * 0.5
                const y = Math.max(0, Math.min(rect.height, viewportCenter - rect.top))

                glow.style.transform = `translate(-50%, -50%) translateY(${y}px)`

                const visible = rect.top < window.innerHeight && rect.bottom > 0
                glow.style.opacity = visible ? "1" : "0"
            })
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        onScroll()

        return () => {
            window.removeEventListener("scroll", onScroll)
            if (raf) cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <Panel id="experience" className={cn(className)}>
            <PanelHeader>
                <PanelTitle>Experience</PanelTitle>
            </PanelHeader>

            <PanelContent>
                <div ref={trackRef} className="relative py-6">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />

                    <div
                        ref={glowRef}
                        className="absolute left-4 md:left-1/2 top-0 h-32 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-transparent via-(--gh-blue) to-transparent opacity-0 blur-[3px] pointer-events-none will-change-transform"
                    />

                    {EXPERIENCE.map((item, idx) => {
                        const isActive = isCurrentRole(item.endDate)
                        const isOpen = !!expanded[idx]

                        return (
                            <div
                                key={idx}
                                className={cn(
                                    "relative mb-10 last:mb-0 md:mb-14 md:flex",
                                    idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                )}
                            >
                                <div
                                    className={cn(
                                        "absolute left-4 md:left-1/2 top-6 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border",
                                        isActive
                                            ? "border-(--gh-blue) bg-(--gh-blue)/15 text-(--gh-blue) shadow-[0_0_0_6px_rgba(20,131,227,0.15)]"
                                            : "border-border bg-muted text-muted-foreground"
                                    )}
                                >
                                    <Briefcase size={16} />
                                </div>

                                <BorderCard key={idx} className="ml-12 rounded-md border bg-muted/30 p-4 space-y-3 md:ml-0 md:w-[46%]">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="font-semibold text-lg leading-snug">{item.role}</h3>
                                            <p className="text-sm font-medium text-(--gh-blue)">{item.company}</p>
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
                                </BorderCard>
                            </div>
                        )
                    })}
                </div>
            </PanelContent>
        </Panel>
    )
}

export default Experience
