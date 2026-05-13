"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroBrand() {
  const introRef = useRef<HTMLElement | null>(null);
  const videoBoxRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useLayoutEffect(() => {
    const intro = introRef.current;
    const videoBox = videoBoxRef.current;
    const target = document.querySelector(".hero-film") as HTMLElement | null;

    if (!intro || !videoBox || !target) return;

    const ctx = gsap.context(() => {
      const getTargetVars = () => {
        const rect = target.getBoundingClientRect();

        return {
          width: rect.width,
          height: rect.height,
          x: rect.left,
          y: rect.top,
          borderRadius: "999px",
        };
      };

      gsap.set(videoBox, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100svh",
        x: 0,
        y: 0,
        borderRadius: 0,
        zIndex: 1000,
      });

      gsap.set(".hero", {
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=130%",
          scrub: 1.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress > 0.96) {
              gsap.set(intro, {
                opacity: 0,
                pointerEvents: "none",
              });
            } else {
              gsap.set(intro, {
                opacity: 1,
                pointerEvents: "none",
              });
            }
          },
        },
      });

      tl.to(videoBox, {
        ...getTargetVars(),
        ease: "none",
      });

      tl.to(
        ".scroll-indicator",
        {
          opacity: 0,
          y: 18,
          ease: "none",
        },
        0
      );

      tl.to(
        videoBox,
        {
          opacity: 0,
          ease: "none",
        },
        0.92
      );

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={introRef} className="intro">
      <div ref={videoBoxRef} className="intro-video-box">
        <video
          ref={videoRef}
          src="/intro.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <div className="scroll-indicator">
        <p>Entrar</p>
        <span />
      </div>
    </section>
  );
}
