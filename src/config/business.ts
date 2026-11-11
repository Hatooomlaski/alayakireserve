/**
 * Single source of truth for the shop's public details. Components, the
 * WhatsApp links and the search-engine data (JSON-LD) all read from here.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://alayakireserve.vercel.app"
).replace(/\/$/, "");

export const BUSINESS = {
  name: "Alayaki Reserve",
  tagline: "Abeokuta’s Premier Bespoke Butchery",
  instagramHandle: "alayaki.reserve",
  instagramUrl: "https://instagram.com/alayaki.reserve",
  address: {
    street: "God's Hope Hospital Car Park, Adigbe",
    city: "Abeokuta",
    state: "Ogun State",
    country: "Nigeria",
    countryCode: "NG",
  },
  /** Full one-line address for display. */
  fullAddress: "God's Hope Hospital Car Park, Adigbe, Abeokuta, Ogun State",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=God's+Hope+Hospital+Adigbe+Abeokuta+Ogun+State",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=God's+Hope+Hospital+Adigbe+Abeokuta&t=&z=15&ie=UTF8&iwloc=&output=embed",
  hours: {
    weekdays: { label: "Mondays – Saturdays", display: "8:00 AM – 7:00 PM", opens: "08:00", closes: "19:00" },
    sunday: { label: "Sundays", display: "1:00 PM – 7:00 PM", opens: "13:00", closes: "19:00" },
  },
  schedule: {
    slaughter: "Every Friday at dawn",
    deliveryWindow: "12:00 Noon – 7:00 PM",
    freshCollectionFrom: "3:00 PM",
  },
} as const;
