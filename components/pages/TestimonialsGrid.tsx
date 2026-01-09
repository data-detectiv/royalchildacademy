'use client'

import { motion } from 'framer-motion'
import { Icons } from '../icons'

const TestimonialsGrid = () => {
  const testimonials = [
    {
      quote:
        'We have been very pleased with the high standards of professionalism and kindness and work ethic from the Royal Child Care team. I recommend this company to everyone. I thank you so much for the care. Keep up the good work.',
      author: 'Jerry Callahan & Family',
      role: 'Family',
      location: 'Charlotte, NC',
      rating: 5,
    },
    {
      quote:
        'They were exceptional in all areas of service. I thank you for the assistance.',
      author: 'Illiana Ortega',
      role: 'Family Member',
      location: 'Charlotte, NC',
      rating: 5,
    },
    {
      quote:
        'I truly appreciate the responsiveness and receptiveness of the team. They are caring and very reliable.',
      author: 'Thomas K. Sakyi',
      role: 'Family Member',
      location: 'Charlotte, NC',
      rating: 5,
    },
    {
      quote:
        'I thank you for the work you did. Made everything safe and comfortable.',
      author: 'Susanna Truong',
      role: 'Family Member',
      location: 'Charlotte, NC',
      rating: 5,
    },
    {
      quote:
        'We cannot thank Royal Child Care and its exceptional staff enough. She was extremely qualified and professional in her demeanor, gracious and respectful to our entire family.',
      author: 'Chrystal B.',
      role: 'Family Member',
      location: 'Charlotte, NC',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-4 h-4 text-accent">{Icons.star}</div>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-primary font-bold text-sm md:text-lg">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    {testimonial.role} &bull; {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsGrid
