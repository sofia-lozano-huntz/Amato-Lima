import Image from "next/image";

export default function Home() {
  return (
    <main className="hero">
      <div className="background" />
      <div className="overlay" />
      <div className="vignette" />
      <div className="centerLine" />

      <header className="header">
        <button className="navButton">
          <span className="hamburger" />
          MENU
        </button>

        <Image
          src="/logo.png"
          alt="Amato Lima"
          width={120}
          height={120}
          className="logo"
          priority
        />

        <button className="navButton">CONTATO</button>
      </header>

      <section className="content">
        <h1>ARTE</h1>
        <h2>DE HABITAR</h2>

        <div className="smallLine" />

        <p>
          ATIVOS EXCLUSIVOS.
          <br />
          LEGADO QUE PERMANECE.
        </p>

        <div className="videoCard">
          <video autoPlay muted loop playsInline>
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="bottomLine" />

        <span className="explorar">EXPLORAR</span>
      </section>
    </main>
  );
}
