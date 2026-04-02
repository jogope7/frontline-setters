const CALENDLY_URL = "https://calendly.com/jogope8/30min";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a3d] text-white/70 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div>
          <h3 className="text-white font-bold text-lg">Frontline Setters</h3>
          <p className="mt-2 text-sm">
            Appointments. Accountability. Results.
          </p>
        </div>

        {/* Center */}
        <div className="flex flex-col gap-2 md:items-center">
          <a href="#how-it-works" className="hover:text-white transition-colors text-sm">
            How it works
          </a>
          <a href="#pricing" className="hover:text-white transition-colors text-sm">
            Pricing
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-sm"
          >
            Book a call
          </a>
        </div>

        {/* Right */}
        <div className="md:text-right">
          <p className="text-sm">© 2026 Frontline Setters</p>
          <p className="text-sm mt-1">
            Powered by{" "}
            <a
              href="https://www.aftermeet.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors underline"
            >
              AfterMeet
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-4 text-center">
        <p className="text-sm text-white/40">
          Powered by{" "}
          <a
            href="https://www.aftermeet.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors underline"
          >
            AfterMeet
          </a>
          {" "}· Live appointment setting dashboards
        </p>
      </div>
    </footer>
  );
}
