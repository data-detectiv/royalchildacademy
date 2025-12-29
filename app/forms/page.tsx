import { Metadata } from 'next'
import FormsHero from '@/components/pages/FormsHero'
import FormsList from '@/components/pages/FormsList'

export const metadata: Metadata = {
  title: 'Forms',
  description:
    'Download important forms and documents for Royal Child Care Center services.',
}

export default function FormsPage() {
  return (
    <>
      <FormsHero />
      <FormsList />
    </>
  )
}
