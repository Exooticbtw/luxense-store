import { useState } from "react"

import { ArrowRight, Check, ShieldCheck, Sparkles, Star } from "lucide-react"

import {
  BUNDLE_OPTIONS,
  COLORS,
  HERO_KEY_BENEFITS,
  HERO_TRUST_BADGES,
  LIGHT_TONES,
  PAYMENT_BADGES,
  PRODUCT_NAME,
} from "../../data/productPageData.js"
import lifestyleImage from "../../../../assets/product/hero-detail.png"

const PRIMARY_COPY = "Premium motion lighting for a calmer, safer home."
const SECONDARY_COPY =
  "Luxense MotionGlow turns on automatically when you move, adding soft ambient light exactly where you need it."

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
  const [selectedTone, setSelectedTone] = useState(LIGHT_TONES[0]?.title || "Warm Light 3000K")
  const heroVisualImage = purchase?.images?.[purchase?.activeImage] || lifestyleImage
  const priceLabel = formatPrice(purchase?.price, "$29.99")
  const compareAtLabel = formatPrice(purchase?.origPrice, "$49.48")

  const bundle = selectedBundle || BUNDLE_OPTIONS.find((item) => item.quantity === purchase?.qty) || BUNDLE_OPTIONS[1]
  const selectedColorName = selectedColor || COLORS[purchase?.colorIdx || 0]?.name || "White"

  const summaryRows = [
    ["Bundle", bundle?.label || "Buy 2"],
    ["Color", selectedColorName],
    ["Size", selectedSize || "30cm"],
    ["Tone", selectedTone.replace(" Light", "")],
  ]

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #f7f4ef 0%, #fcfaf6 100%)",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.06fr .94fr",
              alignItems: "stretch",
            }}
          >
            <div
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
                  <img
                    src={heroVisualImage}
                    alt="Luxense MotionGlow lifestyle scene in a modern home"
                    loading="eager"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: 380,
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
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
                      4.9/5 from happy customers
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
                      30-day guarantee
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
                    {PRODUCT_NAME}
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
                    {PRIMARY_COPY}
                  </h1>

                  <p
                    style={{
                      maxWidth: 650,
                      fontSize: 16,
                      lineHeight: 1.72,
                      color: "rgba(255,255,255,.76)",
                    }}
                  >
                    {SECONDARY_COPY}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 2 }}>
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

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
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
                      Get Yours Today <ArrowRight size={18} />
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
                      See It In Action
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
                    {HERO_TRUST_BADGES.map((item, index) => (
                      <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                        {index > 0 && <span style={{ color: "rgba(255,255,255,.30)" }}>•</span>}
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
                      Premium Motion Lighting For Modern Homes
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 6, flexWrap: "wrap" }}>
                      <span className="serif" style={{ fontSize: 28, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.05em" }}>
                        {priceLabel}
                      </span>
                      <span style={{ color: "rgba(255,255,255,.48)", textDecoration: "line-through", fontSize: 14, fontWeight: 500 }}>
                        {compareAtLabel}
                      </span>
                    </div>
                  </div>
                  <div style={{ alignSelf: "center", fontSize: 12, color: "rgba(255,255,255,.74)", fontWeight: 600 }}>
                    Secure checkout and fast support
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: 28,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.98) 0%, rgba(248,243,235,.98) 100%)",
                borderLeft: "1px solid rgba(18,18,18,.08)",
              }}
            >
              <div
                className="soft-card"
                style={{
                  borderRadius: 30,
                  padding: 22,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,.96), rgba(250,247,240,.94))",
                  boxShadow: "0 20px 52px rgba(18,18,18,.08)",
                }}
              >
                <div style={{ display: "grid", gap: 10 }}>
                  <div>
                    <p
                      style={{
                        fontSize: 10.5,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        fontWeight: 800,
                      }}
                    >
                      Product purchase
                    </p>
                    <h2
                      className="serif"
                      style={{
                        marginTop: 8,
                        fontSize: "clamp(28px, 2.2vw, 34px)",
                        lineHeight: 1.03,
                        letterSpacing: "-0.05em",
                        fontWeight: 700,
                      }}
                    >
                      {PRODUCT_NAME}
                    </h2>
                    <p style={{ marginTop: 8, fontSize: 15, lineHeight: 1.65, color: "var(--muted)" }}>
                      Premium Motion Lighting For Modern Homes
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: 14,
                      padding: "14px 16px",
                      borderRadius: 22,
                      background: "linear-gradient(135deg, rgba(201,164,106,.14), rgba(143,174,138,.08))",
                      border: "1px solid rgba(201,164,106,.22)",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--muted)", fontWeight: 800 }}>
                        Starting price
                      </div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 6, flexWrap: "wrap" }}>
                        <span className="serif" style={{ fontSize: 36, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.05em" }}>
                          {priceLabel}
                        </span>
                        <span style={{ color: "var(--muted)", textDecoration: "line-through", fontSize: 16, fontWeight: 600 }}>
                          {compareAtLabel}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "8px 12px",
                        borderRadius: 999,
                        background: "rgba(143,174,138,.12)",
                        color: "#36563a",
                        fontSize: 12,
                        fontWeight: 800,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Bundle savings
                    </div>
                  </div>

                  <div style={{ display: "grid", gap: 10, marginTop: 2 }}>
                    <SectionLabel text="Bundle" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
                      {BUNDLE_OPTIONS.map((option) => {
                        const active = option.quantity === bundle.quantity
                        return (
                          <button
                            key={option.label}
                            type="button"
                            onClick={() => onPreviewBundle?.(option.quantity)}
                            aria-pressed={active}
                            style={{
                              minHeight: 96,
                              borderRadius: 22,
                              border: active ? "1px solid rgba(201,164,106,.72)" : "1px solid rgba(18,18,18,.08)",
                              background: active
                                ? "linear-gradient(180deg, rgba(201,164,106,.14), rgba(255,255,255,.96))"
                                : "rgba(255,255,255,.88)",
                              padding: "14px 14px 12px",
                              textAlign: "left",
                              cursor: "pointer",
                              boxShadow: active ? "0 16px 28px rgba(201,164,106,.10)" : "0 10px 22px rgba(18,18,18,.05)",
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                              <span style={{ fontSize: 15, fontWeight: 800 }}>{option.label}</span>
                              {active && (
                                <span
                                  style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    background: "var(--fg)",
                                    color: "var(--cream)",
                                    display: "grid",
                                    placeItems: "center",
                                  }}
                                >
                                  <Check size={14} />
                                </span>
                              )}
                            </div>
                            <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700, letterSpacing: "-0.03em" }}>
                              ${option.price.toFixed(2)}
                            </div>
                            <div style={{ marginTop: 4, fontSize: 12, color: active ? "rgba(18,18,18,.68)" : "var(--muted)", fontWeight: 700 }}>
                              {option.savings}
                            </div>
                            <div style={{ marginTop: 6, fontSize: 12, color: active ? "rgba(18,18,18,.66)" : "var(--muted)", lineHeight: 1.45 }}>
                              {option.badge}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr", marginTop: 2 }}>
                    <div style={{ display: "grid", gap: 10 }}>
                      <SectionLabel text="Color" />
                      <div style={{ display: "grid", gap: 10 }}>
                        {COLORS.map((color, index) => {
                          const active = color.name === selectedColorName
                          return (
                            <button
                              key={color.name}
                              type="button"
                              onClick={() => onSelectColor?.(index)}
                              aria-pressed={active}
                              style={{
                                minHeight: 64,
                                borderRadius: 20,
                                border: active ? "1px solid rgba(201,164,106,.72)" : "1px solid rgba(18,18,18,.08)",
                                background: active ? "rgba(201,164,106,.08)" : "rgba(255,255,255,.88)",
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "12px 14px",
                                cursor: "pointer",
                                textAlign: "left",
                                boxShadow: active ? "0 12px 24px rgba(201,164,106,.08)" : "0 8px 18px rgba(18,18,18,.05)",
                              }}
                            >
                              <span
                                style={{
                                  width: 22,
                                  height: 22,
                                  borderRadius: "50%",
                                  background: color.hex,
                                  border: "1px solid rgba(18,18,18,.08)",
                                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,.16)",
                                  flexShrink: 0,
                                }}
                              />
                              <span style={{ minWidth: 0, flex: 1 }}>
                                <span style={{ display: "block", fontSize: 14, fontWeight: 800 }}>{color.name}</span>
                                <span style={{ display: "block", marginTop: 2, fontSize: 12, color: "var(--muted)" }}>
                                  {active ? "Selected finish" : "Premium matte finish"}
                                </span>
                              </span>
                              {active && <Check size={14} color="var(--accent)" />}
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
                                borderRadius: 20,
                                border: active ? "1px solid rgba(201,164,106,.72)" : "1px solid rgba(18,18,18,.08)",
                                background: active ? "rgba(201,164,106,.08)" : "rgba(255,255,255,.88)",
                                fontSize: 15,
                                fontWeight: 800,
                                cursor: "pointer",
                                boxShadow: active ? "0 12px 24px rgba(201,164,106,.08)" : "0 8px 18px rgba(18,18,18,.05)",
                              }}
                            >
                              {size}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "grid", gap: 10, marginTop: 2 }}>
                    <SectionLabel text="Light tone" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
                      {LIGHT_TONES.map((tone) => {
                        const active = tone.title === selectedTone

                        return (
                          <button
                            key={tone.title}
                            type="button"
                            onClick={() => setSelectedTone(tone.title)}
                            aria-pressed={active}
                            style={{
                              minHeight: 86,
                              borderRadius: 22,
                              border: active ? "1px solid rgba(201,164,106,.72)" : "1px solid rgba(18,18,18,.08)",
                              background: active ? "rgba(201,164,106,.08)" : "rgba(255,255,255,.88)",
                              padding: "12px 12px 10px",
                              textAlign: "left",
                              cursor: "pointer",
                              boxShadow: active ? "0 12px 24px rgba(201,164,106,.08)" : "0 8px 18px rgba(18,18,18,.05)",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: 8,
                                borderRadius: 999,
                                background: tone.swatch,
                              }}
                            />
                            <div style={{ marginTop: 10, fontSize: 14.5, fontWeight: 800 }}>{tone.title}</div>
                            <div style={{ marginTop: 4, fontSize: 12, color: "var(--muted)", lineHeight: 1.45 }}>{tone.tone}</div>
                          </button>
                        )
                      })}
                    </div>
                    <div style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.6 }}>
                      {LIGHT_TONES.find((tone) => tone.title === selectedTone)?.desc || "Best fit for the room."}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: 14,
                      borderRadius: 22,
                      background: "linear-gradient(180deg, rgba(255,255,255,.98), rgba(245,241,233,.94))",
                      border: "1px solid rgba(18,18,18,.06)",
                    }}
                  >
                    <div style={{ display: "grid", gap: 8 }}>
                      {summaryRows.map(([label, value]) => (
                        <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
                          <span
                            style={{
                              fontSize: 10.5,
                              textTransform: "uppercase",
                              letterSpacing: "0.16em",
                              color: "rgba(18,18,18,.52)",
                              fontWeight: 700,
                            }}
                          >
                            {label}
                          </span>
                          <span style={{ fontSize: 14.5, fontWeight: 700, textAlign: "right", color: "rgba(18,18,18,.92)" }}>
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
                            color: "rgba(18,18,18,.52)",
                            fontWeight: 700,
                          }}
                        >
                          Current price
                        </span>
                        <span className="serif" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.04em" }}>
                          {priceLabel}
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
                      minHeight: 56,
                      borderRadius: 999,
                      border: "1px solid rgba(201,164,106,.55)",
                      background: "linear-gradient(135deg, #171717, #24211c 55%, #8fb58b 220%)",
                      color: "var(--cream)",
                      padding: "0 22px",
                      fontSize: 15.5,
                      fontWeight: 800,
                      cursor: "pointer",
                      boxShadow: "0 18px 34px rgba(18,18,18,.16)",
                    }}
                  >
                    Add to Cart <ArrowRight size={18} />
                  </button>

                  <div style={{ display: "grid", gap: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "rgba(18,18,18,.62)", fontWeight: 600 }}>
                      <ShieldCheck size={14} color="#8fb58b" />
                      Secure checkout
                      <span style={{ color: "rgba(18,18,18,.34)" }}>•</span>
                      Free shipping
                      <span style={{ color: "rgba(18,18,18,.34)" }}>•</span>
                      30-day guarantee
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {PAYMENT_BADGES.map((badge) => (
                        <span
                          key={badge}
                          style={{
                            padding: "7px 10px",
                            borderRadius: 999,
                            border: "1px solid rgba(18,18,18,.08)",
                            background: "linear-gradient(180deg, rgba(255,255,255,.98), rgba(245,245,243,.92))",
                            fontSize: 12,
                            fontWeight: 700,
                            color: "var(--fg)",
                            boxShadow: "0 6px 16px rgba(18,18,18,.05)",
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
        </div>
      </div>

      <style>{`
        #hero .hero-primary-cta,
        #hero .hero-secondary-cta,
        #hero .purchase-cta,
        #hero .size-option {
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease, filter .18s ease;
        }
        #hero .hero-primary-cta:hover,
        #hero .purchase-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 22px 40px rgba(18,18,18,.18) !important;
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
          outline: 2px solid rgba(201,164,106,.55);
          outline-offset: 2px;
        }
        @media (max-width: 1080px) {
          #hero > div > div > div {
            grid-template-columns: 1fr !important;
          }
          #hero > div > div > div:last-child {
            border-left: none !important;
            border-top: 1px solid rgba(18,18,18,.08) !important;
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
            padding: 16px !important;
            min-height: auto !important;
          }
          #hero > div > div > div:first-child > div:first-child {
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
          #hero > div > div > div:first-child > div:nth-child(2) > div:nth-child(5) {
            gap: 8px !important;
          }
          #hero > div > div > div:first-child > div:nth-child(2) > div:nth-child(6) > button,
          #hero > div > div > div:first-child > div:nth-child(2) > div:nth-child(6) > a {
            min-height: 52px !important;
            width: 100% !important;
            font-size: 15px !important;
            padding: 0 18px !important;
          }
          #hero > div > div > div:first-child > div:last-child {
            margin-top: 16px !important;
            gap: 12px !important;
            padding: 14px 16px !important;
            grid-template-columns: 1fr !important;
          }
          #hero > div > div > div:last-child {
            padding: 16px !important;
          }
          #hero > div > div > div:last-child > div > div {
            padding: 16px !important;
          }
          #hero > div > div > div:last-child h2 {
            font-size: 24px !important;
          }
          #hero > div > div > div:last-child > div > div > div:nth-child(4) > div,
          #hero > div > div > div:last-child > div > div > div:nth-child(5) > div,
          #hero > div > div > div:last-child > div > div > div:nth-child(6) > div {
            grid-template-columns: 1fr !important;
          }
          #hero > div > div > div:last-child button {
            min-height: 52px !important;
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
        color: "rgba(18,18,18,.52)",
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
