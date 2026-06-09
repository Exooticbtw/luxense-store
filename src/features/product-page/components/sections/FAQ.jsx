import { ChevronDown } from "lucide-react"
import { useState } from "react"

import { FAQS_DATA } from "../../data/productPageData.js"

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" style={{ padding: "96px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="soft-card"
          style={{
            padding: 28,
            borderRadius: 32,
            background: "linear-gradient(180deg, rgba(255,255,255,.94), rgba(248,243,234,.96))",
          }}
        >
          <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 34, alignItems: "start" }}>
            <div style={{ maxWidth: 520 }}>
              <p className="eyebrow" style={{ color: "var(--accent)" }}>
                FAQ
              </p>
              <h2 className="serif section-title" style={{ fontSize: "clamp(38px, 4vw, 56px)", maxWidth: 470 }}>
                Answers to the questions people usually ask before they buy.
              </h2>
              <p style={{ marginTop: 16, maxWidth: 460, fontSize: 16, lineHeight: 1.8, color: "var(--muted)" }}>
                Everything you need to know about MotionGlow™, from installation to everyday use.
              </p>

              <div
                style={{
                  marginTop: 22,
                  padding: 18,
                  borderRadius: 22,
                  border: "1px solid rgba(17,17,17,.08)",
                  background: "rgba(255,255,255,.72)",
                  boxShadow: "0 12px 30px rgba(17,17,17,.05)",
                }}
              >
                <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--muted)", fontWeight: 700 }}>
                  Need a hand?
                </div>
                <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.75, color: "var(--fg)" }}>
                  Still have questions? Contact our support team and we'll help you choose the right setup.
                </p>
              </div>
            </div>

            <div
              style={{
                borderRadius: 28,
                padding: 8,
                background: "rgba(255,255,255,.72)",
                border: "1px solid rgba(17,17,17,.08)",
                boxShadow: "0 18px 42px rgba(17,17,17,.06)",
              }}
            >
              {FAQS_DATA.map((item, index) => {
                const isOpen = open === index
                const panelId = `faq-panel-${index}`
                const buttonId = `faq-button-${index}`

                return (
                  <div
                    key={item.q}
                    style={{
                      borderRadius: 20,
                      border: isOpen ? "1px solid rgba(201,164,106,.45)" : "1px solid rgba(17,17,17,.08)",
                      background: isOpen
                        ? "linear-gradient(180deg, rgba(255,255,255,.98), rgba(248,243,234,.98))"
                        : "rgba(255,255,255,.72)",
                      boxShadow: isOpen ? "0 16px 34px rgba(17,17,17,.06)" : "none",
                      overflow: "hidden",
                      marginBottom: index === FAQS_DATA.length - 1 ? 0 : 12,
                    }}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? -1 : index)}
                      style={{
                        width: "100%",
                        border: "none",
                        background: "transparent",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 18,
                        textAlign: "left",
                        cursor: "pointer",
                        padding: "18px 18px",
                        minHeight: 80,
                      }}
                    >
                      <span style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.03em", color: "var(--fg)" }}>
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0,
                          border: "1px solid rgba(17,17,17,.08)",
                          background: isOpen ? "rgba(201,164,106,.15)" : "rgba(17,17,17,.03)",
                        }}
                      >
                        <ChevronDown
                          size={16}
                          style={{
                            color: isOpen ? "var(--fg)" : "var(--muted)",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform .2s ease, color .2s ease",
                            flexShrink: 0,
                          }}
                        />
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      style={{
                        maxHeight: isOpen ? 220 : 0,
                        overflow: "hidden",
                        transition: "max-height .24s ease",
                      }}
                    >
                      <p
                        style={{
                          padding: "0 18px 18px",
                          maxWidth: 820,
                          fontSize: 15.5,
                          lineHeight: 1.8,
                          color: "var(--muted)",
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #faq {
            padding: 64px 16px !important;
          }
          #faq > div > div {
            padding: 18px !important;
            border-radius: 26px !important;
          }
          #faq .section-title {
            font-size: 36px !important;
          }
          #faq .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
          #faq button span:first-child {
            font-size: 17px !important;
          }
          #faq button {
            padding: 16px 16px !important;
            min-height: 72px !important;
          }
          #faq p {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  )
}
