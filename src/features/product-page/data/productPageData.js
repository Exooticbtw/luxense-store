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

export const PRODUCT_NAME = "Luxense MotionGlow™"
export const UNIT_PRICE = 29.99

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
    title: "Motion activated",
    desc: "Automatic light exactly when you need it.",
  },
  {
    Icon: BatteryCharging,
    title: "USB rechargeable",
    desc: "Clean charging with no battery waste.",
  },
  {
    Icon: Gauge,
    title: "Soft ambient glow",
    desc: "Warm, calm, and easy on the eyes.",
  },
  {
    Icon: Wrench,
    title: "Slim magnetic design",
    desc: "A discreet profile that feels built in.",
  },
]

export const BUNDLE_OPTIONS = [
  {
    label: "Buy 1",
    quantity: 1,
    price: 29.99,
    compareAt: 29.99,
    badge: null,
    savings: "Save 0%",
    useCase: "Best for one room",
    caption: "Best for a first install in a closet, shelf, or hallway.",
  },
  {
    label: "Buy 2",
    quantity: 2,
    price: 49.99,
    compareAt: 59.98,
    badge: "Most Popular",
    savings: "Save 15%",
    useCase: "Perfect for closet + hallway",
    caption: "A balanced set for two spaces that you use every day.",
  },
  {
    label: "Buy 4",
    quantity: 4,
    price: 89.99,
    compareAt: 119.96,
    badge: "Best Value",
    savings: "Save 25%",
    useCase: "Light multiple spaces",
    caption: "Ideal when you want a more complete lighting flow at home.",
  },
]

export function getBundleOfferForQuantity(quantity) {
  const qty = Math.max(1, Math.floor(Number(quantity) || 1))
  const exactOffer = BUNDLE_OPTIONS.find((bundle) => bundle.quantity === qty)

  if (exactOffer) {
    const compareAt = Number(exactOffer.compareAt ?? exactOffer.price)
    const savingsAmount = Math.max(0, compareAt - exactOffer.price)

    return {
      ...exactOffer,
      quantity: qty,
      label: exactOffer.label,
      price: exactOffer.price,
      compareAt,
      subtotal: exactOffer.price,
      savingsAmount,
      savingsLabel: exactOffer.savings || "Save 0%",
      unitPrice: exactOffer.price / qty,
      useCase: exactOffer.useCase || exactOffer.caption,
      isExact: true,
      selectedBundleQuantity: qty,
      selectedBundleLabel: exactOffer.label,
      summaryLabel: exactOffer.label,
    }
  }

  if (qty === 3) {
    const subtotal = Number((qty * UNIT_PRICE).toFixed(2))
    return {
      label: "Custom quantity",
      quantity: qty,
      price: subtotal,
      compareAt: subtotal,
      subtotal,
      savingsAmount: 0,
      savingsLabel: "No bundle discount",
      unitPrice: UNIT_PRICE,
      badge: "Flexible quantity",
      useCase: "Best for a mix of spaces",
      caption: "A flexible three-unit setup without bundle pricing.",
      isExact: false,
      selectedBundleQuantity: null,
      selectedBundleLabel: "Custom quantity",
      summaryLabel: "Custom quantity",
    }
  }

  if (qty > 4) {
    const subtotal = Number((BUNDLE_OPTIONS[2].price + (qty - 4) * UNIT_PRICE).toFixed(2))
    const compareAt = Number((qty * UNIT_PRICE).toFixed(2))
    const savingsAmount = Math.max(0, compareAt - subtotal)

    return {
      label: qty === 4 ? "Buy 4" : `Buy 4 + ${qty - 4} extra${qty - 4 === 1 ? "" : "s"}`,
      quantity: qty,
      price: subtotal,
      compareAt,
      subtotal,
      savingsAmount,
      savingsLabel: savingsAmount > 0 ? `Save $${savingsAmount.toFixed(2)}` : "Save 0%",
      unitPrice: UNIT_PRICE,
      badge: "Best Value",
      useCase: "Best value for multiple spaces",
      caption: "Buy four, then add extra units safely at the regular unit price.",
      isExact: false,
      selectedBundleQuantity: 4,
      selectedBundleLabel: "Buy 4",
      summaryLabel: qty === 4 ? "Buy 4" : `Buy 4 + ${qty - 4} extra${qty - 4 === 1 ? "" : "s"}`,
    }
  }

  const subtotal = Number((qty * UNIT_PRICE).toFixed(2))
  return {
    label: `Custom quantity`,
    quantity: qty,
    price: subtotal,
    compareAt: subtotal,
    subtotal,
    savingsAmount: 0,
    savingsLabel: "No bundle discount",
    unitPrice: UNIT_PRICE,
    badge: "Flexible quantity",
    useCase: "Flexible quantity",
    caption: "A custom quantity with clear unit pricing.",
    isExact: false,
    selectedBundleQuantity: null,
    selectedBundleLabel: "Custom quantity",
    summaryLabel: "Custom quantity",
  }
}

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
    desc: "Best for bedrooms, closets, and calm evening routines.",
    swatch: "linear-gradient(135deg, #f4d9aa, #c89a59)",
  },
  {
    title: "Neutral Light 4000K",
    tone: "Balanced / crisp",
    desc: "Ideal for kitchens, hallways, and everyday visibility.",
    swatch: "linear-gradient(135deg, #f7f2e8, #d7c7a8)",
  },
  {
    title: "White Light 6000K",
    tone: "Bright / clear",
    desc: "Better for stairs, entryways, and spaces that need more clarity.",
    swatch: "linear-gradient(135deg, #ffffff, #d5d8e2)",
  },
]

