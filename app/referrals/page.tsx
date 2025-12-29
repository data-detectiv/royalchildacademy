import { Metadata } from 'next'
import ReferralsHero from '@/components/pages/ReferralsHero'
import ReferralsInfo from '@/components/pages/ReferralsInfo'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'Referrals',
  description:
    'Learn about the referral process for Royal Child Care Center residential services.',
}

export default function ReferralsPage() {
  return (
    <>
      <ReferralsHero />
      <ReferralsInfo />
      <CTA />
    </>
  )
}
