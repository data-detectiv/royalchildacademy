import Hero from '@/components/Hero'
import About from '@/components/About'
import Focus from '@/components/Focus'
import WhyRoyalCare from '@/components/WhyRoyalCare'
import Services from '@/components/Services'
import ReferralCTA from '@/components/ReferralCTA'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Focus />
      <Services />
      <ReferralCTA />
      <WhyRoyalCare />
      <Contact />
    </>
  )
}