export const USE_CASES = [
  {
    title: "Hallways",
    desc: "Soft guidance for late-night movement.",
    Icon: Palette,
    image: lifestyleImage,
  },
  {
    title: "Stairs",
    desc: "Safer steps with a calmer glow.",
    Icon: WandSparkles,
    image: heroImage,
  },
  {
    title: "Kitchens",
    desc: "Under-cabinet light with a premium feel.",
    Icon: Blend,
    image: chargerImage,
  },
  {
    title: "Closets",
    desc: "See clearly without harsh overheads.",
    Icon: Bolt,
    image: closetImage,
  },
  {
    title: "Bedrooms",
    desc: "Gentle light for quiet routines.",
    Icon: Sparkles,
    image: lifestyleImage,
  },
  {
    title: "Bathrooms",
    desc: "Calm nighttime visibility, instantly.",
    Icon: Lightbulb,
    image: heroImage,
  },
]

export const COMPARISON_ROWS = [
  ["Wireless install", true, false],
  ["Rechargeable", true, false],
  ["Slim design", true, false],
  ["Soft light", true, false],
  ["Premium look", true, false],
  ["No wiring", true, false],
]

export const TECH_SPECS = [
  ["Product name", PRODUCT_NAME],
  ["Type", "Wireless LED motion sensor night light"],
  ["Motion detection angle", "120\u00b0"],
  ["Auto-off", "About 15 seconds without motion"],
  ["Brightness", "Adjustable from 10% to 100%"],
  ["Light tones", "Warm + Neutral + White included"],
  ["Colors", "White / Black"],
  ["Sizes", "20cm / 30cm / 40cm / 50cm"],
  ["Material", "PVC"],
  ["Voltage", "5V"],
]

export const FAQS_DATA = [
  {
    q: "How does it turn on?",
    a: "It activates automatically when it detects movement.",
  },
  {
    q: "How long does it stay on?",
    a: "It turns off automatically after about 15 seconds with no motion.",
  },
  {
    q: "Is installation difficult?",
    a: "No. It installs in minutes with no wiring required.",
  },
  {
    q: "What sizes and colors are available?",
    a: "White or Black, in 20cm, 30cm, 40cm, and 50cm lengths.",
  },
  {
    q: "Is it rechargeable?",
    a: "Yes. It charges through USB for simple daily use.",
  },
]

export const GUARANTEE_POINTS = [
  "Secure checkout",
  "Fast support",
  "No wiring required",
  "30-day guarantee",
]

export const FINAL_CTA_POINTS = [
  "Secure checkout",
  "Free shipping",
  "30-day guarantee",
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
    title: "Looks built in",
    date: "2 weeks ago",
    text: "Elegant finish, immediate motion response, and it changed our hallway at night.",
    helpful: 211,
    variant: "White",
  },
  {
    name: "Daniel K.",
    country: "Germany",
    rating: 5,
    title: "Perfect for closets and shelves",
    date: "1 month ago",
    text: "Great brightness control and a very fast install.",
    helpful: 164,
    variant: "Black",
  },
  {
    name: "Maya L.",
    country: "Canada",
    rating: 5,
    title: "Premium but practical",
    date: "5 days ago",
    text: "Smart without feeling technical. It reads like a luxury detail.",
    helpful: 276,
    variant: "White",
  },
]
