import TermsConditions from '@/components/pages/TermsConditions'

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions for using Ragini Nursing Bureau\'s home healthcare services. Understand your rights and responsibilities as a client.',
  openGraph: {
    title: 'Terms & Conditions - Ragini Nursing Bureau',
    description: 'Terms of service for Ragini Nursing Bureau healthcare services.',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function TermsConditionsPage() {
  return <TermsConditions />
}

