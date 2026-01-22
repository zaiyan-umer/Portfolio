import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { featuredProjectsQuery } from '@/lib/sanity.queries'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const revalidate = 60 // Revalidate every minute

export default async function ProjectsPage() {
  const projects = await client.fetch(featuredProjectsQuery)

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-2">Featured Projects</h1>
        <p className="text-gray-400 mb-8">
          In-depth case studies of projects I've built
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project: any) => (
            <Card key={project._id} className="bg-[#161b22] border-gray-800">
              <CardHeader>
                {project.thumbnail && (
                  <Image
                    src={urlFor(project.thumbnail).width(600).height(300).url()}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                )}
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech: string) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-4">
                <Link
                  href={`/projects/${project.slug.current}`}
                  className="text-blue-400 hover:underline"
                >
                  Read Case Study →
                </Link>
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    <Github size={20} />
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    <ExternalLink size={20} />
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}