import IntroBrand from "@/components/intro-brand";

export default function Home() {
  return (
    <>
      <IntroBrand />

      <main>
        <section className="hero">
          <div className="hero-wood" />
          <div className="hero-overlay" />

          <header className="hero-nav">
            <span className="hero-location">São Paulo</span>

            <img className="hero-logo" src="/logo.png" alt="Amato Lima" />

            <button className="hero-menu" aria-label="Abrir menu">
              <span />
              <span />
            </button>
          </header>

          <div className="hero-copy">
            <span className="hero-copy-script">Arte</span>
            <span className="hero-copy-main">DE HABITAR</span>
          </div>

          <div className="hero-frame-line" />

          <div className="hero-film">
            <video autoPlay muted loop playsInline preload="auto">
              <source src="/intro.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="hero-scroll">
            <div className="hero-scroll-line" />
          </div>
        </section>
      </main>
    </>
  );
}
