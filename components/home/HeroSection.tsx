export default function HeroSection() {
  return (
    <section className="hero home-reveal">
      <div className="hero-bg">
        <img src="/wood.jpg" alt="" aria-hidden="true" />
      </div>

      <header className="hero-header">
        <button className="hero-menu" aria-label="Menu">
          <span />
          <span />
          <small>Menu</small>
        </button>

        <img src="/logo.png" alt="Amato Lima" className="hero-logo" />

        <a href="#contato" className="hero-contact">
          Contato
        </a>
      </header>

      <div className="hero-line" />

      <div className="hero-content">
        <h1>Arte</h1>
        <p>De Habitar</p>

        <span className="hero-cross">+</span>

        <small>
          Ativos exclusivos.
          <br />
          Legado que permanece.
        </small>

        <div className="hero-card">
          <img src="/porta-tambore.png" alt="Projeto Amato Lima" />
        </div>

        <a href="#sobre" className="hero-explore">
          Explorar
        </a>
      </div>
    </section>
  );
}
