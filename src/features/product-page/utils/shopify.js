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
    targetProductId: meta.targetProductId || payload?.targetProductId || null,
    preferredVariantId: meta.preferredVariantId || payload?.preferredVariantId || null,
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
