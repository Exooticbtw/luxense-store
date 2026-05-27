import { ROOMS_DATA } from "../../data/productPageData.js"

export default function Rooms() {
  return (
    <section id="rooms" style={{ padding:"80px 24px",scrollMarginTop:72 }}>
      <div style={{ maxWidth:1280,margin:"0 auto" }}>
        <div style={{ marginBottom:48,display:"flex",flexWrap:"wrap",gap:24,justifyContent:"space-between",alignItems:"flex-end" }}>
          <div style={{ maxWidth:560 }}>
            <p style={{ fontSize:12,textTransform:"uppercase",letterSpacing:"0.2em",color:"var(--muted)",marginBottom:10 }}>Designed for every room</p>
            <h2 className="serif" style={{ fontSize:40,lineHeight:1.1,letterSpacing:"-0.02em" }}>A quiet upgrade for every corner of the home.</h2>
          </div>
          <p style={{ maxWidth:380,color:"var(--muted)",lineHeight:1.7,fontSize:14 }}>From walk‑in closets to staircases, it disappears into your interiors and reappears the moment you need it.</p>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16 }}>
          {ROOMS_DATA.map((r)=>(
            <figure key={r.title} style={{ position:"relative",aspectRatio:"3/4",borderRadius:18,overflow:"hidden",background:r.gradient,margin:0,cursor:"default" }}
              onMouseEnter={e=>{e.currentTarget.firstElementChild.style.transform="scale(1.1)"}}
              onMouseLeave={e=>{e.currentTarget.firstElementChild.style.transform="scale(1)"}}>
              <div style={{ position:"absolute",inset:0,background:r.gradient,transition:"transform 1.2s ease" }} />
              <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(26,22,18,.88) 0%,rgba(26,22,18,.2) 50%,transparent 100%)" }} />
              <figcaption style={{ position:"absolute",bottom:0,left:0,right:0,padding:20,color:"var(--bg)" }}>
                <h3 className="serif" style={{ fontSize:24 }}>{r.title}</h3>
                <p style={{ fontSize:13,color:"rgba(253,250,246,.75)",marginTop:4 }}>{r.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
