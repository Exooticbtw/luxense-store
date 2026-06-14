import { BatteryCharging, Clock3, Lightbulb, MoonStar, ScanSearch, ShieldCheck, Sparkles, WandSparkles } from "lucide-react"

import { IMAGE_ASSETS } from "../../data/productPageData.js"
import { getMotionGlowContent } from "../../utils/motionGlowContent.js"
import SafeMediaImage from "../common/SafeMediaImage.jsx"

const ICONS = [MoonStar, Clock3, ScanSearch, Lightbulb, WandSparkles, ShieldCheck, Sparkles, BatteryCharging]

export default function StorySection({ shopData, onOpenCart }) {
  const content = getMotionGlowContent(shopData ?? {})
  const story = content.story
  const benefits = content.benefits
  const storyImage = story.storyImage || IMAGE_ASSETS.heroLifestyle.src

  const storyBlocks = [
    {
      eyebrow: "Problem",
      headline: story.problemTitle,
      subheadline: story.problemDescription,
      cards: [
        { Icon: MoonStar, title: "Harsh overhead light", text: "Avoid waking the whole room just to see at night." },
        { Icon: Clock3, title: "Switches out of reach", text: "Light appears before you need to search for it." },
        { Icon: ScanSearch, title: "Unfinished spaces", text: "Add a refined glow to corners that feel forgotten." },
      ],
    },
    {
      eyebrow: "Solution",
      headline: story.solutionTitle,
      subheadline: story.solutionDescription,
      cards: [
        { Icon: Lightbulb, title: "Motion-aware", text: "Turns on as you approach." },
        { Icon: WandSparkles, title: "Automatic comfort", text: "Turns on the moment you move, then disappears when you don't.", featured: true },
        { Icon: ShieldCheck, title: "Fits beautifully", text: "Slim enough for closets, stairs, cabinets, and hallways." },
      ],
      ctaLabel: story.storyButtonText,
    },
    {
      eyebrow: "Product benefits",
      headline: benefits.benefitsTitle,
      subheadline: benefits.benefitsDescription,
      cards: benefits.items.map((item, index) => ({
        Icon: ICONS[index % ICONS.length],
        title: item.title,
        text: item.text,
      })),
    },
  ]

  return (
    <section id="benefits" style={{ padding: "0 24px 96px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div
        style={{
          maxWidth: 1560,
          margin: "0 auto",
          borderRadius: 34,
          overflow: "hidden",
          background: "linear-gradient(180deg, rgba(241,235,225,.96), rgba(247,244,239,.98))",
          border: "1px solid rgba(18,18,18,.08)",
          boxShadow: "0 26px 64px rgba(18,18,18,.08)",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.02fr .98fr", minHeight: 760 }}>
          <div
            style={{
              position: "relative",
              padding: 24,
              background:
                "radial-gradient(circle at 18% 18%, rgba(201,164,106,.22), transparent 22%), radial-gradient(circle at 78% 14%, rgba(255,255,255,.32), transparent 16%), linear-gradient(180deg, #ede5d8 0%, #f7f4ef 100%)",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "100%",
                minHeight: 700,
                borderRadius: 30,
                overflow: "hidden",
                background: "linear-gradient(180deg, rgba(17,17,17,.14), rgba(17,17,17,.03))",
                border: "1px solid rgba(18,18,18,.08)",
                boxShadow: "0 20px 50px rgba(18,18,18,.08)",
              }}
            >
              <SafeMediaImage
                src={storyImage}
                alt={story.storyTitle}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                fallbackStyle={{ position: "absolute", inset: 0 }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(247,244,239,.06) 0%, rgba(17,17,17,.22) 100%), radial-gradient(circle at 76% 16%, rgba(201,164,106,.18), transparent 16%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 18,
                  top: 18,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,.14)",
                  border: "1px solid rgba(255,255,255,.18)",
                  color: "white",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  backdropFilter: "blur(12px)",
                }}
              >
                Luxense MotionGlow
              </div>

              <div
                style={{
                  position: "absolute",
                  left: 18,
                  right: 18,
                  bottom: 18,
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 14,
                  alignItems: "end",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    maxWidth: 360,
                    padding: "14px 16px",
                    borderRadius: 22,
                    background: "rgba(255,255,255,.12)",
                    border: "1px solid rgba(255,255,255,.16)",
                    color: "white",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", opacity: 0.7, fontWeight: 800 }}>
                    {story.storyEyebrow}
                  </div>
                  <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.55, fontWeight: 700 }}>{story.storyTitle}</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: 34, display: "flex", flexDirection: "column", gap: 26, overflow: "hidden" }}>
            {storyBlocks.map((block, blockIndex) => (
              <article
                key={block.eyebrow}
                style={{
                  display: "grid",
                  gap: 16,
                  paddingTop: blockIndex === 0 ? 0 : 20,
                  borderTop: blockIndex === 0 ? "none" : "1px solid rgba(18,18,18,.08)",
                }}
              >
                <div style={{ maxWidth: 560 }}>
                  <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: 8 }}>
                    {block.eyebrow}
                  </p>
                  <h2 className="serif section-title" style={{ fontSize: 44, maxWidth: 560 }}>
                    {block.headline}
                  </h2>
                  <p style={{ marginTop: 12, color: "var(--muted)", fontSize: 16, lineHeight: 1.68, maxWidth: 540 }}>
                    {block.subheadline}
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: block.cards.length === 4 ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))",
                    gap: 14,
                  }}
                >
                  {block.cards.map((card) => {
                    const featured = Boolean(card.featured)

                    return (
                      <article
                        key={card.title}
                        className="soft-card"
                        style={{
                          padding: 18,
                          borderRadius: 24,
                          background: featured ? "rgba(17,17,17,.96)" : "rgba(255,255,255,.88)",
                          color: featured ? "var(--cream)" : "var(--fg)",
                          border: featured ? "1px solid rgba(17,17,17,.95)" : "1px solid rgba(18,18,18,.08)",
                          boxShadow: featured ? "0 18px 32px rgba(18,18,18,.14)" : "0 12px 28px rgba(18,18,18,.06)",
                          minHeight: 128,
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 16,
                            display: "grid",
                            placeItems: "center",
                            background: featured ? "rgba(255,255,255,.08)" : "linear-gradient(180deg, rgba(201,164,106,.16), rgba(232,221,203,.16))",
                            color: featured ? "var(--cream)" : "var(--fg)",
                          }}
                        >
                          <card.Icon size={19} />
                        </div>
                        <h3 style={{ marginTop: 14, fontSize: 18, lineHeight: 1.12, fontWeight: 800 }}>{card.title}</h3>
                        <p style={{ marginTop: 6, fontSize: 14, lineHeight: 1.5, color: featured ? "rgba(255,255,255,.78)" : "rgba(18,18,18,.62)" }}>
                          {card.text}
                        </p>
                      </article>
                    )
                  })}
                </div>

                {block.ctaLabel && (
                  <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 2 }}>
                    <button
                      type="button"
                      onClick={() => onOpenCart?.()}
                      style={{
                        minHeight: 52,
                        borderRadius: 999,
                        border: "1px solid var(--fg)",
                        background: "var(--fg)",
                        color: "var(--cream)",
                        padding: "0 22px",
                        fontSize: 15,
                        fontWeight: 800,
                        cursor: "pointer",
                        boxShadow: "0 12px 26px rgba(18,18,18,.12)",
                      }}
                    >
                      {block.ctaLabel}
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          #benefits > div > div {
            grid-template-columns: 1fr !important;
          }
          #benefits > div > div > div:first-child {
            min-height: 560px !important;
          }
          #benefits > div > div > div:last-child > article > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #benefits {
            padding: 0 16px 72px !important;
          }
          #benefits > div {
            border-radius: 28px !important;
          }
          #benefits > div > div > div:first-child {
            padding: 14px !important;
          }
          #benefits > div > div > div:first-child > div {
            min-height: 420px !important;
          }
          #benefits > div > div > div:last-child {
            padding: 20px 16px !important;
            gap: 22px !important;
          }
          #benefits .section-title {
            font-size: 30px !important;
          }
          #benefits > div > div > div:last-child > article > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
