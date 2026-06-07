export const PRODUCT_PAGE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@500;600;700;800&display=swap');
  :root {
    --bg: #f7f4ef;
    --cream: #ffffff;
    --warm-white: #fbf7f0;
    --card: #ffffff;
    --sec: #f1ebe1;
    --fg: #121212;
    --charcoal: #121212;
    --primary: #121212;
    --primary-fg: #ffffff;
    --muted: #5e5e5e;
    --muted-light: #e8ddcb;
    --accent: #c9a46a;
    --accent-soft: #e8ddcb;
    --trust: #8fae8a;
    --mist: #dbe3ea;
    --border: rgba(18, 18, 18, 0.08);
    --border-subtle: rgba(18, 18, 18, 0.08);
    --shadow: 0 22px 60px rgba(18, 18, 18, 0.08);
    --radius: 24px;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;overflow-x:hidden;background:var(--bg)}
  body{
    font-family:'Inter',system-ui,sans-serif;
    background:var(--bg);
    color:var(--fg);
    line-height:1.65;
    font-size:16px;
    letter-spacing:-0.01em;
    overflow-x:hidden;
  }
  #root{min-height:100vh}
  a{color:inherit}
  img{max-width:100%;display:block}
  button, input{font:inherit}
  button{font-family:'Manrope',sans-serif}
  @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
  @keyframes glowPulse{0%,100%{opacity:.45;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}
  @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
  @keyframes spin{to{transform:rotate(360deg)}}
  .fade-up{animation:fadeUp .7s ease both}
  .glow-anim{animation:glowPulse 3.4s ease-in-out infinite}
  .float-anim{animation:floatY 6s ease-in-out infinite}
  .glass{
    background:rgba(252,250,247,.82);
    backdrop-filter:saturate(140%) blur(14px);
    -webkit-backdrop-filter:saturate(140%) blur(14px);
  }
  .serif{font-family:'Manrope','Inter',system-ui,sans-serif}
  h1,h2,h3,h4,h5,h6,.section-title,.hero-title{
    font-family:'Manrope','Inter',system-ui,sans-serif;
    letter-spacing:-0.045em;
    line-height:1.02;
    font-weight:700;
  }
  h1{font-weight:800}
  h2{font-weight:800}
  h3{font-weight:700}
  .page-shell{min-height:100vh;background:var(--bg);padding-top:112px}
  .site-shell{position:relative;overflow:hidden}
  .section-shell{padding:84px 24px}
  .section-shell > div{max-width:1280px;margin:0 auto}
  .eyebrow{
    font-size:12px;
    text-transform:uppercase;
    letter-spacing:.24em;
    color:var(--muted);
    margin-bottom:10px;
  }
  .section-title{
    font-size:42px;
    line-height:1.02;
    letter-spacing:-.04em;
    text-wrap:balance;
  }
  .soft-card{
    border-radius:28px;
    border:1px solid var(--border);
    background:rgba(255,255,255,.92);
    box-shadow:var(--shadow);
  }
  .chip{
    display:inline-flex;
    align-items:center;
    gap:8px;
    border-radius:999px;
    border:1px solid var(--border);
    background:rgba(252,250,247,.86);
    padding:8px 14px;
    font-size:12px;
    font-weight:700;
    color:var(--fg);
    backdrop-filter:blur(12px);
  }
  input[type=email]{font-family:'Manrope',sans-serif}
  .desktop-nav{display:flex}
  @media (max-width: 1040px){
    .desktop-nav{display:none !important}
    .how-grid,.rooms-grid,.why-grid,.faq-grid,.stats-grid{grid-template-columns:1fr !important}
    .faq-grid{gap:28px !important}
    .why-grid{gap:28px !important}
    .rooms-grid{grid-template-columns:repeat(2, minmax(0,1fr)) !important}
    .stats-grid{grid-template-columns:repeat(2, minmax(0,1fr)) !important}
  }
  @media (max-width: 760px){
    .glass{backdrop-filter:saturate(130%) blur(10px);-webkit-backdrop-filter:saturate(130%) blur(10px)}
    .rooms-grid,.stats-grid{grid-template-columns:1fr !important}
    .how-grid{grid-template-columns:1fr !important}
    .section-title{font-size:32px !important}
    .page-shell{padding-top:102px;padding-bottom:192px}
  }
`
