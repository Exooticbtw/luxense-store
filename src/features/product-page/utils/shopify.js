export function getNumericVariantId(variantId) {
  if (!variantId) return null
  return String(variantId).split("/").pop()
}

function normalizeText(value) {
  if (value == null) return ""
  return String(value).toLowerCase().replace(/\s+/g, " ").trim()
}

function normalizeCompactText(value) {
  return normalizeText(value).replace(/\s+/g, "").replace(/[^a-z0-9]/g, "")
}

function normalizeVariantIds(value) {
  if (!value) return []
  const entries = Array.isArray(value) ? value : [value]
  return entries
    .map((entry) => getNumericVariantId(entry))
    .filter(Boolean)
    .map(String)
}

export function isLocalDevelopment() {
  if (typeof window === "undefined") return false

  const hostname = window.location.hostname
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1"
}

export function normalizeImageUrl(src) {
  if (!src) return null
  const imageUrl =
    typeof src === "string"
      ? src
      : src.src ||
        src.url ||
        src.media?.preview_image?.src ||
        src.media?.preview_image?.url ||
        src.media?.image?.src ||
        src.media?.image?.url ||
        src.preview_image?.src ||
        src.preview_image?.url ||
        src.featured_image?.src ||
        src.featured_image?.url ||
        src.image?.src ||
        src.image?.url ||
        null
  if (!imageUrl) return null
  const safeUrl = String(imageUrl).trim()
  if (!safeUrl || /^javascript:/i.test(safeUrl)) return null
  return safeUrl.startsWith("//") ? `https:${safeUrl}` : safeUrl
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
    id: meta.id ?? source.id ?? source.media_id ?? source.mediaId ?? null,
    width: meta.width ?? source.width ?? null,
    height: meta.height ?? source.height ?? null,
    variantIds: normalizeVariantIds(meta.variantIds ?? source.variantIds ?? source.variant_ids),
  }
}

