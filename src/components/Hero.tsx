export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "radial-gradient(120% 100% at 80% 30%, #1b1f1a 0%, #0d0f0c 45%, #0a0b0a 100%)" }}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(184,224,0,0.06), transparent 30%), repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 120px)" }} />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-2 items-center gap-[30px] px-7 pb-[70px] pt-16">
        <div>
          <div className="mb-[18px] font-archivo text-xs font-bold uppercase tracking-[0.22em] text-accent">5 Star Shine Auto Detailing</div>
          <h1 className="mb-[22px] font-archivo text-[58px] font-extrabold leading-[1.02] tracking-tight">
            <span className="text-white">Premium Detailing</span><br />
            <span className="text-accent">That Brings Back the Shine</span>
          </h1>
          <p className="mb-8 max-w-[430px] font-barlow text-[17px] leading-relaxed text-text-body">
            Professional auto detailing that restores, protects, and maintains your vehicle—inside and out.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#contact" className="inline-flex items-center gap-2.5 rounded-[9px] bg-accent px-[26px] py-[15px] font-barlow text-[15px] font-bold text-bg transition-[filter] hover:brightness-110">
              Book a Detail
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2.5 rounded-[9px] border border-border-btn bg-transparent px-[26px] py-[15px] font-barlow text-[15px] font-bold text-white transition-colors hover:border-accent">
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div className="flex h-[360px] flex-col items-center justify-center gap-2 rounded-[14px] border border-border bg-bg-card" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.022) 0 12px, transparent 12px 24px)" }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4a5044" strokeWidth="1.5"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="m3 9 4-3h10l4 3"/><circle cx="12" cy="13" r="3"/></svg>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#5a6052]">HERO — DETAILED CAR</span>
        </div>
      </div>

      {/* Feature Strip */}
      <div className="relative mx-auto max-w-[1180px] px-7 pb-14">
        <div className="grid grid-cols-4 overflow-hidden rounded-xl border border-border bg-bg-card">
          {[
            {
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>,
              title: "Mobile Service",
              sub: "We come to you",
              border: true,
            },
            {
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>,
              title: "Premium Products",
              sub: "Top-tier protection",
              border: true,
            },
            {
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
              title: "Certified Detailers",
              sub: "Trained & trusted",
              border: true,
            },
            {
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-accent)" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>,
              title: "5-Star Results",
              sub: "Satisfaction guaranteed",
              border: false,
            },
          ].map((f, i) => (
            <div key={i} className={`flex items-center gap-[13px] px-5 py-[18px] ${f.border ? "border-r border-[#1d211b]" : ""}`}>
              {f.icon}
              <div>
                <div className="font-barlow text-sm font-bold text-white">{f.title}</div>
                <div className="font-barlow text-[12.5px] text-text-faint">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
