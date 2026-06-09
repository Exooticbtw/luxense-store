import { REVIEWS_DATA } from "../../data/productPageData.js"
import Stars from "../common/Stars.jsx"

export default function CustomerReviews() {
  return (
    <section id="reviews" style={{ padding: "0 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div
          className="soft-card"
          style={{
            padding: 28,
            borderRadius: 34,
            background: "linear-gradient(180deg, rgba(255,255,255,.94), rgba(247,244,239,.98))",
          }}
        >
          <div className="reviews-intro-grid" style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 28, alignItems: "start" }}>
            <div style={{ maxWidth: 720 }}>
              <p className="eyebrow" style={{ color: "var(--accent)" }}>
                Customer reviews
              </p>
              <h2 className="serif section-title" style={{ fontSize: "clamp(40px, 4vw, 58px)" }}>
                Real homes. Real feedback. Real improvement.
              </h2>
              <p style={{ marginTop: 16, maxWidth: 660, fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)" }}>
                A closer look at how MotionGlow™ is being used in closets, hallways, stairs, and everyday spaces.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginTop: 22,
                }}
              >
                {[
                  ["4.9/5", "Average rating"],
                  ["3,284+", "Happy customers"],
                  ["89%", "Purchased additional units"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    style={{
                      minWidth: 160,
                      padding: "14px 16px",
                      borderRadius: 20,
                      border: "1px solid rgba(17,17,17,.08)",
                      background: "rgba(255,255,255,.76)",
                      boxShadow: "0 12px 28px rgba(17,17,17,.05)",
                    }}
                  >
                    <div className="serif" style={{ fontSize: 28, lineHeight: 1, fontWeight: 700 }}>
                      {value}
                    </div>
                    <div style={{ marginTop: 6, fontSize: 12.5, color: "var(--muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: 28,
                padding: 18,
                background: "linear-gradient(180deg, rgba(17,17,17,.96), rgba(17,17,17,.92))",
                color: "var(--cream)",
                border: "1px solid rgba(255,255,255,.08)",
                boxShadow: "0 20px 48px rgba(17,17,17,.10)",
              }}
            >
              <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,.6)", fontWeight: 800 }}>
                Why people mention MotionGlow™
              </div>
              <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                {[
                  "Easy to install in minutes",
                  "Feels more premium than expected",
                  "Soft light that works at night",
                ].map((point) => (
                  <div
                    key={point}
                    style={{
                      borderRadius: 18,
                      padding: "12px 14px",
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.08)",
                      fontSize: 14,
                      lineHeight: 1.5,
                      fontWeight: 700,
                    }}
                  >
                    {point}
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.7, color: "rgba(255,255,255,.72)" }}>
                The cards below are ready for final customer photos or UGC. For now, each one uses an elegant installation placeholder so the section stays visually polished.
              </p>
            </div>
          </div>

          <div
            className="reviews-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 16,
              marginTop: 28,
              gridAutoFlow: "dense",
            }}
          >
            {REVIEWS_DATA.map((review) => {
              const featured = Boolean(review.featured)
              const visual = review.visual || {}

              return (
                <article
                  key={review.name}
                  className="soft-card"
                  style={{
                    overflow: "hidden",
                    borderRadius: 28,
                    gridColumn: featured ? "span 2" : "span 1",
                    background: review.name === "Alicia R." || review.name === "Maya L." ? "rgba(255,255,255,.96)" : "rgba(255,255,255,.9)",
                    border: "1px solid rgba(17,17,17,.08)",
                    boxShadow: "0 16px 34px rgba(17,17,17,.06)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: featured ? "16 / 10" : "4 / 3",
                      background: visual.gradient || "linear-gradient(160deg, #171717 0%, #444444 55%, #c9a46a 140%)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "radial-gradient(circle at 22% 18%, rgba(255,255,255,.14), transparent 22%), radial-gradient(circle at 78% 22%, rgba(201,164,106,.16), transparent 18%), linear-gradient(180deg, rgba(17,17,17,.06), rgba(17,17,17,.36))",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 16,
                        top: 16,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "7px 11px",
                        borderRadius: 999,
                        background: "rgba(255,255,255,.14)",
                        border: "1px solid rgba(255,255,255,.16)",
                        color: "white",
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                      Photo placeholder
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: 16,
                        right: 16,
                        bottom: 16,
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 12,
                        alignItems: "flex-end",
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 12px",
                          borderRadius: 18,
                          background: "rgba(255,255,255,.10)",
                          border: "1px solid rgba(255,255,255,.14)",
                          color: "white",
                          backdropFilter: "blur(12px)",
                          maxWidth: 260,
                        }}
                      >
                        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.16em", opacity: 0.7, fontWeight: 800 }}>
                          {visual.caption || "Customer install"}
                        </div>
                        <div style={{ marginTop: 6, fontSize: 13.5, lineHeight: 1.5, fontWeight: 700 }}>
                          Customer photo placeholder
                        </div>
                      </div>
                      <div
                        style={{
                          padding: "8px 12px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,.10)",
                          border: "1px solid rgba(255,255,255,.14)",
                          color: "white",
                          fontSize: 12,
                          fontWeight: 700,
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        {review.location} · {review.time}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: 22, display: "grid", gap: 14, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <Stars rating={review.rating} size={16} />
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 7,
                          borderRadius: 999,
                          border: "1px solid rgba(17,17,17,.08)",
                          background: "rgba(201,164,106,.10)",
                          padding: "6px 10px",
                          fontSize: 11,
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                        }}
                      >
                        Verified review
                      </span>
                    </div>

                    <div>
                      <h3 style={{ fontSize: 22, lineHeight: 1.12, fontWeight: 800, letterSpacing: "-0.03em" }}>{review.title}</h3>
                      <p style={{ marginTop: 10, fontSize: 15.25, lineHeight: 1.7, color: "var(--muted)" }}>{review.text}</p>
                    </div>

                    <div
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 12,
                        alignItems: "center",
                        fontSize: 13,
                        paddingTop: 10,
                        borderTop: "1px solid rgba(17,17,17,.08)",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 800, color: "var(--fg)" }}>{review.name}</div>
                        <div style={{ color: "var(--muted)", marginTop: 3 }}>
                          {review.location} · {review.variant}
                        </div>
                      </div>
                      <div style={{ color: "var(--muted)", fontWeight: 700 }}>{review.time}</div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1180px) {
          #reviews .reviews-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          #reviews .reviews-grid article {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 1040px) {
          #reviews .reviews-intro-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 760px) {
          #reviews {
            padding: 0 16px 64px !important;
          }
          #reviews .reviews-grid {
            grid-template-columns: 1fr !important;
            margin-top: 20px !important;
            gap: 12px !important;
          }
          #reviews .section-title {
            font-size: 36px !important;
          }
          #reviews .soft-card {
            border-radius: 26px !important;
          }
          #reviews .reviews-grid article > div:first-child {
            aspect-ratio: 16 / 10 !important;
          }
          #reviews .reviews-grid article > div:last-child {
            padding: 18px !important;
          }
          #reviews .reviews-grid h3 {
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
