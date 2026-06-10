import Stars from "../common/Stars.jsx"
import { getMotionGlowContent } from "../../utils/motionGlowContent.js"

export default function CustomerReviews({ shopData }) {
  const content = getMotionGlowContent(shopData ?? {})
  const reviews = content.reviews
  const reviewCards = (reviews.items || []).slice(0, 4)

  return (
    <section id="reviews" style={{ padding: "0 24px 64px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div className="soft-card" style={{ padding: 22, borderRadius: 30, background: "linear-gradient(180deg, rgba(255,255,255,.95), rgba(247,244,239,.98))" }}>
          <div style={{ display: "grid", gap: 10, maxWidth: 760 }}>
            <p className="eyebrow" style={{ color: "var(--accent)" }}>
              {reviews.reviewsEyebrow}
            </p>
            <h2 className="serif section-title" style={{ fontSize: "clamp(34px, 3vw, 48px)", lineHeight: 1.04 }}>
              {reviews.reviewsTitle}
            </h2>
            <p style={{ maxWidth: 640, fontSize: 15.5, lineHeight: 1.65, color: "var(--muted)" }}>
              {reviews.reviewsDescription}
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
            {[
              ["4.9/5", "Average rating"],
              ["3,284+", "Happy customers"],
              ["89%", "Purchased additional units"],
            ].map(([value, label]) => (
              <div
                key={label}
                style={{
                  padding: "9px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(17,17,17,.08)",
                  background: "rgba(255,255,255,.78)",
                  boxShadow: "0 10px 24px rgba(17,17,17,.04)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span className="serif" style={{ fontSize: 16, lineHeight: 1, fontWeight: 700 }}>
                  {value}
                </span>
                <span style={{ fontSize: 11.5, color: "var(--muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="reviews-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 12,
              marginTop: 22,
            }}
          >
            {reviewCards.map((review, index) => {
              const avatar = (review.name || "L").split(" ").map((part) => part[0]).join("").slice(0, 2)
              const accentSwatches = ["#c89a59", "#8fb58b", "#d7c7a8", "#74685d"]
              const reviewAccent = accentSwatches[index % accentSwatches.length]

              return (
                <article
                  key={review.name}
                  className="soft-card"
                  style={{
                    borderRadius: 22,
                    padding: 16,
                    background: "rgba(255,255,255,.96)",
                    border: "1px solid rgba(17,17,17,.08)",
                    boxShadow: "0 12px 28px rgba(17,17,17,.05)",
                    display: "grid",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                        background: `linear-gradient(135deg, ${reviewAccent}, rgba(255,255,255,.2))`,
                        color: "white",
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        boxShadow: "0 10px 22px rgba(17,17,17,.10)",
                      }}
                      aria-hidden="true"
                    >
                      {avatar}
                    </div>

                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <Stars rating={5} size={13} />
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            borderRadius: 999,
                            border: "1px solid rgba(17,17,17,.08)",
                            background: "rgba(201,164,106,.08)",
                            padding: "5px 8px",
                            fontSize: 10.5,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                          }}
                        >
                          Verified Buyer
                        </span>
                      </div>

                      <div style={{ marginTop: 8 }}>
                        <div>
                          <div style={{ fontWeight: 800, color: "var(--fg)", fontSize: 14.5, lineHeight: 1.2 }}>
                            {review.name}
                          </div>
                          <div style={{ marginTop: 3, color: "var(--muted)", fontSize: 12.5 }}>
                            {review.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ paddingLeft: 54 }}>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--fg)" }}>
                      {review.text}
                    </p>
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
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 760px) {
          #reviews {
            padding: 0 16px 56px !important;
          }
          #reviews .reviews-grid {
            grid-template-columns: 1fr !important;
            margin-top: 18px !important;
            gap: 10px !important;
          }
          #reviews .section-title {
            font-size: 32px !important;
          }
          #reviews .soft-card {
            border-radius: 22px !important;
          }
          #reviews .reviews-grid article {
            padding: 14px !important;
          }
          #reviews .reviews-grid article > div:last-child {
            padding-left: 54px !important;
          }
        }
      `}</style>
    </section>
  )
}
