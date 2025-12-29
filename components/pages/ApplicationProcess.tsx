'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icons } from '../icons'

const ApplicationProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Apply',
      description: 'Submit your application and resume through our contact form.',
    },
    {
      number: '02',
      title: 'Interview',
      description: 'Meet with our team to discuss your experience and fit.',
    },
    {
      number: '03',
      title: 'Background Check',
      description: 'Complete required background screening and clearances.',
    },
    {
      number: '04',
      title: 'Training',
      description: 'Receive comprehensive training before starting your role.',
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="section-label text-accent">How To Apply</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4 md:mb-6">
            Application <span className="text-accent">Process</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            Getting started is easy. Follow these simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-semibold text-accent mb-2 md:mb-4">
                {step.number}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                {step.title}
              </h3>
              <p className="text-white/60 text-xs md:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn btn-primary">
            Start Your Application
            <div className="w-4 h-4">{Icons.arrowRight}</div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ApplicationProcess
