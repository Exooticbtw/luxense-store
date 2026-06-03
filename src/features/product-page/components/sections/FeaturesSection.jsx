import { FEATURES_DATA } from "../../data/productPageData.js"

export default function FeaturesSection() {
  return (
    <section id="features" style={{ background: "rgba(255,255,255,0.35)", padding: "84px 24px", scrollMarginTop: 72 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 48, maxWidth: 620 }}>
          <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--muted)", marginBottom: 10 }}>Engineered for living</p>
          <h2 className="serif" style={{ fontSize: 42, lineHeight: 1.05, letterSpacing: "-0.03em", textWrap: "balance" }}>
            Quietly intelligent. Beautifully simple.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
          {FEATURES_DATA.map(({ Icon, title, desc }, index) => (
            <div
              key={title}
              className="fade-up"
              style={{
                animationDelay: `${index * 70}ms`,
                borderRadius: 22,
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.82)",
                padding: 24,
                transition: "all .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)"
                e.currentTarget.style.boxShadow = "var(--shadow)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--fg)", color: "var(--bg)", display: "grid", placeItems: "center", marginBottom: 18 }}>
                <Icon size={20} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.75 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
