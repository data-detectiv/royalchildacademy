'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '../icons'

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What types of care do you provide?',
      answer:
        'We provide 24/7 residential group home care for children with disabilities. Our services include personal care, clinical support, therapy services, life skills development, and recreational activities.',
    },
    {
      question: 'How do I know if my child qualifies for your services?',
      answer:
        'Children who qualify typically have developmental, intellectual, or physical disabilities that require residential care. We work with families and referral sources to determine eligibility based on individual needs.',
    },
    {
      question: 'What is the referral process?',
      answer:
        'Referrals can come from DSS, MCO care coordinators, hospitals, or families directly. Contact us to start the process, and we will guide you through the necessary steps and paperwork.',
    },
    {
      question: 'Can families visit their children?',
      answer:
        'Absolutely! We encourage family involvement and regular visits. We work with families to schedule visits that work for everyone and support ongoing family connections.',
    },
    {
      question: 'What training does your staff receive?',
      answer:
        'All staff complete comprehensive training including CPR/First Aid, crisis intervention, medication administration, and specialized training for working with children with disabilities.',
    },
    {
      question: 'Are you licensed and accredited?',
      answer:
        'Yes, we are licensed by NC DHHS and accredited by CQL (Council on Quality and Leadership), demonstrating our commitment to high-quality care.',
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 md:py-6 flex items-center justify-between text-left group"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors pr-6 md:pr-8">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-50 flex items-center justify-center transition-all ${
                    openIndex === index ? 'bg-accent text-primary rotate-180' : 'text-gray-400'
                  }`}
                >
                  <div className="w-4 h-4 md:w-5 md:h-5">{Icons.chevronDown}</div>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 md:pb-6 text-gray-500 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQAccordion
