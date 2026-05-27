import { useEffect } from "react"

export function useLightboxNavigation({ lightbox, imagesLength, setActiveImage, setLightbox }) {
  useEffect(() => {
    if (!lightbox || imagesLength < 1) return undefined

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightbox(false)
      if (event.key === "ArrowRight") setActiveImage((index) => (index + 1) % imagesLength)
      if (event.key === "ArrowLeft") setActiveImage((index) => (index - 1 + imagesLength) % imagesLength)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightbox, imagesLength, setActiveImage, setLightbox])
}
