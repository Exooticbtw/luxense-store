import { ShieldCheck, ShoppingBag } from "lucide-react"
import { formatTwoDigits } from "../../helpers/formatters.js"
import { useCountdownTimer } from "../../hooks/useCountdownTimer.js"
import { buildCartUrl } from "../../utils/shopify.js"

export default function FinalCTA({ shopDomain, variantId }) {
  const { hours, minutes, seconds } = useCountdownTimer(6*3600+23*60+11)
  const url = buildCartUrl(shopDomain, variantId, 1) || "#buy"
  return (
    <section style={{ position:"relative",background:"var(--fg)",color:"var(--bg)",padding:"96px 24px",overflow:"hidden",textAlign:"center" }}>
      <div style={{ position:"absolute",inset:0,opacity:.45,background:"radial-gradient(60% 50% at 50% 100%,rgba(201,169,106,.55),transparent 70%)",pointerEvents:"none" }} />
      <div className="glow-anim" style={{ position:"absolute",left:"50%",top:"33%",width:420,height:420,transform:"translateX(-50%)",borderRadius:"50%",opacity:.28,background:"rgba(201,169,106,.8)",filter:"blur(60px)",pointerEvents:"none" }} />
      <div style={{ position:"relative",maxWidth:700,margin:"0 auto" }}>
        <p style={{ fontSize:12,textTransform:"uppercase",letterSpacing:"0.25em",color:"rgba(253,250,246,.55)",marginBottom:16 }}>Limited launch offer</p>
        <h2 className="serif" style={{ fontSize:52,lineHeight:1.05,letterSpacing:"-0.02em" }}>Upgrade your space with smart lighting.</h2>
        <p style={{ marginTop:18,color:"rgba(253,250,246,.65)",lineHeight:1.7,maxWidth:480,margin:"18px auto 0" }}>Minimal design. Intelligent illumination. Effortless comfort. Save 38% during our launch — only while stock lasts.</p>
        <div style={{ display:"flex",justifyContent:"center",gap:12,marginTop:36 }}>
          {[[formatTwoDigits(hours),"Hours"],[formatTwoDigits(minutes),"Minutes"],[formatTwoDigits(seconds),"Seconds"]].map(([val,label])=>(
            <div key={label} style={{ minWidth:88,borderRadius:18,border:"1px solid rgba(253,250,246,.1)",background:"rgba(253,250,246,.04)",padding:16,backdropFilter:"blur(8px)" }}>
              <div className="serif" style={{ fontSize:40,letterSpacing:"-0.03em",fontVariantNumeric:"tabular-nums" }}>{val}</div>
              <div style={{ fontSize:10,textTransform:"uppercase",letterSpacing:"0.15em",color:"rgba(253,250,246,.55)",marginTop:4 }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:16,marginTop:36,flexWrap:"wrap" }}>
          <a href={url} target={shopDomain?"_blank":"_self"} style={{
            display:"inline-flex",alignItems:"center",gap:8,borderRadius:14,background:"var(--accent)",
            color:"#3a2800",padding:"14px 28px",fontSize:15,fontWeight:700,textDecoration:"none",
            boxShadow:"0 20px 48px rgba(201,169,106,.35)",transition:"all .2s"
          }} onMouseEnter={e=>e.currentTarget.style.transform="scale(1.03)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
            <ShoppingBag size={18}/> Get Yours Today
          </a>
          <span style={{ display:"inline-flex",alignItems:"center",gap:6,fontSize:13,color:"rgba(253,250,246,.65)" }}>
            <ShieldCheck size={15}/> 30‑day money‑back guarantee
          </span>
        </div>
      </div>
    </section>
  )
}
