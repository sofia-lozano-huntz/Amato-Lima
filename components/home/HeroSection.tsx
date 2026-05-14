export default function HeroSection() {
  return (
    <section className="hero home-reveal">
      <header className="hero-header">
        <span>São Paulo</span>

        <img src="/logo.png" alt="Amato Lima" className="hero-logo" />

        <button className="hero-menu" aria-label="Menu">
          <span />
          <span />
        </button>
      </header>

      <div className="hero-copy">
        <h1>A Arte</h1>
        <p>De Habitar</p>
      </div>
    </section>
  );
}
