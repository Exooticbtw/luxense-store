import { useState } from "react"

import { ArrowRight, Play, X } from "lucide-react"

import { IMAGE_ASSETS } from "../../data/productPageData.js"
import { getMotionGlowContent } from "../../utils/motionGlowContent.js"
import { buildVideoEmbedUrl, isVideoFileUrl } from "../../utils/media.js"
import SafeMediaImage from "../common/SafeMediaImage.jsx"

export default function VideoDemonstration({ shopData }) {
  const content = getMotionGlowContent(shopData ?? {})
  const video = content.video
  const poster = video.videoPosterImage || IMAGE_ASSETS.finalLifestyle.src
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const embedUrl = buildVideoEmbedUrl({ url: video.videoUrl })
  const canPlayVideo = Boolean(video.videoUrl && embedUrl)
  const isFileVideo = isVideoFileUrl(video.videoUrl)
  const safeVideoSrc = canPlayVideo ? embedUrl : null

  const openVideo = () => {
    if (!safeVideoSrc) return
    setIsVideoOpen(true)
  }

  const closeVideo = () => setIsVideoOpen(false)

  return (
    <section id="video-demo" style={{ padding: "0 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ maxWidth: 760 }}>
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
            background: "linear-gradient(140deg, #171717, #26221d 52%, #8c6c43 150%)",
            boxShadow: "0 26px 60px rgba(17,17,17,.10)",
          }}
        >
          <SafeMediaImage
            src={poster}
            alt={video.videoTitle}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0.92,
            }}
            fallbackStyle={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 50% 32%, rgba(255,255,255,.14) 0%, rgba(255,255,255,.05) 22%, transparent 34%), linear-gradient(135deg, #171717 0%, #26221d 52%, #8c6c43 150%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 30% 30%, rgba(200,169,106,.18), transparent 28%), radial-gradient(circle at 70% 75%, rgba(255,255,255,.05), transparent 22%), linear-gradient(180deg, rgba(17,17,17,.16), rgba(17,17,17,.34))",
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
            <div
              style={{
                width: "100%",
                maxWidth: 760,
                padding: "38px 34px 36px",
                borderRadius: 28,
                background: "linear-gradient(135deg, rgba(0,0,0,.58), rgba(0,0,0,.34))",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,.12)",
                boxShadow: "0 22px 52px rgba(0,0,0,.22)",
              }}
            >
              <button
                type="button"
                onClick={openVideo}
                aria-label={canPlayVideo ? "Play video" : "Video not available"}
                disabled={!canPlayVideo}
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: canPlayVideo ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.07)",
                  border: "1px solid rgba(255,255,255,.16)",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto",
                  boxShadow: "0 20px 50px rgba(0,0,0,.18)",
                  color: "white",
                  cursor: canPlayVideo ? "pointer" : "default",
                  opacity: canPlayVideo ? 1 : 0.72,
                }}
              >
                <Play size={28} fill="currentColor" />
              </button>
              <p
                style={{
                  marginTop: 22,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "rgba(255,255,255,.74)",
                  fontWeight: 700,
                  textShadow: "0 2px 14px rgba(0,0,0,.35)",
                }}
              >
                {video.videoCardTitle}
              </p>
              <h3 className="serif" style={{ marginTop: 12, fontSize: 40, lineHeight: 1.05, fontWeight: 700, color: "#FFFDF8", textShadow: "0 2px 14px rgba(0,0,0,.45)" }}>
                {video.videoCardText}
              </h3>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,.84)",
                  maxWidth: 700,
                  marginLeft: "auto",
                  marginRight: "auto",
                  textShadow: "0 2px 12px rgba(0,0,0,.36)",
                }}
              >
                {video.videoDescription}
              </p>
              <a
                href="#product-offer"
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById("product-offer")?.scrollIntoView({ behavior: "smooth", block: "start" })
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
                  textDecoration: "none",
                  boxShadow: "0 14px 28px rgba(0,0,0,.14)",
                }}
              >
                {video.videoButtonText} <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && safeVideoSrc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={video.videoTitle}
          onClick={closeVideo}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 220,
            background: "rgba(10,10,10,.72)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            display: "grid",
            placeItems: "center",
            padding: 16,
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "min(960px, 100%)",
              aspectRatio: "16 / 9",
              borderRadius: 24,
              overflow: "hidden",
              background: "#111",
              boxShadow: "0 32px 90px rgba(0,0,0,.35)",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={closeVideo}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 2,
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.16)",
                background: "rgba(17,17,17,.72)",
                color: "white",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>
            {isFileVideo ? (
              <video
                src={video.videoUrl}
                controls
                autoPlay
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            ) : (
              <iframe
                src={safeVideoSrc}
                title={video.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                  display: "block",
                }}
              />
            )}
          </div>
        </div>
      )}

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
          #video-demo > div > div:last-child > div > div {
            padding: 28px 18px 24px !important;
          }
          #video-demo button[aria-label="Play video"],
          #video-demo button[aria-label="Video not available"] {
            width: 76px !important;
            height: 76px !important;
          }
          #video-demo a {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
