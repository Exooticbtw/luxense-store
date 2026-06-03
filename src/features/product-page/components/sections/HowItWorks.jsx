import { HOW_STEPS } from "../../data/productPageData.js"

export default function HowItWorks() {
  return (
    <section id="how" style={{ position: "relative", background: "var(--charcoal)", color: "var(--cream)", padding: "84px 24px", scrollMarginTop: 72, overflow: "hidden" }}>
      <div
        className="glow-anim"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 700,
          height: 700,
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          opacity: 0.22,
          background: "radial-gradient(closest-side, rgba(199,164,106,.6), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 56, maxWidth: 560 }}>
          <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(252,250,247,.58)", marginBottom: 10 }}>How it works</p>
          <h2 className="serif" style={{ fontSize: 42, lineHeight: 1.05, letterSpacing: "-0.03em", textWrap: "balance" }}>
            Three steps. Then forget it is there.
          </h2>
        </div>

        <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {HOW_STEPS.map(({ n, Icon, title, desc }, index) => (
            <div
              key={n}
              style={{
                borderRadius: 22,
                border: "1px solid rgba(255,255,255,.1)",
                background: "rgba(255,255,255,.04)",
                padding: 28,
                backdropFilter: "blur(8px)",
                transition: "background .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.07)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.04)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                <span className="serif" style={{ fontSize: 30, color: "rgba(252,250,247,.42)" }}>
                  {n}
                </span>
                <div style={{ position: "relative", width: 44, height: 44, borderRadius: 14, background: "var(--cream)", display: "grid", placeItems: "center", color: "var(--charcoal)" }}>
                  <Icon size={20} />
                  {index === 2 && <span className="glow-anim" style={{ position: "absolute", inset: -8, borderRadius: 18, border: "1px solid rgba(199,164,106,.34)" }} />}
                </div>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 13, color: "rgba(252,250,247,.72)", lineHeight: 1.75 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
