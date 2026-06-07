import { ArrowRight, Check, ShieldCheck } from "lucide-react"

import { BUNDLE_OPTIONS } from "../../data/productPageData.js"

export default function BundleOffers({ checkoutUrl, shopDomain, onSelectBundle, selectedBundleQuantity }) {
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

          <a
            href={checkoutUrl || "#options"}
            target={shopDomain ? "_blank" : "_self"}
            rel={shopDomain ? "noreferrer" : undefined}
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
            }}
          >
            Secure checkout <ArrowRight size={17} />
          </a>
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

            return (
            <article
              key={bundle.label}
              className="soft-card"
              style={{
                borderRadius: 28,
                padding: 24,
                background: selected || bundle.badge === "Most popular" ? "var(--fg)" : "rgba(255,255,255,.86)",
                color: selected || bundle.badge === "Most popular" ? "var(--cream)" : "var(--fg)",
                border:
                  selected || bundle.badge === "Most popular"
                    ? "1px solid rgba(17,17,17,.92)"
                    : "1px solid rgba(17,17,17,.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "start" }}>
                <div>
                  <p style={{ fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: selected || bundle.badge === "Most popular" ? "rgba(255,255,255,.66)" : "var(--muted)" }}>
                    {selected ? "Selected" : bundle.badge}
                  </p>
                  <h3 style={{ marginTop: 10, fontSize: 26, lineHeight: 1, fontWeight: 800 }}>{bundle.label}</h3>
                </div>
                <div
                  style={{
                    borderRadius: 999,
                    padding: "7px 12px",
                    background: selected || bundle.badge === "Most popular" ? "rgba(255,255,255,.1)" : "rgba(200,169,106,.12)",
                    color: selected || bundle.badge === "Most popular" ? "var(--cream)" : "var(--fg)",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  {bundle.savings}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 24 }}>
                <span className="serif" style={{ fontSize: 46, lineHeight: 1, fontWeight: 600 }}>
                  ${bundle.price.toFixed(2)}
                </span>
                <span style={{ color: selected || bundle.badge === "Most popular" ? "rgba(255,255,255,.66)" : "var(--muted)", textDecoration: "line-through", fontSize: 18 }}>
                  ${bundle.compareAt.toFixed(2)}
                </span>
              </div>

              <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.7, color: selected || bundle.badge === "Most popular" ? "rgba(255,255,255,.76)" : "var(--muted)" }}>
                {bundle.caption}
              </p>

              <ul style={{ listStyle: "none", display: "grid", gap: 10, marginTop: 22 }}>
                {[
                  `Includes ${bundle.quantity} MotionGlow light${bundle.quantity > 1 ? "s" : ""}`,
                  "Motion sensing and USB charging",
                  "Premium finish for modern interiors",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: selected || bundle.badge === "Most popular" ? "rgba(255,255,255,.86)" : "var(--fg)" }}>
                    <Check size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onSelectBundle?.(bundle.quantity)}
                style={{
                  width: "100%",
                  minHeight: 56,
                  marginTop: 24,
                  borderRadius: 999,
                  border: "1px solid rgba(17,17,17,.08)",
                  background: selected || bundle.badge === "Most popular" ? "var(--cream)" : "var(--fg)",
                  color: selected || bundle.badge === "Most popular" ? "var(--fg)" : "var(--cream)",
                  fontSize: 15,
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {selected ? "Selected bundle" : "Choose this bundle"}
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
            padding: 64px 16px !important;
          }
          #bundles > div > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
          }
          #bundles .section-title {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
