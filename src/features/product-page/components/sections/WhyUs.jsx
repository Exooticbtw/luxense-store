import { Check, X } from "lucide-react"
import { STATS, WHY_ROWS } from "../../data/productPageData.js"

export default function WhyUs() {
  return (
    <section style={{ background:"rgba(245,241,234,.5)",padding:"80px 24px" }}>
      <div style={{ maxWidth:1280,margin:"0 auto" }}>
        <div style={{ marginBottom:48,maxWidth:560 }}>
          <p style={{ fontSize:12,textTransform:"uppercase",letterSpacing:"0.2em",color:"var(--muted)",marginBottom:10 }}>Why LUXENSE</p>
          <h2 className="serif" style={{ fontSize:40,lineHeight:1.1,letterSpacing:"-0.02em" }}>The difference is in the details.</h2>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:40 }}>
          <div style={{ borderRadius:18,border:"1px solid var(--border)",overflow:"hidden",background:"var(--card)" }}>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",borderBottom:"1px solid var(--border)",background:"var(--sec)",padding:"14px 24px",fontSize:13,fontWeight:600 }}>
              <div>Feature</div><div style={{ textAlign:"center" }}>LUXENSE</div><div style={{ textAlign:"center",color:"var(--muted)" }}>Generic LED</div>
            </div>
            {WHY_ROWS.map((r,i)=>(
              <div key={r.label} style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",alignItems:"center",padding:"14px 24px",fontSize:13,background:i%2?"rgba(245,241,234,.3)":"" }}>
                <div>{r.label}</div>
                <div style={{ display:"flex",justifyContent:"center" }}>
                  <span style={{ width:28,height:28,borderRadius:"50%",background:"rgba(201,169,106,.2)",display:"grid",placeItems:"center" }}>
                    <Check size={15} style={{ color:"var(--accent)" }}/>
                  </span>
                </div>
                <div style={{ display:"flex",justifyContent:"center",color:"var(--muted)" }}>
                  {r.them===false?<span style={{ width:28,height:28,borderRadius:"50%",background:"var(--sec)",display:"grid",placeItems:"center" }}><X size={15}/></span>:<span style={{ fontSize:12 }}>{r.them}</span>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
            {STATS.map(s=>(
              <div key={s.l} style={{ borderRadius:18,border:"1px solid var(--border)",background:"var(--card)",padding:24,transition:"all .25s",cursor:"default" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,.1)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}>
                <div className="serif" style={{ fontSize:36,letterSpacing:"-0.02em" }}>{s.v}</div>
                <div style={{ fontSize:13,color:"var(--muted)",marginTop:4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
