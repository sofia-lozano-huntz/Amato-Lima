export default function Home() {
  return (
    <section className="hero">

      <div className="hero-wood" />
      <div className="hero-overlay" />

      <nav className="hero-nav">

        <span className="hero-location">
          São Paulo
        </span>

        <div className="hero-brand">
          <img src="/logo.png" alt="Amato Lima" />

          <div className="hero-brand-text">
            <span>AMATO LIMA</span>
            <div className="hero-brand-line" />
          </div>
        </div>

        <div className="hero-menu">
          <span />
          <span />
        </div>

      </nav>

      <div className="hero-title">
        <span className="hero-title-arte">
          Arte
        </span>

        <span className="hero-title-de">
          De Habitar
        </span>
      </div>

      <div className="hero-film">
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <div className="hero-scroll-arrow" />
      </div>

    </section>
  );
}
