"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function IntroBrand() {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const videoBoxRef = useRef<HTMLDivElement | null>(null);

  const [collapsed, setCollapsed] = useState(false);
  const [finished, setFinished] = useState(false);

  const collapseIntro = () => {
    if (collapsed || !videoBoxRef.current || !wrapperRef.current) return;

    setCollapsed(true);

    const home = document.getElementById("home");

    gsap
      .timeline({
        defaults: {
          ease: "power3.inOut",
          duration: 1.8,
        },
      })
      .to(videoBoxRef.current, {
        width: "68vw",
        height: "38.25vw",
        maxWidth: "620px",
        maxHeight: "348px",
        top: "42%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      })
      .to(
        wrapperRef.current,
        {
          backgroundColor: "#f4f0e8",
          duration: 1.2,
        },
        "-=1.3"
      )
      .call(
        () => {
          window.scrollTo({
            top: home ? home.offsetTop : window.innerHeight,
            behavior: "smooth",
          });
        },
        [],
        "-=1.1"
      );
  };

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
    }, 900);

    return () => clearTimeout(timer);
  }, [finished]);

  return (
    <section ref={wrapperRef} className="intro">
      <div ref={videoBoxRef} className="intro-video-box">
        <video
          src="/videos/amato-intro.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
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
