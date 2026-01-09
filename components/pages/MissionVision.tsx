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
              To assist clients in meeting their care needs within the home care setting,
              treating all clients, families, and caregivers with dignity and respecting
              their individual rights.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              We excel at creating an atmosphere where opportunities exist for I/DD children
              to make choices, increase their independence, and maximize personal potential.
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
              To promote and inspire consumers and guardians through systems of care
              that ensure attainment and fulfillment of their unique personal and daily
              needs within their homes and in the community in general.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Our Community Living Arrangement and Continuous Residence Support programs
              provide habilitative, social, vocational, educational and recreational
              choices that enable each individual to develop increased levels of
              independence and personal success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
