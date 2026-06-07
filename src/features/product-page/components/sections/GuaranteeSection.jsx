import { LockKeyhole, ShieldCheck, Truck } from "lucide-react"

import { GUARANTEE_POINTS } from "../../data/productPageData.js"

export default function GuaranteeSection() {
  return (
    <section id="guarantee" style={{ padding: "0 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div
        style={{
          maxWidth: 1560,
          margin: "0 auto",
          borderRadius: 28,
          padding: 24,
          border: "1px solid rgba(17,17,17,.08)",
          background: "rgba(255,255,255,.86)",
          boxShadow: "0 18px 44px rgba(17,17,17,.05)",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: ".95fr 1.05fr", gap: 24, alignItems: "center" }}>
          <div>
            <p className="eyebrow" style={{ color: "var(--accent)" }}>
              Secure checkout
            </p>
            <h2 className="serif section-title" style={{ fontSize: 58 }}>
              Buy with confidence.
            </h2>
            <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }}>
              Every order is protected by a clean checkout experience, practical support, and a guarantee that keeps the purchase low-risk.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>
            {[
              [ShieldCheck, "Protected payment"],
              [LockKeyhole, "Secure order flow"],
              [Truck, "Fast fulfillment"],
            ].map(([Icon, label]) => (
              <div
                key={label}
                style={{
                  minHeight: 118,
                  borderRadius: 22,
                  border: "1px solid rgba(17,17,17,.08)",
                  background: "rgba(17,17,17,.96)",
                  color: "var(--cream)",
                  display: "grid",
                  placeItems: "center",
                  gap: 10,
                  padding: 18,
                  textAlign: "center",
                }}
              >
                <Icon size={22} style={{ color: "var(--accent)" }} />
                <span style={{ fontSize: 15, fontWeight: 800 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 14, marginTop: 18 }}>
          {GUARANTEE_POINTS.map((point) => (
            <div
              key={point}
              style={{
                borderRadius: 20,
                padding: 18,
                background: "rgba(17,17,17,.04)",
                color: "var(--fg)",
                fontSize: 14,
                fontWeight: 700,
                lineHeight: 1.5,
              }}
            >
              {point}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #guarantee > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
          #guarantee > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #guarantee {
            padding: 0 16px 64px !important;
          }
          #guarantee > div > div:last-child,
          #guarantee > div > div:first-child > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #guarantee .section-title {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
