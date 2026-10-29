export const BUSINESS = {
  name: "Big Boss Cafe",
  nameHindi: "बिग बॉस कैफे",
  category: "Pure-veg cafe",
  tagline: "Chai at ₹10. Opposite the engineering college.",
  address: "opp. Gov. Eng. College, Koni, Bilaspur, Chhattisgarh 495009, India",
  area: "Opp. Gov. Eng. College · Koni · Bilaspur",
  phoneDisplay: "+91 78281 64615",
  phoneHref: "tel:+917828164615",
  hours: "9:00 am – 9:00 pm · every day",
  hoursShort: "9 am – 9 pm daily",
  rating: "3.7",
  plusCode: "44JG+HP Bilaspur, Chhattisgarh",
  coordinates: "22.1314304, 82.1268477",
  mapsListing: "https://maps.app.goo.gl/PE2S3EZPiAS6LADN9",
} as const;

export const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=BIG+BOSS+CAFE%2C+opp.+Gov.+Eng.+College%2C+Koni%2C+Bilaspur%2C+Chhattisgarh+495009";

// Verified menu — transcribed from the price board photographed on the cafe's
// own Google Maps listing (capture dated December 2021). Prices are presented
// on the site with that caveat; they may have changed since.
export const MENU_SOURCE_NOTE =
  "Prices transcribed from the cafe's own photographed price board (Google Maps listing photo, December 2021) — they may have changed since; call to confirm.";

export type MenuItem = {
  name: string;
  price: number;
  veg: true;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  hindi: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "drinks",
    label: "Chai & Cold",
    hindi: "चाय",
    items: [
      { name: "Tea", price: 10, veg: true, tag: "the famous ₹10 chai" },
      { name: "Coffee", price: 15, veg: true },
      { name: "Lassi", price: 30, veg: true, tag: "from the ground banner" },
    ],
  },
  {
    id: "bites",
    label: "Quick Bites",
    hindi: "स्नैक्स",
    items: [
      { name: "Sandwich", price: 25, veg: true },
      { name: "Maggi", price: 25, veg: true, tag: "the hostel classic" },
    ],
  },
  {
    id: "chaat",
    label: "Chaat",
    hindi: "चाट",
    items: [
      { name: "Papri Chaat", price: 30, veg: true },
      { name: "Bhelpuri Chaat", price: 30, veg: true },
    ],
  },
];
