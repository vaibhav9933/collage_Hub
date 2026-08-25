export default function Legal({ documentType, onClose }) {
  if (!documentType) return null

  const isPrivacy = documentType === 'privacy'

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-3 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="legal-title" onClick={onClose}>
      <article className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-5 text-slate-700 shadow-2xl sm:p-8" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Legal</p>
            <h2 id="legal-title" className="mb-4 text-3xl font-bold text-slate-950">{isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close legal document" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-2xl leading-none text-slate-500 transition hover:bg-slate-200 hover:text-slate-950">×</button>
        </div>
        <p className="mb-6 text-sm text-slate-500">Last updated: August 25, 2026</p>
        <div className="space-y-6 leading-7">
          {isPrivacy ? <>
            <section><h3 className="mb-1 font-bold text-slate-950">Information we collect</h3><p>When you use our contact form, we collect the details you choose to provide, including your name, email address, project type, budget range, and description.</p></section>
            <section><h3 className="mb-1 font-bold text-slate-950">How we use it</h3><p>We use these details to reply to your enquiry, prepare an estimate, discuss requirements, and provide support. We do not sell your personal information or use it for unrelated advertising.</p></section>
            <section><h3 className="mb-1 font-bold text-slate-950">Service providers</h3><p>Contact submissions are sent through FormSubmit.co, which helps deliver messages by email. Its own privacy policy may apply to information processed by that service.</p></section>
            <section><h3 className="mb-1 font-bold text-slate-950">Your choices and safety</h3><p>You can ask us to correct or delete information you submitted by sending a request through the contact form. Never include passwords, payment details, government IDs, or other confidential credentials in a message.</p></section>
          </> : <>
            <section><h3 className="mb-1 font-bold text-slate-950">Using this website</h3><p>By using College Project Hub, you agree to use the website lawfully, provide accurate enquiry information, and respect the rights of others.</p></section>
            <section><h3 className="mb-1 font-bold text-slate-950">Projects and estimates</h3><p>Project scope, pricing, timelines, ownership, and deliverables are confirmed separately in writing before work begins. Website descriptions and estimates are general and may change.</p></section>
            <section><h3 className="mb-1 font-bold text-slate-950">Academic integrity</h3><p>Our services are intended for learning, guidance, and legitimate project support. Do not use our materials or services for plagiarism, cheating, fraud, impersonation, or any unlawful activity. You remain responsible for following your institution's rules.</p></section>
            <section><h3 className="mb-1 font-bold text-slate-950">Content and availability</h3><p>Project samples may be unavailable while our showcase is being prepared. We provide website content as-is, may update it without notice, and do not guarantee uninterrupted availability.</p></section>
          </>}
          </div>
      </article>
    </div>
  )
}
