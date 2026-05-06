import IntroBrand from "@/components/intro-brand";

export default function Home() {
  return (
    <main>
      <section id="home" className="home-hero">
        <header className="home-header">
          <div className="home-location">São Paulo</div>

          <div className="home-logo">AMATO LIMA</div>

          <button className="home-menu" aria-label="Abrir menu">
            <span />
            <span />
          </button>
        </header>

        <div className="hero-composition">
          <div className="hero-line hero-line-top">
            <span>A</span>
            <span>Arte</span>
          </div>

          <div className="hero-line hero-line-bottom">
            <span>De</span>
            <span className="hero-video-target" />
            <span>Habitar</span>
          </div>
        </div>
      </section>

      <IntroBrand />
    </main>
  );
}
