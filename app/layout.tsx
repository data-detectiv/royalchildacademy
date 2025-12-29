import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.royalchildhome.com'),
  title: {
    default: 'Royal Child Care Center Inc. | Residential Group Home in Charlotte, NC',
    template: '%s | Royal Child Care Center',
  },
  description:
    'Royal Child Care Center provides exceptional residential group home services for children with disabilities in Charlotte, North Carolina. We combine expertise with compassion.',
  keywords: [
    'residential care',
    'group home',
    'children with disabilities',
    'Charlotte NC',
    'child care',
    'CQL accredited',
    'DHHS licensed',
  ],
  openGraph: {
    title: 'Royal Child Care Center Inc.',
    description:
      'Exceptional residential group home services for children with disabilities in Charlotte, NC.',
    url: 'https://www.royalchildhome.com',
    siteName: 'Royal Child Care Center',
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
