import { BENEFITS_DATA } from "../../data/productPageData.js"

export default function ProductBenefits() {
  return (
    <section id="benefits" style={{ padding: "86px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 720 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Product benefits
          </p>
          <h2 className="serif section-title" style={{ fontSize: 58, maxWidth: 760 }}>
            Practical details, presented like a premium object.
          </h2>
          <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.72, maxWidth: 700 }}>
            Luxense MotionGlow\u2122 keeps the useful parts of smart lighting and removes the clutter, so the product feels calm, elegant, and easy to live with.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 16,
            marginTop: 38,
          }}
        >
          {BENEFITS_DATA.map(({ Icon, title, desc }, index) => {
            const featured = index === 1 || index === 3
            return (
              <article
                key={title}
                className="soft-card"
                style={{
                  padding: 24,
                  borderRadius: 28,
                  background: featured
                    ? "linear-gradient(180deg, rgba(17,17,17,.97), rgba(31,31,31,.95))"
                    : "linear-gradient(180deg, rgba(255,255,255,.96), rgba(248,244,236,.92))",
                  color: featured ? "var(--cream)" : "var(--fg)",
                  minHeight: 210,
                  border: featured ? "1px solid rgba(17,17,17,.92)" : "1px solid rgba(18,18,18,.08)",
                  boxShadow: featured ? "0 22px 40px rgba(18,18,18,.12)" : "var(--shadow)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 18,
                    display: "grid",
                    placeItems: "center",
                    background: featured ? "rgba(255,255,255,.08)" : "linear-gradient(180deg, rgba(201,164,106,.16), rgba(233,221,203,.18))",
                    color: featured ? "var(--cream)" : "var(--fg)",
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 style={{ marginTop: 18, fontSize: 21, lineHeight: 1.14, fontWeight: 800 }}>{title}</h3>
                <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.68, color: featured ? "rgba(255,255,255,.76)" : "var(--muted)" }}>
                  {desc}
                </p>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1120px) {
          #benefits > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #benefits {
            padding: 64px 16px !important;
          }
          #benefits .section-title {
            font-size: 34px !important;
          }
          #benefits > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin-top: 24px !important;
          }
          #benefits article {
            padding: 18px !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  )
}
