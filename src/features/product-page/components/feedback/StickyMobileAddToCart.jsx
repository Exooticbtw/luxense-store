import { ShoppingBag } from "lucide-react"

export default function StickyMobileAddToCart({ bundleSummary, quantity = 1, isCartOpen = false, onOpenCart }) {
  const currentQuantity = Math.max(1, Math.floor(Number(quantity) || 1))
  const priceText = bundleSummary?.totalFormatted || bundleSummary?.unitPriceFormatted || ""
  const bundleLabel = bundleSummary?.bundleLabel || bundleSummary?.summaryLabel || bundleSummary?.label || "Buy 1"

  if (isCartOpen) {
    return null
  }

  return (
    <div
      className="sticky-mobile-atc"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 115,
        padding: "12px 14px 14px",
        background: "linear-gradient(180deg, rgba(245,245,243,0), rgba(245,245,243,.96) 18%, rgba(245,245,243,.98))",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: 1560,
          margin: "0 auto",
          borderRadius: 22,
          border: "1px solid rgba(17,17,17,.08)",
          background: "rgba(17,17,17,.96)",
          color: "var(--cream)",
          padding: 14,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 12,
          alignItems: "center",
          boxShadow: "0 18px 42px rgba(17,17,17,.18)",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,.56)", fontWeight: 700 }}>
            MotionGlow
          </div>
          <div style={{ marginTop: 4, fontSize: 16, fontWeight: 800 }}>{priceText}</div>
          <div style={{ marginTop: 2, fontSize: 12, color: "rgba(255,255,255,.58)" }}>
            {bundleLabel} | Qty {currentQuantity}
          </div>
        </div>

        <div style={{ minWidth: 0, color: "rgba(255,255,255,.72)", fontSize: 13, lineHeight: 1.45 }}>
          Tap to review your bundle, quantity, color, and size in the cart drawer.
        </div>

        <button
          type="button"
          onClick={onOpenCart}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            minHeight: 48,
            borderRadius: 999,
            background: "var(--cream)",
            color: "var(--fg)",
            padding: "0 16px",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 900,
            whiteSpace: "nowrap",
            border: "none",
            cursor: "pointer",
          }}
        >
          <ShoppingBag size={16} />
          Checkout
        </button>
      </div>

      <style>{`
        .sticky-mobile-atc {
          display: none;
        }
        @media (max-width: 760px) {
          .sticky-mobile-atc {
            display: block !important;
            padding: 10px 10px 12px !important;
          }
          .sticky-mobile-atc > div {
            grid-template-columns: 1fr auto !important;
            gap: 8px !important;
            padding: 12px !important;
            border-radius: 20px !important;
          }
          .sticky-mobile-atc > div > div:nth-child(2) {
            display: none !important;
          }
          .sticky-mobile-atc > div > div:first-child {
            display: flex !important;
            flex-direction: column !important;
            gap: 2px !important;
          }
          .sticky-mobile-atc > div > button {
            min-height: 50px !important;
            padding: 0 14px !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  )
}
