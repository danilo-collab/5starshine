"use client";

import { useCallback, useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#mobile", label: "Services" },
  { href: "#coating", label: "Coatings" },
  { href: "#results", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-btn text-white lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 top-[74px] z-40 bg-bg/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1 p-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="rounded-lg px-4 py-3 font-barlow text-lg font-semibold text-text-secondary transition-colors hover:bg-bg-card hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 border-t border-border pt-4">
              <a href="tel:7654385513" className="flex items-center gap-3 px-4 py-3 font-barlow text-lg font-semibold text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
                (765) 438-5513
              </a>
              <a href="#contact" onClick={close} className="btn-glow mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-barlow text-base font-bold text-bg">
                Book Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
