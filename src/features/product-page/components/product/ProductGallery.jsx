import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart, Maximize2, Share2 } from "lucide-react"
import { GALLERY_PLACEHOLDERS } from "../../data/productPageData.js"
import { useLiveViewers } from "../../hooks/useLiveViewers.js"

export default function ProductGallery({ images, active, setActive, setLightbox, wishlisted, setWishlisted }) {
  const [zoom, setZoom] = useState(null)
  const viewers = useLiveViewers(28)

  const src = images[active]
  const isUrl = typeof src === "string" && (src.startsWith("http") || src.startsWith("/"))

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
      <div
        style={{ position:"relative", aspectRatio:"1", borderRadius:24, overflow:"hidden", background:"var(--sec)", cursor:"zoom-in" }}
        onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();setZoom({x:((e.clientX-r.left)/r.width)*100,y:((e.clientY-r.top)/r.height)*100})}}
        onMouseLeave={()=>setZoom(null)}
      >
        <div style={{ position:"absolute",inset:0,transition:"transform .5s ease-out",
          ...(zoom?{transform:`scale(1.7)`,transformOrigin:`${zoom.x}% ${zoom.y}%`}:{}) }}>
          {isUrl ? (
            <img src={src} alt="Product" style={{ width:"100%",height:"100%",objectFit:"cover" }} className="fade-up" />
          ) : (
            <div style={{ width:"100%",height:"100%",background:src?.gradient || GALLERY_PLACEHOLDERS[active % GALLERY_PLACEHOLDERS.length]?.gradient || "var(--sec)" }} className="fade-up" />
          )}
        </div>

        <div className="glow-anim" style={{ position:"absolute",inset:"-80px",zIndex:0,pointerEvents:"none",opacity:.5,
          background:"radial-gradient(closest-side,rgba(201,169,106,.4),transparent 70%)",filter:"blur(48px)" }} />

        <div style={{ position:"absolute",top:12,left:12,display:"flex",flexDirection:"column",gap:8,zIndex:2 }}>
          <span style={{ display:"inline-flex",alignItems:"center",gap:6,borderRadius:999,background:"rgba(253,250,246,.88)",padding:"4px 10px",fontSize:11,fontWeight:500,backdropFilter:"blur(8px)" }}>
            <span style={{ width:6,height:6,borderRadius:"50%",background:"var(--accent)" }} className="glow-anim" /> In stock — ships in 24h
          </span>
          <span style={{ display:"inline-flex",alignItems:"center",gap:6,borderRadius:999,background:"rgba(26,22,18,.92)",color:"var(--bg)",padding:"4px 10px",fontSize:11,fontWeight:500,backdropFilter:"blur(8px)" }}>
            <span style={{ position:"relative",display:"inline-flex",width:8,height:8 }}>
              <span className="glow-anim" style={{ position:"absolute",inset:0,borderRadius:"50%",background:"var(--accent)" }} />
              <span style={{ position:"relative",width:8,height:8,borderRadius:"50%",background:"var(--accent)",display:"inline-flex" }} />
            </span>
            {viewers} people viewing now
          </span>
        </div>

        <div style={{ position:"absolute",top:12,right:12,display:"flex",flexDirection:"column",gap:8,zIndex:2 }}>
          {[
            { action:()=>setWishlisted(w=>!w), icon:<Heart size={16} style={{ fill:wishlisted?"var(--accent)":"none",color:wishlisted?"var(--accent)":"var(--fg)" }}/> },
            { action:()=>{}, icon:<Share2 size={16}/> },
            { action:()=>setLightbox(true), icon:<Maximize2 size={16}/> },
          ].map(({action,icon},i) => (
            <button key={i} onClick={action} style={{ width:38,height:38,borderRadius:"50%",background:"rgba(253,250,246,.88)",backdropFilter:"blur(8px)",border:"none",display:"grid",placeItems:"center",cursor:"pointer",transition:"transform .2s" }}
              onMouseEnter={e=>e.currentTarget.style.transform="scale(1.12)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
              {icon}
            </button>
          ))}
        </div>

        {[[-1,<ChevronLeft size={20}/>,{left:10}],[1,<ChevronRight size={20}/>,{right:10}]].map(([dir,ico,pos]) => (
          <button key={dir} onClick={()=>setActive(i=>(i+dir+images.length)%images.length)}
            style={{ position:"absolute",...pos,top:"50%",transform:"translateY(-50%)",width:38,height:38,borderRadius:"50%",background:"rgba(253,250,246,.85)",backdropFilter:"blur(8px)",border:"none",display:"grid",placeItems:"center",cursor:"pointer",zIndex:2 }}>
            {ico}
          </button>
        ))}

        <div style={{ position:"absolute",bottom:12,left:"50%",transform:"translateX(-50%)",borderRadius:999,background:"rgba(253,250,246,.88)",padding:"3px 10px",fontSize:11,backdropFilter:"blur(8px)",zIndex:2 }}>
          {active+1} / {images.length}
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:`repeat(${Math.min(images.length,9)},1fr)`, gap:8 }}>
        {images.map((img,i) => {
          const isUrl = typeof img === "string" && (img.startsWith("http") || img.startsWith("/"))
          return (
            <button key={i} onClick={()=>setActive(i)} style={{
              aspectRatio:"1",borderRadius:10,overflow:"hidden",border: i===active?"2px solid var(--fg)":"2px solid transparent",
              outline: i===active?"2px solid rgba(201,169,106,.6)":"none",outlineOffset:2,
              transform:i===active?"scale(1.04)":"scale(1)",transition:"all .2s",cursor:"pointer",background:"var(--sec)"
            }}>
              {isUrl ? <img src={img} alt="" style={{ width:"100%",height:"100%",objectFit:"cover" }}/> :
                <div style={{ width:"100%",height:"100%",background:img?.gradient||GALLERY_PLACEHOLDERS[i%5]?.gradient||"var(--sec)" }} />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
