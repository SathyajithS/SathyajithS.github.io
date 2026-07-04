# Sathyajith S — Portfolio (Next.js 14)

Real Next.js app, not a static export. QA/terminal-themed, GSAP scroll animations,
working contact form backed by a server API route.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy
Push to GitHub, then import the repo on vercel.com (free, zero-config for Next.js).
GitHub Pages does NOT work for this — it's a dynamic app with a server API route,
needs a Node host (Vercel, Netlify, Railway, etc).

## Wire up the contact form
`app/api/contact/route.ts` currently just logs submissions. To actually receive
emails, sign up at resend.com (free tier), get an API key, add it as an env var
`RESEND_API_KEY` in Vercel, and uncomment the fetch call in that file.

## Structure
- `app/` — pages, layout, global CSS, API route
- `components/` — Nav, Hero, About, Skills, Experience, Projects, Education, Contact, Footer
- `public/hero-video.mp4` — hero background video (already mobile-fixed, faststart)
