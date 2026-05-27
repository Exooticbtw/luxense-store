import { AtSign, Mail, MessageCircle, Video } from "lucide-react"
import PaymentIcons from "../common/PaymentIcons.jsx"

export default function Footer({ shopName }) {
  return (
    <footer style={{ borderTop:"1px solid var(--border)",padding:"64px 24px" }}>
      <div style={{ maxWidth:1280,margin:"0 auto" }}>
        <div style={{ borderRadius:24,border:"1px solid var(--border)",background:"var(--card)",padding:"36px 40px",marginBottom:48 }}>
          <div style={{ display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:32,alignItems:"center" }}>
            <div>
              <h3 className="serif" style={{ fontSize:32,letterSpacing:"-0.02em" }}>Join the {shopName||"LUXENSE"} inner circle.</h3>
              <p style={{ marginTop:8,fontSize:13,color:"var(--muted)",maxWidth:420 }}>Get 10% off your first order, early access to new drops, and design inspiration delivered monthly.</p>
            </div>
            <div style={{ display:"flex",gap:8 }}>
              <div style={{ position:"relative",flex:1 }}>
                <Mail size={15} style={{ position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:"var(--muted)" }}/>
                <input type="email" placeholder="your@email.com" style={{ height:48,width:"100%",borderRadius:12,border:"1px solid var(--border)",paddingLeft:36,paddingRight:12,fontSize:13,outline:"none",fontFamily:"inherit",background:"var(--bg)" }} />
              </div>
              <button style={{ height:48,borderRadius:12,background:"var(--fg)",color:"var(--bg)",border:"none",padding:"0 20px",fontSize:13,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap" }}>Subscribe</button>
            </div>
          </div>
        </div>

        <div style={{ display:"grid",gridTemplateColumns:"1.4fr 1fr 1fr 1fr",gap:40 }}>
          <div>
            <div style={{ display:"flex",gap:10,alignItems:"center",marginBottom:14 }}>
              <div style={{ width:36,height:36,borderRadius:10,background:"var(--fg)",display:"grid",placeItems:"center",color:"var(--bg)" }}>
                <svg viewBox="0 0 24 24" style={{ width:16,height:16 }} fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2" strokeLinecap="round"/>
                </svg>
              </div>
              <div style={{ display:"flex",flexDirection:"column",lineHeight:1 }}>
                <span className="serif" style={{ fontSize:18 }}>{shopName||"LUXENSE"}</span>
                <span style={{ fontSize:9,fontWeight:600,letterSpacing:"0.22em",color:"var(--muted)",textTransform:"uppercase",marginTop:2 }}>SmartGlow</span>
              </div>
            </div>
            <p style={{ fontSize:13,color:"var(--muted)",lineHeight:1.7,maxWidth:280 }}>Premium wireless lighting for modern living. Designed in Copenhagen, shipped worldwide.</p>
            <div style={{ display:"flex",gap:8,marginTop:18 }}>
              {[AtSign,MessageCircle,Video].map((Icon,i)=>(
                <a key={i} href="#" style={{ width:36,height:36,borderRadius:"50%",border:"1px solid var(--border)",display:"grid",placeItems:"center",color:"inherit",transition:"all .2s",textDecoration:"none" }}
                  onMouseEnter={e=>{e.currentTarget.style.background="var(--fg)";e.currentTarget.style.color="var(--bg)"}}
                  onMouseLeave={e=>{e.currentTarget.style.background="none";e.currentTarget.style.color="inherit"}}>
                  <Icon size={15}/>
                </a>
              ))}
            </div>
          </div>
          {[["Shop",["SmartGlow 20CM","SmartGlow 30CM","SmartGlow 40CM","SmartGlow 50CM","Bundles"]],
            ["Support",["Shipping","Returns","Warranty","Track Order","Contact"]],
            ["Company",["About","Press","Sustainability","Affiliate","Careers"]]
          ].map(([title,items])=>(
            <div key={title}>
              <div style={{ fontSize:13,fontWeight:600,marginBottom:16 }}>{title}</div>
              <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:10 }}>
                {items.map(it=>(
                  <li key={it}><a href="#" style={{ fontSize:13,color:"var(--muted)",textDecoration:"none",transition:"color .15s" }}
                    onMouseEnter={e=>e.target.style.color="var(--fg)"} onMouseLeave={e=>e.target.style.color="var(--muted)"}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop:48,borderTop:"1px solid var(--border)",paddingTop:24 }}>
          <div style={{ marginBottom:16 }}><PaymentIcons /></div>
          <div style={{ display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12,fontSize:12,color:"var(--muted)" }}>
            <span>© {new Date().getFullYear()} {shopName||"LUXENSE"}™ SmartGlow. All rights reserved.</span>
            <div style={{ display:"flex",gap:20 }}>
              {["Privacy","Terms","Cookies"].map(l=><a key={l} href="#" style={{ color:"var(--muted)",textDecoration:"none" }} onMouseEnter={e=>e.target.style.color="var(--fg)"} onMouseLeave={e=>e.target.style.color="var(--muted)"}>{l}</a>)}
            </div>
            <span>Designed in Copenhagen · Shipped worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
