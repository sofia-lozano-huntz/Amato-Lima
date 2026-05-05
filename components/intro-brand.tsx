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

    gsap.timeline({
      defaults: {
        ease: "power3.inOut",
        duration: 1.8,
      },
    })
      .to(videoBoxRef.current, {
        width: "28vw",
        height: "16vw",
        minWidth: "260px",
        minHeight: "145px",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      })
      .to(
        wrapperRef.current,
        {
          backgroundColor: "#f1dfb8",
          duration: 1.2,
        },
        "-=1.2"
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!collapsed && window.scrollY > 20) {
        collapseIntro();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [collapsed]);

  useEffect(() => {
    if (!finished) return;

    const timer = setTimeout(() => {
      collapseIntro();
    }, 1200);

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
          <p>Explore</p>
          <span />
        </div>
      )}
    </section>
  );
}
