const columns = [
  {
    title: "Shop",
    links: ["Glow Bar", "Bundles", "Closet Kit", "Whole Home Kit", "Gift Cards"],
  },
  {
    title: "Support",
    links: ["Help Center", "Shipping", "Returns", "Warranty", "Contact"],
  },
  {
    title: "Company",
    links: ["Our Story", "Sustainability", "Reviews", "Press", "Careers"],
  },
]

export default function Footer({ shopName, theme }) {
  const brand = shopName || "Luxense"

  return (
    <footer style={{ background: "var(--bg)", color: "var(--fg)", padding: "74px 24px 34px" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.45fr repeat(3, .72fr)",
            gap: 70,
            alignItems: "start",
          }}
        >
          <div>
            <h2 className="serif" style={{ fontSize: 32, lineHeight: 1, fontWeight: 600 }}>
              {brand}
            </h2>
            <p style={{ maxWidth: 500, color: "var(--muted)", fontSize: 18, lineHeight: 1.6, marginTop: 26 }}>
              {theme?.footerText || "Considered lighting for the modern home. Designed to disappear into your space and appear exactly when you need it."}
            </p>
            <form style={{ display: "flex", gap: 12, maxWidth: 500, marginTop: 32 }}>
              <input
                type="email"
                placeholder={theme?.footerEmailPlaceholder || "Email for 10% off"}
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: 56,
                  borderRadius: 999,
                  border: "1px solid var(--border)",
                  background: "rgba(252,250,247,.62)",
                  padding: "0 22px",
                  color: "var(--fg)",
                  outline: "none",
                  fontSize: 16,
                }}
              />
              <button
                type="button"
                style={{
                  height: 56,
                  borderRadius: 999,
                  border: "none",
                  background: "var(--fg)",
                  color: "var(--cream)",
                  padding: "0 25px",
                  fontSize: 16,
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                {theme?.footerButton || "Join"}
              </button>
            </form>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 24 }}>
                {column.title}
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gap: 18 }}>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 18 }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            borderTop: "1px solid var(--border)",
            paddingTop: 28,
            marginTop: 72,
            color: "var(--muted)",
          }}
        >
          <span>© 2026 Luxense Home. All rights reserved.</span>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {["Privacy", "Terms", "Accessibility"].map((label) => (
              <a key={label} href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          footer {
            padding: 54px 16px 30px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 38px !important;
          }
          footer form {
            flex-direction: column !important;
          }
        }
      `}</style>
    </footer>
  )
}
