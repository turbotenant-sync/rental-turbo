import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    title: 'TurboTenant - The Easiest Landlord Software',
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        name: 'description',
        content:
          'TurboTenant helps landlords advertise rentals, collect leads, screen applicants, and manage leasing work from one easy landlord software platform.',
      },
      {
        name: 'theme-color',
        content: '#033A6D',
      },
      {
        name: 'application-name',
        content: 'TurboTenant',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'TurboTenant',
      },
      {
        property: 'og:title',
        content: 'TurboTenant - The Easiest Landlord Software',
      },
      {
        property: 'og:description',
        content:
          'Create one polished rental listing, publish it broadly, and keep renter inquiries organized.',
      },
      {
        property: 'og:image',
        content:
          'https://turbotenant-production.s3.amazonaws.com/social/social-share-image.jpeg',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '672',
      },
    ],
    links: [
      {
        rel: 'shortcut icon',
        href: 'https://turbotenant-production.s3.amazonaws.com/app-icons/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'https://turbotenant-production.s3.amazonaws.com/app-icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'https://turbotenant-production.s3.amazonaws.com/app-icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'https://turbotenant-production.s3.amazonaws.com/app-icons/favicon-16x16.png',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&family=Poppins:wght@500;600;700;800;900&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
