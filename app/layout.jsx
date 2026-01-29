import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

// Enhanced metadata for SEO, Open Graph, and Twitter cards
export const metadata = {
  // Title configuration with template for child pages
  title: {
    default: 'Ragini Nursing Bureau - Home Healthcare Services in Delhi NCR',
    template: '%s | Ragini Nursing Bureau'
  },
  description: 'Professional home healthcare services including nursing care, ICU setup at home, elderly care, physiotherapy, baby care, and more. 24/7 availability across Delhi NCR. Trusted by thousands of families.',
  keywords: [
    'nursing bureau',
    'home healthcare',
    'Delhi NCR',
    'nursing services',
    'elderly care',
    'ICU setup at home',
    'physiotherapy at home',
    'nursing care',
    'home nurse',
    'patient care',
    'medical attendant',
    'baby care',
    'mother and child care'
  ],
  authors: [{ name: 'Ragini Nursing Bureau' }],
  creator: 'Ragini Nursing Bureau',
  publisher: 'Ragini Nursing Bureau',
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: 'Ragini Nursing Bureau - Home Healthcare Services',
    description: 'Your trusted partner for quality home healthcare services. Professional nurses, ICU setup, elderly care, and more across Delhi NCR.',
    url: 'https://ragininursingbureau.com',
    siteName: 'Ragini Nursing Bureau',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/Ragini-Logo.png',
        width: 800,
        height: 600,
        alt: 'Ragini Nursing Bureau Logo',
      }
    ],
  },
  
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Ragini Nursing Bureau - Home Healthcare Services',
    description: 'Professional home healthcare services including nursing care, ICU setup, elderly care across Delhi NCR.',
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
  // verification: {
  //   google: 'your-google-verification-code',
  // },
  
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  )
}
