import { REVIEWS_DATA } from "../../data/productPageData.js"
import Stars from "../common/Stars.jsx"

export default function CustomerReviews() {
  return (
    <section id="reviews" style={{ padding: "0 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 720 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Customer reviews
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            Real homes, real feedback, strong first impressions.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginTop: 34 }}>
          {REVIEWS_DATA.map((review, index) => (
            <article
              key={review.name}
              className="soft-card"
              style={{
                padding: 24,
                borderRadius: 26,
                background: index === 1 ? "rgba(17,17,17,.96)" : "rgba(255,255,255,.88)",
                color: index === 1 ? "var(--cream)" : "var(--fg)",
              }}
            >
              <Stars rating={review.rating} size={16} />
              <h3 style={{ marginTop: 18, fontSize: 22, lineHeight: 1.1, fontWeight: 800 }}>{review.title}</h3>
              <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: index === 1 ? "rgba(255,255,255,.76)" : "var(--muted)" }}>
                {review.text}
              </p>
              <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", fontSize: 13 }}>
                <div>
                  <div style={{ fontWeight: 800 }}>{review.name}</div>
                  <div style={{ color: index === 1 ? "rgba(255,255,255,.62)" : "var(--muted)" }}>
                    {review.country} | {review.variant}
                  </div>
                </div>
                <div style={{ color: index === 1 ? "rgba(255,255,255,.62)" : "var(--muted)" }}>{review.date}</div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #reviews > div > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #reviews {
            padding: 0 16px 64px !important;
          }
          #reviews > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #reviews .section-title {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
