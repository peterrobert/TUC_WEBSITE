const RankingFlowSection = () => {
  return (
    <section
      id="sys-top10-ranking-flow"
      className="py-14 sm:py-16 md:py-20 bg-white border-y border-cool-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block px-3 py-1 bg-light-gray rounded text-[11px] sm:text-xs font-medium text-medium-gray mb-2 sm:mb-4">
            Process Flow
          </div>
          <h2 className="font-serif font-bold text-dark-gray text-[clamp(1.75rem,4vw,2.5rem)]">
            How The Ranking Engine Works
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-6 lg:gap-4">
          {/* Step 1 */}
          <div className="flex-1 bg-pale-blue p-6 sm:p-8 rounded-lg border border-cool-gray">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-deep-blue rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
              Contribution Signals
            </h3>
            <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
              Tracks participation depth, collaboration activity, and progress
              milestones
            </p>
            <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Participation depth</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Collaboration activity</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Progress milestones</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center px-2">
            <i className="fa-solid fa-arrow-right text-3xl text-deep-blue"></i>
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-pale-blue p-6 sm:p-8 rounded-lg border border-cool-gray">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-deep-blue rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
              Engagement Signals
            </h3>
            <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
              Measures interaction, feedback quality, and remix involvement
            </p>
            <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Quality interactions</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Feedback value</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Remix participation</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center px-2">
            <i className="fa-solid fa-arrow-right text-3xl text-deep-blue"></i>
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-pale-blue p-6 sm:p-8 rounded-lg border border-cool-gray">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-deep-blue rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
              Weighted Scoring
            </h3>
            <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
              Combines multiple inputs into a dynamic ranking score
            </p>
            <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Multi-signal analysis</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Dynamic weighting</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Context awareness</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center px-2">
            <i className="fa-solid fa-arrow-right text-3xl text-deep-blue"></i>
          </div>

          {/* Step 4 */}
          <div className="flex-1 bg-pale-blue p-6 sm:p-8 rounded-lg border border-cool-gray">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-cyan rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
              Live Updates
            </h3>
            <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
              Rankings evolve continuously instead of remaining static
            </p>
            <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Real-time processing</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Continuous evolution</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-medium-gray">
                <i className="fa-solid fa-check text-dark-cyan"></i>
                <span>Active responsiveness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingFlowSection;
