"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const specs = [
  { label: "Dry Film Thickness", value: "8+ microns", method: "ASTM D5796" },
  { label: "Pencil Hardness", value: "4H", method: "ASTM D3363" },
  { label: "Gloss @ 60°", value: "99.8", method: "Gloss Meter" },
  { label: "QUV Resistance", value: "99% retention", method: "ASTM D4587" },
  { label: "Salt Fog (1000 hrs)", value: "No rust, no blisters", method: "ASTM B-117" },
  { label: "MEK Resistance", value: ">1500 rubs", method: "ASTM D4752" },
  { label: "Adhesion Pull-Off", value: "663 psi", method: "ASTM D4521" },
  { label: "Temp Resistance", value: "-40°F to 250°F", method: "In-House" },
];

const protectsAgainst = [
  { icon: "sun", label: "UV Rays & Fading" },
  { icon: "droplet", label: "Acid Rain" },
  { icon: "bird", label: "Bird Droppings" },
  { icon: "bug", label: "Bug Splatter" },
  { icon: "water", label: "Water Spots" },
  { icon: "car-wash", label: "Tunnel Washes" },
];

const processSteps = [
  { step: "01", title: "Decontamination", desc: "Full paint decontamination including clay bar treatment to remove embedded contaminants from the surface." },
  { step: "02", title: "Paint Correction", desc: "Multi-stage polishing to remove swirls, scratches, and oxidation, restoring a flawless base for the coating." },
  { step: "03", title: "Coating Application", desc: "Formula 1051 is wiped on panel by panel, self-leveling to fill imperfections and build a measurable protective film." },
  { step: "04", title: "Curing & Inspection", desc: "Controlled curing process followed by a meticulous inspection under specialized lighting to ensure perfect coverage." },
];

function ProtectionIcon({ type }: { type: string }) {
  switch (type) {
    case "sun":
      return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg>;
    case "droplet":
      return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z"/></svg>;
    case "bird":
      return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/></svg>;
    case "bug":
      return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>;
    case "water":
      return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 14.1c1.44 0 2.56-1.16 2.56-2.58 0-.74-.37-1.42-1.1-2.02-.73-.6-1.23-1.43-1.46-2.2-.23.77-.73 1.6-1.46 2.2-.73.6-1.1 1.28-1.1 2.02 0 1.42 1.12 2.58 2.56 2.58z"/><path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z"/></svg>;
    default:
      return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
  }
}

