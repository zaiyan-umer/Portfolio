import { NextRequest, NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  message: z.string().min(1, 'Message is required'),
})

// Simple in-memory rate limiter (resets on serverless cold starts)
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5

// Create a client with write token for API routes
const writeClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN,
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Rate limiting
        const ip = request.headers.get('x-forwarded-for') || 'unknown'
        const now = Date.now()
        const record = rateLimit.get(ip)
        
        if (record && now - record.timestamp < RATE_LIMIT_WINDOW) {
            if (record.count >= MAX_REQUESTS) {
                return NextResponse.json(
                    { error: 'Too many requests. Please try again later.' },
                    { status: 429 }
                )
            }
            record.count++
        } else {
            rateLimit.set(ip, { count: 1, timestamp: now })
        }

        // Validate payload using zod schema
        const parsedResult = contactSchema.safeParse(body)
        if (!parsedResult.success) {
            return NextResponse.json(
                { error: parsedResult.error.issues[0].message },
                { status: 400 }
            )
        }
        
        const { name, email, message } = parsedResult.data

        // Create message document in Sanity
        const result = await writeClient.create({
            _type: 'message',
            name,
            email,
            message,
            createdAt: new Date().toISOString(),
        })

        return NextResponse.json(
            { success: true, id: result._id },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error creating message:', error)
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        )
    }
}
