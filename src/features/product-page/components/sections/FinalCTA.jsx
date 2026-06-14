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

  return (
    <section id="final-cta" style={{ padding: "22px 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div
        style={{
          maxWidth: 1560,
          margin: "0 auto",
          borderRadius: 34,
          overflow: "hidden",
          position: "relative",
          background: "linear-gradient(180deg, rgba(255,255,255,.94), rgba(247,242,233,.98))",
          boxShadow: "0 26px 64px rgba(17,17,17,.12)",
          border: "1px solid rgba(17,17,17,.08)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr .95fr",
            minHeight: 620,
          }}
        >
          <div
            style={{
              padding: "62px 54px",
              display: "flex",
              alignItems: "center",
              background: "linear-gradient(180deg, rgba(255,255,255,.98), rgba(247,242,233,.96))",
            }}
          >
            <div style={{ width: "100%", maxWidth: 620 }}>
              <p className="eyebrow" style={{ color: "#C89A59" }}>
                {finalCta.finalCtaEyebrow}
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: 68,
                  lineHeight: 1,
                  fontWeight: 700,
                  textWrap: "balance",
                  color: "#111111",
                  textShadow: "0 1px 0 rgba(255,255,255,.45)",
                }}
              >
                {finalCta.finalCtaTitle}
              </h2>
              <p
                style={{
                  marginTop: 18,
                  fontSize: 19,
                  lineHeight: 1.7,
                  color: "rgba(17,17,17,.76)",
                  maxWidth: 560,
                }}
              >
                {finalCta.finalCtaText}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
                {(finalCta.trust || []).map((item) => (
                  <span
                    key={item}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      borderRadius: 999,
                      border: "1px solid rgba(17,17,17,.08)",
                      background: "rgba(255,255,255,.82)",
                      padding: "8px 14px",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "rgba(17,17,17,.82)",
                      boxShadow: "0 8px 18px rgba(17,17,17,.04)",
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
                  background: "var(--fg)",
                  color: "var(--cream)",
                  padding: "0 28px",
                  marginTop: 30,
                  fontSize: 16,
                  fontWeight: 900,
                  textDecoration: "none",
                  cursor: "pointer",
                  boxShadow: "0 16px 32px rgba(17,17,17,.18)",
                }}
              >
                {finalCta.finalCtaButton} <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              minHeight: 620,
              background: "linear-gradient(180deg, rgba(17,17,17,.12), rgba(17,17,17,.24))",
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
                opacity: 0.92,
              }}
              fallbackStyle={{ position: "absolute", inset: 0 }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, rgba(17,17,17,.12), rgba(17,17,17,.18) 62%, rgba(17,17,17,.28))",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          #final-cta > div > div {
            grid-template-columns: 1fr !important;
          }
          #final-cta > div > div > div:last-child {
            min-height: 420px !important;
            order: 2 !important;
          }
          #final-cta > div > div > div:first-child {
            order: 1 !important;
          }
        }
        @media (max-width: 760px) {
          #final-cta {
            padding: 14px 16px 68px !important;
          }
          #final-cta > div > div:first-child {
            padding: 28px 18px 22px !important;
          }
          #final-cta > div > div:first-child > div {
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
          #final-cta > div > div:last-child {
            min-height: 300px !important;
          }
        }
      `}</style>
    </section>
  )
}
