import { Headphones, Package, RotateCcw, Shield } from "lucide-react"

const messages = [
  { icon: Package, text: "Free shipping over $35" },
  { icon: Shield, text: "Secure checkout" },
  { icon: RotateCcw, text: "30-day money-back guarantee" },
  { icon: Headphones, text: "Fast human support" },
]

export default function AnnouncementBar() {
  const repeatedMessages = [...messages, ...messages, ...messages, ...messages]

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 110,
        background: "var(--charcoal)",
        color: "rgba(247,241,232,.92)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
        overflow: "hidden",
      }}
    >
      <div
        className="announcement-track"
        style={{
          width: "max-content",
          padding: "9px 10px",
          display: "flex",
          alignItems: "center",
          gap: 42,
          flexWrap: "nowrap",
        }}
      >
        {repeatedMessages.map(({ icon: Icon, text }, index) => (
          <span
            key={`${text}-${index}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "0",
              whiteSpace: "nowrap",
            }}
          >
            <Icon size={14} style={{ color: "var(--accent)" }} />
            {text}
          </span>
        ))}
      </div>
      <style>{`
        .announcement-track {
          animation: announcementMarquee 26s linear infinite;
        }
        @keyframes announcementMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
