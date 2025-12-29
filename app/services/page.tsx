import { Metadata } from 'next'
import ServicesHero from '@/components/pages/ServicesHero'
import ServiceDetails from '@/components/pages/ServiceDetails'
import ServiceFeatures from '@/components/pages/ServiceFeatures'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our comprehensive residential care services including 24/7 support, clinical services, and life skills development.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
      <ServiceFeatures />
      <CTA />
    </>
  )
}
