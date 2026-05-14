"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1b1712] text-[#efe7d8]">
      {/* Background */}
      <img
        src="/wood.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[#6b5436]/20 mix-blend-multiply" />

      {/* Linha central */}
      <div className="absolute left-1/2 top-0 z-10 h-full w-px bg-[#efe7d8]/20" />

      {/* Header */}
      <header className="absolute left-0 top-0 z-20 flex w-full items-start justify-between px-10 py-8 text-[10px] uppercase tracking-[0.35em] text-[#efe7d8]/80">
        <div className="flex items-center gap-4">
          <span className="text-xl leading-none">☰</span>
          <span>Menu</span>
        </div>

        <div className="absolute left-1/2 top-8 -translate-x-1/2 text-center">
          <img
            src="/logo.png"
            alt="Amato Lima"
            className="mx-auto mb-2 h-16 w-auto object-contain"
          />
        </div>

        <div>Contato</div>
      </header>

      {/* Conteúdo */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <h1 className="font-serif text-[22vw] font-light leading-[0.75] tracking-[0.08em] text-[#efe7d8]/90 md:text-[14vw]">
          ARTE
        </h1>

        <p className="mt-8 text-[18px] uppercase tracking-[1.1em] text-[#efe7d8]/75 md:text-[24px]">
          De Habitar
        </p>

        <div className="my-8 text-[#efe7d8]/60">＋</div>

        <p className="mb-12 text-[10px] uppercase leading-loose tracking-[0.55em] text-[#efe7d8]/70">
          Ativos exclusivos.
          <br />
          Legado que permanece.
        </p>

        {/* Frame do vídeo */}
        <div className="relative h-[190px] w-full max-w-[720px] overflow-hidden rounded-[28px] border border-[#efe7d8]/35 shadow-2xl md:h-[260px]">
          <video
            src="/intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-12 text-[10px] uppercase tracking-[0.55em] text-[#efe7d8]/65">
          Explorar
        </div>

        <div className="mt-6 h-12 w-px bg-[#efe7d8]/35" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#efe7d8]/80" />
      </div>
    </section>
  );
}
