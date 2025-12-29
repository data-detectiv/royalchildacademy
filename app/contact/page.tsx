import { Metadata } from 'next'
import Contact from '@/components/Contact'
import CTA from '@/components/pages/CTA'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Royal Child Care Center. We are here to answer your questions about our residential group home services.',
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-8 md:pb-12 bg-primary">
        <div className="container-main">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg text-white/70">
              Have questions about our services? We are here to help.
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <CTA />
    </>
  )
}
