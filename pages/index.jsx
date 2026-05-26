<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Ring Rage — Seguridad simple para adultos mayores</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,300;1,6..72,400;1,6..72,500&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    /* warm — main palette */
    --bg: #F5EFE6;
    --bg-2: #EFE7DA;
    --bg-3: #E7DCC8;
    --ink: #1C140D;
    --ink-2: #3A2E22;
    --ink-3: #6B5A48;
    --rule: rgba(28,20,13,0.14);
    --rule-strong: rgba(28,20,13,0.28);
    --accent: oklch(0.62 0.14 40);
    --accent-soft: oklch(0.85 0.07 40);
    --danger: oklch(0.52 0.16 28);

    /* cool — B2B palette */
    --b2b-bg: #0E1418;
    --b2b-bg-2: #161E23;
    --b2b-ink: #E8ECEF;
    --b2b-ink-2: #A7B2BA;
    --b2b-rule: rgba(232,236,239,0.16);
    --b2b-copper: oklch(0.74 0.12 65);
    --b2b-mint: oklch(0.78 0.12 165);

    --serif: 'Newsreader', Georgia, serif;
    --sans: 'IBM Plex Sans', system-ui, sans-serif;
    --mono: 'IBM Plex Mono', ui-monospace, monospace;
  }
  *{ box-sizing: border-box; }
  html,body{ margin:0; padding:0; }
  body{
    background: var(--bg);
    color: var(--ink);
    font-family: var(--sans);
    font-size: 17px;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  h1,h2,h3,h4{ font-family: var(--serif); font-weight: 400; letter-spacing: -0.01em; margin: 0; text-wrap: balance; }
  p{ margin: 0; text-wrap: pretty; }
  a{ color: inherit; }

  .mono{ font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink-3); }
  .eyebrow{
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-3);
  }
  .eyebrow .dot{
    display:inline-block; width: 7px; height: 7px; border-radius: 50%;
    background: var(--accent); margin-right: 10px; vertical-align: 2px;
  }

  /* ── NAV ─────────────────────────────────────── */
  .nav{
    position: sticky; top: 0; z-index: 50;
    backdrop-filter: blur(10px);
    background: color-mix(in oklab, var(--bg) 84%, transparent);
    border-bottom: 1px solid var(--rule);
  }
  .nav-inner{
    max-width: 1240px; margin: 0 auto; padding: 16px 32px;
    display: flex; align-items: center; justify-content: space-between; gap: 24px;
  }
  .brand{
    font-family: var(--serif); font-size: 1.35rem; font-weight: 500;
    letter-spacing: -0.02em;
    display: inline-flex; align-items: baseline; gap: 8px;
  }
  .brand .ring{ color: var(--accent); font-style: italic; }
  .nav-links{ display:flex; gap: 28px; align-items: center; font-size: 0.92rem; }
  .nav-links a{ text-decoration: none; color: var(--ink-2); }
  .nav-links a:hover{ color: var(--accent); }
  .btn{
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 16px;
    border-radius: 999px;
    background: var(--ink);
    color: var(--bg);
    font-size: 0.9rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: transform .15s ease, background .2s ease;
  }
  .btn:hover{ background: var(--accent); transform: translateY(-1px); }
  .btn.ghost{
    background: transparent; color: var(--ink);
    border: 1px solid var(--rule-strong);
  }
  .btn.ghost:hover{ background: var(--ink); color: var(--bg); }

  /* ── SECTION SHELL ───────────────────────────── */
  section{ padding: 96px 32px; position: relative; }
  .wrap{ max-width: 1240px; margin: 0 auto; }
  .grid{ display: grid; gap: 32px; }

  .section-head{
    display: grid; grid-template-columns: 220px 1fr; gap: 48px;
    align-items: start; margin-bottom: 56px;
  }
  .section-head .num{
    font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.16em;
    color: var(--ink-3); text-transform: uppercase;
  }
  .section-title{
    font-size: clamp(2.2rem, 4vw, 3.4rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
  }
  .section-title em{ color: var(--accent); font-style: italic; font-weight: 400; }
  .section-lede{
    margin-top: 16px; max-width: 60ch; font-size: 1.1rem; color: var(--ink-2);
  }

  /* ── HERO ────────────────────────────────────── */
  .hero{
    padding: 72px 32px 96px;
    border-bottom: 1px solid var(--rule);
    position: relative; overflow: hidden;
  }
  .hero-inner{
    max-width: 1240px; margin: 0 auto;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 64px;
    align-items: end;
  }
  .hero-eyebrow{ margin-bottom: 32px; }
  .hero h1{
    font-size: clamp(3rem, 6.2vw, 5.6rem);
    line-height: 0.98;
    letter-spacing: -0.035em;
    font-weight: 400;
  }
  .hero h1 em{
    font-style: italic; color: var(--accent); font-weight: 300;
  }
  .hero-sub{
    margin-top: 28px;
    font-size: 1.18rem;
    color: var(--ink-2);
    max-width: 44ch;
  }
  .hero-meta{
    margin-top: 36px;
    display: flex; gap: 16px; flex-wrap: wrap;
  }
  .chips{
    display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px;
  }
  .chip{
    display: inline-flex; align-items: center; gap: 8px;
    padding: 8px 12px; border-radius: 999px;
    border: 1px solid var(--rule-strong);
    font-size: 0.84rem; color: var(--ink-2);
    background: var(--bg);
  }
  .chip::before{
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: var(--accent);
  }
  .hero-card{
    background: var(--bg-2);
    border: 1px solid var(--rule);
    border-radius: 6px;
    padding: 0;
    position: relative;
    aspect-ratio: 4/5;
    overflow: hidden;
    box-shadow: 0 30px 60px -30px rgba(28,20,13,0.18);
  }
  .placeholder{
    position: absolute; inset: 0;
    background:
      repeating-linear-gradient(
        135deg,
        transparent 0 12px,
        rgba(28,20,13,0.045) 12px 13px
      ),
      var(--bg-2);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 6px;
    color: var(--ink-3);
    font-family: var(--mono); font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    padding: 24px;
  }
  .placeholder .label{ color: var(--ink-2); font-size: 0.82rem; }
  .placeholder .desc{ font-size: 0.68rem; color: var(--ink-3); max-width: 28ch; line-height: 1.5; text-transform: none; letter-spacing: 0.04em; }
  .placeholder .corner{
    position: absolute; font-size: 0.65rem;
    letter-spacing: 0.1em;
  }
  .placeholder .corner.tl{ top: 12px; left: 14px; }
  .placeholder .corner.br{ bottom: 12px; right: 14px; }
  .placeholder.warm{ background: repeating-linear-gradient(135deg, transparent 0 12px, rgba(28,20,13,0.045) 12px 13px), var(--bg-2); }
  .placeholder.dark{
    background: repeating-linear-gradient(135deg, transparent 0 12px, rgba(255,255,255,0.04) 12px 13px), var(--b2b-bg-2);
    color: var(--b2b-ink-2);
  }
  .placeholder.dark .label{ color: var(--b2b-ink); }

  /* ── MEDIA (real images) ───────────────────── */
  .media{
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; display: block;
  }
  .media-tag{
    position: absolute; left: 14px; top: 14px;
    font-family: var(--mono); font-size: 0.62rem;
    letter-spacing: 0.14em; text-transform: uppercase;
    background: rgba(28,20,13,0.78); color: var(--bg);
    padding: 5px 9px; border-radius: 2px;
    z-index: 2;
    backdrop-filter: blur(4px);
  }
  .b2b-media{
    margin-top: 8px; margin-bottom: 24px;
    aspect-ratio: 21/9;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--b2b-rule);
  }
  .b2b-media img{
    width: 100%; height: 100%;
    object-fit: cover; display: block;
  }

  /* ── MARIO SECTION ────────────────────────── */
  .mario-sec{
    background: var(--bg);
    border-top: 1px solid var(--rule);
  }
  .mario-grid{
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 80px;
    align-items: center;
    margin-top: 8px;
  }
  .mario-text p.lede2{
    font-size: 1.18rem; color: var(--ink-2);
    max-width: 46ch;
  }
  .mlist{
    list-style: none; padding: 0; margin: 36px 0 0 0;
    border-top: 1px solid var(--rule);
    padding-top: 24px;
    display: grid; gap: 18px;
  }
  .mlist li{
    font-size: 0.98rem; color: var(--ink-3);
    padding-left: 28px; position: relative;
    line-height: 1.55;
  }
  .mlist li::before{
    content: ''; position: absolute;
    left: 0; top: 11px;
    width: 16px; height: 1px;
    background: var(--accent);
  }
  .mlist li strong{ color: var(--ink); font-weight: 500; }
  .mario-phone{
    position: relative;
    aspect-ratio: 9/19;
    max-width: 360px;
    margin: 0 auto;
    background: #1C140D;
    border-radius: 42px;
    padding: 12px;
    box-shadow:
      0 30px 60px -30px rgba(28,20,13,0.35),
      inset 0 0 0 1px rgba(255,255,255,0.06);
  }
  .mario-phone::before{
    content: ''; position: absolute;
    top: 18px; left: 50%; transform: translateX(-50%);
    width: 100px; height: 22px;
    background: #1C140D; border-radius: 999px;
    z-index: 3;
  }
  .mario-phone img{
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    border-radius: 32px;
  }
  /* ── MARÍA story side ───────────────────────── */
  .story-portrait{
    margin: -32px -32px 28px;
    aspect-ratio: 1/1;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid rgba(245,239,230,0.18);
  }
  .story-portrait img{
    width: 100%; height: 100%;
    object-fit: cover; object-position: center 30%;
    display: block;
    filter: saturate(0.92);
  }
  @media (max-width: 960px){
    .mario-grid{ grid-template-columns: 1fr; gap: 32px; }
    .mario-phone{ max-width: 280px; }
  }

  .hero-stats{
    margin-top: 64px;
    border-top: 1px solid var(--rule);
    padding-top: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
  .stat .num{
    font-family: var(--serif);
    font-size: clamp(2.2rem, 3.4vw, 3rem);
    line-height: 1;
    font-weight: 400;
    letter-spacing: -0.03em;
  }
  .stat .num em{ font-style: italic; color: var(--accent); }
  .stat .lbl{
    margin-top: 8px;
    font-size: 0.85rem;
    color: var(--ink-3);
    line-height: 1.45;
  }

  /* ── PROBLEM ─────────────────────────────────── */
  .problem{
    background: var(--bg-2);
    border-bottom: 1px solid var(--rule);
  }
  .big-quote{
    font-family: var(--serif);
    font-size: clamp(2rem, 3.4vw, 2.8rem);
    line-height: 1.15;
    letter-spacing: -0.015em;
    max-width: 26ch;
  }
  .problem-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-top: 56px;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
  }
  .pcard{
    padding: 40px;
    border-right: 1px solid var(--rule);
  }
  .pcard:last-child{ border-right: none; }
  .pcard .big{
    font-family: var(--serif);
    font-size: clamp(3.2rem, 6vw, 5rem);
    line-height: 1;
    font-weight: 300;
    letter-spacing: -0.03em;
    color: var(--accent);
  }
  .pcard .big em{ font-style: italic; }
  .pcard .text{
    margin-top: 16px;
    font-size: 1.05rem;
    color: var(--ink-2);
    max-width: 32ch;
  }
  .pcard .src{
    margin-top: 24px;
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    color: var(--ink-3);
    text-transform: uppercase;
  }
  .pain-list{
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-top: 1px solid var(--rule);
  }
  .pain{
    padding: 32px 24px 32px 0;
    border-right: 1px solid var(--rule);
    padding-left: 24px;
  }
  .pain:last-child{ border-right: none; }
  .pain .n{
    font-family: var(--mono); font-size: 0.72rem;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 16px;
  }
  .pain h4{
    font-size: 1.25rem; line-height: 1.25; margin-bottom: 10px;
  }
  .pain p{ color: var(--ink-3); font-size: 0.95rem; }

  /* ── SOLUTION ────────────────────────────────── */
  .solution{ padding-bottom: 64px; }
  .solution-hero{
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
    align-items: center;
  }
  .solution-text h2{
    font-size: clamp(2.4rem, 4.2vw, 3.6rem);
    line-height: 1.05;
    letter-spacing: -0.025em;
    max-width: 16ch;
  }
  .solution-text h2 em{ color: var(--accent); font-style: italic; font-weight: 400; }
  .solution-text p{
    margin-top: 24px;
    font-size: 1.1rem;
    color: var(--ink-2);
    max-width: 50ch;
  }
  .features{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    margin-top: 72px;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
  }
  .feature{
    padding: 32px 24px;
    border-right: 1px solid var(--rule);
  }
  .feature:last-child{ border-right: none; }
  .feature .tag{
    font-family: var(--mono);
    font-size: 0.7rem; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--accent);
    margin-bottom: 16px;
    display: flex; align-items: center; gap: 8px;
  }
  .feature .tag::before{
    content: ''; width: 6px; height: 6px; background: var(--accent); border-radius: 50%;
  }
  .feature h4{
    font-size: 1.35rem; line-height: 1.2; margin-bottom: 10px;
  }
  .feature p{
    color: var(--ink-3); font-size: 0.93rem;
  }

  /* ── HOW IT WORKS ────────────────────────────── */
  .how{ background: var(--bg-2); }
  .steps{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
    border-top: 1px solid var(--rule);
  }
  .step{
    padding: 28px 20px 32px 20px;
    border-right: 1px solid var(--rule);
    position: relative;
  }
  .step:last-child{ border-right: none; }
  .step .nbig{
    font-family: var(--serif);
    font-size: 3.5rem; line-height: 1; font-weight: 300;
    color: var(--ink); letter-spacing: -0.03em;
    margin-bottom: 28px;
    display: flex; align-items: baseline; gap: 10px;
  }
  .step .nbig em{ font-style: italic; color: var(--accent); }
  .step .nbig small{
    font-family: var(--mono); font-size: 0.7rem;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--ink-3); font-weight: 400;
  }
  .step h4{
    font-family: var(--sans);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500;
    margin-bottom: 10px;
    color: var(--ink);
  }
  .step p{
    font-size: 0.92rem; color: var(--ink-3);
  }

  /* ── STORY (MARIA) ───────────────────────────── */
  .story{
    background: var(--ink);
    color: var(--bg);
    border-top: 1px solid transparent;
  }
  .story .section-head .num{ color: rgba(245,239,230,0.5); }
  .story .section-title{ color: var(--bg); }
  .story-grid{
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 64px;
    align-items: start;
  }
  .story-side{
    border: 1px solid rgba(245,239,230,0.18);
    padding: 32px;
    aspect-ratio: 4/5;
    display: flex; flex-direction: column; justify-content: space-between;
    background:
      repeating-linear-gradient(135deg, transparent 0 12px, rgba(245,239,230,0.035) 12px 13px),
      rgba(245,239,230,0.02);
    font-family: var(--mono);
  }
  .story-side .hd{
    font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase;
    color: rgba(245,239,230,0.6);
  }
  .story-side .nm{
    font-family: var(--serif); font-style: italic;
    font-size: 2.6rem; line-height: 1; color: var(--bg);
    letter-spacing: -0.02em; font-weight: 300;
  }
  .story-side .meta{
    font-size: 0.78rem;
    color: rgba(245,239,230,0.75);
    line-height: 1.6;
  }
  .story-side .meta div{ margin-bottom: 6px; }
  .story-side .meta span{ color: rgba(245,239,230,0.5); letter-spacing: 0.1em; }
  .timeline{
    position: relative;
    padding-left: 32px;
  }
  .timeline::before{
    content: ''; position: absolute; left: 7px; top: 12px; bottom: 12px;
    width: 1px; background: rgba(245,239,230,0.2);
  }
  .tl-item{
    position: relative;
    padding: 16px 0 28px;
    border-bottom: 1px solid rgba(245,239,230,0.1);
  }
  .tl-item:last-child{ border-bottom: none; padding-bottom: 0; }
  .tl-item::before{
    content: ''; position: absolute;
    left: -32px; top: 22px;
    width: 15px; height: 15px;
    border-radius: 50%;
    background: var(--ink);
    border: 2px solid var(--accent);
  }
  .tl-item .time{
    font-family: var(--mono); font-size: 0.72rem;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 6px;
  }
  .tl-item p{
    font-size: 1.02rem; color: rgba(245,239,230,0.9); line-height: 1.5;
  }
  .tl-item p strong{ color: var(--bg); font-weight: 500; }
  .story-outcome{
    margin-top: 48px;
    padding: 28px 32px;
    border: 1px solid rgba(245,239,230,0.18);
    border-left: 3px solid var(--accent);
    font-family: var(--serif);
    font-size: 1.4rem;
    line-height: 1.4;
    font-style: italic;
    color: var(--bg);
    font-weight: 300;
    grid-column: 1 / -1;
  }

  /* ── COMPARE TABLE ───────────────────────────── */
  .compare{ background: var(--bg); }
  .ctable{
    width: 100%;
    border-collapse: collapse;
    margin-top: 32px;
    font-family: var(--sans);
  }
  .ctable th, .ctable td{
    text-align: left;
    padding: 18px 20px;
    border-bottom: 1px solid var(--rule);
    vertical-align: top;
  }
  .ctable th{
    font-family: var(--mono); font-size: 0.72rem;
    letter-spacing: 0.14em; text-transform: uppercase;
    font-weight: 500; color: var(--ink-3);
    border-bottom: 1px solid var(--rule-strong);
  }
  .ctable td.row-lbl{
    font-size: 0.95rem; color: var(--ink-2);
    width: 28%;
  }
  .ctable td.them{
    color: var(--ink-3); font-size: 1rem;
  }
  .ctable td.us{
    font-family: var(--serif); font-size: 1.25rem;
    color: var(--accent); font-style: italic;
    font-weight: 400;
  }
  .ctable tr.total td{
    padding-top: 28px; padding-bottom: 28px;
    border-bottom: none;
  }
  .ctable tr.total td.us{
    font-size: 1.8rem;
    color: var(--accent);
  }
  .ctable tr.total td.them{
    font-size: 1.1rem;
    color: var(--ink-2);
    text-decoration: line-through;
    text-decoration-color: rgba(28,20,13,0.25);
  }
  .ctable th.us-th{ color: var(--accent); }

  /* ── PRICING ─────────────────────────────────── */
  .pricing{ background: var(--bg-2); }
  .price-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 32px;
  }
  .plan{
    background: var(--bg);
    border: 1px solid var(--rule);
    padding: 40px 36px;
    position: relative;
  }
  .plan.popular{
    background: var(--ink);
    color: var(--bg);
    border-color: var(--ink);
  }
  .plan .tagrow{
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 32px;
  }
  .plan .pname{
    font-family: var(--mono); font-size: 0.78rem;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--ink-3);
  }
  .plan.popular .pname{ color: rgba(245,239,230,0.6); }
  .plan .badge{
    font-family: var(--mono); font-size: 0.7rem;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 5px 10px; border-radius: 999px;
    background: var(--accent); color: var(--bg);
  }
  .plan .pp{
    font-family: var(--serif); font-size: 5rem;
    line-height: 1; font-weight: 300; letter-spacing: -0.04em;
    display: flex; align-items: baseline; gap: 8px;
  }
  .plan .pp em{ font-style: italic; color: var(--accent); font-weight: 300; }
  .plan .pp .per{
    font-family: var(--sans); font-size: 1rem;
    color: var(--ink-3); font-style: normal;
  }
  .plan.popular .pp .per{ color: rgba(245,239,230,0.6); }
  .plan .pdesc{
    margin-top: 16px;
    font-size: 1rem;
    color: var(--ink-2);
    max-width: 32ch;
  }
  .plan.popular .pdesc{ color: rgba(245,239,230,0.8); }
  .plan ul{
    list-style: none; padding: 0; margin: 32px 0 0 0;
    display: grid; gap: 12px;
  }
  .plan li{
    font-size: 0.95rem;
    display: flex; gap: 12px; align-items: baseline;
    color: var(--ink-2);
  }
  .plan.popular li{ color: rgba(245,239,230,0.9); }
  .plan li::before{
    content: '+';
    color: var(--accent);
    font-family: var(--mono);
    font-size: 0.9rem;
  }
  .price-note{
    margin-top: 24px;
    font-family: var(--serif); font-style: italic;
    color: var(--ink-3); font-size: 1.05rem;
    text-align: center;
  }

  /* ── BEYOND SECURITY ─────────────────────────── */
  .beyond{
    background: var(--bg);
    border-top: 1px solid var(--rule);
  }
  .beyond-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    margin-top: 56px;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
  }
  .bcard{
    padding: 40px 32px;
    border-right: 1px solid var(--rule);
  }
  .bcard:last-child{ border-right: none; }
  .bcard .ix{
    font-family: var(--serif);
    font-size: 2.4rem; line-height: 1; font-weight: 300;
    font-style: italic;
    color: var(--accent);
    margin-bottom: 24px;
  }
  .bcard h4{
    font-size: 1.45rem; line-height: 1.2;
    margin-bottom: 14px;
  }
  .bcard p{
    color: var(--ink-3); font-size: 0.98rem;
  }

  /* ── EMOTIONAL PULL ──────────────────────────── */
  .pull{
    background: var(--bg-3);
    padding: 140px 32px;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
  }
  .pull-text{
    max-width: 1000px; margin: 0 auto;
    font-family: var(--serif);
    font-size: clamp(2.2rem, 4.5vw, 4rem);
    line-height: 1.1;
    letter-spacing: -0.025em;
    font-weight: 300;
    text-wrap: balance;
  }
  .pull-text em{ color: var(--accent); font-style: italic; }
  .pull-attr{
    margin-top: 48px;
    font-family: var(--mono); font-size: 0.78rem;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--ink-3);
  }

  /* ── B2B SECTION ─────────────────────────────── */
  .b2b{
    background: var(--b2b-bg);
    color: var(--b2b-ink);
    padding: 120px 32px 96px;
  }
  .b2b .eyebrow{ color: var(--b2b-ink-2); }
  .b2b .eyebrow .dot{ background: var(--b2b-copper); }
  .b2b .section-head .num{ color: var(--b2b-ink-2); }

  .b2b-header{
    max-width: 1240px; margin: 0 auto;
    display: grid; grid-template-columns: 220px 1fr; gap: 48px;
    align-items: end;
    padding-bottom: 56px;
    border-bottom: 1px solid var(--b2b-rule);
  }
  .b2b-header h2{
    font-size: clamp(2.6rem, 5.5vw, 4.6rem);
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--b2b-ink);
    font-weight: 300;
  }
  .b2b-header h2 em{
    font-style: italic; font-weight: 300;
    color: var(--b2b-copper);
  }
  .b2b-header h2 .mint{ color: var(--b2b-mint); font-style: italic; }
  .b2b-header p{
    margin-top: 20px; max-width: 60ch;
    color: var(--b2b-ink-2); font-size: 1.1rem;
  }

  .vertical{
    max-width: 1240px; margin: 0 auto;
    padding: 80px 0;
    border-bottom: 1px solid var(--b2b-rule);
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 48px;
    align-items: start;
  }
  .vertical:last-of-type{ border-bottom: none; padding-bottom: 24px; }

  .vertical .vlabel{
    display: flex; flex-direction: column; gap: 16px;
    position: sticky; top: 90px;
  }
  .vertical .vnum{
    font-family: var(--serif); font-size: 5rem; line-height: 0.9;
    font-weight: 300; letter-spacing: -0.04em;
    font-style: italic;
  }
  .vertical.real .vnum{ color: var(--b2b-copper); }
  .vertical.logi .vnum{ color: var(--b2b-mint); }
  .vertical .vkicker{
    font-family: var(--mono); font-size: 0.72rem;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--b2b-ink-2);
  }
  .vertical h3{
    font-family: var(--serif);
    font-size: clamp(2rem, 3.2vw, 2.8rem);
    line-height: 1.05;
    font-weight: 300;
    color: var(--b2b-ink);
    margin-bottom: 28px;
    max-width: 22ch;
  }
  .vertical.real h3 em{ color: var(--b2b-copper); font-style: italic; }
  .vertical.logi h3 em{ color: var(--b2b-mint); font-style: italic; }

  .v-cols{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-top: 24px;
    border-top: 1px solid var(--b2b-rule);
    border-bottom: 1px solid var(--b2b-rule);
  }
  .v-cell{
    padding: 24px 24px 28px 0;
    padding-left: 24px;
    border-right: 1px solid var(--b2b-rule);
  }
  .v-cell:last-child{ border-right: none; }
  .v-cell .ck{
    font-family: var(--mono); font-size: 0.7rem;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--b2b-ink-2);
    margin-bottom: 12px;
  }
  .vertical.real .v-cell .ck{ color: var(--b2b-copper); }
  .vertical.logi .v-cell .ck{ color: var(--b2b-mint); }
  .v-cell p{
    color: var(--b2b-ink-2); font-size: 0.98rem; line-height: 1.55;
  }

  .v-numbers{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    margin-top: 32px;
    border-bottom: 1px solid var(--b2b-rule);
  }
  .vn{
    padding: 24px 24px 28px 0;
    padding-left: 24px;
    border-right: 1px solid var(--b2b-rule);
  }
  .vn:last-child{ border-right: none; }
  .vn .vk{
    font-family: var(--mono); font-size: 0.7rem;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--b2b-ink-2);
    margin-bottom: 8px;
  }
  .vn .vv{
    font-family: var(--serif);
    font-size: 1.5rem; line-height: 1.15;
    color: var(--b2b-ink);
    font-weight: 300;
  }
  .vertical.real .vn .vv strong{ color: var(--b2b-copper); font-style: italic; font-weight: 300; }
  .vertical.logi .vn .vv strong{ color: var(--b2b-mint); font-style: italic; font-weight: 300; }

  .v-potential{
    margin-top: 36px;
    padding: 24px 28px;
    border: 1px solid var(--b2b-rule);
    border-left-width: 3px;
    display: flex; justify-content: space-between; align-items: baseline;
    gap: 24px; flex-wrap: wrap;
  }
  .vertical.real .v-potential{ border-left-color: var(--b2b-copper); }
  .vertical.logi .v-potential{ border-left-color: var(--b2b-mint); }
  .v-potential .pk{
    font-family: var(--mono); font-size: 0.74rem;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--b2b-ink-2);
  }
  .v-potential .pv{
    font-family: var(--serif); font-style: italic;
    font-size: 2rem; line-height: 1;
    font-weight: 300;
    color: var(--b2b-ink);
    letter-spacing: -0.02em;
  }
  .vertical.real .v-potential .pv{ color: var(--b2b-copper); }
  .vertical.logi .v-potential .pv{ color: var(--b2b-mint); }

  /* ── CTA / FOOTER ───────────────────────────── */
  .cta{
    background: var(--bg);
    padding: 120px 32px;
    text-align: center;
    border-top: 1px solid var(--rule);
  }
  .cta h2{
    font-size: clamp(2.6rem, 5vw, 4.2rem);
    line-height: 1.02; letter-spacing: -0.03em;
    font-weight: 300;
    max-width: 22ch; margin: 0 auto;
  }
  .cta h2 em{ font-style: italic; color: var(--accent); }
  .cta-row{
    margin-top: 48px;
    display: inline-flex; gap: 12px; flex-wrap: wrap; justify-content: center;
  }
  .cta-meta{
    margin-top: 48px;
    font-family: var(--mono); font-size: 0.74rem;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--ink-3);
  }
  footer{
    border-top: 1px solid var(--rule);
    padding: 32px;
    display: flex; justify-content: space-between; align-items: center;
    font-family: var(--mono); font-size: 0.72rem;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--ink-3);
    flex-wrap: wrap; gap: 16px;
  }
  footer .brand{ font-family: var(--serif); text-transform: none; letter-spacing: -0.02em; font-size: 1rem; color: var(--ink); }

  /* ── RESPONSIVE ─────────────────────────────── */
  @media (max-width: 960px){
    section{ padding: 64px 24px; }
    .hero{ padding: 56px 24px 72px; }
    .hero-inner{ grid-template-columns: 1fr; gap: 40px; }
    .hero-stats{ grid-template-columns: 1fr 1fr; gap: 24px; }
    .section-head{ grid-template-columns: 1fr; gap: 16px; margin-bottom: 32px; }
    .solution-hero{ grid-template-columns: 1fr; gap: 32px; }
    .features{ grid-template-columns: 1fr 1fr; }
    .feature:nth-child(2){ border-right: none; }
    .feature:nth-child(1), .feature:nth-child(2){ border-bottom: 1px solid var(--rule); }
    .steps{ grid-template-columns: 1fr 1fr; }
    .step{ border-bottom: 1px solid var(--rule); }
    .step:nth-child(2n){ border-right: none; }
    .pain-list{ grid-template-columns: 1fr; }
    .pain{ border-right: none; border-bottom: 1px solid var(--rule); }
    .beyond-grid{ grid-template-columns: 1fr; }
    .bcard{ border-right: none; border-bottom: 1px solid var(--rule); }
    .price-grid{ grid-template-columns: 1fr; }
    .story-grid{ grid-template-columns: 1fr; gap: 32px; }
    .b2b-header, .vertical{ grid-template-columns: 1fr; }
    .vertical .vlabel{ position: static; flex-direction: row; align-items: baseline; gap: 24px; }
    .v-cols, .v-numbers{ grid-template-columns: 1fr; }
    .v-cell, .vn{ border-right: none; border-bottom: 1px solid var(--b2b-rule); }
    .nav-links{ display: none; }
    .problem-grid{ grid-template-columns: 1fr; }
    .pcard{ border-right: none; border-bottom: 1px solid var(--rule); }
  }
