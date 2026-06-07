import { AlertTriangle, Clock3, MoonStar } from "lucide-react"

const PROBLEMS = [
  {
    Icon: AlertTriangle,
    title: "Soft at night",
    text: "No harsh glare after dark.",
  },
  {
    Icon: Clock3,
    title: "Quiet by design",
    text: "Clean light without visual clutter.",
  },
  {
    Icon: MoonStar,
    title: "Made to fit in",
    text: "Looks intentional in modern homes.",
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" style={{ padding: "0 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 720 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Problem
          </p>
          <h2 className="serif section-title" style={{ fontSize: 58, maxWidth: 740 }}>
            Looks better. Works smarter.
          </h2>
          <p style={{ marginTop: 14, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.7, maxWidth: 680 }}>
            Lighting that blends into modern spaces, not against them.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginTop: 30 }}>
          {PROBLEMS.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="soft-card"
              style={{
                padding: 22,
                borderRadius: 28,
                background: "rgba(255,255,255,.86)",
                minHeight: 196,
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 16, display: "grid", placeItems: "center", background: "rgba(17,17,17,.04)" }}>
                <Icon size={20} />
              </div>
              <h3 style={{ marginTop: 16, fontSize: 21, lineHeight: 1.12, fontWeight: 800 }}>{title}</h3>
              <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.55, color: "var(--muted)" }}>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #problem > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #problem {
            padding: 0 16px 64px !important;
          }
          #problem > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin-top: 22px !important;
          }
          #problem .section-title {
            font-size: 34px !important;
          }
        }
      `}</style>
    </section>
  )
}
