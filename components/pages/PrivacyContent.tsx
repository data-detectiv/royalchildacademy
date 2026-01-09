'use client'

import { motion } from 'framer-motion'

const PrivacyContent = () => {
  const sections = [
    {
      title: 'Introduction',
      content:
        'Royal Child Academy adheres to the highest standards and applicable law to maintain the privacy of personal information that may be collected at this website. When you provide any of the information described in this Privacy Statement, you consent to the use and disclosure of that information as described by this statement. This privacy statement does not apply to the practices of third parties that Royal Child Academy does not own or control, or to individuals that Royal Child Academy does not employ or manage.',
    },
    {
      title: 'User-Generated Information',
      content:
        'We receive and store any information you enter on our website or provide to us in any other way. Royal Child Academy will retain your contact information (such as name and email address) only if you contact us, for the purposes of responding to your inquiry. If you e-mail us, you are voluntarily releasing the content of your e-mail to us (including your e-mail address). We only collect personal information that is relevant to the purpose of our site.',
    },
    {
      title: 'Automatic Information',
      content:
        'We receive and store certain types of information whenever you interact with us. Royal Child Academy automatically receives and records certain "traffic data" on our server logs from your browser including your IP address, and the page you requested. Royal Child Academy uses this traffic data to help diagnose problems with its server, analyze trends and administer the site. Cookies are alphanumeric identifiers that we transfer to your computer\'s hard drive through your Web browser to enable our systems to recognize your browser. Royal Child Academy\'s cookies do not collect personal information.',
    },
    {
      title: 'How Information is Used and Shared',
      content:
        'Royal Child Academy does not share any personal information on site visitors, except when we believe in good faith that release is necessary to comply with that law; enforce or apply our conditions of use and other agreements; or protect the rights, property, or safety of Royal Child Academy, our employees, our visitors, or others. We neither rent nor sell your personal information to anyone.',
    },
    {
      title: 'Links to Other Sites',
      content:
        'For your convenience, this page may contain certain hyperlinks to other websites. While Royal Child Academy\'s website is subject to this privacy statement, we can make no promises or guarantees regarding data collection on the hyperlinked pages and sites that are not owned by Royal Child Academy. We recommend that you read the privacy statement for each third party site you visit.',
    },
    {
      title: 'Changes to this Privacy Statement',
      content:
        'Royal Child Academy may amend this Privacy Statement. Use of information we collect now is subject to the Privacy Statement in effect at the time such information is used. If we make changes to our privacy policy, we will notify you by posting an announcement on our web site so you are always aware of what information we collect, how we use it, and under what circumstances if any, it is disclosed.',
    },
    {
      title: 'Information Security',
      content:
        'Royal Child Academy uses commercially reasonable methods consistent with industry practice to prevent unauthorized access or disclosure, to maintain data accuracy, and to ensure appropriate use of your personal information.',
    },
    {
      title: 'Contact Us',
      content:
        'If you have any questions, comments, suggestions on how we can make this website more useful, please contact us: 6625 Sullins Road, Charlotte, NC 28214 | www.royalchildhome.com | (704) 606-9243 | nhinton@royalchildhome.com',
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
