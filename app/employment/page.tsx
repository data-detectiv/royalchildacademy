import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Employment Opportunities',
  description:
    'Join the Royal Child Academy team. We are looking for compassionate caregivers and professionals dedicated to making a difference.',
}

export default function EmploymentPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="container-main text-center py-24">
        <span className="section-label">Careers</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-gray-900 mb-6">
          Coming <span className="text-accent">Soon</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
          We are currently updating our careers page. In the meantime, if you are
          passionate about helping others and would like to join our team, please
          contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
          <Link href="/forms" className="btn btn-secondary">
            Download Application Form
          </Link>
        </div>
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm max-w-md mx-auto">
          <p className="text-gray-600 mb-2">For employment inquiries:</p>
          <a href="mailto:nhinton@royalchildhome.com" className="text-accent hover:underline font-medium">
            nhinton@royalchildhome.com
          </a>
          <p className="text-gray-500 mt-2">or call</p>
          <a href="tel:7046069243" className="text-accent hover:underline font-medium">
            (704) 606-9243
          </a>
        </div>
      </div>
    </section>
  )
}
