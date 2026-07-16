import ExternalLinkHoverEffect from '@/components/projects/ExternalLinkHoverEffect'
import { Badge } from '@/components/ui/badge'
import { projectQuery } from '@/lib/sanity.queries'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/imgUrl'
import { Github } from 'lucide-react'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const resolvedParams = await params
    const slug = resolvedParams?.slug ? decodeURIComponent(resolvedParams.slug) : ''
    const project = await client.fetch(projectQuery, { slug })

    return {
        title: project?.title || 'Project',
        description: project?.description,
    }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const resolvedParams = await params
    const slug = resolvedParams?.slug ? decodeURIComponent(resolvedParams.slug) : ''
    const project = await client.fetch(projectQuery, { slug })

    if (!project) {
        return (
            <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0d1117] dark:text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0d1117] dark:text-white mt-18">
            <div className="layout-narrow px-4 py-8">
                {/* Thumbnail */}
                {project.thumbnail && (
                    <div className="mb-8 rounded-lg overflow-hidden">
                        <Image
                            src={urlFor(project.thumbnail).width(1800).height(800).quality(70).auto('format').url()}
                            alt={project.title}
                            width={1800}
                            height={800}
                            className="w-full h-auto"
                        />
                    </div>
                )}

                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

                    {/* Tech Stack */}
                    {project.techStack && project.techStack.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech: string) => (
                                    <Badge key={tech} variant="secondary" className="text-sm">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-4">
                        {project.githubUrl && (
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-white group"
                            >
                                <Github size={20} className="text-white transition-transform group-hover:-translate-y-1 duration-300" />
                                GitHub
                            </Link>
                        )}
                        {project.liveUrl && (
                            <ExternalLinkHoverEffect className='bg-blue-600 hover:bg-blue-700 ' href={project.liveUrl}> Live Demo </ExternalLinkHoverEffect>
                        )}
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 dark:border-gray-700 my-8" />

                {/* Content */}
                {project.content && (
                    <div className="prose max-w-none dark:prose-invert">
                        <PortableText
                            value={project.content}
                            components={{
                                types: {
                                    image: ({ value }: any) => (
                                        <Image
                                            src={urlFor(value).width(2200).quality(90).auto('format').url()}
                                            alt={value.alt || 'Project image'}
                                            width={2200}
                                            height={600}
                                            className="rounded-lg my-6"
                                        />
                                    ),
                                },
                                block: {
                                    normal: ({ children }: any) => (
                                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{children}</p>
                                    ),
                                    h2: ({ children }: any) => (
                                        <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
                                    ),
                                    h3: ({ children }: any) => (
                                        <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
                                    ),
                                    blockquote: ({ children }: any) => (
                                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 dark:text-gray-400 my-4">
                                            {children}
                                        </blockquote>
                                    ),
                                },
                                marks: {
                                    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
                                    em: ({ children }: any) => <em className="italic">{children}</em>,
                                    code: ({ children }: any) => (
                                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
                                            {children}
                                        </code>
                                    ),
                                    link: ({ value, children }: any) => (
                                        <Link
                                            href={value.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline"
                                        >
                                            {children}
                                        </Link>
                                    ),
                                },
                            }}
                        />
                    </div>
                )}

                {/* Published Date */}
                {project.publishedAt && (
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                        <p className="text-sm">
                            Published on{' '}
                            <time dateTime={project.publishedAt}>
                                {new Date(project.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
