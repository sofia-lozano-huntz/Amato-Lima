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
    const targetVideo = document.querySelector(".hero-film") as HTMLElement | null;
    const targetLogo = document.querySelector(".hero-logo-target") as HTMLElement | null;

    if (!intro || !video || !logo || !targetVideo || !targetLogo) return;

    const ctx = gsap.context(() => {
      const videoTarget = () => {
        const r = targetVideo.getBoundingClientRect();
        return {
          width: r.width,
          height: r.height,
          left: r.left,
          top: r.top,
        };
      };

      const logoTarget = () => {
        const r = targetLogo.getBoundingClientRect();
        return {
          width: r.width,
          left: r.left,
          top: r.top,
        };
      };

      gsap.set(video, {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100svh",
        zIndex: 1000,
      });

      gsap.set(logo, {
        position: "fixed",
        left: "50%",
        top: "50%",
        width: 210,
        xPercent: -50,
        yPercent: -50,
        zIndex: 1002,
        opacity: 1,
      });

      gsap.set(".hero-header", { opacity: 0 });
      gsap.set(".hero-logo-target", { opacity: 0 });
      gsap.set(".hero-title-back", { opacity: 0, y: 28 });
      gsap.set(".hero-title-front", { opacity: 0, y: 28 });
      gsap.set(".hero-video-frame", { opacity: 0 });
      gsap.set(".hero-enter", { opacity: 0 });
      gsap.set(".hero-bg", { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=900%",
          scrub: 1.1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(video, {
        width: "58vw",
        height: "34vh",
        left: "21vw",
        top: "36vh",
        ease: "none",
      }, 0.05);

      tl.to(logo, {
        top: "17vh",
        width: 170,
        ease: "none",
      }, 0.08);

      tl.to(".hero-title-back", {
        opacity: 0.72,
        y: 0,
        ease: "none",
      }, 0.24);

      tl.to(".hero-title-front", {
        opacity: 0.62,
        y: 0,
        ease: "none",
      }, 0.38);

      tl.to(".hero-bg", {
        opacity: 1,
        ease: "none",
      }, 0.52);

      tl.to(".hero-header", {
        opacity: 1,
        ease: "none",
      }, 0.62);

      tl.to(video, {
        ...videoTarget(),
        ease: "none",
      }, 0.7);

      tl.to(logo, {
        ...logoTarget(),
        xPercent: 0,
        yPercent: 0,
        ease: "none",
      }, 0.7);

      tl.to(".hero-video-frame", {
        opacity: 0.22,
        ease: "none",
      }, 0.76);

      tl.to(".hero-enter", {
        opacity: 1,
        ease: "none",
      }, 0.86);

      tl.to([video, logo], {
        opacity: 0,
        ease: "none",
      }, 0.985);

      tl.to(".hero-logo-target", {
        opacity: 1,
        ease: "none",
      }, 0.985);

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
