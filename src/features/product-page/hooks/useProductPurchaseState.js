import { useState } from "react"
import { COLORS, FALLBACK_VARIANTS, GALLERY_PLACEHOLDERS } from "../data/productPageData.js"
import { formatFixedCurrency } from "../helpers/formatters.js"
import { buildCartUrl, parsePrice } from "../utils/shopify.js"

export function useProductPurchaseState(shopData) {
  const [activeImage, setActiveImage] = useState(0)
  const [variantIdx, setVariantIdx] = useState(0)
  const [colorIdx, setColorIdx] = useState(0)
  const [qty, setQty] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)
  const [stock] = useState(37)
  const [lightbox, setLightbox] = useState(false)

  const rawVariants = shopData?.product?.variants || []
  const variants = rawVariants.length > 0 ? rawVariants : FALLBACK_VARIANTS
  const rawImages = shopData?.product?.images || []
  const images = rawImages.length > 0 ? rawImages : GALLERY_PLACEHOLDERS.map((image) => image)

  const safeVariantIdx = variantIdx < variants.length ? variantIdx : 0
  const v = variants[safeVariantIdx] || variants[0]
  const price = parsePrice(v?.price, 49)
  const total = formatFixedCurrency(price * qty)
  const origPrice = formatFixedCurrency(price * 1.65)
  const installment = formatFixedCurrency(price / 4)

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
