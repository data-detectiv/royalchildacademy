import { Metadata } from 'next'
import FAQHero from '@/components/pages/FAQHero'
import FAQAccordion from '@/components/pages/FAQAccordion'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Find answers to frequently asked questions about Royal Child Care Center services, referrals, and care.',
}

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQAccordion />
      <CTA />
    </>
  )
}