</style>
</head>
<body>

<nav class="nav">
  <div class="nav-inner">
    <div class="brand"><span class="ring">Ring</span> Rage</div>
    <div class="nav-links">
      <a href="#problema">Problema</a>
      <a href="#solucion">Solución</a>
      <a href="#funciona">Cómo funciona</a>
      <a href="#precios">Precios</a>
      <a href="#escalabilidad">Escalabilidad</a>
    </div>
    <a class="btn" href="#cta">Sumar a mi familia →</a>
  </div>
</nav>

<!-- ─────────── HERO ─────────── -->
<header class="hero">
  <div class="hero-inner">
    <div>
      <div class="eyebrow hero-eyebrow"><span class="dot"></span>Seguridad para adultos mayores · Córdoba, AR</div>
      <h1>Que nunca tenga&nbsp;que <em>abrir la puerta</em> sin saber quién está del otro lado.</h1>
      <p class="hero-sub">Ring Rage convierte cualquier puerta en un videoportero inteligente con sólo un código QR. La familia ve quién toca y autoriza el acceso <em>antes</em> de que tu mamá, papá o abuela tenga que decidir sola.</p>
      <div class="chips">
        <span class="chip">Sin hardware</span>
        <span class="chip">Sin instalación</span>
        <span class="chip">Sin WiFi en casa</span>
        <span class="chip">Gratis para empezar</span>
      </div>
      <div class="hero-meta">
        <a class="btn" href="#cta">Sumar a mi familia →</a>
        <a class="btn ghost" href="#funciona">Ver cómo funciona</a>
      </div>
    </div>
    <div class="hero-card">
      <span class="media-tag">— Familia recibe video en vivo</span>
      <img class="media" src="img/01-hero-app.jpg" data-rr-img alt="Mano sosteniendo un teléfono que muestra video en vivo de un visitante en la puerta" />
    </div>
  </div>

  <div class="wrap hero-stats">
    <div class="stat"><div class="num"><em>15</em></div><div class="lbl">Estafas a adultos mayores por semana, sólo en Córdoba</div></div>
    <div class="stat"><div class="num">1 <em>de 4</em></div><div class="lbl">Adultos mayores fue víctima de estafa en Argentina</div></div>
    <div class="stat"><div class="num"><em>3</em>h</div><div class="lbl">Es lo que tarda un nuevo caso en suceder en el país</div></div>
    <div class="stat"><div class="num">USD <em>7</em></div><div class="lbl">/mes. Menos que cualquier streaming. Más importante que todos juntos.</div></div>
  </div>
