import { pageSeo } from '@/lib/site-metadata'

export const metadata = pageSeo.blog

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
