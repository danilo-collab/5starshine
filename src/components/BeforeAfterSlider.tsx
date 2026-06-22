"use client";

import { useCallback, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface SliderProps {
  label: string;
  beforeGradient: string;
  afterGradient: string;
}

function Slider({ label, beforeGradient, afterGradient }: SliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const updatePos = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      updatePos(e.clientX);

      const onMove = (ev: PointerEvent) => updatePos(ev.clientX);
      const onUp = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    },
    [updatePos]
  );

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      className="group relative h-[140px] cursor-ew-resize select-none overflow-hidden rounded-[11px] border border-border transition-[border-color] hover:border-border-btn sm:h-[165px]"
      style={{ touchAction: "none" }}
      role="slider"
      aria-label={`Before and after comparison: ${label}`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
      }}
    >
      <div className="absolute inset-0" style={{ background: afterGradient }} />
      <span className="absolute right-[11px] top-[9px] z-[3] rounded bg-black/35 px-[7px] py-[3px] font-barlow text-[11px] font-bold tracking-[0.1em] text-[#e8ebe4]">AFTER</span>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, background: beforeGradient }}>
        <span className="absolute left-[11px] top-[9px] rounded bg-black/40 px-[7px] py-[3px] font-barlow text-[11px] font-bold tracking-[0.06em] text-[#cfd3c9]">{label}</span>
      </div>

      <div className="absolute bottom-0 top-0 z-[4] w-0.5 bg-accent" style={{ left: `${pos}%`, transform: "translateX(-1px)" }} />

      <div
        className="absolute z-[5] flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-accent text-accent transition-transform group-hover:scale-110 sm:h-[38px] sm:w-[38px]"
        style={{ top: "50%", left: `${pos}%`, transform: "translate(-50%, -50%)", background: "rgba(10,11,10,0.7)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
          <path d="m9 6 6 6-6 6" transform="translate(6 0)" />
        </svg>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section id="results" className="mx-auto max-w-[1180px] px-5 pb-5 pt-10 sm:px-7 md:pt-[46px]">
      <ScrollReveal>
        <div className="mb-[26px] text-center font-archivo text-xs font-bold uppercase tracking-[0.22em] text-accent">
          Results That Speak For Themselves
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-[18px]">
        {[
          { label: "Paint Correction", before: "linear-gradient(120deg,#141612,#1c1f18 70%)", after: "linear-gradient(120deg,#2a2e28,#3c4239 60%,#4a5045)" },
          { label: "Ceramic Coating", before: "linear-gradient(120deg,#15171a,#1d2024 70%)", after: "linear-gradient(120deg,#14201c,#16302a 55%,#1c3b33)" },
          { label: "Interior Detail", before: "linear-gradient(120deg,#161412,#201c18 70%)", after: "linear-gradient(120deg,#2c2722,#3a332b 60%,#44392e)" },
        ].map((s, i) => (
          <ScrollReveal key={s.label} delay={i + 1}>
            <Slider label={s.label} beforeGradient={s.before} afterGradient={s.after} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
