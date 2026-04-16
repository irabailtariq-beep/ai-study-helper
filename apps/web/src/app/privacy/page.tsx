import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-3xl font-bold my-4">Privacy Policy</h1>
      <p className="text-sm" style={{ color: "var(--ash-muted)" }}>Effective: {new Date().getFullYear()}</p>

      <section className="prose mt-6 space-y-4">
        <p>AI Study Helper ("the app") is a free study tool. We take your privacy seriously. This policy explains what we collect and what we don't.</p>

        <h2 className="text-xl font-semibold">What we collect</h2>
        <ul className="list-disc pl-5">
          <li><b>Profile</b>: your country, age, grade and curriculum selection. Stored on your device by default; synced to our database only if you sign in.</li>
          <li><b>Content you send us</b>: text you type, and any photos/PDFs you upload. Sent to Google Gemini for processing. We do not sell or share this content with any other third party.</li>
          <li><b>Usage counts</b>: number of explanations, quizzes, chats and flashcard reviews per day. Used only to show your streaks.</li>
          <li><b>Authentication</b> (only if you choose to sign in): email address and a secure session cookie. Managed by Supabase.</li>
        </ul>

        <h2 className="text-xl font-semibold">What we do NOT collect</h2>
        <ul className="list-disc pl-5">
          <li>Passwords (we use magic links / OAuth).</li>
          <li>Payment or financial information — the app is free.</li>
          <li>Contacts, location, photos not explicitly uploaded.</li>
          <li>Facial recognition data.</li>
          <li>Any third-party ad or analytics tracking.</li>
        </ul>

        <h2 className="text-xl font-semibold">Children</h2>
        <p>The app is designed for ages 13+ for MVP. If you are under 13, please use the app with a parent or guardian. We do not knowingly collect personal information from children under 13 without parental consent (COPPA).</p>

        <h2 className="text-xl font-semibold">AI processing</h2>
        <p>Text, images and PDFs you upload are sent to Google's Gemini API to produce explanations, quizzes or chat replies. See Google's privacy documentation for how they handle data. We do not fine-tune any model on your content.</p>

        <h2 className="text-xl font-semibold">Your choices</h2>
        <ul className="list-disc pl-5">
          <li><b>Guest mode</b>: use the app without signing up. Everything stays on your device.</li>
          <li><b>Export</b>: sign in and visit <Link href="/settings" className="underline">Settings</Link> to export your data.</li>
          <li><b>Delete</b>: sign in and visit <Link href="/settings" className="underline">Settings</Link> to delete your account and all associated data. Takes effect immediately.</li>
        </ul>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>For privacy requests or questions, email <a href="mailto:privacy@ai-study-helper.app" className="underline">privacy@ai-study-helper.app</a>.</p>
      </section>
    </main>
  );
}
