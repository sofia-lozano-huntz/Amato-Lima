export default function SaoPauloSection() {
  return (
    <section className="saopaulo-section">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="saopaulo-video"
      >
        <source
          src="/video-saopaulo.mp4"
          type="video/mp4"
        />
      </video>

      <div className="saopaulo-overlay">

        <p>
          Engenharia como origem do ativo.
        </p>

      </div>

    </section>
  );
}
