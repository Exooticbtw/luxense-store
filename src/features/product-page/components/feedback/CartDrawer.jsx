import { ChevronDown, ChevronUp, CreditCard, ShieldCheck } from "lucide-react"
import { useState } from "react"

import { BUNDLE_OPTIONS, COLORS } from "../../data/productPageData.js"
import { buildCartUrl } from "../../utils/shopify.js"
import PaymentIcons from "../common/PaymentIcons.jsx"

export default function CartDrawer({ shopData, purchase, selectedSize }) {
  const [open, setOpen] = useState(true)
  const checkoutUrl = buildCartUrl(shopData?.shopDomain, purchase?.v?.id, purchase?.qty || 1) || "#top"
  const selectedBundle = BUNDLE_OPTIONS.find((bundle) => bundle.quantity === purchase?.qty) || BUNDLE_OPTIONS[0]
  const selectedColor = COLORS[purchase?.colorIdx] || COLORS[0]
  const priceText = purchase?.total || "$29.99"

  return (
    <aside
      id="cart-drawer"
      style={{
        position: "fixed",
        right: 20,
        bottom: 96,
        zIndex: 112,
        width: 380,
        maxWidth: "calc(100vw - 40px)",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        style={{
          width: "100%",
          marginBottom: 10,
          border: "1px solid rgba(17,17,17,.08)",
          background: "rgba(255,255,255,.9)",
          borderRadius: 18,
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 12px 30px rgba(17,17,17,.08)",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Purchase interface
        </span>
        {open ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
      </button>

      {open && (
        <div
          style={{
            borderRadius: 26,
            overflow: "hidden",
            background: "rgba(17,17,17,.96)",
            color: "var(--cream)",
            border: "1px solid rgba(255,255,255,.08)",
            boxShadow: "0 24px 60px rgba(17,17,17,.22)",
          }}
        >
          <div style={{ padding: 18, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
            <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", fontWeight: 700 }}>
              Luxense MotionGlow\u2122
            </div>
            <div className="serif" style={{ marginTop: 8, fontSize: 32, lineHeight: 1, fontWeight: 700 }}>
              {priceText}
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,.72)" }}>
              {selectedBundle?.label} | {selectedColor?.name} | {selectedSize || "30cm"}
            </div>
          </div>

          <div style={{ padding: 18, display: "grid", gap: 10 }}>
            {[
              ["Bundle", selectedBundle?.label || "Buy 1"],
              ["Color", selectedColor?.name || "White"],
              ["Size", selectedSize || "30cm"],
              ["Checkout", "Secure Shopify flow"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 14,
                  alignItems: "center",
                  padding: "10px 12px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", fontWeight: 700 }}>
                  {label}
                </span>
                <span style={{ fontSize: 13, fontWeight: 800, textAlign: "right" }}>{value}</span>
              </div>
            ))}

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
                background: "var(--cream)",
                color: "var(--fg)",
                padding: "0 18px",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 900,
                marginTop: 4,
              }}
            >
              <CreditCard size={16} />
              Continue to checkout
            </a>

            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,.74)", fontSize: 12, lineHeight: 1.5 }}>
              <ShieldCheck size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
              Secure payments and a 30-day guarantee help keep the purchase low-friction.
            </div>

            <div style={{ paddingTop: 4 }}>
              <PaymentIcons />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1040px) {
          #cart-drawer {
            width: 320px !important;
          }
        }
        @media (max-width: 760px) {
          #cart-drawer {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  )
}
