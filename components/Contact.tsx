'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import Image from 'next/image'
import { Icons } from './icons'

const Contact = () => {
  const contactInfo = [
    { icon: Icons.mapPin, title: 'Address', content: '6625 Sullins Rd, Charlotte, NC 28214', href: null },
    { icon: Icons.phone, title: 'Phone', content: '(704) 606-9243', href: 'tel:7046069243' },
    { icon: Icons.mail, title: 'Email', content: 'nhinton@royalchildhome.com', href: 'mailto:nhinton@royalchildhome.com' },
    { icon: Icons.clock, title: 'Hours', content: '24/7 Support Available', href: null },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let us Start the
              <span className="text-accent"> Conversation</span>
            </h2>
            <p className="section-subtitle mb-8 md:mb-10">
              Have questions about our services? We are here to help you find the right 
              care solution for your family.
            </p>
            <ContactForm />
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image - Hidden on mobile */}
            <div className="hidden md:block image-wrapper aspect-[4/3] mb-8">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
                alt="Contact us"
                fill
                className="object-cover"
              />
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="card p-4 md:p-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 md:mb-4">
                    <div className="w-5 h-5 md:w-6 md:h-6 text-accent">{info.icon}</div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{info.title}</h4>
                  {info.href ? (
                    <a href={info.href} className="text-gray-500 text-xs md:text-sm hover:text-accent transition-colors break-all">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-500 text-xs md:text-sm">{info.content}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
