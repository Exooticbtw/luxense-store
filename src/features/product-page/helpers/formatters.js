export function formatTwoDigits(value) {
  return value.toString().padStart(2, "0")
}

export function formatFixedCurrency(value) {
  const numericValue = Number.parseFloat(value)
  return Number.isFinite(numericValue) ? numericValue.toFixed(2) : "0.00"
}
