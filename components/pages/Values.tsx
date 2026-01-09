'use client'

import { motion } from 'framer-motion'
import { Icons } from '../icons'

const Values = () => {
  const values = [
    {
      icon: Icons.heartFilled,
      title: 'Compassion',
      description: 'Guaranteeing compassionate care from the heart while respecting dignity, pride, and independence.',
    },
    {
      icon: Icons.star,
      title: 'Excellence',
      description: 'Combining expertise, flexibility, and commitment to provide the best quality care.',
    },
    {
      icon: Icons.shield,
      title: 'Integrity',
      description: 'Operating with professionalism and a passion for excellence in all we do.',
    },
    {
      icon: Icons.target,
      title: 'Independence',
      description: 'Creating opportunities for I/DD children to increase their independence and maximize potential.',
    },
    {
      icon: Icons.family,
      title: 'Person-Centered',
      description: 'Developing care plans based on individual needs with hand-selected, thoughtful teams.',
    },
    {
      icon: Icons.refresh,
      title: 'Quality',
      description: 'Making a difference through quality, affordable, personalized, and timely service.',
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
          <span className="section-label">Our Values</span>
          <h2 className="section-title">
            The Principles That <span className="text-accent">Guide Us</span>
          </h2>
          <p className="section-subtitle mx-auto">
            To provide exceptional care that enriches the lives of our clients and provides peace of mind for their families.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4 p-4 md:p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <div className="w-6 h-6 md:w-7 md:h-7 text-accent">{value.icon}</div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-1 md:mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
