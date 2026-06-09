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

export const IMAGE_ASSETS = {
  // TODO: Replace with premium hero lifestyle image
  heroLifestyle: {
    src: lifestyleImage,
    alt: "Luxense MotionGlow lifestyle scene in a modern home",
    label: "MotionGlow hero",
  },
  // TODO: Replace with premium hallway lifestyle image
  hallwayLifestyle: {
    src: lifestyleImage,
    alt: "Luxense MotionGlow in a softly lit hallway",
    label: "Hallway lighting",
  },
  // TODO: Replace with under-cabinet kitchen image
  kitchenLifestyle: {
    src: heroImage,
    alt: "Luxense MotionGlow under kitchen cabinetry",
    label: "Kitchen lighting",
  },
  // TODO: Replace with closet lighting image
  closetLifestyle: {
    src: closetImage,
    alt: "Luxense MotionGlow installed in a closet",
    label: "Closet install",
  },
  // TODO: Replace with staircase lighting image
  stairLifestyle: {
    src: heroImage,
    alt: "Luxense MotionGlow illuminating a staircase",
    label: "Stairway lighting",
  },
  // TODO: Replace with white product close-up
  whiteProduct: {
    src: lifestyleImage,
    alt: "White Luxense MotionGlow product close-up",
    label: "White product close-up",
  },
  // TODO: Replace with black product close-up
  blackProduct: {
    src: heroImage,
    alt: "Black Luxense MotionGlow product close-up",
    label: "Black product close-up",
  },
  // TODO: Replace with USB charging detail
  usbCharging: {
    src: chargerImage,
    alt: "USB charging detail for Luxense MotionGlow",
    label: "USB charging detail",
  },
  // TODO: Replace with motion sensor detail
  motionSensor: {
    src: lifestyleImage,
    alt: "Motion sensor detail for Luxense MotionGlow",
    label: "Motion sensor detail",
  },
  // TODO: Replace with final lifestyle CTA image
  finalLifestyle: {
    src: lifestyleImage,
    alt: "Luxense MotionGlow in a final lifestyle scene",
    label: "Final CTA image",
  },
}

function formatMoney(value) {
  const amount = Number(value)
  return Number.isFinite(amount) ? `$${amount.toFixed(2)}` : "$0.00"
}

export const GALLERY_IMAGES = [
  IMAGE_ASSETS.heroLifestyle,
  {
    src: IMAGE_ASSETS.motionSensor.src,
    label: "Soft ambient glow",
    alt: "Wireless motion sensor light casting a warm glow under a shelf",
  },
  IMAGE_ASSETS.closetLifestyle,
  IMAGE_ASSETS.usbCharging,
]

export const COLORS = [
  { name: "White", hex: "#F6F6F4", image: IMAGE_ASSETS.whiteProduct.src },
  { name: "Black", hex: "#171717", image: IMAGE_ASSETS.blackProduct.src },
]

export const SIZES = ["20cm", "30cm", "40cm", "50cm"]

