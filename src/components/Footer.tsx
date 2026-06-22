import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg px-5 pb-6 pt-10 sm:px-7 md:pb-[26px] md:pt-12">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr_1fr] lg:gap-[34px]">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Link href="/"><Image src="/assets/5star-logo.png" alt="5 Star Shine Auto Detail LLC" width={160} height={78} className="mb-3.5 block h-16 w-auto sm:h-[78px]" /></Link>
          <p className="mb-4 max-w-[230px] font-barlow text-[13px] leading-[1.55] text-text-dim">
            Professional auto detailing that restores, protects, and keeps your vehicle looking its absolute best.
          </p>
          <div className="flex gap-2.5">
            <a href="#top" aria-label="Instagram" className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-social-border text-text-muted transition-colors hover:border-accent hover:text-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#top" aria-label="Facebook" className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-social-border text-text-muted transition-colors hover:border-accent hover:text-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M14 9h2.5l.5-3h-3V4.2c0-.8.3-1.2 1.3-1.2H17V.2C16.6.1 15.5 0 14.4 0 11.9 0 10.5 1.4 10.5 4v2H8v3h2.5v9H14V9z"/></svg>
            </a>
            <a href="#top" aria-label="Google Business" className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-social-border font-archivo text-sm font-bold text-text-muted transition-colors hover:border-accent hover:text-accent">
              G
            </a>
            <a href="#top" aria-label="TikTok" className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-social-border text-text-muted transition-colors hover:border-accent hover:text-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m19 5-14 14"/><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="mb-4 font-archivo text-[13px] font-bold uppercase tracking-[0.14em] text-accent">Quick Links</div>
          <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
            {[
              { href: "/", label: "Home" },
              { href: "/#mobile", label: "Services" },
              { href: "/#coating", label: "Coatings" },
              { href: "/#results", label: "Gallery" },
              { href: "/#reviews", label: "Reviews" },
              { href: "/#contact", label: "Contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="font-barlow text-sm text-text-muted transition-colors hover:text-white">{l.label}</a>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <div className="mb-4 font-archivo text-[13px] font-bold uppercase tracking-[0.14em] text-accent">Our Services</div>
          <div className="flex flex-col gap-2.5">
            {["Mobile Detailing", "Ceramic Coating", "Paint Correction", "Interior Detailing", "Pressure Washing", "And More"].map((s) => (
              <span key={s} className="font-barlow text-sm text-text-muted">{s}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="mb-4 font-archivo text-[13px] font-bold uppercase tracking-[0.14em] text-accent">Contact Us</div>
          <div className="flex flex-col gap-[13px]">
            <a href="tel:7654385513" className="flex items-center gap-2.5 font-barlow text-sm text-text-muted transition-colors hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
              (765) 438-5513
            </a>
            <a href="mailto:info@5starshineautodetail.com" className="flex items-center gap-2.5 font-barlow text-sm text-text-muted transition-colors hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              info@5starshineautodetail.com
            </a>
            <div className="flex items-start gap-2.5 font-barlow text-sm leading-[1.4] text-text-muted">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-none" aria-hidden="true"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
              <span>Tampa, FL<br />Surrounding Areas</span>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <div className="mb-4 font-archivo text-[13px] font-bold uppercase tracking-[0.14em] text-accent">Hours</div>
          <div className="mb-1.5 font-barlow text-sm leading-normal text-text-muted">Mon - Sun: 8AM - 9PM</div>
          <div className="mb-[18px] font-barlow text-sm leading-normal text-text-muted">Open 7 Days a Week</div>
          <div className="inline-flex items-center gap-[9px] rounded-[9px] border border-cta-border px-[13px] py-[9px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-none" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
            </svg>
            <div className="leading-[1.25]">
              <div className="font-barlow text-[12.5px] font-bold text-white">Fully Insured</div>
              <div className="font-barlow text-[11px] text-text-dim">For Your Peace of Mind</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1180px] justify-center gap-6 border-t border-border-subtle pt-[18px] sm:justify-end">
        <a href="#top" className="font-barlow text-[12.5px] text-text-ghost transition-colors hover:text-text-muted">Privacy Policy</a>
        <a href="#top" className="font-barlow text-[12.5px] text-text-ghost transition-colors hover:text-text-muted">Terms of Service</a>
      </div>
    </footer>
  );
}
