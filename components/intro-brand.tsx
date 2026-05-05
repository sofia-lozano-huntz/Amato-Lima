"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function IntroBrand() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoBoxRef = useRef<HTMLDivElement | null>(null);

  const [collapsed, setCollapsed] = useState(false);
  const [finished, setFinished] = useState(false);

  const collapseIntro = () => {
    if (collapsed || !videoBoxRef.current) return;

    setCollapsed(true);

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 1.8 },
    });

    tl.to(videoBoxRef.current, {
      width: "28vw",
      height: "16vw",
      minWidth: "260px",
      minHeight: "145px",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
    });

    tl.to(
      wrapperRef.current,
      {
        backgroundColor: "#f1dfb8",
        duration: 1.4,
      },
      "-=1.2"
    );
  };

  // Scroll também dispara a transição
  useEffect(() => {
    const handleScroll = () => {
      if (!collapsed && window.scrollY > 20) {
        collapseIntro();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [collapsed]);

  // Quando o vídeo termina
  useEffect(() => {
    if (!finished) return;

    const timer = setTimeout(() => {
      collapseIntro();
    }, 1200);

    return () => clearTimeout(timer);
  }, [finished]);

  return (
    <section
      ref={wrapperRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Vídeo */}
      <div
        ref={videoBoxRef}
        className="fixed top-0 left-0 w-screen h-screen z-20 overflow-hidden"
      >
        <video
          ref={videoRef}
          src="/videos/amato-intro.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setFinished(true)}
        />
      </div>

      {/* Indicador de scroll */}
      {!collapsed && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-center text-[#f5f3ef]/70">
          <p className="text-[11px] tracking-[0.35em] uppercase">Explore</p>
          <div className="mx-auto mt-3 h-10 w-px bg-[#f5f3ef]/40" />
        </div>
      )}
    </section>
  );
      }
