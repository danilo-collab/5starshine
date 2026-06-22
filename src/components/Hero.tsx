import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "radial-gradient(120% 100% at 80% 30%, #1b1f1a 0%, #0d0f0c 45%, #0a0b0a 100%)" }}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(184,224,0,0.06), transparent 30%), repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 120px)" }} />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 px-5 pb-12 pt-12 sm:px-7 md:gap-[30px] md:pb-[70px] md:pt-16 lg:grid-cols-2">
        <ScrollReveal>
          <div className="font-archivo text-xs font-bold uppercase tracking-[0.22em] text-accent" style={{ marginBottom: "clamp(12px, 2vw, 18px)" }}>5 Star Shine Auto Detailing</div>
          <h1 className="font-archivo font-extrabold leading-[1.02] tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 58px)", marginBottom: "clamp(16px, 2vw, 22px)" }}>
            <span className="text-white">Premium Detailing</span><br />
            <span className="text-accent">That Brings Back the Shine</span>
          </h1>
          <p className="max-w-[430px] font-barlow text-[17px] leading-relaxed text-text-body" style={{ marginBottom: "clamp(24px, 3vw, 32px)" }}>
            Professional auto detailing that restores, protects, and maintains your vehicle—inside and out.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#contact" className="btn-glow inline-flex items-center gap-2.5 rounded-[9px] bg-accent px-6 py-[15px] font-barlow text-[15px] font-bold text-bg sm:px-[26px]">
              Book a Detail
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2.5 rounded-[9px] border border-border-btn bg-transparent px-6 py-[15px] font-barlow text-[15px] font-bold text-white transition-colors hover:border-accent sm:px-[26px]">
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2} className="hidden lg:block">
          <div className="flex h-[360px] flex-col items-center justify-center gap-2 rounded-[14px] border border-border bg-bg-card" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.022) 0 12px, transparent 12px 24px)" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4a5044" strokeWidth="1.5"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="m3 9 4-3h10l4 3"/><circle cx="12" cy="13" r="3"/></svg>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#5a6052]">HERO — DETAILED CAR</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Feature Strip */}
      <ScrollReveal className="relative mx-auto max-w-[1180px] px-5 pb-10 sm:px-7 md:pb-14">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-border bg-bg-card md:grid-cols-4">
          {[
            {
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>,
              title: "Mobile Service",
              sub: "We come to you",
            },
            {
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>,
              title: "Premium Products",
              sub: "Top-tier protection",
            },
            {
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
              title: "Certified Detailers",
              sub: "Trained & trusted",
            },
            {
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-accent)" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>,
              title: "5-Star Results",
              sub: "Satisfaction guaranteed",
            },
          ].map((f, i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-4 sm:gap-[13px] sm:px-5 sm:py-[18px] ${i < 3 ? "border-b border-[#1d211b] md:border-b-0 md:border-r" : "border-b border-[#1d211b] md:border-b-0"} ${i === 0 ? "border-r border-[#1d211b] md:border-r" : ""}`}>
              <div className="flex-none">{f.icon}</div>
              <div>
                <div className="font-barlow text-[13px] font-bold text-white sm:text-sm">{f.title}</div>
                <div className="font-barlow text-[11px] text-text-faint sm:text-[12.5px]">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
