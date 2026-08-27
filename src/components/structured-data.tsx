import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from '@/lib/site-metadata'

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationStructuredData() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.png`,
          sameAs: [...SOCIAL_PROFILES],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL,
          description: DEFAULT_DESCRIPTION,
        }}
      />
    </>
  )
}

export function ArticleStructuredData({
  title,
  description,
  slug,
  publishedAt,
  image,
}: {
  title: string
  description: string
  slug: string
  publishedAt: string
  image: string
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: `${SITE_URL}${image}`,
        datePublished: publishedAt,
        dateModified: publishedAt,
        url: `${SITE_URL}/builtric-blog/${slug}`,
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
      }}
    />
  )
}
