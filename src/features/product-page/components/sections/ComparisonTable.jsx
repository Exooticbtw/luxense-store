import { Check, Minus } from "lucide-react"

import { COMPARISON_ROWS } from "../../data/productPageData.js"

export default function ComparisonTable() {
  return (
    <section id="compare" style={{ padding: "86px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Comparison table
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Why MotionGlow feels more refined than a standard motion light.
          </h2>
        </div>

        <div
          className="soft-card"
          style={{
            marginTop: 38,
            borderRadius: 28,
            overflow: "hidden",
            background: "rgba(255,255,255,.9)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr repeat(2, minmax(0, 1fr))",
              gap: 0,
              padding: "18px 22px",
              borderBottom: "1px solid rgba(17,17,17,.08)",
              background: "rgba(17,17,17,.03)",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            <div>Feature</div>
            <div style={{ textAlign: "center", color: "var(--fg)" }}>Luxense</div>
            <div style={{ textAlign: "center" }}>Standard light</div>
          </div>

          {COMPARISON_ROWS.map(([label, us, them], index) => (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr repeat(2, minmax(0, 1fr))",
                gap: 0,
                padding: "18px 22px",
                borderBottom: index < COMPARISON_ROWS.length - 1 ? "1px solid rgba(17,17,17,.06)" : "none",
                background: index % 2 ? "rgba(17,17,17,.015)" : "transparent",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700 }}>{label}</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {us ? (
                  <span style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(200,169,106,.14)", display: "grid", placeItems: "center" }}>
                    <Check size={16} style={{ color: "var(--fg)" }} />
                  </span>
                ) : (
                  <Minus size={18} style={{ color: "var(--muted)" }} />
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "center", color: "var(--muted)" }}>
                {them ? <Minus size={18} /> : <span style={{ fontSize: 14, fontWeight: 700 }}>No</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #compare {
            padding: 64px 16px !important;
          }
          #compare .section-title {
            font-size: 40px !important;
          }
          #compare > div > div:last-child > div {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          #compare > div > div:last-child > div > div:nth-child(2),
          #compare > div > div:last-child > div > div:nth-child(3) {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  )
}