</header>

<!-- ─────────── PROBLEMA ─────────── -->
<section id="problema" class="problem">
  <div class="wrap">
    <div class="section-head">
      <div>
        <div class="num">01 — El problema</div>
      </div>
      <div>
        <h2 class="section-title">La mayoría abre <em>porque no sabe</em><br/>quién está del otro lado.</h2>
        <p class="section-lede">La inseguridad sobre adultos mayores no es un problema de cerraduras. Es un problema de información: tomar una decisión crítica, solos, sin contexto, en segundos. Y casi siempre con alguien del otro lado entrenado para mentir.</p>
      </div>
    </div>

    <div class="problem-grid">
      <div class="pcard">
        <div class="big"><em>15</em> estafas / semana</div>
        <div class="text">A adultos mayores, solo en Córdoba. Cuentos del tío, falsos gasistas, falsos empleados de la luz, falsos enfermeros.</div>
        <div class="src">Fuente — Policía de Córdoba</div>
      </div>
      <div class="pcard">
        <div class="big">1 <em>de cada 4</em></div>
        <div class="text">Adultos mayores en Argentina fue víctima de algún tipo de estafa. La mayoría nunca lo denuncia por vergüenza.</div>
        <div class="src">Fuente — Defensoría de la Tercera Edad</div>
      </div>
    </div>

    <div class="pain-list">
      <div class="pain">
        <div class="n">— Dolor 01</div>
        <h4>Decide solo, en segundos</h4>
        <p>El adulto mayor enfrenta a un desconocido sin contexto, sin red, sin tiempo. La presión emocional es enorme.</p>
      </div>
      <div class="pain">
        <div class="n">— Dolor 02</div>
        <h4>Ring/Nest no llegan</h4>
        <p>USD 150–250 + WiFi obligatorio + electricista + obra. En edificios, prohibitivo. Para muchas familias, inviable.</p>
      </div>
      <div class="pain">
        <div class="n">— Dolor 03</div>
        <h4>La familia llega tarde</h4>
        <p>Los hijos no pueden estar ahí en el momento exacto. Se enteran después, cuando el daño ya está hecho.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─────────── SOLUCIÓN ─────────── -->
