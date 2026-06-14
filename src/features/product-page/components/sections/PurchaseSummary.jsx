import { ArrowRight, CreditCard, ShieldCheck } from "lucide-react"

import { COLORS, PRODUCT_NAME, getPriceSummary } from "../../data/productPageData.js"

export default function PurchaseSummary({ shopData, purchase, selectedSize, quantity: quantityProp }) {
  const quantity = Number.isFinite(Number(quantityProp ?? purchase?.qty)) && Number(quantityProp ?? purchase?.qty) > 0
    ? Number(quantityProp ?? purchase?.qty)
    : 1
  const checkoutUrl = purchase?.buildCheckoutUrl?.(quantity) || "#top"
  const unitPrice = purchase?.selectedVariantPrice ?? purchase?.price ?? 0
  const selectedBundle = getPriceSummary(quantity, unitPrice)
  const selectedColor = COLORS[purchase?.colorIdx] || COLORS[0]
  const currentTotal = selectedBundle?.totalFormatted || purchase?.totalFormatted || purchase?.priceFormatted || ""
  const savingsText = selectedBundle?.savingsText || "No bundle savings"

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
                padding: 24,
                background: "linear-gradient(180deg, rgba(17,17,17,.98), rgba(17,17,17,.92))",
                color: "var(--cream)",
              }}
            >
              <p className="eyebrow" style={{ color: "rgba(255,255,255,.62)" }}>
                Order summary
              </p>
              <h3 className="serif" style={{ fontSize: 30, lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.04em" }}>
                Review your {PRODUCT_NAME} order
              </h3>
              <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,.72)", maxWidth: 520 }}>
                Review the total, finish, and size before continuing to checkout.
              </p>

              <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
                {[
                  ["Total", currentTotal],
                  ["Quantity", String(quantity)],
                  ["Bundle", selectedBundle?.bundleLabel || selectedBundle?.summaryLabel || selectedBundle?.label || "Buy 1"],
                  ["Savings", savingsText],
                  ["Color", selectedColor?.name || "White"],
                  ["Size", selectedSize || "30cm"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "10px 12px",
                      borderRadius: 14,
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.08)",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255,255,255,.72)",
                        fontSize: 10.5,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        fontWeight: 700,
                        lineHeight: 1.35,
                      }}
                    >
                      {label}
                    </span>
                    <span style={{ fontSize: 14.5, lineHeight: 1.35, fontWeight: 600, textAlign: "right" }}>{value}</span>
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
                  minHeight: 52,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,.1)",
                  background: "var(--cream)",
                  color: "var(--fg)",
                  padding: "0 22px",
                  marginTop: 20,
                  fontSize: 15.5,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
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
                  marginTop: 14,
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
                  gap: 10,
                }}
              >
                {[
                  { label: "White / Black", value: selectedColor?.name || "White" },
                  { label: "Available sizes", value: "20cm to 50cm" },
                  { label: "Light tones", value: "Warm + Neutral + White included" },
                  { label: "Brightness", value: "Adjustable" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      minHeight: 80,
                      borderRadius: 16,
                      border: "1px solid rgba(17,17,17,.08)",
                      background: "rgba(17,17,17,.03)",
                      padding: "12px 12px",
                    }}
                  >
                    <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--muted)", fontWeight: 700, lineHeight: 1.35 }}>
                      {item.label}
                    </div>
                    <div style={{ marginTop: 7, fontSize: 14.5, lineHeight: 1.4, fontWeight: 600 }}>{item.value}</div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 16,
                  padding: 16,
                  borderRadius: 18,
                  background: "rgba(17,17,17,.04)",
                  border: "1px solid rgba(17,17,17,.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--fg)", fontSize: 13.5, fontWeight: 700, lineHeight: 1.4 }}>
                  <CreditCard size={16} style={{ color: "var(--accent)" }} />
                  Ready for the next step
                </div>
                <p style={{ marginTop: 8, fontSize: 12.5, lineHeight: 1.6, color: "var(--muted)" }}>
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
            padding: 18px !important;
          }
          #purchase-summary > div > div > div > div:last-child {
            padding: 18px !important;
          }
          #purchase-summary h3 {
            font-size: 26px !important;
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
