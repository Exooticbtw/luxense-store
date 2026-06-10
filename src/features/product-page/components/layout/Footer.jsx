import PaymentIcons from "../common/PaymentIcons.jsx"
import { getMotionGlowContent } from "../../utils/motionGlowContent.js"

export default function Footer({ shopData }) {
  const content = getMotionGlowContent(shopData)
  const footer = content.footer

  const socialLinks = [
    { label: "Instagram", href: footer.socialInstagramUrl },
    { label: "TikTok", href: footer.socialTiktokUrl },
    { label: "Facebook", href: footer.socialFacebookUrl },
    { label: "Pinterest", href: footer.socialPinterestUrl },
    { label: "YouTube", href: footer.socialYoutubeUrl },
  ].filter((item) => item.href && item.href !== "#")

  return (
    <footer id="footer" style={{ background: "var(--bg)", color: "var(--fg)", padding: "18px 24px 36px" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div style={{ borderRadius: 34, border: "1px solid rgba(17,17,17,.08)", background: "linear-gradient(180deg, rgba(255,255,255,.96), rgba(248,243,235,.94))", boxShadow: "0 18px 48px rgba(17,17,17,.08)", overflow: "hidden" }}>
          <div style={{ padding: "58px 28px 34px" }}>
            <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr .85fr .85fr .85fr 1.05fr", gap: 28, alignItems: "start" }}>
              <div id="footer-about">
                <h2 className="serif" style={{ fontSize: 34, lineHeight: 1, fontWeight: 700 }}>
                  {footer.footerBrandTitle}
                </h2>
                <p style={{ maxWidth: 420, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.8, marginTop: 18 }}>
                  {footer.footerBrandText}
                </p>
              </div>

              <nav aria-label="Shop" style={{ display: "grid", gap: 12 }}>
                <div className="footer-heading">Shop</div>
                <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
                  <a href="#product-offer" style={linkStyle}>MotionGlow</a>
                  <a href="#product-offer" style={linkStyle}>Bundle Offers</a>
                  <a href="#benefits" style={linkStyle}>Product Benefits</a>
                  <a href="#reviews" style={linkStyle}>Customer Reviews</a>
                  <a href="#faq" style={linkStyle}>FAQ</a>
                </div>
              </nav>

              <nav aria-label="Support" id="footer-contact" style={{ display: "grid", gap: 12 }}>
                <div className="footer-heading">Support</div>
                <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
                  <a href="/pages/contact" style={linkStyle}>Contact Us</a>
                  <a href="/pages/track-order" style={linkStyle}>Track Order</a>
                  <a href="/policies/shipping-policy" style={linkStyle}>Shipping Policy</a>
                  <a href="/policies/refund-policy" style={linkStyle}>Returns & Refunds</a>
                  <a href="/pages/warranty" style={linkStyle}>Warranty Information</a>
                </div>
              </nav>

              <nav aria-label="Company" id="footer-legal" style={{ display: "grid", gap: 12 }}>
                <div className="footer-heading">Company</div>
                <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
                  <a href="/pages/about-us" style={linkStyle}>About Luxense</a>
                  <a href="/policies/privacy-policy" style={linkStyle}>Privacy Policy</a>
                  <a href="/policies/terms-of-service" style={linkStyle}>Terms of Service</a>
                  <a href="/pages/support" style={linkStyle}>Support Center</a>
                </div>
              </nav>

              <div>
                <div className="footer-heading">{footer.footerNewsletterTitle}</div>
                <h3 className="serif" style={{ marginTop: 16, fontSize: 24, lineHeight: 1.08, fontWeight: 700 }}>
                  {footer.footerNewsletterTitle}
                </h3>
                <p style={{ marginTop: 10, color: "var(--muted)", fontSize: 15.5, lineHeight: 1.75 }}>
                  {footer.footerNewsletterText}
                </p>

                <form onSubmit={(event) => event.preventDefault()} aria-label="Newsletter signup" style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr auto", gap: 10 }}>
                  <label htmlFor="footer-email" style={srOnly}>
                    {footer.footerEmailPlaceholder}
                  </label>
                  <input id="footer-email" type="email" placeholder={footer.footerEmailPlaceholder} aria-label={footer.footerEmailPlaceholder} autoComplete="email" style={inputStyle} />
                  <button type="submit" style={buttonStyle}>
                    {footer.footerEmailButton}
                  </button>
                </form>
              </div>
            </div>

            <div style={{ marginTop: 32, paddingTop: 22, borderTop: "1px solid rgba(17,17,17,.08)", display: "grid", gridTemplateColumns: "1.15fr .95fr .9fr", gap: 20, alignItems: "start" }}>
              <div>
                <div className="footer-heading">Trust</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                  {["Secure Checkout", "30-Day Money-Back Guarantee", "Free Shipping Over $35", "Human Customer Support"].map((item) => (
                    <span key={item} style={{ borderRadius: 999, border: "1px solid rgba(17,17,17,.08)", background: "rgba(255,255,255,.86)", padding: "8px 12px", fontSize: 12.5, fontWeight: 700 }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="footer-heading">Socials</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                  {socialLinks.map((item) => (
                    <a key={item.label} href={item.href} style={{ borderRadius: 999, border: "1px solid rgba(17,17,17,.08)", background: "rgba(255,255,255,.86)", padding: "8px 12px", color: "var(--fg)", textDecoration: "none", fontSize: 12.5, fontWeight: 700 }}>
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

          <div style={{ padding: "18px 28px 22px", borderTop: "1px solid rgba(17,17,17,.08)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, flexWrap: "wrap", color: "var(--muted)", fontSize: 14 }}>
            <span>{footer.footerBrandTitle} © 2026. All rights reserved.</span>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/policies/privacy-policy" style={bottomLinkStyle}>Privacy</a>
              <a href="/policies/terms-of-service" style={bottomLinkStyle}>Terms</a>
              <a href="/pages/support" style={bottomLinkStyle}>Support</a>
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
