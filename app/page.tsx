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
          <div className="hero-line hero-line-top">A arte</div>

          <div className="hero-line hero-line-bottom">
            <span>de</span>
            <span className="hero-video-target" />
            <span>habitar</span>
          </div>
        </div>
      </section>

      <IntroBrand />
    </main>
  );
}
