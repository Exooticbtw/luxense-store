import { ArrowRight, ShieldCheck } from "lucide-react"

import { FINAL_CTA_POINTS } from "../../data/productPageData.js"
import { buildCartUrl } from "../../utils/shopify.js"

export default function FinalCTA({ shopData, purchase, onOpenCart }) {
  const checkoutUrl = buildCartUrl(shopData?.shopDomain, purchase?.v?.id, purchase?.qty || 1) || "#top"

  return (
    <section
      id="final-cta"
      style={{
        padding: "22px 24px 92px",
        background: "var(--bg)",
        scrollMarginTop: 110,
      }}
    >
      <div
        style={{
          maxWidth: 1560,
          margin: "0 auto",
          borderRadius: 34,
          overflow: "hidden",
          background:
            "linear-gradient(135deg, rgba(17,17,17,.98) 0%, rgba(17,17,17,.92) 55%, rgba(200,169,106,.3) 140%)",
          color: "var(--cream)",
          boxShadow: "0 26px 64px rgba(17,17,17,.16)",
        }}
      >
        <div style={{ padding: "72px 28px", textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "rgba(255,255,255,.62)" }}>
            Final step
          </p>
          <h2 className="serif" style={{ fontSize: 72, lineHeight: 1, fontWeight: 600, textWrap: "balance" }}>
            Finish your MotionGlow order with confidence.
          </h2>
          <p style={{ marginTop: 22, fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.76)" }}>
            Secure checkout, a 30-day guarantee, and support if you need help after purchase.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
            {FINAL_CTA_POINTS.map((item) => (
              <span
                key={item}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,.14)",
                  background: "rgba(255,255,255,.06)",
                  padding: "8px 14px",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                <ShieldCheck size={13} />
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
              marginTop: 32,
              fontSize: 16,
              fontWeight: 900,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Open cart <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #final-cta {
            padding: 18px 16px 84px !important;
          }
          #final-cta h2 {
            font-size: 42px !important;
          }
          #final-cta p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
