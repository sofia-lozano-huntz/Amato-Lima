"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const videoWrapRef = useRef<HTMLDivElement | null>(null);
  const introLogoRef = useRef<HTMLImageElement | null>(null);
  const headerLogoRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const video = videoWrapRef.current;
    const introLogo = introLogoRef.current;
    const headerLogo = headerLogoRef.current;

    if (!hero || !video || !introLogo || !headerLogo) return;

    const ctx = gsap.context(() => {
      gsap.set(headerLogo, { opacity: 0 });

      const isMobile = window.innerWidth <= 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=180%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        video,
        {
          width: isMobile ? "78vw" : "64vw",
          height: isMobile ? "32vw" : "25.6vw",
          top: isMobile ? "72%" : "74%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          borderRadius: isMobile ? "28px" : "36px",
          boxShadow: "0 28px 90px rgba(0,0,0,0.35)",
          ease: "none",
        },
        0
      );

      tl.to(
        introLogo,
        {
          top: isMobile ? "86px" : "58px",
          width: isMobile ? "112px" : "128px",
          opacity: 1,
          ease: "none",
        },
        0
      );

      tl.to(headerLogo, { opacity: 1, ease: "none" }, 0.92);
      tl.to(introLogo, { opacity: 0, ease: "none" }, 0.92);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-bg">
        <img src="/wood.jpg" alt="" aria-hidden="true" />
      </div>

      <div ref={videoWrapRef} className="hero-video-frame">
        <video src="/intro.mp4" autoPlay muted loop playsInline preload="auto" />
      </div>

      <img
        ref={introLogoRef}
        src="/logo.png"
        alt="Amato Lima"
        className="hero-floating-logo"
      />

      <header className="hero-header">
        <button className="hero-menu" aria-label="Menu">
          <span />
          <span />
          <small>Menu</small>
        </button>

        <img
          ref={headerLogoRef}
          src="/logo.png"
          alt="Amato Lima"
          className="hero-logo"
        />

        <a href="#contato" className="hero-contact">
          Contato
        </a>
      </header>

      <div className="hero-line" />

      <div className="hero-content">
        <h1>Arte</h1>
        <p>De Habitar</p>

        <span className="hero-cross">+</span>

        <small>
          Ativos exclusivos.
          <br />
          Legado que permanece.
        </small>

        <div className="hero-card-placeholder" />

        <a href="#sobre" className="hero-explore">
          Explorar
        </a>
      </div>
    </section>
  );
}
