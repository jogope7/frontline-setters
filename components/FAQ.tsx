"use client";

const faqs = [
  {
    question: "What industries do your setters work in?",
    answer:
      "Our setters have experience across SaaS, real estate, financial services, coaching, consulting, and professional services. During your intro call we'll confirm your industry is a good fit before moving forward.",
  },
  {
    question: "What do I need to provide to get started?",
    answer:
      "A lead list and a brief overview of your offer. We handle everything else — setter assignment, training, script development, and full workspace setup.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most clients are live within 48-72 hours of signing. Your setter starts dialing as soon as your workspace is configured and your lead list is uploaded.",
  },
  {
    question: "What if my setter isn't performing?",
    answer:
      "You'll know immediately — you can see their activity in real time through your dashboard. If performance is consistently below expectations we replace the setter at no additional cost.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. We require 30 days notice to cancel. No long term contracts, no cancellation fees, no awkward conversations.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-base-200 py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
          COMMON QUESTIONS
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-10">
          Everything you need to know.
        </h2>

        <div className="space-y-3 text-left">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="collapse collapse-arrow bg-base-100 rounded-xl border border-base-300 px-2 [&:has(input:checked)]:border-l-4 [&:has(input:checked)]:border-l-primary"
            >
              <input type="radio" name="faq-accordion" defaultChecked={i === 0} />
              <div className="collapse-title text-lg font-bold text-secondary">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
