// type DifferenceItem = {
//   title: string;
//   description: string;
// };

// type WhatMakesDifferentSectionData = {
//   whatMakesDifferentData: {
//     sectionTitle: string;
//     sectionSubtitle: string;
//     highlightTitle: string;
//     highlightDescription: string;
//     items: DifferenceItem[];
//   };
// };

const WhatMakesDifferentSection = () => {
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
            TUC is guided by principles of access, transparency, non-extraction,
            and long-term sustainability embedded directly into how the system
            is designed and operated. These aren’t aspirations or marketing
            copy. They are architectural decisions baked into how the system
            works designed to address the structural failures common in
            platforms, startups, nonprofits, and marketplaces.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-10 lg:mb-12">
          {[
            {
              title: "No Extraction",
              text: "Value flows to contributors, not toward extraction as a primary goal. The system is designed to support creators and participants rather than monetize attention or unpaid labor. Everyone goes through the same door and operates under the same shared guidelines—Vision, Mission, Core Values, and Principles—to ensure equitable, durable access and accountability.",
            },
            {
              title: "No Fake Scale",
              text: "Growth happens at the pace real capacity and bandwidth allow. There are no artificial growth targets, forced performance, or pressure to scale before the system is ready. Risk is treated as an opportunity for learning, but unnecessary risk is intentionally avoided.",
            },
            {
              title: "Transparency by Default",
              text: " Decisions, changes, and reasoning are documented and visible. There are no hidden agendas or opaque processes. This transparency is intentional—showing how shared visibility and accountability can increase engagement and improve the Efficiency of Things (EoT) and Value of Things (VoT).",
            },
            {
              title: "Remixability",
              text: " Projects and components are accessible and tailorable so they can be adapted, reused, and improved over time. The focus is on building shared infrastructure, not closed or walled systems.",
            },
            {
              title: "Measurable Impact",
              text: "Success is defined by inclusive participation and real, durable outcomes—not vanity metrics, hype cycles, or raw user counts.",
            },
            {
              title: "Long-Term, Forward-Looking Design",
              text: " The system is built for decades, not quarters. Decisions prioritize sustainability, resilience, and learning over short-term gains.",
            },
            {
              title: "Uncorruptable by Design",
              text: "These principles are not enforced through goodwill or policy alone—they are embedded in the system’s structure. Attribution is tracked, so value cannot be extracted without contribution. Decisions are visible, so they cannot be hidden. Scale is tied to real capacity, preventing irresponsible growth. The design reduces the ability to be corrupted rather than relying on trust or enforcement after the fact.",
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
