import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react"

import { BUNDLE_OPTIONS, COLORS, HERO_KEY_BENEFITS, PAYMENT_BADGES, PRODUCT_NAME } from "../../data/productPageData.js"
import lifestyleImage from "../../../../assets/product/hero-detail.png"

export default function ProductSection({
  purchase,
  selectedBundle,
  selectedColor,
  selectedSize,
  setSelectedSize,
  onPreviewBundle,
  onSelectColor,
  onOpenCart,
}) {
  const heroVisualImage = purchase?.images?.[purchase?.activeImage] || lifestyleImage
  const priceLabel = formatPrice(purchase?.price, "$29.99")
  const compareAtLabel = formatPrice(purchase?.origPrice, "$49.48")
  const bundle = selectedBundle || BUNDLE_OPTIONS.find((item) => item.quantity === purchase?.qty) || BUNDLE_OPTIONS[1]
  const selectedColorName = selectedColor || COLORS[purchase?.colorIdx || 0]?.name || "White"

  const summaryRows = [
    ["Bundle", bundle?.label || "Buy 2"],
    ["Color", selectedColorName],
    ["Size", selectedSize || "30cm"],
    ["Price", priceLabel],
  ]

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #f5f5f3 0%, #ffffff 100%)",
        padding: "18px 18px 42px",
        scrollMarginTop: 110,
      }}
    >
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>
        <div
          style={{
            borderRadius: 34,
            overflow: "hidden",
            border: "1px solid rgba(17,17,17,.08)",
            background: "linear-gradient(180deg, rgba(255,255,255,.98), rgba(247,245,239,.98))",
            boxShadow: "0 30px 80px rgba(17,17,17,.10)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.08fr .92fr",
              gap: 0,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                minHeight: 780,
                padding: 28,
                background:
                  "radial-gradient(circle at top left, rgba(200,169,106,.14), transparent 26%), linear-gradient(180deg, rgba(17,17,17,.96), rgba(17,17,17,.88))",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: 22,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    borderRadius: 30,
                    overflow: "hidden",
                    minHeight: 360,
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.10)",
                    boxShadow: "0 24px 70px rgba(0,0,0,.20)",
                  }}
                >
                  {heroVisualImage ? (
                    <img
                      src={heroVisualImage}
                      alt="Luxense MotionGlow premium lifestyle scene"
                      loading="eager"
                      style={{
                        width: "100%",
                        height: "100%",
                        minHeight: 360,
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                      }}
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label="Luxense MotionGlow lifestyle visualization"
                      style={{
                        width: "100%",
                        minHeight: 360,
                        display: "grid",
                        placeItems: "center",
                        padding: 24,
                        textAlign: "center",
                        background:
                          "linear-gradient(160deg, rgba(23,23,23,.98), rgba(55,55,55,.92) 58%, rgba(245,245,243,.96) 58%, rgba(255,255,255,1) 100%)",
                        color: "white",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(255,255,255,.72)" }}>
                          {PRODUCT_NAME}
                        </div>
                        <div className="serif" style={{ marginTop: 12, fontSize: 34, fontWeight: 700 }}>
                          MotionGlow
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ display: "grid", gap: 10, maxWidth: 760 }}>
                  <p
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.24em",
                      color: "rgba(255,255,255,.66)",
                      fontWeight: 700,
                    }}
                  >
                    {PRODUCT_NAME}
                  </p>
                  <h1
                    className="serif hero-title"
                    style={{
                      fontSize: "clamp(44px, 5vw, 76px)",
                      lineHeight: 0.95,
                      letterSpacing: "-0.06em",
                      textWrap: "balance",
                      fontWeight: 700,
                      color: "white",
                      maxWidth: 700,
                    }}
                  >
                    Never Walk Into A Dark Room Again
                  </h1>
                  <p
                    style={{
                      maxWidth: 640,
                      fontSize: 18,
                      lineHeight: 1.72,
                      color: "rgba(255,255,255,.80)",
                    }}
                  >
                    Motion-activated lighting that instantly illuminates closets, kitchens, hallways, and stairways without wiring or complicated installation.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 4 }}>
                    {HERO_KEY_BENEFITS.map((item) => (
                      <span
                        key={item}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "9px 12px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,.08)",
                          border: "1px solid rgba(255,255,255,.12)",
                          fontSize: 12.5,
                          fontWeight: 700,
                          color: "rgba(255,255,255,.92)",
                        }}
                      >
                        <Sparkles size={13} color="var(--accent)" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 10 }}>
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
                        border: "1px solid var(--cream)",
                        background: "var(--cream)",
                        color: "var(--fg)",
                        padding: "0 24px",
                        fontSize: 15.5,
                        fontWeight: 800,
                        cursor: "pointer",
                        boxShadow: "0 16px 34px rgba(17,17,17,.18)",
                      }}
                    >
                      Shop MotionGlow™ <ArrowRight size={18} />
                    </button>

                    <a
                      href="#video-demo"
                      onClick={(event) => {
                        event.preventDefault()
                        document.getElementById("video-demo")?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        minHeight: 56,
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,.18)",
                        background: "rgba(255,255,255,.06)",
                        color: "rgba(255,255,255,.96)",
                        padding: "0 22px",
                        fontSize: 15.5,
                        fontWeight: 800,
                        textDecoration: "none",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      See How It Works
                    </a>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", marginTop: 2 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,.88)" }}>
                      <ShieldCheck size={14} color="var(--accent)" />
                      4.9 rating
                    </span>
                    <span style={{ color: "rgba(255,255,255,.34)" }}>·</span>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,.88)" }}>3,000+ happy customers</span>
                    <span style={{ color: "rgba(255,255,255,.34)" }}>·</span>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,.88)" }}>30-day guarantee</span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "18px 20px",
                    borderRadius: 24,
                    background: "rgba(255,255,255,.07)",
                    border: "1px solid rgba(255,255,255,.12)",
                  }}
                >
                  <div>
                    <div style={{ color: "rgba(255,255,255,.62)", fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
                      Premium Motion Lighting For Modern Homes
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
                      <span className="serif" style={{ fontSize: 32, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.05em" }}>
                        {priceLabel}
                      </span>
                      <span style={{ color: "rgba(255,255,255,.48)", textDecoration: "line-through", fontSize: 14, fontWeight: 500 }}>
                        {compareAtLabel}
                      </span>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.78)", fontWeight: 600 }}>
                    Secure checkout and fast support
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: 20,
                borderRadius: 0,
                background: "rgba(255,255,255,.96)",
                borderLeft: "1px solid rgba(17,17,17,.08)",
                display: "grid",
                gap: 16,
                alignSelf: "stretch",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.24em",
                    color: "var(--muted)",
                    fontWeight: 700,
                  }}
                >
                  Purchase interface
                </p>
                <h2 className="serif" style={{ marginTop: 10, fontSize: 30, lineHeight: 1.02, letterSpacing: "-0.05em" }}>
                  {PRODUCT_NAME}
                </h2>
                <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.65, color: "var(--muted)" }}>
                  Premium Motion Lighting For Modern Homes
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 20,
                  background: "rgba(17,17,17,.04)",
                  border: "1px solid rgba(17,17,17,.06)",
                }}
              >
                <div>
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--muted)", fontWeight: 700 }}>
                    Starting price
                  </div>
                  <div className="serif" style={{ marginTop: 6, fontSize: 30, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.05em" }}>
                    {priceLabel}
                  </div>
                </div>
                <div style={{ color: "var(--muted)", fontSize: 14, textDecoration: "line-through", fontWeight: 600 }}>
                  {compareAtLabel}
                </div>
              </div>

              <div style={{ display: "grid", gap: 10 }}>
                <SectionLabel text="Bundle" />
                <div style={{ display: "grid", gap: 8 }}>
                  {BUNDLE_OPTIONS.map((option) => {
                    const active = option.quantity === bundle.quantity
                    return (
                      <button
                        key={option.quantity}
                        type="button"
                        onClick={() => onPreviewBundle?.(option.quantity)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 14,
                          padding: "12px 14px",
                          borderRadius: 18,
                          border: active ? "1px solid rgba(200,169,106,.55)" : "1px solid rgba(17,17,17,.08)",
                          background: active ? "rgba(200,169,106,.08)" : "rgba(17,17,17,.03)",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: 14.5, fontWeight: 800, color: "var(--fg)" }}>
                            {option.label}
                            {option.savings ? ` - ${option.savings}` : ""}
                          </div>
                          <div style={{ marginTop: 4, fontSize: 12.5, color: "var(--muted)" }}>{option.badge}</div>
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>${option.price.toFixed(2)}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div style={{ display: "grid", gap: 10 }}>
                <SectionLabel text="Color" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10 }}>
                  {COLORS.map((color, index) => {
                    const active = color.name === selectedColorName
                    return (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => onSelectColor?.(index)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "12px 14px",
                          borderRadius: 18,
                          border: active ? "1px solid rgba(200,169,106,.55)" : "1px solid rgba(17,17,17,.08)",
                          background: active ? "rgba(200,169,106,.08)" : "rgba(17,17,17,.03)",
                          cursor: "pointer",
                        }}
                      >
                        <span
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            background: color.hex,
                            border: "1px solid rgba(17,17,17,.12)",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: 14.5, fontWeight: 700 }}>{color.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div style={{ display: "grid", gap: 10 }}>
                <SectionLabel text="Size" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 8 }}>
                  {["20cm", "30cm", "40cm", "50cm"].map((size) => {
                    const active = size === (selectedSize || "30cm")
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize?.(size)}
                        style={{
                          minHeight: 44,
                          borderRadius: 999,
                          border: active ? "1px solid rgba(200,169,106,.55)" : "1px solid rgba(17,17,17,.08)",
                          background: active ? "rgba(200,169,106,.08)" : "rgba(17,17,17,.03)",
                          fontSize: 13.5,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        {size}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div
                style={{
                  padding: 16,
                  borderRadius: 20,
                  background: "rgba(17,17,17,.04)",
                  border: "1px solid rgba(17,17,17,.06)",
                }}
              >
                <div style={{ display: "grid", gap: 8 }}>
                  {summaryRows.map(([label, value]) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
                      <span style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--muted)", fontWeight: 700 }}>
                        {label}
                      </span>
                      <span style={{ fontSize: 14.5, fontWeight: 700, textAlign: "right" }}>{value}</span>
                    </div>
                  ))}
                </div>
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
                  padding: "0 22px",
                  fontSize: 15.5,
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: "0 16px 34px rgba(17,17,17,.14)",
                }}
              >
                Add to Cart <ArrowRight size={18} />
              </button>

              <div style={{ display: "grid", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--muted)", fontWeight: 600 }}>
                  <ShieldCheck size={14} color="var(--accent)" />
                  Secure checkout
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {PAYMENT_BADGES.map((badge) => (
                    <span
                      key={badge}
                      style={{
                        padding: "7px 10px",
                        borderRadius: 999,
                        border: "1px solid rgba(17,17,17,.08)",
                        background: "rgba(17,17,17,.03)",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--fg)",
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          #hero > div > div > div {
            grid-template-columns: 1fr !important;
          }
          #hero > div > div > div > div:first-child {
            min-height: auto !important;
          }
        }
        @media (max-width: 760px) {
          #hero {
            padding: 10px 10px 24px !important;
          }
          #hero > div > div {
            border-radius: 28px !important;
          }
          #hero h1 {
            font-size: 38px !important;
            line-height: 0.98 !important;
          }
          #hero p {
            font-size: 15px !important;
            line-height: 1.6 !important;
          }
          #hero > div > div > div:first-child {
            padding: 18px !important;
          }
          #hero > div > div > div:first-child > div:first-child {
            gap: 14px !important;
          }
          #hero > div > div > div:first-child > div:first-child > div:first-child {
            min-height: 280px !important;
          }
          #hero > div > div > div:first-child > div:last-child {
            margin-top: 22px !important;
          }
          #hero > div > div > div:last-child {
            padding: 18px !important;
            border-left: none !important;
            border-top: 1px solid rgba(17,17,17,.08) !important;
          }
          #hero > div > div > div:last-child button {
            min-height: 52px !important;
            font-size: 15px !important;
          }
          #hero > div > div > div:last-child > div:nth-of-type(4) > div {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          #hero > div > div > div:last-child > div:nth-of-type(5) > div {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  )
}

function SectionLabel({ text }) {
  return (
    <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--muted)", fontWeight: 700 }}>
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
