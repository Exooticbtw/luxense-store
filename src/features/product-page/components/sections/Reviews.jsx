import { BadgeCheck } from "lucide-react"
import Stars from "../common/Stars.jsx"
import { IMAGE_ASSETS } from "../../data/productPageData.js"
import SafeMediaImage from "../common/SafeMediaImage.jsx"

const REVIEW_IMAGE_LABELS = [
  "MotionGlow customer setup 1",
  "MotionGlow customer setup 2",
  "MotionGlow customer setup 3",
  "MotionGlow customer setup 4",
]

export default function Reviews({ media }) {
  const reviewCards = [
    {
      image: media?.reviewImage1 || media?.productImage || IMAGE_ASSETS.whiteProduct.src,
      rating: 5,
      title: "Looks like it was professionally installed",
      text: "I expected a cheap stick-on light. Instead it feels like a designer fixture. The warm glow in my closet is unreal and guests always ask about it.",
      name: "Margaux L.",
    },
    {
      image: media?.reviewImage2 || IMAGE_ASSETS.motionSensor.src,
      rating: 5,
      title: "Bought one, came back for four",
      text: "Started in the hallway, now they're on every staircase and under the kitchen cabinets. The motion sensor is genuinely instant.",
      name: "Daniel R.",
    },
    {
      image: media?.reviewImage3 || media?.heroImage || IMAGE_ASSETS.finalLifestyle.src,
      rating: 5,
      title: "Battery life is no joke",
      text: "Charged it once over a month ago and still going strong. No more fumbling for switches at night.",
      name: "Priya S.",
    },
    {
      image: media?.reviewImage4 || media?.bedroomImage || IMAGE_ASSETS.closetLifestyle.src,
      rating: 4,
      title: "Beautiful and so easy",
      text: "Magnet mount took about ten seconds. Wish I'd ordered the three-pack from the start.",
      name: "Tom B.",
    },
  ]

  return (
    <section
      id="reviews"
      style={{
        padding: "92px 24px 106px",
        scrollMarginTop: 72,
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 32,
            flexWrap: "wrap",
            marginBottom: 66,
          }}
        >
          <div>
            <p className="eyebrow" style={{ color: "var(--accent)" }}>
              Loved by 3,284+ homes
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 66,
                lineHeight: 1.04,
                fontWeight: 600,
                textWrap: "balance",
              }}
            >
              Real installs, real reviews
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, color: "var(--muted)", fontSize: 17, marginBottom: 18 }}>
            <Stars rating={5} size={23} />
            <span>4.9 average</span>
          </div>
        </div>

        <div className="real-reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 30 }}>
          {reviewCards.map((review, index) => (
            <article
              key={review.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 16,
                alignItems: "start",
                border: "1px solid var(--border)",
                borderRadius: 18,
                background: "rgba(252,250,247,.72)",
                padding: 30,
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 14,
                  width: "100%",
                  aspectRatio: "4 / 3",
                  background:
                    "radial-gradient(circle at 18% 18%, rgba(201,164,106,.18), transparent 24%), radial-gradient(circle at 80% 20%, rgba(255,255,255,.16), transparent 18%), linear-gradient(160deg, rgba(23,23,23,.96), rgba(56,56,56,.92))",
                }}
              >
                <SafeMediaImage
                  src={review.image}
                  alt={REVIEW_IMAGE_LABELS[index] || `MotionGlow customer setup ${index + 1}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  fallbackStyle={{ position: "absolute", inset: 0 }}
                />
              </div>
              <div>
                <Stars rating={review.rating} size={16} />
                <h3 className="serif" style={{ fontSize: 24, lineHeight: 1.12, marginTop: 14, fontWeight: 600 }}>
                  {review.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1.48, marginTop: 10 }}>
                  {review.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 22, color: "var(--muted)" }}>
                  <BadgeCheck size={16} style={{ color: "var(--accent)" }} />
                  <strong style={{ color: "var(--fg)", fontSize: 14 }}>{review.name}</strong>
                  <span>-</span>
                  <span>Verified Buyer</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          .real-reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 760px) {
          #reviews {
            padding: 64px 16px 78px !important;
          }
          #reviews h2 {
            font-size: 42px !important;
          }
          .real-reviews-grid article {
            grid-template-columns: 1fr !important;
            padding: 22px !important;
          }
          .real-reviews-grid img {
            width: 100% !important;
            height: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
