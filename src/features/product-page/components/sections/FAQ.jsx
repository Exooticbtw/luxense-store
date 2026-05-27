import { useState } from "react"
import { Plus } from "lucide-react"
import { FAQS_DATA } from "../../data/productPageData.js"

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" style={{ background:"rgba(245,241,234,.5)",padding:"80px 24px",scrollMarginTop:72 }}>
      <div style={{ maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1.4fr",gap:64,alignItems:"start" }}>
        <div>
          <p style={{ fontSize:12,textTransform:"uppercase",letterSpacing:"0.2em",color:"var(--muted)",marginBottom:10 }}>FAQ</p>
          <h2 className="serif" style={{ fontSize:40,lineHeight:1.1,letterSpacing:"-0.02em" }}>Everything you wanted to ask.</h2>
          <p style={{ marginTop:16,color:"var(--muted)",lineHeight:1.7,fontSize:14 }}>Still curious? Our concierge team replies within a few hours, every day.</p>
        </div>
        <ul style={{ borderRadius:18,border:"1px solid var(--border)",overflow:"hidden",background:"var(--card)",listStyle:"none" }}>
          {FAQS_DATA.map((f,i)=>(
            <li key={f.q} style={{ borderBottom: i<FAQS_DATA.length-1?"1px solid var(--border)":"none" }}>
              <button onClick={()=>setOpen(open===i?null:i)} style={{
                width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,
                padding:"18px 24px",textAlign:"left",background:"none",border:"none",cursor:"pointer",fontSize:14,fontWeight:500
              }} onMouseEnter={e=>e.currentTarget.style.background="rgba(245,241,234,.5)"} onMouseLeave={e=>e.currentTarget.style.background="none"}>
                {f.q}
                <span style={{
                  width:30,height:30,borderRadius:"50%",border:"1px solid var(--border)",display:"grid",placeItems:"center",flexShrink:0,
                  transition:"transform .3s,background .3s",transform:open===i?"rotate(45deg)":"rotate(0)",
                  background:open===i?"var(--fg)":"none",color:open===i?"var(--bg)":"var(--fg)"
                }}>
                  <Plus size={14}/>
                </span>
              </button>
              <div style={{ overflow:"hidden",maxHeight:open===i?200:0,transition:"max-height .4s ease",opacity:open===i?1:0 }}>
                <p style={{ padding:"0 24px 20px",fontSize:13,color:"var(--muted)",lineHeight:1.8 }}>{f.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
