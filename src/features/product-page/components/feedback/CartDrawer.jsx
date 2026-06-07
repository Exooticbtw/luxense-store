import { CreditCard, ShieldCheck, X } from "lucide-react"

import { COLORS, PRODUCT_NAME, getBundleOfferForQuantity } from "../../data/productPageData.js"
import { buildCartUrl } from "../../utils/shopify.js"
import PaymentIcons from "../common/PaymentIcons.jsx"
import QuantityStepper from "../common/QuantityStepper.jsx"

export default function CartDrawer({
  shopData,
  purchase,
  selectedColor,
  selectedSize,
  bundleSummary,
  quantity = 1,
  isCartOpen,
  onCloseCart,
  onChangeQuantity,
}) {
  const currentQuantity = Math.max(1, Math.floor(Number(quantity || purchase?.qty || 1)))
  const summary = bundleSummary || getBundleOfferForQuantity(currentQuantity)
  const color = COLORS.find((item) => item.name === selectedColor) || COLORS[0]
  const checkoutUrl = buildCartUrl(shopData?.shopDomain, purchase?.v?.id, currentQuantity) || "#top"
  const priceText = `$${Number(summary?.subtotal ?? summary?.price ?? 29.99).toFixed(2)}`
  const compareAtText = summary?.compareAt ? `$${Number(summary.compareAt).toFixed(2)}` : null
  const savingsAmount = Number(summary?.savingsAmount || 0)
  const savingsLabel = summary?.savingsLabel || summary?.savings || "Save 0%"
  const selectedBundleLabel = summary?.summaryLabel || summary?.label || "Buy 1"
  const selectedBundleTitle = summary?.isExact && currentQuantity > 1 ? `${selectedBundleLabel} - ${savingsLabel}` : selectedBundleLabel
  const savingsText = savingsAmount > 0 ? `You save $${savingsAmount.toFixed(2)}` : "No bundle savings"

  const summaryRows = [
    ["Product", PRODUCT_NAME],
    ["Color", color?.name || "White"],
    ["Size", selectedSize || "30cm"],
    ["Quantity", String(currentQuantity)],
    ["Bundle", selectedBundleTitle],
    ["Current total", priceText],
    ["Light tones", "Warm + Neutral + White included"],
    ["Savings", savingsText],
  ]

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
          className="cart-drawer-panel"
          style={{
            height: "100%",
            minHeight: 0,
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
            className="cart-drawer-header"
            style={{
              padding: "16px 18px 14px",
              borderBottom: "1px solid rgba(255,255,255,.08)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 14,
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: 10.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "rgba(255,255,255,.56)",
                  fontWeight: 700,
                }}
              >
                Purchase interface
              </div>
              <h3
                className="serif"
                style={{
                  marginTop: 8,
                  fontSize: 28,
                  lineHeight: 1.08,
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  wordBreak: "break-word",
                }}
              >
                {PRODUCT_NAME}
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
                flexShrink: 0,
              }}
            >
              <X size={18} />
            </button>
          </div>

          <div
            className="cart-drawer-body"
            style={{
              padding: 16,
              overflowY: "auto",
              display: "grid",
              gap: 12,
              flex: 1,
              minHeight: 0,
            }}
          >
            <div
              className="selected-bundle-card"
              style={{
                borderRadius: 20,
                padding: 14,
                background:
                  summary?.selectedBundleQuantity === 4
                    ? "linear-gradient(180deg, rgba(17,17,17,.98), rgba(33,31,27,.96))"
                    : "linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04))",
                border: summary?.selectedBundleQuantity === 4 ? "1px solid rgba(201,164,106,.50)" : "1px solid rgba(255,255,255,.08)",
                boxShadow: summary?.selectedBundleQuantity === 4 ? "0 18px 36px rgba(17,17,17,.22)" : "0 12px 26px rgba(17,17,17,.14)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 10.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      color: summary?.selectedBundleQuantity === 4 ? "rgba(255,255,255,.56)" : "rgba(255,255,255,.62)",
                      fontWeight: 700,
                    }}
                  >
                    Selected bundle
                  </div>
                  <div style={{ marginTop: 6, fontSize: 18, lineHeight: 1.15, fontWeight: 800, letterSpacing: "-0.03em" }}>
                    {selectedBundleTitle}
                  </div>
                  {summary?.badge && (
                    <div
                      style={{
                        marginTop: 8,
                        display: "inline-flex",
                        alignItems: "center",
                        borderRadius: 999,
                        padding: "6px 10px",
                        background: summary?.selectedBundleQuantity === 4 ? "rgba(201,164,106,.14)" : "rgba(143,174,138,.14)",
                        color: summary?.selectedBundleQuantity === 4 ? "var(--cream)" : "#cfe6cc",
                        fontSize: 12,
                        fontWeight: 800,
                        width: "fit-content",
                      }}
                    >
                      {summary.badge}
                    </div>
                  )}
                  <div style={{ marginTop: 6, fontSize: 13.5, lineHeight: 1.35, color: "rgba(255,255,255,.74)", fontWeight: 600 }}>
                    Qty {currentQuantity}
                  </div>
                </div>

                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div
                    style={{
                      fontSize: 10.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      color: summary?.selectedBundleQuantity === 4 ? "rgba(255,255,255,.56)" : "rgba(255,255,255,.62)",
                      fontWeight: 700,
                    }}
                  >
                    Total
                  </div>
                  <div className="serif" style={{ marginTop: 6, fontSize: 30, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.04em" }}>
                    {priceText}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 999,
                    padding: "7px 10px",
                    background: "rgba(255,255,255,.08)",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  Qty {currentQuantity}
                </span>
                {compareAtText && compareAtText !== priceText && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      borderRadius: 999,
                      padding: "7px 10px",
                      background: "rgba(201,164,106,.14)",
                      color: "var(--cream)",
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    Compare at {compareAtText}
                  </span>
                )}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 999,
                    padding: "7px 10px",
                    background: "rgba(143,174,138,.14)",
                    color: "#cfe6cc",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {savingsText}
                </span>
              </div>

              <div style={{ marginTop: 12 }}>
                <QuantityStepper value={currentQuantity} onChange={onChangeQuantity} compact />
              </div>
            </div>

            <div
              style={{
                borderRadius: 20,
                padding: 14,
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 12,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 10.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      color: "rgba(255,255,255,.56)",
                      fontWeight: 700,
                    }}
                  >
                    Purchase summary
                  </div>
                  <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.35, color: "rgba(255,255,255,.78)" }}>
                    Review the full breakdown before checkout.
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gap: 0 }}>
                {summaryRows.map(([label, value], index) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 16,
                      alignItems: "flex-start",
                      padding: "8px 0",
                      borderBottom: index === summaryRows.length - 1 ? "none" : "1px solid rgba(255,255,255,.08)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10.5,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "rgba(255,255,255,.56)",
                        fontWeight: 700,
                        lineHeight: 1.35,
                      }}
                    >
                      {label}
                    </span>
                    <span style={{ fontSize: 14.5, lineHeight: 1.35, fontWeight: 600, textAlign: "right", maxWidth: "58%" }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: 20,
                padding: 14,
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "rgba(255,255,255,.9)",
                  fontSize: 13,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  flexWrap: "wrap",
                }}
              >
                <ShieldCheck size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
                Secure Checkout · Free Shipping · 30-Day Guarantee
              </div>
              <p style={{ marginTop: 8, fontSize: 12.5, lineHeight: 1.6, color: "rgba(255,255,255,.68)" }}>
                Payment is completed in Shopify checkout after you continue from this drawer.
              </p>
            </div>

            <div
              style={{
                borderRadius: 20,
                padding: 14,
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div
                style={{
                  fontSize: 10.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "rgba(255,255,255,.56)",
                  fontWeight: 700,
                }}
              >
                Payment badges
              </div>
              <div style={{ marginTop: 10 }}>
                <PaymentIcons />
              </div>
            </div>
          </div>

          <div
            className="cart-drawer-footer"
            style={{
              padding: 16,
              borderTop: "1px solid rgba(255,255,255,.08)",
              background: "rgba(17,17,17,.98)",
            }}
          >
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
                minHeight: 52,
                borderRadius: 999,
                background: "var(--cream)",
                color: "var(--fg)",
                padding: "0 18px",
                textDecoration: "none",
                fontSize: 15.5,
                fontWeight: 700,
                letterSpacing: "-0.01em",
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
            padding-bottom: env(safe-area-inset-bottom) !important;
            transform: translateY(${isCartOpen ? "0" : "100%"}) !important;
          }
          #cart-drawer .cart-drawer-panel {
            border-radius: 24px 24px 0 0 !important;
            height: auto !important;
            max-height: 88vh !important;
          }
          #cart-drawer .cart-drawer-header {
            padding: 14px 14px 12px !important;
          }
          #cart-drawer .cart-drawer-header h3 {
            font-size: 24px !important;
            line-height: 1.06 !important;
          }
          #cart-drawer .cart-drawer-body {
            padding: 14px !important;
            gap: 10px !important;
          }
          #cart-drawer .cart-drawer-body > div {
            padding: 12px !important;
            border-radius: 18px !important;
          }
          #cart-drawer .cart-drawer-body .purchase-quantity-row {
            align-items: stretch !important;
          }
          #cart-drawer .cart-drawer-body .purchase-quantity-row > div:first-child {
            min-width: 0 !important;
          }
          #cart-drawer .cart-drawer-body .purchase-quantity-row > div:last-child {
            width: 100% !important;
          }
          #cart-drawer .cart-drawer-body .purchase-quantity-row button {
            min-width: 38px !important;
            min-height: 38px !important;
          }
          #cart-drawer .cart-drawer-footer {
            padding: 14px !important;
          }
          #cart-drawer .selected-bundle-card .serif {
            font-size: 26px !important;
          }
        }
      `}</style>
    </>
  )
}
