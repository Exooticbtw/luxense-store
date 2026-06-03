import { ShoppingBag } from "lucide-react"
import { useRecentPurchaseNotification } from "../../hooks/useRecentPurchaseNotification.js"

export default function RecentPurchaseNotif() {
  const { item, visible } = useRecentPurchaseNotification()

  if (!item) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: 88,
        left: 16,
        zIndex: 40,
        maxWidth: 300,
        transition: "all .5s",
        transform: visible ? "translateY(0)" : "translateY(10px)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="glass" style={{ display: "flex", alignItems: "center", gap: 12, borderRadius: 18, border: "1px solid var(--border)", padding: 12, boxShadow: "var(--shadow)" }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: "var(--fg)", color: "var(--bg)", display: "grid", placeItems: "center", flexShrink: 0 }}>
          <ShoppingBag size={16} />
        </div>
        <div style={{ fontSize: 12, lineHeight: 1.45 }}>
          <div style={{ fontWeight: 700 }}>{item.name} from {item.place}</div>
          <div style={{ color: "var(--muted)" }}>just bought SmartGlow {item.size} - {item.mins}m ago</div>
        </div>
      </div>
    </div>
  )
}
