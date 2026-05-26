import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'S+B Groep | Laboratoriuminterieur, Scholen & Industriële Werkplekken',
  description:
    'S+B Groep levert premium laboratoriuminterieurs, practicumlokalen, cleanrooms en industriële werkplekken op maat. Specialist in technisch meubilair en engineered interiors voor Nederland en Europa.',
  keywords: [
    'laboratoriuminterieur',
    'laboratory furniture',
    'lab interiors',
    'cleanroom',
    'practicumlokalen',
    'educational lab',
    'technical workspace',
    'laboratoriumwerkbanken',
    'industriële werkplekken',
    'technisch meubilair',
    'afzuigkasten',
    'S+B Groep',
    'Schaik en Berghuis',
    'Nederland',
    'Netherlands',
  ],
  authors: [{ name: 'S+B Groep' }],
  creator: 'S+B Groep',
  publisher: 'Schaik & Berghuis Groep',
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
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.splusb.nl',
    siteName: 'S+B Groep',
    title: 'S+B Groep | Laboratoriuminterieur, Scholen & Industriële Werkplekken',
    description:
      'Premium laboratoriuminterieurs, practicumlokalen en industriële werkplekken op maat. Engineered for performance, safety and longevity.',
    images: [
      {
        url: 'https://www.splusb.nl/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'S+B Groep — Laboratorium & Industriële Interieurs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S+B Groep | Laboratoriuminterieur & Industriële Werkplekken',
    description:
      'Premium laboratoriuminterieurs, practicumlokalen en industriële werkplekken op maat.',
  },
  alternates: {
    canonical: 'https://www.splusb.nl',
    languages: {
      'nl-NL': 'https://www.splusb.nl',
      'en-GB': 'https://www.splusb.nl/en',
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'S+B Groep',
  legalName: 'Schaik & Berghuis Groep B.V.',
  url: 'https://www.splusb.nl',
  logo: 'https://www.splusb.nl/logo.svg',
  foundingDate: '1987',
  foundingLocation: {
    '@type': 'Place',
    addressCountry: 'NL',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
    addressLocality: 'Nederland',
  },
  description:
    'Specialist in laboratoriuminterieurs, practicumlokalen, cleanrooms en industriële werkplekken op maat voor Nederland en Europa.',
  areaServed: ['NL', 'BE', 'DE', 'EU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Laboratorium & Industriële Interieurs',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laboratoriumwerkbanken' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Practicumlokalen' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cleanrooms' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industriële interieurs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ventilatiesystemen' } },
    ],
  },
  subOrganization: [
    { '@type': 'Organization', name: 'S+B Lab', description: 'Laboratoriuminterieurs voor onderzoek en industrie' },
    { '@type': 'Organization', name: 'S+B Scholen', description: 'Practicumlokalen en onderwijsomgevingen' },
    { '@type': 'Organization', name: 'Solid Factory', description: 'Industriële werkplekken en maatwerk productie' },
    { '@type': 'Organization', name: 'Labair', description: 'Luchttechnische oplossingen en ventilatie' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <meta name="theme-color" content="#0B0B09" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-sb-black text-sb-text antialiased">
        {children}
      </body>
    </html>
  )
}
