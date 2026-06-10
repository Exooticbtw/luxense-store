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

export function normalizeMedia(media = {}) {
  const galleryImages = Array.isArray(media.galleryImages)
    ? media.galleryImages.map((image) => normalizeImageUrl(image)).filter(Boolean)
    : []

  return {
    heroImage: normalizeImageUrl(media.heroImage),
    productImage: normalizeImageUrl(media.productImage),
    bedroomImage: normalizeImageUrl(media.bedroomImage),
    closetImage: normalizeImageUrl(media.closetImage),
    kitchenImage: normalizeImageUrl(media.kitchenImage),
    hallwayImage: normalizeImageUrl(media.hallwayImage),
    staircaseImage: normalizeImageUrl(media.staircaseImage),
    wardrobeImage: normalizeImageUrl(media.wardrobeImage),
    finalCtaImage: normalizeImageUrl(media.finalCtaImage),
    reviewImage1: normalizeImageUrl(media.reviewImage1),
    reviewImage2: normalizeImageUrl(media.reviewImage2),
    reviewImage3: normalizeImageUrl(media.reviewImage3),
    reviewImage4: normalizeImageUrl(media.reviewImage4),
    galleryImages,
  }
}

export function normalizeTheme(theme = {}) {
  return {
    bgColor: theme.bgColor || null,
    creamColor: theme.creamColor || null,
    warmWhiteColor: theme.warmWhiteColor || null,
    textColor: theme.textColor || null,
    mutedColor: theme.mutedColor || null,
    accentColor: theme.accentColor || null,
    borderColor: theme.borderColor || null,
    announcementText: theme.announcementText || null,
    heroEyebrow: theme.heroEyebrow || null,
    heroTitle: theme.heroTitle || null,
    heroText: theme.heroText || null,
    heroPrimaryButton: theme.heroPrimaryButton || null,
    heroSecondaryButton: theme.heroSecondaryButton || null,
    featuresEyebrow: theme.featuresEyebrow || null,
    featuresTitle: theme.featuresTitle || null,
    featuresText: theme.featuresText || null,
    productEyebrow: theme.productEyebrow || null,
    productTitle: theme.productTitle || null,
    productDescription: theme.productDescription || null,
    productPrice: theme.productPrice || null,
    productCompareAt: theme.productCompareAt || null,
    productBadge: theme.productBadge || null,
    productButton: theme.productButton || null,
    detailPrice: theme.detailPrice || null,
    detailCompareAt: theme.detailCompareAt || null,
    detailBadge: theme.detailBadge || null,
    singlePrice: theme.singlePrice || null,
    singleCompareAt: theme.singleCompareAt || null,
    duoPrice: theme.duoPrice || null,
    duoCompareAt: theme.duoCompareAt || null,
    trioPrice: theme.trioPrice || null,
    trioCompareAt: theme.trioCompareAt || null,
    addToCartButton: theme.addToCartButton || null,
    buyNowButton: theme.buyNowButton || null,
    roomsTitle: theme.roomsTitle || null,
    plannerTitle: theme.plannerTitle || null,
    plannerText: theme.plannerText || null,
    faqEyebrow: theme.faqEyebrow || null,
    faqTitle: theme.faqTitle || null,
    faqQuestion1: theme.faqQuestion1 || null,
    faqAnswer1: theme.faqAnswer1 || null,
    faqQuestion2: theme.faqQuestion2 || null,
    faqAnswer2: theme.faqAnswer2 || null,
    faqQuestion3: theme.faqQuestion3 || null,
    faqAnswer3: theme.faqAnswer3 || null,
    faqQuestion4: theme.faqQuestion4 || null,
    faqAnswer4: theme.faqAnswer4 || null,
    faqQuestion5: theme.faqQuestion5 || null,
    faqAnswer5: theme.faqAnswer5 || null,
    finalCtaTitle: theme.finalCtaTitle || null,
    finalCtaText: theme.finalCtaText || null,
    finalCtaButton: theme.finalCtaButton || null,
    footerText: theme.footerText || null,
    footerEmailPlaceholder: theme.footerEmailPlaceholder || null,
    footerButton: theme.footerButton || null,
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
    targetProductId: meta.targetProductId || payload?.targetProductId || null,
    preferredVariantId: meta.preferredVariantId || payload?.preferredVariantId || null,
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
