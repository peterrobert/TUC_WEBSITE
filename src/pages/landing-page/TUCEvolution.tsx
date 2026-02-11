import React from "react";

const evolutionPoints = [
  {
    title: "Small Core Team",
    content:
      "A small core team responsible for coherence, continuity, and long-term integrity",
    color: "bg-deep-blue",
  },
  {
    title: "AlphaBeta Contributors",
    content:
      "Hundreds of AlphaBeta contributors who influenced TUC through pilots, discussions, and early experiments",
    color: "bg-purple-500",
  },
  {
    title: "Organic Contributions",
    content:
      "Contributions made both knowingly and unknowingly through real-world engagement",
    color: "bg-orange-400",
  },
  {
    title: "Patience Over Hype",
    content:
      "Participation remains voluntary, self-motivated, and paced to respect real human capacity",
    color: "bg-deep-blue",
  },
];

const TUCEvolution: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="how-tuc-evolved">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-gray mb-4">
            🌱 How TUC Evolved
          </h2>
          <div className="w-24 h-1 bg-deep-blue mx-auto"></div>
        </div>

        <div className="relative">
          {evolutionPoints.map((point, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-start mb-12 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="shrink-0 flex items-center justify-center sm:w-12">
                  <div className="w-4 h-4 rounded-full bg-deep-blue mt-1 sm:mt-0"></div>
                  <div className="hidden sm:block flex-1 h-full border-l border-gray-300 mx-auto"></div>
                </div>

                {/* Card */}
                <div
                  className={`mt-4 sm:mt-0 sm:mx-6 p-6 rounded-2xl shadow-lg ${point.color} text-white max-w-xl`}
                >
                  <h3 className="font-serif font-semibold text-lg mb-2">
                    {point.title}
                  </h3>
                  <p className="font-sans text-sm leading-7">{point.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TUCEvolution;
