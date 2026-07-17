import { createClient } from '@sanity/client'


import { ABOUT_ME } from './data/about-me'
import { EXPERIENCE } from './data/experience'
import { certifications, courses } from './data/course-work'
import { TECH_STACK } from './data/tech-stack'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset || !token) {
  console.error("Missing required Sanity environment variables.")
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  token,
  apiVersion: '2024-01-01',
})

async function seed() {
  console.log('Clearing old documents to prevent duplicates...')
  const oldDocs = await client.fetch('*[_type in ["experience", "certification", "courseCategory", "techStack"]]._id')
  for (const id of oldDocs) {
    await client.delete(id)
  }

  console.log('Seeding About Me...')
  await client.createOrReplace({
    _id: 'aboutMe', // Fixed ID for singleton
    _type: 'aboutMe',
    paragraphs: ABOUT_ME.paragraphs,
    highlights: ABOUT_ME.highlights,
  })

  console.log('Seeding Experience...')
  for (let i = 0; i < EXPERIENCE.length; i++) {
    await client.create({
      _type: 'experience',
      order: i,
      ...EXPERIENCE[i]
    })
  }

  console.log('Seeding Certifications...')
  for (let i = 0; i < certifications.length; i++) {
    await client.create({
      _type: 'certification',
      order: i,
      ...certifications[i]
    })
  }

  console.log('Seeding Course Categories...')
  let courseOrder = 0;
  for (const [key, category] of Object.entries(courses)) {
    await client.create({
      _type: 'courseCategory',
      order: courseOrder++,
      categoryKey: key,
      title: category.title,
      courses: category.courses
    })
  }

  console.log('Seeding Tech Stack...')
  for (let i = 0; i < TECH_STACK.length; i++) {
    await client.create({
      _type: 'techStack',
      order: i,
      ...TECH_STACK[i]
    })
  }

  console.log('Seeding Complete!')
}

seed().catch((err) => {
  console.error('Error seeding data:', err)
  process.exit(1)
})
