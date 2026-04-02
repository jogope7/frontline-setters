import Image from "next/image";

const CALENDLY_URL = "https://calendly.com/jogope8/30min";

export default function Hero() {
  return (
    <section>
      <div className="bg-base-100 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight tracking-tight">
            We handle your appointment setting.
            <br className="hidden md:block" />
            <span className="text-primary"> You just show up to meetings.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We <strong className="text-secondary">recruit, train, and manage</strong> a
            dedicated offshore setter — fully bilingual, trained on your offer —
            and handle everything it takes to keep your pipeline full. You get a
            live dashboard to watch it happen. No managing. No chasing. No guessing.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg px-8 py-4 font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all"
            >
              Book a free intro call →
            </a>
            <a href="#how-it-works" className="btn btn-ghost border border-base-300 font-medium">
              See how it works
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>✓ 15-min call · no commitment</span>
            <span>✓ Live dashboard included</span>
            <span>✓ Setup in 48 hours</span>
          </div>
        </div>
      </div>

      <div className="bg-[#0F2557] py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-white text-xl md:text-2xl font-bold mb-6">
            Your live dashboard — see everything in real time
          </h2>
          <div className="rounded-xl shadow-2xl overflow-hidden border border-white/10">
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
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