export default function Formula1051Content() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/formula-1051/hero-coating.png"
            alt="Mirror-like ceramic coating finish on dark paint"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,11,10,0.6) 0%, rgba(10,11,10,0.95) 100%)" }} />
        </div>

        <div className="relative mx-auto max-w-[1180px] px-5 pb-16 pt-20 sm:px-7 md:pb-24 md:pt-28">
          <ScrollReveal>
            <div className="mx-auto max-w-[720px] text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 font-archivo text-[11px] font-bold uppercase tracking-[0.15em] text-accent">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                10-Year Certified Protection
              </div>
              <h1 className="mb-5 font-archivo font-extrabold leading-[1.02] tracking-tight" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
                <span className="text-white">Formula</span>{" "}
                <span className="text-accent">1051</span>
              </h1>
              <p className="mb-3 font-barlow text-lg text-text-secondary sm:text-xl">
                The coating that took 1,051 test cycles to perfect.
              </p>
              <p className="mx-auto mb-8 max-w-[540px] font-barlow text-base leading-relaxed text-text-muted">
                A professional-grade 2K resin-based wipe-on clear coat that adds real, measurable film thickness to your paint. Not a traditional ceramic coating. Something better.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#contact" className="btn-glow inline-flex items-center gap-2.5 rounded-[9px] bg-accent px-7 py-4 font-barlow text-[15px] font-bold text-bg">
                  Get a Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
                </a>
                <a href="tel:7654385513" className="inline-flex items-center gap-2.5 rounded-[9px] border border-border-btn px-7 py-4 font-barlow text-[15px] font-bold text-white transition-colors hover:border-accent">
                  Call (765) 438-5513
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-border">
          <div className="mx-auto grid max-w-[1180px] grid-cols-2 md:grid-cols-4">
            {[
              { value: "99.8", label: "Gloss Rating" },
              { value: "8+", label: "Microns Added" },
              { value: "4H", label: "Pencil Hardness" },
              { value: "10yr", label: "Warranty" },
            ].map((s, i) => (
              <div key={s.label} className={`px-5 py-6 text-center sm:px-7 sm:py-8 ${i < 3 ? "border-r border-border" : ""}`}>
                <div className="font-archivo text-3xl font-extrabold text-accent sm:text-4xl">{s.value}</div>
                <div className="mt-1 font-barlow text-sm text-text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-7 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="font-archivo text-xs font-bold uppercase tracking-[0.2em] text-accent">Why Formula 1051</div>
            <h2 className="mb-5 mt-3 font-archivo font-extrabold leading-[1.05] text-white" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Not a coating. A clear coat.
            </h2>
            <p className="mb-6 max-w-[480px] font-barlow text-base leading-relaxed text-text-muted">
              Traditional polishing removes clear coat to chase a shine. Formula 1051 does the opposite: it adds 8+ microns of self-leveling 2K resin film that builds thickness, fills imperfections, and creates depth that polishing alone can never achieve.
            </p>
            <div className="space-y-5">
              {[
                { title: "True Film Build", desc: "Adds measurable thickness to your paint instead of removing it. Your clear coat gets stronger, not thinner." },
                { title: "Self-Leveling", desc: "The resin flows into micro-imperfections, creating a surface so flat it reflects light like glass." },
                { title: "Correctable", desc: "Light scratches polish out without penetrating the coating. Your protection stays intact." },
                { title: "Self-Healing", desc: "Minor swirls and wash marks disappear with heat exposure, keeping the finish pristine." },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="mt-1.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/10">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <div className="font-barlow text-[15px] font-bold text-white">{f.title}</div>
                    <div className="mt-1 font-barlow text-sm leading-relaxed text-text-muted">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/assets/formula-1051/hydrophobic.png"
                alt="Water beading on ceramic coated surface showing hydrophobic effect"
                width={600}
                height={600}
                className="block w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Protection */}
      <section className="border-y border-border bg-bg-card/50 px-5 py-16 sm:px-7 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="font-archivo text-xs font-bold uppercase tracking-[0.2em] text-accent">Total Defense</div>
              <h2 className="mt-3 font-archivo font-extrabold leading-[1.05] text-white" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
                Protection against everything
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 md:gap-5">
            {protectsAgainst.map((p, i) => (
              <ScrollReveal key={p.label} delay={Math.min(i + 1, 4)}>
                <div className="card-hover flex flex-col items-center gap-3 rounded-xl border border-border bg-bg-card p-5 text-center sm:p-6">
                  <ProtectionIcon type={p.icon} />
                  <div className="font-barlow text-[13px] font-semibold text-text-secondary">{p.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-7 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal delay={1} className="order-last lg:order-first">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/assets/formula-1051/application.png"
                alt="Professional detailer applying Formula 1051 ceramic coating"
                width={600}
                height={600}
                className="block w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="font-archivo text-xs font-bold uppercase tracking-[0.2em] text-accent">The Process</div>
            <h2 className="mb-6 mt-3 font-archivo font-extrabold leading-[1.05] text-white" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Professional installation only
            </h2>
            <p className="mb-8 max-w-[480px] font-barlow text-base leading-relaxed text-text-muted">
              Formula 1051 is a certified-installer-only product. The application process typically takes 1 to 2 days depending on vehicle size and condition.
            </p>
            <div className="space-y-6">
              {processSteps.map((s) => (
                <div key={s.step} className="flex gap-5">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-border-inner bg-bg-inner font-archivo text-lg font-bold text-accent">
                    {s.step}
                  </div>
                  <div>
                    <div className="font-barlow text-[15px] font-bold text-white">{s.title}</div>
                    <div className="mt-1 font-barlow text-sm leading-relaxed text-text-muted">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="border-y border-border bg-bg-card/50 px-5 py-16 sm:px-7 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <div className="font-archivo text-xs font-bold uppercase tracking-[0.2em] text-accent">Lab-Tested Performance</div>
              <h2 className="mt-3 font-archivo font-extrabold leading-[1.05] text-white" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
                Technical specifications
              </h2>
              <p className="mx-auto mt-3 max-w-[480px] font-barlow text-base text-text-muted">
                Every claim backed by ASTM-certified testing. Refined through 1,051 rigorous test cycles.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="hidden grid-cols-3 border-b border-border bg-bg-inner px-6 py-3 sm:grid">
                <div className="font-archivo text-[11px] font-bold uppercase tracking-[0.15em] text-accent">Property</div>
                <div className="font-archivo text-[11px] font-bold uppercase tracking-[0.15em] text-accent">Result</div>
                <div className="font-archivo text-[11px] font-bold uppercase tracking-[0.15em] text-accent">Test Method</div>
              </div>
              {specs.map((s, i) => (
                <div key={s.label} className={`grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-0 ${i < specs.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="font-barlow text-sm font-semibold text-white">{s.label}</div>
                  <div className="font-barlow text-sm font-bold text-accent">{s.value}</div>
                  <div className="font-barlow text-sm text-text-dim">{s.method}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="relative overflow-hidden px-5 py-16 sm:px-7 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/assets/formula-1051/showroom.png"
            alt="Luxury car with mirror-like ceramic coating finish"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-bg/80" />
        </div>

        <ScrollReveal className="relative mx-auto max-w-[720px] text-center">
          <div className="font-archivo text-xs font-bold uppercase tracking-[0.2em] text-accent">Protect Your Investment</div>
          <h2 className="mb-5 mt-3 font-archivo font-extrabold leading-[1.05] text-white" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Ready for the ultimate protection?
          </h2>
          <p className="mx-auto mb-8 max-w-[480px] font-barlow text-base leading-relaxed text-text-muted">
            As a certified AvantGuard installer, 5 Star Shine Auto Detail LLC delivers Formula 1051 with full Carfax documentation and 10-year warranty registration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:7654385513" className="btn-glow inline-flex items-center gap-2.5 rounded-[9px] bg-accent px-7 py-4 font-barlow text-[15px] font-bold text-bg">
              Call (765) 438-5513
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2.5 rounded-[9px] border border-border-btn px-7 py-4 font-barlow text-[15px] font-bold text-white transition-colors hover:border-accent">
              Book Online
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
