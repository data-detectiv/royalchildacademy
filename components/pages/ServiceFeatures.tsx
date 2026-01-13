'use client'

import { motion } from 'framer-motion'
import { Icons } from '../icons'

const ServiceFeatures = () => {
  const features = [
    { icon: Icons.hospital, title: 'Licensed Facility', description: 'DHHS licensed and fully compliant' },
    { icon: Icons.trophy, title: 'CQL Accredited', description: 'Quality leadership certified' },
    { icon: Icons.users, title: 'Expert Staff', description: 'Trained and compassionate team' },
    { icon: Icons.clipboard, title: 'Custom Care Plans', description: 'Individualized attention for each child' },
    { icon: Icons.home, title: '6 Homes', description: 'Charlotte and Gastonia locations' },
    { icon: Icons.phone, title: '24/7 Support', description: 'Round-the-clock availability' },
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
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">
            What Sets Us <span className="text-accent">Apart</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center hover:-translate-y-2"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
                <div className="w-7 h-7 md:w-8 md:h-8 text-accent">{feature.icon}</div>
              </div>
              <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceFeatures
