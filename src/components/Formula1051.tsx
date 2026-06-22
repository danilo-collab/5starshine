export default function Formula1051() {
  return (
    <section id="formula" className="mx-auto max-w-[1180px] px-7 py-[30px]">
      <div className="relative grid grid-cols-2 items-center gap-10 rounded-2xl border border-border bg-bg-card p-6">
        <div
          className="flex h-[320px] flex-col items-center justify-center gap-2.5 rounded-xl border border-dashed border-border-btn bg-[#0d100c]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.022) 0 12px, transparent 12px 24px)" }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5a6052" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="#5a6052" stroke="none"/></svg>
          <span className="text-center font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#5a6052]">INSTAGRAM IMAGE<br />PLACEHOLDER</span>
        </div>

        <div className="p-1.5">
          <div className="absolute right-6 top-6 inline-flex items-center gap-[7px] rounded-[7px] border border-accent px-3 py-[7px] font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            10 Year Protection
          </div>
          <div className="mb-3 font-archivo text-xs font-bold uppercase tracking-[0.2em] text-accent">The Ultimate Protection</div>
          <h2 className="mb-1.5 font-archivo text-[33px] font-extrabold leading-[1.06] text-white">Formula 1051 — 10 Year Coating</h2>
          <div className="mb-4 font-barlow text-sm font-medium text-text-muted">
            Powered by <span className="font-semibold text-accent">AvantGuard Coatings</span>
          </div>
          <p className="mb-[22px] max-w-[440px] font-barlow text-[15px] leading-relaxed text-text-muted">
            Designed for clients who demand the best. Formula 1051 is a professional-grade 10-year ceramic coating that delivers unmatched protection, gloss, and chemical resistance.
          </p>

          <div className="mb-6 grid max-w-[440px] grid-cols-2 gap-x-[18px] gap-y-4">
            {[
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
                title: "10-Year Protection",
                sub: "Long-term performance",
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></svg>,
                title: "Extreme Gloss",
                sub: "Showroom shine",
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6"/><path d="M10 3v5.5L5.2 17a2 2 0 0 0 1.8 3h10a2 2 0 0 0 1.8-3L14 8.5V3"/><path d="M7.5 14h9"/></svg>,
                title: "Chemical Resistant",
                sub: "Protection that endures",
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg>,
                title: "UV & Weather Defense",
                sub: "Built for any climate",
              },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-2.5">
                <div className="mt-px flex-none">{f.icon}</div>
                <div>
                  <div className="font-barlow text-[13.5px] font-bold text-white">{f.title}</div>
                  <div className="font-barlow text-xs text-text-dim">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="inline-flex items-center gap-[9px] rounded-lg bg-accent px-[22px] py-[13px] font-barlow text-sm font-bold text-bg transition-[filter] hover:brightness-110">
            Ask About Formula 1051
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
