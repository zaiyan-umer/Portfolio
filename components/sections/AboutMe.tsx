import { cn } from "@/lib/utils"
import { ABOUT_ME } from "@/components/data/about-me"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/ui/panel"

const AboutMe = ({ className }: { className?: string }) => {
    return (
        <Panel id="about" className={cn(className)}>
            <PanelHeader>
                <PanelTitle>About Me</PanelTitle>
            </PanelHeader>

            <PanelContent>
                <div className="prose dark:prose-invert max-w-full py-4">
                    {ABOUT_ME.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>

                {ABOUT_ME.highlights?.length ? (
                    <div className="flex flex-wrap gap-2 pb-6">
                        {ABOUT_ME.highlights.map((highlight) => (
                            <span
                                key={highlight.label}
                                className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border text-muted-foreground/80 bg-muted/20"
                            >
                                <span className="uppercase tracking-widest text-muted-foreground/50">
                                    {highlight.label}
                                </span>
                                {highlight.value}
                            </span>
                        ))}
                    </div>
                ) : null}
            </PanelContent>
        </Panel>
    )
}

export default AboutMe
