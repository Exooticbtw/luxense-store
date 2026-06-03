import { useState } from "react"
import LoadingOverlay from "./components/feedback/LoadingOverlay.jsx"
import AnnouncementBar from "./components/layout/AnnouncementBar.jsx"
import Footer from "./components/layout/Footer.jsx"
import Navbar from "./components/layout/Navbar.jsx"
import ProductSection from "./components/product/ProductSection.jsx"
import FAQ from "./components/sections/FAQ.jsx"
import FinalCTA from "./components/sections/FinalCTA.jsx"
import Reviews from "./components/sections/Reviews.jsx"
import Rooms from "./components/sections/Rooms.jsx"
import WhyUs from "./components/sections/WhyUs.jsx"
import { useScrollFlags } from "./hooks/useScrollFlags.js"
import { useShopifyProductData } from "./hooks/useShopifyProductData.js"
import { PRODUCT_PAGE_STYLES } from "./styles/productPageStyles.js"
import { getNumericVariantId } from "./utils/shopify.js"

export default function ProductLandingPage() {
  const { shopData, loading } = useShopifyProductData()
  const { scrolled } = useScrollFlags()
  const [view, setView] = useState("home")
  const showProductDetail = view === "product"
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

  const variants = shopData?.product?.variants || []
  const preferredVariantId = getNumericVariantId(shopData?.preferredVariantId)
  const selectedVariant =
    variants.find((variant) => getNumericVariantId(variant.id) === preferredVariantId) || variants[0]
  const numericVariantId = getNumericVariantId(selectedVariant?.id || shopData?.preferredVariantId)

  const openProductDetail = () => {
    setView("product")
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }

  const navigateHome = (targetId = "top") => {
    setView("home")
    window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }

      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }

  return (
    <div className="page-shell" id="top" style={themeVars}>
      <style>{PRODUCT_PAGE_STYLES}</style>
      <AnnouncementBar theme={theme} />
      <Navbar
        scrolled={scrolled}
        shopName={shopData?.shopName}
        onNavigateHome={navigateHome}
      />
      <ProductSection shopData={shopData} view={view} onOpenProductDetail={openProductDetail} />
      {!showProductDetail && (
        <>
          <Rooms media={shopData?.media} theme={theme} />
          <WhyUs />
          <Reviews media={shopData?.media} />
          <FAQ theme={theme} />
          <FinalCTA media={shopData?.media} theme={theme} shopDomain={shopData?.shopDomain} variantId={numericVariantId} />
          <Footer shopName={shopData?.shopName} theme={theme} />
        </>
      )}
      {loading && <LoadingOverlay />}
    </div>
  )
}
