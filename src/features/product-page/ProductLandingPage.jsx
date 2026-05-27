import LoadingOverlay from "./components/feedback/LoadingOverlay.jsx"
import RecentPurchaseNotif from "./components/feedback/RecentPurchaseNotif.jsx"
import StickyBar from "./components/feedback/StickyBar.jsx"
import Footer from "./components/layout/Footer.jsx"
import Navbar from "./components/layout/Navbar.jsx"
import ProductSection from "./components/product/ProductSection.jsx"
import FAQ from "./components/sections/FAQ.jsx"
import FeaturesSection from "./components/sections/FeaturesSection.jsx"
import FinalCTA from "./components/sections/FinalCTA.jsx"
import HowItWorks from "./components/sections/HowItWorks.jsx"
import Reviews from "./components/sections/Reviews.jsx"
import Rooms from "./components/sections/Rooms.jsx"
import WhyUs from "./components/sections/WhyUs.jsx"
import { useScrollFlags } from "./hooks/useScrollFlags.js"
import { useShopifyProductData } from "./hooks/useShopifyProductData.js"
import { PRODUCT_PAGE_STYLES } from "./styles/productPageStyles.js"
import { buildCartUrl, getNumericVariantId, parsePrice } from "./utils/shopify.js"

export default function ProductLandingPage() {
  const { shopData, loading } = useShopifyProductData()
  const { scrolled, showSticky } = useScrollFlags()

  const variants = shopData?.product?.variants || []
  const firstVariant = variants[0]
  const numericVariantId = getNumericVariantId(firstVariant?.id)
  const checkoutUrl = buildCartUrl(shopData?.shopDomain, firstVariant?.id, 1) || "#buy"
  const price = parsePrice(firstVariant?.price, 49)

  return (
    <div style={{ minHeight:"100vh",fontFamily:"'Manrope',sans-serif",background:"var(--bg)" }}>
      <style>{PRODUCT_PAGE_STYLES}</style>
      <Navbar scrolled={scrolled} shopName={shopData?.shopName} />
      <ProductSection shopData={shopData} />
      <FeaturesSection />
      <HowItWorks />
      <Rooms />
      <WhyUs />
      <Reviews />
      <FAQ />
      <FinalCTA shopDomain={shopData?.shopDomain} variantId={numericVariantId} />
      <Footer shopName={shopData?.shopName} />
      <StickyBar show={showSticky} price={price.toFixed(2)} checkoutUrl={checkoutUrl} />
      <RecentPurchaseNotif />
      {loading && <LoadingOverlay />}
    </div>
  )
}
