import { ArrowRight } from "lucide-react"
import { buildCartUrl } from "../../utils/shopify.js"
import heroDetailImage from "../../../../assets/product/hero-detail.png"

export default function FinalCTA({ media, theme, shopDomain, variantId }) {
  const url = buildCartUrl(shopDomain, variantId, 1) || "#buy"
  const backgroundImage = media?.finalCtaImage || media?.heroImage || heroDetailImage

  return (
    <section
      style={{
        position: "relative",
        minHeight: 520,
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        color: "var(--cream)",
        textAlign: "center",
        backgroundImage:
          `linear-gradient(rgba(31,22,16,.76), rgba(31,22,16,.78)), url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ maxWidth: 760, padding: "72px 24px" }}>
        <h2 className="serif" style={{ fontSize: 72, lineHeight: 1, fontWeight: 600 }}>
          {theme?.finalCtaTitle || "Bring your home to light"}
        </h2>
        <p style={{ maxWidth: 560, margin: "24px auto 0", fontSize: 20, lineHeight: 1.45, fontWeight: 700 }}>
          {theme?.finalCtaText || "Free shipping, a 30-day guarantee, and a glow you'll wonder how you lived without."}
        </p>
        <a
          href={url}
          target={shopDomain ? "_blank" : "_self"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            minHeight: 60,
            borderRadius: 999,
            background: "var(--warm-white)",
            color: "var(--fg)",
            padding: "0 34px",
            marginTop: 36,
            fontSize: 17,
            fontWeight: 900,
            textDecoration: "none",
          }}
        >
          {theme?.finalCtaButton || "Shop Now"} <ArrowRight size={18} />
        </a>
      </div>

      <style>{`
        @media (max-width: 760px) {
          section h2 {
            font-size: 46px !important;
          }
        }
      `}</style>
    </section>
  )
}
