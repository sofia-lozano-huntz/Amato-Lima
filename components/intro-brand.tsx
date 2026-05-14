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
          left: rect.left,
          top: rect.top,
        };
      };

      const getLogoTarget = () => {
        const rect = targetLogo.getBoundingClientRect();

        return {
          width: rect.width,
          left: rect.left,
          top: rect.top,
        };
      };

      gsap.set(videoBox, {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100svh",
        borderRadius: 0,
        zIndex: 1000,
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

      gsap.set(".hero-logo-target", {
        opacity: 0,
      });

      gsap.set(
        [
          ".hero-header",
          ".hero-script",
          ".hero-title",
          ".hero-video-frame",
          ".hero-enter",
          ".hero-soft-reveal",
          ".hero-video",
        ],
        {
          opacity: 0,
          filter: "blur(18px)",
        }
      );

      gsap.set(".hero-bg", {
        opacity: 0.12,
        scale: 1.06,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=620%",
          scrub: 5.8,
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
          width: "72vw",
          height: "42vh",
          left: "14vw",
          top: "30vh",
          borderRadius: "2px",
          ease: "power3.inOut",
        },
        0
      );

      tl.to(
        introLogo,
        {
          top: "18vh",
          width: "170px",
          ease: "power3.inOut",
        },
        0.05
      );

      tl.to(
        ".hero-script",
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0.22
      );

      tl.to(
        ".hero-title",
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0.36
      );

      tl.to(
        ".hero-bg",
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        },
        0.52
      );

      tl.to(
        ".hero-soft-reveal",
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0.56
      );

      tl.to(
        [".hero-header", ".hero-video-frame"],
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0.64
      );

      tl.to(
        videoBox,
        {
          ...getVideoTarget(),
          borderRadius: "2px",
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
        ".hero-video",
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0.92
      );

      tl.to(
        ".hero-enter",
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0.94
      );

      tl.to(
        [videoBox, introLogo],
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