<section id="solucion" class="solution">
  <div class="wrap">
    <div class="section-head">
      <div><div class="num">02 — La solución</div></div>
      <div></div>
    </div>
    <div class="solution-hero">
      <div class="solution-text">
        <h2>Un <em>QR en la puerta</em> que pone a toda la familia del lado del adulto mayor.</h2>
        <p>El visitante escanea con su propio celular. Mario, un asistente conversacional, le explica al adulto mayor en lenguaje simple qué está pasando. La familia recibe video en vivo y decide junto a él. Nunca decide solo.</p>
        <div class="hero-meta">
          <a class="btn" href="#funciona">Ver el flujo paso a paso →</a>
        </div>
      </div>
      <div class="hero-card" style="aspect-ratio: 4/3;">
        <span class="media-tag">— QR pegado en una puerta real</span>
        <img class="media" src="img/02-qr-puerta.jpg" alt="Sticker QR de Ring Rage pegado en una puerta de departamento en Córdoba" data-rr-img style="object-position: 50% center;" />
      </div>
    </div>

    <div class="features">
      <div class="feature">
        <div class="tag">Costo cero</div>
        <h4>Gratis para 1 adulto + 1 contacto.</h4>
        <p>Sin hardware, sin instalación. Sólo imprimir el QR y pegarlo.</p>
      </div>
      <div class="feature">
        <div class="tag">Sin WiFi</div>
        <h4>Usa el 4G del visitante.</h4>
        <p>Funciona aunque no haya internet en casa. No depende de tu router.</p>
      </div>
      <div class="feature">
        <div class="tag">Mario · IA</div>
        <h4>Acompaña al adulto mayor.</h4>
        <p>Asistente conversacional que explica quién toca y recomienda qué hacer.</p>
      </div>
      <div class="feature">
        <div class="tag">Acompañamiento</div>
        <h4>La familia, presente.</h4>
        <p>Hasta 5 familiares ven y deciden juntos. Estés donde estés.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─────────── HOW IT WORKS ─────────── -->
