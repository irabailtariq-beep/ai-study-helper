import type { Metadata } from "next";
import Link from "next/link";

const title = "Privacy Policy";
const description = "How Help in Study handles your data: what we collect, how AI processing works, cookies and analytics, your rights, and how to export or delete everything.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "https://helpinstudy.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-3xl font-bold my-4">Privacy Policy</h1>
      <p className="text-sm" style={{ color: "var(--ash-muted)" }}>Last updated: 1 September 2026</p>

      <section className="prose mt-6 space-y-4">
        <p>Help in Study (<b>helpinstudy.com</b>) is a free study tool. We take your privacy seriously. This policy explains what we collect, how we use it, and the choices you have.</p>

        <h2 className="text-xl font-semibold">What we collect</h2>
        <ul className="list-disc pl-5">
          <li><b>Profile</b>: your country, age, grade and curriculum. Stored only in your own browser — we do not copy it to our servers, even when you are signed in.</li>
          <li><b>Content you send us</b>: text you type, and any photos/PDFs you upload. Sent to our AI providers — Google Gemini, and for some text requests a Llama model via Groq — to produce the answer. We do not sell it, and we share it with nobody else.</li>
          <li><b>Usage counts</b>: number of explanations, quizzes, chats and flashcard reviews per day. Used to show your streaks.</li>
          <li><b>Authentication</b> (only if you choose to sign in): email address and a secure session cookie, managed by Supabase.</li>
          <li><b>Your IP address</b>: used to count how much AI one internet connection has used that day, so the free tools cannot be drained by one person. It is used for that count and for ordinary server security logging, and it is not used to identify you or build a profile of you.</li>
        </ul>

        <h2 className="text-xl font-semibold">Cookies &amp; analytics</h2>
        <p>We use <b>Vercel Web Analytics</b> to count visits and see which pages are read. It sets <b>no cookies</b> and stores nothing on your device: visitors are counted using a temporary hash of the request, which is discarded within 24 hours, and we only ever see totals — never an individual person. Because nothing is stored on your device and no one is identified, this needs no cookie banner and there is nothing to opt out of. We removed Google Analytics in August 2026 for exactly this reason: most of our visitors are school students, and cookie-based tracking is not something we are willing to run on them.</p>

        <h2 className="text-xl font-semibold">Advertising</h2>
        <p>Help in Study is currently <b>ad-free</b>. If we introduce advertising in future (for example, Google AdSense), third-party vendors including Google may use cookies to serve ads based on your visits to this and other sites. We will update this policy before ads go live and explain how to opt out, including via <a href="https://adssettings.google.com" className="underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> and <a href="https://www.aboutads.info" className="underline" target="_blank" rel="noopener noreferrer">aboutads.info</a>.</p>

        <h2 className="text-xl font-semibold">What we do NOT collect</h2>
        <ul className="list-disc pl-5">
          <li>Passwords (we use magic links / OAuth).</li>
          <li>Payment or financial information — the app is free.</li>
          <li>Contacts, location beyond the approximate region analytics infers, or photos you did not explicitly upload.</li>
          <li>Facial recognition data.</li>
        </ul>

        <h2 className="text-xl font-semibold">Children</h2>
        <p>Help in Study is intended for ages <b>13 and over</b>. If you are under 13, please use it with a parent or guardian. We do not knowingly collect personal information from children under 13 without parental consent (COPPA), and we do not show personalised ads to users we know to be under 13.</p>

        <h2 className="text-xl font-semibold">AI processing</h2>
        <p>Text, images and PDFs you upload are sent to Google's Gemini API (and, for some text chat, a Llama model via Groq) to produce explanations, quizzes or replies. See each provider's privacy documentation for how they handle data. We do not fine-tune any model on your content.</p>

        <h2 className="text-xl font-semibold">Your choices</h2>
        <ul className="list-disc pl-5">
          <li><b>Guest mode</b>: use the app without signing up — everything stays on your device.</li>
          <li><b>Export</b>: sign in and visit <Link href="/settings" className="underline">Settings</Link> to export your data.</li>
          <li><b>Delete</b>: sign in and visit <Link href="/settings" className="underline">Settings</Link> to delete your account and all associated data. Takes effect immediately.</li>
        </ul>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>For privacy requests or questions, email <a href="mailto:raistudyhelper@gmail.com" className="underline">raistudyhelper@gmail.com</a>.</p>
      </section>
    </main>
  );
}
