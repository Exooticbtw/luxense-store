import { TECH_SPECS } from "../../data/productPageData.js"

export default function TechnicalSpecifications() {
  return (
    <section id="specs" style={{ padding: "86px 24px", background: "var(--sec)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Technical specifications
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Everything you need, laid out clearly.
          </h2>
        </div>

        <div
          className="spec-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 14,
            marginTop: 38,
          }}
        >
          {TECH_SPECS.map(([label, value], index) => (
            <div
              key={label}
              className="soft-card"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 18,
                alignItems: "flex-start",
                padding: 22,
                borderRadius: 24,
                background: index % 2 ? "rgba(255,255,255,.9)" : "rgba(17,17,17,.96)",
                color: index % 2 ? "var(--fg)" : "var(--cream)",
              }}
            >
              <div style={{ maxWidth: 260 }}>
                <div style={{ fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: index % 2 ? "var(--muted)" : "rgba(255,255,255,.64)" }}>
                  {label}
                </div>
              </div>
              <div style={{ textAlign: "right", fontSize: 16, lineHeight: 1.55, color: index % 2 ? "var(--muted)" : "rgba(255,255,255,.78)", maxWidth: 320 }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #specs .spec-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 760px) {
          #specs {
            padding: 64px 16px !important;
          }
          #specs .section-title {
            font-size: 40px !important;
          }
          #specs .spec-grid > div {
            flex-direction: column !important;
          }
          #specs .spec-grid > div > div:last-child {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  )
}
