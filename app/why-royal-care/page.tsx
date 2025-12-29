import { Metadata } from 'next'
import WhyHero from '@/components/pages/WhyHero'
import WhyChooseUs from '@/components/pages/WhyChooseUs'
import Stats from '@/components/pages/Stats'
import TestimonialsPreview from '@/components/pages/TestimonialsPreview'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'Why Royal Care',
  description:
    'Discover why families choose Royal Child Care Center for their loved ones. Learn about our experience, individualized care, and commitment to excellence.',
}

export default function WhyRoyalCarePage() {
  return (
    <>
      <WhyHero />
      <WhyChooseUs />
      <Stats />
      <TestimonialsPreview />
      <CTA />
    </>
  )
}
