import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CollectionGrid from '@/components/CollectionGrid'
import ProjectShowcase from '@/components/ProjectShowcase'
import ExpertiseSection from '@/components/ExpertiseSection'
import BusinessUnits from '@/components/BusinessUnits'
import ProductVisuals from '@/components/ProductVisuals'
import TrustAuthority from '@/components/TrustAuthority'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <CollectionGrid />
        <ProjectShowcase />
        <ExpertiseSection />
        <BusinessUnits />
        <ProductVisuals />
        <TrustAuthority />
      </main>
      <Footer />
    </>
  )
}
