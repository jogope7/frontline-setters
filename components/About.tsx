const stats = [
  {
    value: "200-400",
    label: "Calls per setter per day",
    subtitle: "Outbound calls per day, per setter",
  },
  {
    value: "48hrs",
    label: "Average time to first dial",
    subtitle: "Average time from start to first booking",
  },
  {
    value: "100%",
    label: "Live visibility into every call",
    subtitle: "Call activity logged and visible to you",
  },
];

export default function About() {
  return (
    <section className="bg-base-100 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
            WHO WE ARE
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
            Built by people who understand outbound.
          </h2>

          <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
            <p>
              Most businesses that try appointment setting fail — not because the
              model doesn&apos;t work, but because managing a setter becomes a
              full-time job on its own.
            </p>
            <p className="font-semibold text-secondary">
              That&apos;s the problem we built Frontline Setters to solve.
            </p>
            <p>
              We recruit top-performing offshore setters, train them to represent
              your brand, and manage their day-to-day performance through
              AfterMeet — our live workspace that gives you full visibility
              without requiring your involvement.
            </p>
            <p>
              You don&apos;t manage the setter. You don&apos;t chase call
              reports. You don&apos;t babysit anyone. You just show up to the
              meetings we fill.
            </p>
          </div>
        </div>

        {/* Right column — stats */}
        <div className="stats stats-vertical shadow-lg bg-base-100 border border-base-300 w-full">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <div className="stat-value text-primary">{stat.value}</div>
              <div className="stat-title text-base mt-1">{stat.label}</div>
              <div className="stat-desc text-sm text-base-content/60 mt-0.5">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
