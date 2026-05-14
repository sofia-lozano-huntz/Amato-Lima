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
        opacity: 0,
        y: 40,
      });

      gsap.set(video, {
        scale: 1,
        transformOrigin: "center center",
      });

      gsap.set(logo, {
        scale: 1,
        y: 0,
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: intro,
          start: "top top",
          end: "+=650%",
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        video,
        {
          scale: 0.68,
          ease: "none",
        },
        0
      );

      tl.to(
        logo,
        {
          y: "-41vh",
          scale: 0.68,
          ease: "none",
        },
        0
      );

      tl.to(
        ".home-reveal",
        {
          opacity: 1,
          y: 0,
          ease: "none",
        },
        0.52
      );

      tl.to(
        intro,
        {
          opacity: 0,
          ease: "none",
        },
        0.94
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
