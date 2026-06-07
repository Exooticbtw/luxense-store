import { Menu, ShoppingBag, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  ["Benefits", "#benefits"],
  ["Bundles", "#bundles"],
  ["Options", "#options"],
  ["How it works", "#how-it-works"],
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
          top: 36,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.88)",
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
            height: 76,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <button
              className="mobile-menu-trigger"
              onClick={() => setMenuOpen((current) => !current)}
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                border: "1px solid rgba(17,17,17,.1)",
                background: "rgba(255,255,255,.78)",
                display: "grid",
                placeItems: "center",
                color: "var(--fg)",
                cursor: "pointer",
              }}
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 26 }}>
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={(event) => handleNavigate(event, href)}
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.02em",
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
              gap: 10,
              textDecoration: "none",
              color: "var(--fg)",
            }}
          >
            <span className="serif" style={{ fontSize: 26, lineHeight: 1, letterSpacing: "0.03em" }}>
              {shopName || "Luxense"}
            </span>
          </a>

          <div style={{ display: "flex", gap: 8, alignItems: "center", minWidth: 84, justifyContent: "flex-end" }}>
            <a
              href="#bundles"
              onClick={(event) => handleNavigate(event, "#bundles")}
              aria-label="Shop now"
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                border: "1px solid rgba(17,17,17,.1)",
                background: "rgba(255,255,255,.78)",
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
              background: "rgba(255,255,255,.98)",
              borderBottom: "1px solid var(--border)",
              padding: "28px 20px 22px",
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
                  fontSize: 22,
                  fontWeight: 600,
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
        .mobile-menu-trigger {
          display: none !important;
        }
        @media (max-width: 1040px) {
          .mobile-menu-trigger {
            display: grid !important;
          }
          .desktop-nav {
            display: none !important;
          }
          header > div {
            height: 70px !important;
          }
        }
      `}</style>
    </>
  )
}
