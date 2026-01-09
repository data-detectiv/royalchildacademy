'use client'

import { motion } from 'framer-motion'
import { Icons } from '../icons'

const AccreditationInfo = () => {
  const accreditations = [
    {
      title: 'CQL Accreditation',
      description:
        'We are accredited by the Council on Quality and Leadership (CQL), demonstrating our commitment to person-centered excellence and quality improvement.',
      icon: Icons.trophy,
      features: [
        'Person-centered practices',
        'Continuous quality improvement',
        'Staff development focus',
        'Best practice standards',
      ],
    },
    {
      title: 'Partners Behavioral Health Management',
      description:
        'Royal Child Academy contracts with Partners Behavioral Health Management to provide comprehensive care services meeting all requirements for residential group homes.',
      icon: Icons.checkCircle,
      features: [
        'Contract partnership',
        'Behavioral health services',
        'Quality care standards',
        'Comprehensive support',
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={accreditation.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card hover:-translate-y-2"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 md:mb-6">
                <div className="w-7 h-7 md:w-8 md:h-8 text-accent">{accreditation.icon}</div>
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 mb-3 md:mb-4">
                {accreditation.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                {accreditation.description}
              </p>
              <ul className="space-y-2 md:space-y-3">
                {accreditation.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent">{Icons.check}</div>
                    </div>
                    <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24 text-center"
        >
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 mb-3 md:mb-4">
            What This Means for You
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Our accreditations ensure that your loved one receives care from an 
            organization that meets the highest standards in the industry. We are 
            committed to continuous improvement and excellence in everything we do.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AccreditationInfo
