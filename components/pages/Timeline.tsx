'use client'

import { motion } from 'framer-motion'

const Timeline = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Founded',
      description: 'Royal Child Care Center was established in Charlotte, NC.',
    },
    {
      year: '2013',
      title: 'DHHS Licensed',
      description: 'Received official licensing from NC DHHS.',
    },
    {
      year: '2016',
      title: 'Expansion',
      description: 'Opened our second group home facility.',
    },
    {
      year: '2019',
      title: 'CQL Accreditation',
      description: 'Achieved prestigious CQL accreditation for quality.',
    },
    {
      year: '2023',
      title: 'Third Location',
      description: 'Expanded to our third group home in Charlotte area.',
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">
            Milestones of <span className="text-accent">Growth</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index !== milestones.length - 1 ? 'lg:mb-16' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-accent rounded-full hidden lg:block z-10" />

                <div
                  className={`lg:text-right ${index % 2 === 1 ? 'lg:order-2 lg:text-left' : ''}`}
                >
                  {index % 2 === 0 && (
                    <div className="card inline-block">
                      <span className="text-4xl font-serif font-semibold text-accent">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-500">{milestone.description}</p>
                    </div>
                  )}
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  {index % 2 === 1 && (
                    <div className="card inline-block">
                      <span className="text-4xl font-serif font-semibold text-accent">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-500">{milestone.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
