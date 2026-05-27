import { useEffect, useState } from "react"
import { fetchShopifyData } from "../services/shopifyService.js"

export function useShopifyProductData() {
  const [shopData, setShopData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    fetchShopifyData()
      .then((data) => {
        if (isMounted && data) setShopData(data)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { shopData, loading }
}
