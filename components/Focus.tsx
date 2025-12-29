'use client'

import { motion } from 'framer-motion'
import { Icons } from './icons'

const Focus = () => {
  const values = [
    {
      icon: Icons.target,
      title: 'Service',
      description: 'Dedicated to providing exceptional care that meets the unique needs of each individual we serve.',
    },
    {
      icon: Icons.handshake,
      title: 'Community',
      description: 'Building strong connections between residents, families, caregivers, and the broader community.',
    },
    {
      icon: Icons.heartFilled,
      title: 'Care',
      description: 'Approaching every interaction with compassion, dignity, and respect for individual rights.',
    },
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
          <span className="section-label">Our Focus</span>
          <h2 className="section-title">
            What Drives Us <span className="text-accent">Every Day</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Our core values guide everything we do, from daily care to long-term planning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card group text-center hover:-translate-y-2"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 text-accent">{value.icon}</div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 mb-3 md:mb-4">
                {value.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Focus