<section id="funciona" class="how">
  <div class="wrap">
    <div class="section-head">
      <div><div class="num">03 — Cómo funciona</div></div>
      <div>
        <h2 class="section-title">Cinco pasos. <em>Ninguno</em> requiere taladro.</h2>
      </div>
    </div>

    <div class="steps">
      <div class="step">
        <div class="nbig"><em>01</em><small>· 10s</small></div>
        <h4>Pegar QR</h4>
        <p>La familia imprime y pega el QR en la puerta. Sin obra, sin electricista.</p>
      </div>
      <div class="step">
        <div class="nbig"><em>02</em><small>· 2s</small></div>
        <h4>Visitante escanea</h4>
        <p>Quien toca abre la cámara de su propio celular y escanea el QR.</p>
      </div>
      <div class="step">
        <div class="nbig"><em>03</em><small>· IA</small></div>
        <h4>Mario asiste</h4>
        <p>Si el contacto no responde, Mario le explica al adulto mayor qué está pasando.</p>
      </div>
      <div class="step">
        <div class="nbig"><em>04</em><small>· push</small></div>
        <h4>Notifica familia</h4>
        <p>Familiares reciben push con video en vivo del visitante. Pueden hablarle.</p>
      </div>
      <div class="step">
        <div class="nbig"><em>05</em><small>· juntos</small></div>
        <h4>Decisión conjunta</h4>
        <p>La familia y el adulto mayor deciden si es seguro abrir. Nunca solo.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─────────── MARIO IA ─────────── -->
