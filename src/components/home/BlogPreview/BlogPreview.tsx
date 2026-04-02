import Link from 'next/link'
import { mockBlogPosts } from '@/infrastructure/mock/blog-posts'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import styles from './BlogPreview.module.css'

export function BlogPreview() {
  const posts = mockBlogPosts.slice(0, 3)

  return (
    <section className={styles.section}>
      <ScrollReveal>
        <div className={styles.header}>
          <p className="label-text">BLOG</p>
        </div>
      </ScrollReveal>
      <div className={styles.list}>
        {posts.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 0.08}>
            <Link href={`/blog/${post.slug}`} className={styles.post}>
              <span className={styles.postCategory}>{post.category}</span>
              <h3 className={styles.postTitle}>{post.title}</h3>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
