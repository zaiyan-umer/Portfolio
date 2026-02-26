import { cn } from '@/lib/utils';
import { TechStack } from '../ui/tech-stack';
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../ui/panel"

const SkillsAndCoursework = ({ className }: { className?: string }) => {

    return (
        <>
            <article id='about' className={cn('prose dark:prose-invert max-w-full', className)}>
                <TechStack />
                <CourseWork className='mt-8' />
            </article>
        </>
    )
}

export default SkillsAndCoursework

const CourseWork = ({ className }: { className?: string }) => {
    const courses = {
        "software": {
            title: "Software Engineering & Programming",
            courses: [
                "Programming Fundamentals",
                "Object Oriented Programming",
                "Data Structures",
                "Software Design and Analysis"
            ]
        },

        "systems": {
            title: "Systems & Low-Level Computing",
            courses: [
                "Operating Systems",
                "Computer Organization and Assembly Language",
                "Digital Logic Design"
            ]
        },

        "ai_data": {
            title: "Data, AI & Intelligent Systems",
            courses: [
                "Artificial Intelligence",
                "Database Systems",
                "Probability and Statistics"
            ]
        },

        "math": {
            title: "Mathematical Foundations",
            courses: [
                "Discrete Structures",
                "Linear Algebra",
                "Calculus / Multivariable Calculus"
            ]
        },

        "theory": {
            title: "Theoretical Computer Science",
            courses: [
                "Theory of Automata"
            ]
        }

    };
    return (
        <Panel id="course-work" className={cn(className)}>
            <PanelHeader>
                <PanelTitle>Course Work</PanelTitle>
            </PanelHeader>

            <PanelContent>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-none mt-4 py-6">

                    {Object.entries(courses).map(([key, field]) => (

                        <div
                            key={key}
                            className="p-4 rounded-xl border bg-muted/30 space-y-3"
                        >

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
                        </div>
                    ))}
                </div>
            </PanelContent>
        </Panel>
    )
}
