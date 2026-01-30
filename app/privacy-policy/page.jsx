import PrivacyPolicy from '@/components/pages/PrivacyPolicy'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Read Ragini Nursing Bureau\'s privacy policy. Learn how we collect, use, and protect your personal information when using our home healthcare services.',
  openGraph: {
    title: 'Privacy Policy - Ragini Nursing Bureau',
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

