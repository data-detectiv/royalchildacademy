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
        'We offer residential home services for children with disabilities, including DDA group homes for Autism and developmental disabilities. Our services include residential support, clinical services (Psychology, Speech, Nursing, Dietary, Pharmacy, Social Work), and community networking programs.',
    },
    {
      question: 'Where are your locations?',
      answer:
        'We currently have two group homes in the Charlotte and Gastonia area. Our residential services are funded through State and County appropriations, Medicaid (ICF/IDD, Innovations), and resident fees such as Social Security, SSI and SA benefits, as well as private pay for services.',
    },
    {
      question: 'What programs do you offer?',
      answer:
        'Our Community Living Arrangement and Continuous Residence Support programs provide habilitative, social, vocational, educational and recreational choices that enable each individual to develop increased levels of independence and personal success.',
    },
    {
      question: 'What is your experience?',
      answer:
        'Founded in 2018, Royal Child Academy has extensive past performance with Good Shepherd Church I/DD Children, Lighthouse Children with I/DD, and numerous other families with I/DD children. We have built a reputation of excellence in comprehensive, quality, friendly and patient-centered care.',
    },
    {
      question: 'What makes Royal Child Academy different?',
      answer:
        'At Royal Child Academy, we believe families deserve to work with a provider who sees you or your loved one as more than just a patient. We develop care plans based on individual needs and our teams are hand-selected for their ability to provide thoughtful and respectful care.',
    },
    {
      question: 'Are you licensed and accredited?',
      answer:
        'Yes, Royal Child Academy is a licensed and certified agency. We are accredited by CQL (Council on Quality and Leadership) and contract with Partners Behavioral Health Management, demonstrating our commitment to high-quality care.',
    },
    {
      question: 'How do I contact you for more information?',
      answer:
        'For information about Residential Services, email us at nhinton@royalchildhome.com or call 704-606-9243. Royal Child Academy is available 24 hours a day, 7 days per week.',
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
