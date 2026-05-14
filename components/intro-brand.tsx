"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroBrand() {
  const introRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const intro = introRef.current;
    const introVideo = videoRef.current;
    const introLogo = logoRef.current;

    const heroVideo = document.querySelector(".hero-film") as HTMLElement | null;
    const heroLogo = document.querySelector(".hero-logo-target") as HTMLElement | null;

    if (!intro || !introVideo || !introLogo || !heroVideo || !heroLogo) return;

    const ctx = gsap.context(() => {
      const videoTarget = () => {
        const r = heroVideo.getBoundingClientRect();
        return { width: r.width, height: r.height, left: r.left, top: r.top };
      };

      const logoTarget = () => {
        const r = heroLogo.getBoundingClientRect();
        return { width: r.width, left: r.left, top: r.top };
      };

      gsap.set(introVideo, {
        position: "fixed",
        inset: "0 auto auto 0",
        width: "100vw",
        height: "100svh",
        zIndex: 1000,
        borderRadius: 0,
      });

      gsap.set(introLogo, {
        position: "fixed",
        left: "50%",
        top: "50%",
        width: 210,
        xPercent: -50,
        yPercent: -50,
        zIndex: 1003,
        opacity: 1,
      });

      gsap.set(".hero-logo-target", { opacity: 0 });

      gsap.set([".hero-title-back", ".hero-title-front"], {
        opacity: 0,
        filter: "blur(8px)",
        y: 24,
        scale: 1.03,
      });

      gsap.set([".hero-header", ".hero-video-frame", ".hero-enter"], {
        opacity: 0,
      });

      gsap.set(".hero-bg", {
        opacity: 0,
        scale: 1.03,
      });

      gsap.set(".hero-wash", {
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=760%",
          scrub: 1.4,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          preventOverlaps: true,
          onUpdate: (self) => {
            if (self.progress > 0.992) {
              gsap.set(intro, { autoAlpha: 0 });
              gsap.set(".hero-logo-target", { opacity: 0.96 });
            } else {
              gsap.set(intro, { autoAlpha: 1 });
              gsap.set(".hero-logo-target", { opacity: 0 });
            }
          },
        },
      });

      /*
        FASE 1: vídeo ainda grande, logo protegida pelo glow cinematográfico
      */
      tl.to(
        introVideo,
        {
          width: "74vw",
          height: "46vh",
          left: "13vw",
          top: "30vh",
          ease: "power2.inOut",
        },
        0.08
      );

      tl.to(
        introLogo,
        {
          top: "24vh",
          width: 188,
          ease: "power2.inOut",
        },
        0.12
      );

      /*
        FASE 2: tipografia revela, ainda sem home completa
      */
      tl.to(
        ".hero-title-back",
        {
          opacity: 0.88,
          filter: "blur(0px)",
          y: 0,
          scale: 1,
          ease: "power2.out",
        },
        0.28
      );

      tl.to(
        ".hero-title-front",
        {
          opacity: 0.82,
          filter: "blur(0px)",
          y: 0,
          scale: 1,
          ease: "power2.out",
        },
        0.42
      );

      /*
        FASE 3: fundo aparece depois das frases, sem overlay branco lavado
      */
      tl.to(
        ".hero-bg",
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        },
        0.56
      );

      tl.to(
        ".hero-header",
        {
          opacity: 1,
          ease: "power2.out",
        },
        0.66
      );

      /*
        FASE 4: vídeo encaixa no quadro pequeno
      */
      tl.to(
        introVideo,
        {
          ...videoTarget(),
          ease: "power3.inOut",
        },
        0.7
      );

      tl.to(
        introLogo,
        {
          ...logoTarget(),
          xPercent: 0,
          yPercent: 0,
          ease: "power3.inOut",
        },
        0.7
      );

      tl.to(
        ".hero-video-frame",
        {
          opacity: 0.36,
          ease: "power2.out",
        },
        0.78
      );

      tl.to(
        ".hero-enter",
        {
          opacity: 1,
          ease: "power2.out",
        },
        0.88
      );

      tl.to(
        [introVideo, introLogo],
        {
          opacity: 0,
          ease: "power2.out",
        },
        0.985
      );

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={introRef} className="intro">
      <div ref={videoRef} className="intro-video">
        <video src="/intro.mp4" autoPlay muted loop playsInline preload="auto" />
      </div>

      <img ref={logoRef} src="/logo.png" alt="Amato Lima" className="intro-logo" />

      <div className="scroll-indicator">
        <p>Entrar</p>
        <span />
        <i />
      </div>
    </section>
  );
}
