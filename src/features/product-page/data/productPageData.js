import {
  Activity,
  BatteryCharging,
  Blend,
  Bolt,
  Gauge,
  LayoutGrid,
  Lightbulb,
  Palette,
  Package,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Wrench,
} from "lucide-react"

import heroImage from "../../../assets/product/principal.png"
import chargerImage from "../../../assets/product/cargador.png"
import closetImage from "../../../assets/product/armario.png"
import lifestyleImage from "../../../assets/product/hero-detail.png"

export const PRODUCT_NAME = "Luxense MotionGlow\u2122"

export const GALLERY_IMAGES = [
  { src: heroImage, label: "MotionGlow hero", alt: "Luxense MotionGlow in a modern home setting" },
  { src: lifestyleImage, label: "Soft ambient glow", alt: "Wireless motion sensor light casting a warm glow under a shelf" },
  { src: closetImage, label: "Closet install", alt: "Motion sensor light installed inside a closet" },
  { src: chargerImage, label: "USB recharge", alt: "USB rechargeable wireless light bar and charging cable" },
]

export const COLORS = [
  { name: "White", hex: "#F6F6F4", image: lifestyleImage },
  { name: "Black", hex: "#171717", image: heroImage },
]

export const SIZES = ["20cm", "30cm", "40cm", "50cm"]

export const FALLBACK_VARIANTS = [
  { id: null, title: "White", price: "29.99", available: true, image: lifestyleImage, options: ["White"] },
  { id: null, title: "Black", price: "29.99", available: true, image: heroImage, options: ["Black"] },
]

export const TRUST_BADGES = [
  { Icon: ShieldCheck, title: "Secure checkout", text: "Encrypted payments and trusted order processing." },
  { Icon: Package, title: "Fast dispatch", text: "Prepared for shipment with a smooth post-purchase flow." },
  { Icon: RotateCcw, title: "30-day guarantee", text: "A low-risk purchase backed by a simple return window." },
  { Icon: Activity, title: "Human support", text: "Helpful support when you need product or order help." },
]

export const PAYMENT_BADGES = ["Visa", "Mastercard", "PayPal", "Apple Pay", "Shop Pay"]

export const HERO_KEY_BENEFITS = [
  "Motion Activated",
  "USB Rechargeable",
  "Adjustable Brightness",
  "Easy Installation",
]

export const HERO_TRUST_BADGES = [
  "4.9/5 Rating",
  "3,000+ Happy Customers",
  "Free Shipping",
  "30-Day Guarantee",
]

export const HERO_HIGHLIGHTS = [
  "120\u00b0 motion detection",
  "USB rechargeable",
  "Adjustable brightness",
]

export const BENEFITS_DATA = [
  {
    Icon: Activity,
    title: "Instant motion activation",
    desc: "The light wakes up as you move and quietly steps back when the room is still.",
  },
  {
    Icon: BatteryCharging,
    title: "Recharge once, use for days",
    desc: "USB charging keeps the setup clean and practical for everyday home use.",
  },
  {
    Icon: Gauge,
    title: "Comfortable brightness control",
    desc: "Dial illumination from a soft 10% up to a bright 100% depending on the space.",
  },
  {
    Icon: Wrench,
    title: "No wiring, no hassle",
    desc: "A premium upgrade for shelves, closets, hallways, and under-cabinet spaces.",
  },
  {
    Icon: Sparkles,
    title: "Minimal design language",
    desc: "A discreet profile that looks intentional in modern interiors.",
  },
]

export const BUNDLE_OPTIONS = [
  {
    label: "Buy 1",
    quantity: 1,
    price: 29.99,
    compareAt: 39.99,
    badge: "Best for one room",
    savings: "Save 0%",
    caption: "Best for a first install in a closet, shelf, or hallway.",
  },
  {
    label: "Buy 2",
    quantity: 2,
    price: 49.99,
    compareAt: 79.98,
    badge: "Most Popular",
    savings: "Save 15%",
    caption: "A balanced set for two spaces that you use every day.",
  },
  {
    label: "Buy 4",
    quantity: 4,
    price: 89.99,
    compareAt: 159.96,
    badge: "Best Value",
    savings: "Save 25%",
    caption: "Ideal when you want a more complete lighting flow at home.",
  },
]

export const HOW_STEPS = [
  {
    n: "01",
    Icon: Package,
    title: "Unbox and charge",
    desc: "Charge it through USB before first use so it's ready to install wherever you need light.",
  },
  {
    n: "02",
    Icon: LayoutGrid,
    title: "Mount it anywhere",
    desc: "Place the light on a clean flat surface and set the finish and length that fit the room.",
  },
  {
    n: "03",
    Icon: Lightbulb,
    title: "Let motion do the work",
    desc: "It turns on automatically when movement is detected and fades out after the space is still.",
  },
]

export const LIGHTING_MODES = [
  {
    Icon: Activity,
    title: "Motion mode",
    desc: "Default smart-home behavior that activates only when someone enters the space.",
  },
  {
    Icon: Gauge,
    title: "Brightness mode",
    desc: "Adjust output anywhere between 10% and 100% for the right level of ambient visibility.",
  },
  {
    Icon: RotateCcw,
    title: "Auto-off mode",
    desc: "The light automatically powers down after roughly 15 seconds without motion.",
  },
]

