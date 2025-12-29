import { Metadata } from 'next'
import TestimonialsHero from '@/components/pages/TestimonialsHero'
import TestimonialsGrid from '@/components/pages/TestimonialsGrid'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what families say about Royal Child Care Center and our residential group home services.',
}

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsGrid />
      <CTA />
    </>
  )
}
