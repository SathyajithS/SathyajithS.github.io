import { NextRequest, NextResponse } from "next/server";

// This route makes the site dynamic: form submissions are handled
// server-side on every request instead of being baked in at build time.
//
// Right now it just validates and logs the message server-side.
// To actually receive emails, wire this up to a provider — e.g. Resend
// (https://resend.com), and swap the console.log below for an API call:
//
//   await fetch("https://api.resend.com/emails", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       from: "portfolio@yourdomain.com",
//       to: "sathyajiths10@gmail.com",
//       subject: `New portfolio message from ${name}`,
//       text: message,
//     }),
//   });

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: send via email provider (see comment above) once you have an API key.
    console.log("New contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
