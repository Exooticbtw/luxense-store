import { CreditCard, ShieldCheck, Truck } from "lucide-react"

import PaymentIcons from "../common/PaymentIcons.jsx"
import { TRUST_BADGES } from "../../data/productPageData.js"

export default function TrustBadges() {
  return (
    <section
      id="trust"
      style={{
        padding: "18px 24px 70px",
        scrollMarginTop: 110,
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: 1560, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 14,
          }}
        >
          {TRUST_BADGES.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="soft-card"
              style={{
                borderRadius: 24,
                padding: 22,
                background: "rgba(255,255,255,.84)",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 16,
                  background: "rgba(200,169,106,.12)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--fg)",
                  flexShrink: 0,
                }}
              >
                <Icon size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.2 }}>{title}</h3>
                <p style={{ marginTop: 6, color: "var(--muted)", fontSize: 14, lineHeight: 1.55 }}>{text}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="trust-payment-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 18,
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 18,
            padding: "20px 24px",
            borderRadius: 24,
            border: "1px solid rgba(17,17,17,.08)",
            background: "rgba(255,255,255,.74)",
            boxShadow: "0 18px 44px rgba(17,17,17,.05)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span className="chip" style={{ background: "rgba(17,17,17,.04)" }}>
              <ShieldCheck size={13} />
              Secure checkout
            </span>
            <span className="chip" style={{ background: "rgba(17,17,17,.04)" }}>
              <Truck size={13} />
              Fast dispatch
            </span>
            <span className="chip" style={{ background: "rgba(17,17,17,.04)" }}>
              <CreditCard size={13} />
              Trusted payments
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <span style={{ color: "var(--muted)", fontSize: 14, fontWeight: 700 }}>We accept:</span>
            <PaymentIcons />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #trust > div > div:first-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #trust {
            padding: 10px 16px 56px !important;
          }
          #trust > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
          .trust-payment-row {
            padding: 18px 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
