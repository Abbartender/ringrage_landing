import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ring Rage — Protegé a quien más querés</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root { --rojo: #E24B4A; --rojo-dark: #b33a39; --negro: #0a0a0f; --gris-oscuro: #111118; --blanco: #f5f3ee; --blanco-suave: rgba(245,243,238,0.65); }
        html { scroll-behavior: smooth; }
        body { background: var(--negro); color: var(--blanco); font-family: 'DM Sans', sans-serif; font-weight: 300; overflow-x: hidden; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50; padding: 18px 48px; display: flex; align-items: center; justify-content: space-between; background: linear-gradient(to bottom, rgba(10,10,15,0.98), transparent); backdrop-filter: blur(8px); }
        .nav-brand { display: flex; align-items: center; gap: 12px; }
        .nav-logo-img { width: 36px; height: 36px; border-radius: 8px; }
        .nav-logo-text { font-weight: 500; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; }
        .nav-cta { font-size: 13px; color: #fff; text-decoration: none; background: var(--rojo); padding: 10px 24px; border-radius: 2px; font-weight: 500; transition: background 0.2s; }
        .nav-cta:hover { background: var(--rojo-dark); }
        .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 140px 48px 80px; position: relative; overflow: hidden; }
        .hero-glow { position: absolute; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(226,75,74,0.12) 0%, transparent 70%); top: 20%; right: -100px; pointer-events: none; }
        .hero-logo-big { width: 72px; height: 72px; border-radius: 18px; margin-bottom: 32px; animation: fadeUp 0.7s ease forwards 0.1s; opacity: 0; }
        .hero-eyebrow { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--rojo); margin-bottom: 24px; opacity: 0; animation: fadeUp 0.7s ease forwards 0.2s; }
        h1 { font-family: 'Playfair Display', serif; font-size: clamp(52px, 8vw, 100px); font-weight: 400; line-height: 1.02; letter-spacing: -0.02em; max-width: 820px; opacity: 0; animation: fadeUp 0.8s ease forwards 0.35s; }
        h1 em { font-style: italic; color: var(--rojo); }
        .hero-sub { margin-top: 28px; font-size: 17px; line-height: 1.75; color: var(--blanco-suave); max-width: 500px; opacity: 0; animation: fadeUp 0.8s ease forwards 0.5s; }
        .hero-actions { margin-top: 48px; display: flex; gap: 16px; align-items: center; flex-wrap: wrap; opacity: 0; animation: fadeUp 0.8s ease forwards 0.65s; }
        .btn-primary { display: inline-block; padding: 16px 40px; background: var(--rojo); color: #fff; text-decoration: none; font-size: 14px; font-weight: 500; letter-spacing: 0.05em; border-radius: 2px; transition: background 0.2s, transform 0.15s; }
        .btn-primary:hover { background: var(--rojo-dark); transform: translateY(-1px); }
        .hero-note { font-size: 12px; color: rgba(245,243,238,0.3); letter-spacing: 0.04em; }
        .stats { border-top: 1px solid rgba(245,243,238,0.06); border-bottom: 1px solid rgba(245,243,238,0.06); display: grid; grid-template-columns: repeat(3, 1fr); }
        .stat { padding: 48px; border-right: 1px solid rgba(245,243,238,0.06); }
        .stat:last-child { border-right: none; }
        .stat-num { font-family: 'Playfair Display', serif; font-size: clamp(40px, 5vw, 60px); font-weight: 700; color: var(--rojo); line-height: 1; margin-bottom: 10px; }
        .stat-desc { font-size: 14px; color: var(--blanco-suave); line-height: 1.6; margin-bottom: 14px; }
        .stat-source { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; color: rgba(245,243,238,0.3); text-decoration: none; letter-spacing: 0.08em; text-transform: uppercase; border-bottom: 1px solid rgba(245,243,238,0.12); padding-bottom: 1px; transition: color 0.2s; }
        .stat-source:hover { color: var(--blanco-suave); }
        .stat-source::after { content: '↗'; font-size: 10px; }
        .verdad { padding: 120px 48px; max-width: 960px; }
        .section-tag { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(245,243,238,0.25); margin-bottom: 28px; display: flex; align-items: center; gap: 12px; }
        .section-tag::after { content: ''; flex: 1; height: 1px; background: rgba(245,243,238,0.08); }
        .verdad-texto { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 48px); font-weight: 400; line-height: 1.35; }
        .verdad-texto strong { color: var(--rojo); font-weight: 400; }
        .momentos { padding: 0 48px 120px; }
        .momentos-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid rgba(245,243,238,0.06); gap: 1px; background: rgba(245,243,238,0.06); }
        .momento { background: var(--negro); padding: 48px 40px; position: relative; overflow: hidden; transition: background 0.3s; }
        .momento:hover { background: #0f0f18; }
        .momento-n { font-family: 'Playfair Display', serif; font-size: 100px; font-weight: 700; color: rgba(226,75,74,0.06); position: absolute; top: 8px; right: 20px; line-height: 1; }
        .momento-titulo { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 400; margin-bottom: 16px; line-height: 1.25; }
        .momento-desc { font-size: 14px; color: var(--blanco-suave); line-height: 1.75; }
        .frase { padding: 100px 48px; text-align: center; border-top: 1px solid rgba(245,243,238,0.06); position: relative; }
        .frase::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 50% 100% at 50% 50%, rgba(226,75,74,0.05) 0%, transparent 70%); }
        .frase-logo { width: 48px; height: 48px; border-radius: 12px; margin: 0 auto 32px; display: block; position: relative; }
        .frase-q { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 52px); font-weight: 400; font-style: italic; line-height: 1.25; max-width: 760px; margin: 0 auto 32px; position: relative; }
        .frase-firma { font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(245,243,238,0.25); position: relative; }
        .cta { padding: 120px 48px; background: var(--gris-oscuro, #111118); border-top: 1px solid rgba(245,243,238,0.06); text-align: center; }
        .cta h2 { font-family: 'Playfair Display', serif; font-size: clamp(40px, 6vw, 72px); font-weight: 400; line-height: 1.1; margin-bottom: 20px; }
        .cta-sub { font-size: 16px; color: var(--blanco-suave); max-width: 460px; margin: 0 auto 48px; line-height: 1.7; }
        .cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 18px 44px; background: var(--rojo); color: #fff; text-decoration: none; font-size: 15px; font-weight: 500; letter-spacing: 0.04em; border-radius: 2px; transition: background 0.2s, transform 0.15s; }
        .cta-btn:hover { background: var(--rojo-dark); transform: translateY(-2px); }
        .cta-fine { margin-top: 20px; font-size: 12px; color: rgba(245,243,238,0.2); letter-spacing: 0.08em; }
        footer { padding: 28px 48px; border-top: 1px solid rgba(245,243,238,0.05); display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: rgba(245,243,238,0.18); }
        footer img { width: 24px; height: 24px; border-radius: 6px; opacity: 0.4; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) { nav { padding: 16px 24px; } .hero { padding: 110px 24px 60px; } .stats { grid-template-columns: 1fr; } .stat { border-right: none; border-bottom: 1px solid rgba(245,243,238,0.06); padding: 36px 24px; } .verdad { padding: 80px 24px; } .momentos { padding: 0 24px 80px; } .momentos-grid { grid-template-columns: 1fr; } .frase, .cta { padding: 80px 24px; } footer { padding: 24px; flex-direction: column; gap: 8px; } }
      `}</style>

      <nav>
        <div className="nav-brand">
          <img src="/ringrage-icon-180.png" alt="Ring Rage" className="nav-logo-img" />
          <span className="nav-logo-text">Ring Rage</span>
        </div>
        <a href="mailto:agustinbalegno@hotmail.com?subject=Quiero ver Ring Rage" className="nav-cta">Pedí la demo →</a>
      </nav>

      <section className="hero">
        <div className="hero-glow"></div>
        <img src="/ringrage-icon-180.png" alt="Ring Rage" className="hero-logo-big" />
        <div className="hero-eyebrow">Protección para adultos mayores · Argentina · México</div>
        <h1>El segundo antes<br/>de que <em>todo</em><br/>salga mal.</h1>
        <p className="hero-sub">Cada día, adultos mayores abren la puerta sin saber quién es. Ahí empieza la mayoría de las estafas. La familia no puede estar siempre.</p>
        <div className="hero-actions">
          <a href="mailto:agustinbalegno@hotmail.com?subject=Quiero ver Ring Rage en acción" className="btn-primary">Ver la demo en vivo</a>
          <span className="hero-note">Sin hardware · Sin instalación · Gratis para el residente</span>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <div className="stat-num">$83K</div>
          <div className="stat-desc">pérdida promedio por víctima adulta mayor — un aumento del 43% respecto al año anterior</div>
          <a href="https://www.aarp.org/espanol/dinero/estafas-y-fraudes/info-2025/reporte-fbi-fraudes-2024.html" target="_blank" rel="noreferrer" className="stat-source">FBI · AARP 2024</a>
        </div>
        <div className="stat">
          <div className="stat-num">147K</div>
          <div className="stat-desc">denuncias presentadas por mayores de 60 años — el grupo más afectado de todos</div>
          <a href="https://www.infobae.com/estados-unidos/2025/04/24/los-adultos-mayores-perdieron-usd-48-miles-de-millones-en-2024-por-estafas-segun-informe-del-fbi/" target="_blank" rel="noreferrer" className="stat-source">Infobae · FBI 2024</a>
        </div>
        <div className="stat">
          <div className="stat-num">500M</div>
          <div className="stat-desc">pesos robados a adultos mayores en México en 2024 — y las cifras siguen en aumento</div>
          <a href="https://www.infobae.com/mexico/2025/10/02/de-llamadas-falsas-a-fraudes-familiares-asi-operan-las-estafas-contra-adultos-mayores/" target="_blank" rel="noreferrer" className="stat-source">Condusef · Infobae 2024</a>
        </div>
      </section>

      <section className="verdad">
        <div className="section-tag">El problema real</div>
        <p className="verdad-texto">
          No es que los adultos mayores sean ingenuos.<br/>
          Es que <strong>están solos en ese momento.</strong><br/>
          Sin información. Sin tiempo.<br/>
          Sin nadie al lado que les diga: <strong>no abras.</strong>
        </p>
      </section>

      <section className="momentos">
        <div className="momentos-grid">
          <div className="momento">
            <div className="momento-n">1</div>
            <div className="momento-titulo">Tocan el timbre</div>
            <div className="momento-desc">Un desconocido en la puerta. Sin aviso previo. Sin identificación. Sin que nadie de la familia sepa que está pasando.</div>
          </div>
          <div className="momento">
            <div className="momento-n">2</div>
            <div className="momento-titulo">La duda</div>
            <div className="momento-desc">¿Abro? ¿Llamo a mi hijo? ¿Y si es urgente? En ese segundo de duda está el mayor riesgo. Y nadie está ahí para ayudar.</div>
          </div>
          <div className="momento">
            <div className="momento-n">3</div>
            <div className="momento-titulo">Ya es tarde</div>
            <div className="momento-desc">La puerta se abre. La familia se entera después. El daño — económico, emocional — ya está hecho.</div>
          </div>
        </div>
      </section>

      <section className="frase">
        <img src="/ringrage-icon-180.png" alt="Ring Rage" className="frase-logo" />
        <p className="frase-q">"Proteger a quienes más queremos no debería depender de estar en el lugar correcto en el momento correcto."</p>
        <div className="frase-firma">Ring Rage · Argentina · México · 2026</div>
      </section>

      <section className="cta">
        <h2>Ring Rage existe<br/>para ese momento.</h2>
        <p className="cta-sub">Sin hardware. Sin instalación. Funcionando esta semana en Argentina y México. Gratis para el adulto mayor, siempre.</p>
        <a href="mailto:agustinbalegno@hotmail.com?subject=Quiero ver Ring Rage" className="cta-btn">Quiero ver la demo en vivo →</a>
        <div className="cta-fine">20 minutos · Demo real · Sin compromiso</div>
      </section>

      <footer>
        <span>© 2026 Ring Rage</span>
        <img src="/ringrage-icon-180.png" alt="Ring Rage" />
        <span>ringrage.vercel.app</span>
      </footer>
    </>
  )
}
