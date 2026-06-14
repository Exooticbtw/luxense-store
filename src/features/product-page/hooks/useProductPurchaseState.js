import { useMemo, useState } from "react"
import { COLORS, FALLBACK_VARIANTS, GALLERY_IMAGES, UNIT_PRICE, getPriceSummary } from "../data/productPageData.js"
import { formatFixedCurrency } from "../helpers/formatters.js"
import { buildCartUrl, getNumericVariantId, isLocalDevelopment, normalizeImageRecord, parsePrice } from "../utils/shopify.js"

const EMPTY_ARRAY = []

export function useProductPurchaseState(shopData) {
  const [activeImageOverride, setActiveImageOverride] = useState(null)
  const [variantIdx, setVariantIdxState] = useState(null)
  const [colorIdx, setColorIdx] = useState(0)
  const [qty, setQty] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)
  const [stock] = useState(37)
  const [lightbox, setLightbox] = useState(false)

  const useFallbacks = isLocalDevelopment()
  const rawVariants = Array.isArray(shopData?.product?.variants) && shopData.product.variants.length > 0
    ? shopData.product.variants
    : useFallbacks
      ? FALLBACK_VARIANTS
      : EMPTY_ARRAY
  const variants = rawVariants
  const rawImages = [
    ...(Array.isArray(shopData?.product?.images) ? shopData.product.images : []),
    ...(Array.isArray(shopData?.media?.galleryImages) ? shopData.media.galleryImages : []),
    ...rawVariants.map((variant) => variant?.image).filter(Boolean),
  ]
    .map((image) => normalizeImageRecord(image))
    .filter(Boolean)

  const images = (() => {
    const uniqueImages = []
    const seenSources = new Set()

    rawImages.forEach((image) => {
      const src = image?.src
      if (!src || seenSources.has(src)) return
      seenSources.add(src)
      uniqueImages.push(image)
    })

    if (uniqueImages.length > 0) return uniqueImages
    return useFallbacks ? GALLERY_IMAGES.map((image) => normalizeImageRecord(image)).filter(Boolean) : EMPTY_ARRAY
  })()

  const preferredVariantIndex = useMemo(() => {
    const preferredVariantId = getNumericVariantId(shopData?.preferredVariantId)
    if (!preferredVariantId || rawVariants.length === 0) return null

    const preferredIndex = rawVariants.findIndex(
      (variant) => getNumericVariantId(variant.id) === preferredVariantId,
    )

    return preferredIndex >= 0 ? preferredIndex : null
  }, [rawVariants, shopData?.preferredVariantId])

  const selectedVariantIdx = variantIdx ?? preferredVariantIndex ?? 0
  const safeVariantIdx = selectedVariantIdx < variants.length ? selectedVariantIdx : 0
  const v = variants[safeVariantIdx] || variants[0]
  const variantImageSrc = normalizeImageRecord(v?.image)?.src || v?.image?.src || v?.image || null
  const variantImageIndex = variantImageSrc ? images.findIndex((image) => image?.src === variantImageSrc) : -1
  const activeImage = activeImageOverride ?? (variantImageIndex >= 0 ? variantImageIndex : 0)
  const price = parsePrice(v?.price, useFallbacks ? UNIT_PRICE : 0)
  const compareAtPrice = parsePrice(v?.compareAtPrice, 0)
  const total = formatFixedCurrency(price * qty)
  const origPrice = compareAtPrice > price ? formatFixedCurrency(compareAtPrice) : null
  const installment = formatFixedCurrency(price / 4)
  const bundleSummary = getPriceSummary(qty, price)

  const setActiveImage = (nextImage) => {
    setActiveImageOverride((currentImage) =>
      typeof nextImage === "function" ? nextImage(currentImage ?? activeImage) : nextImage,
    )
  }

  const setVariantIdx = (nextVariantIdx) => {
    setVariantIdxState(nextVariantIdx)
    setActiveImageOverride(null)
  }

  const buildCheckoutUrl = (quantity = qty) => buildCartUrl(shopData?.shopDomain, v?.id, quantity) || "#buy"

  const title = shopData?.product?.title || "Light Exactly Where You Need It."
  const desc = shopData?.product?.description || "Elegant wireless lighting designed for modern living \u2014 motion activated, USB\u2011C rechargeable, ultra\u2011slim and effortlessly beautiful."

  return {
    activeImage,
    buildCheckoutUrl,
    colorIdx,
    desc,
    images,
    installment,
    lightbox,
    origPrice,
    price,
    selectedVariantPrice: price,
    priceFormatted: formatFixedCurrency(price),
    compareAtPrice: compareAtPrice > price ? compareAtPrice : null,
    compareAtFormatted: compareAtPrice > price ? formatFixedCurrency(compareAtPrice) : null,
    qty,
    bundleSummary,
    setActiveImage,
    setColorIdx,
    setLightbox,
    setQty,
    setVariantIdx,
    setWishlisted,
    stock,
    title,
    total,
    totalFormatted: formatFixedCurrency(price * qty),
    selectedVariant: v,
    v,
    variantIdx: safeVariantIdx,
    variants,
    wishlisted,
    colors: COLORS,
  }
}
