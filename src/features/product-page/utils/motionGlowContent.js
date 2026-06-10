import { IMAGE_ASSETS, PRODUCT_NAME } from "../data/productPageData.js"
import { normalizeImageUrl, normalizeList } from "./shopify.js"

const DEFAULT_ANNOUNCEMENT = {
  messages: [
    "Free shipping over $35",
    "Secure checkout",
    "30-day money-back guarantee",
    "Fast human support",
  ],
}

const DEFAULT_HERO = {
  heroEyebrow: "Premium Motion Lighting For Modern Homes",
  heroTitle: "Luxense MotionGlow™",
  heroDescription:
    "Premium motion lighting for a calmer, safer home. Luxense MotionGlow turns on automatically when you move, adding soft ambient light exactly where you need it.",
  heroPrimaryButton: "Get Yours Today",
  heroSecondaryButton: "See It In Action",
  heroRatingText: "4.9/5 Rating",
  heroCustomerText: "3,000+ Happy Customers",
  heroShippingText: "Free Shipping",
  heroGuaranteeText: "30-Day Guarantee",
}

const DEFAULT_PURCHASE = {
  purchaseEyebrow: "Product purchase",
  purchaseTitle: "Luxense MotionGlow™",
  purchaseDescription: "Premium Motion Lighting For Modern Homes",
  startingPriceLabel: "Starting price",
  startingPrice: "$29.99",
  bundleSavingsLabel: "Bundle savings",
  addToCartButton: "Add to Cart",
  checkoutTrustText: "Secure checkout · Free shipping · 30-day guarantee",
  includedTonesTitle: "Includes all 3 light tones: Warm, Neutral, and White.",
  includedTonesDescription:
    "Switch between built-in warm 3000K, neutral 4000K, and white 6000K modes anytime after setup.",
}

const DEFAULT_BUNDLES = [
  { quantity: 1, title: "Buy 1", subtitle: "Single room", price: "$29.99", badge: "", note: "Best for one room" },
  {
    quantity: 2,
    title: "Buy 2",
    subtitle: "Perfect for closet + hallway",
    price: "$49.99",
    badge: "Most Popular",
    note: "Save 15%",
  },
  {
    quantity: 4,
    title: "Buy 4",
    subtitle: "Light multiple spaces",
    price: "$89.99",
    badge: "Best Value",
    note: "Save 25%",
  },
]

const DEFAULT_VIDEO = {
  videoEyebrow: "Video demonstration",
  videoTitle: "See the motion response and ambient glow in a real room.",
  videoDescription:
    "A clean visual demo helps shoppers understand the premium feel fast, which is especially useful for Facebook and TikTok traffic.",
  videoCardTitle: "MotionGlow live demo",
  videoCardText: "A premium motion light that feels immediate and calm.",
  videoButtonText: "Get Yours Today",
}

const DEFAULT_STORY = {
  storyEyebrow: "Visual story",
  storyTitle: "Soft automatic lighting that keeps your home calm and clear.",
  problemTitle: "Dark spaces should not feel inconvenient.",
  problemDescription:
    "MotionGlow is designed for the moments when standard lighting feels too harsh, too late, or too far away.",
  solutionTitle: "Automatic light, designed to feel intentional.",
  solutionDescription:
    "A slim rechargeable light that adds comfort, safety, and polish exactly where your home needs it.",
  storyButtonText: "Upgrade Your Home",
}

const DEFAULT_BENEFITS = {
  benefitsEyebrow: "Product benefits",
  benefitsTitle: "Small details that make daily movement easier.",
  benefitsDescription: "Every feature is built to feel useful, calm, and effortless.",
  items: [
    { title: "Soft ambient glow", text: "Light that feels calm, not harsh." },
    { title: "USB rechargeable", text: "No wiring. No disposable batteries." },
    { title: "Three light tones", text: "Choose the mood that fits your space." },
    { title: "Minimal profile", text: "A cleaner finish that blends in." },
  ],
}

const DEFAULT_USE_CASES = {
  useCasesEyebrow: "Use cases",
  useCasesTitle: "Designed for the rooms where gentle light matters most.",
  useCasesDescription:
    "Hallways, stairs, closets, kitchens, bedrooms, and bathrooms feel more usable when the lighting appears automatically and stays visually discreet.",
  items: [
    { key: "hallways", title: "Hallways", text: "Soft guidance for late-night movement.", image: IMAGE_ASSETS.hallwayLifestyle.src },
    { key: "stairs", title: "Stairs", text: "Safer steps with a calmer glow.", image: IMAGE_ASSETS.stairLifestyle.src },
    { key: "kitchens", title: "Kitchens", text: "Under-cabinet light with a premium feel.", image: IMAGE_ASSETS.kitchenLifestyle.src },
    { key: "closets", title: "Closets", text: "See clearly without harsh overheads.", image: IMAGE_ASSETS.closetLifestyle.src },
    { key: "bedrooms", title: "Bedrooms", text: "Gentle light for quiet routines.", image: IMAGE_ASSETS.whiteProduct.src },
    { key: "bathrooms", title: "Bathrooms", text: "Calm nighttime visibility, instantly.", image: IMAGE_ASSETS.motionSensor.src },
  ],
}

