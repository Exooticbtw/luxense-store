import { ArrowRight, Check, ShieldCheck } from "lucide-react"

import { BUNDLE_OPTIONS } from "../../data/productPageData.js"

export default function BundleOffers({ onSelectBundle, onOpenCart, selectedBundleQuantity }) {
  return (
    <section id="bundles" style={{ padding: "86px 24px", background: "var(--sec)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "flex-end", flexWrap: "wrap" }}>
          <div style={{ maxWidth: 680 }}>
            <p className="eyebrow" style={{ color: "var(--accent)" }}>
              Bundle offers
            </p>
            <h2 className="serif section-title" style={{ fontSize: 64 }}>
              The cleanest way to light more than one space.
            </h2>
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
            Get Yours Today <ArrowRight size={17} />
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            marginTop: 38,
          }}
        >
          {BUNDLE_OPTIONS.map((bundle) => {
            const selected = bundle.quantity === selectedBundleQuantity
            const featured = bundle.badge === "Most Popular"
            const isActive = selected || featured
            const ctaLabel = selected ? "Selected bundle" : "Select bundle"

            return (
              <article
                key={bundle.label}
                className="soft-card"
                style={{
                  borderRadius: 28,
                  padding: 24,
                  background: isActive ? "var(--fg)" : "rgba(255,255,255,.86)",
                  color: isActive ? "var(--cream)" : "var(--fg)",
                  border: isActive ? "1px solid rgba(17,17,17,.92)" : "1px solid rgba(17,17,17,.08)",
                  boxShadow: isActive ? "0 22px 44px rgba(17,17,17,.14)" : "var(--shadow)",
                  transform: isActive ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                  <div>
                    <p
                      style={{
                        fontSize: 13,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: isActive ? "rgba(255,255,255,.66)" : "var(--muted)",
                      }}
                    >
                      {selected ? "Selected bundle" : bundle.badge}
                    </p>
                    <h3 style={{ marginTop: 10, fontSize: 26, lineHeight: 1.08, fontWeight: 800 }}>
                      {bundle.label} <span style={{ color: isActive ? "rgba(255,255,255,.78)" : "var(--muted)", fontWeight: 700 }}>- {bundle.savings}</span>
                    </h3>
                  </div>
                  <div
                    style={{
                      borderRadius: 999,
                      padding: "7px 12px",
                      background: isActive ? "rgba(255,255,255,.1)" : "rgba(200,169,106,.12)",
                      color: isActive ? "var(--cream)" : "var(--fg)",
                      fontSize: 13,
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {bundle.savings}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                  <span className="serif" style={{ fontSize: 46, lineHeight: 1, fontWeight: 600 }}>
                    ${bundle.price.toFixed(2)}
                  </span>
                  <span
                    style={{
                      color: isActive ? "rgba(255,255,255,.66)" : "var(--muted)",
                      textDecoration: "line-through",
                      fontSize: 18,
                    }}
                  >
                    ${bundle.compareAt.toFixed(2)}
                  </span>
                </div>

                <p
                  style={{
                    marginTop: 12,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: isActive ? "rgba(255,255,255,.76)" : "var(--muted)",
                  }}
                >
                  {bundle.caption}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    flexWrap: "wrap",
                    marginTop: 16,
                    color: isActive ? "rgba(255,255,255,.7)" : "var(--muted)",
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
                      background: isActive ? "rgba(255,255,255,.1)" : "rgba(200,169,106,.12)",
                    }}
                  >
                    {featured ? "Best choice" : selected ? "Selected" : "Easy compare"}
                  </span>
                  <span>{bundle.quantity === 1 ? "One space" : bundle.quantity === 2 ? "Recommended" : "Best savings"}</span>
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
                        color: isActive ? "rgba(255,255,255,.86)" : "var(--fg)",
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
                    background: isActive ? "var(--cream)" : "var(--fg)",
                    color: isActive ? "var(--fg)" : "var(--cream)",
                    fontSize: 15,
                    fontWeight: 800,
                    cursor: "pointer",
                    boxShadow: isActive ? "0 12px 26px rgba(255,255,255,.12)" : "none",
                  }}
                >
                  {ctaLabel}
                </button>
              </article>
            )
          })}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
            marginTop: 18,
            color: "var(--muted)",
            fontSize: 14,
          }}
        >
          <ShieldCheck size={16} style={{ color: "var(--accent)" }} />
          Free shipping, secure checkout, and a 30-day guarantee are included with every bundle.
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #bundles > div > div:nth-of-type(2) {
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
          #bundles > div > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin-top: 24px !important;
          }
          #bundles .section-title {
            font-size: 36px !important;
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
        }
      `}</style>
    </section>
  )
}
