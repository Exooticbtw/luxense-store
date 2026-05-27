import { FEATURES_DATA } from "../../data/productPageData.js"

export default function FeaturesSection() {
  return (
    <section id="features" style={{ background:"rgba(245,241,234,.5)",padding:"80px 24px",scrollMarginTop:72 }}>
      <div style={{ maxWidth:1280,margin:"0 auto" }}>
        <div style={{ marginBottom:48,maxWidth:600 }}>
          <p style={{ fontSize:12,textTransform:"uppercase",letterSpacing:"0.2em",color:"var(--muted)",marginBottom:10 }}>Engineered for living</p>
          <h2 className="serif" style={{ fontSize:40,lineHeight:1.1,letterSpacing:"-0.02em",textWrap:"balance" }}>Quietly intelligent. Beautifully simple.</h2>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16 }}>
          {FEATURES_DATA.map(({ Icon, title, desc }, i) => (
            <div key={title} className="fade-up" style={{ animationDelay:`${i*70}ms`,borderRadius:18,border:"1px solid var(--border)",background:"var(--card)",padding:24,transition:"all .3s",cursor:"default" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 20px 40px rgba(0,0,0,.1)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}>
              <div style={{ width:48,height:48,borderRadius:12,background:"var(--fg)",color:"var(--bg)",display:"grid",placeItems:"center",marginBottom:18 }}>
                <Icon size={20}/>
              </div>
              <h3 style={{ fontSize:17,fontWeight:600,marginBottom:6 }}>{title}</h3>
              <p style={{ fontSize:13,color:"var(--muted)",lineHeight:1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
