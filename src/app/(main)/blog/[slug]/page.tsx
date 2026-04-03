import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container/Container'
import { mockBlogPosts, getBlogPostBySlug } from '@/infrastructure/mock/blog-posts'
import styles from './page.module.css'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return mockBlogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function renderContent(content: string) {
  const paragraphs = content.split('\n\n')
  return paragraphs.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className={styles.h2}>
          {block.slice(3)}
        </h2>
      )
    }
    return (
      <p key={i} className={styles.paragraph}>
        {block}
      </p>
    )
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Container>
      <article className={styles.article}>
        <header className={styles.header}>
          <p className="label-text">{post.category}</p>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span>{formattedDate}</span>
            <span>{post.readTime} min de lectura</span>
          </div>
        </header>
        <div className={styles.content}>{renderContent(post.content)}</div>
      </article>
    </Container>
  )
}
