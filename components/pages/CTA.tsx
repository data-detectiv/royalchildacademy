'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Icons } from '../icons'

const CTA = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1920&q=80"
          alt="Contact us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4 md:mb-6">
            Ready to Learn <span className="text-accent">More?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-relaxed">
            Contact us today to discuss how we can provide the best care for your loved one.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
              <div className="w-4 h-4">{Icons.arrowRight}</div>
            </Link>
            <a href="tel:7046069243" className="btn btn-secondary">
              <div className="w-4 h-4">{Icons.phone}</div>
              (704) 606-9243
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
