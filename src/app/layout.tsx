import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { OrderProvider } from "@/context/OrderContext";
import Navbar from "@/components/Navbar";
import OrderDrawer from "@/components/OrderDrawer";
import Footer from "@/components/Footer";
import { BUSINESS, SITE_URL } from "@/config/business";
import { WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

// Self-hosted at build time by next/font: no render-blocking Google Fonts request.
const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const description =
  "Abeokuta’s premier luxury butchery service. Hand-trimmed boneless beef, assorted cow cuts, and fresh cow, goat and ram sharing. Physical counter at God's Hope Hospital Car Park, Adigbe, Abeokuta. Direct WhatsApp ordering.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
  description,
  keywords: [
    "Alayaki Reserve",
    "Butchery Abeokuta",
    "Boneless Beef Abeokuta",
    "Meat delivery Abeokuta",
    "God's Hope Hospital Adigbe",
    "Adigbe meat store",
    "Ogufe goat meat Ogun State",
    "Cow sharing Abeokuta",
    "Goat sharing Abeokuta",
    "Ram sharing Abeokuta",
    "Inu eran clean offal Abeokuta",
    "Bokoto cow head oxtail Abeokuta",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    description:
      "Hand-trimmed boneless beef. Direct farm-to-table artisanal butchery in Adigbe, Abeokuta. Live orders routed to WhatsApp.",
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: BUSINESS.name,
    images: [
      {
        url: "/images/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Alayaki Reserve Official Brand Crest",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    description,
    images: ["/images/logo.jpg"],
  },
  // The browser-tab icon comes from src/app/icon.jpg (file convention).
  icons: {
    apple: "/images/logo-crest.jpg",
  },
};

// Business details for Google/Maps (schema.org). Keep in sync via config/business.ts.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: BUSINESS.name,
  description,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.jpg`,
  image: `${SITE_URL}/images/logo.jpg`,
  telephone: `+${WHATSAPP_PHONE_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    addressCountry: BUSINESS.address.countryCode,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: BUSINESS.hours.weekdays.opens,
      closes: BUSINESS.hours.weekdays.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: BUSINESS.hours.sunday.opens,
      closes: BUSINESS.hours.sunday.closes,
    },
  ],
  hasMap: BUSINESS.mapsUrl,
  sameAs: [BUSINESS.instagramUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-pristine text-charcoal min-h-screen flex flex-col selection:bg-ruby selection:text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <OrderProvider>
          {/* Main Top Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-1">{children}</main>

          {/* Luxury WhatsApp Order Drawer (Slide-Over) */}
          <OrderDrawer />

          {/* Main Heritage Footer */}
          <Footer />
        </OrderProvider>
      </body>
    </html>
  );
}
