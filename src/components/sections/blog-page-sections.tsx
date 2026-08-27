'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BuiltricButton } from '@/components/builtric-button'
import { DemoRibbonSection } from '@/components/sections/framer-sections'
import { blogPosts, type BlogPost } from '@/data/blog'

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`))
}

function BlogHeroSection() {
  return (
    <section className="w-full overflow-hidden px-site pb-9 pt-page-hero">
      <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-1 flex-col gap-2.5">
          <h1 className="page-hero-title text-primary-black">Builtric Blog</h1>
          <div className="py-3">
            <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
          </div>
        </div>
        <p className="page-hero-lead flex-1 text-primary-black">
          Insights on construction intelligence, project visibility, and the real cost of
          disconnected data across procurement, finance, and delivery.
        </p>
      </div>
    </section>
  )
}

function BlogArticlesSection() {
  return (
    <section className="w-full bg-primary-white px-site py-14">
      <div className="site-container flex flex-col gap-8">
        <h2 className="t-heading text-primary-black">Latest articles</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col gap-4">
              <Link
                href={`/builtric-blog/${post.slug}`}
                className="relative block aspect-[4/3] overflow-hidden rounded-[20px]"
              >
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Link>
              <div className="flex flex-col gap-2">
                <p className="t-small text-dark-grey">{formatPublishedDate(post.publishedAt)}</p>
                <h3 className="t-title text-primary-black">
                  <Link
                    href={`/builtric-blog/${post.slug}`}
                    className="text-primary-black no-underline transition-colors hover:text-dark-grey"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="t-body text-dark-grey">{post.excerpt}</p>
                <Link
                  href={`/builtric-blog/${post.slug}`}
                  className="t-small font-medium text-primary-black no-underline hover:underline"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogPageContent() {
  return (
    <>
      <BlogHeroSection />
      <BlogArticlesSection />
      <DemoRibbonSection />
    </>
  )
}

export function BlogArticleContent({ post }: { post: BlogPost }) {
  return (
    <>
      <article className="w-full px-site pb-24 pt-page-hero">
        <div className="site-container mx-auto flex max-w-3xl flex-col gap-8">
          <Link href="/builtric-blog" className="t-small font-medium text-dark-grey hover:underline">
            ← Back to blog
          </Link>

          <div className="flex flex-col gap-3">
            <p className="t-small text-dark-grey">{formatPublishedDate(post.publishedAt)}</p>
            <h1 className="t-heading text-primary-black">{post.title}</h1>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="t-body flex flex-col gap-8 text-primary-black">
            {post.sections.map((section) => (
              <section key={section.heading ?? section.paragraphs[0]} className="flex flex-col gap-4">
                {section.heading ? (
                  <h2 className="t-title text-primary-black">{section.heading}</h2>
                ) : null}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </section>
            ))}

            <p className="italic">
              <em>{post.cta}</em>{' '}
              <Link href="/builtric-demo" className="font-medium not-italic underline-offset-2 hover:underline">
                Book a demo
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
      <DemoRibbonSection variant="yellow" />
    </>
  )
}
