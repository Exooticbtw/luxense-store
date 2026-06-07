import { BatteryCharging, Gauge, RotateCcw, ShieldCheck, Sparkles, Wrench } from "lucide-react"

import { HERO_HIGHLIGHTS, LIGHT_TONES, TECH_SPECS } from "../../data/productPageData.js"

const FEATURES = [
  { Icon: ShieldCheck, title: "Wireless install", text: "No wiring required, which keeps the product clean, fast to install, and easier to move later." },
  { Icon: BatteryCharging, title: "USB rechargeable", text: "Power up through USB so the product stays practical for modern homes and repeat use." },
  { Icon: RotateCcw, title: "Auto-off timing", text: "The motion experience stays calm and efficient with an automatic shutoff after inactivity." },
  { Icon: Gauge, title: "Adjustable brightness", text: "Set the output lower for ambiance or brighter for useful visibility, depending on the room." },
  { Icon: Sparkles, title: "Three light tones", text: "Warm, neutral, and white tones let you match the atmosphere of each space." },
  { Icon: Wrench, title: "Premium build feel", text: "A minimal profile and thoughtful finish help the light feel intentionally designed." },
]

export default function ProductFeatures() {
  return (
    <section id="features" style={{ padding: "0 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 720 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Product features
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Thoughtful details that make MotionGlow feel premium, not basic.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr .92fr", gap: 18, marginTop: 34, alignItems: "start" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
            {FEATURES.map(({ Icon, title, text }, index) => (
              <article
                key={title}
                className="soft-card"
                style={{
                  padding: 24,
                  borderRadius: 26,
                  background: index % 3 === 0 ? "rgba(17,17,17,.96)" : "rgba(255,255,255,.88)",
                  color: index % 3 === 0 ? "var(--cream)" : "var(--fg)",
                  minHeight: 220,
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 16, display: "grid", placeItems: "center", background: index % 3 === 0 ? "rgba(255,255,255,.08)" : "rgba(200,169,106,.12)" }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ marginTop: 18, fontSize: 22, lineHeight: 1.1, fontWeight: 800 }}>{title}</h3>
                <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: index % 3 === 0 ? "rgba(255,255,255,.76)" : "var(--muted)" }}>{text}</p>
              </article>
            ))}
          </div>

          <aside
            className="soft-card"
            style={{
              padding: 26,
              borderRadius: 28,
              background: "linear-gradient(180deg, rgba(17,17,17,.96), rgba(17,17,17,.92))",
              color: "var(--cream)",
            }}
          >
            <p className="eyebrow" style={{ color: "rgba(255,255,255,.62)" }}>
              Feature summary
            </p>
            <h3 className="serif" style={{ fontSize: 34, lineHeight: 1, fontWeight: 700, marginTop: 12 }}>
              Built for the ways people actually use light.
            </h3>
            <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
              {HERO_HIGHLIGHTS.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,.82)" }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 26, padding: 18, borderRadius: 22, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,.6)", fontWeight: 700 }}>
                Light tones
              </p>
              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                {LIGHT_TONES.map((tone) => (
                  <div key={tone.title} style={{ borderRadius: 18, overflow: "hidden", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
                    <div style={{ height: 56, background: tone.swatch }} />
                    <div style={{ padding: 12 }}>
                      <div style={{ fontSize: 14, fontWeight: 800 }}>{tone.title}</div>
                      <div style={{ marginTop: 4, fontSize: 12, color: "rgba(255,255,255,.68)" }}>{tone.tone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 18, padding: 18, borderRadius: 22, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,.6)", fontWeight: 700 }}>
                Key specs
              </p>
              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                {TECH_SPECS.slice(1, 8).map(([label, value]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 14, fontSize: 13, lineHeight: 1.4 }}>
                    <span style={{ color: "rgba(255,255,255,.62)" }}>{label}</span>
                    <span style={{ color: "rgba(255,255,255,.88)", textAlign: "right" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #features > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 760px) {
          #features {
            padding: 0 16px 64px !important;
          }
          #features .section-title {
            font-size: 40px !important;
          }
          #features > div > div:last-child > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
