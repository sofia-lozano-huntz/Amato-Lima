export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-wash" />

      <header className="hero-header">
        <span className="hero-location">São Paulo</span>

        <img
          src="/logo.png"
          alt="Amato Lima"
          className="hero-logo hero-logo-target"
        />

        <button className="hero-menu" aria-label="Abrir menu">
          <span />
          <span />
        </button>
      </header>

      <div className="hero-title-back">
        <span>A Arte</span>
      </div>

      <div className="hero-video-frame" />

      <div className="hero-video hero-film">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-title-front">
        <span>De Habitar</span>
      </div>

      <div className="hero-enter">
        <p>Entrar</p>
        <span />
        <i />
      </div>
    </section>
  );
}
