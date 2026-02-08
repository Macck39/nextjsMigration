import TermsConditions from '@/components/pages/TermsConditions'

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for Ragini Nursing Bureau Delhi nursing and home healthcare services. Your rights and responsibilities as a client in Delhi.',
  openGraph: {
    title: 'Terms & Conditions - Ragini Nursing Bureau Delhi',
    description: 'Terms of service for Ragini Nursing Bureau Delhi healthcare services.',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function TermsConditionsPage() {
  return <TermsConditions />
}

