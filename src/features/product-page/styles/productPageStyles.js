export const PRODUCT_PAGE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@400;500;600;700&display=swap');
  :root {
    --bg: #fdfaf6; --fg: #1a1612; --card: #ffffff; --sec: #f5f1ea;
    --muted: #7a756e; --accent: #c9a96a; --border: #e8e2d8;
    --primary: #1a1612; --primary-fg: #fdfaf6; --radius: 14px;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:'Manrope',sans-serif;background:var(--bg);color:var(--fg);line-height:1.6}
  @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
  @keyframes glowPulse{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}
  @keyframes ping{75%,100%{transform:scale(2);opacity:0}}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
  .fade-up{animation:fadeUp .7s ease both}
  .glow-anim{animation:glowPulse 3.4s ease-in-out infinite}
  .float-anim{animation:floatY 6s ease-in-out infinite}
  .glass{background:rgba(253,250,246,.82);backdrop-filter:saturate(140%) blur(14px);-webkit-backdrop-filter:saturate(140%) blur(14px)}
  .serif{font-family:'Cormorant Garamond',serif}
  input[type=email]{font-family:'Manrope',sans-serif}
`
