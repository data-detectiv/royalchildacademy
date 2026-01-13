'use client'

import { motion } from 'framer-motion'

const Stats = () => {
  const stats = [
    { value: '7+', label: 'Years of Excellence' },
    { value: '100+', label: 'Families Served' },
    { value: '6', label: 'Group Home Locations' },
    { value: '24/7', label: 'Support Available' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label text-accent">Our Impact</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white">
            Numbers That <span className="text-accent">Matter</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl md:text-6xl font-serif font-semibold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
