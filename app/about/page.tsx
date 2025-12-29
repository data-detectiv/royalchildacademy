import { Metadata } from 'next'
import AboutHero from '@/components/pages/AboutHero'
import MissionVision from '@/components/pages/MissionVision'
import Values from '@/components/pages/Values'
import Timeline from '@/components/pages/Timeline'
import Team from '@/components/pages/Team'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Royal Child Care Center, our mission, values, and the dedicated team providing exceptional care for children with disabilities.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Values />
      <Timeline />
      <Team />
      <CTA />
    </>
  )
}
