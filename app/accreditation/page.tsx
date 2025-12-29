import { Metadata } from 'next'
import AccreditationHero from '@/components/pages/AccreditationHero'
import AccreditationInfo from '@/components/pages/AccreditationInfo'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'Accreditation',
  description:
    'Learn about Royal Child Care Center certifications including CQL accreditation and NC DHHS licensing.',
}

export default function AccreditationPage() {
  return (
    <>
      <AccreditationHero />
      <AccreditationInfo />
      <CTA />
    </>
  )
}
