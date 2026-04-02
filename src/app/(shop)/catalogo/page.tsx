'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Container } from '@/components/ui/Container/Container'
import { ProductGrid } from '@/components/product/ProductGrid/ProductGrid'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import { mockPlants } from '@/infrastructure/mock/plants'
import { mockCategories } from '@/infrastructure/mock/categories'
import styles from './catalogo.module.css'

function CatalogoContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('categoria') ?? 'all'

  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory)

  const filtered = useMemo(() => {
    return mockPlants.filter((plant) => {
      const matchesCategory = activeCategory === 'all' || plant.category === activeCategory
      const matchesSearch =
        search === '' ||
        plant.name.toLowerCase().includes(search.toLowerCase()) ||
        plant.species.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [search, activeCategory])

  return (
    <Container>
      <section className={styles.page}>
        <ScrollReveal>
          <p className="label-text" style={{ marginBottom: '8px' }}>Colección</p>
          <h1 className={styles.title}>Nuestras plantas</h1>
        </ScrollReveal>

        <div className={styles.controls}>
          <div className={styles.searchWrap}>
            <input
              type="text"
              placeholder="Buscar plantas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filters}>
            <button
              className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Todas
            </button>
            {mockCategories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>No se encontraron plantas</p>
        ) : (
          <ProductGrid plants={filtered} />
        )}
      </section>
    </Container>
  )
}

export default function CatalogoPage() {
  return (
    <Suspense>
      <CatalogoContent />
    </Suspense>
  )
}
