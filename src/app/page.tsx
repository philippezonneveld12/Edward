import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CollectionGrid from '@/components/CollectionGrid'
import ProjectShowcase from '@/components/ProjectShowcase'
import ExpertiseSection from '@/components/ExpertiseSection'
import BusinessUnits from '@/components/BusinessUnits'
import ProductVisuals from '@/components/ProductVisuals'
import TrustAuthority from '@/components/TrustAuthority'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import DynamicMeta from '@/components/DynamicMeta'

export default function Home() {
  return (
    <>
      <DynamicMeta />
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
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
