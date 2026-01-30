import HelpfulLinks from '@/components/pages/HelpfulLinks'

export const metadata = {
  title: 'Helpful Links',
  description: 'Find useful healthcare resources, government health portals, emergency contacts, and medical information links curated by Ragini Nursing Bureau.',
  openGraph: {
    title: 'Helpful Links - Ragini Nursing Bureau',
    description: 'Useful healthcare resources and important links for patients and families.',
  },
}

export default function HelpfulLinksPage() {
  return <HelpfulLinks />
}

