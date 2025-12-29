'use client'

import { motion } from 'framer-motion'

const AccreditationHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-label text-accent">Accreditation</span>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6">
            Quality You Can
            <span className="block text-accent">Trust</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Our certifications and accreditations demonstrate our commitment to excellence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AccreditationHero
