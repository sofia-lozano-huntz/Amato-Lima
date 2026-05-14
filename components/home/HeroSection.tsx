"use client";

export default function HomeSection() {
  return (
    <section className="home-hero">
      <img src="/wood.png" alt="" className="home-bg" />

      <div className="home-overlay" />
      <div className="home-center-line" />

      <header className="home-header">
        <button className="home-menu">
          <span />
          MENU
        </button>

        <img src="/logo.png" alt="Amato Lima" className="home-logo" />

        <a href="#contato" className="home-contact">
          CONTATO
        </a>
      </header>

      <div className="home-content">
        <h1>ARTE</h1>

        <p className="home-subtitle">DE HABITAR</p>

        <div className="home-plus">＋</div>

        <p className="home-phrase">
          ATIVOS EXCLUSIVOS.
          <br />
          LEGADO QUE PERMANECE.
        </p>

        <div className="home-video-frame">
          <video src="/intro.mp4" autoPlay muted loop playsInline />
        </div>

        <a href="#projetos" className="home-explore">
          EXPLORAR
        </a>

        <div className="home-bottom-line" />
        <div className="home-dot" />
      </div>
    </section>
  );
}
