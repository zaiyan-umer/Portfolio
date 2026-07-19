/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { connection } from 'next/server'



export { metadata, viewport } from 'next-sanity/studio'

import { Suspense } from 'react'

async function DynamicStudio() {
  await connection();
  return <NextStudio config={config} />
}

export default function StudioPage() {
  return (
    <Suspense fallback={<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading Studio...</div>}>
      <DynamicStudio />
    </Suspense>
  )
}
