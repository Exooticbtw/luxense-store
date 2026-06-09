import { useState } from "react"

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
import { COLORS, getPriceSummary } from "./data/productPageData.js"
import { PRODUCT_PAGE_STYLES } from "./styles/productPageStyles.js"

export default function ProductLandingPage() {
  const { shopData, loading } = useShopifyProductData()
  const { scrolled } = useScrollFlags()
  const purchase = useProductPurchaseState(shopData)
  const { setQty, setColorIdx, setActiveImage } = purchase
  const [selectedColor, setSelectedColor] = useState("White")
  const [selectedSize, setSelectedSize] = useState("30cm")
  const [quantity, setQuantity] = useState(1)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const priceSummary = getPriceSummary(quantity)

  const theme = shopData?.theme || {}
  const themeVars = {
    ...(theme.bgColor ? { "--bg": theme.bgColor } : {}),
    ...(theme.creamColor ? { "--cream": theme.creamColor } : {}),
    ...(theme.warmWhiteColor ? { "--warm-white": theme.warmWhiteColor } : {}),
    ...(theme.textColor ? { "--fg": theme.textColor, "--charcoal": theme.textColor, "--primary": theme.textColor } : {}),
    ...(theme.mutedColor ? { "--muted": theme.mutedColor } : {}),
    ...(theme.accentColor ? { "--accent": theme.accentColor } : {}),
    ...(theme.borderColor ? { "--border": theme.borderColor } : {}),
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

  const handleSelectColor = (index) => {
    const nextColor = COLORS[index] || COLORS[0]
    setSelectedColor(nextColor.name)
    setColorIdx(index)
    setActiveImage(index)
  }

  const handleOpenCart = () => {
    setIsCartOpen(true)
  }

  return (
    <div className="page-shell" id="top" style={themeVars}>
      <style>{PRODUCT_PAGE_STYLES}</style>
      <AnnouncementBar theme={theme} />
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
          bundleSummary={priceSummary}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          quantity={quantity}
          onChangeQuantity={handleSetQuantity}
          onPreviewBundle={handlePreviewBundle}
          onSelectColor={handleSelectColor}
          onOpenCart={handleOpenCart}
        />
        <VideoDemonstration onOpenCart={handleOpenCart} />
        <StorySection onOpenCart={handleOpenCart} />
        <UseCases />
        <LightTones />
        <ComparisonTable />
        <BundleOffers
          onSelectBundle={handleSelectBundle}
          onOpenCart={handleOpenCart}
          bundleSummary={priceSummary}
          quantity={quantity}
          onChangeQuantity={handleSetQuantity}
        />
        <CustomerReviews />
        <SocialProof />
        <FAQ />
        <GuaranteeSection />
        <WhyHomeownersChooseLuxense />
        <FinalCTA shopData={shopData} purchase={purchase} quantity={quantity} onOpenCart={handleOpenCart} />
        <Footer shopName={shopData?.shopName} theme={theme} />
      </main>
      <CartDrawer
        shopData={shopData}
        purchase={purchase}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        bundleSummary={priceSummary}
        quantity={quantity}
        isCartOpen={isCartOpen}
        onCloseCart={() => setIsCartOpen(false)}
      />
      <StickyMobileAddToCart
        bundleSummary={priceSummary}
        quantity={quantity}
        onOpenCart={handleOpenCart}
      />
      {loading && <LoadingOverlay />}
    </div>
  )
}
