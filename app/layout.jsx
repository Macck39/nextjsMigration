import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Providers from '@/components/Providers'
import ClientLayout from '@/components/ClientLayout'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

// Enhanced metadata for SEO, Open Graph, and Twitter cards
export const metadata = {
  // Title configuration with template for child pages
  title: {
    default: 'Ragini Nursing Bureau - Home Healthcare & Nursing Services in Delhi',
    template: '%s | Ragini Nursing Bureau Delhi'
  },
  description: 'Professional nursing and home healthcare services in Delhi: nursing care, ICU setup at home, elderly care, physiotherapy, baby care, and more. 24/7 availability across Delhi. Trusted by thousands of families in Delhi.',
  keywords: [
    'nursing bureau Delhi',
    'home healthcare Delhi',
    'nursing services Delhi',
    'Delhi NCR',
    'elderly care Delhi',
    'ICU setup at home Delhi',
    'physiotherapy at home Delhi',
    'nursing care Delhi',
    'home nurse Delhi',
    'patient care Delhi',
    'medical attendant Delhi',
    'baby care Delhi',
    'mother and child care Delhi'
  ],
  authors: [{ name: 'Ragini Nursing Bureau' }],
  creator: 'Ragini Nursing Bureau',
  publisher: 'Ragini Nursing Bureau',

  // Open Graph metadata for social sharing
  openGraph: {
    title: 'Ragini Nursing Bureau - Home Healthcare & Nursing Services in Delhi',
    description: 'Your trusted partner for quality home healthcare services in Delhi. Professional nurses, ICU setup, elderly care, and more across Delhi.',
    url: 'https://ragininursingbureau.com',
    siteName: 'Ragini Nursing Bureau Delhi',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/Ragini-Logo.png',
        width: 800,
        height: 600,
        alt: 'Ragini Nursing Bureau Delhi - Home Healthcare Services',
      }
    ],
  },

  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Ragini Nursing Bureau - Home Healthcare & Nursing Services in Delhi',
    description: 'Professional nursing and home healthcare services in Delhi: nursing care, ICU setup, elderly care across Delhi.',
    images: ['/assets/Ragini-Logo.png'],
  },

  // Favicon and icons configuration
  icons: {
    icon: '/assets/Ragini-Logo.ico',
    shortcut: '/assets/Ragini-Logo.ico',
    apple: '/assets/Ragini-Logo.png',
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification for search consoles (add your IDs after verification)
  verification: {
    google: '4OhR-ILbYPizk2JNbxXXTqrvyQMv6DnlqZJVfD5nCgM',
  },

  // Alternate languages (if applicable)
  alternates: {
    canonical: 'https://ragininursingbureau.com',
  },

  // Category for better classification
  category: 'Healthcare',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11042496857"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11042496857');
  `}
        </Script>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  )
}
