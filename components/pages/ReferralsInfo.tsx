'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icons } from '../icons'

const ReferralsInfo = () => {
  const sources = [
    { icon: Icons.building, title: 'DSS (Social Services)', description: 'County social services departments' },
    { icon: Icons.hospital, title: 'Hospitals', description: 'Hospital discharge planners' },
    { icon: Icons.clipboard, title: 'MCO Care Coordinators', description: 'Managed care organization staff' },
    { icon: Icons.family, title: 'Families', description: 'Parents and guardians directly' },
    { icon: Icons.school, title: 'Schools', description: 'School counselors and staff' },
    { icon: Icons.stethoscope, title: 'Healthcare Providers', description: 'Physicians and therapists' },
  ]

  const steps = [
    {
      number: '1',
      title: 'Initial Contact',
      description: 'Reach out to us via phone or our contact form to discuss the childs needs.',
    },
    {
      number: '2',
      title: 'Assessment',
      description: 'We review the childs information to ensure we can meet their care requirements.',
    },
    {
      number: '3',
      title: 'Tour & Meeting',
      description: 'Visit our facilities and meet with our team to learn about our programs.',
    },
    {
      number: '4',
      title: 'Admission',
      description: 'Complete necessary paperwork and coordinate a smooth transition.',
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-main">
        {/* Referral Sources */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="section-label">Who Can Refer</span>
          <h2 className="section-title">
            Referral <span className="text-accent">Sources</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We are ready to partner with you. As a caregiver, we know your member&apos;s health is your top priority.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24">
          {sources.map((source, index) => (
            <motion.div
              key={source.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-3 md:gap-4 p-4 md:p-6 rounded-2xl hover:bg-gray-50 transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <div className="w-5 h-5 md:w-6 md:h-6 text-accent">{source.icon}</div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{source.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm">{source.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="section-label">How It Works</span>
          <h2 className="section-title">
            Referral <span className="text-accent">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-4xl md:text-5xl font-serif font-semibold text-accent/20 mb-2 md:mb-4">
                {step.number}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn btn-primary">
            Start a Referral
            <div className="w-4 h-4">{Icons.arrowRight}</div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ReferralsInfo
