'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icons } from '../icons'

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Experienced Team',
      description:
        'Our staff brings years of experience in caring for children with diverse needs, providing expert support.',
    },
    {
      title: 'Individualized Care',
      description:
        'Every child receives a personalized care plan tailored to their specific needs and goals.',
    },
    {
      title: 'Family Partnership',
      description:
        'We believe in working closely with families to ensure the best outcomes for each child.',
    },
    {
      title: 'Safe Environment',
      description:
        'Our homes are designed with safety in mind, providing a secure and nurturing space.',
    },
    {
      title: 'Comprehensive Services',
      description:
        'From clinical support to life skills, we offer everything under one roof.',
    },
    {
      title: 'Community Connection',
      description:
        'We integrate children into the broader community through activities and outings.',
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Our Difference</span>
            <h2 className="section-title">
              What Makes Us <span className="text-accent">Special</span>
            </h2>
            <p className="section-subtitle mb-8 md:mb-10">
              We go beyond basic care to provide an enriching experience for every child.
            </p>

            <div className="space-y-4 md:space-y-6">
              {reasons.slice(0, 3).map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3 md:gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <div className="w-4 h-4 md:w-5 md:h-5 text-accent">{Icons.check}</div>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="image-wrapper aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?w=800&q=80"
                alt="Why choose us"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24">
          {reasons.slice(3).map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:-translate-y-2"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 md:mb-4">
                <div className="w-5 h-5 md:w-6 md:h-6 text-accent">{Icons.check}</div>
              </div>
              <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