const DEFAULT_LIGHT_TONES = {
  lightTonesEyebrow: "Built-in tones",
  lightTonesTitle: "One light. Three built-in tones.",
  lightTonesDescription:
    "Every MotionGlow includes warm, neutral, and white light modes, so you can choose the glow that fits the moment. These tones are built into the product, not separate variants.",
  items: [
    {
      key: "warm",
      title: "Warm Light 3000K",
      text: "Soft / cozy",
      description: "Best for bedrooms, closets, and calm evening routines.",
      image: IMAGE_ASSETS.whiteProduct.src,
    },
    {
      key: "neutral",
      title: "Neutral Light 4000K",
      text: "Balanced / crisp",
      description: "Ideal for kitchens, hallways, and everyday visibility.",
      image: IMAGE_ASSETS.heroLifestyle.src,
    },
    {
      key: "white",
      title: "White Light 6000K",
      text: "Bright / clear",
      description: "Better for stairs, entryways, and spaces that need more clarity.",
      image: IMAGE_ASSETS.finalLifestyle.src,
    },
  ],
}

const DEFAULT_COMPARISON = {
  comparisonEyebrow: "Comparison",
  comparisonTitle: "Why MotionGlow™ feels more refined.",
  comparisonDescription:
    "A cleaner, more premium way to add automatic lighting without wires, harsh glare, or bulky design.",
  rows: [
    { feature: "Wireless installation", luxense: "Yes", standard: "Often limited or bulky" },
    { feature: "Rechargeable design", luxense: "USB rechargeable", standard: "Often battery-dependent" },
    { feature: "Slim profile", luxense: "Minimal and discreet", standard: "Often bulky" },
    { feature: "Premium look", luxense: "Designed for modern interiors", standard: "Usually utilitarian" },
  ],
}

const DEFAULT_METRICS = {
  metricsEyebrow: "Customer confidence",
  metricsTitle: "Why 3,284+ Customers Chose MotionGlow",
  metricsDescription: "A cleaner, easier way to add smart lighting, trusted by thousands of homes.",
  items: [
    { value: "94%", title: "Would recommend MotionGlow to a friend", text: "A simple, elegant smart-lighting upgrade people feel good about sharing." },
    { value: "91%", title: "Say installation took less than 2 minutes", text: "Fast setup with no wiring, drilling, or complicated steps." },
    { value: "89%", title: "Purchased additional units after their first order", text: "A strong signal that one light turns into a whole-home solution." },
    { value: "4.9/5", title: "Average customer rating", text: "Trusted by thousands of homes looking for softer, smarter lighting." },
  ],
}

const DEFAULT_REVIEWS = {
  reviewsEyebrow: "Customer reviews",
  reviewsTitle: "Real homes. Real feedback.",
  reviewsDescription: "A closer look at how MotionGlow™ is being used in closets, hallways, stairs, and everyday spaces.",
  supportTitle: "Need a hand?",
  supportText: "Still have questions? Contact our support team and we'll help you choose the right setup.",
  items: [
    {
      name: "Sarah M.",
      location: "United States",
      badge: "Verified Buyer",
      title: "Looks much cleaner than expected",
      text:
        "I installed one under my kitchen cabinets and it looks much cleaner than expected. The motion sensor feels instant and the warm light is perfect at night.",
      meta: "Verified Buyer",
    },
    {
      name: "Daniel R.",
      location: "United States",
      badge: "Verified Buyer",
      title: "No wiring, no tools, exactly what I needed",
      text: "Bought two for my closet and hallway. No wiring, no tools, and the light turns on exactly when I need it.",
      meta: "Verified Buyer",
    },
    {
      name: "Melissa K.",
      location: "Canada",
      badge: "Verified Buyer",
      title: "Feels like a built-in light",
      text: "It actually feels like a built-in light. The black version looks premium and blends well with my shelves.",
      meta: "Verified Buyer",
    },
    {
      name: "James T.",
      location: "United Kingdom",
      badge: "Verified Buyer",
      title: "Simple and very useful",
      text: "Simple product, but very useful. I ended up ordering more for the stairs and pantry.",
      meta: "Verified Buyer",
    },
  ],
}

