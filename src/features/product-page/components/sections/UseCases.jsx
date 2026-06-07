import { USE_CASES } from "../../data/productPageData.js"

export default function UseCases() {
  return (
    <section id="use-cases" style={{ padding: "86px 24px", background: "var(--sec)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Use cases
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Built for the places where a little light makes a big difference.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16, marginTop: 38 }}>
          {USE_CASES.map(({ title, desc, Icon }) => (
            <article
              key={title}
              className="soft-card"
              style={{
                padding: 24,
                borderRadius: 26,
                background: "rgba(255,255,255,.86)",
                minHeight: 230,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 18,
                  background: "rgba(200,169,106,.12)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon size={22} />
              </div>
              <h3 style={{ marginTop: 18, fontSize: 24, lineHeight: 1.08, fontWeight: 800 }}>{title}</h3>
              <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: "var(--muted)" }}>{desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #use-cases > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #use-cases {
            padding: 64px 16px !important;
          }
          #use-cases > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #use-cases .section-title {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
