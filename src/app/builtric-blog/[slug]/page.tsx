import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { BlogArticleContent } from '@/components/sections/blog-page-sections'
import { blogPosts, getBlogPost } from '@/data/blog'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <SiteShell>
      <BlogArticleContent post={post} />
    </SiteShell>
  )
}
