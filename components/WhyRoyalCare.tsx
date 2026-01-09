'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from './icons'

const WhyRoyalCare = () => {
  const stats = [
    { value: '10', label: 'Programs' },
    { value: '15', label: 'Years of Excellence' },
    { value: '6', label: 'Locations' },
    { value: '24/7', label: 'Support' },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              To Us, Caring is
              <span className="text-accent"> Personal</span>
            </h2>
            <p className="section-subtitle mb-8 md:mb-10">
              Our core value is to provide exceptional care that enriches the lives of 
              our clients and provides peace of mind for their families.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-dark rounded-2xl p-4 md:p-6"
                >
                  <p className="text-3xl md:text-4xl font-serif font-semibold text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/why-royal-care" className="btn btn-primary">
              Discover Why Us
              <div className="w-4 h-4">{Icons.arrowRight}</div>
            </Link>
          </motion.div>

          {/* Image Grid - Simplified on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="image-wrapper aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?w=600&q=80"
                    alt="Child in supportive environment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="image-wrapper aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                    alt="Professional caregiver"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="image-wrapper aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&q=80"
                    alt="Happy child"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="image-wrapper aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80"
                    alt="Learning activity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyRoyalCare
