const CALENDLY_URL = "https://calendly.com/jogope8/30min";

const plans = [
  {
    name: "Part Time Setter",
    price: "$1,700",
    description:
      "Perfect for businesses with focused lead lists or testing outbound for the first time.",
    features: [
      "4 hours of calling per day",
      "100-200 outbound calls per day",
      "10-20 booked appointments per month",
      "Live dashboard included",
      "Dedicated setter — yours only",
      "Weekly performance summary",
      "Cancel with 30 days notice",
      "No setup fees",
    ],
    popular: false,
    ctaClass: "btn btn-outline btn-primary btn-block",
  },
  {
    name: "Full Time Setter",
    price: "$2,500",
    description:
      "Maximum output for businesses ready to scale their pipeline aggressively.",
    features: [
      "8 hours of calling per day",
      "200-400 outbound calls per day",
      "20-40 booked appointments per month",
      "Live dashboard included",
      "Dedicated setter — yours only",
      "Weekly performance summary",
      "Cancel with 30 days notice",
      "No setup fees",
    ],
    popular: true,
    ctaClass: "btn btn-primary btn-block",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-base-200 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
          SIMPLE PRICING
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
          No surprises. No hidden fees.
          <br />
          Cancel anytime.
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
          Flat monthly rate. Your setter is dedicated to your business only. No
          shared resources, no volume games.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto items-start">
          {plans.map((plan) => {
            const cardContent = (
              <div className={`card shadow-lg h-full ${
                plan.popular
                  ? "bg-base-200"
                  : "bg-base-100 border border-base-300"
              }`}>
                <div className="card-body">
                  <h3 className={`text-xl font-bold ${
                    plan.popular ? "text-secondary" : "text-secondary/80"
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="mt-2">
                    <span className="text-4xl font-extrabold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-500 mt-2">{plan.description}</p>

                  <ul className="mt-6 space-y-3 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-success mt-0.5 flex-shrink-0">✅</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-actions mt-8">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={plan.ctaClass}
                    >
                      Book intro call →
                    </a>
                  </div>
                </div>
              </div>
            );

            if (plan.popular) {
              return (
                <div key={plan.name} className="relative">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    Best Value
                  </span>
                  <div className="p-[2px] bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                    {cardContent}
                  </div>
                </div>
              );
            }

            return (
              <div key={plan.name} className="relative">
                {cardContent}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-gray-500 text-sm max-w-2xl mx-auto">
          All plans include onboarding, setter training, script development, and
          full dashboard setup. No contracts. No hidden fees.
        </p>
      </div>
    </section>
  );
}
