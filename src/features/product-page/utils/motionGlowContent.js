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
  heroEyebrow: "Premium motion lighting for modern homes",
  heroTitle: "Light Every Dark Corner - Automatically.",
  heroDescription:
    "MotionGlow? turns on the moment you move, giving closets, kitchens, hallways, stairs, and cabinets a clean premium glow without wiring, switches, or harsh overhead lights.",
  heroPrimaryButton: "Get Yours Today",
  heroSecondaryButton: "See It In Action",
  heroRatingText: "4.9/5 Rating",
  heroCustomerText: "3,000+ Happy Customers",
  heroShippingText: "Free Shipping",
  heroGuaranteeText: "30-Day Guarantee",
}

const DEFAULT_PURCHASE = {
  purchaseEyebrow: "Limited launch offer",
  purchaseTitle: "Luxense MotionGlow™",
  purchaseDescription: "Automatic premium lighting for the dark spaces you use every day.",
  startingPriceLabel: "Starting price",
  startingPrice: "",
  bundleSavingsLabel: "Limited launch offer",
  addToCartButton: "Add to Cart",
  checkoutTrustText: "Limited launch offer | Ships fast | Secure checkout | 30-day money-back guarantee | No wiring required",
  includedTonesTitle: "Includes all 3 light tones: Warm, Neutral, and White.",
  includedTonesDescription:
    "No wiring required. The rechargeable design keeps installation simple, clean, and electrician-free.",
}

const DEFAULT_BUNDLES = [
  { quantity: 1, title: "Buy 1", subtitle: "Try MotionGlow", badge: "", note: "Best for one room", discount: 0 },
  {
    quantity: 2,
    title: "Buy 2",
    subtitle: "Most popular setup",
    badge: "BEST SELLER",
    note: "Best for daily spaces",
    discount: 0.15,
  },
  {
    quantity: 3,
    title: "Buy 3",
    subtitle: "Best for multiple rooms",
    badge: "BEST VALUE",
    note: "Best for larger spaces",
    discount: 0.25,
  },
]

const DEFAULT_VIDEO = {
  videoEyebrow: "Video demonstration",
  videoTitle: "See MotionGlow turn on automatically in a real room.",
  videoDescription:
    "A quick demo makes it easy to understand why the light feels useful in closets, kitchens, hallways, and stairs.",
  videoCardTitle: "MotionGlow live demo",
  videoCardText: "Automatic lighting that solves dark corners fast.",
  videoButtonText: "Get Yours Today",
}

const DEFAULT_STORY = {
  storyEyebrow: "Visual story",
  storyTitle: "Soft automatic lighting that keeps your home calm and clear.",
  problemTitle: "Dark spaces should not feel ignored.",
  problemDescription:
    "MotionGlow is designed for the moments when standard lighting feels too harsh, too late, or too far away.",
  solutionTitle: "Automatic light, designed to feel intentional.",
  solutionDescription:
    "A slim rechargeable light that adds comfort, polish, and convenience exactly where your home needs it.",
  storyButtonText: "Upgrade Your Home",
}

const DEFAULT_BENEFITS = {
  benefitsEyebrow: "Why it matters",
  benefitsTitle: "The little problems MotionGlow fixes every day.",
  benefitsDescription: "The right light appears before you need to search, fumble, or switch on something harsh.",
  items: [
    { title: "No more searching for switches", text: "Light appears before you need to find it in the dark." },
    { title: "Soft light appears first", text: "Automatic glow helps dark corners feel usable right away." },
    { title: "Rechargeable and wireless", text: "No wiring, no electrician, and no complicated install." },
    { title: "Slim profile blends in", text: "A clean look that fits modern homes without visual clutter." },
  ],
}

