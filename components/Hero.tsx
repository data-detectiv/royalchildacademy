'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Icons } from './icons'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1920&q=80"
          alt="Caring environment"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/70 to-primary" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="container-main relative z-10 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label text-accent">Welcome to Royal Child Academy</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white mb-6 leading-[1.1]">
              Where Every Child
              <span className="block text-accent">Belongs</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 md:mb-10 max-w-lg leading-relaxed">
              Providing exceptional residential group home services for I/DD children
              in Charlotte and Gastonia, North Carolina since 2018.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn btn-primary">
                Our Services
                <div className="w-4 h-4">{Icons.arrowRight}</div>
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>

            {/* Trust Badges - Hidden on mobile */}
            <div className="mt-12 md:mt-16 hidden sm:flex items-center gap-6 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 text-accent">{Icons.trophy}</div>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base">CQL Accredited</p>
                  <p className="text-white/50 text-xs md:text-sm">Quality Leadership</p>
                </div>
              </div>
              <div className="w-px h-10 md:h-12 bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 text-accent">{Icons.shield}</div>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base">Licensed Agency</p>
                  <p className="text-white/50 text-xs md:text-sm">State Certified</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Video - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl blur-2xl" />
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/v4Nq-bLkvP8"
                  title="Royal Child Academy Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -left-8 -bottom-6 glass rounded-2xl p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-6 h-6 text-accent">{Icons.heart}</div>
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-semibold text-primary">Since 2018</p>
                    <p className="text-gray-500 text-sm">Years of Care</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
