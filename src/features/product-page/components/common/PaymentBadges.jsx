const DEFAULT_METHODS = [
  { key: "visa", label: "Visa", ariaLabel: "Visa accepted" },
  { key: "master", label: "Mastercard", ariaLabel: "Mastercard accepted" },
  { key: "amex", label: "American Express", ariaLabel: "American Express accepted" },
  { key: "shoppay", label: "Shop Pay", ariaLabel: "Shop Pay accepted" },
  { key: "paypal", label: "PayPal", ariaLabel: "PayPal accepted" },
]

const badgeShellStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 92,
  height: 30,
  borderRadius: 11,
  overflow: "hidden",
  flex: "0 0 auto",
  boxShadow: "0 8px 18px rgba(17,17,17,.05)",
}

function getPaymentIconsHtml(explicitHtml) {
  if (typeof explicitHtml === "string" && explicitHtml.trim()) return explicitHtml

  if (typeof window !== "undefined") {
    const injectedHtml = window.__LUXENSE_SHOPIFY_DATA__?.paymentIconsHtml
    if (typeof injectedHtml === "string" && injectedHtml.trim()) {
      return injectedHtml
    }
  }

  return null
}

function BadgeSvg({ method }) {
  const commonTextStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 800,
    letterSpacing: "-0.02em",
  }

  switch (method.key) {
    case "master":
    case "mastercard":
      return (
        <svg viewBox="0 0 92 30" width="92" height="30" role="img" aria-label={method.ariaLabel} focusable="false">
          <rect x="0.5" y="0.5" width="91" height="29" rx="11" fill="#fff" stroke="rgba(17,17,17,.10)" />
          <circle cx="36" cy="15" r="8" fill="#EB001B" opacity=".96" />
          <circle cx="46" cy="15" r="8" fill="#F79E1B" opacity=".96" />
        </svg>
      )

    case "paypal":
      return (
        <svg viewBox="0 0 92 30" width="92" height="30" role="img" aria-label={method.ariaLabel} focusable="false">
          <rect x="0.5" y="0.5" width="91" height="29" rx="11" fill="#fff" stroke="rgba(17,17,17,.10)" />
          <text x="46" y="19" textAnchor="middle" fontSize="11.5" fill="#003087" style={commonTextStyle}>
            PayPal
          </text>
        </svg>
      )

    case "shoppay":
      return (
        <svg viewBox="0 0 92 30" width="92" height="30" role="img" aria-label={method.ariaLabel} focusable="false">
          <rect x="0" y="0" width="92" height="30" rx="11" fill="#5A31F4" />
          <text x="46" y="19" textAnchor="middle" fontSize="11.2" fill="#fff" style={commonTextStyle}>
            Shop Pay
          </text>
        </svg>
      )

    case "amex":
      return (
        <svg viewBox="0 0 92 30" width="92" height="30" role="img" aria-label={method.ariaLabel} focusable="false">
          <rect x="0" y="0" width="92" height="30" rx="11" fill="#1771c1" />
          <text x="46" y="18.9" textAnchor="middle" fontSize="8.2" fill="#fff" style={commonTextStyle}>
            American Express
          </text>
        </svg>
      )

    case "visa":
    default:
      return (
        <svg viewBox="0 0 92 30" width="92" height="30" role="img" aria-label={method.ariaLabel} focusable="false">
          <rect x="0.5" y="0.5" width="91" height="29" rx="11" fill="#fff" stroke="rgba(17,17,17,.10)" />
          <text
            x="46"
            y="19"
            textAnchor="middle"
            fontSize="12"
            fill="#1A1F71"
            style={{
              ...commonTextStyle,
              fontStyle: "italic",
              letterSpacing: "-0.03em",
            }}
          >
            VISA
          </text>
        </svg>
      )
  }
}

function PaymentBadge({ method }) {
  return (
    <span style={badgeShellStyle}>
      <BadgeSvg method={method} />
    </span>
  )
}

export default function PaymentBadges({ paymentIconsHtml = null, methods = DEFAULT_METHODS, className, style }) {
  const html = getPaymentIconsHtml(paymentIconsHtml)

  if (html) {
    return (
      <>
        <div
          className={className ? `luxense-payment-badges ${className}` : "luxense-payment-badges"}
          aria-label="Accepted payment methods"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 8,
            maxWidth: "100%",
            ...style,
          }}
        />
        <style>{`
          .luxense-payment-badges {
            gap: 8px;
          }
          .luxense-payment-badges svg {
            display: block;
            height: 30px;
            width: auto;
            max-width: 100%;
            flex: 0 0 auto;
          }
        `}</style>
      </>
    )
  }

  return (
    <div
      className={className ? `luxense-payment-badges ${className}` : "luxense-payment-badges"}
      aria-label="Accepted payment methods"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8,
        maxWidth: "100%",
        ...style,
      }}
    >
      {methods.map((method) => (
        <PaymentBadge key={method.key} method={method} />
      ))}
      <style>{`
        .luxense-payment-badges svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export { DEFAULT_METHODS }
