import { CheckCircle2, Star } from "lucide-react"

const METRICS = [
  {
    value: "94%",
    title: "Would recommend MotionGlow to a friend",
    tone: "A simple, elegant smart-lighting upgrade people feel good about sharing.",
  },
  {
    value: "91%",
    title: "Say installation took less than 2 minutes",
    tone: "Fast setup with no wiring, drilling, or complicated steps.",
  },
  {
    value: "89%",
    title: "Purchased additional units after their first order",
    tone: "A strong signal that one light turns into a whole-home solution.",
  },
  {
    value: "4.9/5",
    title: "Average customer rating",
    tone: "Trusted by thousands of homes looking for softer, smarter lighting.",
  },
]

export default function BundleOffers() {
  return (
    <section id="bundles" style={{ padding: "86px 24px", background: "var(--sec)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Customer confidence
          </p>
          <h2 className="serif section-title" style={{ fontSize: 58, maxWidth: 860 }}>
            Why 3,284+ Customers Chose MotionGlow
          </h2>
          <p style={{ marginTop: 14, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.72, maxWidth: 760 }}>
            A cleaner, easier way to add smart lighting, trusted by thousands of homes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 16,
            marginTop: 38,
          }}
        >
          {METRICS.map((metric) => (
            <article
              key={metric.title}
              className="soft-card"
              style={{
                borderRadius: 28,
                padding: 24,
                background: "linear-gradient(180deg, rgba(255,255,255,.96), rgba(248,243,235,.96))",
                border: "1px solid rgba(17,17,17,.08)",
                boxShadow: "0 18px 34px rgba(17,17,17,.06)",
                minHeight: 230,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, rgba(201,164,106,.20), rgba(143,174,138,.14))",
                    border: "1px solid rgba(201,164,106,.18)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--fg)",
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={20} />
                </div>
                <div
                  style={{
                    borderRadius: 999,
                    padding: "7px 10px",
                    background: "rgba(200,169,106,.12)",
                    color: "#36563a",
                    fontSize: 12,
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                  }}
                >
                  <Star size={12} style={{ display: "inline", marginRight: 6 }} />
                  Trusted
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <div className="serif" style={{ fontSize: 50, lineHeight: 0.95, fontWeight: 700, letterSpacing: "-0.06em" }}>
                  {metric.value}
                </div>
                <h3 style={{ marginTop: 14, fontSize: 24, lineHeight: 1.1, fontWeight: 800, maxWidth: 280 }}>{metric.title}</h3>
                <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.65, color: "var(--muted)" }}>{metric.tone}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          #bundles > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #bundles {
            padding: 64px 16px !important;
          }
          #bundles .section-title {
            font-size: 34px !important;
          }
          #bundles > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin-top: 28px !important;
          }
          #bundles article {
            padding: 20px !important;
            border-radius: 24px !important;
            min-height: auto !important;
          }
          #bundles article .serif {
            font-size: 42px !important;
          }
          #bundles article h3 {
            font-size: 22px !important;
            line-height: 1.12 !important;
          }
          #bundles article p {
            font-size: 14px !important;
            line-height: 1.55 !important;
          }
        }
      `}</style>
    </section>
  )
}
