import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'
import { SITE_URL, staticRoutes } from '@/lib/site-metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: path === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: path === '/' ? 1 : 0.8,
  }))

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/builtric-blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
