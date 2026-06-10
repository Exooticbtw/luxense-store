export function getNumericVariantId(variantId) {
  if (!variantId) return null
  return String(variantId).split("/").pop()
}

export function normalizeImageUrl(src) {
  if (!src) return null
  const imageUrl = typeof src === "string" ? src : src.src || src.url || null
  if (!imageUrl) return null
  return imageUrl.startsWith("//") ? `https:${imageUrl}` : imageUrl
}

export function normalizeList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => (typeof item === "string" ? item.trim() : item)).filter(Boolean)
  }

  if (typeof value === "string") {
    return value
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean)
  }

  return []
}

export function normalizeSectionObject(value = {}) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {}

  return Object.fromEntries(
    Object.entries(value).map(([key, entry]) => {
      if (Array.isArray(entry)) {
        return [key, entry.map((item) => (typeof item === "string" ? item.trim() : item)).filter(Boolean)]
      }

      if (entry && typeof entry === "object") {
        return [key, normalizeSectionObject(entry)]
      }

      return [key, entry ?? null]
    }),
  )
}

export function normalizeMedia(media = {}) {
  const gallerySource = media.galleryImages || media.productGalleryImages || []
  const galleryImages = Array.isArray(gallerySource)
    ? gallerySource.map((image) => normalizeImageUrl(image)).filter(Boolean)
    : []

  return {
    heroImage: normalizeImageUrl(media.heroImage),
    heroLifestyleImage: normalizeImageUrl(media.heroLifestyleImage),
    heroProductImage: normalizeImageUrl(media.heroProductImage),
    productImage: normalizeImageUrl(media.productImage),
    storyImage: normalizeImageUrl(media.storyImage),
    bedroomImage: normalizeImageUrl(media.bedroomImage),
    closetImage: normalizeImageUrl(media.closetImage),
    kitchenImage: normalizeImageUrl(media.kitchenImage),
    hallwayImage: normalizeImageUrl(media.hallwayImage),
    stairsImage: normalizeImageUrl(media.stairsImage),
    staircaseImage: normalizeImageUrl(media.staircaseImage),
    wardrobeImage: normalizeImageUrl(media.wardrobeImage),
    useCaseHallwayImage: normalizeImageUrl(media.useCaseHallwayImage),
    useCaseStairsImage: normalizeImageUrl(media.useCaseStairsImage),
    useCaseKitchenImage: normalizeImageUrl(media.useCaseKitchenImage),
    useCaseClosetImage: normalizeImageUrl(media.useCaseClosetImage),
    useCaseBedroomImage: normalizeImageUrl(media.useCaseBedroomImage),
    useCaseBathroomImage: normalizeImageUrl(media.useCaseBathroomImage),
    warmToneImage: normalizeImageUrl(media.warmToneImage),
    neutralToneImage: normalizeImageUrl(media.neutralToneImage),
    whiteToneImage: normalizeImageUrl(media.whiteToneImage),
    finalCtaImage: normalizeImageUrl(media.finalCtaImage),
    videoPosterImage: normalizeImageUrl(media.videoPosterImage),
    reviewImage1: normalizeImageUrl(media.reviewImage1),
    reviewImage2: normalizeImageUrl(media.reviewImage2),
    reviewImage3: normalizeImageUrl(media.reviewImage3),
    reviewImage4: normalizeImageUrl(media.reviewImage4),
    galleryImages,
  }
}

export function normalizeTheme(theme = {}) {
  return {
    pageBackground: theme.pageBackground || theme.bgColor || null,
    creamText: theme.creamText || theme.creamColor || null,
    warmWhite: theme.warmWhite || theme.warmWhiteColor || null,
    mainText: theme.mainText || theme.textColor || null,
    mutedText: theme.mutedText || theme.mutedColor || null,
    accent: theme.accent || theme.accentColor || null,
    borders: theme.borders || theme.borderColor || null,
    darkBackground: theme.darkBackground || null,
  }
}

