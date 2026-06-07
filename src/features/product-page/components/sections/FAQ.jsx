import { ChevronDown } from "lucide-react"
import { useState } from "react"

import { FAQS_DATA } from "../../data/productPageData.js"

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" style={{ padding: "86px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            FAQ
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Answers to the questions people usually ask before they buy.
          </h2>
        </div>

        <div style={{ marginTop: 38 }}>
          {FAQS_DATA.map((item, index) => {
            const isOpen = open === index

            return (
              <div key={item.q} style={{ borderBottom: "1px solid rgba(17,17,17,.08)" }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  style={{
                    width: "100%",
                    minHeight: 84,
                    border: "none",
                    background: "transparent",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 18,
                    textAlign: "left",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <span style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.2 }}>{item.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: "var(--muted)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform .2s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>
                {isOpen && (
                  <p style={{ padding: "0 0 24px", maxWidth: 800, fontSize: 16, lineHeight: 1.75, color: "var(--muted)" }}>
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #faq {
            padding: 64px 16px !important;
          }
          #faq .section-title {
            font-size: 40px !important;
          }
          #faq button span {
            font-size: 18px !important;
          }
        }
      `}</style>
    </section>
  )
}
