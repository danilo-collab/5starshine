import ScrollReveal from "./ScrollReveal";

export default function CeramicCoating() {
  return (
    <section id="coating" className="mx-auto max-w-[1180px] px-5 py-6 sm:px-7 md:py-[30px]">
      <ScrollReveal>
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-border bg-bg-card p-5 sm:p-[30px] lg:grid-cols-2 lg:gap-10">
          <div className="p-0 lg:p-1.5">
            <div className="mb-3 font-archivo text-xs font-bold uppercase tracking-[0.2em] text-accent">Long-Lasting Protection</div>
            <h2 className="mb-3.5 font-archivo font-extrabold leading-[1.05] text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)" }}>Ceramic Coating</h2>
            <p className="mb-5 max-w-[420px] font-barlow text-base leading-relaxed text-text-muted">
              Hydrophobic. High gloss. Built to last. Our ceramic coatings create a durable barrier against the elements.
            </p>
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z"/></svg>,
                  title: "Hydrophobic Defense",
                  desc: "Repels water, dirt, and contaminants.",
                },
                {
                  icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></svg>,
                  title: "Mirror-Like Gloss",
                  desc: "Enhances color and shine.",
                },
                {
                  icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                  title: "Long-Lasting Durability",
                  desc: "Protection that lasts for years.",
                },
              ].map((c) => (
                <div key={c.title} className="card-hover rounded-[11px] border border-border-inner bg-bg-inner px-[13px] py-4">
                  {c.icon}
                  <div className="mb-[5px] mt-2.5 font-barlow text-sm font-bold text-white">{c.title}</div>
                  <div className="font-barlow text-[12.5px] leading-[1.45] text-text-dim">{c.desc}</div>
                </div>
              ))}
            </div>
            <a href="#formula" className="btn-glow inline-flex items-center gap-[9px] rounded-lg bg-accent px-[22px] py-[13px] font-barlow text-sm font-bold text-bg">
              Explore Coating Options
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
            </a>
          </div>

          <div
            className="order-first flex h-[240px] flex-col items-center justify-center gap-2.5 rounded-xl border border-dashed border-border-btn bg-[#0d100c] sm:h-[330px] lg:order-last"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.022) 0 12px, transparent 12px 24px)" }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5a6052" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="#5a6052" stroke="none"/></svg>
            <span className="text-center font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#5a6052]">INSTAGRAM IMAGE<br />PLACEHOLDER</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
