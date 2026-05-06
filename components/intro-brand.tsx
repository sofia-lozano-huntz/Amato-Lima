"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function IntroBrand() {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const videoBoxRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [collapsed, setCollapsed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [ready, setReady] = useState(false);

  const collapseIntro = () => {
    if (collapsed || !videoBoxRef.current) return;

    const target = document.querySelector(".hero-video-target");
    if (!target) return;

    const rect = target.getBoundingClientRect();

    setCollapsed(true);

    gsap
      .timeline({
        defaults: {
          ease: "power4.inOut",
        },
      })
      .to(
        ".scroll-indicator",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        0
      )
      .to(
        videoBoxRef.current,
        {
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left,
          duration: 2.35,
          onComplete: () => {
            videoBoxRef.current?.classList.add("is-framed");
          },
        },
        0.12
      );
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    const handleWheel = () => {
      if (!collapsed) collapseIntro();
    };

    const handleTouchMove = () => {
      if (!collapsed) collapseIntro();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [collapsed]);

  useEffect(() => {
    if (!finished) return;

    const timer = setTimeout(() => {
      collapseIntro();
    }, 420);

    return () => clearTimeout(timer);
  }, [finished]);

  return (
    <section
      ref={wrapperRef}
      className={`intro ${collapsed ? "is-collapsed" : ""}`}
    >
      <div ref={videoBoxRef} className="intro-video-box">
        <video
          ref={videoRef}
          src="/intro.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={ready ? "is-ready" : ""}
          onCanPlay={() => setReady(true)}
          onLoadedData={() => setReady(true)}
          onEnded={() => setFinished(true)}
        />
      </div>

      {!collapsed && (
        <div className="scroll-indicator">
          <p>Entrar</p>
          <span />
        </div>
      )}
    </section>
  );
}
