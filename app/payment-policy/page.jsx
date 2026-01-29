import PaymentPolicy from '@/components/pages/PaymentPolicy'

export const metadata = {
  title: 'Payment Policy',
  description: 'Understand Ragini Nursing Bureau\'s payment terms, accepted payment methods, refund policy, and billing procedures for home healthcare services.',
  openGraph: {
    title: 'Payment Policy - Ragini Nursing Bureau',
    description: 'Payment terms and conditions for our healthcare services.',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function PaymentPolicyPage() {
  return <PaymentPolicy />
}