<section class="mario-sec">
  <div class="wrap">
    <div class="section-head">
      <div><div class="num">— Bonus · Mario IA</div></div>
      <div>
        <h2 class="section-title">Cuando la familia no responde,<br/><em>Mario habla con tu mamá</em>.</h2>
      </div>
    </div>

    <div class="mario-grid">
      <div class="mario-text">
        <p class="lede2">Mario es el asistente conversacional integrado a Ring Rage. Le explica al adulto mayor qué está pasando en palabras simples, le dice quién está mirando del lado de la familia, y le recomienda qué hacer si la situación se complica.</p>
        <ul class="mlist">
          <li><strong>Voz cálida y lenguaje claro.</strong> Sin tecnicismos, sin presión, sin urgencias falsas.</li>
          <li><strong>Explica quién está del otro lado</strong> en base a lo que dijo el visitante y lo que ve la familia.</li>
          <li><strong>Conecta con la familia</strong> con un solo botón grande. Sin marcar números.</li>
          <li><strong>Escala a emergencias</strong> y al 911 si la situación lo requiere.</li>
        </ul>
      </div>
      <div class="mario-phone">
        <img src="img/04-mario-chat.jpg" alt="Pantalla de la app mostrando a Mario explicándole a María quién toca la puerta" data-rr-img />
      </div>
    </div>
  </div>
</section>

