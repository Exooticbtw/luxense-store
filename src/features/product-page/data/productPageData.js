import {
  Activity,
  BatteryCharging,
  Clock,
  Layers,
  Magnet,
  Plug,
  SunMedium,
  Wrench,
} from "lucide-react"

import heroImage from "../../../assets/product/principal.png"
import chargerImage from "../../../assets/product/cargador.png"
import closetImage from "../../../assets/product/armario.png"
import lifestyleImage from "../../../assets/product/hero-detail.png"

export const PRODUCT_NAME = "Luxense Motion Light"

export const FALLBACK_VARIANTS = [
  { id: null, title: "Matte Black", price: "24.99", battery: "Up to 75 days", coverage: "Closets and cabinets", leds: 6, image: heroImage, popular: true },
  { id: null, title: "Warm White", price: "24.99", battery: "Up to 75 days", coverage: "Kitchen and hallway", leds: 6, image: lifestyleImage },
  { id: null, title: "Champagne Gold", price: "24.99", battery: "Up to 75 days", coverage: "Wardrobes and stairs", leds: 6, image: closetImage },
]

export const COLORS = [
  { name: "Matte Black", hex: "#1d1a17", image: heroImage },
  { name: "Warm White", hex: "#f1ede5", image: lifestyleImage },
  { name: "Champagne Gold", hex: "#c8a96a", image: closetImage },
]

export const BUNDLE_OPTIONS = [
  { label: "1 Unit", quantity: 1, price: 24.99, badge: null, caption: "Perfect for one space" },
  { label: "2 Units", quantity: 2, price: 39.99, badge: "Most Popular", caption: "Best for kitchen + closet" },
  { label: "3 Units", quantity: 3, price: 49.99, badge: "Best Value", caption: "Cover a full route at home" },
]

export const TRUST_POINTS = [
  "Free shipping",
  "Easy returns",
  "Secure checkout",
  "30-day guarantee",
  "Fast support",
]

export const GALLERY_IMAGES = [
  { src: heroImage, label: "Hero product", alt: "Luxense light installed under a shelf in a modern kitchen" },
  { src: lifestyleImage, label: "Kitchen mood", alt: "Warm shelf lighting in a contemporary interior" },
  { src: closetImage, label: "Closet glow", alt: "Warm closet lighting with hanging garments" },
  { src: chargerImage, label: "USB rechargeable", alt: "USB rechargeable light and power module on a wood surface" },
  { src: heroImage, label: "Hallway install", alt: "Architectural under-shelf light on a dark wall" },
  { src: lifestyleImage, label: "Motion demo", alt: "Lighting creating soft arcs across the wall" },
  { src: chargerImage, label: "Battery graphic", alt: "USB rechargeable battery module" },
  { src: closetImage, label: "Customer style", alt: "Elegant closet lighting installation" },
]

export const FEATURES_DATA = [
  {
    Icon: Activity,
    title: "Motion Sensor Activation",
    desc: "Light appears exactly when movement is detected, then fades away softly. No switches, no fuss.",
  },
  {
    Icon: BatteryCharging,
    title: "USB-C Rechargeable",
    desc: "Charge it like a premium device, then enjoy weeks of elegant lighting without constant charging.",
  },
  {
    Icon: Magnet,
    title: "Magnetic Installation",
    desc: "Mount in seconds with the included magnetic system. No drilling, no wires, no damage.",
  },
  {
    Icon: SunMedium,
    title: "Warm Ambient Glow",
    desc: "A soft 3000K tone that flatters wood, fabric and stone while making spaces feel more curated.",
  },
  {
    Icon: Layers,
    title: "Ultra-Slim Profile",
    desc: "Clean, minimal, and discreet enough to disappear into the architecture of your home.",
  },
  {
    Icon: Wrench,
    title: "No Wiring Required",
    desc: "The simplest upgrade you can make to a closet, hallway, shelf or under-cabinet space.",
  },
  {
    Icon: Clock,
    title: "Long Runtime",
    desc: "Designed to stay ready in the background so you can charge less and enjoy more.",
  },
]

export const HOW_STEPS = [
  {
    n: "01",
    Icon: Plug,
    title: "Charge via USB-C",
    desc: "A quick charge gives you a lighting system that feels effortless for daily use.",
  },
  {
    n: "02",
    Icon: Magnet,
    title: "Mount in seconds",
    desc: "Stick the magnetic base where you need it and snap the light into place.",
  },
  {
    n: "03",
    Icon: Activity,
    title: "Enjoy the glow",
    desc: "It turns on automatically when needed, then fades off softly to keep the room calm.",
  },
]

