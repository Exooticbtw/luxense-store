import { Menu, ShoppingBag, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  ["Shop", "#bundles"],
  ["Benefits", "#benefits"],
  ["Reviews", "#reviews"],
  ["FAQ", "#faq"],
]

export default function Navbar({ scrolled, shopName, onNavigateHome }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (event, href) => {
    if (!onNavigateHome) return

    event.preventDefault()
    const targetId = href.replace("#", "") || "top"
    setMenuOpen(false)
    onNavigateHome(targetId)
  }

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 32,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(252,250,247,.82)" : "rgba(252,250,247,.94)",
          backdropFilter: "saturate(160%) blur(20px)",
          WebkitBackdropFilter: "saturate(160%) blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(17,17,17,.06)" : "1px solid rgba(17,17,17,.08)",
          boxShadow: scrolled ? "0 12px 30px rgba(17,17,17,.06)" : "none",
          transition: "all .28s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1560,
            margin: "0 auto",
            padding: "0 24px",
            height: 74,
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18, minWidth: 0 }}>
            <button
              className="mobile-menu-trigger"
              onClick={() => setMenuOpen((current) => !current)}
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                border: "1px solid rgba(17,17,17,.1)",
                background: "rgba(255,255,255,.8)",
                display: "none",
                placeItems: "center",
                color: "var(--fg)",
                cursor: "pointer",
                flexShrink: 0,
              }}
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 24, minWidth: 0 }}>
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={(event) => handleNavigate(event, href)}
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    transition: "color .2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--fg)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--muted)"
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href="#top"
            onClick={(event) => handleNavigate(event, "#top")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              textDecoration: "none",
              color: "var(--fg)",
              justifySelf: "center",
            }}
          >
            <span
              className="serif"
              style={{
                fontSize: 24,
                lineHeight: 1,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              {shopName || "LUXENSE"}
            </span>
          </a>

          <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "flex-end" }}>
            <a
              href="#bundles"
              onClick={(event) => handleNavigate(event, "#bundles")}
              aria-label="Cart"
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                border: "1px solid rgba(17,17,17,.1)",
                background: "rgba(255,255,255,.8)",
                color: "var(--fg)",
                display: "grid",
                placeItems: "center",
                textDecoration: "none",
                transition: "transform .2s ease, box-shadow .2s ease",
              }}
            >
              <ShoppingBag size={18} />
            </a>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 95,
            top: 106,
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(252,250,247,.98)",
              borderBottom: "1px solid var(--border)",
              padding: "24px 18px 22px",
              display: "grid",
              gap: 6,
            }}
          >
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={(event) => handleNavigate(event, href)}
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--fg)",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1040px) {
          .mobile-menu-trigger {
            display: grid !important;
          }
          .desktop-nav {
            display: none !important;
          }
          header > div {
            height: 68px !important;
            grid-template-columns: auto 1fr auto !important;
          }
          header > div > a {
            justify-self: center !important;
          }
        }
        @media (max-width: 760px) {
          header {
            top: 32px !important;
          }
          header > div {
            padding: 0 14px !important;
            height: 60px !important;
          }
          header > div > a span {
            font-size: 18px !important;
            letter-spacing: 0.16em !important;
          }
          .mobile-menu-trigger,
          header > div > div > a {
            width: 38px !important;
            height: 38px !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </>
  )
}
