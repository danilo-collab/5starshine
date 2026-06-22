function Stars() {
  return (
    <div className="mb-3.5 flex gap-[3px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="var(--color-accent)" stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar() {
  return (
    <div className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-full border border-avatar-border bg-avatar-bg text-avatar-icon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    </div>
  );
}

const reviews = [
  {
    text: "“My car looks better than the day I bought it. The attention to detail is unmatched. Highly recommend!”",
    name: "— Jason M.",
    location: "Phoenix, AZ",
  },
  {
    text: "“The ceramic coating made a massive difference. Incredible shine and water just rolls right off!”",
    name: "— Sarah T.",
    location: "Scottsdale, AZ",
  },
  {
    text: "“Professional, on time, and worth every penny. 5 Star Shine is the real deal.”",
    name: "— Mike R.",
    location: "Mesa, AZ",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-[1180px] px-7 pb-[50px] pt-[30px]">
      <div className="mb-[26px] text-center font-archivo text-xs font-bold uppercase tracking-[0.22em] text-accent">
        What Our Clients Say
      </div>
      <div className="grid grid-cols-3 gap-[18px]">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-[13px] border border-border bg-bg-card p-[22px]">
            <Stars />
            <p className="mb-[18px] font-barlow text-[15px] leading-[1.55] text-text-review">{r.text}</p>
            <div className="flex items-center gap-3">
              <Avatar />
              <div>
                <div className="font-barlow text-sm font-bold text-white">{r.name}</div>
                <div className="font-barlow text-[12.5px] text-text-dim">{r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
