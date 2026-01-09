'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icons } from '../icons'

const CaregiversInfo = () => {
  const benefits = [
    {
      icon: Icons.graduationCap,
      title: 'Expertise',
      description: 'Experienced, pre-screened, insured, and bonded caregivers who receive ongoing continuing education.',
    },
    {
      icon: Icons.home,
      title: 'Flexibility',
      description: 'Hours of care customized to patient preferences. Schedules change as client needs change.',
    },
    {
      icon: Icons.handshake,
      title: 'Compatibility',
      description: 'Ensured compatibility between the client and caregiver for the best care experience.',
    },
    {
      icon: Icons.shield,
      title: 'Licensed',
      description: 'Royal Child Academy is a licensed and certified agency with trained professionals.',
    },
  ]

  const requirements = [
    'Trained specifically to provide in-home care',
    'Successfully passed extensive background checks',
    'Bonded and insured',
    'Ongoing education on caregiving skills',
    'Services support individual preferences',
    'Maintaining dignity and independence of patients',
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Benefits</span>
            <h2 className="section-title mb-8 md:mb-10">
              Why Work <span className="text-accent">With Us</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-4 md:p-6"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 md:mb-4">
                    <div className="w-5 h-5 md:w-6 md:h-6 text-accent">{benefit.icon}</div>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Requirements</span>
            <h2 className="section-title mb-8 md:mb-10">
              What We <span className="text-accent">Look For</span>
            </h2>

            <div className="card">
              <ul className="space-y-3 md:space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <div className="w-3 h-3 text-accent">{Icons.check}</div>
                    </div>
                    <span className="text-gray-600 text-sm md:text-base">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 md:mt-8">
              <Link href="/contact" className="btn btn-primary">
                Get Started
                <div className="w-4 h-4">{Icons.arrowRight}</div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CaregiversInfo
