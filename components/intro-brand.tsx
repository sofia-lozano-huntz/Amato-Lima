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
        opacity: 0,
        y: 40,
      });

      gsap.set(videoWrap, {
        width: "100vw",
        height: "100svh",
        top: 0,
        left: "50%",
        xPercent: -50,
      });

      gsap.set(logo, {
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        width: 210,
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
        videoWrap,
        {
          width: "42vw",
          height: "48vh",
          top: "30vh",
          left: "50%",
          xPercent: -50,
          ease: "none",
        },
        0
      );

      tl.to(
        logo,
        {
          top: "9vh",
          width: 140,
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
        0.55
      );

      tl.to(
        intro,
        {
          opacity: 0,
          ease: "none",
        },
        0.95
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
