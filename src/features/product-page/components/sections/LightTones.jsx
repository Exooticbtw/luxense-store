import { getMotionGlowContent } from "../../utils/motionGlowContent.js"

export default function LightTones({ shopData }) {
  const content = getMotionGlowContent(shopData ?? {})
  const tones = content.lightTones

  return (
    <section id="tones" style={{ padding: "86px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            {tones.lightTonesEyebrow}
          </p>
          <h2 className="serif section-title" style={{ fontSize: 58, maxWidth: 780 }}>
            {tones.lightTonesTitle}
          </h2>
          <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.72, maxWidth: 720 }}>
            {tones.lightTonesDescription}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginTop: 38 }}>
          {tones.items.map((tone) => (
            <article
              key={tone.key}
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
                  overflow: "hidden",
                  background: "linear-gradient(180deg, #2a2a2a 0%, #101010 100%)",
                }}
              >
                {tone.image ? (
                  <img
                    src={tone.image}
                    alt={tone.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                  />
                ) : null}
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
                  {tone.text}
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
                      background:
                        tone.key === "warm"
                          ? "linear-gradient(135deg, #f4d9aa, #c89a59)"
                          : tone.key === "neutral"
                            ? "linear-gradient(135deg, #f7f2e8, #d7c7a8)"
                            : "linear-gradient(135deg, #ffffff, #d5d8e2)",
                      boxShadow: "0 10px 28px rgba(18,18,18,.18)",
                    }}
                  />
                  <div style={{ display: "grid", gap: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "white" }}>{tone.title}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.84)" }}>{tone.description}</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 24, lineHeight: 1.08, fontWeight: 800 }}>{tone.title}</h3>
                <p style={{ marginTop: 8, fontSize: 15, lineHeight: 1.7, color: "var(--muted)" }}>{tone.description}</p>
              </div>
            </article>
          ))}
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
