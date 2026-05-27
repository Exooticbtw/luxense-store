import { normalizeShopifyProductResponse } from "../utils/shopify.js"

const INJECTED_DATA_KEYS = [
  "__LUXENSE_SHOPIFY_DATA__",
  "LUXENSE_SHOPIFY_DATA",
  "SHOPIFY_PRODUCT_DATA",
]

export async function fetchShopifyData() {
  const injectedData = readInjectedShopifyData()
  if (injectedData) return injectedData

  return fetchProductsJson()
}

export function readInjectedShopifyData() {
  if (typeof window === "undefined") return null

  for (const key of INJECTED_DATA_KEYS) {
    if (window[key]) return window[key]
  }

  return null
}

async function fetchProductsJson() {
  if (typeof window === "undefined") return null

  try {
    const response = await fetch("/products.json?limit=1")
    const contentType = response.headers.get("content-type") || ""

    if (!response.ok || !contentType.includes("application/json")) {
      return null
    }

    const payload = await response.json()
    return normalizeShopifyProductResponse(payload, {
      shopDomain: window.location.hostname,
      shopName: document.title?.split("|")[0]?.trim() || "LUXENSE",
    })
  } catch (error) {
    console.warn("Unable to load Shopify product data.", error)
    return null
  }
}
