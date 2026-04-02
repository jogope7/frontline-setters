const CALENDLY_URL = "https://calendly.com/jogope8/30min";

export default function FinalCTA() {
  return (
    <section className="bg-[#0F2557] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-accent mb-2 block">
          READY TO SCALE?
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Stop managing. Start closing.
        </h2>

        <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          We recruit, train, and manage your setter — and keep your pipeline
          full while you focus on what you do best.
        </p>

        <div className="mt-8">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Book your free strategy call →
          </a>
        </div>

        <p className="mt-6 text-white/40 text-sm">
          No commitment · Spots are limited · Setup in 48 hours
        </p>
      </div>
    </section>
  );
}