const DEFAULT_FAQ = {
  faqEyebrow: "FAQ",
  faqTitle: "Everything you need to know",
  faqDescription: "A few quick answers before you decide.",
  faqSupportTitle: "Need a hand?",
  faqSupportText: "Still have questions? Contact our support team and we'll help you choose the right setup.",
  items: [
    {
      q: "How does the motion sensor work?",
      a: "It detects nearby movement and turns the light on automatically, then fades off after the space is quiet again.",
    },
    {
      q: "How long does the battery last?",
      a: "Most homes get weeks of use per charge, depending on traffic and brightness settings.",
    },
    {
      q: "How do I install it?",
      a: "Use the included magnetic mount. Place the adhesive base, snap the light on, and remove it anytime for charging.",
    },
    {
      q: "Is the light warm or cool?",
      a: "It uses a warm ambient glow designed for bedrooms, closets, hallways, and kitchens.",
    },
    {
      q: "What's your guarantee?",
      a: "Every order is backed by a 30-day love-it-or-return-it guarantee and a 2-year warranty. If anything isn't right, our support team responds within hours.",
    },
  ],
}

const DEFAULT_GUARANTEE = {
  guaranteeEyebrow: "Secure checkout",
  guaranteeTitle: "Buy with confidence.",
  guaranteeDescription:
    "Every order is protected by a clean checkout experience, practical support, and a guarantee that keeps the purchase low-risk.",
  items: [
    { title: "Protected payment", text: "Encrypted checkout and trusted order processing." },
    { title: "Secure order flow", text: "A smooth purchase path from cart to confirmation." },
    { title: "Fast fulfillment", text: "Prepared for shipment with practical support." },
  ],
}

const DEFAULT_WHY = {
  whyTitle: "Why homeowners choose Luxense",
  items: [
    { title: "Thoughtful design", text: "Created to blend naturally into modern interiors." },
    { title: "Smart convenience", text: "Light appears exactly when you need it." },
    { title: "Premium experience", text: "Simple installation, refined aesthetics, everyday usefulness." },
    { title: "Trusted by thousands", text: "4.9/5 average rating from over 3,000 customers." },
  ],
}

const DEFAULT_FINAL_CTA = {
  finalCtaEyebrow: "Final step",
  finalCtaTitle: "Ready To Upgrade Your Home?",
  finalCtaText: "MotionGlow brings effortless lighting to the spaces you use every day.",
  finalCtaButton: "Get MotionGlow Today",
  trust: ["Secure checkout", "Free shipping", "30-day guarantee"],
}

const DEFAULT_FOOTER = {
  footerBrandTitle: "Luxense™",
  footerBrandText:
    "Premium lighting designed to feel calm, refined, and effortless in the modern home. MotionGlow™ helps transform dark spaces into beautifully illuminated areas through smart, automatic lighting.",
  footerNewsletterTitle: "Get 10% Off Your First Order",
  footerNewsletterText:
    "Join the Luxense mailing list and receive exclusive offers, product updates, and smart-home inspiration.",
  footerEmailPlaceholder: "Email address",
  footerEmailButton: "Subscribe",
  socialInstagramUrl: "#",
  socialTiktokUrl: "#",
  socialFacebookUrl: "#",
  socialPinterestUrl: "#",
  socialYoutubeUrl: "#",
}

function mergeObject(source, fallback) {
  return {
    ...fallback,
    ...(source || {}),
  }
}

function toImage(src, fallback) {
  return normalizeImageUrl(src) || fallback || null
}

