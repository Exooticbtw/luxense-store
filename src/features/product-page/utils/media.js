export function pickMediaSource(...candidates) {
  for (const candidate of candidates) {
    if (!candidate) continue

    if (typeof candidate === "string") {
      const value = candidate.trim()
      if (value && isValidMediaSource(value)) return value
      continue
    }

    if (typeof candidate === "object") {
      const value =
        candidate.src ||
        candidate.url ||
        candidate.mediaUrl ||
        candidate.image?.src ||
        candidate.image?.url ||
        candidate.preview_image?.src ||
        candidate.preview_image?.url ||
        candidate.featured_image?.src ||
        candidate.featured_image?.url ||
        candidate.media?.preview_image?.src ||
        candidate.media?.preview_image?.url ||
        candidate.media?.image?.src ||
        candidate.media?.image?.url ||
        candidate.image ||
        null
      if (typeof value === "string" && isValidMediaSource(value)) {
        return value.trim()
      }
    }
  }

  return null
}

export function isVideoFileUrl(url) {
  if (!url || typeof url !== "string") return false
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url.trim())
}

export function buildVideoEmbedUrl(video = {}) {
  const provider = String(video.provider || "").toLowerCase()
  const id = String(video.id || "").trim()
  const sourceUrl = String(video.sourceUrl || video.url || "").trim()

  if (provider === "youtube" && id) {
    return `https://www.youtube.com/embed/${id}?rel=0`
  }

  if (provider === "vimeo" && id) {
    return `https://player.vimeo.com/video/${id}`
  }

  if (sourceUrl) {
    try {
      const parsed = new URL(sourceUrl)
      if (parsed.hostname.includes("youtu.be")) {
        const videoId = parsed.pathname.split("/").filter(Boolean).pop()
        if (videoId) return `https://www.youtube.com/embed/${videoId}?rel=0`
      }

      if (parsed.hostname.includes("youtube.com")) {
        const videoId = parsed.searchParams.get("v") || parsed.pathname.split("/").filter(Boolean).pop()
        if (videoId) return `https://www.youtube.com/embed/${videoId}?rel=0`
      }

      if (parsed.hostname.includes("vimeo.com")) {
        const videoId = parsed.pathname.split("/").filter(Boolean).pop()
        if (videoId) return `https://player.vimeo.com/video/${videoId}`
      }
    } catch {
      return sourceUrl
    }
  }

  return sourceUrl || null
}

export function getMediaBackgroundStyle(source, fallbackBackground, overlay = null) {
  const resolvedSource = pickMediaSource(source)
  if (resolvedSource) {
    const sourceLayer = `url("${resolvedSource.replace(/"/g, '\\"')}")`
    return {
      backgroundImage: overlay ? `${overlay}, ${sourceLayer}` : sourceLayer,
      backgroundSize: overlay ? "cover, cover" : "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }
  }

  return fallbackBackground ? { background: fallbackBackground } : {}
}

export function isValidMediaSource(src) {
  if (typeof src !== "string") return false
  const value = src.trim()
  if (!value) return false
  if (/^javascript:/i.test(value)) return false
  return true
}

export function getMediaFileName(src) {
  if (!isValidMediaSource(src)) return ""
  try {
    const url = new URL(src.trim())
    return url.pathname.split("/").filter(Boolean).pop() || ""
  } catch {
    return String(src).split("?")[0].split("#")[0].split("/").filter(Boolean).pop() || ""
  }
}
