import { ArrowRight, BatteryCharging, Lightbulb, Wrench } from "lucide-react"

const SOLUTIONS = [
  {
    Icon: Lightbulb,
    title: "Motion-ready",
    text: "Turns on when you need it.",
  },
  {
    Icon: BatteryCharging,
    title: "Rechargeable",
    text: "No wires, no hassle.",
  },
  {
    Icon: Wrench,
    title: "Sized to fit",
    text: "Multiple lengths for every space.",
  },
]

export default function SolutionSection({ onOpenCart }) {
  return (
    <section id="solution" style={{ padding: "0 24px 86px", background: "var(--sec)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 720 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Solution
          </p>
          <h2 className="serif section-title" style={{ fontSize: 58, maxWidth: 740 }}>
            Designed for real homes.
          </h2>
          <p style={{ marginTop: 14, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.7, maxWidth: 680 }}>
            Smart utility with a cleaner, more elevated finish.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginTop: 30 }}>
          {SOLUTIONS.map(({ Icon, title, text }, index) => (
            <article
              key={title}
              className="soft-card"
              style={{
                padding: 22,
                borderRadius: 28,
                background: index === 1 ? "rgba(17,17,17,.96)" : "rgba(255,255,255,.88)",
                color: index === 1 ? "var(--cream)" : "var(--fg)",
                minHeight: 196,
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 16, display: "grid", placeItems: "center", background: index === 1 ? "rgba(255,255,255,.08)" : "rgba(200,169,106,.12)" }}>
                <Icon size={20} />
              </div>
              <h3 style={{ marginTop: 16, fontSize: 21, lineHeight: 1.12, fontWeight: 800 }}>{title}</h3>
              <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.55, color: index === 1 ? "rgba(255,255,255,.76)" : "var(--muted)" }}>{text}</p>
            </article>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
          <button
            type="button"
            onClick={() => onOpenCart?.()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              minHeight: 56,
              borderRadius: 999,
              border: "1px solid var(--fg)",
              background: "var(--fg)",
              color: "var(--cream)",
              padding: "0 24px",
              fontSize: 15,
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Upgrade Your Home <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #solution > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #solution {
            padding: 0 16px 64px !important;
          }
          #solution > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin-top: 22px !important;
          }
          #solution .section-title {
            font-size: 34px !important;
          }
        }
      `}</style>
    </section>
  )
}