export const FALLBACK_VARIANTS = [
  { id: null, title: "White", price: "29.99", available: true, image: IMAGE_ASSETS.whiteProduct.src, options: ["White"] },
  { id: null, title: "Black", price: "29.99", available: true, image: IMAGE_ASSETS.blackProduct.src, options: ["Black"] },
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

export function getPriceSummary(quantity) {
  const qty = Math.max(1, Math.floor(Number(quantity) || 1))
  const unitPrice = UNIT_PRICE
  const total = Number((qty * unitPrice).toFixed(2))

  if (qty === 1) {
    return {
      quantity: qty,
      bundleLabel: "Buy 1",
      total,
      totalFormatted: formatMoney(total),
      compareAt: total,
      compareAtFormatted: formatMoney(total),
      savings: 0,
      savingsFormatted: formatMoney(0),
      savingsText: "No bundle savings",
      badge: null,
      hasSavings: false,
      unitPrice,
      unitPriceFormatted: formatMoney(unitPrice),
      selectedBundleQuantity: 1,
      selectedBundleLabel: "Buy 1",
      summaryLabel: "Buy 1",
      label: "Buy 1",
      price: total,
      compareAtPrice: total,
      savingsAmount: 0,
      savingsLabel: "No bundle savings",
      subtotal: total,
      isExact: true,
      useCase: "Best for one room",
      caption: "Best for a first install in a closet, shelf, or hallway.",
    }
  }

  if (qty === 2) {
    const totalExact = 49.99
    const compareAt = Number((2 * unitPrice).toFixed(2))
    const savings = Number((compareAt - totalExact).toFixed(2))

    return {
      quantity: qty,
      bundleLabel: "Buy 2 - Save 15%",
      total: totalExact,
      totalFormatted: formatMoney(totalExact),
      compareAt,
      compareAtFormatted: formatMoney(compareAt),
      savings,
      savingsFormatted: formatMoney(savings),
      savingsText: `You save ${formatMoney(savings)}`,
      badge: "Most Popular",
      hasSavings: savings > 0,
      unitPrice: totalExact / 2,
      unitPriceFormatted: formatMoney(totalExact / 2),
      selectedBundleQuantity: 2,
      selectedBundleLabel: "Buy 2",
      summaryLabel: "Buy 2",
      label: "Buy 2",
      price: totalExact,
      compareAtPrice: compareAt,
      savingsAmount: savings,
      savingsLabel: "Save 15%",
      subtotal: totalExact,
      isExact: true,
      useCase: "Perfect for closet + hallway",
      caption: "A balanced set for two spaces that you use every day.",
    }
  }

  if (qty === 4) {
    const totalExact = 89.99
    const compareAt = Number((4 * unitPrice).toFixed(2))
    const savings = Number((compareAt - totalExact).toFixed(2))

    return {
      quantity: qty,
      bundleLabel: "Buy 4 - Save 25%",
      total: totalExact,
      totalFormatted: formatMoney(totalExact),
      compareAt,
      compareAtFormatted: formatMoney(compareAt),
      savings,
      savingsFormatted: formatMoney(savings),
      savingsText: `You save ${formatMoney(savings)}`,
      badge: "Best Value",
      hasSavings: savings > 0,
      unitPrice: totalExact / 4,
      unitPriceFormatted: formatMoney(totalExact / 4),
      selectedBundleQuantity: 4,
      selectedBundleLabel: "Buy 4",
      summaryLabel: "Buy 4",
      label: "Buy 4",
      price: totalExact,
      compareAtPrice: compareAt,
      savingsAmount: savings,
      savingsLabel: "Save 25%",
      subtotal: totalExact,
      isExact: true,
      useCase: "Light multiple spaces",
      caption: "Ideal when you want a more complete lighting flow at home.",
    }
  }

  return {
    quantity: qty,
    bundleLabel: "Custom quantity",
    total,
    totalFormatted: formatMoney(total),
    compareAt: total,
    compareAtFormatted: formatMoney(total),
    savings: 0,
    savingsFormatted: formatMoney(0),
    savingsText: "No bundle savings",
    badge: null,
    hasSavings: false,
    unitPrice,
    unitPriceFormatted: formatMoney(unitPrice),
    selectedBundleQuantity: null,
    selectedBundleLabel: "Custom quantity",
    summaryLabel: "Custom quantity",
    label: "Custom quantity",
    price: total,
    compareAtPrice: total,
    savingsAmount: 0,
    savingsLabel: "No bundle savings",
    subtotal: total,
    isExact: false,
    useCase: "Flexible quantity",
    caption: "A custom quantity with clear unit pricing.",
  }
}

export function getBundleOfferForQuantity(quantity) {
  return getPriceSummary(quantity)
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
    image: IMAGE_ASSETS.hallwayLifestyle,
  },
  {
    title: "Stairs",
    desc: "Safer steps with a calmer glow.",
    Icon: WandSparkles,
    image: IMAGE_ASSETS.stairLifestyle,
  },
  {
    title: "Kitchens",
    desc: "Under-cabinet light with a premium feel.",
    Icon: Blend,
    image: IMAGE_ASSETS.kitchenLifestyle,
  },
  {
    title: "Closets",
    desc: "See clearly without harsh overheads.",
    Icon: Bolt,
    image: IMAGE_ASSETS.closetLifestyle,
  },
  {
    title: "Bedrooms",
    desc: "Gentle light for quiet routines.",
    Icon: Sparkles,
    image: IMAGE_ASSETS.whiteProduct,
  },
  {
    title: "Bathrooms",
    desc: "Calm nighttime visibility, instantly.",
    Icon: Lightbulb,
    image: IMAGE_ASSETS.motionSensor,
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
