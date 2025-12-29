'use client'

import { motion } from 'framer-motion'
import { Icons } from '../icons'

const MissionVision = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card hover:-translate-y-2"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 md:mb-6">
              <div className="w-7 h-7 md:w-8 md:h-8 text-accent">{Icons.target}</div>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-3 md:mb-4">
              Our Mission
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              To assist our clients in meeting their care needs within the group home 
              setting, treating all clients, families, and caregivers with dignity and 
              respecting their individual rights.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              We strive to create an environment where every child feels valued, 
              supported, and empowered to reach their full potential.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card hover:-translate-y-2"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 md:mb-6">
              <div className="w-7 h-7 md:w-8 md:h-8 text-accent">{Icons.sparkles}</div>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-3 md:mb-4">
              Our Vision
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              To be the premier residential group home provider in North Carolina, 
              known for our exceptional care, innovative programs, and commitment 
              to the well-being of every child we serve.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              We envision a future where every child in our care has the opportunity 
              to thrive and lead a fulfilling life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
