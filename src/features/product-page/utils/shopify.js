export function getNumericVariantId(variantId) {
  if (!variantId) return null
  return String(variantId).split("/").pop()
}

export function isLocalDevelopment() {
  if (typeof window === "undefined") return false

  const hostname = window.location.hostname
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1"
}

export function normalizeImageUrl(src) {
  if (!src) return null
  const imageUrl = typeof src === "string" ? src : src.src || src.url || null
  if (!imageUrl) return null
  return imageUrl.startsWith("//") ? `https:${imageUrl}` : imageUrl
}

export function normalizeImageRecord(src, meta = {}) {
  const imageUrl = normalizeImageUrl(src)
  if (!imageUrl) return null

  const source = src && typeof src === "object" ? src : {}
  return {
    src: imageUrl,
    alt: meta.alt ?? source.alt ?? source.image_alt_text ?? source.imageAltText ?? null,
    title: meta.title ?? source.title ?? null,
    label: meta.label ?? source.label ?? null,
  }
}

export function getImageSearchText(image) {
  if (!image) return ""
  if (typeof image === "string") return image.toLowerCase()

  return [image.src, image.alt, image.title, image.label].filter(Boolean).join(" ").toLowerCase()
}

function getSearchTerms(value) {
  if (!value) return []

  const normalized = String(value).toLowerCase().trim()
  if (!normalized) return []

  const terms = new Set([normalized])

  if (normalized === "white") {
    ;["blanco", "blanca", "ivory", "light"].forEach((term) => terms.add(term))
  }

  if (normalized === "black") {
    ;["negro", "negra", "charcoal", "dark"].forEach((term) => terms.add(term))
  }

  const compactSize = normalized.replace(/\s+/g, "")
  if (/^\d+\s*cm$/.test(normalized)) {
    terms.add(compactSize)
    terms.add(normalized.replace(/\s*cm$/, "cm"))
  }

  return [...terms]
}

export function findBestMatchingImageIndex(images = [], { color, size } = {}) {
  if (!Array.isArray(images) || images.length === 0) return -1

  const colorTerms = getSearchTerms(color)
  const sizeTerms = getSearchTerms(size)
  let bestIndex = -1
  let bestScore = 0

  images.forEach((image, index) => {
    const text = getImageSearchText(image)
    if (!text) return

    let score = 0
    const colorMatch = colorTerms.some((term) => term && text.includes(term))
    const sizeMatch = sizeTerms.some((term) => term && text.includes(term))

    if (colorMatch) score += 2
    if (sizeMatch) score += 3
    if (colorMatch && sizeMatch) score += 4

    if (score > bestScore) {
      bestScore = score
      bestIndex = index
    }
  })

  return bestIndex
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
    ? gallerySource.map((image) => normalizeImageRecord(image)).filter(Boolean)
    : []

  return {
    heroImage: normalizeImageRecord(media.heroImage),
    heroLifestyleImage: normalizeImageRecord(media.heroLifestyleImage),
    heroProductImage: normalizeImageRecord(media.heroProductImage),
    productImage: normalizeImageRecord(media.productImage),
    storyImage: normalizeImageRecord(media.storyImage),
    bedroomImage: normalizeImageRecord(media.bedroomImage),
    closetImage: normalizeImageRecord(media.closetImage),
    kitchenImage: normalizeImageRecord(media.kitchenImage),
    hallwayImage: normalizeImageRecord(media.hallwayImage),
    stairsImage: normalizeImageRecord(media.stairsImage),
    staircaseImage: normalizeImageRecord(media.staircaseImage),
    wardrobeImage: normalizeImageRecord(media.wardrobeImage),
    useCaseHallwayImage: normalizeImageRecord(media.useCaseHallwayImage),
    useCaseStairsImage: normalizeImageRecord(media.useCaseStairsImage),
    useCaseKitchenImage: normalizeImageRecord(media.useCaseKitchenImage),
    useCaseClosetImage: normalizeImageRecord(media.useCaseClosetImage),
    useCaseBedroomImage: normalizeImageRecord(media.useCaseBedroomImage),
    useCaseBathroomImage: normalizeImageRecord(media.useCaseBathroomImage),
    warmToneImage: normalizeImageRecord(media.warmToneImage),
    neutralToneImage: normalizeImageRecord(media.neutralToneImage),
    whiteToneImage: normalizeImageRecord(media.whiteToneImage),
    finalCtaImage: normalizeImageRecord(media.finalCtaImage),
    videoPosterImage: normalizeImageRecord(media.videoPosterImage),
    reviewImage1: normalizeImageRecord(media.reviewImage1),
    reviewImage2: normalizeImageRecord(media.reviewImage2),
    reviewImage3: normalizeImageRecord(media.reviewImage3),
    reviewImage4: normalizeImageRecord(media.reviewImage4),
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
    ? product.images.map((image) => normalizeImageRecord(image, { alt: image?.alt || product.title, title: image?.alt || product.title, label: product.title })).filter(Boolean)
    : []

  const featuredImage = normalizeImageRecord(product.featured_image || product.featuredImage, {
    alt: product.title,
    title: product.title,
    label: product.title,
  })

  const variants = Array.isArray(product.variants)
    ? product.variants.map((variant) => ({
        id: variant.admin_graphql_api_id || variant.id,
        title: variant.title,
        price: variant.price,
        compareAtPrice: variant.compare_at_price ?? variant.compareAtPrice ?? null,
        available: variant.available ?? true,
        image: normalizeImageRecord(variant.featured_image || variant.featuredImage || variant.image, {
          alt: variant.title,
          title: variant.title,
          label: variant.title,
        }),
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
      images: featuredImage && !images.some((image) => image.src === featuredImage.src) ? [featuredImage, ...images] : images,
      variants,
    },
  }
}
