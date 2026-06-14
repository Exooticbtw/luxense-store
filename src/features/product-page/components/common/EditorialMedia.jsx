import SafeMediaImage from "./SafeMediaImage.jsx"

export default function EditorialMedia({
  src,
  alt,
  label,
  caption,
  fallbackLabel = "MotionGlow installed",
  imagePosition = "center",
  fallbackBackground = "radial-gradient(circle at 24% 18%, rgba(201,164,106,.26), transparent 24%), radial-gradient(circle at 78% 24%, rgba(255,255,255,.16), transparent 20%), linear-gradient(160deg, #151515 0%, #3a3a3a 55%, #c9a46a 150%)",
  minHeight,
  aspectRatio,
  radius = 28,
  className,
  style,
  children,
}) {
  const safeSrc = typeof src === "string" && src.trim() ? src.trim() : null
  const ariaLabel = alt || label || fallbackLabel
  const showFallbackContent = !safeSrc

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: radius,
        minHeight,
        aspectRatio,
        background: safeSrc ? "transparent" : fallbackBackground,
        ...style,
      }}
    >
      <SafeMediaImage
        src={safeSrc}
        alt={ariaLabel}
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectPosition: imagePosition,
        }}
        fallbackStyle={{ position: "absolute", inset: 0 }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 22% 18%, rgba(255,255,255,.12), transparent 22%), radial-gradient(circle at 78% 24%, rgba(201,164,106,.10), transparent 18%)",
          pointerEvents: "none",
        }}
      />

      {showFallbackContent && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 24% 18%, rgba(255,255,255,.12), transparent 22%), radial-gradient(circle at 78% 24%, rgba(201,164,106,.12), transparent 18%), linear-gradient(160deg, #151515 0%, #3a3a3a 55%, #c9a46a 150%)",
          }}
        />
      )}

      {label && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 16,
            top: 16,
            zIndex: 1,
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
          {label}
        </div>
      )}

      {caption && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 16,
            right: 16,
            bottom: 16,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            borderRadius: 18,
            padding: "10px 12px",
            background: "rgba(255,255,255,.12)",
            border: "1px solid rgba(255,255,255,.14)",
            color: "white",
            backdropFilter: "blur(12px)",
          }}
        >
          <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", opacity: 0.68, fontWeight: 800 }}>
            Preview
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, textAlign: "right" }}>{caption}</span>
        </div>
      )}

      {children ? <div style={{ position: "relative", zIndex: 1, height: "100%" }}>{children}</div> : null}
    </div>
  )
}
