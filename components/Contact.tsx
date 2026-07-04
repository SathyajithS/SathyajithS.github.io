"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="eyebrow">contact</div>
        <h2 className="sec-title">
          Let&apos;s ship something <span>solid.</span>
        </h2>
        <p>Open to QA / Test Engineer roles. Send a message directly, or reach out below.</p>

        <form className="cform" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="name" required />
          <input name="email" type="email" placeholder="email" required />
          <textarea name="message" placeholder="message" required />
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "sending..." : "send message"}
          </button>
          <div className={`status-msg ${status === "error" ? "error" : ""}`}>
            {status === "sent" && "✓ message sent — thanks, will reply soon."}
            {status === "error" && "✕ something broke, email directly instead."}
          </div>
        </form>

        <div className="contact-links">
          <a className="clink" href="mailto:sathyajiths10@gmail.com">
            ✉ Email
          </a>
          <a className="clink" href="tel:+918590169606">
            ☎ +91 85901 69606
          </a>
          <a
            className="clink"
            href="https://linkedin.com/in/sathyajith-s-9282a9148"
            target="_blank"
            rel="noopener"
          >
            in LinkedIn
          </a>
          <a
            className="clink"
            href="https://github.com/SathyajithS"
            target="_blank"
            rel="noopener"
          >
            ⌥ GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
