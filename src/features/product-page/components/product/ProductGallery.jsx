import { useMemo, useState } from "react"
import { GALLERY_IMAGES } from "../../data/productPageData.js"
import { useLiveViewers } from "../../hooks/useLiveViewers.js"

function getImageSource(image) {
  if (!image) return null
  if (typeof image === "string") return image
  return image.src || image.gradient || null
}

function getImageAlt(image) {
  if (!image || typeof image === "string") return "Product image"
  return image.alt || image.label || "Product image"
}

export default function ProductGallery({ images, active, setActive }) {
  const [isPressed, setIsPressed] = useState(false)
  const viewers = useLiveViewers(28)

  const galleryItems = useMemo(() => {
    const source = images?.length ? images : GALLERY_IMAGES
    return source.map((image, index) => {
      const src = getImageSource(image)
      const label = typeof image === "object" && image?.label ? image.label : `Image ${index + 1}`
      const alt = getImageAlt(image)

      return { src, label, alt }
    })
  }, [images])

  const activeImage = galleryItems[active] || galleryItems[0]

  return (
    <div className="product-gallery" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div
        style={{
          position: "relative",
          borderRadius: 28,
          overflow: "hidden",
          background: "linear-gradient(180deg, rgba(255,255,255,.85), rgba(239,230,216,.92))",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow)",
        }}
      >
        <button
          type="button"
          onClick={() => setActive((current) => (current + 1) % galleryItems.length)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
          }}
          aria-label="Tap to view the next product image"
        >
          <div
            style={{
              position: "relative",
              aspectRatio: "1 / 1",
              overflow: "hidden",
              transform: isPressed ? "scale(0.995)" : "scale(1)",
              transition: "transform .18s ease",
            }}
          >
            {activeImage?.src ? (
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="eager"
              />
            ) : (
              <div style={{ width: "100%", height: "100%", background: "var(--sec)" }} />
            )}

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(32,25,21,.02) 0%, rgba(32,25,21,.12) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </button>

        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            zIndex: 2,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 999,
              background: "rgba(252,250,247,.92)",
              padding: "6px 12px",
              fontSize: 11,
              fontWeight: 700,
              backdropFilter: "blur(8px)",
            }}
          >
            In stock
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 999,
              background: "rgba(32,25,21,.92)",
              color: "var(--bg)",
              padding: "6px 12px",
              fontSize: 11,
              fontWeight: 700,
              backdropFilter: "blur(8px)",
            }}
          >
            {viewers} viewing now
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            right: 14,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              borderRadius: 999,
              background: "rgba(252,250,247,.92)",
              padding: "6px 12px",
              fontSize: 11,
              fontWeight: 700,
              backdropFilter: "blur(8px)",
            }}
          >
            {activeImage?.label || `Image ${active + 1}`}
          </span>
          <span
            style={{
              borderRadius: 999,
              background: "rgba(252,250,247,.92)",
              padding: "6px 12px",
              fontSize: 11,
              fontWeight: 700,
              backdropFilter: "blur(8px)",
            }}
          >
            Tap images to browse
          </span>
        </div>
      </div>

      <div
        className="gallery-thumbs"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(72px, 1fr))",
          gap: 8,
        }}
      >
        {galleryItems.map((image, index) => (
          <button
            key={`${image.label || index}`}
            onClick={() => setActive(index)}
            style={{
              aspectRatio: "1",
              borderRadius: 16,
              overflow: "hidden",
              border: index === active ? "2px solid var(--fg)" : "1px solid var(--border)",
              outline: index === active ? "2px solid rgba(199,164,106,.38)" : "none",
              outlineOffset: 2,
              cursor: "pointer",
              background: "var(--sec)",
              padding: 0,
            }}
            aria-label={`View ${image.label}`}
          >
            {image.src ? (
              <img src={image.src} alt={image.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            ) : (
              <div style={{ width: "100%", height: "100%", background: "var(--sec)" }} />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
