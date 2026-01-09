'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from './icons'

const About = () => {
  const features = [
    { icon: Icons.home, title: 'Home-Like Environment' },
    { icon: Icons.users, title: '24/7 Professional Care' },
    { icon: Icons.heart, title: 'Compassionate Staff' },
    { icon: Icons.clipboard, title: 'Personalized Plans' },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Side - Hidden on mobile, shown on tablet+ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="image-wrapper aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=800&q=80"
                  alt="Supportive care environment"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlapping Image */}
              <div className="absolute -bottom-8 -right-8 w-2/3 image-wrapper aspect-square shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&q=80"
                  alt="Happy child"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Accent Box */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Caring for Children
              <span className="text-accent"> Since 2018</span>
            </h2>
            <p className="section-subtitle mb-6 md:mb-8">
              At Royal Child Academy, we combine expertise, flexibility, and commitment with
              compassion to provide the best quality residential care in North Carolina.
            </p>
            <p className="text-gray-500 mb-6 md:mb-8 leading-relaxed">
              Our mission is to assist clients in meeting their care needs within the
              home care setting, treating all clients, families, and caregivers with
              dignity and respecting their individual rights. We excel at creating an
              atmosphere where opportunities exist for I/DD children to make choices,
              increase their independence, and maximize personal potential.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                    <div className="w-5 h-5 md:w-6 md:h-6 text-accent">{feature.icon}</div>
                  </div>
                  <span className="font-medium text-gray-700 text-sm md:text-base">{feature.title}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn btn-dark">
              Learn More About Us
              <div className="w-4 h-4">{Icons.arrowRight}</div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