export const ROOMS_DATA = [
  {
    gradient: "linear-gradient(160deg,#2f261d,#15120f)",
    title: "Closets",
    desc: "See every fabric and accessory without flooding the room with harsh light.",
  },
  {
    gradient: "linear-gradient(160deg,#4a3f30,#2b221a)",
    title: "Kitchen shelves",
    desc: "A warm under-cabinet glow that makes the whole space feel more intentional.",
  },
  {
    gradient: "linear-gradient(160deg,#3d3428,#241e17)",
    title: "Hallways",
    desc: "Soft wayfinding that feels premium instead of technical.",
  },
  {
    gradient: "linear-gradient(160deg,#1d1a17,#0f0d0b)",
    title: "Staircases",
    desc: "A subtle safety upgrade with an architectural feel.",
  },
]

export const WHY_ROWS = [
  { label: "Wireless and rechargeable", us: true, them: false },
  { label: "Slim profile", us: true, them: false },
  { label: "Warm 3000K glow", us: true, them: "Cool blue" },
  { label: "Magnetic install", us: true, them: false },
  { label: "Automatic motion activation", us: true, them: "Manual switch" },
  { label: "30-day guarantee", us: true, them: false },
]

export const STATS = [
  { v: "12k+", l: "Happy customers" },
  { v: "4.9/5", l: "Average rating" },
  { v: "96%", l: "Positive reviews" },
  { v: "75 days", l: "Battery per charge" },
]

export const REVIEWS_DATA = [
  {
    name: "Sophie L.",
    country: "United Kingdom",
    rating: 5,
    title: "The most elegant addition to my home",
    date: "2 weeks ago",
    text: "The warm light is dreamy and the install took thirty seconds. It feels luxury, not like a cheap strip light.",
    helpful: 247,
    variant: "Matte Black",
  },
  {
    name: "Marcus R.",
    country: "Germany",
    rating: 5,
    title: "Bought four and transformed every space",
    date: "1 month ago",
    text: "Battery life is great, the sensor is precise, and the magnetic mount holds rock solid. Very premium feel.",
    helpful: 198,
    variant: "Champagne Gold",
  },
  {
    name: "Aisha K.",
    country: "United States",
    rating: 5,
    title: "Finally a motion light that does not look cheap",
    date: "3 weeks ago",
    text: "It blends into the wood beautifully and the glow is calm at night. Worth every cent.",
    helpful: 312,
    variant: "Warm White",
  },
  {
    name: "Camila V.",
    country: "Spain",
    rating: 5,
    title: "Mi pasillo nunca se vio tan bonito",
    date: "5 days ago",
    text: "La instalacion es magnética y se carga rapidísimo con USB-C. La luz cálida es perfecta.",
    helpful: 84,
    variant: "Matte Black",
  },
  {
    name: "Helena M.",
    country: "Netherlands",
    rating: 5,
    title: "Looks like it costs three times more",
    date: "1 week ago",
    text: "I keep getting compliments from guests. Nobody believes it is wireless.",
    helpful: 173,
    variant: "Champagne Gold",
  },
  {
    name: "Kenji T.",
    country: "Japan",
    rating: 4,
    title: "Beautiful design and really practical",
    date: "2 months ago",
    text: "The minimal design is the reason I bought it. It feels intentional in the room.",
    helpful: 56,
    variant: "Warm White",
  },
]

export const FAQS_DATA = [
  {
    q: "How long does the battery last?",
    a: "Typical use gets you weeks of light between charges. It is designed to feel like a premium device, not a disposable accessory.",
  },
  {
    q: "Is installation difficult?",
    a: "Not at all. The magnetic mount installs in seconds and does not require drilling or wiring.",
  },
  {
    q: "How is it charged?",
    a: "A USB-C cable is used for charging, so it plugs into the same kind of power setup most people already use.",
  },
  {
    q: "Can it be removed easily?",
    a: "Yes. It detaches cleanly from the magnetic strip, so you can recharge or relocate it whenever needed.",
  },
]

export const DETAILS_DATA = [
  { title: "Battery capacity", value: "Long-lasting rechargeable battery for daily use." },
  { title: "Charging time", value: "Quick USB-C charging for easy top-ups." },
  { title: "Runtime", value: "Designed for extended use between charges." },
  { title: "Motion sensor range", value: "Responsive motion activation for walk-by lighting." },
  { title: "Lighting angle", value: "Soft wide-angle illumination for shelves and cabinetry." },
  { title: "Materials", value: "Minimal housing with a premium matte finish." },
  { title: "Dimensions", value: "Compact slim-profile light bar." },
  { title: "Installation", value: "Magnetic, tool-free installation." },
]

export const PURCHASE_NAMES = ["Emma", "Liam", "Olivia", "Noah", "Ava", "Lucas", "Mia", "Ethan", "Isla", "Hugo"]
export const PURCHASE_PLACES = ["London", "Berlin", "New York", "Paris", "Sydney", "Toronto", "Madrid", "Tokyo"]
