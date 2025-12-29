'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const CaregiversHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80"
          alt="Caregivers"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary" />
      </div>

      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

      <div className="container-main relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-label text-accent">For Caregivers</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white mb-6">
            Partner With
            <span className="block text-accent">Royal Child Care</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Join our network of dedicated caregivers making a difference in childrens lives.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CaregiversHero
