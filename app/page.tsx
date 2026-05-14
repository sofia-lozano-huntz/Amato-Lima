import Image from "next/image";

export default function Home() {
  return (
    <main className="hero">

      {/* Background */}
      <div className="background" />

      {/* Overlay */}
      <div className="overlay" />

      {/* Header */}
      <header className="header">
        <button>MENU</button>

        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
        />

        <button>CONTATO</button>
      </header>

      {/* Conteúdo */}
      <section className="content">

        <h1>ARTE</h1>

        <h2>DE HABITAR</h2>

        <p>
          ATIVOS EXCLUSIVOS.<br />
          LEGADO QUE PERMANECE.
        </p>

        {/* Video Card */}
        <div className="videoCard">

          <video
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>

        </div>

        <span className="explorar">
          EXPLORAR
        </span>

      </section>

    </main>
  );
}
