const problems = [
  {
    icon: "💬",
    title: "Hiring takes weeks",
    body: "Job posts, interviews, test calls, drop-offs. You spend more time hiring than selling.",
  },
  {
    icon: "🕐",
    title: "Training never ends",
    body: "Scripts, objection handling, follow-up sequences. Who has time to coach a setter every day?",
  },
  {
    icon: "❓",
    title: "Performance is a mystery",
    body: "Is your setter actually working? Making enough calls? You have no idea until it's too late.",
  },
  {
    icon: "💸",
    title: "You become the manager",
    body: "Instead of closing deals, you're babysitting someone who's supposed to be filling your calendar.",
  },
];

export default function Problem() {
  return (
    <section className="bg-base-200 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
          THE PROBLEM
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
          You hired a setter. Now what?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {problems.map((p) => (
            <div key={p.title} className="card bg-base-100 shadow-md">
              <div className="card-body items-center text-center">
                <div className="text-3xl mb-2">{p.icon}</div>
                <h3 className="card-title text-lg font-bold justify-center">{p.title}</h3>
                <p className="text-gray-500">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg md:text-xl font-bold text-secondary">
          Every other appointment setting agency makes this your problem. We don&apos;t.
        </p>
      </div>
    </section>
  );
}
