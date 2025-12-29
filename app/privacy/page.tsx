import { Metadata } from 'next'
import PrivacyContent from '@/components/pages/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Royal Child Care Center privacy policy and data protection practices.',
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
