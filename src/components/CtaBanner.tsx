import ScrollReveal from "./ScrollReveal";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden border-y border-cta-border" style={{ background: "linear-gradient(90deg,#11160c,#0d1109)" }}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(80% 140% at 90% 50%, rgba(184,224,0,0.07), transparent 60%)" }} />
      <ScrollReveal className="relative mx-auto flex max-w-[1180px] flex-col items-start gap-6 px-5 py-8 sm:px-7 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-[30px] md:py-[34px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="hidden flex-none sm:block" aria-hidden="true">
            <rect x="3" y="4" width="18" height="17" rx="2.5" />
            <path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /><path d="m9 15 2 2 4-4" />
          </svg>
          <div>
            <h2 className="mb-1.5 font-archivo font-extrabold text-white" style={{ fontSize: "clamp(24px, 3vw, 30px)" }}>
              Ready for That <span className="text-accent">5 Star Shine</span>?
            </h2>
            <p className="max-w-[420px] font-barlow text-[15px] leading-normal text-text-cta">
              Book your detail or coating service today and experience the difference professional care makes.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-3.5">
          <a href="tel:7654385513" className="btn-glow inline-flex items-center justify-center gap-2.5 rounded-[9px] bg-accent px-[26px] py-[15px] font-barlow text-[15px] font-bold text-bg">
            Book Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>
          </a>
          <a href="tel:7654385513" className="inline-flex items-center justify-center gap-[11px] rounded-[9px] border border-border-btn bg-transparent px-[22px] py-[11px] font-barlow text-sm font-semibold text-white transition-colors hover:border-accent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="flex flex-col leading-[1.2]">
              <span className="font-bold">Call Today</span>
              <span className="text-[12.5px] text-text-cta">(765) 438-5513</span>
            </span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
