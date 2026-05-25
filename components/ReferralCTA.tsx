'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icons } from './icons'

const ReferralCTA = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-primary text-white"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
            <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-accent-light blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12 lg:p-16">
            <div>
              <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase rounded-full bg-accent/20 text-accent mb-4">
                Refer a Child
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 md:mb-6 leading-tight">
                Submit a <span className="text-accent">Referral</span>
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6 md:mb-8 max-w-xl">
                DSS, MCO care coordinators, hospitals, schools, healthcare providers, and families
                can refer a child to our residential services. Submit the referral online, or download
                the printable intake form.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/referrals#referral-form" className="btn btn-primary">
                  Submit Online
                  <div className="w-4 h-4">{Icons.arrowRight}</div>
                </Link>
                <a
                  href="/royal-child-academy-referral-form.doc"
                  download
                  className="btn btn-secondary"
                >
                  <div className="w-4 h-4">{Icons.download}</div>
                  Download Form
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative w-64 h-64 xl:w-80 xl:h-80">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl" />
                <div className="relative w-full h-full bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                  <div className="w-32 h-32 xl:w-40 xl:h-40 text-accent">
                    {Icons.clipboard}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ReferralCTA
