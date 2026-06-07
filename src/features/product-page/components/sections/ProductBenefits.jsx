import { BENEFITS_DATA } from "../../data/productPageData.js"

export default function ProductBenefits() {
  return (
    <section id="benefits" style={{ padding: "86px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 720 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Product benefits
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Designed to solve the small moments that make a home feel unfinished.
          </h2>
          <p style={{ marginTop: 18, color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }}>
            Luxense MotionGlow™ pairs elegant materials with practical smart-home behavior so the product feels calm, premium, and genuinely useful.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            marginTop: 42,
          }}
        >
          {BENEFITS_DATA.map(({ Icon, title, desc }, index) => (
            <article
              key={title}
              className="soft-card"
              style={{
                padding: 26,
                borderRadius: 26,
                background: index === 1 || index === 3 ? "rgba(17,17,17,.96)" : "rgba(255,255,255,.86)",
                color: index === 1 || index === 3 ? "var(--cream)" : "var(--fg)",
                minHeight: 220,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 18,
                  display: "grid",
                  placeItems: "center",
                  background: index === 1 || index === 3 ? "rgba(255,255,255,.08)" : "rgba(200,169,106,.12)",
                  color: index === 1 || index === 3 ? "var(--cream)" : "var(--fg)",
                }}
              >
                <Icon size={22} />
              </div>
              <h3 style={{ marginTop: 18, fontSize: 22, lineHeight: 1.15, fontWeight: 800 }}>{title}</h3>
              <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: index === 1 || index === 3 ? "rgba(255,255,255,.76)" : "var(--muted)" }}>
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #benefits > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #benefits {
            padding: 64px 16px !important;
          }
          #benefits > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #benefits .section-title {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
