export default function PaymentIcons() {
  const icons = [
    { bg:"#1A1F71", fg:"white", text:"VISA", fw:800 },
    null,
    { bg:"#1F72CD", fg:"white", text:"AMEX", fw:700 },
    { bg:"white", fg:"#003087", text:"PayPal", fw:800, border:true },
    { bg:"#000", fg:"white", text:"Pay", fw:600, sub:" Pay" },
    { bg:"white", fg:"#4285F4", text:"G Pay", fw:600, border:true },
    { bg:"#5A31F4", fg:"white", text:"Shop Pay", fw:700 },
    { bg:"#FFA8CD", fg:"#0B051D", text:"Klarna.", fw:800 },
    { bg:"#635BFF", fg:"white", text:"stripe", fw:700, italic:true },
  ]
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 }}>
      {icons.map((ic, i) => ic === null ? (
        <div key={i} style={{ display:"flex", alignItems:"center", gap:0 }}>
          <div style={{ width:26,height:26,borderRadius:"50%",background:"#EB001B" }} />
          <div style={{ width:26,height:26,borderRadius:"50%",background:"#F79E1B",marginLeft:-10 }} />
        </div>
      ) : (
        <div key={i} style={{
          background: ic.bg, color: ic.fg, borderRadius: 5, padding: "3px 7px",
          fontSize: 10, fontWeight: ic.fw, fontStyle: ic.italic ? "italic" : "normal",
          border: ic.border ? "1px solid #e5e7eb" : "none",
          fontFamily:"Arial", whiteSpace:"nowrap"
        }}>{ic.text}</div>
      ))}
    </div>
  )
}