export function getMotionGlowContent(shopData = {}) {
  const theme = mergeObject(shopData.theme, {})
  const announcement = mergeObject(shopData.announcement, DEFAULT_ANNOUNCEMENT)
  const hero = mergeObject(shopData.hero, DEFAULT_HERO)
  const purchase = mergeObject(shopData.purchase, DEFAULT_PURCHASE)
  const bundles = Array.isArray(shopData.bundles)
    ? shopData.bundles
    : DEFAULT_BUNDLES.map((bundle) => ({
        ...bundle,
        ...(shopData.bundles?.[`bundle_${bundle.quantity}`] || {}),
      }))
  const video = mergeObject(shopData.video, DEFAULT_VIDEO)
  const story = mergeObject(shopData.story, DEFAULT_STORY)
  const benefits = mergeObject(shopData.benefits, DEFAULT_BENEFITS)
  const useCases = mergeObject(shopData.useCases, DEFAULT_USE_CASES)
  const lightTones = mergeObject(shopData.lightTones, DEFAULT_LIGHT_TONES)
  const comparison = mergeObject(shopData.comparison, DEFAULT_COMPARISON)
  const metrics = mergeObject(shopData.metrics, DEFAULT_METRICS)
  const reviews = mergeObject(shopData.reviews, DEFAULT_REVIEWS)
  const faq = mergeObject(shopData.faq, DEFAULT_FAQ)
  const guarantee = mergeObject(shopData.guarantee, DEFAULT_GUARANTEE)
  const whyChoose = mergeObject(shopData.whyChoose, DEFAULT_WHY)
  const finalCta = mergeObject(shopData.finalCta, DEFAULT_FINAL_CTA)
  const footer = mergeObject(shopData.footer, DEFAULT_FOOTER)
  const media = mergeObject(shopData.media, {})

  return {
    shopName: shopData.shopName || PRODUCT_NAME,
    shopDomain: shopData.shopDomain || null,
    currency: shopData.currency || "USD",
    product: shopData.product || null,
    productUrl: shopData.productUrl || null,
    targetProductId: shopData.targetProductId || null,
    defaultVariantId: shopData.defaultVariantId || shopData.preferredVariantId || null,
    theme: {
      pageBackground: theme.pageBackground || theme.bgColor || "#F6F4EF",
      creamText: theme.creamText || theme.creamColor || "#FBFAF6",
      warmWhite: theme.warmWhite || theme.warmWhiteColor || "#FFFDF8",
      mainText: theme.mainText || theme.textColor || "#231913",
      mutedText: theme.mutedText || theme.mutedColor || "#74685D",
      accent: theme.accent || theme.accentColor || "#C89A59",
      borders: theme.borders || theme.borderColor || "#DED8CF",
      darkBackground: theme.darkBackground || "#111111",
    },
    announcement: {
      messages: normalizeList(announcement.messages || announcement.announcementMessages || announcement.announcement_text),
    },
    hero: {
      ...hero,
      heroLifestyleImage: toImage(media.heroLifestyleImage || media.heroImage, IMAGE_ASSETS.heroLifestyle.src),
      heroProductImage: toImage(media.heroProductImage || media.productImage, IMAGE_ASSETS.whiteProduct.src),
    },
    purchase,
    bundles,
    media,
    video: {
      ...video,
      videoPosterImage: toImage(media.videoPosterImage || media.finalCtaImage, IMAGE_ASSETS.finalLifestyle.src),
      videoUrl: video.videoUrl || null,
    },
    story: {
      ...story,
      storyImage: toImage(media.storyImage || media.heroLifestyleImage || media.heroImage, IMAGE_ASSETS.heroLifestyle.src),
    },
    benefits,
    useCases: {
      ...useCases,
      items: useCases.items || DEFAULT_USE_CASES.items,
    },
    lightTones: {
      ...lightTones,
      items: [
        {
          key: "warm",
          title: lightTones.warmToneTitle || "Warm Light 3000K",
          text: lightTones.warmToneText || "Soft / cozy",
          description: lightTones.warmToneDescription || "Best for bedrooms, closets, and calm evening routines.",
          image: toImage(media.warmToneImage, DEFAULT_LIGHT_TONES.items[0].image),
        },
        {
          key: "neutral",
          title: lightTones.neutralToneTitle || "Neutral Light 4000K",
          text: lightTones.neutralToneText || "Balanced / crisp",
          description: lightTones.neutralToneDescription || "Ideal for kitchens, hallways, and everyday visibility.",
          image: toImage(media.neutralToneImage, DEFAULT_LIGHT_TONES.items[1].image),
        },
        {
          key: "white",
          title: lightTones.whiteToneTitle || "White Light 6000K",
          text: lightTones.whiteToneText || "Bright / clear",
          description: lightTones.whiteToneDescription || "Better for stairs, entryways, and spaces that need more clarity.",
          image: toImage(media.whiteToneImage, DEFAULT_LIGHT_TONES.items[2].image),
        },
      ],
    },
    comparison,
    metrics: {
      ...metrics,
      items: metrics.items || DEFAULT_METRICS.items,
    },
    reviews: {
      ...reviews,
      items: (reviews.items || DEFAULT_REVIEWS.items).map((review, index) => ({
        ...review,
        image: toImage(
          [media.reviewImage1, media.reviewImage2, media.reviewImage3, media.reviewImage4][index],
          [IMAGE_ASSETS.whiteProduct.src, IMAGE_ASSETS.motionSensor.src, IMAGE_ASSETS.finalLifestyle.src, IMAGE_ASSETS.closetLifestyle.src][index],
        ),
      })),
    },
    faq: {
      ...faq,
      items: faq.items || DEFAULT_FAQ.items,
    },
    guarantee: {
      ...guarantee,
      items: guarantee.items || DEFAULT_GUARANTEE.items,
    },
    whyChoose: {
      ...whyChoose,
      items: whyChoose.items || DEFAULT_WHY.items,
    },
    finalCta: {
      ...finalCta,
      finalCtaImage: toImage(media.finalCtaImage, IMAGE_ASSETS.finalLifestyle.src),
      trust: normalizeList(finalCta.trust || finalCta.finalCtaTrust || DEFAULT_FINAL_CTA.trust),
    },
    footer,
  }
}
