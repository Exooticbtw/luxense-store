export default function LoadingOverlay() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 999,
        background: "var(--fg)",
        color: "var(--bg)",
        borderRadius: 14,
        padding: "12px 18px",
        fontSize: 13,
        display: "flex",
        gap: 10,
        alignItems: "center",
        boxShadow: "0 8px 32px rgba(0,0,0,.25)",
      }}
    >
      <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(255,255,255,.3)", borderTopColor: "var(--accent)", animation: "spin .8s linear infinite" }} />
      Connecting to Shopify...
    </div>
  )
}
