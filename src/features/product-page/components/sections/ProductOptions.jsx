import { COLORS, SIZES } from "../../data/productPageData.js"

export default function ProductOptions({ selectedColorIdx, onSelectColor, selectedSize, setSelectedSize }) {
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
            Choose the finish and length that blends naturally into your room layout.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 18,
            marginTop: 38,
          }}
        >
          <article className="soft-card" style={{ padding: 24, borderRadius: 28, background: "rgba(255,255,255,.86)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 800 }}>Finish</h3>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 18 }}>
              {COLORS.map((color, index) => {
                const selected = index === selectedColorIdx

                return (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => onSelectColor?.(index)}
                    style={{
                      minWidth: 160,
                      minHeight: 70,
                      borderRadius: 20,
                      border: selected ? "1px solid var(--accent)" : "1px solid rgba(17,17,17,.08)",
                      background: selected ? "rgba(200,169,106,.08)" : "rgba(255,255,255,.72)",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "14px 16px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: color.hex,
                        border: "1px solid rgba(17,17,17,.08)",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,.18)",
                        flexShrink: 0,
                      }}
                    />
                    <span>
                      <span style={{ display: "block", fontSize: 15, fontWeight: 800 }}>{color.name}</span>
                      <span style={{ display: "block", fontSize: 13, color: "var(--muted)", marginTop: 2 }}>Premium matte finish</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </article>

          <article className="soft-card" style={{ padding: 24, borderRadius: 28, background: "rgba(17,17,17,.96)", color: "var(--cream)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 800 }}>Length</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12, marginTop: 18 }}>
              {SIZES.map((size) => {
                const selected = selectedSize === size

                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    style={{
                      minHeight: 64,
                      borderRadius: 18,
                      border: selected ? "1px solid rgba(255,255,255,.28)" : "1px solid rgba(255,255,255,.1)",
                      background: selected ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.04)",
                      color: "var(--cream)",
                      fontSize: 18,
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                  >
                    {size}
                  </button>
                )
              })}
            </div>
            <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,.72)" }}>
              White and Black are available in 20cm, 30cm, 40cm, and 50cm sizes so you can keep the lighting proportionate to the space.
            </p>
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
            padding: 64px 16px !important;
          }
          #options > div > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
          }
          #options .section-title {
            font-size: 40px !important;
          }
          #options article > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
