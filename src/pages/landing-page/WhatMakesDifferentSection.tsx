type DifferenceItem = {
  title: string;
  description: string;
};

type WhatMakesDifferentSectionData = {
  whatMakesDifferentData: {
    sectionTitle: string;
    sectionSubtitle: string;
    highlightTitle: string;
    highlightDescription: string;
    items: DifferenceItem[];
  };
};

const WhatMakesDifferentSection = ({
  whatMakesDifferentData,
}: WhatMakesDifferentSectionData) => {
  console.log(whatMakesDifferentData);
  return (
    <section
      id="what-makes-different-section"
      className="py-12 px-4 sm:px-6 md:px-8 lg:py-20 bg-white border-y border-cool-gray"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-3 sm:mb-4">
            What Makes TUC Different
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-dark-cyan mx-auto mb-4 sm:mb-6"></div>

          <p className="text-base sm:text-lg text-medium-gray max-w-3xl mx-auto">
            These aren't aspirations or marketing copy. They're architectural
            decisions baked into how the system works.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-10 lg:mb-12">
          {[
            {
              title: "No Extraction",
              text: "Value flows to contributors, not investors. The system is designed to support creators, not extract from them.",
            },
            {
              title: "No Fake Scale",
              text: "We grow at the pace our capacity allows. No artificial growth targets or pressure to scale before we're ready.",
            },
            {
              title: "Transparency by Default",
              text: "Decisions, changes, and reasoning are documented and visible. No hidden agendas or opaque processes.",
            },
            {
              title: "Remixability",
              text: "Projects and components can be adapted and reused. We're building infrastructure, not walled gardens.",
            },
            {
              title: "Measurable Impact",
              text: "Success is defined by real outcomes, not vanity metrics or user counts.",
            },
            {
              title: "Long-term Thinking",
              text: "Built for decades, not quarters. Decisions prioritize sustainability over short-term gains.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-pale-blue border-l-4 border-deep-blue p-5 sm:p-6 lg:p-8"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <i className="fa-solid fa-circle-check text-deep-blue text-xl sm:text-2xl mt-1"></i>

                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div className="bg-deep-blue text-white rounded-lg p-6 sm:p-8 lg:p-10">
          <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-center">
            Anti-Corruption by Design
          </h3>

          <p className="text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto">
            These principles aren't enforced through goodwill or policy
            documents. They're embedded in the system's architecture. You can't
            extract value you didn't create because attribution is tracked. You
            can't hide decisions because transparency is the default. You can't
            scale irresponsibly because the system requires genuine capacity.
            The structure prevents corruption, not just discourages it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferentSection;
