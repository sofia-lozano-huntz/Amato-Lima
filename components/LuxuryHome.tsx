"use client";

export default function LuxuryHome() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#120f0b] text-[#f4eadc]">
      {/* Fundo */}
      <div className="absolute inset-0">
        <img
          src="/wood.png"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_75%)]" />
      </div>

      {/* Linhas centrais */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#f4eadc]/20" />

      {/* Header */}
      <header className="relative z-10 flex items-start justify-between px-8 pt-8 text-[10px] uppercase tracking-[0.45em] text-[#f4eadc]/75 md:px-14">
        <div className="flex items-center gap-4">
          <span className="block h-px w-6 bg-[#f4eadc]/70" />
          <span>Menu</span>
        </div>

        <div className="absolute left-1/2 top-7 -translate-x-1/2 text-center">
          <img
            src="/logo.png"
            alt="Amato Lima"
            className="mx-auto h-20 w-auto object-contain opacity-90"
          />
        </div>

        <div className="flex items-center gap-4">
          <span>Contato</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#f4eadc]/80" />
        </div>
      </header>

      {/* Conteúdo */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center">
        <div className="mt-16">
          <h1 className="font-serif text-[22vw] font-light leading-none tracking-[0.08em] text-[#f4eadc]/90 md:text-[15vw]">
            ATIVO
          </h1>

          <p className="mt-2 text-[4vw] font-light uppercase tracking-[0.75em] text-[#f4eadc]/75 md:text-[2vw]">
            de habitar
          </p>
        </div>

        <div className="my-9 h-5 w-px bg-[#f4eadc]/30" />

        <p className="max-w-md text-[10px] uppercase leading-6 tracking-[0.45em] text-[#f4eadc]/75 md:text-xs">
          Ativos exclusivos.
          <br />
          Legado que permanece.
        </p>

        {/* Quadro com vídeo */}
        <div className="mt-14 w-full max-w-[780px] overflow-hidden rounded-[2rem] border border-[#f4eadc]/35 bg-black/20 shadow-2xl backdrop-blur-sm md:rounded-[2.8rem]">
          <video
            src="/intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-[230px] w-full object-cover md:h-[300px]"
          />
        </div>

        <div className="mt-8 h-8 w-px bg-[#f4eadc]/30" />

        <button className="mb-10 text-[10px] uppercase tracking-[0.55em] text-[#f4eadc]/70 transition hover:text-[#f4eadc]">
          Explorar
        </button>
      </section>
    </main>
  );
}
