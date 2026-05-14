"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroBrand() {
  const introRef = useRef<HTMLElement | null>(null);
  const videoWrapRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const intro = introRef.current;
    const videoWrap = videoWrapRef.current;
    const logo = logoRef.current;

    if (!intro || !videoWrap || !logo) return;

    const ctx = gsap.context(() => {
      gsap.set(".home-reveal", {
        opacity: 1,
        y: 0,
      });

      gsap.set([".hero-header", ".hero-copy", ".hero-enter"], {
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.set(videoWrap, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100svh",
        zIndex: 20,
      });

      gsap.set(logo, {
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "210px",
        xPercent: -50,
        yPercent: -50,
        zIndex: 25,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=420%",
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        videoWrap,
        {
          width: "58vw",
          height: "28vh",
          top: "47vh",
          left: "50%",
          xPercent: -50,
          ease: "none",
        },
        0
      );

      tl.to(
        logo,
        {
          top: "11vh",
          width: "138px",
          ease: "none",
        },
        0
      );

      tl.to(
        ".hero-copy",
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
        },
        0.22
      );

      tl.to(
        ".hero-header",
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
        },
        0.45
      );

      tl.to(
        ".hero-enter",
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
        },
        0.58
      );

      tl.to(
        intro,
        {
          opacity: 0,
          ease: "none",
        },
        0.96
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={introRef} className="intro-layer">
      <div ref={videoWrapRef} className="intro-video-wrap">
        <video src="/intro.mp4" autoPlay muted loop playsInline preload="auto" />
      </div>

      <img
        ref={logoRef}
        src="/logo.png"
        alt="Amato Lima"
        className="intro-logo"
      />
    </section>
  );
}
