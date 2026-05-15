import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroBackground" />
      <div className="heroOverlay" />
      <div className="heroVignette" />

      <div className="line lineTop" />
      <div className="line lineLogo" />
      <div className="line lineMiddle" />
      <div className="crossHorizontal" />
      <div className="line lineVideo" />
      <div className="line lineBottom" />
      <div className="lineDot" />

      <header className="heroHeader">
        <button className="heroNavButton">
          <span className="heroHamburger" />
          MENU
        </button>

        <Image
          src="/logo.png"
          alt="Amato Lima"
          width={120}
          height={120}
          className="heroLogo"
          priority
        />

        <button className="heroNavButton">CONTATO</button>
      </header>

      <div className="heroContent">
        <div className="heroTitle">
          <h1 className="heroArt">Arte</h1>

          <h2 className="heroHabitar">
            <span>DE</span>
            <span>HABITAR</span>
          </h2>
        </div>

        <div className="heroSmallLine" />

        <p>
          ATIVOS EXCLUSIVOS.
          <br />
          LEGADO QUE PERMANECE.
        </p>

        <div className="heroVideoCard">
          <video autoPlay muted loop playsInline>
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="heroBottomLine" />

        <span className="heroExplore">EXPLORAR</span>
      </div>
    </section>
  );
}
