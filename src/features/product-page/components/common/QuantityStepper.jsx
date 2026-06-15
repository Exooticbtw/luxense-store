import { Minus, Plus } from "lucide-react"

export default function QuantityStepper({ value = 1, onChange, compact = false, label = "Quantity" }) {
  const quantity = Math.max(1, Math.floor(Number(value) || 1))

  const updateQuantity = (nextValue) => {
    const nextQuantity = Math.max(1, Math.floor(Number(nextValue) || 1))
    onChange?.(nextQuantity)
  }

  return (
    <div
      style={{
        display: "grid",
        gap: 10,
      }}
    >
      <div
        style={{
          fontSize: 10.5,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "var(--muted)",
          fontWeight: 700,
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: compact ? 6 : 8,
          borderRadius: 999,
          background: "rgba(255,255,255,.88)",
          border: "1px solid rgba(18,18,18,.08)",
          boxShadow: "0 10px 22px rgba(18,18,18,.05)",
          width: "fit-content",
        }}
      >
        <button
          type="button"
          aria-label={`Decrease ${label.toLowerCase()}`}
          onClick={() => updateQuantity(quantity - 1)}
          disabled={quantity <= 1}
          style={{
            width: compact ? 40 : 44,
            height: compact ? 40 : 44,
            borderRadius: "50%",
            border: "none",
            background: quantity <= 1 ? "rgba(18,18,18,.06)" : "rgba(18,18,18,.95)",
            color: quantity <= 1 ? "rgba(18,18,18,.28)" : "var(--cream)",
            display: "grid",
            placeItems: "center",
            cursor: quantity <= 1 ? "not-allowed" : "pointer",
          }}
        >
          <Minus size={16} />
        </button>
        <div
          style={{
            minWidth: compact ? 36 : 44,
            textAlign: "center",
            fontSize: compact ? 15 : 16,
            fontWeight: 800,
            color: "var(--fg)",
          }}
        >
          {quantity}
        </div>
        <button
          type="button"
          aria-label={`Increase ${label.toLowerCase()}`}
          onClick={() => updateQuantity(quantity + 1)}
          style={{
            width: compact ? 40 : 44,
            height: compact ? 40 : 44,
            borderRadius: "50%",
            border: "none",
            background: "var(--fg)",
            color: "var(--cream)",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
          }}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  )
}
