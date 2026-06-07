import { HOW_STEPS } from "../../data/productPageData.js"

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "86px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            How it works
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Three simple steps, then it quietly takes care of the room.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginTop: 38 }}>
          {HOW_STEPS.map(({ n, Icon, title, desc }) => (
            <article
              key={n}
              className="soft-card"
              style={{
                padding: 26,
                borderRadius: 28,
                background: "rgba(255,255,255,.86)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "start" }}>
                <div className="serif" style={{ fontSize: 30, lineHeight: 1, color: "var(--accent)" }}>
                  {n}
                </div>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 16,
                    background: "rgba(200,169,106,.12)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Icon size={20} />
                </div>
              </div>
              <h3 style={{ marginTop: 18, fontSize: 24, lineHeight: 1.1, fontWeight: 800 }}>{title}</h3>
              <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: "var(--muted)" }}>{desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #how-it-works > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #how-it-works {
            padding: 64px 16px !important;
          }
          #how-it-works > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #how-it-works .section-title {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
