import PaymentPolicy from '@/components/pages/PaymentPolicy'

export const metadata = {
  title: 'Payment Policy',
  description: 'Ragini Nursing Bureau Delhi payment terms, accepted methods, refund policy, and billing for nursing and home healthcare services in Delhi.',
  openGraph: {
    title: 'Payment Policy - Ragini Nursing Bureau Delhi',
    description: 'Payment terms and conditions for our healthcare services in Delhi.',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function PaymentPolicyPage() {
  return <PaymentPolicy />
}

