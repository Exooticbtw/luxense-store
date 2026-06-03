import { Check, X } from "lucide-react"
import { STATS, WHY_ROWS } from "../../data/productPageData.js"

export default function WhyUs() {
  return (
    <section id="story" style={{ background: "rgba(255,255,255,0.35)", padding: "84px 24px", scrollMarginTop: 72 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 48, maxWidth: 560 }}>
          <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--muted)", marginBottom: 10 }}>Our story</p>
          <h2 className="serif" style={{ fontSize: 42, lineHeight: 1.05, letterSpacing: "-0.03em", textWrap: "balance" }}>
            The difference is in the details.
          </h2>
        </div>

        <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40 }}>
          <div style={{ borderRadius: 22, border: "1px solid var(--border)", overflow: "hidden", background: "rgba(255,255,255,0.86)", boxShadow: "var(--shadow)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "1px solid var(--border)", background: "var(--sec)", padding: "14px 24px", fontSize: 13, fontWeight: 700 }}>
              <div>Feature</div>
              <div style={{ textAlign: "center" }}>Luxense</div>
              <div style={{ textAlign: "center", color: "var(--muted)" }}>Generic LED</div>
            </div>
            {WHY_ROWS.map((row, index) => (
              <div
                key={row.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  alignItems: "center",
                  padding: "14px 24px",
                  fontSize: 13,
                  background: index % 2 ? "rgba(247,241,232,.45)" : "transparent",
                }}
              >
                <div>{row.label}</div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(199,164,106,.2)", display: "grid", placeItems: "center" }}>
                    <Check size={15} style={{ color: "var(--accent)" }} />
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "center", color: "var(--muted)" }}>
                  {row.them === false ? (
                    <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--sec)", display: "grid", placeItems: "center" }}>
                      <X size={15} />
                    </span>
                  ) : (
                    <span style={{ fontSize: 12 }}>{row.them}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {STATS.map((stat) => (
              <div
                key={stat.l}
                style={{
                  borderRadius: 22,
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.86)",
                  padding: 24,
                  transition: "all .25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)"
                  e.currentTarget.style.boxShadow = "var(--shadow)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <div className="serif" style={{ fontSize: 36, letterSpacing: "-0.03em" }}>
                  {stat.v}
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
