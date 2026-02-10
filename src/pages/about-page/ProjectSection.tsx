const ProjectSection = () => {
  return (
    <section
      id="the-project-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
            The Project
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-deep-blue mb-6 sm:mb-8 mx-auto"></div>
        </div>

        <div className="bg-white border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-12 mb-8 sm:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-dark-gray mb-4 sm:mb-6">
            Long-term Purpose
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-medium-gray leading-relaxed mb-4 sm:mb-6">
            TUC exists to solve a fundamental coordination problem: talented
            people have ideas, organizations need those ideas, but the gap
            between having an idea and seeing it implemented is vast. We're
            building infrastructure that makes collaboration less extractive,
            more transparent, and genuinely useful.
          </p>
          <p className="text-base sm:text-lg md:text-lg text-medium-gray leading-relaxed mb-4 sm:mb-6">
            This isn't a quick fix or a temporary solution. We're creating a
            system designed to last decades, not quarters. The architecture
            prioritizes sustainability over growth, clarity over complexity, and
            contributor welfare over investor returns.
          </p>
          <p className="text-base sm:text-lg md:text-lg text-medium-gray leading-relaxed">
            Our purpose is simple: help good ideas find the resources, people,
            and momentum they need to become real. Everything else—the features,
            the technology, the organizational structure—serves that goal.
          </p>
        </div>

        <div className="bg-deep-blue text-white rounded-lg p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-4 sm:mb-6">
            Integrity-First Philosophy
          </h3>
          <p className="text-base sm:text-lg md:text-lg leading-relaxed mb-4 sm:mb-6">
            Integrity isn't a value we aspire to—it's an architectural
            constraint. The system is designed so that extraction, opacity, and
            unfair attribution are structurally difficult or impossible, not
            just discouraged.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div className="bg-pale-blue rounded-lg p-4 sm:p-6 border border-cool-gray">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-shield-halved text-deep-blue text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-dark-gray">
                    No Shortcuts
                  </h4>
                  <p className="text-medium-gray text-sm sm:text-base">
                    We don't compromise principles for speed. If a feature would
                    undermine integrity, we don't build it—regardless of market
                    pressure or competitive dynamics.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pale-blue rounded-lg p-4 sm:p-6 border border-cool-gray">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-eye text-deep-blue text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-dark-gray">
                    Radical Transparency
                  </h4>
                  <p className="text-medium-gray text-sm sm:text-base">
                    Decisions, reasoning, and changes are documented publicly.
                    If we can't explain why we did something, we probably
                    shouldn't have done it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pale-blue rounded-lg p-4 sm:p-6 border border-cool-gray">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-handshake text-deep-blue text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-dark-gray">
                    Fair Attribution
                  </h4>
                  <p className="text-medium-gray text-sm sm:text-base">
                    Credit flows to those who create value. The system tracks
                    contributions and ensures recognition isn't controlled by
                    gatekeepers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pale-blue rounded-lg p-4 sm:p-6 border border-cool-gray">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-clock text-deep-blue text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-dark-gray">
                    Patient Building
                  </h4>
                  <p className="text-medium-gray text-sm sm:text-base">
                    We build at the pace our capacity allows. No artificial
                    urgency, no pressure to scale before we're ready, no
                    compromising quality for speed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white border-opacity-20 mt-6 sm:mt-10 pt-4 sm:pt-8">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed italic">
              "Integrity means the system works the way we say it does, even
              when no one is watching, even when shortcuts would be easier, even
              when the pressure to compromise is intense."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
