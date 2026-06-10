import { normalizeShopifyProductResponse } from "../utils/shopify.js"

export const SHOPIFY_PRODUCT_HANDLE =
  "motion-sensor-light-led-sensor-lamp-wireless-ultra-thin-usb-led-for-kitchen-cabinet-bedroom-wardrobe-indoor-lighting-night-light"

export const SHOPIFY_PRODUCT_URL = `/products/${SHOPIFY_PRODUCT_HANDLE}`

const INJECTED_DATA_KEYS = [
  "__LUXENSE_SHOPIFY_DATA__",
  "LUXENSE_SHOPIFY_DATA",
  "SHOPIFY_PRODUCT_DATA",
]

export async function fetchShopifyData() {
  const injectedData = readInjectedShopifyData()
  if (injectedData) return normalizeShopifyProductResponse(injectedData, injectedData)

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
    const response = await fetch(`${SHOPIFY_PRODUCT_URL}.json`)
    const contentType = response.headers.get("content-type") || ""

    if (!response.ok || !contentType.includes("application/json")) {
      return null
    }

    const payload = await response.json()
    return normalizeShopifyProductResponse(payload, {
      shopDomain: window.location.hostname,
      shopName: document.title?.split("|")[0]?.trim() || "LUXENSE",
      productUrl: SHOPIFY_PRODUCT_URL,
    })
  } catch (error) {
    console.warn("Unable to load Shopify product data.", error)
    return null
  }
}
