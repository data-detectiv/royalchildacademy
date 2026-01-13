'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80"
          alt="About Royal Child Care"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary" />
      </div>

      {/* Decorative */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container-main relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="section-label text-accent">About Us</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white mb-6">
            Our Story of
            <span className="block text-accent">Care & Compassion</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            Since 2018, we have been dedicated to providing exceptional residential
            care for I/DD children in Charlotte and Gastonia, North Carolina.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHero
