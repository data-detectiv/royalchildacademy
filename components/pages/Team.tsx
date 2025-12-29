'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Team = () => {
  const team = [
    {
      name: 'Natasha Hinton',
      role: 'Founder & Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Care Coordinator',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
    {
      name: 'David Thompson',
      role: 'Clinical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label">Our Team</span>
          <h2 className="section-title">
            Meet the People <span className="text-accent">Behind Our Care</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Our dedicated team brings years of experience and a passion for helping children thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 image-wrapper aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
