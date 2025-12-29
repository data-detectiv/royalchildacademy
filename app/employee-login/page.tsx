import { Metadata } from 'next'
import EmployeeLogin from '@/components/pages/EmployeeLogin'

export const metadata: Metadata = {
  title: 'Employee Login',
  description: 'Employee portal login for Royal Child Care Center staff.',
}

export default function EmployeeLoginPage() {
  return <EmployeeLogin />
}
