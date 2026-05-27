import { ShoppingBag } from "lucide-react"

export default function StickyBar({ show, price, checkoutUrl }) {
  return (
    <div style={{
      position:"fixed",bottom:0,left:0,right:0,zIndex:50,transition:"all .4s",
      transform:show?"translateY(0)":"translateY(100%)",opacity:show?1:0
    }}>
      <div className="glass" style={{ borderTop:"1px solid var(--border)",padding:"12px 24px" }}>
        <div style={{ maxWidth:1280,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12 }}>
          <div>
            <div style={{ fontSize:10,textTransform:"uppercase",letterSpacing:"0.15em",color:"var(--muted)" }}>LUXENSE™</div>
            <div style={{ fontSize:16,fontWeight:600 }}>${price} <span style={{ fontSize:12,fontWeight:400,color:"var(--muted)",textDecoration:"line-through" }}>${(price*1.65).toFixed(2)}</span></div>
          </div>
          <a href={checkoutUrl||"#buy"} style={{
            display:"flex",alignItems:"center",gap:8,borderRadius:999,background:"var(--fg)",
            color:"var(--bg)",padding:"12px 24px",fontSize:13,fontWeight:700,textDecoration:"none",transition:"all .15s",whiteSpace:"nowrap"
          }} onMouseEnter={e=>e.currentTarget.style.transform="scale(1.02)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
            <ShoppingBag size={15}/> Add to Cart
          </a>
        </div>
      </div>
    </div>
  )
}
