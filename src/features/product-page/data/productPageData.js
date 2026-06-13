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
    badge: null,
    discount: 0,
    subtitle: "Try MotionGlow",
    note: "Best for one room",
    useCase: "Best for one room",
    caption: "Best for a first install in a closet, shelf, or hallway.",
  },
  {
    label: "Buy 2",
    quantity: 2,
    badge: "Most Popular",
    discount: 0.1,
    subtitle: "Most popular setup",
    note: "Save 10%",
    useCase: "Perfect for closet + hallway",
    caption: "A balanced set for two spaces that you use every day.",
  },
  {
    label: "Buy 3",
    quantity: 3,
    badge: "Best Value",
    discount: 0.15,
    subtitle: "Best value for your home",
    note: "Save 15%",
    useCase: "Light multiple spaces",
    caption: "Ideal when you want a more complete lighting flow at home.",
  },
]

export function getPriceSummary(quantity, unitPrice = UNIT_PRICE) {
  const qty = Math.max(1, Math.floor(Number(quantity) || 1))
  const safeUnitPrice = Number.isFinite(Number(unitPrice)) ? Number(unitPrice) : UNIT_PRICE
  const option = BUNDLE_OPTIONS.find((bundle) => bundle.quantity === qty)
  const discount = option?.discount ?? 0
  const listTotal = Number((safeUnitPrice * qty).toFixed(2))
  const total = Number((listTotal * (1 - discount)).toFixed(2))
  const savings = Number((listTotal - total).toFixed(2))
  const label = option?.label || "Custom quantity"
  const subtitle = option?.subtitle || "Flexible quantity"
  const badge = option?.badge || null
  const note = option?.note || (discount > 0 ? `Save ${Math.round(discount * 100)}%` : "No bundle savings")

  return {
    quantity: qty,
    bundleLabel: label,
    total,
    totalFormatted: formatMoney(total),
    compareAt: listTotal,
    compareAtFormatted: formatMoney(listTotal),
    savings,
    savingsFormatted: formatMoney(savings),
    savingsText: discount > 0 ? `You save ${formatMoney(savings)}` : "No bundle savings",
    badge,
    hasSavings: savings > 0,
    unitPrice: safeUnitPrice,
    unitPriceFormatted: formatMoney(safeUnitPrice),
    selectedBundleQuantity: option?.quantity || null,
    selectedBundleLabel: label,
    summaryLabel: label,
    label,
    subtitle,
    note,
    price: total,
    compareAtPrice: listTotal,
    savingsAmount: savings,
    savingsLabel: discount > 0 ? `Save ${Math.round(discount * 100)}%` : "No bundle savings",
    subtotal: total,
    isExact: discount === 0,
    discountPercent: Math.round(discount * 100),
    useCase: option?.useCase || "Flexible quantity",
    caption: option?.caption || "A custom quantity with clear unit pricing.",
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
  {
    feature: "Wireless installation",
    luxense: "Yes",
    standard: "Often limited or bulky",
    luxenseTone: "positive",
    standardTone: "muted",
  },
  {
    feature: "Rechargeable design",
    luxense: "USB rechargeable",
    standard: "Often battery-dependent",
    luxenseTone: "positive",
    standardTone: "muted",
  },
  {
    feature: "Slim profile",
    luxense: "Minimal and discreet",
    standard: "Often bulky",
    luxenseTone: "positive",
    standardTone: "muted",
  },
  {
    feature: "Premium look",
    luxense: "Designed for modern interiors",
    standard: "Usually utilitarian",
    luxenseTone: "positive",
    standardTone: "muted",
  },
  {
    feature: "Soft ambient glow",
    luxense: "Warm, neutral, and white tones included",
    standard: "Often harsh or single-tone",
    luxenseTone: "positive",
    standardTone: "muted",
  },
  {
    feature: "No wiring needed",
    luxense: "Installs without electrical work",
    standard: "May require more setup",
    luxenseTone: "positive",
    standardTone: "muted",
  },
  {
    feature: "Multiple home uses",
    luxense: "Closets, stairs, kitchens, hallways, cabinets",
    standard: "Limited placement flexibility",
    luxenseTone: "positive",
    standardTone: "muted",
  },
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
    // TODO: Replace with customer hallway installation photo
    name: "Alicia R.",
    location: "United States",
    country: "United States",
    rating: 5,
    title: "Looks built in",
    time: "2 weeks ago",
    date: "2 weeks ago",
    text: "Elegant finish, fast motion response, and it made our hallway feel more complete at night.",
    variant: "White",
    featured: true,
    visual: {
      label: "Customer hallway installation photo",
      caption: "Hallway install",
      gradient:
        "radial-gradient(circle at 18% 20%, rgba(201,164,106,.28), transparent 26%), radial-gradient(circle at 76% 24%, rgba(255,255,255,.14), transparent 22%), linear-gradient(160deg, #181818 0%, #323232 55%, #8b6a3f 140%)",
    },
  },
  {
    // TODO: Replace with customer closet installation photo
    name: "Daniel K.",
    location: "Germany",
    country: "Germany",
    rating: 5,
    title: "Perfect for closets and shelves",
    time: "1 month ago",
    date: "1 month ago",
    text: "Great brightness control and a very quick install. It feels much more premium than expected.",
    variant: "Black",
    visual: {
      label: "Customer closet installation photo",
      caption: "Closet install",
      gradient:
        "radial-gradient(circle at 20% 18%, rgba(255,255,255,.20), transparent 24%), radial-gradient(circle at 78% 30%, rgba(201,164,106,.16), transparent 22%), linear-gradient(160deg, #121212 0%, #2f2f2f 56%, #6d5a3d 140%)",
    },
  },
  {
    // TODO: Replace with customer shelf or cabinet photo
    name: "Maya L.",
    location: "Canada",
    country: "Canada",
    rating: 5,
    title: "Premium but practical",
    time: "5 days ago",
    date: "5 days ago",
    text: "Smart without feeling technical. It reads like a luxury detail and works exactly as promised.",
    variant: "White",
    featured: true,
    visual: {
      label: "Customer shelf or cabinet photo",
      caption: "Shelf detail",
      gradient:
        "radial-gradient(circle at 18% 20%, rgba(201,164,106,.24), transparent 24%), radial-gradient(circle at 84% 24%, rgba(255,255,255,.18), transparent 20%), linear-gradient(160deg, #202020 0%, #444444 56%, #c9a46a 140%)",
    },
  },
  {
    // TODO: Replace with customer stairway lighting photo
    name: "Joseph T.",
    location: "United Kingdom",
    country: "United Kingdom",
    rating: 5,
    title: "Easy to install",
    time: "3 weeks ago",
    date: "3 weeks ago",
    text: "Took only a couple of minutes to set up, and the motion sensor works every time we pass by.",
    variant: "Black",
    visual: {
      label: "Customer stairway lighting photo",
      caption: "Stairway install",
      gradient:
        "radial-gradient(circle at 22% 22%, rgba(255,255,255,.16), transparent 22%), radial-gradient(circle at 80% 26%, rgba(201,164,106,.18), transparent 20%), linear-gradient(160deg, #151515 0%, #383838 54%, #7f6542 140%)",
    },
  },
  {
    // TODO: Replace with customer bedroom closet photo
    name: "Nina P.",
    location: "Australia",
    country: "Australia",
    rating: 5,
    title: "Soft light at night",
    time: "6 days ago",
    date: "6 days ago",
    text: "We use the warm tone in the bedroom closet and it feels calm, not harsh, when the room is dark.",
    variant: "White",
    visual: {
      label: "Customer bedroom closet photo",
      caption: "Bedroom closet",
      gradient:
        "radial-gradient(circle at 20% 18%, rgba(244,217,170,.32), transparent 24%), radial-gradient(circle at 78% 28%, rgba(255,255,255,.16), transparent 20%), linear-gradient(160deg, #312316 0%, #60452b 56%, #d9b87d 140%)",
    },
  },
  {
    // TODO: Replace with customer under-cabinet kitchen photo
    name: "Omar S.",
    location: "United States",
    country: "United States",
    rating: 5,
    title: "Ordered more after the first one",
    time: "2 months ago",
    date: "2 months ago",
    text: "We bought one for the kitchen, then came back for more. It’s one of those products you instantly want in other spaces.",
    variant: "Black",
    visual: {
      label: "Customer under-cabinet kitchen photo",
      caption: "Kitchen install",
      gradient:
        "radial-gradient(circle at 18% 20%, rgba(255,255,255,.16), transparent 22%), radial-gradient(circle at 76% 24%, rgba(201,164,106,.16), transparent 22%), linear-gradient(160deg, #111111 0%, #2f2f2f 52%, #8a6a43 140%)",
    },
  },
]
