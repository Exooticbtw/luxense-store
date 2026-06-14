import { useState } from "react"

import { isValidMediaSource } from "../../utils/media.js"

function PremiumFallback({ style }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at 22% 18%, rgba(255,255,255,.18), transparent 22%), radial-gradient(circle at 78% 24%, rgba(201,164,106,.18), transparent 18%), linear-gradient(160deg, #191919 0%, #323232 54%, #c9a46a 160%)",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "14% 12%",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,.12)",
          background: "linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.02)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "32%",
          aspectRatio: "1",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,.16)",
          background:
            "radial-gradient(circle at 35% 35%, rgba(255,255,255,.18), rgba(255,255,255,.04) 44%, rgba(255,255,255,.02) 70%, transparent 72%)",
          opacity: 0.8,
        }}
      />
    </div>
  )
}

export default function SafeMediaImage({
  src,
  alt,
  loading = "lazy",
  decoding = "async",
  objectFit = "cover",
  objectPosition = "center",
  style,
  fallbackStyle,
  onClick,
  className,
  sizes,
}) {
  const [failedSrc, setFailedSrc] = useState(null)
  const safeSrc = isValidMediaSource(src) ? src.trim() : null
  const hasFailed = failedSrc === safeSrc

  if (!safeSrc || hasFailed) {
    return <PremiumFallback style={fallbackStyle} />
  }

  return (
    <img
      src={safeSrc}
      alt={typeof alt === "string" && alt.trim() ? alt.trim() : "Product image"}
      loading={loading}
      decoding={decoding}
      className={className}
      sizes={sizes}
      onError={() => setFailedSrc(safeSrc)}
      onClick={onClick}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        objectFit,
        objectPosition,
        ...style,
      }}
    />
  )
}
