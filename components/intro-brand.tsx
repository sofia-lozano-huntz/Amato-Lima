"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function IntroBrand() {
  const videoBoxRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [collapsed, setCollapsed] = useState(false);
  const [ready, setReady] = useState(false);

  const collapseIntro = () => {
    if (collapsed || !videoBoxRef.current) return;

    const target = document.querySelector(".hero-film");
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
          duration: 0.45,
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
          borderRadius: "20px",
          duration: 2.1,
        },
        0.05
      )
      .to(
        videoBoxRef.current,
        {
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            videoBoxRef.current?.remove();
          },
        },
        "-=0.15"
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

  return (
    <section className={`intro ${collapsed ? "is-collapsed" : ""}`}>
      <div ref={videoBoxRef} className="intro-video-box">
        <video
          ref={videoRef}
          src="/intro.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          className={ready ? "is-ready" : ""}
          onCanPlay={() => setReady(true)}
          onLoadedData={() => setReady(true)}
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
