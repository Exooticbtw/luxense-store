import { useState } from "react"
import { ChevronDown } from "lucide-react"

const questions = [
  {
    q: "How does the motion sensor work?",
    a: "It detects nearby movement and turns the light on automatically, then fades off after the space is quiet again.",
  },
  {
    q: "How long does the battery last?",
    a: "Most homes get weeks of use per charge, depending on traffic and brightness settings.",
  },
  {
    q: "How do I install it?",
    a: "Use the included magnetic mount. Place the adhesive base, snap the light on, and remove it anytime for charging.",
  },
  {
    q: "Is the light warm or cool?",
    a: "It uses a warm ambient glow designed for bedrooms, closets, hallways, and kitchens.",
  },
  {
    q: "What's your guarantee?",
    a: "Every order is backed by a 30-day love-it-or-return-it guarantee and a 2-year warranty. If anything isn't right, our support team responds within hours.",
  },
]

export default function FAQ({ theme }) {
  const [open, setOpen] = useState(4)
  const editableQuestions = questions.map((item, index) => ({
    q: theme?.[`faqQuestion${index + 1}`] || item.q,
    a: theme?.[`faqAnswer${index + 1}`] || item.a,
  }))

  return (
    <section id="faq" style={{ background: "var(--bg)", padding: "94px 24px 106px", scrollMarginTop: 72 }}>
      <div style={{ maxWidth: 940, margin: "0 auto", textAlign: "center" }}>
        <p className="eyebrow" style={{ color: "var(--accent)" }}>
          {theme?.faqEyebrow || "Questions"}
        </p>
        <h2 className="serif" style={{ fontSize: 66, lineHeight: 1.05, fontWeight: 600 }}>
          {theme?.faqTitle || "Everything you need to know"}
        </h2>
      </div>

      <div style={{ maxWidth: 920, margin: "62px auto 0" }}>
        {editableQuestions.map((item, index) => {
          const isOpen = open === index

          return (
            <div key={item.q} style={{ borderBottom: "1px solid var(--border)" }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                style={{
                  width: "100%",
                  minHeight: 86,
                  border: "none",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 24,
                  padding: "0 0",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span className="serif" style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 600 }}>
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    color: "var(--muted)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform .2s ease",
                    flexShrink: 0,
                  }}
                />
              </button>
              {isOpen && (
                <p style={{ maxWidth: 760, color: "var(--muted)", fontSize: 18, lineHeight: 1.55, padding: "0 0 28px" }}>
                  {item.a}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 760px) {
          #faq {
            padding: 64px 16px 78px !important;
          }
          #faq h2 {
            font-size: 42px !important;
          }
          #faq button span {
            font-size: 22px !important;
          }
        }
      `}</style>
    </section>
  )
}
