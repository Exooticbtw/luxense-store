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
          background: "linear-gradient(135deg, rgba(17,17,17,.68) 0%, rgba(17,17,17,.42) 58%, rgba(201,164,106,.12) 140%)",
          color: "var(--cream)",
          boxShadow: "0 26px 64px rgba(17,17,17,.16)",
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
            opacity: 0.74,
          }}
          fallbackStyle={{ position: "absolute", inset: 0 }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(10,10,10,.58) 0%, rgba(10,10,10,.42) 52%, rgba(10,10,10,.24) 100%)",
          }}
        />
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "68px 28px" }}>
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
              padding: "40px 34px 36px",
              borderRadius: 28,
              background: "linear-gradient(135deg, rgba(0,0,0,.72), rgba(0,0,0,.38))",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,.12)",
              boxShadow: "0 20px 48px rgba(0,0,0,.18)",
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
                color: "rgba(255,255,255,.82)",
                maxWidth: 680,
                marginLeft: "auto",
                marginRight: "auto",
                textShadow: "0 2px 14px rgba(0,0,0,.45)",
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
                    background: "rgba(255,255,255,.08)",
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
          #final-cta > div > div:last-child {
            padding: 38px 14px 34px !important;
          }
          #final-cta > div > div:last-child > div {
            max-width: none !important;
            padding: 28px 18px 24px !important;
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
