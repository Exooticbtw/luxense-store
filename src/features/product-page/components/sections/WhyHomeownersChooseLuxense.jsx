import { CheckCircle2, Sparkles, ShieldCheck, Star } from "lucide-react"

import { getMotionGlowContent } from "../../utils/motionGlowContent.js"

const ICONS = [Sparkles, CheckCircle2, ShieldCheck, Star]

export default function WhyHomeownersChooseLuxense({ shopData }) {
  const content = getMotionGlowContent(shopData ?? {})
  const whyChoose = content.whyChoose

  return (
    <section id="luxense-trust" style={{ padding: "0 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 820 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Why homeowners choose Luxense
          </p>
          <h2 className="serif section-title" style={{ fontSize: 58, maxWidth: 820 }}>
            {whyChoose.whyTitle}
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16, marginTop: 30 }}>
          {whyChoose.items.map((card, index) => {
            const Icon = ICONS[index % ICONS.length]

            return (
              <article
                key={card.title}
                className="soft-card"
                style={{
                  borderRadius: 24,
                  padding: 22,
                  background: "linear-gradient(180deg, rgba(255,255,255,.96), rgba(248,243,235,.96))",
                  border: "1px solid rgba(17,17,17,.08)",
                  boxShadow: "0 16px 34px rgba(17,17,17,.06)",
                  minHeight: 178,
                }}
              >
                <div style={{ width: 46, height: 46, borderRadius: 16, background: "linear-gradient(135deg, rgba(201,164,106,.16), rgba(143,174,138,.12))", border: "1px solid rgba(201,164,106,.18)", display: "grid", placeItems: "center", color: "var(--fg)" }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ marginTop: 18, fontSize: 22, lineHeight: 1.08, fontWeight: 800 }}>{card.title}</h3>
                <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.65, color: "var(--muted)" }}>{card.text}</p>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #luxense-trust > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #luxense-trust {
            padding: 0 16px 64px !important;
          }
          #luxense-trust .section-title {
            font-size: 34px !important;
          }
          #luxense-trust > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          #luxense-trust article {
            padding: 20px !important;
            min-height: auto !important;
          }
          #luxense-trust article h3 {
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
