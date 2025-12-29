'use client'

import { motion } from 'framer-motion'

const PrivacyContent = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content:
        'We collect information you provide directly to us, such as when you fill out a contact form, apply for employment, or communicate with us. This may include your name, email address, phone number, and other contact information.',
    },
    {
      title: 'How We Use Your Information',
      content:
        'We use the information we collect to respond to your inquiries, process applications, communicate with you about our services, and improve our website and services. We do not sell or share your personal information with third parties for marketing purposes.',
    },
    {
      title: 'Information Security',
      content:
        'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.',
    },
    {
      title: 'HIPAA Compliance',
      content:
        'Royal Child Care Center is committed to protecting the privacy and security of protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable laws.',
    },
    {
      title: 'Cookies',
      content:
        'Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may limit some functionality of our website.',
    },
    {
      title: 'Contact Us',
      content:
        'If you have any questions about this Privacy Policy or our data practices, please contact us at (704) 606-9243 or nhinton@royalchildhome.com.',
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="section-label">Legal</span>
            <h1 className="section-title">Privacy Policy</h1>
            <p className="text-gray-500">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivacyContent
