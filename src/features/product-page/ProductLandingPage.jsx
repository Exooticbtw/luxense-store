import { useEffect, useState } from "react"

import LoadingOverlay from "./components/feedback/LoadingOverlay.jsx"
import CartDrawer from "./components/feedback/CartDrawer.jsx"
import StickyMobileAddToCart from "./components/feedback/StickyMobileAddToCart.jsx"
import AnnouncementBar from "./components/layout/AnnouncementBar.jsx"
import Footer from "./components/layout/Footer.jsx"
import Navbar from "./components/layout/Navbar.jsx"
import ProductSection from "./components/product/ProductSection.jsx"
import VideoDemonstration from "./components/sections/VideoDemonstration.jsx"
import ProblemSection from "./components/sections/ProblemSection.jsx"
import SolutionSection from "./components/sections/SolutionSection.jsx"
import FAQ from "./components/sections/FAQ.jsx"
import FinalCTA from "./components/sections/FinalCTA.jsx"
import GuaranteeSection from "./components/sections/GuaranteeSection.jsx"
import HowItWorks from "./components/sections/HowItWorks.jsx"
import ProductFeatures from "./components/sections/ProductFeatures.jsx"
import ProductBenefits from "./components/sections/ProductBenefits.jsx"
import ProductOptions from "./components/sections/ProductOptions.jsx"
import BundleOffers from "./components/sections/BundleOffers.jsx"
import CustomerReviews from "./components/sections/CustomerReviews.jsx"
import SocialProof from "./components/sections/SocialProof.jsx"
import ComparisonTable from "./components/sections/ComparisonTable.jsx"
import UseCases from "./components/sections/UseCases.jsx"
import { useScrollFlags } from "./hooks/useScrollFlags.js"
import { useShopifyProductData } from "./hooks/useShopifyProductData.js"
import { useProductPurchaseState } from "./hooks/useProductPurchaseState.js"
import { BUNDLE_OPTIONS, COLORS } from "./data/productPageData.js"
import { PRODUCT_PAGE_STYLES } from "./styles/productPageStyles.js"

export default function ProductLandingPage() {
  const { shopData, loading } = useShopifyProductData()
  const { scrolled } = useScrollFlags()
  const purchase = useProductPurchaseState(shopData)
  const [selectedColor, setSelectedColor] = useState("White")
  const [selectedSize, setSelectedSize] = useState("30cm")
  const [selectedBundle, setSelectedBundle] = useState(BUNDLE_OPTIONS[1])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const selectedColorIdx = Math.max(
    0,
    COLORS.findIndex((color) => color.name === selectedColor),
  )

  useEffect(() => {
    if (purchase.qty !== selectedBundle.quantity) {
      purchase.setQty(selectedBundle.quantity)
    }
  }, [purchase.qty, purchase.setQty, selectedBundle.quantity])

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

  const handleSelectBundle = (quantity) => {
    const nextBundle = BUNDLE_OPTIONS.find((bundle) => bundle.quantity === quantity) || BUNDLE_OPTIONS[0]
    setSelectedBundle(nextBundle)
    purchase.setQty(quantity)
    setIsCartOpen(true)
  }

  const handleSelectColor = (index) => {
    const nextColor = COLORS[index] || COLORS[0]
    setSelectedColor(nextColor.name)
    purchase.setColorIdx(index)
    purchase.setActiveImage(index)
  }

  const handleOpenCart = () => {
    setIsCartOpen(true)
  }

  const checkoutUrl = purchase.buildCheckoutUrl(purchase.qty)

  return (
    <div className="page-shell" id="top" style={themeVars}>
      <style>{PRODUCT_PAGE_STYLES}</style>
      <AnnouncementBar theme={theme} />
      <Navbar scrolled={scrolled} shopName={shopData?.shopName} onNavigateHome={navigateHome} />
      <main>
        <ProductSection
          shopData={shopData}
          purchase={purchase}
          onNavigateSection={navigateHome}
          onOpenCart={handleOpenCart}
        />
        <VideoDemonstration />
        <ProblemSection />
        <SolutionSection />
        <ProductBenefits />
        <UseCases />
        <ProductFeatures />
        <ComparisonTable />
        <BundleOffers
          checkoutUrl={checkoutUrl}
          shopDomain={shopData?.shopDomain}
          onSelectBundle={handleSelectBundle}
          onOpenCart={handleOpenCart}
          selectedBundleQuantity={purchase.qty}
        />
        <ProductOptions
          selectedColorIdx={selectedColorIdx}
          onSelectColor={handleSelectColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <CustomerReviews />
        <SocialProof />
        <HowItWorks />
        <FAQ />
        <GuaranteeSection />
        <FinalCTA shopData={shopData} purchase={purchase} onOpenCart={handleOpenCart} />
        <Footer shopName={shopData?.shopName} theme={theme} />
      </main>
      <CartDrawer
        shopData={shopData}
        purchase={purchase}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        selectedBundle={selectedBundle}
        isCartOpen={isCartOpen}
        onCloseCart={() => setIsCartOpen(false)}
      />
      <StickyMobileAddToCart
        selectedBundle={selectedBundle}
        selectedBundleQuantity={purchase.qty}
        onOpenCart={handleOpenCart}
      />
      {loading && <LoadingOverlay />}
    </div>
  )
}
