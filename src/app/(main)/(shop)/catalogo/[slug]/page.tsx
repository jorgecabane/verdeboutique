import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container/Container'
import { ProductDetail } from '@/components/product/ProductDetail/ProductDetail'
import { mockPlants, getPlantBySlug } from '@/infrastructure/mock/plants'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return mockPlants.map((plant) => ({ slug: plant.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const plant = getPlantBySlug(slug)
  if (!plant) return {}
  return {
    title: plant.name,
    description: plant.description.slice(0, 160),
  }
}

export default async function PlantPage({ params }: PageProps) {
  const { slug } = await params
  const plant = getPlantBySlug(slug)
  if (!plant) notFound()

  return (
    <Container>
      <ProductDetail plant={plant} />
    </Container>
  )
}
