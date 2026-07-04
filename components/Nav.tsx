"use client";

import { useEffect, useState } from "react";

const links = ["about", "skills", "experience", "projects", "contact"];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <div className="inner">
        <div className="logo">
          sathyajith<span className="dot">.</span>s
        </div>
        <ul>
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "active" : ""}>
                {id}
              </a>
            </li>
          ))}
        </ul>
        <div className="status">
          <span className="led"></span>available for hire
        </div>
      </div>
    </nav>
  );
}
