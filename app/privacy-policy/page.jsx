import PrivacyPolicy from '@/components/pages/PrivacyPolicy'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Ragini Nursing Bureau Delhi privacy policy. How we collect, use, and protect your information when using our nursing and home healthcare services in Delhi.',
  openGraph: {
    title: 'Privacy Policy - Ragini Nursing Bureau Delhi',
    description: 'Our commitment to protecting your privacy and personal data.',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}

