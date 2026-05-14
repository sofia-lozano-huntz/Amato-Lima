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
      const getVideoTarget = () => {
        const rect = heroVideo.getBoundingClientRect();

        return {
          width: rect.width,
          height: rect.height,
          left: rect.left,
          top: rect.top,
        };
      };

      const getLogoTarget = () => {
        const rect = heroLogo.getBoundingClientRect();

        return {
          width: rect.width,
          left: rect.left,
          top: rect.top,
        };
      };

      gsap.set(introVideo, {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100svh",
        zIndex: 1000,
        borderRadius: 0,
      });

      gsap.set(introLogo, {
        position: "fixed",
        left: "50%",
        top: "50%",
        width: "210px",
        xPercent: -50,
        yPercent: -50,
        zIndex: 1002,
        opacity: 0.96,
      });

      gsap.set(".hero-header", { opacity: 0 });
      gsap.set(".hero-logo-target", { opacity: 0 });

      gsap.set([".hero-title-back", ".hero-title-front"], {
        opacity: 0,
        y: 22,
      });

      gsap.set([".hero-video-frame", ".hero-enter"], {
        opacity: 0,
      });

      gsap.set(".hero-bg", {
        opacity: 0,
        scale: 1.04,
      });

      gsap.set(".hero-wash", {
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=520%",
          scrub: 4.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress > 0.985) {
              gsap.set(intro, { opacity: 0 });
              gsap.set(".hero-logo-target", { opacity: 1 });
            } else {
              gsap.set(intro, { opacity: 1 });
              gsap.set(".hero-logo-target", { opacity: 0 });
            }
          },
        },
      });

      tl.to(
        introVideo,
        {
          width: "62vw",
          height: "34vh",
          left: "19vw",
          top: "37vh",
          borderRadius: 0,
          ease: "power3.inOut",
        },
        0
      );

      tl.to(
        introLogo,
        {
          top: "18vh",
          width: "175px",
          ease: "power3.inOut",
        },
        0.04
      );

      tl.to(
        ".hero-title-back",
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        0.2
      );

      tl.to(
        ".hero-title-front",
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        0.34
      );

      tl.to(
        ".hero-bg",
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        },
        0.5
      );

      tl.to(
        ".hero-wash",
        {
          opacity: 1,
          ease: "power2.out",
        },
        0.54
      );

      tl.to(
        [".hero-header", ".hero-video-frame"],
        {
          opacity: 1,
          ease: "power2.out",
        },
        0.64
      );

      tl.to(
        introVideo,
        {
          ...getVideoTarget(),
          borderRadius: 0,
          ease: "power4.inOut",
        },
        0.7
      );

      tl.to(
        introLogo,
        {
          ...getLogoTarget(),
          xPercent: 0,
          yPercent: 0,
          ease: "power4.inOut",
        },
        0.7
      );

      tl.to(
        ".hero-enter",
        {
          opacity: 1,
          ease: "power2.out",
        },
        0.86
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

      <img
        ref={logoRef}
        src="/logo.png"
        alt="Amato Lima"
        className="intro-logo"
      />

      <div className="scroll-indicator">
        <p>Entrar</p>
        <span />
        <i />
      </div>
    </section>
  );
}
