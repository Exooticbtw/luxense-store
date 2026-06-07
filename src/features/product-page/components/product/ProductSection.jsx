import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react"

import Stars from "../common/Stars.jsx"
import lifestyleImage from "../../../../assets/product/hero-detail.png"

export default function ProductSection({ shopData, purchase, onNavigateSection }) {
  const theme = shopData?.theme || {}
  const media = shopData?.media || {}
  const productImages = shopData?.product?.images || []
  const heroVisualImage =
    purchase?.images?.[purchase?.activeImage] ||
    media.heroImage ||
    media.productImage ||
    productImages[0] ||
    productImages[1] ||
    null
  const heroBackdropImage = lifestyleImage
  const priceLabel = formatPrice(purchase?.price, theme?.productPrice || "$29.99")
  const compareAtLabel = formatPrice(purchase?.origPrice, theme?.productCompareAt || "$49.48")
  const selectedColorName = purchase?.colors?.[purchase?.colorIdx]?.name || "White"
  const heroImageAlt = heroVisualImage
    ? `Luxense MotionGlow motion sensor light in ${selectedColorName.toLowerCase()} finish, styled in a premium home interior`
    : "Luxense MotionGlow smart light bar placeholder"

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
            position: "relative",
            borderRadius: 34,
            overflow: "hidden",
            minHeight: 820,
            boxShadow: "0 30px 80px rgba(17,17,17,.10)",
            border: "1px solid rgba(17,17,17,.08)",
            background: "var(--cream)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateColumns: "1.12fr .88fr",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                background: heroBackdropImage
                  ? `linear-gradient(90deg, rgba(10,10,10,.84) 0%, rgba(10,10,10,.72) 58%, rgba(10,10,10,.42) 100%), url(${heroBackdropImage}) center/cover no-repeat`
                  : "linear-gradient(135deg, rgba(17,17,17,.98), rgba(40,40,40,.94))",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(200,169,106,.22), transparent 30%), linear-gradient(90deg, rgba(17,17,17,.28), rgba(17,17,17,.08))",
                }}
              />
            </div>
            <div style={{ background: "linear-gradient(180deg, #f7f5ef 0%, #ffffff 100%)" }} />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: "1.02fr .98fr",
              minHeight: 820,
            }}
          >
            <div
              style={{
                padding: "82px 56px 64px 64px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "white",
              }}
            >
              <div style={{ maxWidth: 740 }}>
                <p
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                  }}
                >
                  {theme.heroEyebrow || "WIRELESS MOTION-SENSOR LIGHTING"}
                </p>

                <h1
                  className="serif hero-title"
                  style={{
                    marginTop: 18,
                    fontSize: 84,
                    lineHeight: 0.96,
                    letterSpacing: "-0.055em",
                    textWrap: "balance",
                    fontWeight: 700,
                    color: "white",
                    maxWidth: 680,
                  }}
                >
                  {theme.heroTitle || "Transform any space into a luxury environment"}
                </h1>

                <p
                  style={{
                    marginTop: 22,
                    maxWidth: 620,
                    fontSize: 19,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,.78)",
                  }}
                >
                  {theme.heroText ||
                    "Wireless, rechargeable lighting that senses your every move and disappears into the architecture of your home until you need it."}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
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
                      minHeight: 60,
                      borderRadius: 999,
                      border: "1px solid var(--cream)",
                      background: "var(--cream)",
                      color: "var(--fg)",
                      padding: "0 28px",
                      fontSize: 16,
                      fontWeight: 800,
                      textDecoration: "none",
                      boxShadow: "0 16px 34px rgba(17,17,17,.18)",
                    }}
                  >
                    Shop now <ArrowRight size={18} />
                  </a>
                  <a
                    href="#use-cases"
                    onClick={(event) => {
                      event.preventDefault()
                      onNavigateSection?.("use-cases")
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      minHeight: 60,
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,.22)",
                      background: "rgba(255,255,255,.06)",
                      color: "white",
                      padding: "0 28px",
                      fontSize: 16,
                      fontWeight: 800,
                      textDecoration: "none",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    Learn more <ArrowRight size={18} />
                  </a>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 14,
                    marginTop: 30,
                    color: "rgba(255,255,255,.88)",
                  }}
                >
                  <Stars rating={5} size={17} />
                  <span style={{ fontSize: 16, fontWeight: 800 }}>4.9</span>
                  <span style={{ color: "rgba(255,255,255,.76)", fontSize: 16 }}>3,284 reviews</span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      borderRadius: 999,
                      background: "rgba(200,169,106,.16)",
                      color: "white",
                      padding: "7px 12px",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    <ShieldCheck size={14} />
                    Secure checkout
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: 18,
                  flexWrap: "wrap",
                  marginTop: 36,
                  padding: "18px 20px",
                  borderRadius: 24,
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.14)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      color: "rgba(255,255,255,.62)",
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                    }}
                  >
                    Starting from
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
                    <span className="serif" style={{ fontSize: 34, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.05em", color: "white" }}>
                      {priceLabel}
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,.48)",
                        textDecoration: "line-through",
                        fontSize: 14,
                        fontWeight: 500,
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
                    color: "rgba(255,255,255,.78)",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                  }}
                >
                  <ShieldCheck size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  30-day guarantee included
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "56px 56px 56px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: 560,
                  borderRadius: 32,
                  background: "rgba(255,255,255,.84)",
                  boxShadow: "0 26px 70px rgba(17,17,17,.12)",
                  border: "1px solid rgba(17,17,17,.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "18px 18px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      fontWeight: 700,
                      color: "var(--muted)",
                    }}
                  >
                    LuxSense™ Smart Light Bar
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      borderRadius: 999,
                      padding: "7px 11px",
                      background: "rgba(200,169,106,.12)",
                      color: "var(--fg)",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    <Sparkles size={13} color="var(--accent)" />
                    Smart Lighting. Instantly.
                  </span>
                </div>

                <div style={{ padding: 18 }}>
                  {heroVisualImage ? (
                    <img
                      src={heroVisualImage}
                      alt={heroImageAlt}
                      loading="eager"
                      style={{
                        width: "100%",
                        aspectRatio: "4 / 5",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: 24,
                        display: "block",
                      }}
                    />
                  ) : (
                    // TODO: Replace this gradient fallback with a real product image if catalog media is unavailable.
                    <div
                      role="img"
                      aria-label={heroImageAlt}
                      style={{
                        width: "100%",
                        aspectRatio: "4 / 5",
                        borderRadius: 24,
                        display: "grid",
                        placeItems: "center",
                        background: "linear-gradient(160deg, #171717, #2a2a2a 55%, #f5f5f3 55%, #ffffff 100%)",
                        color: "white",
                        textAlign: "center",
                        padding: 24,
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 14, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,.72)" }}>
                          LuxSense™
                        </div>
                        <div className="serif" style={{ fontSize: 40, lineHeight: 1, marginTop: 12, fontWeight: 700 }}>
                          Smart Light Bar
                        </div>
                        <div style={{ marginTop: 12, fontSize: 16, color: "rgba(255,255,255,.78)" }}>
                          Smart Lighting. Instantly.
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 10,
                    padding: "0 18px 18px",
                  }}
                >
                  {[
                    ["Wireless", "No wiring"],
                    ["Rechargeable", "USB power"],
                    ["Auto-off", "About 15s"],
                  ].map(([title, value]) => (
                    <div
                      key={title}
                      style={{
                        borderRadius: 18,
                        background: "rgba(17,17,17,.04)",
                        border: "1px solid rgba(17,17,17,.06)",
                        padding: "14px 12px",
                      }}
                    >
                      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--muted)" }}>{title}</div>
                      <div className="serif" style={{ marginTop: 8, fontSize: 18, lineHeight: 1.05, fontWeight: 700 }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1180px) {
          #hero > div > div > div:nth-child(2) {
            padding: 42px 32px 42px 18px !important;
          }
          #hero > div > div > div:first-child {
            padding: 72px 40px 56px 44px !important;
          }
          #hero h1 {
            font-size: 68px !important;
          }
        }
        @media (max-width: 900px) {
          #hero > div > div {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          #hero > div > div > div:nth-child(2) {
            display: none !important;
          }
          #hero > div > div > div:first-child,
          #hero > div > div > div:nth-child(2) {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          #hero > div > div > div:first-child {
            padding-top: 72px !important;
            padding-bottom: 28px !important;
          }
          #hero > div > div > div:nth-child(2) {
            padding-top: 0 !important;
            padding-bottom: 28px !important;
          }
        }
        @media (max-width: 760px) {
          #hero {
            padding: 10px 10px 24px !important;
          }
          #hero > div > div {
            border-radius: 28px !important;
          }
          #hero > div > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
          #hero > div > div > div:first-child > div:last-child {
            display: none !important;
          }
          #hero > div > div > div:nth-child(2) {
            display: none !important;
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
            padding-top: 56px !important;
            padding-bottom: 18px !important;
          }
          #hero > div > div > div:first-child > div:first-child {
            max-width: none !important;
          }
          #hero > div > div > div:first-child > div:first-child > div {
            gap: 10px !important;
          }
          #hero > div > div > div:first-child > div:first-child > div:nth-child(4) {
            margin-top: 24px !important;
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 10px !important;
          }
          #hero > div > div > div:first-child > div:first-child > div:nth-child(4) a {
            flex: 1 1 160px !important;
            min-height: 52px !important;
            font-size: 15px !important;
            padding: 0 20px !important;
          }
          #hero > div > div > div:first-child > div:first-child > div:nth-child(5) {
            margin-top: 24px !important;
            gap: 10px !important;
          }
          #hero > div > div > div:first-child > div:last-child {
            padding: 14px !important;
            margin-top: 24px !important;
            gap: 10px !important;
            border-radius: 20px !important;
          }
          #hero > div > div > div:first-child > div:last-child > div:last-child {
            white-space: normal !important;
          }
          #hero > div > div > div:first-child > div:last-child > div:first-child > div:first-child {
            font-size: 9px !important;
          }
          #hero > div > div > div:first-child > div:last-child > div:first-child > div:last-child {
            font-size: 27px !important;
          }
          #hero > div > div > div:first-child > div:last-child > div:last-child {
            font-size: 11px !important;
          }
          #hero > div > div > div:first-child > div:last-child > div:first-child > span:last-child {
            font-size: 12px !important;
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
