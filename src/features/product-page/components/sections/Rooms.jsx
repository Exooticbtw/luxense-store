import { IMAGE_ASSETS } from "../../data/productPageData.js"
import SafeMediaImage from "../common/SafeMediaImage.jsx"

export default function Rooms({ media, theme }) {
  const roomCards = [
    {
      title: "Bedroom",
      units: "1-2 units",
      image: media?.bedroomImage || IMAGE_ASSETS.hallwayLifestyle.src,
      featured: true,
    },
    {
      title: "Closet",
      units: "1-2 units",
      image: media?.closetImage || IMAGE_ASSETS.closetLifestyle.src,
    },
    {
      title: "Kitchen",
      units: "2-3 units",
      image: media?.kitchenImage || IMAGE_ASSETS.kitchenLifestyle.src,
    },
    {
      title: "Hallway",
      units: "2 units",
      image: media?.hallwayImage || IMAGE_ASSETS.hallwayLifestyle.src,
    },
    {
      title: "Staircase",
      units: "3-4 units",
      image: media?.staircaseImage || media?.heroImage || IMAGE_ASSETS.stairLifestyle.src,
    },
    {
      title: "Wardrobe",
      units: "2-4 units",
      image: media?.wardrobeImage || media?.productImage || IMAGE_ASSETS.whiteProduct.src,
      wide: true,
    },
  ]

  return (
    <section
      id="rooms"
      style={{
        padding: "92px 24px 110px",
        scrollMarginTop: 72,
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <h2
          className="serif"
          style={{
            maxWidth: 900,
            fontSize: 66,
            lineHeight: 1.05,
            fontWeight: 600,
            textWrap: "balance",
          }}
        >
          {theme?.roomsTitle || "One light solves a problem. A few transform a home."}
        </h2>

        <div
          className="spaces-mosaic"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr 1fr",
            gridAutoRows: 390,
            gap: 28,
            marginTop: 70,
          }}
        >
          {roomCards.map((room) => (
            <figure
              key={room.title}
              className={room.featured ? "spaces-card spaces-card-featured" : room.wide ? "spaces-card spaces-card-wide" : "spaces-card"}
              style={{
                position: "relative",
                minHeight: 0,
                borderRadius: 16,
                overflow: "hidden",
                margin: 0,
                background: "var(--sec)",
              }}
            >
              <SafeMediaImage
                src={room.image}
                alt={`${room.title} lighting with Luxense Glow Bar`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "saturate(.95)",
                }}
                fallbackStyle={{ position: "absolute", inset: 0 }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(20,14,10,.04) 32%, rgba(20,14,10,.78) 100%)",
                }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  left: 26,
                  right: 26,
                  bottom: 26,
                  color: "var(--cream)",
                  textShadow: "0 2px 16px rgba(0,0,0,.35)",
                }}
              >
                <h3 className="serif" style={{ fontSize: 30, lineHeight: 1, fontWeight: 600 }}>
                  {room.title}
                </h3>
                <p style={{ marginTop: 4, fontSize: 15, fontWeight: 700 }}>{room.units}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          className="room-planner"
          style={{
            marginTop: 72,
            border: "1px solid var(--border)",
            borderRadius: 18,
            background: "rgba(252,250,247,.58)",
            padding: "46px 52px 52px",
          }}
        >
          <h3 className="serif" style={{ fontSize: 32, lineHeight: 1.1, fontWeight: 600 }}>
            {theme?.plannerTitle || "Room planner"}
          </h3>
          <p style={{ marginTop: 10, color: "var(--muted)", fontSize: 18 }}>
            {theme?.plannerText || "A simple guide to lighting each space beautifully."}
          </p>

          <div
            className="room-planner-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              border: "1px solid var(--border)",
              borderRadius: 14,
              overflow: "hidden",
              marginTop: 38,
              background: "rgba(252,250,247,.42)",
            }}
          >
            {[
              ["Small Closet", "1 Unit"],
              ["Large Closet", "2 Units"],
              ["Kitchen", "2-3 Units"],
              ["Hallway", "2 Units"],
              ["Staircase", "3-4 Units"],
              ["Entire Home", "5+ Units"],
            ].map(([room, units], index) => (
              <div
                key={room}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 18,
                  minHeight: 70,
                  padding: "0 28px",
                  borderRight: index % 3 !== 2 ? "1px solid var(--border)" : "none",
                  borderBottom: index < 3 ? "1px solid var(--border)" : "none",
                  fontSize: 18,
                }}
              >
                <span>{room}</span>
                <strong>{units}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .spaces-card-featured {
          grid-row: span 2;
        }
        .spaces-card-wide {
          grid-column: span 1;
        }
        @media (max-width: 1040px) {
          .spaces-mosaic {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            grid-auto-rows: 340px !important;
          }
          .spaces-card-featured {
            grid-row: span 1 !important;
          }
          .room-planner-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .room-planner-grid > div {
            border-right: 1px solid var(--border) !important;
            border-bottom: 1px solid var(--border) !important;
          }
        }
        @media (max-width: 760px) {
          #rooms {
            padding: 64px 16px 76px !important;
          }
          #rooms h2 {
            font-size: 42px !important;
          }
          .spaces-mosaic {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 320px !important;
            gap: 16px !important;
            margin-top: 42px !important;
          }
          .room-planner {
            margin-top: 42px !important;
            padding: 30px 22px !important;
          }
          .room-planner-grid {
            grid-template-columns: 1fr !important;
            margin-top: 26px !important;
          }
          .room-planner-grid > div {
            min-height: 64px !important;
            padding: 0 18px !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
        }
      `}</style>
    </section>
  )
}
