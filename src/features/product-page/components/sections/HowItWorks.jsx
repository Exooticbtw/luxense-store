import { HOW_STEPS } from "../../data/productPageData.js"

export default function HowItWorks() {
  return (
    <section id="how" style={{ position:"relative",background:"var(--fg)",color:"var(--bg)",padding:"80px 24px",scrollMarginTop:72,overflow:"hidden" }}>
      <div className="glow-anim" style={{ position:"absolute",left:"50%",top:"50%",width:700,height:700,transform:"translate(-50%,-50%)",borderRadius:"50%",opacity:.25,background:"radial-gradient(closest-side,rgba(201,169,106,.6),transparent 70%)",filter:"blur(40px)",pointerEvents:"none" }} />
      <div style={{ position:"relative",maxWidth:1280,margin:"0 auto" }}>
        <div style={{ marginBottom:56,maxWidth:560 }}>
          <p style={{ fontSize:12,textTransform:"uppercase",letterSpacing:"0.2em",color:"rgba(253,250,246,.55)",marginBottom:10 }}>How it works</p>
          <h2 className="serif" style={{ fontSize:40,lineHeight:1.1,letterSpacing:"-0.02em" }}>Three steps. Then forget it's there.</h2>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
          {HOW_STEPS.map(({ n, Icon, title, desc }, i) => (
            <div key={n} style={{ borderRadius:18,border:"1px solid rgba(253,250,246,.1)",background:"rgba(253,250,246,.03)",padding:28,backdropFilter:"blur(8px)",transition:"background .3s" }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(253,250,246,.06)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(253,250,246,.03)"}>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24 }}>
                <span className="serif" style={{ fontSize:28,color:"rgba(253,250,246,.4)" }}>{n}</span>
                <div style={{ position:"relative",width:44,height:44,borderRadius:12,background:"var(--accent)",display:"grid",placeItems:"center",color:"#3a2800" }}>
                  <Icon size={20}/>
                  {i===2 && <span className="glow-anim" style={{ position:"absolute",inset:"-10px",borderRadius:18,border:"1px solid rgba(201,169,106,.4)" }} />}
                </div>
              </div>
              <h3 style={{ fontSize:18,fontWeight:600,marginBottom:8 }}>{title}</h3>
              <p style={{ fontSize:13,color:"rgba(253,250,246,.65)",lineHeight:1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
