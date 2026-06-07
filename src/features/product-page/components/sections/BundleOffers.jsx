import { ArrowRight, Check, ShieldCheck } from "lucide-react"

import { BUNDLE_OPTIONS, getBundleOfferForQuantity } from "../../data/productPageData.js"
import QuantityStepper from "../common/QuantityStepper.jsx"

export default function BundleOffers({ onSelectBundle, onOpenCart, bundleSummary, quantity = 1, onChangeQuantity }) {
  const activeSummary = bundleSummary || getBundleOfferForQuantity(quantity)

  return (
    <section id="bundles" style={{ padding: "86px 24px", background: "var(--sec)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "flex-end", flexWrap: "wrap" }}>
          <div style={{ maxWidth: 680 }}>
            <p className="eyebrow" style={{ color: "var(--accent)" }}>
              Bundle offers
            </p>
            <h2 className="serif section-title" style={{ fontSize: 58, maxWidth: 760 }}>
              Flexible quantities, with bundle pricing when it matters.
            </h2>
            <p style={{ marginTop: 14, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.7, maxWidth: 680 }}>
              Pick the bundle that fits your home, then fine-tune the quantity below. The subtotal always updates honestly.
            </p>
          </div>

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
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Continue shopping <ArrowRight size={17} />
          </button>
        </div>

        <div
          className="bundle-card-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            marginTop: 38,
          }}
        >
          {BUNDLE_OPTIONS.map((bundle) => {
            const selected = activeSummary?.selectedBundleQuantity === bundle.quantity
            const featured = bundle.quantity === 2
            const bestValue = bundle.quantity === 4

            return (
              <article
                key={bundle.label}
                className="soft-card"
                style={{
                  borderRadius: 28,
                  padding: 24,
                  background: selected
                    ? bestValue
                      ? "linear-gradient(180deg, rgba(17,17,17,.98), rgba(33,31,27,.96))"
                      : "linear-gradient(180deg, rgba(201,164,106,.14), rgba(255,255,255,.96))"
                    : featured
                      ? "linear-gradient(180deg, rgba(201,164,106,.08), rgba(255,255,255,.96))"
                      : "rgba(255,255,255,.88)",
                  color: selected && bestValue ? "var(--cream)" : "var(--fg)",
                  border: selected
                    ? "1px solid rgba(201,164,106,.72)"
                    : bestValue
                      ? "1px solid rgba(201,164,106,.24)"
                      : "1px solid rgba(17,17,17,.08)",
                  boxShadow: selected && bestValue ? "0 22px 44px rgba(17,17,17,.14)" : "var(--shadow)",
                  transform: selected ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                  <div>
                    <p
                      style={{
                        fontSize: 11.5,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: selected && bestValue ? "rgba(255,255,255,.62)" : "var(--muted)",
                        fontWeight: 800,
                      }}
                    >
                      {bundle.badge || "Single room"}
                    </p>
                    <h3 style={{ marginTop: 10, fontSize: 26, lineHeight: 1.08, fontWeight: 800 }}>
                      {bundle.label}
                    </h3>
                    <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.55, color: selected && bestValue ? "rgba(255,255,255,.74)" : "var(--muted)" }}>
                      {bundle.useCase}
                    </p>
                  </div>
                  <div
                    style={{
                      borderRadius: 999,
                      padding: "7px 12px",
                      background: selected && bestValue ? "rgba(255,255,255,.1)" : bestValue ? "rgba(201,164,106,.12)" : "rgba(143,174,138,.12)",
                      color: selected && bestValue ? "var(--cream)" : bestValue ? "var(--fg)" : "#36563a",
                      fontSize: 13,
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {bundle.savings}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                  <span className="serif" style={{ fontSize: 42, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.05em" }}>
                    ${bundle.price.toFixed(2)}
                  </span>
                  <span
                    style={{
                      color: selected && bestValue ? "rgba(255,255,255,.62)" : "var(--muted)",
                      textDecoration: "line-through",
                      fontSize: 18,
                    }}
                  >
                    ${bundle.compareAt.toFixed(2)}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    flexWrap: "wrap",
                    marginTop: 16,
                    color: selected && bestValue ? "rgba(255,255,255,.72)" : "var(--muted)",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      borderRadius: 999,
                      padding: "6px 10px",
                      background: selected && bestValue ? "rgba(255,255,255,.1)" : "rgba(200,169,106,.12)",
                    }}
                  >
                    {selected ? "Selected" : bestValue ? "Best value" : featured ? "Recommended" : "Easy compare"}
                  </span>
                  <span>{bundle.useCase}</span>
                </div>

                <ul style={{ listStyle: "none", display: "grid", gap: 10, marginTop: 22 }}>
                  {[
                    `Includes ${bundle.quantity} MotionGlow light${bundle.quantity > 1 ? "s" : ""}`,
                    "Motion sensing and USB charging",
                    "Premium finish for modern interiors",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                        color: selected && bestValue ? "rgba(255,255,255,.86)" : "var(--fg)",
                      }}
                    >
                      <Check size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => {
                    onSelectBundle?.(bundle.quantity)
                    onOpenCart?.()
                  }}
                  style={{
                    width: "100%",
                    minHeight: 58,
                    marginTop: 24,
                    borderRadius: 999,
                    border: "1px solid rgba(17,17,17,.08)",
                    background: selected && bestValue ? "var(--cream)" : "var(--fg)",
                    color: selected && bestValue ? "var(--fg)" : "var(--cream)",
                    fontSize: 15,
                    fontWeight: 800,
                    cursor: "pointer",
                    boxShadow: selected && bestValue ? "0 12px 26px rgba(255,255,255,.12)" : "none",
                  }}
                >
                  {selected ? "Selected bundle" : "Select bundle"}
                </button>
              </article>
            )
          })}
        </div>

        <div
          className="bundle-stepper-row"
          style={{
            marginTop: 22,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 16,
            alignItems: "center",
            padding: 18,
            borderRadius: 24,
            background: "rgba(255,255,255,.84)",
            border: "1px solid rgba(17,17,17,.08)",
            boxShadow: "0 16px 30px rgba(17,17,17,.06)",
          }}
        >
          <div style={{ display: "grid", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", color: "var(--muted)", fontSize: 13, fontWeight: 700 }}>
              <ShieldCheck size={16} style={{ color: "var(--accent)" }} />
              Free shipping, secure checkout, and a 30-day guarantee are included with every bundle.
            </div>
            <div style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.55 }}>
              Need a custom quantity? Use the stepper and the subtotal will update instantly without any misleading discount.
            </div>
          </div>
          <QuantityStepper value={quantity} onChange={onChangeQuantity} />
        </div>

        <div
          className="bundle-selection-summary"
          style={{
            marginTop: 16,
            padding: 16,
            borderRadius: 22,
            background: "linear-gradient(135deg, rgba(201,164,106,.12), rgba(143,174,138,.08))",
            border: "1px solid rgba(201,164,106,.18)",
            display: "flex",
            justifyContent: "space-between",
            gap: 14,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 800 }}>
              Current selection
            </div>
            <div style={{ marginTop: 6, fontSize: 15, fontWeight: 800 }}>
              {activeSummary?.summaryLabel || activeSummary?.label || "Buy 1"} · {quantity} unit{quantity > 1 ? "s" : ""}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 800 }}>
              Current total
            </div>
            <div className="serif" style={{ marginTop: 6, fontSize: 28, fontWeight: 700, letterSpacing: "-0.05em" }}>
              ${Number(activeSummary?.subtotal ?? activeSummary?.price ?? 29.99).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1120px) {
          #bundles .bundle-card-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #bundles {
            padding: 60px 16px 56px !important;
          }
          #bundles > div > div:first-child {
            align-items: flex-start !important;
          }
          #bundles > div > div:first-child > a {
            width: 100% !important;
            min-height: 52px !important;
          }
          #bundles .bundle-card-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin-top: 24px !important;
          }
          #bundles .section-title {
            font-size: 34px !important;
          }
          #bundles article {
            padding: 18px !important;
            border-radius: 22px !important;
          }
          #bundles article h3 {
            font-size: 22px !important;
            line-height: 1.12 !important;
          }
          #bundles article .serif {
            font-size: 34px !important;
          }
          #bundles article button {
            min-height: 56px !important;
            font-size: 15px !important;
          }
          #bundles article p,
          #bundles article li,
          #bundles article span {
            line-height: 1.5 !important;
          }
          #bundles .bundle-stepper-row {
            grid-template-columns: 1fr !important;
          }
          #bundles .bundle-selection-summary {
            flex-direction: column !important;
            align-items: stretch !important;
          }
        }
      `}</style>
    </section>
  )
}
