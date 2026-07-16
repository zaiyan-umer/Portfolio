import { groq } from 'next-sanity'

// Get all projects
export const projectsQuery = groq`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    thumbnail,
    githubUrl,
    liveUrl,
    techStack,
    featured,
    publishedAt
  }
`

// Get featured projects
export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    thumbnail,
    githubUrl,
    liveUrl,
    techStack,
    publishedAt
  }
`

// Get single project
export const projectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    thumbnail,
    githubUrl,
    liveUrl,
    techStack,
    content,
    publishedAt
  }
`
