'use client'

import { motion } from 'framer-motion'
import { Icons } from '../icons'

const TestimonialsGrid = () => {
  const testimonials = [
    {
      quote:
        'Royal Child Care has been a blessing for our family. The care and attention our son receives is exceptional. The staff truly understands his needs and goes above and beyond every day.',
      author: 'Sarah Johnson',
      role: 'Parent',
      location: 'Charlotte, NC',
      rating: 5,
    },
    {
      quote:
        'We could not be happier with the care our daughter receives. The staff is compassionate, professional, and truly cares about each resident. We have peace of mind knowing she is in good hands.',
      author: 'Michael Chen',
      role: 'Family Member',
      location: 'Charlotte, NC',
      rating: 5,
    },
    {
      quote:
        'The individualized care plan has made such a difference. Our son has grown so much since coming to Royal Child Care. The programs and support are exactly what we were looking for.',
      author: 'Emily Rodriguez',
      role: 'Parent',
      location: 'Charlotte, NC',
      rating: 5,
    },
    {
      quote:
        'The communication with staff is excellent. We are always kept informed about our loved ones progress and any concerns. The transparency and partnership mean everything to us.',
      author: 'David Thompson',
      role: 'Family Member',
      location: 'Charlotte, NC',
      rating: 5,
    },
    {
      quote:
        'Royal Child Care provides a home-like environment that makes all the difference. Our daughter feels comfortable and safe, which allows her to thrive and grow.',
      author: 'Lisa Anderson',
      role: 'Parent',
      location: 'Charlotte, NC',
      rating: 5,
    },
    {
      quote:
        'The clinical support services are comprehensive and well-coordinated. We appreciate having access to all the specialists our son needs in one place.',
      author: 'Robert Williams',
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
