import { useMemo, useState } from "react"
import { COLORS, FALLBACK_VARIANTS, GALLERY_IMAGES } from "../data/productPageData.js"
import { formatFixedCurrency } from "../helpers/formatters.js"
import { buildCartUrl, getNumericVariantId, parsePrice } from "../utils/shopify.js"

const EMPTY_ARRAY = []

export function useProductPurchaseState(shopData) {
  const [activeImageOverride, setActiveImageOverride] = useState(null)
  const [variantIdx, setVariantIdxState] = useState(null)
  const [colorIdx, setColorIdx] = useState(0)
  const [qty, setQty] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)
  const [stock] = useState(37)
  const [lightbox, setLightbox] = useState(false)

  const rawVariants = shopData?.product?.variants || EMPTY_ARRAY
  const variants = rawVariants.length > 0 ? rawVariants : FALLBACK_VARIANTS
  const rawImages = shopData?.product?.images || EMPTY_ARRAY
  const images = useMemo(() => {
    const variantImages = rawVariants.map((variant) => variant.image).filter(Boolean)
    const uniqueImages = [...rawImages, ...variantImages].filter(
      (image, index, collection) => image && collection.indexOf(image) === index,
    )

    return uniqueImages.length > 0 ? uniqueImages : GALLERY_IMAGES.map((image) => image)
  }, [rawImages, rawVariants])

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
  const variantImageIndex = v?.image ? images.indexOf(v.image) : -1
  const activeImage = activeImageOverride ?? (variantImageIndex >= 0 ? variantImageIndex : 0)
  const price = parsePrice(v?.price, 49)
  const total = formatFixedCurrency(price * qty)
  const origPrice = formatFixedCurrency(price * 1.65)
  const installment = formatFixedCurrency(price / 4)

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
    qty,
    setActiveImage,
    setColorIdx,
    setLightbox,
    setQty,
    setVariantIdx,
    setWishlisted,
    stock,
    title,
    total,
    v,
    variantIdx: safeVariantIdx,
    variants,
    wishlisted,
    colors: COLORS,
  }
}
