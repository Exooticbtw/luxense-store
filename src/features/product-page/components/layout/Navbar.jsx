import { ShoppingBag } from "lucide-react"

export default function Navbar({ scrolled, shopName }) {
  const navLinks = [["Product","#product"],["Features","#features"],["How it works","#how"],["Rooms","#rooms"],["Reviews","#reviews"],["FAQ","#faq"]]
  return (
    <>
      <div style={{ background:"var(--fg)", color:"var(--bg)", padding:"8px 16px", textAlign:"center", fontSize:11, fontWeight:500, letterSpacing:"0.08em" }}>
        <span style={{ color:"var(--accent)", marginRight:8 }}>●</span>
        FREE worldwide shipping on orders over $39 · 30‑day returns · 2‑year warranty
        <span style={{ color:"var(--accent)", marginLeft:8 }}>●</span>
      </div>
      <header style={{
        position:"sticky", top:0, zIndex:50,
        background: scrolled ? "rgba(253,250,246,0.85)" : "var(--bg)",
        backdropFilter: scrolled ? "saturate(140%) blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition:"all .4s ease"
      }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <a href="#top" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none", color:"inherit" }}>
            <div style={{ position:"relative", width:36,height:36,borderRadius:10,background:"var(--fg)",display:"grid",placeItems:"center",color:"var(--bg)" }}>
              <div className="glow-anim" style={{ position:"absolute",inset:0,borderRadius:10,background:"rgba(201,169,106,.4)",filter:"blur(8px)" }} />
              <svg viewBox="0 0 24 24" style={{ width:16,height:16,position:"relative" }} fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
            </div>
            <div style={{ display:"flex", flexDirection:"column", lineHeight:1 }}>
              <span className="serif" style={{ fontSize:20, letterSpacing:"-0.02em" }}>{shopName || "LUXENSE"}</span>
              <span style={{ fontSize:9, fontWeight:600, letterSpacing:"0.22em", color:"var(--muted)", textTransform:"uppercase", marginTop:2 }}>SmartGlow</span>
            </div>
          </a>
          <nav style={{ display:"flex", alignItems:"center", gap:28 }} className="desktop-nav">
            {navLinks.map(([l,h]) => (
              <a key={h} href={h} style={{ fontSize:13, color:"var(--muted)", textDecoration:"none", transition:"color .2s" }}
                onMouseEnter={e=>e.target.style.color="var(--fg)"} onMouseLeave={e=>e.target.style.color="var(--muted)"}>{l}</a>
            ))}
          </nav>
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            <a href="#buy" style={{
              display:"flex",alignItems:"center",gap:8,borderRadius:999,background:"var(--fg)",
              color:"var(--bg)",padding:"8px 16px",fontSize:13,fontWeight:600,textDecoration:"none",
              transition:"all .2s"
            }} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.03)";e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,.2)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="none"}}>
              <ShoppingBag size={15}/> Shop Now
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
