import { useState } from "react"
import { BadgeCheck, ThumbsUp } from "lucide-react"
import Stars from "../common/Stars.jsx"
import { REVIEWS_DATA } from "../../data/productPageData.js"

export default function Reviews() {
  const [helpful, setHelpful] = useState({})
  return (
    <section id="reviews" style={{ padding:"80px 24px",scrollMarginTop:72 }}>
      <div style={{ maxWidth:1280,margin:"0 auto" }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:48,flexWrap:"wrap",gap:24 }}>
          <div>
            <p style={{ fontSize:12,textTransform:"uppercase",letterSpacing:"0.2em",color:"var(--muted)",marginBottom:10 }}>Customer reviews</p>
            <h2 className="serif" style={{ fontSize:40,lineHeight:1.1,letterSpacing:"-0.02em" }}>12,847 reviews. All glowing.</h2>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:8,minWidth:260 }}>
            {[[5,89],[4,8],[3,2],[2,"0.8"],[1,"0.4"]].map(([stars,pct])=>(
              <div key={stars} style={{ display:"flex",alignItems:"center",gap:10,fontSize:13 }}>
                <span style={{ color:"var(--muted)",width:16 }}>{stars}</span>
                <div style={{ flex:1,height:6,borderRadius:999,background:"var(--border)",overflow:"hidden" }}>
                  <div style={{ height:"100%",borderRadius:999,background:"var(--accent)",width:`${pct}%` }} />
                </div>
                <span style={{ color:"var(--muted)",width:32,textAlign:"right" }}>{pct}%</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:20 }}>
          {REVIEWS_DATA.map((r,i)=>(
            <div key={r.name} style={{ borderRadius:18,border:"1px solid var(--border)",background:"var(--card)",padding:24,display:"flex",flexDirection:"column",gap:14 }}>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start" }}>
                <div style={{ display:"flex",gap:12,alignItems:"center" }}>
                  <div style={{ width:40,height:40,borderRadius:"50%",background:`hsl(${i*47},30%,75%)`,display:"grid",placeItems:"center",fontSize:15,fontWeight:600 }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight:600,fontSize:14 }}>{r.name}</div>
                    <div style={{ fontSize:12,color:"var(--muted)" }}>{r.country}</div>
                  </div>
                </div>
                <div style={{ display:"flex",gap:6,alignItems:"center" }}>
                  <BadgeCheck size={14} style={{ color:"var(--accent)" }}/>
                  <span style={{ fontSize:11,color:"var(--muted)" }}>Verified</span>
                </div>
              </div>
              <div>
                <Stars rating={r.rating} size={13}/>
                <h4 style={{ fontSize:14,fontWeight:600,marginTop:8,marginBottom:6 }}>{r.title}</h4>
                <p style={{ fontSize:13,color:"var(--muted)",lineHeight:1.7 }}>{r.text}</p>
              </div>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:12,color:"var(--muted)",paddingTop:10,borderTop:"1px solid var(--border)" }}>
                <span>{r.variant} · {r.date}</span>
                <button onClick={()=>setHelpful(h=>({...h,[i]:(h[i]||r.helpful)+1}))} style={{ display:"flex",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer",fontSize:12,color:"var(--muted)" }}>
                  <ThumbsUp size={13}/> {helpful[i]||r.helpful}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
