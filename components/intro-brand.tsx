"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroBrand() {
  const introRef = useRef<HTMLElement | null>(null);
  const videoBoxRef = useRef<HTMLDivElement | null>(null);
  const introLogoRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const intro = introRef.current;
    const videoBox = videoBoxRef.current;
    const introLogo = introLogoRef.current;
    const targetVideo = document.querySelector(".hero-film") as HTMLElement | null;
    const targetLogo = document.querySelector(".hero-logo-target") as HTMLElement | null;

    if (!intro || !videoBox || !introLogo || !targetVideo || !targetLogo) return;

    const ctx = gsap.context(() => {
      const getVideoTarget = () => {
        const rect = targetVideo.getBoundingClientRect();

        return {
          width: rect.width,
          height: rect.height,
          x: rect.left,
          y: rect.top,
          borderRadius: "18px",
        };
      };

      const getLogoTarget = () => {
        const rect = targetLogo.getBoundingClientRect();

        return {
          width: rect.width,
          x: rect.left,
          y: rect.top,
        };
      };

      gsap.set(videoBox, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100svh",
        x: 0,
        y: 0,
        borderRadius: 0,
        zIndex: 1000,
      });

      gsap.set(introLogo, {
        position: "fixed",
        width: "210px",
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        zIndex: 1002,
        opacity: 0.94,
        filter: "blur(0px)",
      });

      gsap.set(
        [
          ".hero-header",
          ".hero-script",
          ".hero-title",
          ".hero-video-frame",
          ".hero-enter",
          ".hero-soft-reveal",
        ],
        {
          opacity: 0,
          filter: "blur(18px)",
        }
      );

      gsap.set(".hero-logo-target", {
        opacity: 0,
      });

      gsap.set(".hero-bg", {
        opacity: 0.18,
        scale: 1.06,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=520%",
          scrub: 5.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress > 0.985) {
              gsap.set(intro, { opacity: 0, pointerEvents: "none" });
              gsap.set(".hero-logo-target", { opacity: 0.94 });
            } else {
              gsap.set(intro, { opacity: 1, pointerEvents: "none" });
              gsap.set(".hero-logo-target", { opacity: 0 });
            }
          },
        },
      });

      tl.to(
        videoBox,
        {
          width: "76vw",
          height: "45vh",
          x: "12vw",
          y: "28vh",
          borderRadius: "18px",
          ease: "power3.inOut",
        },
        0
      );

      tl.to(
        introLogo,
        {
          width: "150px",
          y: "-22vh",
          ease: "power3.inOut",
        },
        0.04
      );

      tl.to(
        ".hero-script",
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          ease: "power2.out",
        },
        0.2
      );

      tl.to(
        ".hero-title",
        {
          opacity: 1,
          filter: "blur(0px)",
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
        0.48
      );

      tl.to(
        ".hero-soft-reveal",
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0.52
      );

      tl.to(
        [".hero-header", ".hero-video-frame"],
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0.6
      );

      tl.to(
        videoBox,
        {
          ...getVideoTarget(),
          ease: "power4.inOut",
        },
        0.68
      );

      tl.to(
        introLogo,
        {
          ...getLogoTarget(),
          xPercent: 0,
          yPercent: 0,
          ease: "power4.inOut",
        },
        0.68
      );

      tl.to(
        ".hero-enter",
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0.82
      );

      tl.to(
        [videoBox, introLogo],
        {
          opacity: 0,
          ease: "power2.out",
        },
        0.97
      );

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={introRef} className="intro">
      <div ref={videoBoxRef} className="intro-video-box">
        <video src="/intro.mp4" autoPlay muted loop playsInline preload="auto" />
      </div>

      <img
        ref={introLogoRef}
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
