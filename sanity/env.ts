export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-20'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

if (typeof window !== 'undefined' && !projectId) {
  console.warn(
    '⚠️ [Sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is missing from environment variables.'
  )
}

