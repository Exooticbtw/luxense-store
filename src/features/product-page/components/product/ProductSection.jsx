import { ArrowRight, Check, ShieldCheck, Zap } from "lucide-react"

import Stars from "../common/Stars.jsx"
import { HERO_HIGHLIGHTS, PRODUCT_NAME } from "../../data/productPageData.js"
import { buildCartUrl } from "../../utils/shopify.js"

export default function ProductSection({ shopData, purchase, onNavigateSection }) {
  const theme = shopData?.theme || {}
  const media = shopData?.media || {}
  const productImages = shopData?.product?.images || []
  const heroImage =
    purchase?.images?.[purchase?.activeImage] ||
    media.heroImage ||
    media.productImage ||
    productImages[0] ||
    productImages[1] ||
    null
  const checkoutUrl = buildCartUrl(shopData?.shopDomain, purchase?.v?.id, purchase?.qty || 1) || "#bundles"
  const priceLabel = formatPrice(purchase?.price, theme?.productPrice || "$29.99")
  const compareAtLabel = formatPrice(purchase?.origPrice, theme?.productCompareAt || "$39.99")
  const primaryButtonLabel = theme?.heroPrimaryButton || "Shop MotionGlow"
  const secondaryButtonLabel = theme?.heroSecondaryButton || "Checkout"
  const selectedColorName = purchase?.colors?.[purchase?.colorIdx]?.name || "White"
  const galleryThumbs = Array.isArray(purchase?.images) ? purchase.images.filter(Boolean) : []
  const canShowThumbs = galleryThumbs.length > 1 && typeof purchase?.setActiveImage === "function"
  const heroImageAlt = heroImage
    ? `${PRODUCT_NAME} motion sensor light in ${selectedColorName.toLowerCase()} finish, photographed in a modern interior`
    : `${PRODUCT_NAME} placeholder preview`

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, rgba(200,169,106,.16), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f5f5f3 100%)",
        padding: "52px 24px 34px",
        scrollMarginTop: 110,
      }}
    >
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.02fr .98fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <p
              style={{
                marginTop: 26,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              {theme.heroEyebrow || "Luxense MotionGlow"}
            </p>

            <h1
              className="serif hero-title"
              style={{
                marginTop: 16,
                fontSize: 82,
                lineHeight: 0.96,
                letterSpacing: "-0.04em",
                textWrap: "balance",
                fontWeight: 600,
              }}
            >
              {theme.heroTitle || "Wireless motion lighting that feels built into the home."}
            </h1>

            <p style={{ marginTop: 22, maxWidth: 650, fontSize: 19, lineHeight: 1.7, color: "var(--muted)" }}>
              {theme.heroText ||
                "Luxense MotionGlow turns on the moment motion is detected, turns off after about 15 seconds without motion, and brings a calm, premium glow to the spaces you use every day."}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
              {HERO_HIGHLIGHTS.map((item) => (
                <span key={item} className="chip" style={{ gap: 6 }}>
                  <Check size={13} />
                  {item}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
              <a
                href="#bundles"
                onClick={(event) => {
                  event.preventDefault()
                  onNavigateSection?.("bundles")
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  minHeight: 58,
                  borderRadius: 999,
                  border: "1px solid var(--fg)",
                  background: "var(--fg)",
                  color: "var(--cream)",
                  padding: "0 26px",
                  fontSize: 16,
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 16px 34px rgba(17,17,17,.12)",
                }}
              >
                {primaryButtonLabel} <ArrowRight size={18} />
              </a>
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
                  border: "1px solid rgba(17,17,17,.08)",
                  background: "rgba(255,255,255,.8)",
                  color: "var(--fg)",
                  padding: "0 26px",
                  fontSize: 16,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                {secondaryButtonLabel} <Zap size={18} />
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, marginTop: 30 }}>
              <Stars rating={5} size={17} />
              <span style={{ fontSize: 16, fontWeight: 800 }}>4.9</span>
              <span style={{ color: "var(--muted)", fontSize: 16 }}>From 3,000+ home upgrades</span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 999,
                  background: "rgba(200,169,106,.12)",
                  color: "var(--fg)",
                  padding: "6px 12px",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                <ShieldCheck size={14} />
                Secure checkout
              </span>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-18% 12% 12% -10%",
                background: "radial-gradient(circle, rgba(200,169,106,.28), transparent 60%)",
                filter: "blur(24px)",
                pointerEvents: "none",
              }}
            />
            <div
              className="soft-card"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 30,
                background: "linear-gradient(180deg, rgba(255,255,255,.94), rgba(245,245,243,.94))",
                boxShadow: "0 24px 70px rgba(17,17,17,.08)",
              }}
            >
              <div style={{ padding: 22, display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 999,
                    border: "1px solid rgba(17,17,17,.08)",
                    background: "rgba(17,17,17,.03)",
                    padding: "8px 12px",
                    color: "var(--muted)",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  {selectedColorName}
                </span>
                <span style={{ color: "var(--muted)", fontSize: 13, fontWeight: 700 }}>Wireless LED motion light</span>
              </div>

              <div style={{ padding: "0 22px 22px" }}>
                <div
                  style={{
                    position: "relative",
                    borderRadius: 28,
                    overflow: "hidden",
                    background: "linear-gradient(160deg, rgba(17,17,17,.04), rgba(200,169,106,.1))",
                    border: "1px solid rgba(17,17,17,.06)",
                    boxShadow: "0 20px 50px rgba(17,17,17,.08)",
                  }}
                >
                  {heroImage ? (
                    <img
                      src={heroImage}
                      alt={heroImageAlt}
                      loading="eager"
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        minHeight: 430,
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                      }}
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label={heroImageAlt}
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        minHeight: 430,
                        display: "grid",
                        placeItems: "center",
                        background: "linear-gradient(145deg, rgba(17,17,17,.04), rgba(200,169,106,.16))",
                      }}
                    >
                      <div
                        style={{
                          width: "min(62%, 320px)",
                          aspectRatio: "5 / 1",
                          borderRadius: 999,
                          background: "rgba(255,255,255,.76)",
                          border: "1px solid rgba(17,17,17,.08)",
                          boxShadow: "0 18px 44px rgba(17,17,17,.08)",
                        }}
                      />
                    </div>
                  )}
                </div>

                {canShowThumbs && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(72px, 1fr))",
                      gap: 10,
                      marginTop: 14,
                    }}
                  >
                    {galleryThumbs.slice(0, 4).map((src, index) => {
                      const isActive = index === purchase.activeImage
                      const thumbAlt = `${PRODUCT_NAME} image ${index + 1}, ${selectedColorName.toLowerCase()} finish`

                      return (
                        <button
                          key={`${src}-${index}`}
                          type="button"
                          onClick={() => purchase.setActiveImage(index)}
                          aria-label={`View product image ${index + 1}`}
                          style={{
                            aspectRatio: "1",
                            borderRadius: 16,
                            overflow: "hidden",
                            padding: 0,
                            background: "rgba(255,255,255,.86)",
                            cursor: "pointer",
                            border: isActive ? "2px solid var(--accent)" : "1px solid rgba(17,17,17,.08)",
                            outline: isActive ? "2px solid rgba(200,169,106,.22)" : "none",
                            outlineOffset: 2,
                            boxShadow: isActive ? "0 14px 28px rgba(17,17,17,.08)" : "none",
                          }}
                        >
                          <img
                            src={src}
                            alt={thumbAlt}
                            loading="lazy"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                              display: "block",
                            }}
                          />
                        </button>
                      )
                    })}
                  </div>
                )}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 12,
                    marginTop: 16,
                  }}
                >
                  {[
                    ["Motion angle", "120 deg"],
                    ["Auto-off", "15s"],
                    ["Voltage", "5V"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      style={{
                        borderRadius: 18,
                        background: "rgba(255,255,255,.86)",
                        border: "1px solid rgba(17,17,17,.06)",
                        padding: "16px 14px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.14em" }}>{label}</div>
                      <div className="serif" style={{ marginTop: 8, fontSize: 24, lineHeight: 1, fontWeight: 600 }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "wrap",
                    marginTop: 16,
                    padding: "16px 18px",
                    borderRadius: 22,
                    background: "rgba(17,17,17,.04)",
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        color: "var(--muted)",
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                      }}
                    >
                      Starting from
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 6, flexWrap: "wrap" }}>
                      <span className="serif" style={{ fontSize: 34, lineHeight: 1, fontWeight: 600, letterSpacing: "-0.05em" }}>
                        {priceLabel}
                      </span>
                      <span
                        style={{
                          color: "rgba(17,17,17,.4)",
                          textDecoration: "line-through",
                          fontSize: 14,
                          fontWeight: 400,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {compareAtLabel}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      color: "var(--muted)",
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <ShieldCheck size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    30-day guarantee included
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #hero > div > div {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 760px) {
          #hero {
            padding: 28px 16px 24px !important;
          }
          #hero > div > div > div:first-child > p {
            margin-top: 16px !important;
          }
          #hero .hero-title {
            font-size: 44px !important;
          }
          #hero p {
            font-size: 16px !important;
          }
          #hero > div > div > div:last-child > div:last-child {
            padding: 16px !important;
            border-radius: 22px !important;
            align-items: flex-start !important;
          }
          #hero > div > div > div:last-child > div:last-child > div:first-child {
            width: 100% !important;
          }
          #hero > div > div > div:last-child > div:last-child > div:last-child {
            width: 100% !important;
            justify-content: flex-start !important;
          }
          #hero > div > div > div:last-child > div:nth-child(2) {
            padding: 0 16px 16px !important;
          }
          #hero > div > div > div:last-child > div:nth-child(2) img,
          #hero > div > div > div:last-child > div:nth-child(2) [role="img"] {
            min-height: 320px !important;
          }
          #hero > div > div > div:last-child > div:nth-child(2) > div:nth-child(2) {
            gap: 8px !important;
            margin-top: 12px !important;
          }
          #hero > div > div > div:last-child > div:nth-child(2) > div:nth-child(2) button {
            border-radius: 14px !important;
          }
          #hero > div > div > div:last-child > div:last-child {
            padding: 14px 16px !important;
            border-radius: 20px !important;
            align-items: flex-start !important;
          }
          #hero > div > div > div:last-child > div:last-child > div:first-child {
            width: 100% !important;
          }
          #hero > div > div > div:last-child > div:last-child > div:first-child > div:first-child {
            font-size: 10px !important;
          }
          #hero > div > div > div:last-child > div:last-child > div:first-child > div:last-child span.serif {
            font-size: 30px !important;
          }
          #hero > div > div > div:last-child > div:last-child > div:last-child {
            width: 100% !important;
            justify-content: flex-start !important;
          }
          #hero > div > div > div:last-child > div:last-child span.serif {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
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
