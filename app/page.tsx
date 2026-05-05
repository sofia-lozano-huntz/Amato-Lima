import IntroBrand from "@/components/intro-brand";

export default function Home() {
  return (
    <main>

      {/* INTRO */}
      <IntroBrand />

      {/* HOME PRINCIPAL */}
      <section className="min-h-screen flex items-center justify-center bg-[#f1dfb8] text-[#1a1a1a]">

        <h1 className="flex items-center gap-[2vw] text-[clamp(2.5rem,7vw,8rem)] uppercase font-light tracking-[0.04em]">

          <span>A arte de</span>

          <div className="w-[28vw] min-w-[260px] aspect-video overflow-hidden">
            <video
              src="/videos/amato-intro.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <span>habitar</span>

        </h1>

      </section>

    </main>
  );
}
