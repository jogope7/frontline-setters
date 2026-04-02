import Image from "next/image";

const features = [
  {
    title: "We monitor your setter daily",
    body: "Live call status, volume, and performance tracked for you — so you never have to check in.",
  },
  {
    title: "Every call logged automatically",
    body: "AI transcribes and summarizes every call. Full record, zero admin work on your end.",
  },
  {
    title: "We catch problems before you do",
    body: "If call volume drops or quality slips, we see it in real time and fix it. You find out when it's resolved — not when it's already cost you.",
  },
  {
    title: "Your pipeline runs without you",
    body: "Meetings book while you're on calls, in meetings, or offline. Your setter is working. We're watching. You're closing.",
  },
];

const pills = [
  "✅ Every call logged automatically",
  "✅ Pipeline updating in real time",
  "✅ AI meeting brief after every booking",
];

export default function Difference() {
  return (
    <section className="bg-[#0F2557] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-2 block">
            THE DIFFERENCE
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            You don&apos;t just get a setter.
            <br />
            You get full visibility into
            <br className="hidden md:block" />
            everything they do.
          </h2>

          <p className="mt-4 text-lg text-white/60 max-w-3xl mx-auto">
            Every Frontline Setters client gets access to a live workspace — the
            only platform built specifically for businesses that hire remote
            appointment setters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Feature list */}
          <div className="space-y-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{f.title}</h3>
                  <p className="text-white/60 mt-1 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard screenshot */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <div className="bg-white/10 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-4">
                <div className="bg-white/10 rounded-md h-5 max-w-xs mx-auto" />
              </div>
            </div>
            <Image
              src="/screenshots/live-view.png"
              alt="AfterMeet live appointment setting dashboard"
              width={1024}
              height={700}
              className="w-full h-auto"
            />
            <p className="text-white/40 text-sm text-center py-3 bg-[#0a1a3d]">
              This is what you see while your setter is working.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {pills.map((pill) => (
            <span
              key={pill}
              className="badge badge-lg bg-white/10 border-white/20 text-white font-medium"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
