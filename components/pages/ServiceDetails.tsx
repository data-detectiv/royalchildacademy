'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ServiceDetails = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80',
      title: 'Residential Care',
      description:
        'Our group homes provide a safe, nurturing environment where children can thrive. Each home is designed to feel like a real home, with comfortable living spaces and personalized care.',
      features: [
        'Home-like environment',
        'Personalized care plans',
        'Family-style meals',
        'Structured daily routines',
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      title: 'Clinical Support',
      description:
        'Our clinical team provides comprehensive support services including therapy, nursing care, and specialized interventions tailored to each child.',
      features: [
        'Behavioral therapy',
        'Occupational therapy',
        'Speech therapy',
        'Nursing services',
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
      title: '24/7 Professional Care',
      description:
        'Our trained staff provides round-the-clock care and supervision, ensuring every child receives the attention and support they need at all times.',
      features: [
        'Trained caregivers',
        'Emergency response',
        'Medication management',
        'Health monitoring',
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      title: 'Life Skills Development',
      description:
        'We help children develop essential life skills through structured programs and activities, preparing them for greater independence.',
      features: [
        'Daily living skills',
        'Social skills training',
        'Educational support',
        'Recreation activities',
      ],
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-main">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="image-wrapper aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails
