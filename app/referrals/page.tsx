import { Metadata } from 'next'
import ReferralsHero from '@/components/pages/ReferralsHero'
import ReferralsInfo from '@/components/pages/ReferralsInfo'
import ReferralForm from '@/components/pages/ReferralForm'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'Referrals',
  description:
    'Learn about the referral process for Royal Child Care Center residential services and submit a referral online.',
}

export default function ReferralsPage() {
  return (
    <>
      <ReferralsHero />
      <ReferralsInfo />
      <ReferralForm />
      <CTA />
    </>
  )
}