<!-- ─────────── STORY ─────────── -->
<section class="story">
  <div class="wrap">
    <div class="section-head">
      <div><div class="num">04 — Caso real</div></div>
      <div>
        <h2 class="section-title">María, 73 años, Córdoba.<br/>Una tarde cualquiera.</h2>
      </div>
    </div>

    <div class="story-grid">
      <div class="story-side" style="display:block; overflow: hidden;">
        <div class="story-portrait">
          <img src="img/03-maria.jpg" alt="Retrato de María en su living, en Córdoba" data-rr-img />
        </div>
        <div class="hd">SUJETO · 01 — recreación con modelo</div>
        <div class="nm">María, <em style="font-size: 0.6em; color: var(--accent);">73</em></div>
        <div class="meta" style="margin-top: 20px;">
          <div><span>VIVE ·</span> Sola, depto en B° Centro, Córdoba</div>
          <div><span>HIJO ·</span> Martín — oficina en Bs. As.</div>
          <div><span>CONTACTO ·</span> 1 (plan gratuito)</div>
        </div>
      </div>

      <div class="timeline">
        <div class="tl-item">
          <div class="time">— 16:42 · timbre</div>
          <p>Un hombre con uniforme de gas toca la puerta. Dice que hay una <strong>fuga en el edificio</strong> y necesita pasar a revisar la cocina.</p>
        </div>
        <div class="tl-item">
          <div class="time">— 16:43 · qr</div>
          <p>María <strong>no abre</strong>. Le dice por el portero que escanee el QR pegado en la puerta. El hombre lo escanea.</p>
        </div>
        <div class="tl-item">
          <div class="time">— 16:43 · mario</div>
          <p>Mario le habla a María: <strong>"Un gasista quiere entrar a tu casa. Tu hijo Martín ya está viendo quién es. Esperá con la puerta cerrada."</strong></p>
        </div>
        <div class="tl-item">
          <div class="time">— 16:44 · martín</div>
          <p>Martín recibe la notificación en su oficina. Ve el video en vivo, <strong>habla con el gasista</strong>, le pregunta la dirección y la orden de trabajo.</p>
        </div>
        <div class="tl-item">
          <div class="time">— 16:45 · resuelto</div>
          <p>El gasista se equivocó de edificio. <strong>María nunca abrió. Nunca decidió sola.</strong> Sigue tomando mate.</p>
        </div>
      </div>

      <div class="story-outcome">
        "María se siente segura. Martín está tranquilo. Sin hardware. Sin instalación. Sin un solo cable instalado en la casa."
      </div>
    </div>
  </div>
</section>

<!-- ─────────── COMPARE ─────────── -->
<section class="compare">
  <div class="wrap">
    <div class="section-head">
      <div><div class="num">05 — Ring Rage vs competencia</div></div>
      <div>
        <h2 class="section-title">Misma tranquilidad.<br/><em>Cero</em> obras. Cero hardware.</h2>
      </div>
    </div>

    <table class="ctable">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Ring · Nest</th>
          <th class="us-th">Ring Rage</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="row-lbl">Costo inicial</td><td class="them">USD 150–250</td><td class="us">USD 0</td></tr>
        <tr><td class="row-lbl">Instalación</td><td class="them">Electricista + taladro</td><td class="us">Pegar QR · 10 s</td></tr>
        <tr><td class="row-lbl">Requiere WiFi en casa</td><td class="them">Sí — obligatorio</td><td class="us">No</td></tr>
        <tr><td class="row-lbl">Plan básico mensual</td><td class="them">USD 3–10 / mes</td><td class="us">Gratis</td></tr>
        <tr><td class="row-lbl">Plan familiar (hasta 5)</td><td class="them">USD 10+ / mes</td><td class="us">USD 7 / mes</td></tr>
        <tr><td class="row-lbl">Funciona en edificios</td><td class="them">Imposible (requiere obra)</td><td class="us">Sí</td></tr>
        <tr class="total"><td class="row-lbl">Total año 1, plan básico</td><td class="them">USD 236 – 460</td><td class="us">USD 0</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ─────────── PRICING ─────────── -->
<section id="precios" class="pricing">
  <div class="wrap">
    <div class="section-head">
      <div><div class="num">06 — Precios</div></div>
      <div>
        <h2 class="section-title">Menos que <em>Netflix</em>.<br/>Más importante que cualquier streaming.</h2>
      </div>
    </div>

    <div class="price-grid">
      <div class="plan">
        <div class="tagrow">
          <span class="pname">Plan básico</span>
        </div>
        <div class="pp">Gratis <span class="per">/ para siempre</span></div>
        <p class="pdesc">1 adulto mayor + 1 contacto familiar. Para empezar a cuidarlos hoy, sin pagar un centavo.</p>
        <ul>
          <li>1 adulto mayor protegido</li>
          <li>1 contacto familiar</li>
          <li>Mario IA incluido</li>
          <li>Notificaciones por push</li>
          <li>Sin tarjeta de crédito</li>
        </ul>
      </div>

      <div class="plan popular">
        <div class="tagrow">
          <span class="pname">Plan familiar</span>
          <span class="badge">+ Popular</span>
        </div>
        <div class="pp">USD <em>7</em><span class="per">/ mes</span></div>
        <p class="pdesc">Hasta 3 contactos familiares conectados, estén donde estén. Buenos Aires, Córdoba o el exterior.</p>
        <ul>
          <li>Hasta 3 contactos familiares</li>
          <li>Mario IA prioritario</li>
          <li>Video en vivo + grabación</li>
          <li>Botón de emergencia / 911</li>
          <li>Soporte 24/7</li>
        </ul>
      </div>
    </div>

    <div class="price-note">"Menos que Netflix. Más importante que cualquier streaming."</div>
  </div>
</section>

<!-- ─────────── BEYOND ─────────── -->
<section class="beyond">
  <div class="wrap">
    <div class="section-head">
      <div><div class="num">07 — Más que seguridad</div></div>
      <div>
        <h2 class="section-title">Acompañamiento.<br/>El <em>problema real</em> no es solo la estafa. Es la soledad en el momento crítico.</h2>
      </div>
    </div>

    <div class="beyond-grid">
      <div class="bcard">
        <div class="ix">i.</div>
        <h4>Nunca decide solo</h4>
        <p>La familia está presente en cada decisión. El adulto mayor no enfrenta situaciones de riesgo sin apoyo, nunca más.</p>
      </div>
      <div class="bcard">
        <div class="ix">ii.</div>
        <h4>Mario acompaña</h4>
        <p>Un asistente conversacional que explica qué está pasando en lenguaje simple y tranquilizador. Sin tecnicismos.</p>
      </div>
      <div class="bcard">
        <div class="ix">iii.</div>
        <h4>Conexión familiar</h4>
        <p>Hasta 5 familiares pueden estar presentes. No importa la distancia: Buenos Aires, Córdoba o el exterior.</p>
      </div>
    </div>

    <div class="beyond-grid" style="margin-top: 0; border-top: none;">
      <div class="bcard" style="grid-column: span 2;">
        <div class="ix">iv.</div>
        <h4>Integración con emergencias y policía</h4>
        <p>Botón directo para llamar al 911 o a servicios de emergencia, con video y dirección ya cargados. Si la situación escala, la respuesta también.</p>
      </div>
      <div class="bcard">
        <div class="ix">v.</div>
        <h4>Campaña de concientización</h4>
        <p>Videos explicativos, charlas comunitarias y canal en YouTube, TikTok e Instagram para enseñar a reconocer las nuevas modalidades de estafas.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─────────── PULL QUOTE ─────────── -->
