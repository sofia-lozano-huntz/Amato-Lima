import IntroBrand from "@/components/intro-brand";

export default function Home() {
  return (
    <main>
      <IntroBrand />

      <section className="home-hero">
        <header className="home-header">
          <div className="home-location">São Paulo</div>

          <div className="home-logo">AMATO LIMA</div>

          <div className="home-menu">
            <span />
            <span />
          </div>
        </header>

        <h1 className="hero-title">
          <span>A arte de</span>

          <span className="hero-video">
            <video
              src="/videos/amato-intro.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </span>

          <span>habitar</span>
        </h1>
      </section>
    </main>
  );
}
