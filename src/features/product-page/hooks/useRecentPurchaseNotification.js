import { useEffect, useState } from "react"
import { PURCHASE_NAMES, PURCHASE_PLACES } from "../data/productPageData.js"
import { pickRandom, randomInt } from "../helpers/random.js"

const PURCHASE_SIZES = ["30CM", "40CM", "50CM"]

export function useRecentPurchaseNotification() {
  const [visible, setVisible] = useState(false)
  const [item, setItem] = useState(null)

  useEffect(() => {
    let hideTimer
    let cycleTimer

    const cycle = () => {
      setItem({
        name: pickRandom(PURCHASE_NAMES),
        place: pickRandom(PURCHASE_PLACES),
        size: pickRandom(PURCHASE_SIZES),
        mins: randomInt(1, 14),
      })
      setVisible(true)
      hideTimer = setTimeout(() => {
        setVisible(false)
        cycleTimer = setTimeout(cycle, 6000)
      }, 5000)
    }

    cycleTimer = setTimeout(cycle, 4000)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(cycleTimer)
    }
  }, [])

  return { item, visible }
}
