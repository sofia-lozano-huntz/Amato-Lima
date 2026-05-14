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
    const video = videoRef.current;
    const logo = logoRef.current;

    if (!intro || !video || !logo) return;

    const ctx = gsap.context(() => {
      gsap.set(".home-reveal", {
        opacity: 1,
        y: 0,
      });

      gsap.set(video, {
        width: "100%",
        height: "100%",
        top: "0%",
        left: "0%",
        xPercent: 0,
        yPercent: 0,
        borderRadius: "0px",
        boxShadow: "none",
      });

      gsap.set(logo, {
        scale: 1,
        y: 0,
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: intro,
          start: "top top",
          end: "+=420%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        video,
        {
          width: window.innerWidth < 768 ? "78vw" : "62vw",
height: window.innerWidth < 768 ? "46vw" : "25.5vw",
          top: window.innerWidth < 768 ? "72%" : "76%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          borderRadius: "36px",
          boxShadow: "0 30px 90px rgba(0,0,0,0.38)",
          ease: "power2.out",
        },
        0
      );

      tl.to(
        logo,
        {
          scale: 0.52,
          y: "-38vh",
          opacity: 0,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        ".home-reveal",
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        0.34
        );
      });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={introRef} className="intro-layer">
      <div ref={videoRef} className="intro-video-wrap">
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
