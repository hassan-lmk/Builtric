import type { Metadata } from 'next'
import { getBlogPost } from '@/data/blog'

export const SITE_URL = 'https://builtric.com'
export const SITE_NAME = 'Builtric'
export const DEFAULT_OG_IMAGE = '/images/hero.webp'

export const DEFAULT_DESCRIPTION =
  'Get total control of your construction projects to protect your margins, schedules, and mission-critical risks.'

export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/builtric/',
  'https://www.instagram.com/builtric.official/',
] as const

type PageMetaInput = {
  title: string
  description: string
  path: string
  openGraphType?: 'website' | 'article'
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
}

export function pageMetadata({
  title,
  description,
  path,
  openGraphType = 'website',
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${SITE_NAME} construction management software`,
  imageWidth = 1200,
  imageHeight = 630,
}: PageMetaInput): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      type: openGraphType,
      images: [
        {
          url: image,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export const pageSeo = {
  about: pageMetadata({
    title: 'About Builtric — Construction Intelligence Platform',
    description:
      'Learn how Builtric helps construction teams unify project data, improve decisions, and deliver projects with greater transparency and control.',
    path: '/builtric-about',
  }),
  blog: pageMetadata({
    title: 'Builtric Blog — Construction Intelligence Insights',
    description:
      'Read Builtric insights on construction data, project visibility, procurement, finance, and the real cost of disconnected project systems.',
    path: '/builtric-blog',
  }),
  contact: pageMetadata({
    title: 'Contact Builtric — Talk to Our Team',
    description:
      'Have a question about Builtric, pricing, implementation, or partnerships? Share your details and our team will get back to you.',
    path: '/builtric-contact',
  }),
  customQuote: pageMetadata({
    title: 'Custom Construction Software Quote',
    description:
      'Request a customised Builtric quote tailored to your construction workflows, team size, integrations, and delivery goals.',
    path: '/builtric-custom-quote',
  }),
  demo: pageMetadata({
    title: 'Book a Builtric Demo',
    description:
      'Book a personalised Builtric demo and see how construction teams unify procurement, finance, and project delivery in one platform.',
    path: '/builtric-demo',
  }),
  features: pageMetadata({
    title: 'Construction Management Software Features',
    description:
      'Explore Builtric features for procurement, finance, project management, dashboards, and secure construction data in one platform.',
    path: '/builtric-features',
  }),
  legal: pageMetadata({
    title: 'Builtric Legal — Privacy Policy & Terms',
    description:
      'Read the Builtric privacy policy and terms of service covering data handling, platform use, billing, and support.',
    path: '/builtric-legal',
  }),
  packages: pageMetadata({
    title: 'Construction Software Packages & Pricing',
    description:
      'Compare Builtric Standard, Professional, and Enterprise packages designed for how construction teams actually work.',
    path: '/builtric-packages',
  }),
  whoWeServe: pageMetadata({
    title: 'Construction Software for Every Role',
    description:
      'See how Builtric supports contractors, project managers, developers, and consultants with role-specific construction tools.',
    path: '/builtric-who-we-serve',
  }),
} as const

export function blogArticleMetadata(slug: string): Metadata {
  const post = getBlogPost(slug)

  if (!post) {
    return pageSeo.blog
  }

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/builtric-blog/${slug}`,
    openGraphType: 'article',
    image: post.image.src,
    imageAlt: post.image.alt,
    imageWidth: post.image.width,
    imageHeight: post.image.height,
  })
}

export const staticRoutes = [
  '/',
  '/builtric-about',
  '/builtric-blog',
  '/builtric-contact',
  '/builtric-custom-quote',
  '/builtric-demo',
  '/builtric-features',
  '/builtric-legal',
  '/builtric-packages',
  '/builtric-who-we-serve',
] as const
