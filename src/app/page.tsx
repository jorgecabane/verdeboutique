import { Hero } from '@/components/home/Hero/Hero'
import { FeaturedPlants } from '@/components/home/FeaturedPlants/FeaturedPlants'
import { CrystallinumLeaf } from '@/components/animations/CrystallinumLeaf/CrystallinumLeaf'
import { LiveSaleBanner } from '@/components/home/LiveSaleBanner/LiveSaleBanner'
import { Categories } from '@/components/home/Categories/Categories'
import { AboutTeaser } from '@/components/home/AboutTeaser/AboutTeaser'
import { BlogPreview } from '@/components/home/BlogPreview/BlogPreview'
import { InstagramFeed } from '@/components/home/InstagramFeed/InstagramFeed'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CrystallinumLeaf />
      <FeaturedPlants />
      <LiveSaleBanner />
      <Categories />
      <AboutTeaser />
      <BlogPreview />
      <InstagramFeed />
    </>
  )
}
