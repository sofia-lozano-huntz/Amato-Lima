import IntroBrand from "@/components/intro-brand";

export default function Home() {
  return (
    <main>
      <IntroBrand />

      <section id="home" className="home-hero">
        <header className="home-header">
          <div className="home-location">São Paulo</div>

          <div className="home-logo">AMATO LIMA</div>

          <div className="home-menu" aria-label="Abrir menu">
            <span />
            <span />
          </div>
        </header>

        <h1 className="hero-title">
          <span>A arte de</span>
          <span className="hero-video-space" />
          <span>habitar</span>
        </h1>
      </section>
    </main>
  );
}
