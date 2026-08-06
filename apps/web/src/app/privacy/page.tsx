import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-3xl font-bold my-4">Privacy Policy</h1>
      <p className="text-sm" style={{ color: "var(--ash-muted)" }}>Effective: {new Date().getFullYear()}</p>

      <section className="prose mt-6 space-y-4">
        <p>Help in Study (<b>helpinstudy.com</b>) is a free study tool. We take your privacy seriously. This policy explains what we collect, how we use it, and the choices you have.</p>

        <h2 className="text-xl font-semibold">What we collect</h2>
        <ul className="list-disc pl-5">
          <li><b>Profile</b>: your country, age, grade and curriculum. Stored on your device by default; synced to our database only if you sign in.</li>
          <li><b>Content you send us</b>: text you type, and any photos/PDFs you upload. Sent to Google Gemini for processing. We do not sell it or share it with any other third party.</li>
          <li><b>Usage counts</b>: number of explanations, quizzes, chats and flashcard reviews per day. Used to show your streaks.</li>
          <li><b>Authentication</b> (only if you choose to sign in): email address and a secure session cookie, managed by Supabase.</li>
        </ul>

        <h2 className="text-xl font-semibold">Cookies &amp; analytics</h2>
        <p>We use <b>Google Analytics</b> to understand how the site is used (for example, which pages are popular) so we can improve it. Google Analytics sets cookies and collects standard, aggregated usage data such as approximate location, device and pages visited. You can opt out with the <a href="https://tools.google.com/dlpage/gaoptout" className="underline" target="_blank" rel="noopener noreferrer">Google Analytics opt-out add-on</a>, or by blocking cookies in your browser.</p>

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