const DEFAULT_USE_CASES = {
  useCasesEyebrow: "Common dark spots",
  useCasesTitle: "Most homes have dark corners that stay ignored.",
  useCasesDescription:
    "Closets, cabinets, stairs, hallways, and kitchens feel more finished when MotionGlow turns on automatically in minutes.",
  items: [
    { key: "hallways", title: "Hallways", text: "No more fumbling for the switch at night.", image: IMAGE_ASSETS.hallwayLifestyle.src },
    { key: "stairs", title: "Stairs", text: "Light appears before the next step feels uncertain.", image: IMAGE_ASSETS.stairLifestyle.src },
    { key: "kitchens", title: "Kitchens", text: "A cleaner glow for cabinets, prep, and late-night snacks.", image: IMAGE_ASSETS.kitchenLifestyle.src },
    { key: "closets", title: "Closets", text: "Open the door and see everything immediately.", image: IMAGE_ASSETS.closetLifestyle.src },
    { key: "bedrooms", title: "Bedrooms", text: "Soft light for quiet routines without waking the room.", image: IMAGE_ASSETS.whiteProduct.src },
    { key: "bathrooms", title: "Bathrooms", text: "Gentle nighttime visibility when you need it.", image: IMAGE_ASSETS.motionSensor.src },
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
  metricsEyebrow: "Why bundles make sense",
  metricsTitle: "Start with one space or cover several at once.",
  metricsDescription: "A single light solves one problem. Bundles make it easy to finish the other dark corners in one order.",
  items: [
    { value: "94%", title: "Would recommend MotionGlow to a friend", text: "A simple, elegant upgrade people feel good about sharing." },
    { value: "91%", title: "Say installation took less than 2 minutes", text: "Fast setup with no wiring, drilling, or complicated steps." },
    { value: "89%", title: "Purchased additional units after their first order", text: "One light often turns into a whole-home lighting fix." },
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
    "Every order is protected by a clean checkout experience, practical support, and a simple guarantee that keeps the purchase low-risk.",
  items: [
    { title: "Secure checkout", text: "Encrypted payment and trusted order processing." },
    { title: "Free shipping over $35", text: "A smoother offer for multi-item orders." },
    { title: "30-day guarantee", text: "Try MotionGlow with less risk." },
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
  finalCtaTitle: "Your Home Already Has Dark Corners. Fix Them Today.",
  finalCtaText: "Add automatic, premium lighting to the spaces you use every day - without wiring, tools, or complicated installation.",
  finalCtaButton: "Get MotionGlow Today",
  trust: ["Secure Checkout", "Free Shipping Over $35", "30-Day Guarantee"],
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

function toImage(src, fallback) {
  return normalizeImageUrl(src) || fallback || null
}

function mergeObject(source, fallback) {
  const safeSource = source && typeof source === "object" && !Array.isArray(source) ? source : {}
  const safeFallback = fallback && typeof fallback === "object" && !Array.isArray(fallback) ? fallback : {}

  return {
    ...safeFallback,
    ...safeSource,
  }
}

export function getMotionGlowContent(shopData) {
  const source = shopData && typeof shopData === "object" ? shopData : {}
  const themeSource = source.theme && typeof source.theme === "object" ? source.theme : {}
  const announcementSource = source.announcement && typeof source.announcement === "object" ? source.announcement : {}
  const heroSource = source.hero && typeof source.hero === "object" ? source.hero : {}
  const purchaseSource = source.purchase && typeof source.purchase === "object" ? source.purchase : {}
  const bundlesSource = source.bundles && typeof source.bundles === "object" && !Array.isArray(source.bundles) ? source.bundles : null
  const videoSource = source.video && typeof source.video === "object" ? source.video : {}
  const storySource = source.story && typeof source.story === "object" ? source.story : {}
  const benefitsSource = source.benefits && typeof source.benefits === "object" ? source.benefits : {}
  const useCasesSource = source.useCases && typeof source.useCases === "object" ? source.useCases : {}
  const lightTonesSource = source.lightTones && typeof source.lightTones === "object" ? source.lightTones : {}
  const comparisonSource = source.comparison && typeof source.comparison === "object" ? source.comparison : {}
  const metricsSource = source.metrics && typeof source.metrics === "object" ? source.metrics : {}
  const reviewsSource = source.reviews && typeof source.reviews === "object" ? source.reviews : {}
  const faqSource = source.faq && typeof source.faq === "object" ? source.faq : {}
  const guaranteeSource = source.guarantee && typeof source.guarantee === "object" ? source.guarantee : {}
  const whyChooseSource = source.whyChoose && typeof source.whyChoose === "object" ? source.whyChoose : {}
  const finalCtaSource = source.finalCta && typeof source.finalCta === "object" ? source.finalCta : {}
  const footerSource = source.footer && typeof source.footer === "object" ? source.footer : {}
  const mediaSource = source.media && typeof source.media === "object" ? source.media : {}

  const theme = mergeObject(themeSource, {})
  const announcement = mergeObject(announcementSource, DEFAULT_ANNOUNCEMENT)
  const hero = mergeObject(heroSource, DEFAULT_HERO)
  const purchase = mergeObject(purchaseSource, DEFAULT_PURCHASE)
  const rawBundles = Array.isArray(source.bundles)
    ? source.bundles
    : DEFAULT_BUNDLES.map((bundle) => ({
        ...bundle,
        ...(bundlesSource?.[`bundle_${bundle.quantity}`] || {}),
      }))
  const bundles = [1, 2, 3].map((quantity) => {
    const fallback = DEFAULT_BUNDLES.find((bundle) => bundle.quantity === quantity) || { quantity }
    const sourceBundle =
      rawBundles.find((bundle) => Number(bundle?.quantity) === quantity) ||
      rawBundles[quantity - 1] ||
      bundlesSource?.[`bundle_${quantity}`] ||
      {}

    return {
      ...fallback,
      ...sourceBundle,
      quantity,
      label: sourceBundle.label || sourceBundle.title || fallback.label || `Buy ${quantity}`,
      title: sourceBundle.title || sourceBundle.label || fallback.title || `Buy ${quantity}`,
      subtitle: sourceBundle.subtitle || fallback.subtitle || "",
      badge: sourceBundle.badge || fallback.badge || "",
      note: sourceBundle.note || fallback.note || "",
      discount: sourceBundle.discount ?? fallback.discount ?? 0,
    }
  })
  const video = mergeObject(videoSource, DEFAULT_VIDEO)
  const story = mergeObject(storySource, DEFAULT_STORY)
  const benefits = mergeObject(benefitsSource, DEFAULT_BENEFITS)
  const useCases = mergeObject(useCasesSource, DEFAULT_USE_CASES)
  const lightTones = mergeObject(lightTonesSource, DEFAULT_LIGHT_TONES)
  const comparison = mergeObject(comparisonSource, DEFAULT_COMPARISON)
  const metrics = mergeObject(metricsSource, DEFAULT_METRICS)
  const reviews = mergeObject(reviewsSource, DEFAULT_REVIEWS)
  const faq = mergeObject(faqSource, DEFAULT_FAQ)
  const guarantee = mergeObject(guaranteeSource, DEFAULT_GUARANTEE)
  const whyChoose = mergeObject(whyChooseSource, DEFAULT_WHY)
  const finalCta = mergeObject(finalCtaSource, DEFAULT_FINAL_CTA)
  const footer = mergeObject(footerSource, DEFAULT_FOOTER)
  const media = mergeObject(mediaSource, {})

  const resolvedMedia = {
    ...media,
    heroLifestyleImage: toImage(media.heroLifestyleImage || media.heroImage, IMAGE_ASSETS.heroLifestyle.src),
    heroProductImage: toImage(media.heroProductImage || media.productImage, IMAGE_ASSETS.whiteProduct.src),
    storyImage: toImage(media.storyImage || media.heroLifestyleImage || media.heroImage, IMAGE_ASSETS.heroLifestyle.src),
    useCaseHallwayImage: toImage(media.useCaseHallwayImage || media.hallwayImage, IMAGE_ASSETS.hallwayLifestyle.src),
    useCaseStairsImage: toImage(media.useCaseStairsImage || media.stairsImage || media.staircaseImage, IMAGE_ASSETS.stairLifestyle.src),
    useCaseKitchenImage: toImage(media.useCaseKitchenImage || media.kitchenImage, IMAGE_ASSETS.kitchenLifestyle.src),
    useCaseClosetImage: toImage(media.useCaseClosetImage || media.closetImage, IMAGE_ASSETS.closetLifestyle.src),
    useCaseBedroomImage: toImage(media.useCaseBedroomImage || media.bedroomImage, IMAGE_ASSETS.whiteProduct.src),
    useCaseBathroomImage: toImage(media.useCaseBathroomImage || media.bathroomImage, IMAGE_ASSETS.motionSensor.src),
    hallwayImage: toImage(media.hallwayImage || media.useCaseHallwayImage, IMAGE_ASSETS.hallwayLifestyle.src),
    stairsImage: toImage(media.stairsImage || media.useCaseStairsImage, IMAGE_ASSETS.stairLifestyle.src),
    staircaseImage: toImage(media.staircaseImage || media.useCaseStairsImage || media.stairsImage, IMAGE_ASSETS.stairLifestyle.src),
    kitchenImage: toImage(media.kitchenImage || media.useCaseKitchenImage, IMAGE_ASSETS.kitchenLifestyle.src),
    closetImage: toImage(media.closetImage || media.useCaseClosetImage, IMAGE_ASSETS.closetLifestyle.src),
    bedroomImage: toImage(media.bedroomImage || media.useCaseBedroomImage, IMAGE_ASSETS.whiteProduct.src),
    bathroomImage: toImage(media.bathroomImage || media.useCaseBathroomImage, IMAGE_ASSETS.motionSensor.src),
    wardrobeImage: toImage(media.wardrobeImage || media.useCaseClosetImage || media.closetImage, IMAGE_ASSETS.closetLifestyle.src),
    warmToneImage: toImage(media.warmToneImage, DEFAULT_LIGHT_TONES.items[0].image),
    neutralToneImage: toImage(media.neutralToneImage, DEFAULT_LIGHT_TONES.items[1].image),
    whiteToneImage: toImage(media.whiteToneImage, DEFAULT_LIGHT_TONES.items[2].image),
    finalCtaImage: toImage(media.finalCtaImage, IMAGE_ASSETS.finalLifestyle.src),
    videoPosterImage: toImage(media.videoPosterImage || media.finalCtaImage, IMAGE_ASSETS.finalLifestyle.src),
    video: {
      poster: toImage(media.videoPosterImage || media.finalCtaImage, IMAGE_ASSETS.finalLifestyle.src),
    },
    useCaseImages: {
      hallway: toImage(media.useCaseHallwayImage || media.hallwayImage, IMAGE_ASSETS.hallwayLifestyle.src),
      stairs: toImage(media.useCaseStairsImage || media.stairsImage || media.staircaseImage, IMAGE_ASSETS.stairLifestyle.src),
      kitchen: toImage(media.useCaseKitchenImage || media.kitchenImage, IMAGE_ASSETS.kitchenLifestyle.src),
      closet: toImage(media.useCaseClosetImage || media.closetImage, IMAGE_ASSETS.closetLifestyle.src),
      bedroom: toImage(media.useCaseBedroomImage || media.bedroomImage, IMAGE_ASSETS.whiteProduct.src),
      bathroom: toImage(media.useCaseBathroomImage || media.bathroomImage, IMAGE_ASSETS.motionSensor.src),
    },
    roomImages: {
      hallway: toImage(media.hallwayImage || media.useCaseHallwayImage, IMAGE_ASSETS.hallwayLifestyle.src),
      stairs: toImage(media.stairsImage || media.useCaseStairsImage, IMAGE_ASSETS.stairLifestyle.src),
      staircase: toImage(media.staircaseImage || media.useCaseStairsImage || media.stairsImage, IMAGE_ASSETS.stairLifestyle.src),
      kitchen: toImage(media.kitchenImage || media.useCaseKitchenImage, IMAGE_ASSETS.kitchenLifestyle.src),
      closet: toImage(media.closetImage || media.useCaseClosetImage, IMAGE_ASSETS.closetLifestyle.src),
      bedroom: toImage(media.bedroomImage || media.useCaseBedroomImage, IMAGE_ASSETS.whiteProduct.src),
      wardrobe: toImage(media.wardrobeImage || media.useCaseClosetImage || media.closetImage, IMAGE_ASSETS.closetLifestyle.src),
      bathroom: toImage(media.bathroomImage || media.useCaseBathroomImage, IMAGE_ASSETS.motionSensor.src),
    },
    lightToneImages: {
      warm: toImage(media.warmToneImage, DEFAULT_LIGHT_TONES.items[0].image),
      neutral: toImage(media.neutralToneImage, DEFAULT_LIGHT_TONES.items[1].image),
      white: toImage(media.whiteToneImage, DEFAULT_LIGHT_TONES.items[2].image),
    },
    reviewImages: [
      toImage(media.reviewImage1, IMAGE_ASSETS.whiteProduct.src),
      toImage(media.reviewImage2, IMAGE_ASSETS.motionSensor.src),
      toImage(media.reviewImage3, IMAGE_ASSETS.finalLifestyle.src),
      toImage(media.reviewImage4, IMAGE_ASSETS.closetLifestyle.src),
    ],
  }

  return {
    shopName: source.shopName || PRODUCT_NAME,
    shopDomain: source.shopDomain || null,
    currency: source.currency || "USD",
    paymentIconsHtml: typeof source.paymentIconsHtml === "string" ? source.paymentIconsHtml : null,
    product: source.product || null,
    productUrl: source.productUrl || null,
    targetProductId: source.targetProductId || null,
    defaultVariantId: source.defaultVariantId || source.preferredVariantId || null,
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
      heroLifestyleImage: resolvedMedia.heroLifestyleImage,
      heroProductImage: resolvedMedia.heroProductImage,
    },
    purchase,
    bundles,
    media: resolvedMedia,
    video: {
      ...video,
      videoPosterImage: resolvedMedia.videoPosterImage,
      videoUrl: video.videoUrl || null,
    },
    story: {
      ...story,
      storyImage: resolvedMedia.storyImage,
    },
    benefits,
    useCases: {
      ...useCases,
      items: (useCases.items || DEFAULT_USE_CASES.items).map((item) => {
        const imageByKey = {
          hallways: resolvedMedia.useCaseHallwayImage,
          stairs: resolvedMedia.useCaseStairsImage,
          kitchens: resolvedMedia.useCaseKitchenImage,
          closets: resolvedMedia.useCaseClosetImage,
          bedrooms: resolvedMedia.useCaseBedroomImage,
          bathrooms: resolvedMedia.useCaseBathroomImage,
        }

        return {
          ...item,
          image: toImage(imageByKey[item.key], item.image),
        }
      }),
    },
    lightTones: {
      ...lightTones,
      items: [
        {
          key: "warm",
          title: lightTones.warmToneTitle || "Warm Light 3000K",
          text: lightTones.warmToneText || "Soft / cozy",
          description: lightTones.warmToneDescription || "Best for bedrooms, closets, and calm evening routines.",
          image: resolvedMedia.warmToneImage,
        },
        {
          key: "neutral",
          title: lightTones.neutralToneTitle || "Neutral Light 4000K",
          text: lightTones.neutralToneText || "Balanced / crisp",
          description: lightTones.neutralToneDescription || "Ideal for kitchens, hallways, and everyday visibility.",
          image: resolvedMedia.neutralToneImage,
        },
        {
          key: "white",
          title: lightTones.whiteToneTitle || "White Light 6000K",
          text: lightTones.whiteToneText || "Bright / clear",
          description: lightTones.whiteToneDescription || "Better for stairs, entryways, and spaces that need more clarity.",
          image: resolvedMedia.whiteToneImage,
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
        image: resolvedMedia.reviewImages[index] || review.image || null,
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
      finalCtaImage: resolvedMedia.finalCtaImage,
      trust: normalizeList(finalCta.trust || finalCta.finalCtaTrust || DEFAULT_FINAL_CTA.trust),
    },
    footer,
  }
}
