"use client";

import { useEffect, useRef } from "react";
import FadeUp from "./FadeUp";

const jobs = [
  {
    meta: "JAN 2026 — PRESENT",
    title: "Junior QA Engineer / Project Coordinator",
    org: "Webeaz Technologies Pvt Ltd · Kozhikode, Kerala",
    items: [
      "Coordinating project activities across business functions, keeping delivery on schedule.",
      "Testing a multi-module ERP system — CRM, Sales, Purchase, Accounts, HR.",
      "Tested and documented a market-ready ride-hailing app on Android and iOS.",
      "API testing in Postman — request/response payloads, status codes, auth tokens.",
      "Load and stress testing with Apache JMeter.",
    ],
  },
  {
    meta: "SEP 2025 — JAN 2026",
    title: "Software Testing Intern",
    org: "Luminar Technolab · Kochi, Kerala",
    items: [
      "Built foundation in SDLC, STLC, defect lifecycle, and structured test planning.",
      "Practiced Agile and Waterfall workflows on live training projects.",
    ],
  },
];

export default function Experience() {
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const log = logRef.current;
    if (!log) return;

    const lineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) log.classList.add("in-view");
      },
      { threshold: 0.15 }
    );
    lineObserver.observe(log);

    const entries = log.querySelectorAll(".log-entry");
    const entryObserver = new IntersectionObserver(
      (obs) => {
        obs.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.3 }
    );
    entries.forEach((e) => entryObserver.observe(e));

    return () => {
      lineObserver.disconnect();
      entryObserver.disconnect();
    };
  }, []);

  return (
    <section id="experience">
      <div className="wrap">
        <div className="eyebrow">experience</div>
        <FadeUp>
          <h2 className="sec-title">
            Execution <span>log</span>
          </h2>
        </FadeUp>
        <div className="log" ref={logRef}>
          {jobs.map((job) => (
            <div className="log-entry" key={job.title}>
              <span className="dot-pulse"></span>
              <div className="log-meta">{job.meta}</div>
              <div className="log-title">{job.title}</div>
              <div className="log-org">{job.org}</div>
              <ul className="log-items">
                {job.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
