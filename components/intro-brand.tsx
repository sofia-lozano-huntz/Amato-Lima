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
    if (collapsed || !videoBoxRef.current || !wrapperRef.current) return;

    const target = document.querySelector(".hero-video-target");
    if (!target) return;

    const rect = target.getBoundingClientRect();

    setCollapsed(true);

    const video = videoRef.current;

    if (video) {
      video.pause();
    }

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
          xPercent: 0,
          yPercent: 0,
          duration: 2.2,
        },
        0.15
      );
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Mobile fazendo charme, porque aparentemente até vídeo tem personalidade.
      }
    };

    playVideo();
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
    }, 450);

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
          src="/videos/amato-intro.mp4"
          autoPlay
          muted
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