<section class="pull">
  <div class="pull-text">
    <em>Cada 3 horas</em>, un adulto mayor es estafado en Argentina.<br/>
    La mayoría abre porque no sabe quién está del otro lado.<br/>
    Ring Rage existe para que tu familia <em>nunca tenga que abrir sin saber</em>.
  </div>
  <div class="pull-attr">— Manifiesto · Ring Rage 2026</div>
</section>

<!-- ─────────── B2B (DIFFERENT PALETTE) ─────────── -->
<section id="escalabilidad" class="b2b">
  <div class="b2b-header">
    <div>
      <div class="eyebrow"><span class="dot"></span>Otra arista · B2B</div>
      <div class="num mono" style="margin-top: 16px;">08 — Escalabilidad</div>
    </div>
    <div>
      <h2>La misma tecnología, fuera de casa: <em>desarrollos inmobiliarios</em> y <span class="mint">logística de última milla</span>.</h2>
      <p>El mismo QR — sin obra, sin hardware, sin WiFi — resuelve dos categorías enteras de fricción para empresas. Mismo motor. Modelos B2B distintos. Identificados con su propio color para que no se mezclen con el producto B2C.</p>
    </div>
  </div>

  <!-- ── REAL ESTATE ── -->
  <div class="vertical real">
    <div class="vlabel">
      <div class="vnum">i.</div>
      <div class="vkicker">— Vertical 01 · Inmobiliario</div>
    </div>
    <div>
      <h3>Desarrollos privados sin <em>USD 25.000 en porteros</em> instalados.</h3>

      <div class="b2b-media">
        <span class="media-tag">— Barrio privado · Sierras de Córdoba</span>
        <img src="img/05-inmobiliario.jpg" alt="Vista aérea de un barrio privado al atardecer" data-rr-img />
      </div>

      <div class="v-cols">
        <div class="v-cell">
          <div class="ck">— Problema</div>
          <p>Constructoras de barrios privados, edificios y countries gastan <strong>USD 500 – 2.000</strong> por unidad en porteros eléctricos tradicionales. Obra civil costosa, cableado, mantenimiento, fallas.</p>
        </div>
        <div class="v-cell">
          <div class="ck">— Solución Ring Rage</div>
          <p>Un QR por puerta o portón. Sistema completo sin obra. <strong>50 casas = 50 QRs</strong>, en lugar de USD 25.000 – 100.000 en hardware. Se integra como amenity tecnológico del proyecto.</p>
        </div>
      </div>

      <div class="v-numbers">
        <div class="vn">
          <div class="vk">— Target</div>
          <div class="vv">Constructoras tipo <strong>Edisur</strong>, Manantiales, etc.</div>
        </div>
        <div class="vn">
          <div class="vk">— Pricing</div>
          <div class="vv"><strong>USD 5 – 10</strong> / unidad / mes</div>
        </div>
        <div class="vn">
          <div class="vk">— Ejemplo</div>
          <div class="vv">100 casas = <strong>USD 500 – 1.000</strong>/mes recurrente</div>
        </div>
      </div>

      <div class="v-potential">
        <div class="pk">— Potencial · ARR</div>
        <div class="pv">USD 60K – 120K</div>
        <div class="pk">5 – 10 proyectos grandes</div>
      </div>
    </div>
  </div>

  <!-- ── LOGISTICS ── -->
  <div class="vertical logi">
    <div class="vlabel">
      <div class="vnum">ii.</div>
      <div class="vkicker">— Vertical 02 · Logística</div>
    </div>
    <div>
      <h3>Cada entrega, con <em>video-evidencia</em> y autorización en tiempo real.</h3>

      <div class="b2b-media">
        <span class="media-tag">— Repartidor escaneando QR en puerta de entrega</span>
        <img src="img/06-logistica.jpg" alt="Repartidor de logística escaneando un QR en una puerta de departamento" data-rr-img />
      </div>

      <div class="v-cols">
        <div class="v-cell">
          <div class="ck">— Problema</div>
          <p>El repartidor llega y nadie atiende → el paquete vuelve. No hay registro visual del intento. Y aparece el fraude clásico: <strong>"nunca vino el repartidor"</strong>.</p>
        </div>
        <div class="v-cell">
          <div class="ck">— Solución Ring Rage</div>
          <p>QR en cada puerta de entrega. El repartidor escanea → notifica al destinatario en tiempo real. <strong>Video del intento</strong>. El destinatario autoriza dejar en puerta o reprogramar.</p>
        </div>
      </div>

      <div class="v-numbers">
        <div class="vn">
          <div class="vk">— Target</div>
          <div class="vv"><strong>Andreani</strong>, Correo Argentino, OCA, Mercado Libre</div>
        </div>
        <div class="vn">
          <div class="vk">— Modelo</div>
          <div class="vv"><strong>Licencia</strong> por empresa, integrada al tracking existente</div>
        </div>
        <div class="vn">
          <div class="vk">— Pricing</div>
          <div class="vv"><strong>USD 10K – 50K</strong>/mes por empresa grande</div>
        </div>
      </div>

      <div class="v-potential">
        <div class="pk">— Potencial · ARR</div>
        <div class="pv">USD 300K – 600K</div>
        <div class="pk">5 clientes enterprise</div>
      </div>
    </div>
  </div>
</section>

<!-- ─────────── CTA ─────────── -->
<section id="cta" class="cta">
  <h2>Que tu familia <em>nunca</em> tenga que abrir sin saber.</h2>
  <div class="cta-row">
    <a class="btn" href="#">Sumar a mi familia — Gratis</a>
    <a class="btn ghost" href="#">Hablar con el equipo</a>
  </div>
  <div class="cta-meta">www.ringrage.com  ·  Agustín Balegno · Founder  ·  Córdoba, AR</div>
</section>

<footer>
  <div class="brand"><span style="color: var(--accent); font-style: italic;">Ring</span> Rage</div>
  <div>© 2026 — Ring Rage. Seguridad simple para tu familia.</div>
  <div>Pitch deck v1 · Mayo 2026</div>
</footer>

<script>
// Append preview-server token to image URLs if present, so they pass auth.
(function() {
  const t = new URLSearchParams(location.search).get('t');
  if (!t) return;
  document.querySelectorAll('img[data-rr-img]').forEach(img => {
    const s = img.getAttribute('src');
    if (s && !s.includes('?')) img.src = s + '?t=' + encodeURIComponent(t);
  });
})();
</script>

</body>
</html>
