import AllServices from '@/components/pages/AllServices'

export const metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive home healthcare services: nursing care, ICU setup at home, elderly care, physiotherapy, baby care, lab tests at home, medical equipment rental, and more in Delhi NCR.',
  openGraph: {
    title: 'Healthcare Services - Ragini Nursing Bureau',
    description: 'Complete range of home healthcare services including nursing, ICU setup, physiotherapy, elderly care, and medical equipment.',
  },
  keywords: [
    'home nursing services',
    'ICU setup at home',
    'physiotherapy at home',
    'elderly care services',
    'baby care at home',
    'medical equipment rental',
    'lab tests at home',
    'Delhi NCR healthcare'
  ],
}

export default function ServicesPage() {
  return <AllServices />
}

