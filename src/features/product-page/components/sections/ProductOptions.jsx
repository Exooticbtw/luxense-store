import { ArrowRight, Check } from "lucide-react"

import { COLORS, SIZES } from "../../data/productPageData.js"

const SIZE_GUIDE = {
  "20cm": "Best for drawers, small cabinets, compact spaces.",
  "30cm": "Great for closets, shelves, and wardrobes.",
  "40cm": "Ideal for kitchen cabinets, counters, and medium areas.",
  "50cm": "Best for wider closets, larger cabinets, and larger spaces.",
}

export default function ProductOptions({ selectedColorIdx, onSelectColor, selectedSize, setSelectedSize, onOpenCart }) {
  const selectedColor = COLORS[selectedColorIdx] || COLORS[0]

  return (
    <section id="options" style={{ padding: "86px 24px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Color and size options
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Make it match your space.
          </h2>
          <p style={{ marginTop: 18, color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }}>
            Choose a finish and length that blend naturally into the room, with clear selection feedback as you shop.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 18,
            marginTop: 38,
            alignItems: "start",
          }}
        >
          <article className="soft-card" style={{ padding: 24, borderRadius: 28, background: "rgba(255,255,255,.86)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800 }}>Finish</h3>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 999,
                  border: "1px solid rgba(17,17,17,.08)",
                  background: "rgba(17,17,17,.03)",
                  padding: "8px 12px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}
              >
                Selected: {selectedColor?.name} - {selectedSize}
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 14,
                marginTop: 18,
              }}
            >
              {COLORS.map((color, index) => {
                const selected = index === selectedColorIdx

                return (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => onSelectColor?.(index)}
                    aria-pressed={selected}
                    style={{
                      minHeight: 92,
                      borderRadius: 22,
                      border: selected ? "2px solid var(--accent)" : "1px solid rgba(17,17,17,.08)",
                      background: selected ? "rgba(200,169,106,.08)" : "rgba(255,255,255,.8)",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "16px 16px",
                      cursor: "pointer",
                      textAlign: "left",
                      boxShadow: selected ? "0 16px 32px rgba(200,169,106,.12)" : "0 8px 22px rgba(17,17,17,.05)",
                      transform: selected ? "translateY(-1px)" : "translateY(0)",
                    }}
                  >
                    <span
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: color.hex,
                        border: "1px solid rgba(17,17,17,.08)",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,.18)",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ minWidth: 0, flex: 1 }}>
                      <span style={{ display: "block", fontSize: 15, fontWeight: 800 }}>{color.name}</span>
                      <span style={{ display: "block", fontSize: 13, color: "var(--muted)", marginTop: 3 }}>
                        {selected ? "Selected finish" : "Premium matte finish"}
                      </span>
                    </span>
                    {selected && (
                      <span
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: "var(--fg)",
                          color: "var(--cream)",
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Check size={15} />
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </article>

          <article className="soft-card" style={{ padding: 24, borderRadius: 28, background: "rgba(17,17,17,.96)", color: "var(--cream)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800 }}>Length</h3>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 999,
                  background: "rgba(255,255,255,.08)",
                  color: "rgba(255,255,255,.76)",
                  padding: "8px 12px",
                  fontSize: 12,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                {selectedSize}
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 12,
                marginTop: 18,
              }}
            >
              {SIZES.map((size) => {
                const selected = selectedSize === size

                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selected}
                    style={{
                      minHeight: 94,
                      borderRadius: 22,
                      border: selected ? "2px solid rgba(200,169,106,.8)" : "1px solid rgba(255,255,255,.12)",
                      background: selected ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.04)",
                      color: "var(--cream)",
                      padding: "14px 14px",
                      textAlign: "left",
                      cursor: "pointer",
                      boxShadow: selected ? "0 14px 28px rgba(17,17,17,.22)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em" }}>
                        {size}
                      </span>
                      {selected && (
                        <span
                          style={{
                            width: 26,
                            height: 26,
                            borderRadius: "50%",
                            background: "var(--accent)",
                            color: "var(--fg)",
                            display: "grid",
                            placeItems: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Check size={15} />
                        </span>
                      )}
                    </div>
                    <p style={{ marginTop: 8, fontSize: 12, lineHeight: 1.55, color: "rgba(255,255,255,.72)" }}>
                      {SIZE_GUIDE[size]}
                    </p>
                  </button>
                )
              })}
            </div>

            <p
              style={{
                marginTop: 18,
                fontSize: 13,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.68)",
              }}
            >
              White and Black are available in 20cm, 30cm, 40cm, and 50cm sizes so you can keep the lighting proportionate to the space.
            </p>

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
                marginTop: 18,
                fontSize: 15,
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Get Yours Today <ArrowRight size={17} />
            </button>
          </article>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #options > div > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 760px) {
          #options {
            padding: 60px 16px 56px !important;
          }
          #options > div > div:nth-of-type(2) {
            gap: 12px !important;
            margin-top: 24px !important;
          }
          #options .section-title {
            font-size: 36px !important;
          }
          #options article {
            padding: 18px !important;
            border-radius: 22px !important;
          }
          #options article > div:first-of-type {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          #options article > div:first-of-type > span {
            width: 100% !important;
          }
          #options article h3 {
            font-size: 17px !important;
          }
          #options article button {
            min-height: 84px !important;
            border-radius: 18px !important;
            padding: 14px !important;
          }
          #options article button span:first-child {
            font-size: 16px !important;
          }
          #options article button p {
            margin-top: 4px !important;
            font-size: 12px !important;
          }
          #options article > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          #options article > div:nth-of-type(2) button {
            min-height: 88px !important;
            padding: 14px !important;
          }
          #options article > div:nth-of-type(2) button span:first-child {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  )
}
