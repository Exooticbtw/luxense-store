import { Menu, ShoppingBag, X } from "lucide-react"
import { useState } from "react"

export default function Navbar({ scrolled, shopName, onNavigateHome }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = [
    ["Shop", "#buy"],
    ["Spaces", "#rooms"],
    ["Reviews", "#reviews"],
    ["Our Story", "#story"],
  ]
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
          top: 36,
          left: 0,
          right: 0,
          zIndex: 90,
          background: scrolled ? "rgba(251,250,246,0.72)" : "rgba(251,250,246,0.96)",
          backdropFilter: "saturate(150%) blur(18px)",
          WebkitBackdropFilter: "saturate(150%) blur(18px)",
          borderBottom: scrolled ? "1px solid rgba(35,25,19,.06)" : "1px solid rgba(35,25,19,.08)",
          boxShadow: scrolled ? "0 12px 34px rgba(35,25,19,.06)" : "none",
          transition: "all .35s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1560,
            margin: "0 auto",
            padding: "0 24px",
            height: 76,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 28, minWidth: 420 }}>
            <button
              className="mobile-menu-trigger"
              onClick={() => setMenuOpen((current) => !current)}
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                border: "1px solid rgba(35,25,19,.12)",
                background: "rgba(255,255,255,.72)",
                display: "grid",
                placeItems: "center",
                color: "var(--fg)",
                cursor: "pointer",
              }}
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={(event) => handleNavigate(event, href)}
                  style={{ fontSize: 15, color: "var(--muted)", textDecoration: "none", transition: "color .2s" }}
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
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}
          >
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, alignItems: "center" }}>
              <span className="serif" style={{ fontSize: 27, letterSpacing: "0.02em" }}>
                {shopName || "Luxense"}
              </span>
            </div>
          </a>

          <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "flex-end", minWidth: 420 }}>
            <a
              href="#buy"
              onClick={(event) => handleNavigate(event, "#buy")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                height: 42,
                borderRadius: 14,
                border: "1px solid rgba(35,25,19,.12)",
                background: "rgba(255,255,255,.62)",
                color: "var(--fg)",
                padding: 0,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)"
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(32,25,21,.18)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
              aria-label="Shop now"
            >
              <ShoppingBag size={19} />
            </a>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 54,
            top: 106,
          }}
          onClick={() => setMenuOpen(false)}
          >
            <div
              style={{
                background: "rgba(252,250,247,.98)",
                borderBottom: "1px solid var(--border)",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={(event) => handleNavigate(event, href)}
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--fg)",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .mobile-menu-trigger {
          display: none !important;
        }
        @media (max-width: 1040px) {
          .mobile-menu-trigger {
            display: grid !important;
          }
          header > div {
            height: 70px !important;
          }
          header > div > div {
            min-width: 42px !important;
          }
        }
      `}</style>
    </>
  )
}
