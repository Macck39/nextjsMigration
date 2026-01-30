import VideosPage from '@/components/pages/VideosPage'

export const metadata = {
  title: 'Videos',
  description: 'Watch informative videos about our home healthcare services, patient care tips, and testimonials from satisfied families. Learn more about Ragini Nursing Bureau.',
  openGraph: {
    title: 'Videos - Ragini Nursing Bureau',
    description: 'Watch our healthcare videos, patient care guides, and testimonials.',
  },
}

export default function VideosPageRoute() {
  return <VideosPage />
}

