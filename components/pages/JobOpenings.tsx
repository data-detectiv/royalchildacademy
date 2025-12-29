'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icons } from '../icons'

const JobOpenings = () => {
  const jobs = [
    {
      title: 'Direct Support Professional',
      type: 'Full-time',
      location: 'Charlotte, NC',
      description:
        'Provide direct care and support to children with disabilities in our residential group homes.',
    },
    {
      title: 'Registered Nurse (RN)',
      type: 'Part-time',
      location: 'Charlotte, NC',
      description:
        'Provide nursing care, medication management, and health monitoring for our residents.',
    },
    {
      title: 'House Manager',
      type: 'Full-time',
      location: 'Charlotte, NC',
      description:
        'Oversee daily operations of a group home and supervise direct care staff.',
    },
    {
      title: 'Overnight Caregiver',
      type: 'Full-time',
      location: 'Charlotte, NC',
      description:
        'Provide overnight care and supervision for residents in our group homes.',
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="section-label">Open Positions</span>
          <h2 className="section-title">
            Current <span className="text-accent">Opportunities</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We are always looking for compassionate individuals to join our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:-translate-y-2"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="px-2 md:px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {job.type}
                </span>
                <span className="text-gray-400 text-xs md:text-sm">{job.location}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 mb-2 md:mb-3 group-hover:text-accent transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-500 mb-4 md:mb-6 text-sm md:text-base">{job.description}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent font-medium group-hover:underline text-sm md:text-base"
              >
                Apply Now
                <div className="w-4 h-4">{Icons.arrowRight}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobOpenings
