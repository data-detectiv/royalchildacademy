import { Metadata } from 'next'
import CaregiversHero from '@/components/pages/CaregiversHero'
import CaregiversInfo from '@/components/pages/CaregiversInfo'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'For Caregivers',
  description:
    'Partner with Royal Child Care Center. Learn about caregiver requirements and benefits.',
}

export default function CaregiversPage() {
  return (
    <>
      <CaregiversHero />
      <CaregiversInfo />
      <CTA />
    </>
  )
}
