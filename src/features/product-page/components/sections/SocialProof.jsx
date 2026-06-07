import PaymentIcons from "../common/PaymentIcons.jsx"
import { PAYMENT_BADGES } from "../../data/productPageData.js"

const METRICS = [
  ["4.9/5", "Average rating"],
  ["3,284+", "Verified reviews"],
  ["24h", "Response support"],
  ["Secure", "Checkout flow"],
]

export default function SocialProof() {
  return (
    <section id="social-proof" style={{ padding: "0 24px 86px", background: "var(--sec)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div
          style={{
            borderRadius: 30,
            padding: 24,
            background: "rgba(255,255,255,.84)",
            border: "1px solid rgba(17,17,17,.08)",
            boxShadow: "0 18px 44px rgba(17,17,17,.06)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 14 }}>
            {METRICS.map(([value, label]) => (
              <div key={label} style={{ padding: 18, borderRadius: 20, background: "rgba(17,17,17,.04)" }}>
                <div className="serif" style={{ fontSize: 28, lineHeight: 1, fontWeight: 700 }}>
                  {value}
                </div>
                <div style={{ marginTop: 8, fontSize: 13, color: "var(--muted)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 18,
              padding: "18px 20px",
              borderRadius: 22,
              background: "rgba(17,17,17,.04)",
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: "var(--fg)" }}>Trusted payment methods</span>
              <PaymentIcons />
            </div>
            <div style={{ color: "var(--muted)", fontSize: 13, fontWeight: 700 }}>{PAYMENT_BADGES.join(" | ")}</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #social-proof > div > div > div:first-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #social-proof {
            padding: 0 16px 64px !important;
          }
          #social-proof > div > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
