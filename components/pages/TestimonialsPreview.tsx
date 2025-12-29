'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icons } from '../icons'

const TestimonialsPreview = () => {
  const testimonials = [
    {
      quote:
        'Royal Child Care has been a blessing for our family. The care and attention our son receives is exceptional.',
      author: 'Sarah Johnson',
      role: 'Parent',
    },
    {
      quote:
        'We could not be happier with the care our daughter receives. The staff truly cares about each resident.',
      author: 'Michael Chen',
      role: 'Family Member',
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What Families <span className="text-accent">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 text-accent">{Icons.star}</div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-primary font-bold text-sm md:text-base">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials" className="btn btn-outline">
            View All Testimonials
            <div className="w-4 h-4">{Icons.arrowRight}</div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPreview
