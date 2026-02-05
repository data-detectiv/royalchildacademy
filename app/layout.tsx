import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.royalchildhome.com'),
  title: {
    default: 'Royal Child Academy | Residential Group Home in Charlotte & Gastonia, NC',
    template: '%s | Royal Child Academy',
  },
  description:
    'Royal Child Academy provides exceptional residential group home services for I/DD children in Charlotte and Gastonia, North Carolina since 2018. CQL accredited with expertise, flexibility, and compassion.',
  keywords: [
    'residential care',
    'group home',
    'I/DD children',
    'autism care',
    'developmental disabilities',
    'Charlotte NC',
    'Gastonia NC',
    'CQL accredited',
    'DDA group homes',
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Royal Child Academy',
    description:
      'Exceptional residential group home services for I/DD children in Charlotte and Gastonia, NC since 2018.',
    url: 'https://www.royalchildhome.com',
    siteName: 'Royal Child Academy',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
