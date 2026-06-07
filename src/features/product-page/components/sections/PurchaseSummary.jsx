import { ArrowRight, Check, CreditCard, ShieldCheck } from "lucide-react"

import { BUNDLE_OPTIONS, COLORS } from "../../data/productPageData.js"

export default function PurchaseSummary({ shopData, purchase, selectedSize }) {
  const checkoutUrl = purchase?.buildCheckoutUrl?.(purchase?.qty || 1) || "#top"
  const selectedBundle = BUNDLE_OPTIONS.find((bundle) => bundle.quantity === purchase?.qty) || BUNDLE_OPTIONS[0]
  const selectedColor = COLORS[purchase?.colorIdx] || COLORS[0]
  const startingPrice = purchase?.total || (purchase?.price ? `$${Number(purchase.price).toFixed(2)}` : "$29.99")

  return (
    <section id="purchase-summary" style={{ padding: "0 24px 86px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div
          className="soft-card"
          style={{
            borderRadius: 28,
            overflow: "hidden",
            background: "rgba(255,255,255,.9)",
            border: "1px solid rgba(17,17,17,.08)",
            boxShadow: "0 20px 50px rgba(17,17,17,.08)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: ".98fr 1.02fr",
              gap: 0,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                padding: 28,
                background: "linear-gradient(180deg, rgba(17,17,17,.98), rgba(17,17,17,.92))",
                color: "var(--cream)",
              }}
            >
              <p className="eyebrow" style={{ color: "rgba(255,255,255,.62)" }}>
                Purchase area
              </p>
              <h3 className="serif" style={{ fontSize: 34, lineHeight: 1, fontWeight: 600 }}>
                Confirm your MotionGlow setup
              </h3>
              <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.72)", maxWidth: 520 }}>
                Review the bundle, finish, and size before continuing to checkout.
              </p>

              <div style={{ marginTop: 22, display: "grid", gap: 12 }}>
                {[
                  ["Selected bundle", selectedBundle?.label || "Buy 1"],
                  ["Selected color", selectedColor?.name || "White"],
                  ["Selected size", selectedSize || "30cm"],
                  ["Starting price", startingPrice],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 18,
                      padding: "12px 14px",
                      borderRadius: 16,
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.08)",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255,255,255,.72)",
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        fontWeight: 700,
                      }}
                    >
                      {label}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 800, textAlign: "right" }}>{value}</span>
                  </div>
                ))}
              </div>

              <a
                href={checkoutUrl}
                target={shopData?.shopDomain ? "_blank" : "_self"}
                rel={shopData?.shopDomain ? "noreferrer" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  minHeight: 58,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,.1)",
                  background: "var(--cream)",
                  color: "var(--fg)",
                  padding: "0 26px",
                  marginTop: 24,
                  fontSize: 15,
                  fontWeight: 900,
                  textDecoration: "none",
                }}
              >
                Continue to checkout <ArrowRight size={18} />
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 18,
                  color: "rgba(255,255,255,.76)",
                  fontSize: 12,
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                <ShieldCheck size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                Your selection carries straight into the checkout flow.
              </div>
            </div>

            <div style={{ padding: 28 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 12,
                }}
              >
                {[
                  { label: "White / Black", value: selectedColor?.name || "White" },
                  { label: "Available sizes", value: "20cm to 50cm" },
                  { label: "Light tones", value: "3 choices" },
                  { label: "Brightness", value: "Adjustable" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      minHeight: 86,
                      borderRadius: 18,
                      border: "1px solid rgba(17,17,17,.08)",
                      background: "rgba(17,17,17,.03)",
                      padding: "14px 14px",
                    }}
                  >
                    <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--muted)", fontWeight: 700 }}>
                      {item.label}
                    </div>
                    <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.35, fontWeight: 800 }}>{item.value}</div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 18,
                  padding: 18,
                  borderRadius: 20,
                  background: "rgba(17,17,17,.04)",
                  border: "1px solid rgba(17,17,17,.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--fg)", fontSize: 14, fontWeight: 800 }}>
                  <CreditCard size={16} style={{ color: "var(--accent)" }} />
                  Ready for the next step
                </div>
                <p style={{ marginTop: 8, fontSize: 13, lineHeight: 1.65, color: "var(--muted)" }}>
                  Confirm the finish, bundle, and size above, then continue in the next section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #purchase-summary > div > div > div {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 760px) {
          #purchase-summary {
            padding: 0 16px 64px !important;
          }
          #purchase-summary > div > div > div {
            grid-template-columns: 1fr !important;
          }
          #purchase-summary > div > div > div > div:first-child {
            padding: 20px !important;
          }
          #purchase-summary > div > div > div > div:last-child {
            padding: 20px !important;
          }
          #purchase-summary h3 {
            font-size: 28px !important;
          }
          #purchase-summary a {
            width: 100% !important;
          }
          #purchase-summary > div > div > div > div:last-child > div:first-child {
            grid-template-columns: 1fr !important;
          }
          #purchase-summary > div > div > div > div:last-child > div:first-child > div {
            min-height: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
