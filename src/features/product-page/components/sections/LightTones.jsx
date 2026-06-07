import { LIGHT_TONES } from "../../data/productPageData.js"

const TONE_VISUALS = [
  {
    eyebrow: "Warm ambiance",
    note: "Best for bedrooms, closets, and quiet evening routines.",
    overlay:
      "radial-gradient(circle at 20% 20%, rgba(201,164,106,.45), transparent 24%), radial-gradient(circle at 78% 28%, rgba(244,217,170,.42), transparent 24%), linear-gradient(180deg, #2d2216 0%, #6f4c2b 100%)",
  },
  {
    eyebrow: "Balanced task light",
    note: "A clear middle ground for kitchens, hallways, and everyday use.",
    overlay:
      "radial-gradient(circle at 24% 18%, rgba(255,255,255,.50), transparent 24%), radial-gradient(circle at 78% 28%, rgba(215,199,168,.34), transparent 24%), linear-gradient(180deg, #4a4946 0%, #b29d7d 100%)",
  },
  {
    eyebrow: "Bright visibility",
    note: "Ideal for stairs, entryways, and utility spaces that need more clarity.",
    overlay:
      "radial-gradient(circle at 20% 20%, rgba(255,255,255,.84), transparent 24%), radial-gradient(circle at 78% 28%, rgba(213,216,226,.40), transparent 24%), linear-gradient(180deg, #edf0f7 0%, #b5bfd1 100%)",
  },
]

export default function LightTones() {
  return (
    <section id="tones" style={{ padding: "86px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Light tones
          </p>
          <h2 className="serif section-title" style={{ fontSize: 58, maxWidth: 780 }}>
            Three tones, presented as visual lifestyle choices.
          </h2>
          <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.72, maxWidth: 720 }}>
            Choose the glow that feels right for the room. Each tone has a different mood, but all keep the same premium MotionGlow look.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            marginTop: 38,
          }}
        >
          {LIGHT_TONES.map((tone, index) => {
            const visual = TONE_VISUALS[index] || TONE_VISUALS[0]

            return (
              <article
                key={tone.title}
                className="soft-card"
                style={{
                  borderRadius: 30,
                  overflow: "hidden",
                  background: "rgba(255,255,255,.92)",
                  border: "1px solid rgba(18,18,18,.08)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    minHeight: 320,
                    background: visual.overlay,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 50% 58%, rgba(255,255,255,.20), transparent 24%), radial-gradient(circle at 50% 76%, rgba(18,18,18,.20), transparent 18%)",
                      opacity: 0.9,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 18,
                      top: 18,
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,.16)",
                      border: "1px solid rgba(255,255,255,.16)",
                      color: "white",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {visual.eyebrow}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      inset: "auto 18px 18px 18px",
                      display: "grid",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: 12,
                        borderRadius: 999,
                        background: tone.swatch,
                        boxShadow: "0 10px 28px rgba(18,18,18,.18)",
                      }}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.84)" }}>{tone.tone}</span>
                      <span style={{ fontSize: 13, fontWeight: 800, color: "white" }}>{tone.title}</span>
                    </div>
                  </div>

                  {/* TODO: Replace this stylized placeholder with a real reference image for the tone. */}
                </div>

                <div style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 24, lineHeight: 1.08, fontWeight: 800 }}>{tone.title}</h3>
                  <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: "var(--muted)" }}>{visual.note}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1120px) {
          #tones > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #tones {
            padding: 64px 16px !important;
          }
          #tones .section-title {
            font-size: 34px !important;
          }
          #tones > div > div:last-child {
            grid-template-columns: 1fr !important;
            margin-top: 24px !important;
            gap: 12px !important;
          }
          #tones article > div:first-child {
            min-height: 260px !important;
          }
          #tones article > div:last-child {
            padding: 18px !important;
          }
        }
      `}</style>
    </section>
  )
}
