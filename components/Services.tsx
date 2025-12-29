'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Icons } from './icons'

const Services = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80',
      title: 'Residential Care',
      description: 'Safe, nurturing group home environments where children can thrive and grow.',
    },
    {
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
      title: '24/7 Support',
      description: 'Round-the-clock care from our dedicated team of trained professionals.',
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      title: 'Clinical Services',
      description: 'Comprehensive clinical supports including therapy, nursing, and more.',
    },
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
      title: 'Life Skills',
      description: 'Personalized programs to develop independence and daily living skills.',
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-white overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8 mb-12 md:mb-16"
        >
          <div>
            <span className="section-label text-accent">Our Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white">
              Comprehensive Care
              <span className="text-accent"> Solutions</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-md">
            We offer a full range of services designed to meet the unique needs of each child.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl mb-4 md:mb-6">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-white mb-1 md:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
        >
          <Link href="/services" className="btn btn-primary">
            View All Services
            <div className="w-4 h-4">{Icons.arrowRight}</div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
