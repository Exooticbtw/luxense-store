import { useEffect, useState } from "react"

import LoadingOverlay from "./components/feedback/LoadingOverlay.jsx"
import CartDrawer from "./components/feedback/CartDrawer.jsx"
import StickyMobileAddToCart from "./components/feedback/StickyMobileAddToCart.jsx"
import AnnouncementBar from "./components/layout/AnnouncementBar.jsx"
import Footer from "./components/layout/Footer.jsx"
import Navbar from "./components/layout/Navbar.jsx"
import ProductSection from "./components/product/ProductSection.jsx"
import VideoDemonstration from "./components/sections/VideoDemonstration.jsx"
import FAQ from "./components/sections/FAQ.jsx"
import FinalCTA from "./components/sections/FinalCTA.jsx"
import GuaranteeSection from "./components/sections/GuaranteeSection.jsx"
import LightTones from "./components/sections/LightTones.jsx"
import BundleOffers from "./components/sections/BundleOffers.jsx"
import CustomerReviews from "./components/sections/CustomerReviews.jsx"
import SocialProof from "./components/sections/SocialProof.jsx"
import ComparisonTable from "./components/sections/ComparisonTable.jsx"
import UseCases from "./components/sections/UseCases.jsx"
import StorySection from "./components/sections/StorySection.jsx"
import WhyHomeownersChooseLuxense from "./components/sections/WhyHomeownersChooseLuxense.jsx"
import { useScrollFlags } from "./hooks/useScrollFlags.js"
import { useShopifyProductData } from "./hooks/useShopifyProductData.js"
import { useProductPurchaseState } from "./hooks/useProductPurchaseState.js"
import { COLORS } from "./data/productPageData.js"
import { PRODUCT_PAGE_STYLES } from "./styles/productPageStyles.js"
import { findBestMatchingVariantIndex, getBestProductImageForSelection } from "./utils/shopify.js"

export default function ProductLandingPage() {
  const { shopData, loading } = useShopifyProductData()
  const { scrolled } = useScrollFlags()
  const purchase = useProductPurchaseState(shopData)
  const { setQty, setColorIdx, setActiveImage, setVariantIdx } = purchase
  const [selectedColor, setSelectedColor] = useState("White")
  const [selectedSize, setSelectedSize] = useState("30cm")
  const [quantity, setQuantity] = useState(1)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const bundleSummary = purchase.bundleSummary

  const theme = shopData?.theme || {}
  const themeVars = {
    "--bg": theme.pageBackground || "#F6F4EF",
    "--cream": theme.creamText || "#FBFAF6",
    "--warm-white": theme.warmWhite || "#FFFDF8",
    "--fg": theme.mainText || "#231913",
    "--charcoal": theme.mainText || "#231913",
    "--primary": theme.mainText || "#231913",
    "--muted": theme.mutedText || "#74685D",
    "--accent": theme.accent || "#C89A59",
    "--border": theme.borders || "#DED8CF",
  }

  const navigateHome = (targetId = "top") => {
    window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }

      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }

  const handleSetQuantity = (quantity) => {
    const nextQuantity = Math.max(1, Math.floor(Number(quantity) || 1))
    setQuantity(nextQuantity)
    setQty(nextQuantity)
  }

  const handleSelectBundle = (quantity) => {
    handleSetQuantity(quantity)
    setIsCartOpen(true)
  }

  const handlePreviewBundle = (quantity) => {
    handleSetQuantity(quantity)
  }

  useEffect(() => {
    const nextVariantIndex = findBestMatchingVariantIndex(purchase.variants, {
      color: selectedColor,
      size: selectedSize,
    })

    if (nextVariantIndex >= 0 && nextVariantIndex !== purchase.variantIdx) {
      setVariantIdx(nextVariantIndex)
    }

    const matchedVariant = nextVariantIndex >= 0 ? purchase.variants[nextVariantIndex] : purchase.v
    const preferredImage = getBestProductImageForSelection(purchase.images, {
      color: selectedColor,
      size: selectedSize,
      selectedVariant: matchedVariant,
      currentImageIndex: purchase.activeImage,
    })

    if (preferredImage.index >= 0 && preferredImage.index !== purchase.activeImage) {
      setActiveImage(preferredImage.index)
    }
  }, [purchase.images, purchase.variantIdx, purchase.variants, purchase.v, selectedColor, selectedSize, setActiveImage, setVariantIdx])

  const handleSelectColor = (index) => {
    const nextColor = COLORS[index] || COLORS[0]
    setSelectedColor(nextColor.name)
    setColorIdx(index)
  }

  const handleSelectSize = (size) => {
    setSelectedSize(size)
  }

  const handleOpenCart = () => {
    setIsCartOpen(true)
  }

  return (
    <div className="page-shell" id="top" style={themeVars}>
      <style>{PRODUCT_PAGE_STYLES}</style>
      <AnnouncementBar shopData={shopData} theme={theme} />
      <Navbar
        scrolled={scrolled}
        shopName={shopData?.shopName}
        onNavigateHome={navigateHome}
        onOpenCart={handleOpenCart}
        quantity={quantity}
      />
      <main>
        <ProductSection
          shopData={shopData}
          purchase={purchase}
          bundleSummary={bundleSummary}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          setSelectedSize={handleSelectSize}
          quantity={quantity}
          onChangeQuantity={handleSetQuantity}
          onPreviewBundle={handlePreviewBundle}
          onSelectColor={handleSelectColor}
          onOpenCart={handleOpenCart}
        />
        <VideoDemonstration shopData={shopData} onOpenCart={handleOpenCart} />
        <StorySection shopData={shopData} onOpenCart={handleOpenCart} />
        <UseCases shopData={shopData} />
        <LightTones shopData={shopData} />
        <ComparisonTable shopData={shopData} />
        <BundleOffers
          shopData={shopData}
          onSelectBundle={handleSelectBundle}
          onOpenCart={handleOpenCart}
          bundleSummary={bundleSummary}
          quantity={quantity}
          onChangeQuantity={handleSetQuantity}
        />
        <CustomerReviews shopData={shopData} />
        <SocialProof />
        <FAQ shopData={shopData} />
        <GuaranteeSection shopData={shopData} />
        <WhyHomeownersChooseLuxense shopData={shopData} />
        <FinalCTA shopData={shopData} purchase={purchase} quantity={quantity} onOpenCart={handleOpenCart} />
        <Footer shopData={shopData} shopName={shopData?.shopName} theme={theme} />
      </main>
      <CartDrawer
        shopData={shopData}
        purchase={purchase}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        bundleSummary={bundleSummary}
        quantity={quantity}
        isCartOpen={isCartOpen}
        onCloseCart={() => setIsCartOpen(false)}
      />
      <StickyMobileAddToCart
        bundleSummary={bundleSummary}
        quantity={quantity}
        isCartOpen={isCartOpen}
        onOpenCart={handleOpenCart}
      />
      {loading && <LoadingOverlay />}
    </div>
  )
}
