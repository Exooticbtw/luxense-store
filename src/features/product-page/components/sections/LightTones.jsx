import { LIGHT_TONES } from "../../data/productPageData.js"

export default function LightTones() {
  return (
    <section id="tones" style={{ padding: "86px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            3 light tones
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Choose the tone that matches the feeling of the room.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginTop: 38 }}>
          {LIGHT_TONES.map((tone) => (
            <article
              key={tone.title}
              className="soft-card"
              style={{
                borderRadius: 28,
                overflow: "hidden",
                background: "rgba(255,255,255,.86)",
              }}
            >
              <div style={{ height: 178, background: tone.swatch }} />
              <div style={{ padding: 24 }}>
                <div style={{ display: "inline-flex", borderRadius: 999, background: "rgba(17,17,17,.04)", padding: "6px 10px", fontSize: 12, fontWeight: 800, color: "var(--muted)" }}>
                  {tone.tone}
                </div>
                <h3 style={{ marginTop: 14, fontSize: 24, lineHeight: 1.08, fontWeight: 800 }}>{tone.title}</h3>
                <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: "var(--muted)" }}>{tone.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #tones > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #tones {
            padding: 64px 16px !important;
          }
          #tones > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #tones .section-title {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
