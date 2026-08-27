import type { Metadata } from 'next'
import { ArticleStructuredData } from '@/components/structured-data'
import { getBlogPost } from '@/data/blog'
import { blogArticleMetadata } from '@/lib/site-metadata'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: Pick<LayoutProps, 'params'>): Promise<Metadata> {
  const { slug } = await params
  return blogArticleMetadata(slug)
}

export default async function BlogArticleLayout({ children, params }: LayoutProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  return (
    <>
      {post ? (
        <ArticleStructuredData
          title={post.title}
          description={post.excerpt}
          slug={slug}
          publishedAt={post.publishedAt}
          image={post.image.src}
        />
      ) : null}
      {children}
    </>
  )
}