export function getImageSearchText(image) {
  if (!image) return ""
  if (typeof image === "string") return normalizeText(image)

  const src = String(image.src || "").trim()
  const filename = src
    ? src
        .split("?")[0]
        .split("#")[0]
        .split("/")
        .filter(Boolean)
        .pop() || ""
    : ""

  return [
    image.src,
    image.alt,
    image.title,
    image.label,
    filename,
    image.id,
    image.width,
    image.height,
    Array.isArray(image.variantIds) ? image.variantIds.join(" ") : null,
    image.variantId,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
}

function getSearchTerms(value) {
  if (!value) return []

  const normalized = normalizeText(value)
  if (!normalized) return []

  const terms = new Set([normalized])
  terms.add(normalizeCompactText(normalized))

  if (normalized === "white" || normalized.includes("white") || normalized.includes("blanco")) {
    ;["white", "blanco"].forEach((term) => terms.add(term))
  }

  if (normalized === "black" || normalized.includes("black") || normalized.includes("negro")) {
    ;["black", "negro"].forEach((term) => terms.add(term))
  }

  if (/^\d+\s*cm$/.test(normalized) || /^\d+cm$/.test(normalized)) {
    const sizeNumber = normalized.replace(/\s*cm$/, "").replace(/cm$/, "").trim()
    if (sizeNumber) {
      terms.add(`${sizeNumber}cm`)
      terms.add(`${sizeNumber} cm`)
    }
  }

  return [...terms]
}

function getSelectionInfo(selection = {}) {
  const resolvedColor = selection.color ?? selection.selectedColor ?? null
  const resolvedSize = selection.size ?? selection.selectedSize ?? null
  return {
    colorTerms: getSearchTerms(resolvedColor),
    sizeTerms: getSearchTerms(resolvedSize),
    color: normalizeText(resolvedColor),
    size: normalizeText(resolvedSize),
  }
}

function isValidImageRecord(image) {
  return Boolean(image?.src || image?.url)
}

function hasVariantAssociation(image, selectedVariant) {
  if (!image || !selectedVariant) return false

  const selectedVariantId = getNumericVariantId(selectedVariant.id)
  if (selectedVariantId && Array.isArray(image.variantIds) && image.variantIds.some((variantId) => String(variantId) === selectedVariantId)) {
    return true
  }

  const selectedVariantImageSrc = normalizeImageRecord(selectedVariant.image)?.src || selectedVariant.image?.src || selectedVariant.image || null
  const imageSrc = normalizeImageRecord(image)?.src || image?.src || null
  if (selectedVariantImageSrc && imageSrc && selectedVariantImageSrc === imageSrc) {
    return true
  }

  const selectedVariantImageId = selectedVariant.image?.id || selectedVariant.image?.media_id || selectedVariant.image?.mediaId || null
  if (selectedVariantImageId && image?.id && String(image.id) === String(selectedVariantImageId)) {
    return true
  }

  return false
}

function scoreImageCandidate(image, index, context = {}) {
  if (!isValidImageRecord(image)) {
    return { index, rank: Number.POSITIVE_INFINITY, score: 0, image: null }
  }

  const { currentImageIndex = null, selectedVariant = null } = context
  const { colorTerms, sizeTerms } = getSelectionInfo(context)
  const text = getImageSearchText(image)
  const imageSrc = normalizeImageRecord(image)?.src || image?.src || null
  const colorMatch = colorTerms.some((term) => term && text.includes(term))
  const sizeMatch = sizeTerms.some((term) => term && text.includes(term))
  const variantMatch = hasVariantAssociation(image, selectedVariant)
  const currentMatch = currentImageIndex != null && Number(currentImageIndex) === Number(index)

  let rank = 6
  if (colorMatch && sizeMatch) rank = 1
  else if (variantMatch) rank = 2
  else if (colorMatch) rank = 3
  else if (sizeMatch) rank = 4
  else if (currentMatch) rank = 5

  const score =
    (colorMatch ? 100 : 0) +
    (sizeMatch ? 80 : 0) +
    (variantMatch ? 60 : 0) +
    (currentMatch ? 10 : 0) +
    (imageSrc ? 1 : 0)

  return { index, rank, score, image }
}

function compareImageCandidates(left, right) {
  if (left.rank !== right.rank) return left.rank - right.rank
  if (left.score !== right.score) return right.score - left.score
  return left.index - right.index
}

export function findBestMatchingImageIndex(images = [], { color, size } = {}) {
  const result = getBestProductImageForSelection(images, { color, size })
  return result?.index ?? -1
}

export function findBestMatchingVariantIndex(variants = [], { color, size } = {}) {
  if (!Array.isArray(variants) || variants.length === 0) return -1

  const { colorTerms, sizeTerms } = getSelectionInfo({ color, size })
  let bestIndex = -1
  let bestRank = Number.POSITIVE_INFINITY
  let bestScore = -1

  variants.forEach((variant, index) => {
    if (!variant) return

    const text = [
      variant.title,
      ...(Array.isArray(variant.options) ? variant.options : []),
      variant.option1,
      variant.option2,
      variant.option3,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()

    const colorMatch = colorTerms.some((term) => term && text.includes(term))
    const sizeMatch = sizeTerms.some((term) => term && text.includes(term))
    if (!colorMatch && !sizeMatch) return

    let rank = 3
    if (colorMatch && sizeMatch) rank = 1
    else if (colorMatch) rank = 2
    else if (sizeMatch) rank = 2

    const score = (colorMatch ? 10 : 0) + (sizeMatch ? 10 : 0)

    if (rank < bestRank || (rank === bestRank && score > bestScore)) {
      bestIndex = index
      bestRank = rank
      bestScore = score
    }
  })

  return bestIndex
}

export function getBestProductImageForSelection(images = [], selection = {}) {
  if (!Array.isArray(images) || images.length === 0) return { index: -1, image: null, rank: Number.POSITIVE_INFINITY, score: 0 }

  const currentImageIndex = selection.currentImageIndex ?? (typeof selection.currentImage === "number" ? selection.currentImage : null)
  const currentImageSrc =
    typeof selection.currentImage === "string"
      ? selection.currentImage
      : selection.currentImage?.src || selection.currentImage?.url || null
  const { selectedVariant = null } = selection
  const candidates = images
    .map((image, index) => scoreImageCandidate(image, index, { ...selection, currentImageIndex, selectedVariant }))
    .filter((candidate) => candidate.image)

  if (candidates.length === 0) return { index: -1, image: null, rank: Number.POSITIVE_INFINITY, score: 0 }

  const bestCandidate = candidates.slice().sort(compareImageCandidates)[0]
  const currentCandidate = currentImageIndex != null
    ? candidates.find((candidate) => Number(candidate.index) === Number(currentImageIndex) && candidate.image)
    : currentImageSrc
      ? candidates.find((candidate) => candidate.image?.src === currentImageSrc)
      : null

  if (currentCandidate && currentCandidate.rank <= bestCandidate.rank) {
    return currentCandidate
  }

  if (bestCandidate.rank >= 6 && currentCandidate) {
    return currentCandidate
  }

  return bestCandidate
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
    ? product.images
        .map((image) =>
          normalizeImageRecord(image, {
            alt: image?.alt || product.title,
            title: image?.alt || product.title,
            label: product.title,
            id: image?.id,
            width: image?.width,
            height: image?.height,
            variantIds: image?.variant_ids || image?.variantIds,
          }),
        )
        .filter(Boolean)
    : []

  const featuredImage = normalizeImageRecord(product.featured_image || product.featuredImage, {
    alt: product.title,
    title: product.title,
    label: product.title,
    id: product.featured_image?.id || product.featuredImage?.id,
    width: product.featured_image?.width || product.featuredImage?.width,
    height: product.featured_image?.height || product.featuredImage?.height,
    variantIds: product.featured_image?.variant_ids || product.featuredImage?.variantIds,
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
          id: variant.featured_image?.id || variant.featuredImage?.id || variant.image?.id,
          width: variant.featured_image?.width || variant.featuredImage?.width || variant.image?.width,
          height: variant.featured_image?.height || variant.featuredImage?.height || variant.image?.height,
          variantIds: variant.featured_image?.variant_ids || variant.featuredImage?.variantIds || [variant.id],
        }),
        options: variant.options || [variant.option1, variant.option2, variant.option3].filter(Boolean),
      }))
    : []

  return {
    shopName: meta.shopName || payload?.shop?.name || "LUXENSE",
    shopDomain: meta.shopDomain || payload?.shop?.domain || null,
    currency: meta.currency || payload?.currency || "USD",
    paymentIconsHtml: meta.paymentIconsHtml || payload?.paymentIconsHtml || null,
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