export const LIGHT_TONES = [
  {
    title: "Warm Light 3000K",
    tone: "Soft / cozy",
    desc: "Best for bedrooms, closets, and relaxing evening routines.",
    swatch: "linear-gradient(135deg, #f4d9aa, #c89a59)",
  },
  {
    title: "Neutral Light 4000K",
    tone: "Balanced / crisp",
    desc: "A clean middle ground for kitchens, hallways, and general task lighting.",
    swatch: "linear-gradient(135deg, #f7f2e8, #d7c7a8)",
  },
  {
    title: "White Light 6000K",
    tone: "Bright / clear",
    desc: "Ideal when you want maximum visibility for stairs, entryways, or utility spaces.",
    swatch: "linear-gradient(135deg, #ffffff, #d5d8e2)",
  },
]

export const USE_CASES = [
  {
    title: "Closets",
    desc: "See every item clearly without flooding the whole room with harsh overhead light.",
    Icon: Palette,
  },
  {
    title: "Hallways",
    desc: "Add a soft welcome path that feels elegant instead of clinical.",
    Icon: WandSparkles,
  },
  {
    title: "Kitchens",
    desc: "Under-cabinet lighting that creates depth, warmth, and better visibility.",
    Icon: Blend,
  },
  {
    title: "Staircases",
    desc: "Improve nighttime safety with a subtle, modern glow that activates on approach.",
    Icon: Bolt,
  },
]

export const COMPARISON_ROWS = [
  ["Wireless install", true, false],
  ["USB rechargeable", true, false],
  ["Motion detection", true, false],
  ["3 light tones", true, false],
  ["Adjustable brightness", true, false],
  ["Premium minimalist finish", true, false],
  ["No wiring required", true, false],
]

export const TECH_SPECS = [
  ["Product name", PRODUCT_NAME],
  ["Type", "Wireless LED motion sensor night light"],
  ["Motion detection angle", "120\u00b0"],
  ["Auto-off", "About 15 seconds without motion"],
  ["Brightness", "Adjustable from 10% to 100%"],
  ["Light tones", "Warm Light 3000K / Neutral Light 4000K / White Light 6000K"],
  ["Colors", "White / Black"],
  ["Sizes", "20cm / 30cm / 40cm / 50cm"],
  ["Material", "PVC"],
  ["Voltage", "5V"],
]

export const FAQS_DATA = [
  {
    q: "How does Luxense MotionGlow turn on?",
    a: "The built-in motion sensor detects movement within its 120\u00b0 angle and automatically lights the space without needing a switch.",
  },
  {
    q: "How long does it stay on after motion stops?",
    a: "It turns off automatically after approximately 15 seconds with no motion, which keeps the experience calm and energy-conscious.",
  },
  {
    q: "Is installation difficult?",
    a: "Not at all. There is no wiring required, so you can mount it in minutes and move it when your layout changes.",
  },
  {
    q: "What sizes and colors are available?",
    a: "MotionGlow comes in White and Black, with size options of 20cm, 30cm, 40cm, and 50cm.",
  },
  {
    q: "Is it rechargeable?",
    a: "Yes. It charges through USB, so it is easy to top up and keep ready for daily use.",
  },
]

export const GUARANTEE_POINTS = [
  "Secure checkout",
  "Fast support if you need help",
  "No wiring or technical install required",
  "A clean, modern upgrade for everyday spaces",
]

export const FINAL_CTA_POINTS = [
  "Secure checkout",
  "30-day guarantee",
  "Fast support",
]

export const FEATURES_DATA = BENEFITS_DATA
export const STATS = [
  { v: "120\u00b0", l: "Motion range" },
  { v: "15s", l: "Auto-off" },
  { v: "5V", l: "USB power" },
  { v: "4 sizes", l: "Available lengths" },
]

export const WHY_ROWS = [
  { label: "Wireless and rechargeable", us: true, them: false },
  { label: "Premium minimalist design", us: true, them: false },
  { label: "Motion activation", us: true, them: "Manual switch" },
  { label: "Adjustable brightness", us: true, them: false },
  { label: "Three color temperatures", us: true, them: "Single tone" },
  { label: "No wiring required", us: true, them: false },
]

export const ROOMS_DATA = [
  {
    gradient: "linear-gradient(160deg,#2a2a2a,#101010)",
    title: "Closets",
    desc: "Get a luxury dressing-room feel with a soft motion-activated glow.",
  },
  {
    gradient: "linear-gradient(160deg,#4a4a4a,#171717)",
    title: "Hallways",
    desc: "Make night-time navigation safer without harsh overhead light.",
  },
  {
    gradient: "linear-gradient(160deg,#373737,#111111)",
    title: "Kitchens",
    desc: "Add clean under-cabinet illumination with a high-end look.",
  },
  {
    gradient: "linear-gradient(160deg,#292929,#0f0f0f)",
    title: "Staircases",
    desc: "Keep steps visible with a subtle architectural glow.",
  },
]

export const REVIEWS_DATA = [
  {
    name: "Alicia R.",
    country: "United States",
    rating: 5,
    title: "Looks like built-in lighting",
    date: "2 weeks ago",
    text: "The finish is elegant and the motion response feels immediate. It completely changed my hallway at night.",
    helpful: 211,
    variant: "White",
  },
  {
    name: "Daniel K.",
    country: "Germany",
    rating: 5,
    title: "Perfect for closets and shelves",
    date: "1 month ago",
    text: "The brightness control is a real bonus and the install took barely any time at all.",
    helpful: 164,
    variant: "Black",
  },
  {
    name: "Maya L.",
    country: "Canada",
    rating: 5,
    title: "The design feels premium",
    date: "5 days ago",
    text: "I wanted something smart but not overly technical. MotionGlow feels like a luxury home detail.",
    helpful: 276,
    variant: "White",
  },
]
