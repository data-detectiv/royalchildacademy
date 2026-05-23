'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Icons } from '../icons'

const referralSchema = z.object({
  referrerName: z.string().optional(),
  agency: z.string().optional(),
  referralPhone: z.string().optional(),
  servicesRequested: z.string().optional(),
  sourceOfFunds: z.string().optional(),
  referralDate: z.string().optional(),
  clientName: z.string().min(2, 'Client name is required'),
  homeAddress: z.string().optional(),
  city: z.string().optional(),
  zip: z.string().optional(),
  primaryPhone: z.string().optional(),
  secondaryContact: z.string().optional(),
  gender: z.string().optional(),
  race: z.string().optional(),
  gradeLevel: z.string().optional(),
  dob: z.string().optional(),
  previousSchool: z.string().optional(),
  primaryLanguage: z.string().optional(),
  age: z.string().optional(),
  guardianName: z.string().optional(),
  relationToClient: z.string().optional(),
  guardianAddress: z.string().optional(),
  guardianCity: z.string().optional(),
  guardianZip: z.string().optional(),
  guardianPhone: z.string().optional(),
  guardianEmail: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  presentingProblem: z.string().optional(),
  diagnosis: z.string().optional(),
  medication: z.string().optional(),
  whenNeeded: z.string().optional(),
})

type ReferralFormData = z.infer<typeof referralSchema>

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all'

const ReferralForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
  })

  const onSubmit = async (data: ReferralFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const Field = ({
    name,
    label,
    type = 'text',
    placeholder,
    required,
  }: {
    name: keyof ReferralFormData
    label: string
    type?: string
    placeholder?: string
    required?: boolean
  }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && '*'}
      </label>
      <input id={name} type={type} {...register(name)} className={inputClass} placeholder={placeholder} />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
    </div>
  )

  const TextArea = ({
    name,
    label,
    placeholder,
  }: {
    name: keyof ReferralFormData
    label: string
    placeholder?: string
  }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        id={name}
        rows={3}
        {...register(name)}
        className={`${inputClass} resize-none`}
        placeholder={placeholder}
      />
    </div>
  )

  return (
    <section id="referral-form" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
      <div className="container-main max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <span className="section-label">Submit a Referral</span>
          <h2 className="section-title">
            Online Referral <span className="text-accent">Form</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Complete the form below to refer a child to our services, or download the printable referral
            form to submit by hand.
          </p>
          <a
            href="/royal-child-academy-referral-form.doc"
            download
            className="btn btn-secondary mt-6 inline-flex"
          >
            <div className="w-4 h-4">{Icons.download}</div>
            Download Printable Form
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10"
        >
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700">
              Thank you! Your referral has been submitted. Our team will be in touch shortly.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
              There was an error submitting your referral. Please try again or call us at (704) 606-9243.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* Referral Source */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Referral Source
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="referrerName" label="Name of Person Referring (if not parent)" />
                <Field name="agency" label="Agency / Organization" />
                <Field name="referralPhone" label="Phone Number of Referral Source" type="tel" />
                <Field name="sourceOfFunds" label="Source of Funds" />
                <Field name="servicesRequested" label="Service(s) and Level of Care Requested" />
                <Field name="referralDate" label="Date of Referral" type="date" />
              </div>
            </div>

            {/* Client Information */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Client Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <Field name="clientName" label="Client First Name, Middle Initial, Last Name" required />
                </div>
                <div className="sm:col-span-2">
                  <Field name="homeAddress" label="Home Address" />
                </div>
                <Field name="city" label="City" />
                <Field name="zip" label="Zip" />
                <Field name="primaryPhone" label="Primary Phone" type="tel" />
                <Field name="secondaryContact" label="Secondary Phone / Email" />
                <Field name="gender" label="Client Gender" placeholder="M / F" />
                <Field name="race" label="Client Race" />
                <Field name="dob" label="Client DOB" type="date" />
                <Field name="age" label="Client Age" />
                <Field name="gradeLevel" label="Client Grade Level" />
                <Field name="primaryLanguage" label="Primary Language" />
                <div className="sm:col-span-2">
                  <Field name="previousSchool" label="Client Previous School" />
                </div>
              </div>
            </div>

            {/* Parent / Legal Guardian */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Parent / Legal Guardian Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="guardianName" label="Legal Guardian Name" />
                <Field name="relationToClient" label="Relation to Client" />
                <div className="sm:col-span-2">
                  <Field name="guardianAddress" label="Mailing Address (if different)" />
                </div>
                <Field name="guardianCity" label="City" />
                <Field name="guardianZip" label="Zip" />
                <Field name="guardianPhone" label="Legal Guardian Phone (if different)" type="tel" />
                <Field name="guardianEmail" label="Email" type="email" />
              </div>
            </div>

            {/* Clinical */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Clinical Information
              </h3>
              <div className="space-y-5">
                <TextArea name="presentingProblem" label="Presenting Problem / Reason for Placement" />
                <TextArea name="diagnosis" label="Diagnosis" />
                <TextArea name="medication" label="Medication" />
                <Field name="whenNeeded" label="When Is Service(s) Needed" />
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Please be prepared to provide a psychiatric evaluation, CCA, ISP/BSP, and any other relevant
              documents. Our team will request these after your referral is received.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Referral
                  <div className="w-4 h-4">{Icons.arrowRight}</div>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ReferralForm
