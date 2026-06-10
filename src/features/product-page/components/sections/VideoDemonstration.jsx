import { ArrowRight, Play } from "lucide-react"

import { IMAGE_ASSETS } from "../../data/productPageData.js"
import { getMotionGlowContent } from "../../utils/motionGlowContent.js"

export default function VideoDemonstration({ shopData, onOpenCart }) {
  const content = getMotionGlowContent(shopData ?? {})
  const video = content.video
  const poster = video.videoPosterImage || IMAGE_ASSETS.finalLifestyle.src

  return (
    <section id="video-demo" style={{ padding: "0 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 720 }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            {video.videoEyebrow}
          </p>
          <h2 className="serif section-title" style={{ fontSize: 64 }}>
            {video.videoTitle}
          </h2>
          <p style={{ marginTop: 18, color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }}>
            {video.videoDescription}
          </p>
        </div>

        <div
          className="soft-card"
          style={{
            marginTop: 34,
            position: "relative",
            overflow: "hidden",
            borderRadius: 32,
            minHeight: 520,
            background: "linear-gradient(140deg, rgba(17,17,17,.94), rgba(17,17,17,.72)), url(" + poster + ") center/cover no-repeat",
            boxShadow: "0 26px 60px rgba(17,17,17,.10)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 30% 30%, rgba(200,169,106,.22), transparent 28%), radial-gradient(circle at 70% 75%, rgba(255,255,255,.06), transparent 22%)",
            }}
          />
          <div
            style={{
              position: "relative",
              minHeight: 520,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              padding: 28,
              color: "white",
            }}
          >
            <div>
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.12)",
                  border: "1px solid rgba(255,255,255,.16)",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto",
                  boxShadow: "0 20px 50px rgba(0,0,0,.18)",
                }}
              >
                <Play size={28} fill="currentColor" />
              </div>
              <p style={{ marginTop: 22, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(255,255,255,.66)", fontWeight: 700 }}>
                {video.videoCardTitle}
              </p>
              <h3 className="serif" style={{ marginTop: 12, fontSize: 40, lineHeight: 1.05, fontWeight: 700 }}>
                {video.videoCardText}
              </h3>
              <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.76)", maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
                {video.videoDescription}
              </p>
              <button
                type="button"
                onClick={() => {
                  if (video.videoUrl) {
                    window.open(video.videoUrl, "_blank", "noopener,noreferrer")
                    return
                  }
                  onOpenCart?.()
                }}
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
                  marginTop: 24,
                  fontSize: 15,
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                {video.videoButtonText} <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #video-demo {
            padding: 0 16px 64px !important;
          }
          #video-demo .section-title {
            font-size: 40px !important;
          }
          #video-demo > div > div:last-child {
            min-height: 380px !important;
          }
          #video-demo > div > div:last-child > div {
            min-height: 380px !important;
          }
          #video-demo h3 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
