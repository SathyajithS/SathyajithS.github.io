"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StaggerFade({
  children,
  className = "",
  itemSelector = ":scope > *",
  stagger = 0.06,
}: {
  children: React.ReactNode;
  className?: string;
  itemSelector?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(itemSelector);
    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y: 16 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
    });
    return () => ctx.revert();
  }, [itemSelector, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
