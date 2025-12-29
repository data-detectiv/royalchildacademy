'use client'

import { motion } from 'framer-motion'

const FormsHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-label text-accent">Resources</span>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6">
            Downloadable
            <span className="block text-accent">Forms</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Access important forms and documents for our services.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FormsHero
