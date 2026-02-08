import AllServices from '@/components/pages/AllServices'

export const metadata = {
  title: 'Our Services',
  description: 'Nursing and home healthcare services in Delhi: nursing care, ICU at home, elderly care, physiotherapy, baby care, lab tests at home, medical equipment rental. Serving Delhi.',
  openGraph: {
    title: 'Healthcare Services in Delhi - Ragini Nursing Bureau',
    description: 'Complete range of nursing and home healthcare services in Delhi: nursing, ICU setup, physiotherapy, elderly care, medical equipment.',
  },
  keywords: [
    'home nursing services Delhi',
    'ICU setup at home Delhi',
    'physiotherapy at home Delhi',
    'elderly care services Delhi',
    'baby care at home Delhi',
    'medical equipment rental Delhi',
    'lab tests at home Delhi',
    'healthcare Delhi'
  ],
}

export default function ServicesPage() {
  return <AllServices />
}

