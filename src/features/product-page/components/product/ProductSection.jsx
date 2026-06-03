import { useState } from "react"
import { ArrowRight, Check, LockKeyhole, RotateCcw, ShieldCheck, Star, Truck, X, Zap } from "lucide-react"
import Stars from "../common/Stars.jsx"
import { useProductPurchaseState } from "../../hooks/useProductPurchaseState.js"
import { getNumericVariantId } from "../../utils/shopify.js"
import armarioAsset from "../../../../assets/product/armario.png"
import cargadorAsset from "../../../../assets/product/cargador.png"
import heroDetailAsset from "../../../../assets/product/hero-detail.png"
import principalAsset from "../../../../assets/product/principal.png"

export default function ProductSection({ shopData, view = "home", onOpenProductDetail }) {
  const { buildCheckoutUrl, v } = useProductPurchaseState(shopData)
  const media = shopData?.media || {}
  const productImages = shopData?.product?.images || []
  const heroImage = media.heroImage || productImages[0] || heroDetailAsset
  const productImage = media.productImage || productImages[0] || principalAsset

  if (view === "product") {
    return (
      <ProductDetailView
        buildCheckoutUrl={buildCheckoutUrl}
        media={media}
        productImages={productImages}
        selectedVariant={v}
        shopDomain={shopData?.shopDomain}
      />
    )
  }

  return (
    <>
      <section
        id="product"
        className="home-hero"
        style={{
          position: "relative",
          minHeight: "calc(100vh - 114px)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(90deg, rgba(22,16,12,.76) 0%, rgba(45,27,15,.56) 38%, rgba(23,17,13,.2) 68%, rgba(10,12,13,.72) 100%), url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "var(--cream)",
          scrollMarginTop: 110,
        }}
      >
        <div
          style={{
          width: "100%",
            maxWidth: 1560,
            margin: "0 auto",
            padding: "110px 24px 116px",
          }}
        >
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 24 }}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Wireless motion-sensor lighting
            </p>

            <h1
              className="serif"
              style={{
                fontSize: 88,
                lineHeight: 0.95,
                fontWeight: 600,
                maxWidth: 760,
                textWrap: "balance",
              }}
            >
              Transform any space into a luxury environment
            </h1>

            <p style={{ maxWidth: 570, fontSize: 18, lineHeight: 1.75, color: "rgba(247,241,232,.78)", fontWeight: 600 }}>
              Wireless, rechargeable lighting that senses your every move and disappears into the architecture of your home until you need it.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 4 }}>
              <a
                href="#buy"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  borderRadius: 999,
                  background: "var(--warm-white)",
                  color: "var(--fg)",
                  minHeight: 58,
                  padding: "0 28px",
                  fontSize: 16,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Shop now <ArrowRight size={18} />
              </a>
              <a
                href="#story"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                  border: "1px solid rgba(247,241,232,.34)",
                  background: "rgba(247,241,232,.04)",
                  color: "var(--cream)",
                  minHeight: 58,
                  padding: "0 28px",
                  fontSize: 16,
                  fontWeight: 800,
                  textDecoration: "none",
                  backdropFilter: "blur(10px)",
                }}
              >
                Learn more
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginTop: 8 }}>
              <Stars rating={5} />
              <span style={{ fontSize: 16, fontWeight: 800 }}>4.9</span>
              <span style={{ color: "rgba(247,241,232,.75)", fontSize: 16 }}>3,284 reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Store benefits"
        style={{
          background: "var(--warm-white)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
          <div
          className="hero-trust-strip"
          style={{
            maxWidth: 1560,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          }}
        >
          {[
            [Star, "4.9 / 5", "From 3,200+ reviews"],
            [Truck, "2-4 days", "Fast, free shipping"],
            [LockKeyhole, "100%", "Secure checkout"],
            [ShieldCheck, "30 days", "Money-back guarantee"],
          ].map(([Icon, value, label], index) => (
            <div
              key={value}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                minHeight: 106,
                padding: "24px 34px",
                borderLeft: index === 0 ? "1px solid var(--border)" : "none",
                borderRight: "1px solid var(--border)",
              }}
            >
              <Icon size={24} strokeWidth={1.8} style={{ color: "var(--accent)", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.15 }}>{value}</div>
                <div style={{ marginTop: 3, color: "var(--muted)", fontSize: 14, lineHeight: 1.35 }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" style={{ padding: "84px 24px 86px", background: "var(--bg)", scrollMarginTop: 110 }}>
        <div style={{ maxWidth: 1560, margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>Why people love it</p>
          <h2 className="serif section-title" style={{ maxWidth: 720 }}>
            Designed to feel effortless
          </h2>
          <p style={{ marginTop: 20, maxWidth: 720, color: "var(--muted)", fontSize: 20, lineHeight: 1.55 }}>
            Every detail of the Glow Bar removes a little friction from daily life: no switches, no wiring, no compromise on how it looks.
          </p>

          <div
            className="effortless-grid"
            style={{
              marginTop: 72,
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              border: "1px solid var(--border)",
              borderRadius: 18,
              overflow: "hidden",
              background: "rgba(252,250,247,.62)",
            }}
          >
            {[
              ["01", "Truly wireless", "No electrician, no exposed cables. Mount it anywhere in seconds and reclaim the wall."],
              ["02", "Weeks on one charge", "A single USB-C charge delivers up to six weeks of elegant, on-demand lighting."],
              ["03", "Senses your every move", "An infrared sensor wakes the light as you approach and rests it when you leave."],
              ["04", "Designed, not assembled", "Machined aluminum and a warm 2700K glow that feels intentional in any room."],
            ].map(([number, title, text], index) => (
              <article
                key={number}
                style={{
                  minHeight: 270,
                  padding: "50px 40px 42px",
                  borderRight: index < 3 ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="serif" style={{ color: "var(--accent)", fontSize: 28, lineHeight: 1, marginBottom: 32 }}>
                  {number}
                </div>
                <h3 className="serif" style={{ fontSize: 28, lineHeight: 1.05, marginBottom: 14 }}>
                  {title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.55 }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="buy" style={{ padding: "78px 24px 92px", background: "var(--bg)", scrollMarginTop: 110 }}>
        <div
          className="product-showcase"
          style={{
            maxWidth: 1560,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div
            className="product-image-panel"
            style={{
              position: "relative",
              minHeight: 720,
              borderRadius: 20,
              overflow: "hidden",
              background: "linear-gradient(145deg, #f0c58c 0%, #f8ddb3 48%, #e3b272 100%)",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 24,
                left: 24,
                zIndex: 2,
                borderRadius: 999,
                background: "var(--accent)",
                color: "var(--fg)",
                padding: "8px 17px",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              Best Seller
            </span>
            <img
              src={productImage}
              alt="Luxense Glow Bar installed inside a wardrobe"
              style={{
                width: "100%",
                height: "100%",
                minHeight: 720,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          <div style={{ maxWidth: 720 }}>
            <p className="eyebrow" style={{ color: "var(--accent)" }}>The Glow Bar</p>
            <h2
              className="serif"
              style={{
                fontSize: 62,
                lineHeight: 1,
                fontWeight: 600,
                marginTop: 24,
              }}
            >
              Luxense Glow Bar
            </h2>

            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 24 }}>
              <Stars rating={5} size={17} />
              <span style={{ color: "var(--muted)", fontSize: 17 }}>3,284 reviews</span>
            </div>

            <p style={{ marginTop: 28, color: "var(--muted)", fontSize: 21, lineHeight: 1.55, maxWidth: 710 }}>
              A slim, rechargeable motion light that turns on the moment you arrive and fades the instant you leave. No wiring. No switches. Just effortless, ambient warmth wherever you need it.
            </p>

            <div
              className="product-benefits-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px 48px",
                marginTop: 34,
              }}
            >
              {[
                "Activates within 10 ft of movement",
                "Up to 6 weeks per USB-C charge",
                "Magnetic mount installs in seconds",
                "Warm 2700K dimmable glow",
              ].map((benefit) => (
                <div key={benefit} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17 }}>
                  <Check size={18} strokeWidth={1.8} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  {benefit}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginTop: 40 }}>
              <span className="serif" style={{ fontSize: 38, lineHeight: 1 }}>$24.99</span>
              <span style={{ color: "var(--muted)", textDecoration: "line-through", fontSize: 18 }}>$39.99</span>
              <span
                style={{
                  borderRadius: 999,
                  background: "rgba(200,154,89,.14)",
                  padding: "7px 13px",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                Save with the Duo (2-pack)
              </span>
            </div>

            <button type="button" onClick={onOpenProductDetail} style={{ ...productCtaStyle, border: "none", cursor: "pointer" }}>
              Shop the Glow Bar <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1040px) {
          .product-showcase {
            grid-template-columns: 1fr !important;
            gap: 38px !important;
          }
          .hero-trust-strip,
          .effortless-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .hero-trust-strip > div:nth-child(2n),
          .effortless-grid > article:nth-child(2n) {
            border-right: 1px solid var(--border) !important;
          }
        }
        @media (max-width: 760px) {
          .home-hero {
            min-height: calc(100vh - 114px) !important;
            background-position: 58% center !important;
          }
          .home-hero > div {
            padding: 74px 18px 96px !important;
          }
          .home-hero h1 {
            font-size: 52px !important;
          }
          .home-hero p {
            font-size: 15px !important;
          }
          .bundle-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-trust-strip,
          .effortless-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-trust-strip > div {
            min-height: 92px !important;
            padding: 20px 22px !important;
            border-left: 1px solid var(--border) !important;
            border-bottom: 1px solid var(--border) !important;
          }
          .effortless-grid > article {
            min-height: auto !important;
            padding: 34px 28px !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
          #buy {
            padding: 56px 16px 72px !important;
          }
          .product-image-panel {
            min-height: 440px !important;
          }
          .product-image-panel img {
            min-height: 440px !important;
          }
          .product-benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          #buy h2 {
            font-size: 44px !important;
          }
        }
      `}</style>
    </>
  )
}

function ProductDetailView({ buildCheckoutUrl, media, productImages, selectedVariant, shopDomain }) {
  const [finish, setFinish] = useState("Matte White")
  const [selectedSet, setSelectedSet] = useState("duo")
  const [activeImage, setActiveImage] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartQuantity, setCartQuantity] = useState(4)
  const [cartItem, setCartItem] = useState(null)
  const editableGallery = Array.isArray(media?.galleryImages) ? media.galleryImages.filter(Boolean) : []
  const fallbackGallery = [
    media?.productImage,
    ...productImages,
    principalAsset,
    cargadorAsset,
    armarioAsset,
    heroDetailAsset,
  ].filter(Boolean)
  const galleryImages = (editableGallery.length > 0 ? editableGallery : fallbackGallery).map((src, index) => ({
    src,
    alt: `Luxense Glow Bar image ${index + 1}`,
  }))
  const setOptions = [
    {
      id: "single",
      title: "1 unit",
      each: "$24.99 each",
      price: "$24.99",
      compareAt: "$39.99",
      badge: null,
      units: 1,
    },
    {
      id: "duo",
      title: "2 units",
      each: "$20.00 each",
      price: "$39.99",
      compareAt: "$79.98",
      badge: "MOST POPULAR",
      units: 2,
    },
    {
      id: "trio",
      title: "3 units",
      each: "$16.66 each",
      price: "$49.99",
      compareAt: "$119.97",
      badge: "BEST VALUE",
      units: 3,
    },
  ]
  const selectedOption = setOptions.find((option) => option.id === selectedSet) || setOptions[1]
  const cartOption = cartItem?.option || selectedOption
  const cartFinish = cartItem?.finish || finish
  const cartUnitPrice = Number(cartOption.price.replace("$", ""))
  const cartSubtotal = cartUnitPrice * cartQuantity

  const handleAddToCart = async () => {
    const variantId = getNumericVariantId(selectedVariant?.id)
    const nextQuantity = selectedOption.units || 1

    setCartItem({ finish, option: selectedOption })
    setCartQuantity(nextQuantity)
    setCartOpen(true)

    if (!variantId || typeof window === "undefined") return

    try {
      await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Number(variantId),
          quantity: nextQuantity,
          properties: {
            Finish: finish,
            Set: selectedOption.title,
          },
        }),
      })
    } catch (error) {
      console.warn("Unable to add item to Shopify cart.", error)
    }
  }

  return (
    <section
      style={{
        minHeight: "calc(100vh - 76px)",
        background: "var(--bg)",
        padding: "56px 24px 88px",
      }}
    >
      <div
        className="product-detail-grid"
        style={{
          maxWidth: 1560,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.06fr .94fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        <div>
          <div
            className="product-detail-image"
            style={{
              minHeight: 760,
              borderRadius: 18,
              overflow: "hidden",
              background: "linear-gradient(145deg, #f0c58c 0%, #f8ddb3 48%, #e3b272 100%)",
            }}
          >
            <img
              src={galleryImages[activeImage].src}
              alt={galleryImages[activeImage].alt}
              style={{
                width: "100%",
                height: "100%",
                minHeight: 760,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          <div
            className="product-thumbs"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
              gap: 14,
              marginTop: 16,
            }}
          >
            {galleryImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View product image ${index + 1}`}
                style={{
                  aspectRatio: "1 / 1",
                  borderRadius: 10,
                  border: index === activeImage ? "2px solid var(--accent)" : "1px solid transparent",
                  background: "transparent",
                  padding: index === activeImage ? 3 : 0,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <img
                  src={image.src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <div style={{ paddingTop: 36 }}>
          <h1 className="serif" style={{ fontSize: 54, lineHeight: 1, fontWeight: 600 }}>
            Luxense Glow Bar
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 22, color: "var(--muted)", fontSize: 18 }}>
            <Stars rating={5} size={16} />
            <span>4.9 - 3284 reviews</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginTop: 34 }}>
            <span className="serif" style={{ fontSize: 40, lineHeight: 1 }}>$39.99</span>
            <span style={{ color: "var(--muted)", textDecoration: "line-through", fontSize: 20 }}>$79.98</span>
            <span
              style={{
                borderRadius: 999,
                background: "rgba(200,154,89,.14)",
                padding: "7px 13px",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              Save $39.99 (50% off)
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 24, marginTop: 18, color: "var(--muted)", fontSize: 17 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--accent)" }} />
              In stock - ships in 24h
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Truck size={17} style={{ color: "var(--muted)" }} />
              Arrives in 2-4 days
            </span>
          </div>

          <p style={{ marginTop: 34, color: "var(--muted)", fontSize: 19, lineHeight: 1.6, maxWidth: 720 }}>
            A slim, rechargeable motion light that turns on the moment you arrive and fades the instant you leave. No wiring. No switches. Just effortless, ambient warmth wherever you need it.
          </p>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, marginTop: 42 }}>
            <p style={{ fontSize: 14, fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>Finish</p>
            <span style={{ color: "var(--muted)", fontSize: 18 }}>{finish}</span>
          </div>

          <div style={{ display: "flex", gap: 16, marginTop: 18 }}>
            {[
              ["Matte White", "#f3eee6"],
              ["Matte Black", "#24201d"],
            ].map(([label, color]) => {
              const selected = finish === label

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setFinish(label)}
                  aria-label={label}
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    border: selected ? "2px solid var(--accent)" : "1px solid var(--border)",
                    background: "transparent",
                    padding: 5,
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: color,
                      boxShadow: "inset 0 0 0 1px rgba(0,0,0,.14)",
                    }}
                  />
                </button>
              )
            })}
          </div>

          <p style={{ marginTop: 38, marginBottom: 18, fontSize: 14, fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Choose your set
          </p>

          <div style={{ display: "grid", gap: 14 }}>
            {setOptions.map((option) => {
              const selected = selectedSet === option.id

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedSet(option.id)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 18,
                    alignItems: "center",
                    minHeight: 88,
                    borderRadius: 16,
                    border: selected ? "1px solid var(--accent)" : "1px solid var(--border)",
                    background: selected ? "rgba(200,154,89,.05)" : "rgba(252,250,247,.58)",
                    padding: "18px 24px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      border: selected ? "none" : "1px solid var(--border)",
                      background: selected ? "var(--accent)" : "transparent",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {selected && <Check size={16} strokeWidth={2.2} />}
                  </span>
                  <span>
                    <span style={{ fontSize: 18, fontWeight: 800 }}>{option.title}</span>
                    <span style={{ color: "var(--muted)", fontSize: 18 }}> - {option.each}</span>
                    {option.badge && (
                      <span
                        style={{
                          display: "block",
                          width: "fit-content",
                          marginTop: 8,
                          borderRadius: 999,
                          background: "var(--fg)",
                          color: "var(--cream)",
                          padding: "4px 10px",
                          fontSize: 12,
                          fontWeight: 900,
                        }}
                      >
                        {option.badge}
                      </span>
                    )}
                  </span>
                  <span style={{ textAlign: "right" }}>
                    <span style={{ display: "block", fontSize: 18, fontWeight: 900 }}>{option.price}</span>
                    <span style={{ display: "block", color: "var(--muted)", textDecoration: "line-through", fontSize: 14 }}>{option.compareAt}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <button type="button" onClick={handleAddToCart} style={{ ...detailCheckoutStyle, border: "none", cursor: "pointer" }}>
            Add to Cart - {selectedOption.price}
          </button>

          <a href={buildCheckoutUrl(selectedOption.units || 1)} target={shopDomain ? "_blank" : "_self"} style={detailBuyNowStyle}>
            <Zap size={18} /> Buy it now
          </a>

          <div
            className="detail-trust-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 14,
              marginTop: 30,
            }}
          >
            {[
              [Truck, "Free shipping"],
              [RotateCcw, "Easy returns"],
              [ShieldCheck, "30-day guarantee"],
            ].map(([Icon, label]) => (
              <div
                key={label}
                style={{
                  minHeight: 80,
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  display: "grid",
                  placeItems: "center",
                  gap: 8,
                  color: "var(--muted)",
                  fontSize: 14,
                }}
              >
                <Icon size={18} style={{ color: "var(--accent)" }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {cartOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 120,
            background: "rgba(22,19,16,.56)",
          }}
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="cart-drawer"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "min(560px, 100vw)",
              height: "100%",
              background: "var(--warm-white)",
              color: "var(--fg)",
              display: "grid",
              gridTemplateRows: "auto auto 1fr auto",
              boxShadow: "-28px 0 60px rgba(0,0,0,.18)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              style={{
                height: 70,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 30px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <h2 className="serif" style={{ fontSize: 28, lineHeight: 1 }}>
                Your Cart ({cartQuantity})
              </h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
                style={{
                  width: 34,
                  height: 34,
                  border: "none",
                  background: "transparent",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  color: "var(--muted)",
                }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ padding: "24px 30px", borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 18, fontWeight: 800 }}>
                <Truck size={18} style={{ color: "var(--accent)" }} />
                You've unlocked free shipping
              </div>
              <div style={{ height: 8, borderRadius: 999, background: "var(--accent)", marginTop: 16 }} />
            </div>

            <div style={{ padding: "28px 30px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr auto",
                  gap: 20,
                  alignItems: "start",
                }}
              >
                <img
                  src={galleryImages[0]?.src || principalAsset}
                  alt="Luxense Glow Bar"
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 8,
                    objectFit: "cover",
                  }}
                />
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>Luxense Glow Bar</div>
                  <div style={{ color: "var(--muted)", marginTop: 2 }}>
                    {cartFinish} - {cartOption.title}
                  </div>
                  <div
                    style={{
                      display: "inline-grid",
                      gridTemplateColumns: "34px 42px 34px",
                      alignItems: "center",
                      height: 38,
                      border: "1px solid var(--border)",
                      borderRadius: 999,
                      marginTop: 18,
                      overflow: "hidden",
                      background: "rgba(252,250,247,.58)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setCartQuantity((current) => Math.max(1, current - 1))}
                      aria-label="Decrease cart quantity"
                      style={cartQtyButtonStyle}
                    >
                      -
                    </button>
                    <span style={{ textAlign: "center", fontSize: 18 }}>{cartQuantity}</span>
                    <button
                      type="button"
                      onClick={() => setCartQuantity((current) => current + 1)}
                      aria-label="Increase cart quantity"
                      style={cartQtyButtonStyle}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div style={{ display: "grid", gap: 18, justifyItems: "end" }}>
                  <button
                    type="button"
                    onClick={() => setCartOpen(false)}
                    aria-label="Remove item"
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "var(--muted)",
                      cursor: "pointer",
                    }}
                  >
                    <X size={20} />
                  </button>
                  <strong style={{ fontSize: 18 }}>${cartSubtotal.toFixed(2)}</strong>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", padding: "28px 30px 26px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 18 }}>
                <div>
                  <div style={{ color: "var(--muted)", fontSize: 18 }}>Subtotal</div>
                  <div style={{ color: "var(--muted)", marginTop: 6 }}>Shipping & taxes calculated at checkout.</div>
                </div>
                <div className="serif" style={{ fontSize: 24 }}>
                  ${cartSubtotal.toFixed(2)}
                </div>
              </div>
              <a href={buildCheckoutUrl(cartQuantity)} target={shopDomain ? "_blank" : "_self"} style={cartCheckoutStyle}>
                Checkout
              </a>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 16, color: "var(--muted)" }}>
                <ShieldCheck size={16} style={{ color: "var(--accent)" }} />
                Secure checkout - 30-day guarantee
              </div>
            </div>
          </aside>
        </div>
      )}

      <style>{`
        @media (max-width: 1040px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 34px !important;
          }
          .product-detail-image,
          .product-detail-image img {
            min-height: 520px !important;
          }
          .product-thumbs {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          .product-detail-image,
          .product-detail-image img {
            min-height: 380px !important;
          }
          .product-detail-grid h1 {
            font-size: 42px !important;
          }
          .product-thumbs {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
          .detail-trust-grid {
            grid-template-columns: 1fr !important;
          }
          .cart-drawer {
            width: min(560px, calc(100vw - 30px)) !important;
          }
        }
      `}</style>
    </section>
  )
}

const productCtaStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  minHeight: 60,
  borderRadius: 999,
  background: "var(--fg)",
  color: "var(--cream)",
  padding: "0 38px",
  marginTop: 34,
  fontSize: 17,
  fontWeight: 900,
  textDecoration: "none",
}

const detailCheckoutStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  width: "100%",
  minHeight: 60,
  borderRadius: 999,
  background: "var(--fg)",
  color: "var(--cream)",
  padding: "0 34px",
  marginTop: 32,
  fontSize: 18,
  fontWeight: 900,
  textDecoration: "none",
}

const detailBuyNowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  width: "100%",
  minHeight: 60,
  borderRadius: 999,
  border: "1px solid var(--border)",
  background: "rgba(252,250,247,.58)",
  color: "var(--fg)",
  padding: "0 34px",
  marginTop: 14,
  fontSize: 18,
  fontWeight: 800,
  textDecoration: "none",
  boxShadow: "0 8px 22px rgba(35,25,19,.05)",
}

const cartQtyButtonStyle = {
  height: "100%",
  border: "none",
  background: "transparent",
  color: "var(--muted)",
  fontSize: 20,
  cursor: "pointer",
}

const cartCheckoutStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 60,
  borderRadius: 999,
  background: "var(--fg)",
  color: "var(--cream)",
  marginTop: 22,
  fontSize: 18,
  fontWeight: 900,
  textDecoration: "none",
}
