import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1b1e19]" style={{ background: "rgba(10,11,10,0.92)", backdropFilter: "blur(10px)" }}>
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-7 py-2.5">
        <a href="#top" className="flex-none">
          <Image src="/assets/5star-logo.png" alt="5 Star Shine Auto Detailing" width={120} height={54} className="block h-[54px] w-auto" priority />
        </a>

        <nav className="flex items-center gap-[30px]">
          <a href="#top" className="relative py-1 font-barlow text-[15px] font-semibold text-accent">
            Home
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent" />
          </a>
          {[
            { href: "#mobile", label: "Services" },
            { href: "#coating", label: "Coatings" },
            { href: "#results", label: "Gallery" },
            { href: "#reviews", label: "Reviews" },
            { href: "#contact", label: "Contact" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="py-1 font-barlow text-[15px] font-semibold text-text-secondary transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-[22px]">
          <a href="tel:6025550198" className="flex items-center gap-2 font-barlow text-[15px] font-semibold text-white">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
            (602) 555-0198
          </a>
          <a href="#contact" className="inline-flex items-center gap-[9px] rounded-lg bg-accent px-5 py-[11px] font-barlow text-sm font-bold text-bg transition-[filter] hover:brightness-110">
            Book Now
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </header>
  );
}
