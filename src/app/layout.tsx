import type { Metadata } from "next";
import "./globals.css";
import { OrderProvider } from "@/context/OrderContext";
import Navbar from "@/components/Navbar";
import OrderDrawer from "@/components/OrderDrawer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://alayakireserve.vercel.app"
  ),
  title: "Alayaki Reserve | Abeokuta’s Premier Bespoke Butchery",
  description:
    "Abeokuta’s premier luxury butchery service. Guaranteed 100% boneless beef, assorted cow cuts, and fresh goat meat shares. Physical counter at God's Hope Hospital Car Park, Adigbe, Abeokuta. Direct WhatsApp ordering.",
  keywords: [
    "Alayaki Reserve",
    "Butchery Abeokuta",
    "Boneless Beef Abeokuta",
    "Meat delivery Abeokuta",
    "God's Hope Hospital Adigbe",
    "Adigbe meat store",
    "Ogufe goat meat Ogun State",
    "Inu eran clean offal Abeokuta",
    "Bokoto cow head oxtail Abeokuta",
  ],
  openGraph: {
    title: "Alayaki Reserve — Abeokuta’s Premier Bespoke Butchery",
    description:
      "Guaranteed 100% Boneless Pure Meat. Direct farm-to-table artisanal butchery in Adigbe, Abeokuta. Live orders routed to WhatsApp.",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Alayaki Reserve Official Brand Crest",
      },
    ],
  },
  icons: {
    icon: "/images/logo-crest.jpg",
    apple: "/images/logo-crest.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-pristine text-charcoal min-h-screen flex flex-col selection:bg-ruby selection:text-white antialiased">
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
