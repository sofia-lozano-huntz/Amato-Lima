export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-bg" />

      <header className="hero-header">

        <span className="hero-location">
          São Paulo
        </span>

        <img
          src="/logo.png"
          alt="Amato Lima"
          className="hero-logo"
        />

        <button className="hero-menu">
          <span />
          <span />
        </button>

      </header>

      <div className="hero-copy">

        <span className="hero-script">
          Arte
        </span>

        <span className="hero-title">
          De Habitar
        </span>

      </div>

      <div className="hero-video-frame" />

      <div className="hero-video">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/intro.mp4"
            type="video/mp4"
          />
        </video>

      </div>

    </section>
  );
}
