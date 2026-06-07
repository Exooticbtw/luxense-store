import { AlertTriangle, Clock3, MoonStar } from "lucide-react"

const PROBLEMS = [
  {
    Icon: AlertTriangle,
    title: "Harsh overhead light at night",
    text: "Rooms feel less refined when the only option is a bright ceiling light or a cheap plug-in night lamp.",
  },
  {
    Icon: Clock3,
    title: "Lighting that asks for attention",
    text: "Busy homes need lighting that works automatically instead of adding another switch to remember.",
  },
  {
    Icon: MoonStar,
    title: "Spaces that look unfinished",
    text: "Closets, hallways, and stair areas can feel abrupt without a small premium lighting detail.",
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
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Most motion lights solve the task, but they don&apos;t solve the look.
          </h2>
          <p style={{ marginTop: 18, color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }}>
            Luxense MotionGlow is designed for shoppers who want practical lighting without sacrificing a premium home aesthetic.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginTop: 34 }}>
          {PROBLEMS.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="soft-card"
              style={{
                padding: 24,
                borderRadius: 26,
                background: "rgba(255,255,255,.86)",
                minHeight: 220,
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 16, display: "grid", placeItems: "center", background: "rgba(17,17,17,.04)" }}>
                <Icon size={20} />
              </div>
              <h3 style={{ marginTop: 18, fontSize: 24, lineHeight: 1.1, fontWeight: 800 }}>{title}</h3>
              <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: "var(--muted)" }}>{text}</p>
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
          }
          #problem .section-title {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
