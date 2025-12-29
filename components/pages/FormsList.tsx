'use client'

import { motion } from 'framer-motion'
import { Icons } from '../icons'

const FormsList = () => {
  const forms = [
    {
      title: 'Referral Form',
      description: 'Form for professionals to refer a child to our services.',
      icon: Icons.clipboard,
    },
    {
      title: 'Family Information',
      description: 'Family background and contact information form.',
      icon: Icons.family,
    },
    {
      title: 'Medical History',
      description: 'Comprehensive medical history questionnaire.',
      icon: Icons.hospital,
    },
    {
      title: 'Consent Forms',
      description: 'Required consent and authorization documents.',
      icon: Icons.fileText,
    },
    {
      title: 'Visitation Request',
      description: 'Request form for scheduling family visits.',
      icon: Icons.calendar,
    },
    {
      title: 'Employment Application',
      description: 'Application form for job seekers.',
      icon: Icons.briefcase,
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {forms.map((form, index) => (
            <motion.div
              key={form.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:-translate-y-2"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-3 md:mb-4">
                <div className="w-6 h-6 md:w-7 md:h-7 text-accent">{form.icon}</div>
              </div>
              <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-2">
                {form.title}
              </h3>
              <p className="text-gray-500 mb-4 md:mb-6 text-sm md:text-base">{form.description}</p>
              <button className="inline-flex items-center gap-2 text-accent font-medium group-hover:underline text-sm md:text-base">
                <div className="w-4 h-4">{Icons.download}</div>
                Download PDF
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-gray-500 text-sm md:text-base">
            Need help with forms? Contact us at{' '}
            <a href="tel:7046069243" className="text-accent hover:underline">
              (704) 606-9243
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FormsList
