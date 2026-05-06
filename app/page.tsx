import IntroBrand from "@/components/intro-brand";

export default function Home() {
  return (
    <main>
      <section id="home" className="home-hero">
        <div className="stone-layer" />
        <div className="stone-shadow" />

        <header className="home-header">
          <div className="home-location">São Paulo</div>

          <img className="home-logo" src="/logo.png" alt="Amato Lima" />

          <button className="home-menu" aria-label="Abrir menu">
            <span />
            <span />
          </button>
        </header>

        <div className="hero-composition">
          <h1 className="hero-title hero-title-top">A Arte</h1>

          <div className="hero-video-target" />

          <h2 className="hero-title hero-title-bottom">De Habitar</h2>
        </div>

        <div className="home-bottom">
          <div className="home-line" />
          <div className="home-arrow" />
        </div>
      </section>

      <IntroBrand />
    </main>
  );
}
