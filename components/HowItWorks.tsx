const steps = [
  {
    title: "We handle setup",
    body: "We recruit and vet your setter, train them on your offer and scripts, and get them live in your AfterMeet workspace. You approve. We execute.",
  },
  {
    title: "We manage performance",
    body: "Your setter dials every day. We monitor call volume, quality, and results through AfterMeet — and course-correct before problems become problems.",
  },
  {
    title: "You show up to meetings",
    body: "Booked appointments land on your calendar. You close deals. We handle everything else.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-base-100 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
          HOW IT WORKS
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
          Three steps to a full pipeline.
        </h2>

        <ul className="steps steps-vertical lg:steps-horizontal w-full mt-12">
          {steps.map((step, i) => (
            <li key={step.title} className="step step-primary" data-content={i + 1}>
              <div className="text-left lg:text-center mt-4 lg:mt-6 max-w-xs">
                <h3 className="font-bold text-lg text-secondary">{step.title}</h3>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
