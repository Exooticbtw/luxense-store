import { ArrowRight, ShieldCheck } from "lucide-react"

import { IMAGE_ASSETS } from "../../data/productPageData.js"
import { buildCartUrl } from "../../utils/shopify.js"
import { getMotionGlowContent } from "../../utils/motionGlowContent.js"
import SafeMediaImage from "../common/SafeMediaImage.jsx"

export default function FinalCTA({ shopData, purchase, quantity = 1, onOpenCart }) {
  const content = getMotionGlowContent(shopData ?? {})
  const finalCta = content.finalCta
  const checkoutUrl = buildCartUrl(shopData?.shopDomain, purchase?.v?.id, quantity || 1) || "#top"
  const finalImage = finalCta.finalCtaImage || IMAGE_ASSETS.finalLifestyle.src
  const heroFallbackStyle = {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 35%, rgba(255,255,255,.16) 0%, rgba(255,255,255,.04) 24%, transparent 34%), linear-gradient(135deg, #141414 0%, #26221d 52%, #8c6c43 150%)",
  }

  return (
    <section id="final-cta" style={{ padding: "22px 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div
        style={{
          maxWidth: 1560,
          margin: "0 auto",
          borderRadius: 34,
          overflow: "hidden",
          position: "relative",
          minHeight: 640,
          background: "linear-gradient(135deg, #141414 0%, #26221d 52%, #8c6c43 150%)",
          boxShadow: "0 26px 64px rgba(17,17,17,.14)",
          border: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <SafeMediaImage
          src={finalImage}
          alt={finalCta.finalCtaTitle}
          loading="lazy"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.98,
          }}
          fallbackStyle={heroFallbackStyle}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0,0,0,.12) 0%, rgba(0,0,0,.24) 52%, rgba(0,0,0,.34) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: 640,
            display: "grid",
            placeItems: "center",
            padding: "56px 28px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 720,
              textAlign: "center",
              padding: "38px 34px 36px",
              borderRadius: 28,
              background: "linear-gradient(135deg, rgba(0,0,0,.58), rgba(0,0,0,.34))",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,.12)",
              boxShadow: "0 22px 52px rgba(0,0,0,.22)",
            }}
          >
            <p
              className="eyebrow"
              style={{
                color: "#C89A59",
                textShadow: "0 2px 14px rgba(0,0,0,.45)",
              }}
            >
              {finalCta.finalCtaEyebrow}
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 68,
                lineHeight: 1,
                fontWeight: 700,
                textWrap: "balance",
                color: "#FFFDF8",
                textShadow: "0 2px 14px rgba(0,0,0,.45)",
              }}
            >
              {finalCta.finalCtaTitle}
            </h2>
            <p
              style={{
                marginTop: 18,
                fontSize: 19,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.85)",
                maxWidth: 620,
                marginLeft: "auto",
                marginRight: "auto",
                textShadow: "0 2px 14px rgba(0,0,0,.4)",
              }}
            >
              {finalCta.finalCtaText}
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
              {(finalCta.trust || []).map((item) => (
                <span
                  key={item}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,.16)",
                    background: "rgba(255,255,255,.10)",
                    padding: "8px 14px",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "rgba(255,255,255,.86)",
                    textShadow: "0 2px 10px rgba(0,0,0,.35)",
                  }}
                >
                  <ShieldCheck size={13} color="#C9A46A" />
                  {item}
                </span>
              ))}
            </div>

            <a
              href={checkoutUrl}
              onClick={(event) => {
                event.preventDefault()
                onOpenCart?.()
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                minHeight: 58,
                borderRadius: 999,
                background: "var(--cream)",
                color: "var(--fg)",
                padding: "0 28px",
                marginTop: 28,
                fontSize: 16,
                fontWeight: 900,
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: "0 16px 32px rgba(0,0,0,.18)",
              }}
            >
              {finalCta.finalCtaButton} <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #final-cta {
            padding: 14px 16px 68px !important;
          }
          #final-cta > div {
            min-height: 560px !important;
          }
          #final-cta > div > div {
            padding: 18px !important;
          }
          #final-cta > div > div > div {
            padding: 24px 18px 22px !important;
            max-width: none !important;
          }
          #final-cta h2 {
            font-size: 40px !important;
          }
          #final-cta p {
            font-size: 16px !important;
          }
          #final-cta a {
            width: 100% !important;
            min-height: 54px !important;
          }
        }
      `}</style>
    </section>
  )
}
