import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const referralSchema = z.object({
  // Referral source
  referrerName: z.string().optional(),
  agency: z.string().optional(),
  referralPhone: z.string().optional(),
  servicesRequested: z.string().optional(),
  sourceOfFunds: z.string().optional(),
  referralDate: z.string().optional(),
  // Client information
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
  // Parent / legal guardian
  guardianName: z.string().optional(),
  relationToClient: z.string().optional(),
  guardianAddress: z.string().optional(),
  guardianCity: z.string().optional(),
  guardianZip: z.string().optional(),
  guardianPhone: z.string().optional(),
  guardianEmail: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  // Clinical
  presentingProblem: z.string().optional(),
  diagnosis: z.string().optional(),
  medication: z.string().optional(),
  whenNeeded: z.string().optional(),
})

type ReferralData = z.infer<typeof referralSchema>

const labels: Record<keyof ReferralData, string> = {
  referrerName: 'Name of Person Referring',
  agency: 'Agency / Organization',
  referralPhone: 'Phone Number of Referral Source',
  servicesRequested: 'Service(s) and Level of Care Requested',
  sourceOfFunds: 'Source of Funds',
  referralDate: 'Date of Referral',
  clientName: 'Client Name',
  homeAddress: 'Home Address',
  city: 'City',
  zip: 'Zip',
  primaryPhone: 'Primary Phone',
  secondaryContact: 'Secondary Phone / Email',
  gender: 'Client Gender',
  race: 'Client Race',
  gradeLevel: 'Client Grade Level',
  dob: 'Client DOB',
  previousSchool: 'Client Previous School',
  primaryLanguage: 'Primary Language',
  age: 'Client Age',
  guardianName: 'Legal Guardian Name',
  relationToClient: 'Relation to Client',
  guardianAddress: 'Mailing Address',
  guardianCity: 'City',
  guardianZip: 'Zip',
  guardianPhone: 'Legal Guardian Phone',
  guardianEmail: 'Email',
  presentingProblem: 'Presenting Problem / Reason for Placement',
  diagnosis: 'Diagnosis',
  medication: 'Medication',
  whenNeeded: 'When Is Service(s) Needed',
}

const sections: { title: string; fields: (keyof ReferralData)[] }[] = [
  {
    title: 'Referral Source',
    fields: ['referrerName', 'agency', 'referralPhone', 'servicesRequested', 'sourceOfFunds', 'referralDate'],
  },
  {
    title: 'Client Information',
    fields: [
      'clientName', 'homeAddress', 'city', 'zip', 'primaryPhone', 'secondaryContact',
      'gender', 'race', 'gradeLevel', 'dob', 'previousSchool', 'primaryLanguage', 'age',
    ],
  },
  {
    title: 'Parent / Legal Guardian',
    fields: ['guardianName', 'relationToClient', 'guardianAddress', 'guardianCity', 'guardianZip', 'guardianPhone', 'guardianEmail'],
  },
  {
    title: 'Clinical',
    fields: ['presentingProblem', 'diagnosis', 'medication', 'whenNeeded'],
  },
]

function buildHtml(data: ReferralData): string {
  const renderRow = (key: keyof ReferralData) => {
    const value = data[key]
    if (!value) return ''
    return `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top;">${labels[key]}</td><td style="padding:4px 0;">${String(value).replace(/\n/g, '<br>')}</td></tr>`
  }

  const renderSection = (section: { title: string; fields: (keyof ReferralData)[] }) => {
    const rows = section.fields.map(renderRow).filter(Boolean).join('')
    if (!rows) return ''
    return `<h3 style="margin:24px 0 8px;border-bottom:1px solid #ddd;padding-bottom:4px;">${section.title}</h3><table style="border-collapse:collapse;width:100%;">${rows}</table>`
  }

  return `
    <h2>New Referral Form Submission</h2>
    <p>A referral was submitted through the Royal Child Academy website.</p>
    ${sections.map(renderSection).join('')}
    <p style="margin-top:24px;color:#666;font-size:13px;">Reminder: supporting documents (psychiatric evaluation, CCA, ISP/BSP, etc.) are not collected through this online form and should be requested separately.</p>
  `
}

function buildText(data: ReferralData): string {
  const lines: string[] = ['New Referral Form Submission', '']
  for (const section of sections) {
    const rows = section.fields
      .filter((key) => data[key])
      .map((key) => `${labels[key]}: ${data[key]}`)
    if (rows.length) {
      lines.push(section.title.toUpperCase(), ...rows, '')
    }
  }
  return lines.join('\n')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = referralSchema.parse(body)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.REFERRAL_EMAIL || process.env.CONTACT_EMAIL || 'nhinton@royalchildhome.com',
      replyTo: data.guardianEmail || undefined,
      subject: `New Referral: ${data.clientName}`,
      html: buildHtml(data),
      text: buildText(data),
    }

    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      await transporter.sendMail(mailOptions)
    } else {
      console.log('Referral form submission:', data)
    }

    return NextResponse.json({ message: 'Referral submitted successfully' }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Referral form error:', error)
    return NextResponse.json({ error: 'Failed to submit referral' }, { status: 500 })
  }
}
