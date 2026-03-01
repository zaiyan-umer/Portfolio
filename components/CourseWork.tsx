import { cn } from "@/lib/utils";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./ui/panel"
import Image from "next/image";
import { certifications, courses } from "./data/course-work";
import BorderCard from "./ui/BorderCard";


export const CourseWork = ({ className }: { className?: string }) => {
    return (
        <Panel id="course-work" className={cn(className)}>
            <PanelHeader>
                <PanelTitle>Course Work</PanelTitle>
            </PanelHeader>

            <PanelContent>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-none mt-4 py-6">

                    {Object.entries(courses).map(([key, field]) => (

                        <BorderCard key={key} className="p-4 rounded-xl border bg-muted/30 space-y-3">
                            <h3 className="font-semibold text-lg mt-2">
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

                        <BorderCard key={idx} className="p-4 rounded-xl border bg-muted/30 space-y-3">
                            <div className="flex items-center gap-3">
                                <Image
                                    width={30}
                                    height={30}
                                    src={certification.img}
                                    alt={`${certification.issuedBy} logo`}
                                    className="h-10 w-10 rounded-md object-cover"
                                />
                                <div className="flex-1 flex items-center justify-between text-sm text-muted-foreground">
                                    <p className="font-medium text-muted-foreground/90">{certification.issuedBy}</p>
                                    <p className="text-xs">{certification.issuedAt}</p>
                                </div>
                            </div>

                            <h3 className="font-bold text-lg mt-2 leading-snug">
                                {certification.title}
                            </h3>

                            <p className="text-sm text-muted-foreground/90">
                                <span className="font-medium">Credential ID:</span> {certification.credentialId}
                            </p>

                            <a
                                href={certification.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-sm underline text-muted-foreground hover:text-foreground"
                            >
                                View Certificate
                            </a>

                            <div className="flex flex-wrap gap-2 pt-1">
                                {certification.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[11px] px-2 py-1 rounded-md border text-muted-foreground/80 bg-muted/20 transition-all duration-300 hover:bg-muted/50 hover:text-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </BorderCard>
                    ))}
                </div>
            </PanelContent>
        </Panel>
    )
}