import { useEffect, useState } from "react"

export function useLiveViewers(initialViewers = 28) {
  const [viewers, setViewers] = useState(initialViewers)

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((currentViewers) => Math.max(14, Math.min(64, currentViewers + Math.floor(Math.random() * 5) - 2)))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return viewers
}
