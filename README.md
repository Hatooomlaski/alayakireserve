# Alayaki Reserve — Abeokuta’s Premier Bespoke Butchery

An ultra-luxury, production-ready web application for **Alayaki Reserve**, a bespoke artisanal butchery based in Adigbe, Abeokuta, Ogun State, Nigeria.

The platform serves as an interactive luxury catalog, live pricing calculator, butchering schedule broadcaster, physical walk-in counter guide, B2B wholesale portal, and bespoke order builder that compiles and routes verified customer orders directly to WhatsApp (**+234 815 386 1887**).

---

## 🏛️ Brand Specifications & Design Tokens

- **Brand Name:** Alayaki Reserve
- **Slogan:** Abeokuta’s Premier Bespoke Butchery
- **Primary Trust Badge:** `Guaranteed 100% Boneless Pure Meat`
- **Physical Walk-In Store:** God's Hope Hospital Car Park, Adigbe, Abeokuta, Ogun State, Nigeria
- **Store Opening Hours:**
  - **Mondays – Saturdays:** 8:00 AM – 7:00 PM
  - **Sundays:** 1:00 PM – 7:00 PM
- **Slaughter Schedule:**
  - **Fresh Cattle Slaughter:** Every **Friday** (Collection opens by 12:00 Noon)
  - **Frozen Cuts:** **Always available** at the physical store every day of the week
  - **Status:** *Slots Filling Fast* (High Demand)
- **Direct WhatsApp Line:** `+2348153861887`
- **Aesthetic Direction:** Heritage artisanal butchery with high-end luxury styling
- **Color Palette:**
  - `bg-emerald-deep`: `#0B2014` (Royal Forest Noir)
  - `bg-cream-warm`: `#FDFBF7` (Alabaster / Cream Surface)
  - `accent-gold`: `#D4AF37` (Champagne Gold for borders, stars, and tags)
  - `accent-burgundy`: `#4A0E17` (Deep Wine for guarantees and alerts)
  - `text-dark`: `#1A1A1A` / `text-light`: `#FBFBFB`
- **Typography:**
  - Headers / Hero: Cormorant Garamond (Editorial Serif)
  - UI / Data / Prices: Plus Jakarta Sans (Modern Sans-Serif)

---

## 🥩 Exact Product Catalog & Bespoke Photography Selection

Each cut features bespoke culinary photography on dark green marble:

1. **Prime Beef (100% Boneless) — *Eran Malu Pipe***
   - Photo: Pure hand-trimmed lean boneless beef cubes and prime cuts
   - 0.5kg (Half kg): ₦3,850
   - 1kg: ₦7,700
   - 2kg: ₦15,400
   - 5kg: ₦38,500
   - 10kg: ₦77,000
   - *State Options:* Fresh (Friday Batch) or Cold-Chain Frozen (Always in-store)

2. **Assorted Cow Intestines (Inu Eran) — *Shaki, Edo, Abodi & Towel***
   - Photo: Triple-sanitized honeycomb tripe, tender liver, and offal
   - 0.5kg (Half kg): ₦3,000
   - 1kg: ₦6,000
   - 2kg: ₦12,000
   - 5kg: ₦30,000
   - *State Options:* Fresh (Friday Batch) or Cold-Chain Frozen (Always in-store)

3. **Specialty Cow Cuts (Starting base rates — finalized on cow sizing):**
   - Whole / Split Cow Head (*Ori Eran*): Starting from ₦50,000 (Fresh only)
   - Prime Cow Tail (*Iru Eran / Oxtail*): Starting from ₦15,000 (Fresh only)
   - Cow Leg / Trotters (*Bokoto*): Starting from ₦6,000 (Fresh only)

4. **Goat Meat (Ogufe) — *Eran Ewure / Ogufe Prime Share***
   - Photo: Artisanal goat chops, trimmed ribs, and Asun portions with singed skin
   - 1 Slot (Share): ₦25,000
   - 2 Slots (Half Goat): ₦50,000
   - 4 Slots (Full Goat): ₦100,000
   - *State Options:* Fresh (Friday Batch) or Cold-Chain Frozen (Always in-store)

---

## 📍 Abeokuta Delivery Zones & Fulfillment

- **Self-Pickup (Adigbe Store):** ₦0 (God's Hope Hospital Car Park, Adigbe)
- **Adigbe & Environs:** ₦1,000
- **Ibara & GRA:** ₦1,500
- **Oke-Mosan:** ₦2,000
- **Kuto & Isabo:** ₦1,500
- **Idi-Aba (FMC Axis):** ₦2,000
- **Camp & FUNAAB Axis:** ₦2,500
- **Obantoko & Asero:** ₦2,500
- **Lafenwa & Ita-Oshin:** ₦2,000

---

## 📲 Direct WhatsApp Message Compiler Engine

Customer orders compile into URL-encoded WhatsApp messages targeted to `+2348153861887`:

```
*NEW ORDER INQUIRY - ALAYAKI RESERVE*
----------------------------------
*Customer Name:* [Customer Name]
*Delivery Type:* [Pickup at Adigbe / Delivery to Zone]
*Delivery Address:* [Address or Landmark]
*Meat State Preference:* [Fresh / Frozen]

*SELECTED ITEMS:*
• Prime Beef (100% Boneless) [1kg] (Fresh) - ₦7,700
• Goat Meat (Ogufe) [1 Slot] (Fresh) - ₦25,000
• Cow Leg (Bokoto) [1 Unit] - Starting from ₦6,000*

*Estimated Order Subtotal:* ₦38,700
*Specialty Item Notice:* Prices for Head/Tail/Leg are base rates and will be finalized upon cow sizing.
*Cutting Instructions:* [Custom notes]
----------------------------------
Hello Alayaki Reserve, I am ready to confirm this order.
```

---

## 🚀 Running the Application Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```
