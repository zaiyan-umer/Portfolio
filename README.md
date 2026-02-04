# Zaiyan Umer · Portfolio

A modern, full-stack portfolio website built with **Next.js 16**, **React**, **TypeScript**, **Tailwind CSS**, and **Sanity CMS**. Features a responsive design, dark mode support, dynamic project routing, and a contact form with backend integration.

## 🌐 Live

[zaiyan-umer.vercel.app](https://zaiyan-umer.vercel.app)

## ✨ Features

- **Server-Side Rendering**: Fast, SEO-optimized pages with Next.js 14 app router
- **Dynamic Projects**: Project detail pages with slug-based routing and Sanity CMS content
- **Contact Form**: Fully validated contact form with animations, error states, and Sanity integration
- **Dark Mode**: System-aware theme switching with Tailwind CSS dark mode
- **Responsive Design**: Mobile-first UI built with Tailwind CSS and shadcn/ui components
- **Rich Content**: PortableText rendering for formatted project descriptions
- **Blog Coming Soon**: Placeholder page for future blog content
- **Animations**: Smooth interactions with Framer Motion

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **CMS**: Sanity.io (schema: projects, posts, messages, authors, categories)
- **Animations**: Framer Motion
- **Icons**: Lucide React, Sanity Icons
- **Image Optimization**: Next.js Image, Sanity Image API
- **Validation**: Custom email regex patterns

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── (frontend)/
│   │   ├── page.tsx           # Home page
│   │   ├── blog/              # Blog coming soon
│   │   ├── projects/          # Projects listing & detail pages
│   │   └── repositories/      # Repositories showcase
│   ├── api/
│   │   ├── contact/           # Contact form API endpoint
│   │   └── github/            # GitHub API integration
│   ├── studio/                # Sanity Studio
│   └── layout.tsx             # Root layout with metadata
├── components/
│   ├── ContactForm.tsx        # Contact form with validation
│   ├── MainBody.tsx           # Hero section
│   ├── Navbar.tsx             # Navigation with theme toggle
│   ├── TechStack.tsx          # Technology badges
│   └── ui/                    # shadcn/ui components
├── sanity/
│   ├── schemaTypes/           # Document type definitions
│   ├── lib/                   # Sanity utilities
│   └── structure.ts           # Studio structure
├── lib/
│   ├── sanity.queries.ts      # GROQ queries
│   └── utils.ts               # Utility functions
└── public/
    └── favicon files
```

## 📬 Contact Form

The contact form sends messages to Sanity CMS:
- Validates name, email, message
- Stores submissions in `message` document type
- Features loading & success animations
- Works with write token authentication


## 🔗 Links

- **GitHub**: [github.com/zaiyan-umer](https://github.com/zaiyan-umer)
- **LinkedIn**: [linkedin.com/in/zaiyan-umer-935525324](https://www.linkedin.com/in/zaiyan-umer-935525324/)
- **Portfolio**: [zaiyan-umer.vercel.app](https://zaiyan-umer.vercel.app)
