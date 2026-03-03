const EcosystemSection = () => {
  return (
    <section
      id="sys-top10-ecosystem"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white border-y border-cool-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-light-gray rounded text-[10px] sm:text-xs font-medium text-medium-gray mb-4">
            System Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-gray mb-4 leading-tight">
            How Top10 Connects Inside TUC
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-medium-gray max-w-xl sm:max-w-2xl mx-auto">
            The Top10 System integrates with multiple TUC components to create a
            cohesive collaboration ecosystem
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center mb-10 sm:mb-12 md:mb-16">
            <div className="bg-linear-to-br from-deep-blue to-dark-cyan p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-ranking-star text-deep-blue text-2xl sm:text-3xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  Top10 System
                </h3>
                <p className="text-xs sm:text-sm text-white text-opacity-80">
                  Central Ranking Engine
                </p>
              </div>
            </div>
          </div>

          <div className="text-medium-gray leading-relaxed space-y-4 text-xs sm:text-sm md:text-base max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto pb-6 text-center">
            <p className="pb-6 sm:pb-8">
              The primary output of the Top10 system is ordered visibility based
              on measurable contribution signals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <div className="bg-pale-blue p-5 sm:p-6 md:p-8 rounded-lg border-2 border-deep-blue">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-deep-blue rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-inbox text-white text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray text-sm sm:text-base">
                    Suggestion Box
                  </h4>
                  <p className="text-[10px] sm:text-xs text-medium-gray">
                    Idea Intake Layer
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-medium-gray">
                Feeds new ideas and proposals into the ranking system for
                evaluation
              </p>
            </div>

            <div className="bg-pale-blue p-5 sm:p-6 md:p-8 rounded-lg border-2 border-dark-cyan">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-cyan rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-diagram-project text-white text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray text-sm sm:text-base">
                    Project Systems
                  </h4>
                  <p className="text-[10px] sm:text-xs text-medium-gray">
                    Execution Layer
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-medium-gray">
                Tracks active project development and milestone completion
              </p>
            </div>

            <div className="bg-pale-blue p-5 sm:p-6 md:p-8 rounded-lg border-2 border-deep-blue">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-deep-blue rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-users-gear text-white text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray text-sm sm:text-base">
                    Collaboration Tools
                  </h4>
                  <p className="text-[10px] sm:text-xs text-medium-gray">
                    Interaction Layer
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-medium-gray">
                Monitors collaborative activities and team coordination
              </p>
            </div>

            <div className="bg-pale-blue p-5 sm:p-6 md:p-8 rounded-lg border-2 border-dark-cyan">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-cyan rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-chart-line text-white text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray text-sm sm:text-base">
                    Contribution Tracking
                  </h4>
                  <p className="text-[10px] sm:text-xs text-medium-gray">
                    Analytics Layer
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-medium-gray">
                Records individual and collective contribution metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
