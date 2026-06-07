import { useState } from "react"

import LoadingOverlay from "./components/feedback/LoadingOverlay.jsx"
import StickyMobileAddToCart from "./components/feedback/StickyMobileAddToCart.jsx"
import AnnouncementBar from "./components/layout/AnnouncementBar.jsx"
import Footer from "./components/layout/Footer.jsx"
import Navbar from "./components/layout/Navbar.jsx"
import ProductSection from "./components/product/ProductSection.jsx"
import FAQ from "./components/sections/FAQ.jsx"
import FinalCTA from "./components/sections/FinalCTA.jsx"
import GuaranteeSection from "./components/sections/GuaranteeSection.jsx"
import HowItWorks from "./components/sections/HowItWorks.jsx"
import LightingModes from "./components/sections/LightingModes.jsx"
import LightTones from "./components/sections/LightTones.jsx"
import ProductBenefits from "./components/sections/ProductBenefits.jsx"
import ProductOptions from "./components/sections/ProductOptions.jsx"
import BundleOffers from "./components/sections/BundleOffers.jsx"
import ComparisonTable from "./components/sections/ComparisonTable.jsx"
import TechnicalSpecifications from "./components/sections/TechnicalSpecifications.jsx"
import TrustBadges from "./components/sections/TrustBadges.jsx"
import UseCases from "./components/sections/UseCases.jsx"
import { useScrollFlags } from "./hooks/useScrollFlags.js"
import { useShopifyProductData } from "./hooks/useShopifyProductData.js"
import { useProductPurchaseState } from "./hooks/useProductPurchaseState.js"
import { PRODUCT_PAGE_STYLES } from "./styles/productPageStyles.js"

export default function ProductLandingPage() {
  const { shopData, loading } = useShopifyProductData()
  const { scrolled } = useScrollFlags()
  const purchase = useProductPurchaseState(shopData)
  const [selectedSize, setSelectedSize] = useState("30cm")

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
    purchase.setQty(quantity)
    navigateHome("bundles")
  }

  const checkoutUrl = purchase.buildCheckoutUrl(purchase.qty)

  return (
    <div className="page-shell" id="top" style={themeVars}>
      <style>{PRODUCT_PAGE_STYLES}</style>
      <AnnouncementBar theme={theme} />
      <Navbar scrolled={scrolled} shopName={shopData?.shopName} onNavigateHome={navigateHome} />
      <main>
        <ProductSection shopData={shopData} purchase={purchase} onNavigateSection={navigateHome} />
        <TrustBadges />
        <ProductBenefits />
        <BundleOffers
          checkoutUrl={checkoutUrl}
          shopDomain={shopData?.shopDomain}
          onSelectBundle={handleSelectBundle}
          selectedBundleQuantity={purchase.qty}
        />
        <ProductOptions
          selectedColorIdx={purchase.colorIdx}
          onSelectColor={(index) => {
            purchase.setColorIdx(index)
            purchase.setActiveImage(index)
          }}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <HowItWorks />
        <LightingModes />
        <LightTones />
        <UseCases />
        <ComparisonTable />
        <TechnicalSpecifications />
        <FAQ />
        <GuaranteeSection />
        <FinalCTA shopData={shopData} purchase={purchase} />
        <Footer shopName={shopData?.shopName} theme={theme} />
      </main>
      <StickyMobileAddToCart shopData={shopData} purchase={purchase} selectedBundleQuantity={purchase.qty} />
      {loading && <LoadingOverlay />}
    </div>
  )
}
