'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icons } from '../icons'

const EmployeeLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Login functionality would be implemented with your authentication system.')
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 pb-12 px-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 md:mb-10">
            <Link href="/" className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-light rounded-lg rotate-6" />
                <div className="relative w-4 h-4 md:w-5 md:h-5 text-primary">{Icons.crown}</div>
              </div>
              <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
                Royal Child Care
              </span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2">
              Employee Login
            </h1>
            <p className="text-gray-500 text-sm md:text-base">
              Access your employee portal
            </p>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm md:text-base"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm md:text-base"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent"
                  />
                  <span className="text-xs md:text-sm text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-xs md:text-sm text-accent hover:underline">
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="btn btn-primary w-full justify-center">
                Sign In
              </button>
            </form>
          </div>

          <p className="text-center text-gray-500 text-xs md:text-sm mt-6 md:mt-8">
            Not an employee?{' '}
            <Link href="/contact" className="text-accent hover:underline">
              Contact us
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EmployeeLogin
