import HelpfulLinks from '@/components/pages/HelpfulLinks'

export const metadata = {
  title: 'Helpful Links',
  description: 'Useful healthcare resources, government health portals, emergency contacts, and medical links curated by Ragini Nursing Bureau Delhi for patients and families in Delhi.',
  openGraph: {
    title: 'Helpful Links - Ragini Nursing Bureau Delhi',
    description: 'Healthcare resources and important links for patients and families in Delhi.',
  },
}

export default function HelpfulLinksPage() {
  return <HelpfulLinks />
}

