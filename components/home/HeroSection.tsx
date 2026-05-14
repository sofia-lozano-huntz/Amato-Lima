export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <header className="hero-header">
        <span className="hero-location metallic-text">São Paulo</span>

        <img src="/logo.png" alt="Amato Lima" className="hero-logo" />

        <button className="hero-menu" aria-label="Abrir menu">
          <span />
          <span />
        </button>
      </header>

      <div className="hero-copy">
        <span className="hero-script metallic-text">Arte</span>
        <span className="hero-title metallic-text">De Habitar</span>
      </div>

      <div className="hero-video-lines">
        <span />
        <span />
      </div>

      <div className="hero-video-frame" />

      <div className="hero-video hero-film">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-enter">
        <span />
        <p>Entrar</p>
        <span />
        <i />
      </div>
    </section>
  );
}
