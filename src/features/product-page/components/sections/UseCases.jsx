import { USE_CASES } from "../../data/productPageData.js"

export default function UseCases() {
  return (
    <section id="use-cases" style={{ padding: "86px 24px", background: "var(--sec)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Use cases
          </p>
          <h2 className="serif section-title" style={{ fontSize: 58, maxWidth: 760 }}>
            Designed for the rooms where gentle light matters most.
          </h2>
          <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.72, maxWidth: 680 }}>
            Hallways, stairs, closets, kitchens, bedrooms, and bathrooms feel more usable when the lighting appears automatically and stays visually discreet.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            marginTop: 38,
          }}
        >
          {USE_CASES.map(({ title, desc, image, alt, label }) => {
            const imageSrc = typeof image === "object" ? image?.src : image
            const imageAlt = alt || (typeof image === "object" ? image?.alt : `${title} use case for Luxense MotionGlow`)
            const imageLabel = label || (typeof image === "object" ? image?.label : title)

            return (
              <article
                key={title}
                className="soft-card"
                style={{
                  overflow: "hidden",
                  borderRadius: 28,
                  background: "rgba(255,255,255,.90)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, rgba(18,18,18,.96), rgba(72,72,72,.84))",
                  }}
                >
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "radial-gradient(circle at 24% 24%, rgba(201,164,106,.28), transparent 24%), linear-gradient(160deg, rgba(18,18,18,.96), rgba(72,72,72,.84))",
                        display: "grid",
                        placeItems: "center",
                        color: "white",
                        textAlign: "center",
                        padding: 20,
                      }}
                    >
                      <div>
                        <div
                          style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", opacity: 0.72, fontWeight: 800 }}
                        >
                          {imageLabel}
                        </div>
                        <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6, fontWeight: 700, maxWidth: 240 }}>
                          TODO: Replace with final {title.toLowerCase()} image
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(18,18,18,.06) 0%, rgba(18,18,18,.34) 100%), radial-gradient(circle at 76% 16%, rgba(201,164,106,.16), transparent 18%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 16,
                      bottom: 16,
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,.12)",
                      border: "1px solid rgba(255,255,255,.16)",
                      color: "white",
                      fontSize: 12,
                      fontWeight: 800,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {title}
                  </div>
                </div>

                <div style={{ padding: 22 }}>
                  <h3 style={{ fontSize: 22, lineHeight: 1.12, fontWeight: 800 }}>{title}</h3>
                  <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.7, color: "var(--muted)" }}>{desc}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1120px) {
          #use-cases > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #use-cases {
            padding: 64px 16px !important;
          }
          #use-cases .section-title {
            font-size: 34px !important;
          }
          #use-cases > div > div:last-child {
            grid-template-columns: 1fr !important;
            margin-top: 24px !important;
            gap: 12px !important;
          }
          #use-cases article > div:last-child {
            padding: 18px !important;
          }
        }
      `}</style>
    </section>
  )
}
