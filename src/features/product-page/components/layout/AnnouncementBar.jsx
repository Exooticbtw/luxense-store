import { Headphones, Package, RotateCcw, ShieldCheck } from "lucide-react"

const defaultMessages = [
  { icon: Package, text: "Free shipping over $35" },
  { icon: ShieldCheck, text: "Secure checkout" },
  { icon: RotateCcw, text: "30-day money-back guarantee" },
  { icon: Headphones, text: "Fast human support" },
]

export default function AnnouncementBar({ shopData, theme }) {
  const editableMessages = Array.isArray(shopData?.announcement?.messages)
    ? shopData.announcement.messages.map((text) => String(text).trim()).filter(Boolean)
    : (theme?.announcementText || "")
        .split("|")
        .map((text) => text.trim())
        .filter(Boolean)
  const sourceMessages = editableMessages.length
    ? editableMessages.map((text, index) => ({ icon: defaultMessages[index % defaultMessages.length].icon, text }))
    : defaultMessages
  const repeatedMessages = [...sourceMessages, ...sourceMessages, ...sourceMessages, ...sourceMessages]

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 110,
        background: "var(--charcoal)",
        color: "rgba(255,255,255,.9)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
        overflow: "hidden",
      }}
    >
      <div
        className="announcement-track"
        style={{
          width: "max-content",
          padding: "6px 14px",
          display: "flex",
          alignItems: "center",
          gap: 32,
          flexWrap: "nowrap",
          minHeight: 32,
          maskImage: "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        {repeatedMessages.map(({ icon: Icon, text }, index) => (
          <span
            key={`${text}-${index}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            <Icon size={12} style={{ color: "var(--accent)" }} />
            {text}
          </span>
        ))}
      </div>
      <style>{`
        .announcement-track {
          animation: announcementMarquee 24s linear infinite;
        }
        @keyframes announcementMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 760px) {
          .announcement-track {
            gap: 18px !important;
            padding: 5px 10px !important;
            min-height: 28px !important;
          }
          .announcement-track span {
            font-size: 10px !important;
            letter-spacing: 0.12em !important;
          }
        }
      `}</style>
    </div>
  )
}
