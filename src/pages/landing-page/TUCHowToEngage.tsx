import React from "react";

const engagementSteps = [
  {
    title: "Observe",
    content:
      "Explore how the system works. Read, follow progress, and get oriented without creating an account or committing to anything.",
    color: "bg-deep-blue",
  },
  {
    title: "Contribute",
    content:
      "Share ideas, insights, or feedback when you have something useful to add. Contributions can be small, early, or unfinished.",
    color: "bg-purple-500",
  },
  {
    title: "Collaborate",
    content:
      "Work with others on active ideas or projects when alignment and capacity make sense. Collaboration is intentional, not assumed.",
    color: "bg-orange-400",
  },
  {
    title: "Remix",
    content:
      "Build on existing ideas, projects, or components to adapt them for new contexts or needs. Reuse and improvement are encouraged.",
    color: "bg-deep-blue",
  },
  {
    title: "No obligation. No pressure.",
    content:
      "Engage at your own pace, in the way that fits your time, energy, and interest.",
    color: "bg-purple-500",
  },
];

const TUCHowToEngage: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="engage">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-gray mb-4">
            How You Can Engage
          </h2>
          <div className="w-24 h-1 bg-deep-blue mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {engagementSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-start mb-12 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline marker */}
                <div className="shrink-0 flex items-start justify-center sm:w-12">
                  <div className="w-4 h-4 rounded-full bg-deep-blue mt-2"></div>
                  <div className="hidden sm:block flex-1 h-full border-l border-gray-300 mx-auto"></div>
                </div>

                {/* Card */}
                <div
                  className={`mt-4 sm:mt-0 sm:mx-6 p-6 rounded-2xl shadow-lg ${step.color} text-white max-w-xl`}
                >
                  <h3 className="font-serif font-semibold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm leading-7">{step.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TUCHowToEngage;
