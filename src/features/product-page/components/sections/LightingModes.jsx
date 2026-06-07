import { LIGHTING_MODES } from "../../data/productPageData.js"

export default function LightingModes() {
  return (
    <section id="lighting-modes" style={{ padding: "86px 24px", background: "var(--sec)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 680 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Lighting modes
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Smart behavior without a complicated interface.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginTop: 38 }}>
          {LIGHTING_MODES.map(({ Icon, title, desc }, index) => (
            <article
              key={title}
              className="soft-card"
              style={{
                padding: 26,
                borderRadius: 26,
                background: index === 0 ? "var(--fg)" : "rgba(255,255,255,.86)",
                color: index === 0 ? "var(--cream)" : "var(--fg)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 18,
                  background: index === 0 ? "rgba(255,255,255,.08)" : "rgba(200,169,106,.12)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon size={22} />
              </div>
              <h3 style={{ marginTop: 18, fontSize: 24, lineHeight: 1.08, fontWeight: 800 }}>{title}</h3>
              <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: index === 0 ? "rgba(255,255,255,.72)" : "var(--muted)" }}>
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #lighting-modes > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #lighting-modes {
            padding: 64px 16px !important;
          }
          #lighting-modes > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #lighting-modes .section-title {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
