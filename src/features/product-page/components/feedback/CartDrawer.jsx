import { X, CreditCard, ShieldCheck } from "lucide-react"

import { BUNDLE_OPTIONS, COLORS } from "../../data/productPageData.js"
import { buildCartUrl } from "../../utils/shopify.js"
import PaymentIcons from "../common/PaymentIcons.jsx"

export default function CartDrawer({
  shopData,
  purchase,
  selectedColor,
  selectedSize,
  selectedBundle,
  isCartOpen,
  onCloseCart,
}) {
  const bundle = selectedBundle || BUNDLE_OPTIONS[1]
  const color = COLORS.find((item) => item.name === selectedColor) || COLORS[0]
  const checkoutUrl = buildCartUrl(shopData?.shopDomain, purchase?.v?.id, bundle.quantity) || "#top"
  const priceText = `$${Number(bundle.price).toFixed(2)}`
  const compareAtText = bundle.compareAt ? `$${Number(bundle.compareAt).toFixed(2)}` : null

  return (
    <>
      {isCartOpen && (
        <button
          type="button"
          aria-label="Close cart overlay"
          onClick={onCloseCart}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 111,
            border: "none",
            background: "rgba(10,10,10,.56)",
            backdropFilter: "blur(4px)",
            cursor: "pointer",
          }}
        />
      )}

      <aside
        id="cart-drawer"
        aria-hidden={!isCartOpen}
        style={{
          position: "fixed",
          right: 18,
          top: 104,
          bottom: 18,
          zIndex: 112,
          width: 420,
          maxWidth: "calc(100vw - 36px)",
          transform: isCartOpen ? "translateX(0)" : "translateX(calc(100% + 28px))",
          opacity: isCartOpen ? 1 : 0,
          pointerEvents: isCartOpen ? "auto" : "none",
          transition: "transform .28s ease, opacity .2s ease",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 28,
            overflow: "hidden",
            background: "rgba(17,17,17,.97)",
            color: "var(--cream)",
            border: "1px solid rgba(255,255,255,.08)",
            boxShadow: "0 28px 72px rgba(17,17,17,.28)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: 18,
              borderBottom: "1px solid rgba(255,255,255,.08)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <div>
              <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", fontWeight: 700 }}>
                Purchase interface
              </div>
              <h3 className="serif" style={{ marginTop: 8, fontSize: 32, lineHeight: 1, fontWeight: 700 }}>
                Luxense MotionGlow\u2122
              </h3>
            </div>
            <button
              type="button"
              aria-label="Close cart"
              onClick={onCloseCart}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.1)",
                background: "rgba(255,255,255,.06)",
                color: "var(--cream)",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ padding: 18, overflowY: "auto", display: "grid", gap: 14, flex: 1 }}>
            <div
              style={{
                borderRadius: 22,
                padding: 16,
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "baseline" }}>
                <div>
                  <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,.58)", fontWeight: 700 }}>
                    Selected bundle
                  </div>
                  <div style={{ marginTop: 6, fontSize: 18, fontWeight: 800 }}>
                    {bundle.label} {bundle.savings ? `- ${bundle.savings}` : ""}
                  </div>
                </div>
                <div className="serif" style={{ fontSize: 32, lineHeight: 1, fontWeight: 700 }}>
                  {priceText}
                </div>
              </div>

              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, padding: "7px 10px", background: "rgba(255,255,255,.08)", fontSize: 12, fontWeight: 700 }}>
                  Qty {bundle.quantity}
                </span>
                {compareAtText && (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, padding: "7px 10px", background: "rgba(200,169,106,.14)", fontSize: 12, fontWeight: 700 }}>
                    Was {compareAtText}
                  </span>
                )}
                {bundle.savings && (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, padding: "7px 10px", background: "rgba(255,255,255,.08)", fontSize: 12, fontWeight: 700 }}>
                    {bundle.savings}
                  </span>
                )}
              </div>
            </div>

            <div
              style={{
                borderRadius: 22,
                padding: 16,
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
                display: "grid",
                gap: 10,
              }}
            >
              {[
                ["Product", "Luxense MotionGlow\u2122"],
                ["Color", color?.name || "White"],
                ["Size", selectedSize || "30cm"],
                ["Quantity", String(bundle.quantity)],
                ["Current price", priceText],
                ["Savings", bundle.savings || "Save 0%"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,.58)", fontWeight: 700 }}>
                    {label}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 800, textAlign: "right" }}>{value}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                borderRadius: 22,
                padding: 16,
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,.9)", fontSize: 14, fontWeight: 800 }}>
                <ShieldCheck size={16} style={{ color: "var(--accent)" }} />
                Secure Checkout · Free Shipping · 30-Day Guarantee
              </div>
              <p style={{ marginTop: 10, fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,.72)" }}>
                Payment is completed in Shopify checkout after you continue from this drawer.
              </p>
            </div>

            <div
              style={{
                borderRadius: 22,
                padding: 16,
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,.58)", fontWeight: 700 }}>
                Payment badges
              </div>
              <div style={{ marginTop: 12 }}>
                <PaymentIcons />
              </div>
              <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay", "Shop Pay"].map((badge) => (
                  <span
                    key={badge}
                    style={{
                      padding: "7px 10px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.08)",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ padding: 18, borderTop: "1px solid rgba(255,255,255,.08)", background: "rgba(17,17,17,.98)" }}>
            <a
              href={checkoutUrl}
              target={shopData?.shopDomain ? "_blank" : "_self"}
              rel={shopData?.shopDomain ? "noreferrer" : undefined}
              style={{
                display: "inline-flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                minHeight: 54,
                borderRadius: 999,
                background: "var(--cream)",
                color: "var(--fg)",
                padding: "0 18px",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 900,
              }}
            >
              <CreditCard size={16} />
              Continue to Checkout
            </a>
          </div>
        </div>
      </aside>

      <style>{`
        @media (max-width: 760px) {
          #cart-drawer {
            right: 0 !important;
            left: 0 !important;
            top: auto !important;
            bottom: 0 !important;
            width: 100vw !important;
            max-width: none !important;
            transform: translateY(${isCartOpen ? "0" : "100%"}) !important;
          }
          #cart-drawer > div {
            border-radius: 24px 24px 0 0 !important;
            height: auto !important;
            max-height: 88vh !important;
          }
        }
      `}</style>
    </>
  )
}
