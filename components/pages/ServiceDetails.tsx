'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ServiceDetails = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1484820540004-14229fe36ca4?w=800&q=80',
      title: 'Residential Services',
      description:
        'Royal Child Academy has provided residential services for people with autism and other developmental disabilities since 2019. Our residents enjoy individualized services and learning opportunities at homes, school or work, and throughout the community.',
      features: [
        'DDA group homes (Autism, DD)',
        'Charlotte and Gastonia locations',
        'Home-like environment',
        'Individualized services',
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
      title: 'Clinical Support',
      description:
        'Clinical supports are provided as needed to ensure comprehensive care for each resident. Our team of professionals works together to meet individual health and developmental needs.',
      features: [
        'Psychology',
        'Speech and Language',
        'Nursing and Dietary',
        'Pharmacy and Social Work',
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
      title: 'Community Living Arrangement',
      description:
        'Our Community Living Arrangement programs provide habilitative, social, vocational, educational and recreational choices that enable each individual to develop increased levels of independence and personal success.',
      features: [
        'Aid personal success',
        'Develop independence',
        'Community networking',
        'Vocational support',
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
      title: 'Continuous Residence Support',
      description:
        'Our Continuous Residence Support programs create opportunities for I/DD children to make choices, increase their independence, and maximize personal potential in a supportive environment.',
      features: [
        'Educational choices',
        'Recreational activities',
        'Social development',
        'Personal growth',
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
