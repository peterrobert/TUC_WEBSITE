type Choice = {
  title: string;
  description: string;
};

const choices: Choice[] = [
  {
    title: "Be Better Together",
    description:
      "The world isn’t short on good ideas. It’s short on systems that let them work together.",
  },
  {
    title: "Don’t Waste It",
    description:
      "The problem isn’t that people don’t care. It’s that caring has nowhere reliable to go.",
  },
  {
    title: "Make It Count",
    description:
      "A lot of people are doing their best. The system around them isn’t.",
  },
];

export default function TUCChoiceSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      {/* Choices */}
      <div className="space-y-10">
        {choices.map((choice) => (
          <div
            key={choice.title}
            className="rounded-2xl border border-gray-200 p-6"
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              {choice.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {choice.description}
            </p>
          </div>
        ))}
      </div>

      {/* Closing */}
    </section>
  );
}
