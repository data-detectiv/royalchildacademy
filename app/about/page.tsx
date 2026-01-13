import { Metadata } from 'next'
import AboutHero from '@/components/pages/AboutHero'
import MissionVision from '@/components/pages/MissionVision'
import Values from '@/components/pages/Values'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Royal Child Academy, our mission, values, and the dedicated team providing exceptional care for I/DD children since 2018.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Values />
      <CTA />
    </>
  )
}
