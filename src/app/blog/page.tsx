import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import { BlogCard } from '@/components/blog/BlogCard/BlogCard'
import { mockBlogPosts } from '@/infrastructure/mock/blog-posts'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogPage() {
  return (
    <Container>
      <ScrollReveal>
        <div className={styles.header}>
          <p className="label-text">Blog</p>
          <h1 className={styles.title}>Aprende con nosotros</h1>
        </div>
      </ScrollReveal>
      <div className={styles.posts}>
        {mockBlogPosts.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 0.1}>
            <BlogCard post={post} />
          </ScrollReveal>
        ))}
      </div>
    </Container>
  )
}