export function buildCartUrl(shopDomain, variantId, quantity = 1) {
  const numericVariantId = getNumericVariantId(variantId)
  if (!shopDomain || !numericVariantId) return null
  return `https://${shopDomain}/cart/${numericVariantId}:${quantity}`
}

export function parsePrice(value, fallback = 0) {
  const price = Number.parseFloat(value)
  return Number.isFinite(price) ? price : fallback
}

export function stripHtml(html = "") {
  if (!html) return ""

  if (typeof DOMParser !== "undefined") {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent?.trim() || ""
  }

  return html.replace(/<[^>]*>/g, "").trim()
}

export function normalizeShopifyProductResponse(payload, meta = {}) {
  const product = payload?.products?.[0] || payload?.product || null
  if (!product) return null

  const images = Array.isArray(product.images)
    ? product.images.map((image) => normalizeImageUrl(image)).filter(Boolean)
    : []

  const featuredImage = normalizeImageUrl(product.featured_image || product.featuredImage)

  const variants = Array.isArray(product.variants)
    ? product.variants.map((variant) => ({
        id: variant.admin_graphql_api_id || variant.id,
        title: variant.title,
        price: variant.price,
        available: variant.available ?? true,
        image: normalizeImageUrl(variant.featured_image || variant.featuredImage || variant.image),
        options: variant.options || [variant.option1, variant.option2, variant.option3].filter(Boolean),
      }))
    : []

  return {
    shopName: meta.shopName || payload?.shop?.name || "LUXENSE",
    shopDomain: meta.shopDomain || payload?.shop?.domain || null,
    currency: meta.currency || payload?.currency || "USD",
    media: normalizeMedia(meta.media || payload?.media || {}),
    theme: normalizeTheme(meta.theme || payload?.theme || {}),
    announcement: normalizeSectionObject(meta.announcement || payload?.announcement || {}),
    hero: normalizeSectionObject(meta.hero || payload?.hero || {}),
    purchase: normalizeSectionObject(meta.purchase || payload?.purchase || {}),
    bundles: normalizeSectionObject(meta.bundles || payload?.bundles || {}),
    video: normalizeSectionObject(meta.video || payload?.video || {}),
    story: normalizeSectionObject(meta.story || payload?.story || {}),
    benefits: normalizeSectionObject(meta.benefits || payload?.benefits || {}),
    useCases: normalizeSectionObject(meta.useCases || payload?.useCases || {}),
    lightTones: normalizeSectionObject(meta.lightTones || payload?.lightTones || {}),
    comparison: normalizeSectionObject(meta.comparison || payload?.comparison || {}),
    metrics: normalizeSectionObject(meta.metrics || payload?.metrics || {}),
    reviews: normalizeSectionObject(meta.reviews || payload?.reviews || {}),
    faq: normalizeSectionObject(meta.faq || payload?.faq || {}),
    guarantee: normalizeSectionObject(meta.guarantee || payload?.guarantee || {}),
    whyChoose: normalizeSectionObject(meta.whyChoose || payload?.whyChoose || {}),
    finalCta: normalizeSectionObject(meta.finalCta || payload?.finalCta || {}),
    footer: normalizeSectionObject(meta.footer || payload?.footer || {}),
    targetProductId: meta.targetProductId || payload?.targetProductId || null,
    defaultVariantId: meta.defaultVariantId || payload?.defaultVariantId || payload?.preferredVariantId || null,
    preferredVariantId: meta.preferredVariantId || payload?.preferredVariantId || meta.defaultVariantId || payload?.defaultVariantId || null,
    productHandle: meta.productHandle || payload?.productHandle || product.handle || null,
    productUrl: meta.productUrl || payload?.productUrl || (product.handle ? `/products/${product.handle}` : null),
    product: {
      id: product.admin_graphql_api_id || product.id,
      handle: product.handle,
      title: product.title,
      description: stripHtml(product.body_html || product.description || ""),
      featuredImage,
      images: featuredImage && !images.includes(featuredImage) ? [featuredImage, ...images] : images,
      variants,
    },
  }
}
