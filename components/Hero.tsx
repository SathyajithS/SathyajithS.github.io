"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function splitWords(text: string) {
  return text.split(" ").map((w, i) => (
    <span className="word" key={i}>
      <span>{w}</span>
      {i < text.split(" ").length - 1 ? "\u00A0" : ""}
    </span>
  ));
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const tryPlay = () => vid.play().catch(() => {});
    vid.addEventListener("loadeddata", tryPlay);
    document.addEventListener("touchstart", tryPlay, { once: true });
    tryPlay();
    return () => vid.removeEventListener("loadeddata", tryPlay);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.to(".term-line", { opacity: 1, duration: 0.4 })
        .to(
          ".hero h1 .word > span",
          { y: 0, duration: 0.8, stagger: 0.06, ease: "power3.out" },
          "-=0.1"
        )
        .to(".hero .role", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(".hero .hero-cta", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(".sound-toggle", { opacity: 1, duration: 0.5 }, "-=0.3");

      gsap.to(videoRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  function toggleSound() {
    const vid = videoRef.current;
    if (!vid) return;
    const next = !muted;
    vid.muted = next;
    if (!next) vid.play().catch(() => {});
    setMuted(next);
  }

  return (
    <header className="hero" ref={heroRef}>
      <video ref={videoRef} autoPlay muted loop playsInline preload="auto">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="grid-lines"></div>
      <div className="scrim"></div>

      <button
        className={`sound-toggle ${!muted ? "playing" : ""}`}
        onClick={toggleSound}
        style={{ opacity: 0 }}
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        <span className="bars">
          <span></span>
          <span></span>
          <span></span>
        </span>
        {muted ? "tap for sound" : "sound on"}
      </button>

      <div className="wrap hero-content hero-content-left">
        <div className="term-line" style={{ opacity: 0 }}>
          <span className="prompt">~$</span> whoami
          <span className="cursor"></span>
        </div>
        <h1 className="hero-name">{splitWords("Sathyajith S")}</h1>
        <p className="role" style={{ opacity: 0, transform: "translateY(16px)" }}>
          QA Engineer &amp; Project Coordinator
        </p>
        <div className="hero-cta" style={{ opacity: 0, transform: "translateY(16px)" }}>
          <a href="mailto:sathyajiths10@gmail.com" className="btn btn-primary">
            Contact me
          </a>
        </div>
      </div>
      <div className="scroll-cue">
        <span>scroll</span>
        <span className="line"></span>
      </div>
    </header>
  );
}
