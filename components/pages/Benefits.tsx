'use client'

import { motion } from 'framer-motion'
import { Icons } from '../icons'

const Benefits = () => {
  const benefits = [
    { icon: Icons.dollarSign, title: 'Competitive Pay', description: 'Above-market compensation for your valuable work' },
    { icon: Icons.hospital, title: 'Health Insurance', description: 'Medical, dental, and vision coverage options' },
    { icon: Icons.sun, title: 'Paid Time Off', description: 'Vacation days, sick leave, and holidays' },
    { icon: Icons.graduationCap, title: 'Training', description: 'Ongoing professional development opportunities' },
    { icon: Icons.trending, title: 'Growth', description: 'Clear career advancement pathways' },
    { icon: Icons.heartFilled, title: 'Purpose', description: 'Make a real difference in childrens lives' },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="section-label">Benefits</span>
          <h2 className="section-title">
            Why Join <span className="text-accent">Our Team</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We value our team members and offer competitive benefits.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-3 md:gap-4 p-4 md:p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <div className="w-6 h-6 md:w-7 md:h-7 text-accent">{benefit.icon}</div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
