function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-4.5" />
    </svg>
  );
}

export default function MobileDetailing() {
  return (
    <section id="mobile" className="mx-auto max-w-[1180px] px-7 py-[30px]">
      <div className="grid grid-cols-2 items-center gap-10 rounded-2xl border border-border bg-bg-card p-6">
        <div
          className="flex h-[300px] flex-col items-center justify-center gap-2.5 rounded-xl border border-dashed border-border-btn bg-[#0d100c]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.022) 0 12px, transparent 12px 24px)" }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5a6052" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="#5a6052" stroke="none"/></svg>
          <span className="text-center font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#5a6052]">INSTAGRAM IMAGE<br />PLACEHOLDER</span>
        </div>

        <div className="py-2 pr-2">
          <div className="mb-3 font-archivo text-xs font-bold uppercase tracking-[0.2em] text-accent">On-Site Convenience</div>
          <h2 className="mb-3.5 font-archivo text-4xl font-extrabold leading-[1.05] text-white">Mobile Detailing</h2>
          <p className="mb-[22px] max-w-[420px] font-barlow text-base leading-relaxed text-text-muted">
            We bring the detail shop to you. Our mobile service is designed for your schedule—at your home or work.
          </p>
          <div className="mb-[26px] flex flex-col gap-[13px]">
            {["Fully equipped mobile units", "Professional results anywhere", "Save time, stay convenient"].map((t) => (
              <div key={t} className="flex items-center gap-[11px] font-barlow text-[15px] font-medium text-text-secondary">
                <CheckIcon />
                {t}
              </div>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-[9px] rounded-lg bg-accent px-[22px] py-[13px] font-barlow text-sm font-bold text-bg transition-[filter] hover:brightness-110">
            Schedule Mobile Service
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
