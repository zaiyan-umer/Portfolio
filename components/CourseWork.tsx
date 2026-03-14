import { cn } from "@/lib/utils";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./ui/panel"
import Image from "next/image";
import { certifications, courses } from "./data/course-work";
import BorderCard from "./ui/BorderCard";
import Link from "next/link";


export const CourseWork = ({ className }: { className?: string }) => {
    return (
        <Panel id="course-work" className={cn(className)}>
            <PanelHeader>
                <PanelTitle>Course Work</PanelTitle>
            </PanelHeader>

            <PanelContent>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-none mt-4 py-6">

                    {Object.entries(courses).map(([key, field]) => (

                        <BorderCard key={key} className="p-4 rounded-md border bg-muted/30 space-y-3">
                            <h3 className="text-center sm:text-left font-semibold text-lg mt-2">
                                {field.title}
                            </h3>

                            <ul className="space-y-1">
                                {field.courses.map((course, idx) => (
                                    <li
                                        key={idx}
                                        className="text-sm text-muted-foreground"
                                    >
                                        {course}
                                    </li>
                                ))}
                            </ul>
                        </BorderCard>
                    ))}
                </div>
            </PanelContent>
        </Panel>
    )
}

export const Certifications = ({ className }: { className?: string }) => {
    return (
        <Panel id="certifications" className={cn(className)}>
            <PanelHeader>
                <PanelTitle>Certifications</PanelTitle>
            </PanelHeader>

            <PanelContent>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-none mt-4 py-6">

                    {certifications.map((certification, idx) => (
                        <BorderCard
                            key={idx}
                            className="flex flex-col justify-between p-4 rounded-md border bg-muted/30"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={certification.img}
                                        alt={`${certification.issuedBy} logo`}
                                        className="h-10 w-10 rounded-md object-cover"
                                    />
                                    <div className="flex-1 min-w-0 flex items-center justify-between gap-2 text-sm text-muted-foreground">
                                        <p className="font-medium text-muted-foreground/90 truncate">{certification.issuedBy}</p>
                                        <p className="text-xs shrink-0">{certification.issuedAt}</p>
                                    </div>
                                </div>

                                <h3 className="font-bold text-lg mt-2 leading-snug">{certification.title}</h3>

                                <div className="flex items-center gap-2 bg-muted/40 border rounded-md px-3">
                                    <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/50 shrink-0">ID</span>
                                    <p className="text-xs font-mono text-muted-foreground/80 truncate">{certification.credentialId}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-1">
                                    {certification.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] px-2.5 py-1 rounded-full border text-muted-foreground/80 bg-muted/20 transition-all duration-300 hover:bg-muted/50 hover:text-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Link stays at the bottom */}
                            <Link
                                href={certification.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1 text-sm underline underline-offset-2 text-muted-foreground hover:text-foreground transition-colors mt-4"
                            >
                                View Certificate
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-px group-hover:-translate-y-px"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </Link>
                        </BorderCard>

                    ))}
                </div>
            </PanelContent>
        </Panel >
    )
}