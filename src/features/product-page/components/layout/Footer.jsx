import PaymentIcons from "../common/PaymentIcons.jsx"

const SHOP_LINKS = [
  { label: "MotionGlow™", href: "#product-offer" },
  { label: "Bundle Offers", href: "#product-offer" },
  { label: "Product Benefits", href: "#benefits" },
  { label: "Customer Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
]

const SUPPORT_LINKS = [
  { label: "Contact Us", href: "/pages/contact" },
  { label: "Track Order", href: "/pages/track-order" },
  { label: "Shipping Policy", href: "/policies/shipping-policy" },
  { label: "Returns & Refunds", href: "/policies/refund-policy" },
  { label: "Warranty Information", href: "/pages/warranty" },
]

const COMPANY_LINKS = [
  { label: "About Luxense", href: "/pages/about-us" },
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Terms of Service", href: "/policies/terms-of-service" },
  { label: "Support Center", href: "/pages/support" },
]

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "YouTube", href: "#" },
]

const TRUST_POINTS = ["Secure Checkout", "30-Day Money-Back Guarantee", "Free Shipping Over $35", "Human Customer Support"]

export default function Footer() {
  return (
    <footer id="footer" style={{ background: "var(--bg)", color: "var(--fg)", padding: "18px 24px 36px" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div
          style={{
            borderRadius: 34,
            border: "1px solid rgba(17,17,17,.08)",
            background: "linear-gradient(180deg, rgba(255,255,255,.96), rgba(248,243,235,.94))",
            boxShadow: "0 18px 48px rgba(17,17,17,.08)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "58px 28px 34px" }}>
            <div
              className="footer-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr .85fr .85fr .85fr 1.05fr",
                gap: 28,
                alignItems: "start",
              }}
            >
              <div id="footer-about">
                <h2 className="serif" style={{ fontSize: 34, lineHeight: 1, fontWeight: 700 }}>
                  Luxense™
                </h2>
                <p style={{ maxWidth: 420, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.8, marginTop: 18 }}>
                  Premium lighting designed to feel calm, refined, and effortless in the modern home.
                </p>
                <p style={{ maxWidth: 430, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.8, marginTop: 12 }}>
                  MotionGlow™ helps transform dark spaces into beautifully illuminated areas through smart, automatic lighting.
                </p>
              </div>

              <nav aria-label="Shop" style={{ display: "grid", gap: 12 }}>
                <div className="footer-heading">Shop</div>
                <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
                  {SHOP_LINKS.map((item) => (
                    <a key={item.label} href={item.href} style={linkStyle}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              <nav aria-label="Support" id="footer-contact" style={{ display: "grid", gap: 12 }}>
                <div className="footer-heading">Support</div>
                <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
                  {SUPPORT_LINKS.map((item) => (
                    <a key={item.label} href={item.href} style={linkStyle}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              <nav aria-label="Company" id="footer-legal" style={{ display: "grid", gap: 12 }}>
                <div className="footer-heading">Company</div>
                <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
                  {COMPANY_LINKS.map((item) => (
                    <a key={item.label} href={item.href} style={linkStyle}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              <div>
                <div className="footer-heading">Stay updated</div>
                <h3 className="serif" style={{ marginTop: 16, fontSize: 24, lineHeight: 1.08, fontWeight: 700 }}>
                  Get 10% Off Your First Order
                </h3>
                <p style={{ marginTop: 10, color: "var(--muted)", fontSize: 15.5, lineHeight: 1.75 }}>
                  Join the Luxense mailing list and receive exclusive offers, product updates, and smart-home inspiration.
                </p>

                {/* TODO: Replace this placeholder form with a Shopify Liquid newsletter form or connect Shopify Email/Klaviyo/app-based subscription handling. */}
                <form
                  onSubmit={(event) => event.preventDefault()}
                  aria-label="Newsletter signup"
                  style={{
                    marginTop: 16,
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 10,
                  }}
                >
                  <label htmlFor="footer-email" style={srOnly}>
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    autoComplete="email"
                    style={inputStyle}
                  />
                  <button type="submit" style={buttonStyle}>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div
              style={{
                marginTop: 32,
                paddingTop: 22,
                borderTop: "1px solid rgba(17,17,17,.08)",
                display: "grid",
                gridTemplateColumns: "1.15fr .95fr .9fr",
                gap: 20,
                alignItems: "start",
              }}
            >
              <div>
                <div className="footer-heading">Trust</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                  {TRUST_POINTS.map((item) => (
                    <span
                      key={item}
                      style={{
                        borderRadius: 999,
                        border: "1px solid rgba(17,17,17,.08)",
                        background: "rgba(255,255,255,.86)",
                        padding: "8px 12px",
                        fontSize: 12.5,
                        fontWeight: 700,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="footer-heading">Socials</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{
                        borderRadius: 999,
                        border: "1px solid rgba(17,17,17,.08)",
                        background: "rgba(255,255,255,.86)",
                        padding: "8px 12px",
                        color: "var(--fg)",
                        textDecoration: "none",
                        fontSize: 12.5,
                        fontWeight: 700,
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="footer-heading">Payments</div>
                <div style={{ marginTop: 14 }}>
                  <PaymentIcons />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "18px 28px 22px",
              borderTop: "1px solid rgba(17,17,17,.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
              color: "var(--muted)",
              fontSize: 14,
            }}
          >
            <span>Luxense™ © 2026. All rights reserved. Powered by premium smart-home design.</span>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/policies/privacy-policy" style={bottomLinkStyle}>
                Privacy
              </a>
              <a href="/policies/terms-of-service" style={bottomLinkStyle}>
                Terms
              </a>
              <a href="/pages/support" style={bottomLinkStyle}>
                Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-heading {
          font-size: 10.5px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--muted);
          font-weight: 800;
        }
        @media (max-width: 1120px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          footer > div > div > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 760px) {
          footer {
            padding: 18px 16px 24px !important;
          }
          footer > div > div {
            border-radius: 28px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
          footer form {
            grid-template-columns: 1fr !important;
          }
          footer > div > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          footer > div > div:last-child {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}

const linkStyle = {
  color: "var(--fg)",
  textDecoration: "none",
  fontSize: 15.5,
  fontWeight: 700,
}

const bottomLinkStyle = {
  color: "var(--muted)",
  textDecoration: "none",
  fontWeight: 700,
}

const inputStyle = {
  minHeight: 54,
  borderRadius: 999,
  border: "1px solid rgba(17,17,17,.10)",
  background: "rgba(255,255,255,.96)",
  padding: "0 18px",
  fontSize: 15,
  color: "var(--fg)",
  boxShadow: "0 10px 20px rgba(17,17,17,.05)",
}

const buttonStyle = {
  minHeight: 54,
  borderRadius: 999,
  border: "1px solid rgba(17,17,17,.08)",
  background: "var(--fg)",
  color: "var(--cream)",
  padding: "0 18px",
  fontSize: 15,
  fontWeight: 800,
  cursor: "pointer",
}

const srOnly = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
}
