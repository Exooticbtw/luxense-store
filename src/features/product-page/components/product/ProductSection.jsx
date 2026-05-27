import {
  Check,
  ChevronLeft,
  ChevronRight,
  Lock,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  X,
  Zap,
} from "lucide-react"
import PaymentIcons from "../common/PaymentIcons.jsx"
import Stars from "../common/Stars.jsx"
import { useLightboxNavigation } from "../../hooks/useLightboxNavigation.js"
import { useProductPurchaseState } from "../../hooks/useProductPurchaseState.js"
import ProductGallery from "./ProductGallery.jsx"

export default function ProductSection({ shopData }) {
  const {
    activeImage,
    buildCheckoutUrl,
    colorIdx,
    colors,
    desc,
    images,
    installment,
    lightbox,
    origPrice,
    price,
    qty,
    setActiveImage,
    setColorIdx,
    setLightbox,
    setQty,
    setVariantIdx,
    setWishlisted,
    stock,
    title,
    total,
    v,
    variantIdx,
    variants,
    wishlisted,
  } = useProductPurchaseState(shopData)

  useLightboxNavigation({ lightbox, imagesLength: images.length, setActiveImage, setLightbox })

  return (
    <section id="product" style={{ padding:"96px 24px 80px", scrollMarginTop:72 }}>
      <div style={{ maxWidth:1280,margin:"0 auto",display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:64,alignItems:"start" }}>
        <ProductGallery images={images} active={activeImage} setActive={setActiveImage} setLightbox={setLightbox} wishlisted={wishlisted} setWishlisted={setWishlisted} />

        <div id="buy" style={{ position:"sticky",top:88 }}>
          <div style={{ display:"flex",flexDirection:"column",gap:22 }}>
            <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
              <div style={{ display:"inline-flex",alignItems:"center",gap:6,borderRadius:999,border:"1px solid var(--border)",background:"var(--card)",padding:"4px 12px",fontSize:12,width:"fit-content" }}>
                <Sparkles size={13} style={{ color:"var(--accent)" }}/> LUXENSE™ SmartGlow · Series 02
              </div>
              <h1 className="serif" style={{ fontSize:42,lineHeight:1.05,letterSpacing:"-0.02em",textWrap:"balance" }}>
                {shopData?.product ? title : "Light Exactly Where You Need It."}
              </h1>
              <div style={{ display:"flex",alignItems:"center",gap:12,fontSize:13 }}>
                <Stars rating={5} />
                <span style={{ fontWeight:600 }}>4.9</span>
                <span style={{ color:"var(--muted)" }}>· 12,847 reviews</span>
                <a href="#reviews" style={{ color:"var(--fg)",textUnderlineOffset:3 }}>Read reviews</a>
              </div>
              <p style={{ color:"var(--muted)",lineHeight:1.7,maxWidth:480,textWrap:"pretty" }}>{desc}</p>
            </div>

            <div style={{ display:"flex",alignItems:"flex-end",gap:12 }}>
              <span className="serif" style={{ fontSize:48,letterSpacing:"-0.03em" }}>${price.toFixed(2)}</span>
              <span style={{ paddingBottom:8,fontSize:13,color:"var(--muted)",textDecoration:"line-through" }}>${origPrice}</span>
              <span style={{ marginBottom:8,borderRadius:999,background:"rgba(201,169,106,.15)",padding:"4px 10px",fontSize:12,fontWeight:600,color:"#7a5c20" }}>Save 39%</span>
            </div>

            <div style={{ display:"flex",alignItems:"center",gap:12,borderRadius:14,border:"1px solid var(--border)",background:"var(--card)",padding:12,fontSize:13 }}>
              <div style={{ width:44,height:30,borderRadius:6,background:"#FFA8CD",display:"grid",placeItems:"center",fontSize:9,fontWeight:800,color:"#0B051D",fontFamily:"Arial" }}>Klarna.</div>
              <div style={{ flex:1 }}>4 interest‑free payments of <strong>${installment}</strong></div>
              <a href="#" style={{ fontSize:12,color:"var(--muted)" }}>Learn more</a>
            </div>

            <div>
              <div style={{ marginBottom:10,display:"flex",justifyContent:"space-between",fontSize:13 }}>
                <span style={{ fontWeight:500 }}>Finish · <span style={{ color:"var(--muted)" }}>{colors[colorIdx].name}</span></span>
              </div>
              <div style={{ display:"flex",gap:8 }}>
                {colors.map((c,i)=>(
                  <button key={c.name} onClick={()=>setColorIdx(i)} style={{
                    width:42,height:42,borderRadius:"50%",border:`2px solid ${i===colorIdx?"var(--fg)":"var(--border)"}`,
                    display:"grid",placeItems:"center",cursor:"pointer",background:"none",
                    transform:i===colorIdx?"scale(1.1)":"scale(1)",transition:"all .2s"
                  }}>
                    <span style={{ width:28,height:28,borderRadius:"50%",background:c.hex,display:"block",boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)" }} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div style={{ marginBottom:10,display:"flex",justifyContent:"space-between",fontSize:13 }}>
                <span style={{ fontWeight:500 }}>Size</span>
                <span style={{ color:"var(--muted)" }}>{v?.coverage || ""}</span>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10 }}>
                {variants.map((opt,i)=>{
                  const sel = i===variantIdx
                  return (
                    <button key={i} onClick={()=>setVariantIdx(i)} style={{
                      position:"relative",borderRadius:14,border:`1px solid ${sel?"var(--fg)":"var(--border)"}`,
                      background:sel?"var(--fg)":"var(--card)",color:sel?"var(--bg)":"var(--fg)",
                      padding:"10px 8px",textAlign:"left",cursor:"pointer",
                      transform:sel?"scale(1.02)":"scale(1)",transition:"all .2s",
                      boxShadow:sel?"0 8px 24px rgba(0,0,0,.2)":"none"
                    }}>
                      {opt.popular && (
                        <span style={{ position:"absolute",top:-9,left:"50%",transform:"translateX(-50%)",
                          borderRadius:999,background:"var(--accent)",padding:"2px 8px",fontSize:9,fontWeight:700,color:"#3a2800",whiteSpace:"nowrap" }}>
                          Most Popular
                        </span>
                      )}
                      <div style={{ fontSize:13,fontWeight:600 }}>{opt.title}</div>
                      <div style={{ fontSize:11,color:sel?"rgba(253,250,246,.7)":"var(--muted)" }}>${parseFloat(opt.price||0).toFixed(2)}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:14,border:"1px solid var(--border)",background:"var(--card)",padding:"8px 8px 8px 16px" }}>
              <span style={{ fontSize:13,fontWeight:500 }}>Quantity</span>
              <div style={{ display:"flex",alignItems:"center",gap:4 }}>
                {[[-1,<Minus size={15}/>],[1,<Plus size={15}/>]].map(([d,ico],i)=>(
                  <button key={i} onClick={()=>setQty(q=>Math.max(1,q+d))} style={{
                    width:34,height:34,borderRadius:8,border:"1px solid var(--border)",background:"none",cursor:"pointer",display:"grid",placeItems:"center",transition:"background .15s"
                  }} onMouseEnter={e=>e.currentTarget.style.background="var(--sec)"} onMouseLeave={e=>e.currentTarget.style.background="none"}>
                    {i===0?ico:ico}
                  </button>
                ))}
                <span style={{ width:36,textAlign:"center",fontWeight:600,fontVariantNumeric:"tabular-nums" }}>{qty}</span>
                <button onClick={()=>setQty(q=>q+1)} style={{ width:34,height:34,borderRadius:8,border:"1px solid var(--border)",background:"none",cursor:"pointer",display:"grid",placeItems:"center",transition:"background .15s" }}
                  onMouseEnter={e=>e.currentTarget.style.background="var(--sec)"} onMouseLeave={e=>e.currentTarget.style.background="none"}>
                  <Plus size={15}/>
                </button>
              </div>
            </div>

            <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
              <div style={{ display:"flex",justifyContent:"space-between",fontSize:12 }}>
                <span style={{ fontWeight:500 }}>Almost gone — only {stock} left</span>
                <span style={{ color:"var(--muted)" }}>High demand</span>
              </div>
              <div style={{ height:6,borderRadius:999,background:"var(--border)",overflow:"hidden" }}>
                <div style={{ height:"100%",borderRadius:999,background:"linear-gradient(90deg,var(--accent),var(--fg))",width:`${Math.min(100,(stock/80)*100)}%`,transition:"width .5s" }} />
              </div>
            </div>

            <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
              <a href={buildCheckoutUrl()} target={shopData?.shopDomain?"_blank":"_self"} style={{
                position:"relative",display:"flex",alignItems:"center",justifyContent:"center",gap:8,
                borderRadius:14,background:"var(--fg)",color:"var(--bg)",padding:"16px 24px",
                fontSize:15,fontWeight:600,textDecoration:"none",overflow:"hidden",transition:"all .2s",cursor:"pointer"
              }} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.01)";e.currentTarget.style.boxShadow="0 20px 48px rgba(0,0,0,.25)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="none"}}>
                <ShoppingBag size={18}/> Add to Cart — ${total}
              </a>
              <a href={buildCheckoutUrl()} target={shopData?.shopDomain?"_blank":"_self"} style={{
                display:"flex",alignItems:"center",justifyContent:"center",gap:8,borderRadius:14,
                border:"1px solid var(--fg)",background:"var(--bg)",color:"var(--fg)",padding:"16px 24px",
                fontSize:15,fontWeight:600,textDecoration:"none",transition:"all .2s"
              }} onMouseEnter={e=>{e.currentTarget.style.background="var(--fg)";e.currentTarget.style.color="var(--bg)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="var(--bg)";e.currentTarget.style.color="var(--fg)"}}>
                <Zap size={18}/> Buy It Now — Express Checkout
              </a>
            </div>

            <div style={{ borderRadius:14,border:"1px solid var(--border)",background:"var(--card)",padding:16 }}>
              <div style={{ display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--muted)",marginBottom:10 }}>
                <Lock size={13}/> Secure checkout — encrypted SSL
              </div>
              <PaymentIcons />
            </div>

            <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12 }}>
              {[[Truck,"Free worldwide shipping"],[ShieldCheck,"30‑day guarantee"],[Check,"2‑year warranty"]].map(([Icon,label],i)=>(
                <div key={i} style={{ display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--muted)" }}>
                  <Icon size={15} style={{ color:"var(--accent)",flexShrink:0 }}/> {label}
                </div>
              ))}
            </div>

            {v?.battery && (
              <p style={{ fontSize:12,color:"var(--muted)" }}>
                Battery life: <strong style={{ color:"var(--fg)" }}>{v.battery}</strong> · {v.leds||"—"} premium LEDs · Sold by <strong style={{ color:"var(--fg)" }}>LUXENSE™ Official Store</strong>
              </p>
            )}
          </div>
        </div>
      </div>

      {lightbox && (
        <div style={{ position:"fixed",inset:0,zIndex:100,display:"grid",placeItems:"center",background:"rgba(26,22,18,.95)",padding:16,backdropFilter:"blur(8px)" }}
          onClick={()=>setLightbox(false)}>
          <button onClick={()=>setLightbox(false)} style={{ position:"absolute",top:16,right:16,width:40,height:40,borderRadius:"50%",background:"rgba(253,250,246,.2)",border:"none",display:"grid",placeItems:"center",cursor:"pointer",color:"var(--bg)" }}>
            <X size={18}/>
          </button>
          {[[-1,{left:16}],[1,{right:16}]].map(([dir,pos])=>(
            <button key={dir} onClick={e=>{e.stopPropagation();setActiveImage(i=>(i+dir+images.length)%images.length)}}
              style={{ position:"absolute",...pos,top:"50%",transform:"translateY(-50%)",width:48,height:48,borderRadius:"50%",background:"rgba(253,250,246,.2)",border:"none",display:"grid",placeItems:"center",cursor:"pointer",color:"var(--bg)" }}>
              {dir<0?<ChevronLeft size={22}/>:<ChevronRight size={22}/>}
            </button>
          ))}
          <div style={{ position:"relative",width:"90vw",maxWidth:1000,height:"80vh" }} onClick={e=>e.stopPropagation()}>
            {(() => {
              const img = images[activeImage]
              const isUrl = typeof img==="string"&&(img.startsWith("http")||img.startsWith("/"))
              return isUrl ? <img src={img} alt="Product" style={{ width:"100%",height:"100%",objectFit:"contain" }}/> :
                <div style={{ width:"100%",height:"100%",background:img?.gradient||"var(--sec)" }} />
            })()}
          </div>
        </div>
      )}
    </section>
  )
}
