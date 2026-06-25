import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventPopup from "@/components/ui/EventPopup";
import ChatWidget from "@/components/chat/ChatWidget";
import CookieConsent from "@/components/ui/CookieConsent";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://talentcentre.co.za"),
  title: {
    template: "%s | Talent Centre",
    default: "Talent Centre | Strategic Consultancy for Sustainable Business Growth",
  },
  description: "Talent Centre is a premium consultancy firm providing business advisory, talent management, training, and strategic consulting services across Southern Africa.",
  keywords: "business consultancy services, corporate advisory services, management consulting firm, strategic business consulting, talent management, HR advisory, training and development, organizational development",
  authors: [{ name: "Talent Centre Consultancy" }],
  openGraph: {
    title: "Talent Centre | Strategic Consultancy for Sustainable Business Growth",
    description: "Premium consultancy services for forward-thinking organizations. Business advisory, talent management, training, and strategic consulting across Southern Africa.",
    url: "https://talentcentre.co.za",
    siteName: "Talent Centre",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talent Centre | Strategic Consultancy",
    description: "Premium business consultancy services across Southern Africa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Talent Centre",
  description: "Strategic consultancy firm providing business advisory, talent management, and training services.",
  url: "https://talentcentre.co.za",
  email: "info@talentcentre.co.za",
  telephone: ["+27865511594", "+26775618647"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 104, Unit 15B, Gaborone International Commerce Park",
    addressLocality: "Gaborone",
    addressCountry: "BW",
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 - Placeholder */}
        {process.env.NEXT_PUBLIC_GA4_ID && process.env.NEXT_PUBLIC_GA4_ID !== 'G-XXXXXXXXXX' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}');`,
              }}
            />
          </>
        )}
        {/* Meta Pixel - Placeholder */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && process.env.NEXT_PUBLIC_META_PIXEL_ID !== '0000000000000000' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${process.env.NEXT_PUBLIC_META_PIXEL_ID}');fbq('track','PageView');`,
            }}
          />
        )}
      </head>
      <body className="antialiased w-full overflow-x-hidden text-steel-800 bg-white flex flex-col min-h-screen">
        <EventPopup />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
