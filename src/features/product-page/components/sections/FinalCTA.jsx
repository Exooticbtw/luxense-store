import { ArrowRight, ShieldCheck } from "lucide-react"

import { buildCartUrl } from "../../utils/shopify.js"

const TRUST_POINTS = ["Secure Checkout", "Free Shipping", "30-Day Guarantee"]

export default function FinalCTA({ shopData, purchase, quantity = 1, onOpenCart }) {
  const checkoutUrl = buildCartUrl(shopData?.shopDomain, purchase?.v?.id, quantity || 1) || "#top"

  return (
    <section
      id="final-cta"
      style={{
        padding: "22px 24px 86px",
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
            "linear-gradient(135deg, rgba(17,17,17,.98) 0%, rgba(17,17,17,.94) 58%, rgba(201,164,106,.20) 140%)",
          color: "var(--cream)",
          boxShadow: "0 26px 64px rgba(17,17,17,.16)",
          border: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center", padding: "68px 28px" }}>
          <p className="eyebrow" style={{ color: "rgba(255,255,255,.62)" }}>
            Final step
          </p>
          <h2 className="serif" style={{ fontSize: 68, lineHeight: 1, fontWeight: 700, textWrap: "balance" }}>
            Ready To Upgrade Your Home?
          </h2>
          <p style={{ marginTop: 18, fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.76)", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            MotionGlow brings effortless lighting to the spaces you use every day.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            {TRUST_POINTS.map((item) => (
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
              marginTop: 28,
              fontSize: 16,
              fontWeight: 900,
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "0 14px 28px rgba(0,0,0,.12)",
            }}
          >
            Get MotionGlow Today <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #final-cta {
            padding: 14px 16px 68px !important;
          }
          #final-cta h2 {
            font-size: 40px !important;
          }
          #final-cta p {
            font-size: 16px !important;
          }
          #final-cta a {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
