import {
  Activity,
  BatteryCharging,
  Clock,
  Layers,
  Magnet,
  Plug,
  Sun,
  Wrench,
} from "lucide-react"

export const FALLBACK_VARIANTS = [
  { id: null, title: "20CM", price: "29.00", battery: "30 days", coverage: "Drawer / Small space", leds: 6 },
  { id: null, title: "30CM", price: "39.00", battery: "45 days", coverage: "Wardrobe shelf", leds: 9 },
  { id: null, title: "40CM", price: "49.00", battery: "60 days", coverage: "Cabinet / Hallway", leds: 12, popular: true },
  { id: null, title: "50CM", price: "59.00", battery: "75 days", coverage: "Closet / Stairs", leds: 15 },
]
export const COLORS = [
  { name: "Matte Black", hex: "#1a1a1a" },
  { name: "Champagne Gold", hex: "#c8a96a" },
  { name: "Pearl White", hex: "#f4f1ea" },
]
export const GALLERY_PLACEHOLDERS = [
  { gradient: "linear-gradient(135deg,#e8e0d0 0%,#d4c9b0 100%)", label: "Front view" },
  { gradient: "linear-gradient(135deg,#d4c9b0 0%,#c5b898 100%)", label: "Detail" },
  { gradient: "linear-gradient(135deg,#1a1612 0%,#2d261e 100%)", label: "Dark" },
  { gradient: "linear-gradient(135deg,#f4f1ea 0%,#e8e2d8 100%)", label: "White" },
  { gradient: "linear-gradient(135deg,#c8a96a 0%,#b8943a 100%)", label: "Gold" },
]
export const FEATURES_DATA = [
  { Icon: Activity, title: "Motion Sensor Activation", desc: "Detects movement up to 3 meters and softly fades on." },
  { Icon: BatteryCharging, title: "USB‑C Rechargeable", desc: "Up to 75 days per charge. No batteries to replace." },
  { Icon: Magnet, title: "Magnetic Installation", desc: "Snap onto any surface with the included steel strip." },
  { Icon: Wrench, title: "No Wiring Required", desc: "Wireless freedom. Place anywhere in seconds." },
  { Icon: Sun, title: "Warm Ambient Glow", desc: "3000K light that flatters wood, fabric and skin tones." },
  { Icon: Layers, title: "Ultra‑Slim Profile", desc: "Just 9mm thin — disappears into the architecture." },
  { Icon: Clock, title: "Long Battery Life", desc: "Smart auto‑off ensures power lasts months, not days." },
]
export const HOW_STEPS = [
  { n: "01", Icon: Plug, title: "Charge via USB‑C", desc: "A single 2‑hour charge powers it for up to 75 days of everyday use." },
  { n: "02", Icon: Magnet, title: "Attach magnetically", desc: "Place the included metal strip and snap into position. No tools, no holes." },
  { n: "03", Icon: Activity, title: "It just illuminates", desc: "Walk by and it softly fades on — then off — automatically. Effortless." },
]
export const ROOMS_DATA = [
  { gradient: "linear-gradient(160deg,#2d261e,#1a1612)", title: "Wardrobes", desc: "Find what you need without flooding the bedroom." },
  { gradient: "linear-gradient(160deg,#4a3f30,#2d261e)", title: "Kitchen", desc: "A warm under‑cabinet glow for late‑night essentials." },
  { gradient: "linear-gradient(160deg,#3d3428,#241e17)", title: "Hallways", desc: "Subtle wayfinding from bedroom to bath." },
  { gradient: "linear-gradient(160deg,#1a1612,#0d0b08)", title: "Staircases", desc: "Step‑level safety with architectural grace." },
]
export const WHY_ROWS = [
  { label: "Wireless & rechargeable", us: true, them: false },
  { label: "Ultra‑slim 9mm profile", us: true, them: false },
  { label: "Up to 75‑day battery", us: true, them: "5–7 days" },
  { label: "Magnetic install (no tools)", us: true, them: false },
  { label: "Warm 3000K ambient glow", us: true, them: "Cool blue" },
  { label: "30‑day satisfaction guarantee", us: true, them: false },
]
export const STATS = [
  { v: "12,000+", l: "Happy customers" }, { v: "4.9/5", l: "Average rating" },
  { v: "96%", l: "Positive reviews" }, { v: "75 days", l: "Battery per charge" },
]
export const REVIEWS_DATA = [
  { name: "Sophie L.", country: "🇬🇧 United Kingdom", rating: 5, title: "The most elegant addition to my home", date: "2 weeks ago", text: "The warm light is dreamy and the install took thirty seconds. The matte black finish is gorgeous against my oak shelves — feels properly luxury, not like a cheap LED strip.", helpful: 247, variant: "40CM · Matte Black" },
  { name: "Marcus R.", country: "🇩🇪 Germany", rating: 5, title: "Bought four — every space transformed", date: "1 month ago", text: "Battery life is incredible — months between charges. The motion sensor is precise, no false triggers, and the magnetic mount holds rock solid.", helpful: 198, variant: "30CM · Champagne Gold" },
  { name: "Aisha K.", country: "🇺🇸 United States", rating: 5, title: "Finally a motion light that doesn't look cheap", date: "3 weeks ago", text: "It blends into the wood beautifully and the glow is so calming at night. Quality of build is honestly Apple‑tier. Worth every cent and then some.", helpful: 312, variant: "50CM · Matte Black" },
  { name: "Camila V.", country: "🇪🇸 Spain", rating: 5, title: "Mi pasillo nunca se vio tan bonito", date: "5 days ago", text: "Llegó en 4 días, la instalación es magnética y se carga rapidísimo con USB‑C. La luz cálida es perfecta.", helpful: 84, variant: "40CM · Pearl White" },
  { name: "Kenji T.", country: "🇯🇵 Japan", rating: 4, title: "Beautiful design, slight learning curve", date: "2 months ago", text: "Love the minimal design. The motion sensor is sensitive enough that I had to play with placement, but once dialed in it's flawless.", helpful: 56, variant: "20CM · Matte Black" },
  { name: "Helena M.", country: "🇳🇱 Netherlands", rating: 5, title: "Looks like it costs three times more", date: "1 week ago", text: "I keep getting compliments from guests. Nobody believes it's wireless. The quality of light is so warm and inviting.", helpful: 173, variant: "40CM · Champagne Gold" },
]
export const FAQS_DATA = [
  { q: "How long does the battery last?", a: "On a full charge, it lasts up to 75 days of typical use. A built‑in motion timer ensures the light only stays on while needed." },
  { q: "Does it work during daytime?", a: "Yes. An ambient light sensor lets you choose between night‑only mode (recommended) or 24/7 motion activation." },
  { q: "Is installation difficult?", a: "Not at all. Peel the included magnetic strip, stick it to your surface, and snap into place. The whole setup takes under a minute." },
  { q: "How is it charged?", a: "A USB‑C cable is included. A full charge takes about 2 hours from any standard USB power source." },
  { q: "Can it be removed easily?", a: "Yes. It detaches cleanly from the magnetic strip, so you can take it down to recharge or relocate without damage." },
  { q: "Is it safe for children's rooms?", a: "Absolutely. The warm 3000K glow is gentle on the eyes, the housing stays cool, and there are no exposed wires." },
]
export const PURCHASE_NAMES = ["Emma","Liam","Olivia","Noah","Ava","Lucas","Mia","Ethan","Isla","Hugo"]
export const PURCHASE_PLACES = ["London","Berlin","New York","Paris","Sydney","Toronto","Madrid","Tokyo"]
