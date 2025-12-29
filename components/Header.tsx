'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from './icons'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white shadow-lg'
          : 'py-4 md:py-6 bg-primary/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-light rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="relative w-4 h-4 md:w-5 md:h-5 text-primary">
                {Icons.crown}
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg md:text-xl font-semibold tracking-tight transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                Royal Child Care
              </span>
              <span className={`text-[8px] md:text-[10px] tracking-[0.15em] uppercase transition-colors hidden sm:block ${
                isScrolled ? 'text-gray-500' : 'text-white/70'
              }`}>
                Center Inc.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-primary hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-3 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-light'
                  : 'bg-accent text-primary hover:bg-accent-light'
              }`}
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              isScrolled ? 'bg-gray-100' : 'bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="container-main py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 btn btn-primary justify-center"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
