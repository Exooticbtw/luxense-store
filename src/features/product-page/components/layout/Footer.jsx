export default function Footer({ shopName, theme }) {
  const brand = shopName || "Luxense"

  return (
    <footer style={{ background: "var(--bg)", color: "var(--fg)", padding: "72px 24px 36px" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div>
            <h2 className="serif" style={{ fontSize: 34, lineHeight: 1, fontWeight: 600 }}>
              {brand}
            </h2>
            <p style={{ maxWidth: 560, color: "var(--muted)", fontSize: 18, lineHeight: 1.7, marginTop: 20 }}>
              {theme?.footerText ||
                "Premium lighting designed to feel calm, refined, and effortless in the modern home."}
            </p>
          </div>

          <div style={{ display: "grid", gap: 16, justifyItems: "start" }}>
            <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--muted)" }}>
              Contact
            </div>
            <a href="#" style={{ color: "var(--fg)", textDecoration: "none", fontSize: 18, fontWeight: 700 }}>
              Support center
            </a>
            <a href="#" style={{ color: "var(--fg)", textDecoration: "none", fontSize: 18, fontWeight: 700 }}>
              Shipping and returns
            </a>
            <a href="#" style={{ color: "var(--fg)", textDecoration: "none", fontSize: 18, fontWeight: 700 }}>
              Warranty and guarantee
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
            borderTop: "1px solid rgba(17,17,17,.08)",
            paddingTop: 26,
            marginTop: 52,
            color: "var(--muted)",
            fontSize: 14,
          }}
        >
          <span>Copyright © 2026 {brand}. All rights reserved.</span>
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
            {["Privacy", "Terms", "Accessibility"].map((label) => (
              <a key={label} href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          footer {
            padding: 44px 16px 24px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          footer > div > div:last-child {
            margin-top: 36px !important;
            padding-top: 20px !important;
          }
        }
      `}</style>
    </footer>
  )
}
