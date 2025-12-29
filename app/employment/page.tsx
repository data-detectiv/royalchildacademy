import { Metadata } from 'next'
import EmploymentHero from '@/components/pages/EmploymentHero'
import JobOpenings from '@/components/pages/JobOpenings'
import Benefits from '@/components/pages/Benefits'
import ApplicationProcess from '@/components/pages/ApplicationProcess'

export const metadata: Metadata = {
  title: 'Employment Opportunities',
  description:
    'Join the Royal Child Care Center team. We are looking for compassionate caregivers and professionals dedicated to making a difference.',
}

export default function EmploymentPage() {
  return (
    <>
      <EmploymentHero />
      <JobOpenings />
      <Benefits />
      <ApplicationProcess />
    </>
  )
}
