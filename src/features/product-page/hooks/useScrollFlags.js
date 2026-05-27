import { useEffect, useState } from "react"

export function useScrollFlags() {
  const [scrolled, setScrolled] = useState(false)
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
      setShowSticky(window.scrollY > 900)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { scrolled, showSticky }
}
