'use client'

import ProjectCards from "./ProjectCards"

type Project = {
  title: string
  href: string
  img: string
}

// -------------------- Sample Project Data --------------------
const projects: Project[] = [
  { title: 'Netflix', href: '/projects/netflix', img: 'https://images.unsplash.com/photo-1512070800540-0d4192faa057?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV0ZmxpeHxlbnwwfDF8MHx8fDA%3D' },
  { title: 'Spotify', href: '/projects/spotify', img: 'https://images.unsplash.com/photo-1586095087956-bc66fe634955?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvdGlmeXxlbnwwfDF8MHx8fDA%3D' },
  { title: 'Amazon', href: '/projects/amazon', img: 'https://images.unsplash.com/photo-1694291546839-a0b8506040c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtYXpvbnxlbnwwfDF8MHx8fDA%3D' },
]

const ProjectCardsDemo = () => {
  return (
    <div className="w-full bg-black mt-12">
      <div>
        <ProjectCards projects={projects} />
      </div>
    </div>
  )
}

export default ProjectCardsDemo