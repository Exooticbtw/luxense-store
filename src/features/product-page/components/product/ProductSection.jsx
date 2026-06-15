import { ArrowRight, Check, ShieldCheck, Sparkles, Star } from "lucide-react"

import {
  COLORS,
  HERO_KEY_BENEFITS,
  IMAGE_ASSETS,
  getPriceSummary,
} from "../../data/productPageData.js"
import { getMotionGlowContent } from "../../utils/motionGlowContent.js"
import PaymentIcons from "../common/PaymentIcons.jsx"
import SafeMediaImage from "../common/SafeMediaImage.jsx"
import QuantityStepper from "../common/QuantityStepper.jsx"

export default function ProductSection({
  shopData,
  purchase,
  bundleSummary,
  selectedColor,
  selectedSize,
  setSelectedSize,
  quantity,
  onChangeQuantity,
  onPreviewBundle,
  onSelectColor,
  onOpenCart,
}) {
  const content = getMotionGlowContent(shopData ?? {})
  const hero = content.hero
  const purchaseContent = content.purchase
  const purchaseImage = purchase?.images?.[purchase?.activeImage] || null
  const heroImage = purchaseImage || hero.heroLifestyleImage
  const currentQuantity = Math.max(1, Math.floor(Number(quantity || 1)))
  const unitPrice = purchase?.selectedVariantPrice ?? purchase?.price ?? 0
  const bundle = bundleSummary || getPriceSummary(currentQuantity, unitPrice)
  const selectedColorName = selectedColor || COLORS[purchase?.colorIdx || 0]?.name || "White"
  const selectedCompareAtPrice = Number(purchase?.compareAtPrice || 0)
  const selectedUnitPrice = Number(unitPrice || 0)
  const priceLabel = bundle?.totalFormatted || purchase?.totalFormatted || purchase?.priceFormatted || formatPrice(bundle?.price ?? unitPrice, "")
  const compareAtLabel = bundle?.compareAtFormatted || purchase?.compareAtFormatted || purchase?.origPrice || null
  const subtotalLabel = bundle?.totalFormatted || priceLabel
  const unitPriceLabel = purchase?.priceFormatted || bundle?.unitPriceFormatted || formatPrice(unitPrice, "")
  const savingsLabel = bundle?.savingsLabel || bundle?.savings || "Save 0%"
  const showCompareAt = Boolean(compareAtLabel && compareAtLabel !== priceLabel)
  const priceSavingsPercent =
    showCompareAt && selectedCompareAtPrice > selectedUnitPrice && selectedCompareAtPrice > 0
      ? Math.max(1, Math.round(((selectedCompareAtPrice - selectedUnitPrice) / selectedCompareAtPrice) * 100))
      : 0
  const priceSavingsText = priceSavingsPercent > 0 ? `Save ${priceSavingsPercent}%` : null
  const activeBundleQuantity = bundle?.selectedBundleQuantity
  const trustItems = String(purchaseContent.checkoutTrustText || "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean)
  const visibleTrustItems = trustItems.length > 0 ? trustItems : ["Secure checkout", "Free shipping", "30-day guarantee"]
  const purchaseTrustItems = ["Secure checkout", "Fast shipping", "30-day guarantee"]
  const palette = {
    page: "#F6F4EF",
    card: "#FFFDF8",
    text: "#111111",
    textSecondary: "rgba(35, 25, 19, 0.68)",
    muted: "#74685D",
    accent: "#C89A59",
    softGold: "#F3E6D2",
    border: "rgba(201, 164, 106, 0.35)",
    softBorder: "rgba(35, 25, 19, 0.10)",
    cta: "linear-gradient(135deg, #17120F, #2A1D16)",
    ctaText: "#F8E6C2",
    darkCard: "#17120F",
    darkText: "#FFFDF8",
  }
  const bundleSummaryRows = [
    ["Quantity", String(currentQuantity)],
    ["Selected bundle", bundle?.bundleLabel || bundle?.summaryLabel || bundle?.label || "Buy 1"],
    ["Subtotal", subtotalLabel],
    ["Savings", savingsLabel],
  ]

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: palette.page,
        padding: "18px 18px 42px",
        scrollMarginTop: 110,
      }}
    >
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>
        <div
          style={{
            borderRadius: 36,
            overflow: "hidden",
            border: "1px solid rgba(18,18,18,.08)",
            background: "linear-gradient(180deg, rgba(255,255,255,.98), rgba(244,239,229,.96))",
            boxShadow: "0 30px 80px rgba(18,18,18,.10)",
          }}
        >
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.06fr .94fr", alignItems: "stretch" }}>
            <div
              className="hero-visual-column"
              style={{
                minHeight: 760,
                padding: 24,
                background:
                  "radial-gradient(circle at top left, rgba(201,164,106,.20), transparent 28%), radial-gradient(circle at 84% 20%, rgba(143,174,138,.12), transparent 16%), linear-gradient(180deg, #191919, #111111 88%)",
                color: "white",
              }}
            >
              <div style={{ display: "grid", gap: 18, height: "100%" }}>
                <div
                  className="hero-image-panel"
                  style={{
                    position: "relative",
                    borderRadius: 34,
                    overflow: "hidden",
                    minHeight: 380,
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.10)",
                    boxShadow: "0 24px 70px rgba(0,0,0,.24)",
                  }}
                >
                  <SafeMediaImage
                    src={getImageSrc(heroImage) || IMAGE_ASSETS.heroLifestyle.src}
                    alt={getImageAlt(heroImage, IMAGE_ASSETS.heroLifestyle.alt)}
                    loading="eager"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: 380,
                    }}
                    fallbackStyle={{ position: "absolute", inset: 0 }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(17,17,17,.04) 0%, rgba(17,17,17,.40) 100%), radial-gradient(circle at 76% 16%, rgba(201,164,106,.22), transparent 16%)",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    className="hero-trust-row"
                    style={{
                      position: "absolute",
                      left: 18,
                      right: 18,
                      bottom: 18,
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "space-between",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        borderRadius: 999,
                        padding: "9px 13px",
                        background: "rgba(255,255,255,.10)",
                        border: "1px solid rgba(255,255,255,.14)",
                        backdropFilter: "blur(10px)",
                        fontSize: 12,
                        fontWeight: 800,
                        color: "rgba(255,255,255,.92)",
                      }}
                    >
                      <Star size={13} color="var(--accent)" />
                      {hero.heroRatingText}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        borderRadius: 999,
                        padding: "9px 13px",
                        background: "rgba(255,255,255,.10)",
                        border: "1px solid rgba(255,255,255,.14)",
                        backdropFilter: "blur(10px)",
                        fontSize: 12,
                        fontWeight: 800,
                        color: "rgba(255,255,255,.92)",
                      }}
                    >
                      <ShieldCheck size={13} color="#8fb58b" />
                      {hero.heroGuaranteeText}
                    </span>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 10, maxWidth: 760 }}>
                  <p
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.24em",
                      color: "rgba(255,255,255,.60)",
                      fontWeight: 700,
                    }}
                  >
                    {hero.heroEyebrow}
                  </p>

                  <h1
                    className="serif hero-title"
                    style={{
                      fontSize: "clamp(34px, 3.5vw, 58px)",
                      lineHeight: 0.98,
                      letterSpacing: "-0.055em",
                      textWrap: "balance",
                      fontWeight: 700,
                      color: "white",
                      maxWidth: 720,
                    }}
                  >
                    {hero.heroTitle}
                  </h1>

                  <p
                    style={{
                      maxWidth: 650,
                      fontSize: 16,
                      lineHeight: 1.72,
                      color: "rgba(255,255,255,.76)",
                    }}
                  >
                    {hero.heroDescription}
                  </p>

                  <div className="hero-benefit-row" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 2 }}>
                    {HERO_KEY_BENEFITS.map((item) => (
                      <span
                        key={item}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 12px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,.07)",
                          border: "1px solid rgba(255,255,255,.10)",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "rgba(255,255,255,.90)",
                        }}
                      >
                        <Sparkles size={13} color="var(--accent)" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="hero-actions" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
                    <button
                      type="button"
                      className="hero-primary-cta"
                      onClick={() => onOpenCart?.()}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        minHeight: 54,
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,.95)",
                        background: "linear-gradient(135deg, #ffffff, #f5f1e8)",
                        color: "var(--fg)",
                        padding: "0 24px",
                        fontSize: 15,
                        fontWeight: 800,
                        cursor: "pointer",
                        boxShadow: "0 16px 34px rgba(18,18,18,.18)",
                      }}
                    >
                      {hero.heroPrimaryButton} <ArrowRight size={18} />
                    </button>

                    <a
                      href="#video-demo"
                      className="hero-secondary-cta"
                      onClick={(event) => {
                        event.preventDefault()
                        document.getElementById("video-demo")?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        minHeight: 54,
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,.18)",
                        background: "rgba(255,255,255,.06)",
                        color: "rgba(255,255,255,.96)",
                        padding: "0 22px",
                        fontSize: 15,
                        fontWeight: 800,
                        textDecoration: "none",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {hero.heroSecondaryButton}
                    </a>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 10,
                      alignItems: "center",
                      marginTop: 2,
                      color: "rgba(255,255,255,.82)",
                      fontSize: 12.5,
                      fontWeight: 700,
                    }}
                  >
                    {[hero.heroRatingText, hero.heroCustomerText, hero.heroShippingText, hero.heroGuaranteeText]
                      .filter(Boolean)
                      .map((item, index) => (
                      <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                        {index > 0 && <span style={{ color: "rgba(255,255,255,.30)" }}>·</span>}
                        <span>{item}</span>
                      </span>
                      ))}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 18,
                    padding: "16px 18px",
                    borderRadius: 24,
                    background: "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.06))",
                    border: "1px solid rgba(255,255,255,.12)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "rgba(255,255,255,.60)",
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        fontWeight: 700,
                      }}
                    >
                      {hero.heroEyebrow}
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 6, flexWrap: "wrap" }}>
                      <span className="serif" style={{ fontSize: 28, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.05em" }}>
                        {priceLabel}
                      </span>
                      {showCompareAt && (
                        <span style={{ color: "rgba(255,255,255,.48)", textDecoration: "line-through", fontSize: 14, fontWeight: 500 }}>
                          {compareAtLabel}
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ alignSelf: "center", fontSize: 12, color: "rgba(255,255,255,.74)", fontWeight: 600 }}>
                    {currentQuantity} selected
                  </div>
                </div>
              </div>
            </div>

            <div
              className="purchase-panel"
              id="product-offer"
              style={{
                padding: 30,
                background: palette.page,
                borderLeft: `1px solid ${palette.softBorder}`,
              }}
            >
              <div
                className="soft-card purchase-card"
                style={{
                  borderRadius: 30,
                  padding: 28,
                  background: palette.card,
                  border: `1px solid ${palette.softBorder}`,
                  boxShadow: "0 18px 34px rgba(17,17,17,.07)",
                }}
              >
                <div style={{ display: "grid", gap: 10 }}>
                  <div>
                    <p
                      style={{
                        fontSize: 10.5,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: palette.textSecondary,
                        fontWeight: 800,
                      }}
                    >
                      PRODUCT PURCHASE
                    </p>
                    <h2
                      className="serif"
                      style={{
                        marginTop: 8,
                        fontSize: "clamp(34px, 2.8vw, 42px)",
                        lineHeight: 1.02,
                        letterSpacing: "-0.055em",
                        fontWeight: 700,
                        color: palette.text,
                      }}
                    >
                      {purchaseContent.purchaseTitle}
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 12px",
                          borderRadius: 999,
                          background: palette.softGold,
                          border: `1px solid ${palette.border}`,
                          color: palette.text,
                          fontSize: 12.5,
                          fontWeight: 800,
                        }}
                      >
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 2, color: "var(--accent)" }}>
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                        </span>
                        4.8/5 Rating
                      </span>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 12px",
                          borderRadius: 999,
                          background: palette.softGold,
                          border: `1px solid ${palette.border}`,
                          color: palette.text,
                          fontSize: 12.5,
                          fontWeight: 800,
                        }}
                      >
                        2,000+ Happy Customers
                      </span>
                    </div>
                    <p style={{ marginTop: 8, fontSize: 15, lineHeight: 1.65, color: palette.textSecondary }}>
                      {purchaseContent.purchaseDescription}
                    </p>
                  </div>

                    <div
                      style={{
                        display: "grid",
                        gap: 10,
                        padding: "14px 16px",
                        borderRadius: 22,
                        background: "linear-gradient(180deg, #FFFDF8, #F8F4EA)",
                        border: `1px solid ${palette.border}`,
                      }}
                    >
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
                      <div>
                        <div
                          style={{
                            fontSize: 10.5,
                            textTransform: "uppercase",
                            letterSpacing: "0.18em",
                            color: palette.muted,
                            fontWeight: 800,
                          }}
                        >
                          {purchaseContent.startingPriceLabel}
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 6, flexWrap: "wrap" }}>
                          <span className="serif" style={{ fontSize: 42, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.055em", color: palette.text }}>
                            {formatPrice(purchaseContent.startingPrice, priceLabel)}
                          </span>
                          {showCompareAt && (
                            <span style={{ color: palette.muted, textDecoration: "line-through", fontSize: 16, fontWeight: 600 }}>
                              {compareAtLabel}
                            </span>
                          )}
                        </div>
                      </div>
                      {priceSavingsText && (
                        <div
                          style={{
                            padding: "8px 12px",
                            borderRadius: 999,
                            background: "#E9EEDF",
                            color: "#4F6650",
                            fontSize: 12,
                            fontWeight: 800,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {priceSavingsText}
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: "grid", gap: 10, marginTop: 2 }}>
                    <SectionLabel text="Bundle" />
                    <div className="bundle-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
                      {content.bundles.map((option) => {
                        const isSelected = option.quantity === activeBundleQuantity
                        const featured = option.quantity === 2 || option.quantity === 3
                        const bundlePricing = getPriceSummary(option.quantity, unitPrice)
                        const badgeText = option.badge || "Try MotionGlow"
                        const cardTextColor = palette.text
                        const cardMutedColor = palette.muted
                        const cardBadgeBackground = isSelected ? palette.softGold : "rgba(255,255,255,.72)"
                        const cardBadgeColor = isSelected ? palette.text : palette.textSecondary
                        const cardBackground = isSelected ? "#FBF4EA" : palette.card
                        const cardBorder = isSelected
                          ? `1px solid ${palette.accent}`
                          : featured
                            ? `1px solid ${palette.border}`
                            : `1px solid ${palette.softBorder}`
                        const cardShadow = isSelected
                          ? "0 16px 28px rgba(201,164,106,.12)"
                          : featured
                            ? "0 10px 18px rgba(17,17,17,.05)"
                            : "0 8px 16px rgba(17,17,17,.04)"
                        const showSelected = isSelected ? "Selected" : null

                        return (
                          <button
                            key={option.title}
                            type="button"
                            onClick={() => onPreviewBundle?.(option.quantity)}
                            aria-pressed={isSelected}
                            className="bundle-option"
                            style={{
                              position: "relative",
                              minHeight: 214,
                              height: "100%",
                              borderRadius: 22,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              gap: 12,
                              padding: "15px 14px 14px",
                              textAlign: "left",
                              cursor: "pointer",
                              overflow: "hidden",
                              border: cardBorder,
                              background: cardBackground,
                              boxShadow: cardShadow,
                              color: cardTextColor,
                            }}
                          >
                            <div style={{ display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
                              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                                <div style={{ minWidth: 0, display: "grid", gap: 8 }}>
                                  <span
                                    style={{
                                      display: "block",
                                      fontSize: 16,
                                      lineHeight: 1.15,
                                      fontWeight: 800,
                                      letterSpacing: "-0.03em",
                                      color: cardTextColor,
                                    }}
                                  >
                                    {option.title}
                                  </span>
                                  <span
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: 6,
                                      borderRadius: 999,
                                      padding: "6px 11px",
                                      background: cardBadgeBackground,
                                      color: cardBadgeColor,
                                      fontSize: 12,
                                      fontWeight: 800,
                                      lineHeight: 1,
                                      letterSpacing: "0.04em",
                                      width: "fit-content",
                                      justifySelf: option.quantity === 2 ? "center" : "flex-start",
                                    }}
                                  >
                                    {badgeText}
                                  </span>
                                </div>
                                {showSelected && (
                                  <span
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      padding: "6px 10px",
                                      borderRadius: 999,
                                      border: `1px solid ${palette.border}`,
                                      background: palette.card,
                                      color: palette.textSecondary,
                                      fontSize: 11,
                                      fontWeight: 800,
                                      letterSpacing: "0.08em",
                                      textTransform: "uppercase",
                                      flexShrink: 0,
                                    }}
                                  >
                                    Selected
                                  </span>
                                )}
                              </div>

                              <div style={{ display: "grid", gap: 6 }}>
                                <span style={{ display: "block", fontSize: 12.5, lineHeight: 1.45, color: cardMutedColor }}>
                                  {option.note}
                                </span>
                                {option.subtitle && (
                                  <span style={{ display: "block", fontSize: 12.5, lineHeight: 1.45, color: palette.textSecondary }}>
                                    {option.subtitle}
                                  </span>
                                )}
                              </div>

                              <div style={{ display: "grid", gap: 8, marginTop: "auto" }}>
                                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                                  <div
                                    className="serif"
                                    style={{
                                      fontSize: 24,
                                      lineHeight: 1,
                                      fontWeight: 700,
                                      letterSpacing: "-0.05em",
                                      color: cardTextColor,
                                    }}
                                  >
                                    {bundlePricing.totalFormatted}
                                  </div>
                                  {bundlePricing.compareAt > bundlePricing.total && (
                                    <div
                                      style={{
                                        fontSize: 12.5,
                                        lineHeight: 1.2,
                                        color: palette.muted,
                                        textDecoration: "line-through",
                                        fontWeight: 700,
                                      }}
                                    >
                                      {bundlePricing.compareAtFormatted}
                                    </div>
                                  )}
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                                  {bundlePricing.savings > 0 && (
                                    <span
                                      style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        padding: "5px 9px",
                                        borderRadius: 999,
                                        background: palette.softGold,
                                        color: "#6E4B1F",
                                        fontSize: 11.5,
                                        fontWeight: 800,
                                        letterSpacing: "0.02em",
                                      }}
                                    >
                                      {bundlePricing.savingsLabel}
                                    </span>
                                  )}
                                  {bundlePricing.savings > 0 && (
                                    <span style={{ fontSize: 12.25, lineHeight: 1.45, color: palette.muted, fontWeight: 700 }}>
                                      You save {bundlePricing.savingsFormatted}
                                    </span>
                                  )}
                                </div>
                                <div style={{ fontSize: 12.5, lineHeight: 1.45, color: cardMutedColor, fontWeight: 700 }}>
                                  {bundlePricing.bundleUnitPriceFormatted} / each
                                </div>
                              </div>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div
                    className="purchase-quantity-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 14,
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      marginTop: 4,
                    }}
                  >
                    <QuantityStepper value={currentQuantity} onChange={onChangeQuantity} />
                  </div>

                  <div className="purchase-option-grid" style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr", marginTop: 2 }}>
                    <div style={{ display: "grid", gap: 10 }}>
                      <SectionLabel text="Color" />
                      <div style={{ display: "grid", gap: 10 }}>
                        {COLORS.map((color, index) => {
                          const active = color.name === selectedColorName
                          const isBlack = color.name === "Black"
                          return (
                            <button
                              key={color.name}
                              type="button"
                              onClick={() => onSelectColor?.(index)}
                              aria-pressed={active}
                              style={{
                                minHeight: 64,
                                borderRadius: 18,
                                border: active ? `1px solid ${palette.accent}` : `1px solid ${palette.softBorder}`,
                                background: active ? palette.softGold : palette.card,
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "12px 14px",
                                cursor: "pointer",
                                textAlign: "left",
                                boxShadow: active ? "0 10px 18px rgba(201,164,106,.08)" : "0 8px 14px rgba(17,17,17,.04)",
                                position: "relative",
                              }}
                            >
                              <span
                                style={{
                                  width: 22,
                                  height: 22,
                                  borderRadius: "50%",
                                  background: color.hex,
                                  border: active ? `1px solid ${palette.accent}` : `1px solid ${palette.softBorder}`,
                                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,.16)",
                                  flexShrink: 0,
                                }}
                              />
                              <span style={{ minWidth: 0, flex: 1 }}>
                                <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 800, color: palette.text }}>
                                  <span>{color.name}</span>
                                  {isBlack && (
                                    <span
                                      style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        padding: "4px 8px",
                                        borderRadius: 999,
                                        background: palette.softGold,
                                        color: palette.text,
                                        fontSize: 10.5,
                                        fontWeight: 800,
                                        letterSpacing: "0.04em",
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      Most Popular
                                    </span>
                                  )}
                                </span>
                                <span style={{ display: "block", marginTop: 2, fontSize: 12, color: palette.muted }}>
                                  {active ? "Selected finish" : isBlack ? "Best selling finish" : "Premium matte finish"}
                                </span>
                              </span>
                              {active && (
                                <span
                                  style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    background: palette.darkCard,
                                    color: palette.card,
                                    display: "grid",
                                    placeItems: "center",
                                    flexShrink: 0,
                                    marginLeft: "auto",
                                    boxShadow: "0 8px 16px rgba(17,17,17,.10)",
                                  }}
                                >
                                  <Check size={14} />
                                </span>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div style={{ display: "grid", gap: 10 }}>
                      <SectionLabel text="Size" />
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10 }}>
                        {["20cm", "30cm", "40cm", "50cm"].map((size) => {
                          const active = size === (selectedSize || "30cm")
                          return (
                            <button
                              key={size}
                              type="button"
                              className="size-option"
                              onClick={() => setSelectedSize?.(size)}
                              aria-pressed={active}
                              style={{
                                minHeight: 64,
                                borderRadius: 18,
                                border: active ? `1px solid ${palette.accent}` : `1px solid ${palette.softBorder}`,
                                background: active ? palette.darkCard : palette.card,
                                fontSize: 15,
                                fontWeight: 800,
                                cursor: "pointer",
                                color: active ? palette.darkText : palette.text,
                                boxShadow: active ? "0 10px 18px rgba(201,164,106,.08)" : "0 8px 14px rgba(17,17,17,.04)",
                                position: "relative",
                              }}
                            >
                              {size}
                              {active && (
                                <span
                                  style={{
                                    position: "absolute",
                                    top: 10,
                                    right: 10,
                                    width: 20,
                                    height: 20,
                                    borderRadius: "50%",
                                    background: palette.accent,
                                    color: palette.darkText,
                                    display: "grid",
                                    placeItems: "center",
                                    boxShadow: "0 8px 16px rgba(17,17,17,.10)",
                                  }}
                                >
                                  <Check size={12} />
                                </span>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: 8,
                      marginTop: 4,
                      padding: 14,
                      borderRadius: 22,
                      background: "linear-gradient(180deg, rgba(255,255,255,.98), rgba(245,241,233,.94))",
                      border: `1px solid ${palette.softBorder}`,
                    }}
                  >
                      <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.18em", color: palette.muted, fontWeight: 800 }}>
                      {purchaseContent.includedTonesTitle}
                    </div>
                    <div style={{ fontSize: 14.5, lineHeight: 1.55, color: palette.text, fontWeight: 700 }}>
                      {purchaseContent.includedTonesTitle}
                    </div>
                    <div style={{ fontSize: 12.5, lineHeight: 1.6, color: palette.muted }}>
                      {purchaseContent.includedTonesDescription}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: 14,
                      borderRadius: 22,
                      background: "linear-gradient(180deg, rgba(255,255,255,.98), rgba(245,241,233,.94))",
                      border: `1px solid ${palette.softBorder}`,
                    }}
                  >
                    <div style={{ display: "grid", gap: 8 }}>
                      {bundleSummaryRows.map(([label, value]) => (
                        <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
                          <span
                            style={{
                              fontSize: 10.5,
                              textTransform: "uppercase",
                              letterSpacing: "0.16em",
                              color: palette.textSecondary,
                              fontWeight: 700,
                            }}
                          >
                            {label}
                          </span>
                          <span style={{ fontSize: 14.5, fontWeight: 700, textAlign: "right", color: palette.text }}>
                            {value}
                          </span>
                        </div>
                      ))}
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", paddingTop: 4 }}>
                        <span
                          style={{
                            fontSize: 10.5,
                            textTransform: "uppercase",
                            letterSpacing: "0.16em",
                            color: palette.textSecondary,
                            fontWeight: 700,
                          }}
                        >
                          Current price
                        </span>
                        <span className="serif" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.04em", color: palette.text }}>
                          {subtotalLabel}
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
                        <span
                          style={{
                            fontSize: 10.5,
                            textTransform: "uppercase",
                            letterSpacing: "0.16em",
                            color: palette.textSecondary,
                            fontWeight: 700,
                          }}
                        >
                          Unit price
                        </span>
                        <span style={{ fontSize: 14.5, fontWeight: 700, textAlign: "right", color: palette.text }}>
                          {unitPriceLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="purchase-cta"
                    onClick={() => onOpenCart?.()}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      width: "100%",
                      minHeight: 56,
                      border: `1px solid ${palette.border}`,
                      background: palette.cta,
                      color: palette.ctaText,
                      padding: "0 22px",
                      fontSize: 15.5,
                      fontWeight: 800,
                      cursor: "pointer",
                      borderRadius: 18,
                      boxShadow: "0 12px 24px rgba(17,17,17,.10)",
                    }}
                  >
                    {"Get My MotionGlow\u2122 Today"} <ArrowRight size={18} />
                  </button>

                  <div style={{ display: "grid", gap: 10 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.textSecondary, letterSpacing: "0.01em" }}>
                      Fast, safe & secure checkout
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                      {purchaseTrustItems.map((item) => (
                        <span
                          key={item}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "7px 11px",
                            borderRadius: 999,
                            background: palette.card,
                            border: `1px solid ${palette.softBorder}`,
                            color: palette.textSecondary,
                            fontSize: 12.25,
                            fontWeight: 800,
                          }}
                        >
                          <ShieldCheck size={13} color={palette.accent} />
                          {item}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 12.25, color: palette.textSecondary, fontWeight: 700 }}>
                        Accepted payments
                      </span>
                      <PaymentIcons />
                    </div>
                    {visibleTrustItems.length > 0 && (
                      <div style={{ fontSize: 12.25, color: palette.muted, fontWeight: 600, lineHeight: 1.5 }}>
                        {visibleTrustItems.join(" \u00b7 ")}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        #hero .hero-primary-cta,
        #hero .hero-secondary-cta,
        #hero .purchase-cta,
        #hero .size-option,
        #hero .bundle-option {
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease, filter .18s ease;
        }
        #hero .hero-primary-cta:hover,
        #hero .purchase-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 30px rgba(17,17,17,.12) !important;
          filter: brightness(1.02);
        }
        #hero .hero-secondary-cta:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,.10) !important;
          border-color: rgba(255,255,255,.26) !important;
        }
        #hero .size-option:hover,
        #hero .bundle-option:hover {
          transform: translateY(-1px);
        }
        #hero .hero-primary-cta:focus-visible,
        #hero .hero-secondary-cta:focus-visible,
        #hero .size-option:focus-visible,
        #hero .purchase-cta:focus-visible {
          outline: 2px solid rgba(201,164,106,.45);
          outline-offset: 2px;
        }
        @media (max-width: 1080px) {
          #hero .hero-grid {
            grid-template-columns: 1fr !important;
          }
          #hero .purchase-panel {
            border-left: none !important;
            border-top: 1px solid rgba(35,25,19,.10) !important;
          }
        }
        @media (max-width: 760px) {
          #hero {
            padding: 10px 10px 24px !important;
          }
          #hero > div > div {
            border-radius: 28px !important;
          }
          #hero .hero-visual-column {
            padding: 16px !important;
            min-height: auto !important;
          }
          #hero .hero-image-panel {
            min-height: 240px !important;
          }
          #hero h1 {
            font-size: 32px !important;
            line-height: 1.02 !important;
          }
          #hero p {
            font-size: 14.5px !important;
            line-height: 1.58 !important;
          }
          #hero .hero-benefit-row {
            gap: 8px !important;
          }
          #hero .hero-actions button,
          #hero .hero-actions a {
            min-height: 52px !important;
            width: 100% !important;
            font-size: 15px !important;
            padding: 0 18px !important;
          }
          #hero .hero-trust-row {
            margin-top: 16px !important;
            gap: 12px !important;
            padding: 14px 16px !important;
            left: 16px !important;
            right: 16px !important;
          }
          #hero .purchase-panel {
            padding: 16px !important;
          }
          #hero .purchase-card {
            padding: 16px !important;
          }
          #hero .purchase-card h2 {
            font-size: 24px !important;
          }
          #hero .bundle-grid,
          #hero .purchase-option-grid {
            grid-template-columns: 1fr !important;
          }
          #hero .purchase-card .bundle-grid button {
            min-height: 188px !important;
            padding: 16px !important;
          }
          #hero .purchase-card .bundle-grid button .serif {
            font-size: 22px !important;
          }
          #hero .purchase-benefit-grid {
            grid-template-columns: 1fr !important;
          }
          #hero .purchase-trust-bar {
            gap: 10px !important;
          }
          #hero .purchase-card .purchase-option-grid button,
          #hero .purchase-card .purchase-cta {
            min-height: 52px !important;
          }
          #hero .purchase-quantity-row {
            flex-direction: column !important;
          }
          #hero .purchase-quantity-row > div:last-child {
            max-width: none !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}

function SectionLabel({ text }) {
  return (
    <div
      style={{
        fontSize: 10.5,
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        color: "rgba(35, 25, 19, 0.68)",
        fontWeight: 700,
      }}
    >
      {text}
    </div>
  )
}

function formatPrice(value, fallback) {
  if (typeof value === "string") {
    const numeric = Number.parseFloat(value)
    return Number.isFinite(numeric) ? `$${numeric.toFixed(2)}` : fallback
  }

  if (Number.isFinite(value)) {
    return `$${value.toFixed(2)}`
  }

  return fallback
}

function getImageSrc(image) {
  if (!image) return null
  if (typeof image === "string") return image
  return image.src || image.url || null
}

function getImageAlt(image, fallback) {
  if (!image || typeof image === "string") return fallback
  return image.alt || image.title || image.label || fallback
}
