import { Check, Minus } from "lucide-react"

import { getMotionGlowContent } from "../../utils/motionGlowContent.js"

export default function ComparisonTable({ shopData }) {
  const content = getMotionGlowContent(shopData)
  const comparison = content.comparison
  const comparisonRows = Array.isArray(comparison.rows)
    ? comparison.rows.map((row) => ({
        feature: row?.feature ?? "",
        luxense: row?.luxense ?? "",
        standard: row?.standard ?? "",
      })).filter((row) => row.feature)
    : []

  return (
    <section id="compare" style={{ padding: "96px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div className="soft-card" style={{ padding: 28, borderRadius: 34, background: "linear-gradient(180deg, rgba(255,255,255,.95), rgba(248,243,234,.98))", border: "1px solid rgba(17,17,17,.08)" }}>
          <div style={{ maxWidth: 760 }}>
            <p className="eyebrow" style={{ color: "var(--accent)" }}>
              {comparison.comparisonEyebrow}
            </p>
            <h2 className="serif section-title" style={{ fontSize: "clamp(40px, 4vw, 58px)", maxWidth: 760 }}>
              {comparison.comparisonTitle}
            </h2>
            <p style={{ marginTop: 16, maxWidth: 720, fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)" }}>
              {comparison.comparisonDescription}
            </p>
          </div>

          <div className="compare-table-shell" style={{ marginTop: 28 }}>
            <div className="compare-table" style={{ borderRadius: 30, overflow: "hidden", border: "1px solid rgba(17,17,17,.08)", background: "rgba(255,255,255,.86)", boxShadow: "0 20px 44px rgba(17,17,17,.06)" }}>
              <div className="compare-head" style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr 1fr", gap: 0, padding: "18px 22px", borderBottom: "1px solid rgba(17,17,17,.08)", background: "linear-gradient(180deg, rgba(17,17,17,.04), rgba(17,17,17,.02))", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)" }}>
                <div>Feature</div>
                <div style={{ textAlign: "center", color: "var(--fg)" }}>Luxense MotionGlow™</div>
                <div style={{ textAlign: "center" }}>Standard Motion Lights</div>
              </div>

              <div className="compare-rows" style={{ display: "grid" }}>
                {comparisonRows.map((row, index) => (
                  <div key={row.feature} className="compare-row" style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr 1fr", gap: 0, padding: "18px 22px", borderBottom: index < comparisonRows.length - 1 ? "1px solid rgba(17,17,17,.06)" : "none", background: index % 2 ? "rgba(17,17,17,.012)" : "transparent", alignItems: "center" }}>
                    <div style={{ paddingRight: 18 }}>
                      <div style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.35, letterSpacing: "-0.02em" }}>{row.feature}</div>
                    </div>

                    <div style={{ padding: "0 12px" }}>
                      <div style={{ borderRadius: 18, padding: "12px 14px", background: "linear-gradient(180deg, rgba(201,164,106,.14), rgba(255,255,255,.94))", border: "1px solid rgba(201,164,106,.30)", boxShadow: "0 12px 24px rgba(17,17,17,.05)", minHeight: 64, display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(201,164,106,.16)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                          <Check size={16} style={{ color: "var(--fg)" }} />
                        </span>
                        <div style={{ fontSize: 14.5, lineHeight: 1.5, fontWeight: 700, color: "var(--fg)" }}>{row.luxense}</div>
                      </div>
                    </div>

                    <div style={{ padding: "0 12px" }}>
                      <div style={{ borderRadius: 18, padding: "12px 14px", background: "rgba(17,17,17,.03)", border: "1px solid rgba(17,17,17,.08)", minHeight: 64, display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(17,17,17,.06)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                          <Minus size={16} style={{ color: "var(--muted)" }} />
                        </span>
                        <div style={{ fontSize: 14.5, lineHeight: 1.5, fontWeight: 700, color: "var(--muted)" }}>{row.standard}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="compare-mobile" style={{ display: "none", marginTop: 28 }}>
            {comparisonRows.map((row) => (
              <article key={row.feature} style={{ borderRadius: 24, overflow: "hidden", border: "1px solid rgba(17,17,17,.08)", background: "rgba(255,255,255,.88)", boxShadow: "0 16px 34px rgba(17,17,17,.06)", marginBottom: 12 }}>
                <div style={{ padding: "16px 16px 12px", background: "linear-gradient(180deg, rgba(17,17,17,.03), rgba(255,255,255,.8))", borderBottom: "1px solid rgba(17,17,17,.06)" }}>
                  <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--muted)", fontWeight: 800 }}>
                    Feature
                  </div>
                  <div style={{ marginTop: 8, fontSize: 18, fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.03em" }}>{row.feature}</div>
                </div>

                <div style={{ display: "grid" }}>
                  <div style={{ padding: 16, borderBottom: "1px solid rgba(17,17,17,.06)", background: "linear-gradient(180deg, rgba(201,164,106,.10), rgba(255,255,255,.95))" }}>
                    <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--accent)", fontWeight: 800 }}>
                      Luxense MotionGlow™
                    </div>
                    <div style={{ marginTop: 8, display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(201,164,106,.16)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                        <Check size={15} style={{ color: "var(--fg)" }} />
                      </span>
                      <div style={{ fontSize: 14.5, lineHeight: 1.55, fontWeight: 700, color: "var(--fg)" }}>{row.luxense}</div>
                    </div>
                  </div>

                  <div style={{ padding: 16, background: "rgba(17,17,17,.02)" }}>
                    <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--muted)", fontWeight: 800 }}>
                      Standard motion lights
                    </div>
                    <div style={{ marginTop: 8, display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(17,17,17,.06)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                        <Minus size={15} style={{ color: "var(--muted)" }} />
                      </span>
                      <div style={{ fontSize: 14.5, lineHeight: 1.55, fontWeight: 700, color: "var(--muted)" }}>{row.standard}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #compare {
            padding: 64px 16px !important;
          }
          #compare > div > div:first-child {
            padding: 18px !important;
            border-radius: 28px !important;
          }
          #compare .section-title {
            font-size: 36px !important;
          }
          #compare .compare-table {
            display: none !important;
          }
          #compare .compare-mobile {
            display: block !important;
          }
        }
      `}</style>
    </section>
  )
}
