import { cn } from '@/lib/utils';
import { TechStack } from '../ui/tech-stack';
import { Certifications, CourseWork } from '../CourseWork';

const SkillsAndCoursework = ({ className }: { className?: string }) => {

    return (
        <>
            <article id='about' className={cn('prose dark:prose-invert max-w-full', className)}>
                <TechStack />
                <CourseWork className='mt-8' />
                <Certifications className='mt-8' />
            </article>
        </>
    )
}

export default SkillsAndCoursework


