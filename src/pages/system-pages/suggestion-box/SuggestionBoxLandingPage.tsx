const SuggestionBoxLandingPage = () => {
  return (
    <>
      {/* --- Hero Section --- */}
      <section id="hero-section" className="bg-white border-b border-cool-gray">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-light-surface rounded-full text-[10px] sm:text-xs font-semibold text-deep-blue uppercase tracking-wider mb-4 sm:mb-6">
              Documentation
            </div>

            <h1 className="font-serif font-bold text-dark-text leading-tight mb-4 sm:mb-6 text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4rem]">
              TUC Suggestion Box
            </h1>

            <p className="text-deep-blue font-semibold mb-4 sm:mb-6 text-xl sm:text-2xl md:text-2xl">
              The World's Most Connected Suggestion Box
            </p>

            <p className="text-medium-text mb-4 sm:mb-6 text-base sm:text-lg md:text-lg leading-relaxed max-w-3xl mx-auto">
              Transforms feedback into action. Hyper-dynamic, trustless, and
              regenerative — empowers communities to submit, evaluate, and
              evolve ideas.
            </p>

            <p className="text-medium-text italic text-sm sm:text-base md:text-base">
              Not just a suggestion box — a transparent engine for engagement,
              collaboration, and global impact.
            </p>
          </div>
        </div>
      </section>

      {/* --- The Problem ---- */}
      <section id="problem-statement" className="py-14 sm:py-16 md:py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/** Left Column: Text & Tags **/}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-dark-text mb-4 sm:mb-6">
                Why Traditional Suggestion Boxes Fail
              </h2>

              <div className="prose prose-sm sm:prose-lg text-medium-text leading-relaxed space-y-4">
                <p>
                  Traditional suggestion boxes are limited: low accessibility,
                  ineffective functionality, and lack of anonymity. Valuable
                  ideas often go unseen, and participation can be biased or
                  suppressed.
                </p>
                <p className="font-semibold text-dark-text">
                  TUC Suggestion Box solves this with trustless, regenerative
                  feedback loops, real-time engagement, AI-powered analytics,
                  and permissionless participation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-3 sm:px-4 py-2 bg-light-surface rounded-lg text-xs sm:text-sm font-medium text-dark-text flex items-center">
                  <i className="fa-solid fa-lock-open text-dark-cyan mr-2"></i>{" "}
                  Trustless
                </span>
                <span className="px-3 sm:px-4 py-2 bg-light-surface rounded-lg text-xs sm:text-sm font-medium text-dark-text flex items-center">
                  <i className="fa-solid fa-recycle text-dark-cyan mr-2"></i>{" "}
                  Regenerative
                </span>
                <span className="px-3 sm:px-4 py-2 bg-light-surface rounded-lg text-xs sm:text-sm font-medium text-dark-text flex items-center">
                  <i className="fa-solid fa-bolt text-dark-cyan mr-2"></i>{" "}
                  Real-time
                </span>
                <span className="px-3 sm:px-4 py-2 bg-light-surface rounded-lg text-xs sm:text-sm font-medium text-dark-text flex items-center">
                  <i className="fa-solid fa-brain text-dark-cyan mr-2"></i>{" "}
                  AI-Powered
                </span>
              </div>
            </div>

            {/** Right Column: Flow Diagram **/}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 border border-cool-gray shadow-sm">
              <div className="space-y-6 sm:space-y-8">
                {/** Step 1: Input **/}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-deep-blue flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-lightbulb text-white text-xl sm:text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-deep-blue rounded-full mb-1 sm:mb-2"></div>
                    <div className="text-xs sm:text-sm text-medium-text font-medium">
                      INPUT
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <i className="fa-solid fa-arrow-down text-2xl sm:text-3xl text-cool-gray"></i>
                </div>

                {/** Step 2: Processing **/}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-dark-cyan flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-cogs text-white text-xl sm:text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-dark-cyan rounded-full mb-1 sm:mb-2"></div>
                    <div className="text-xs sm:text-sm text-medium-text font-medium">
                      PROCESSING
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <i className="fa-solid fa-arrow-down text-2xl sm:text-3xl text-cool-gray"></i>
                </div>

                {/** Step 3: Evaluation **/}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-deep-blue flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-chart-line text-white text-xl sm:text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-deep-blue rounded-full mb-1 sm:mb-2"></div>
                    <div className="text-xs sm:text-sm text-medium-text font-medium">
                      EVALUATION
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <i className="fa-solid fa-arrow-down text-2xl sm:text-3xl text-cool-gray"></i>
                </div>

                {/** Step 4: Action **/}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-dark-cyan flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-rocket text-white text-xl sm:text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-dark-cyan rounded-full mb-1 sm:mb-2"></div>
                    <div className="text-xs sm:text-sm text-medium-text font-medium">
                      ACTION
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- System defination ---- */}
      <section
        id="system-definition"
        className="py-14 sm:py-16 md:py-20 bg-white border-y border-cool-gray"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            {/** Section Heading **/}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-dark-text text-center mb-6 sm:mb-8">
              What Is TUC Suggestion Box?
            </h2>

            {/** Card Container **/}
            <div className="bg-light-surface rounded-2xl p-6 sm:p-8 md:p-10 space-y-6">
              <p className="text-base sm:text-lg text-medium-text leading-relaxed">
                A regenerative feedback system that converts community input
                into actionable insights:
              </p>

              <ul className="space-y-4">
                {[
                  "Multi-channel feedback loop",
                  "Collaboration and discussion tools",
                  "Dashboard, reporting, and analytics",
                  "Customizable interface",
                  "Integration with the TUC platform",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fa-solid fa-check-circle text-dark-cyan text-lg sm:text-xl mr-3 sm:mr-4 mt-1"></i>
                    <span className="text-sm sm:text-medium-text">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 sm:pt-6 border-t border-cool-gray">
                <p className="text-sm sm:text-base text-dark-text font-semibold italic">
                  Functions as a dynamic, transparent discovery engine where
                  suggestions can evolve into projects or initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="eligible-content" className="py-14 sm:py-16 md:py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12">
          {/** Section Heading **/}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-dark-text text-center mb-4">
            What Can Be Submitted
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-medium-text mb-12 max-w-2xl mx-auto">
            Each entry can operate independently while feeding into the global
            Suggestion Box ecosystem.
          </p>

          {/** Content Cards Grid **/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/** Card 1 **/}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-cool-gray hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6">
                <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
                Ideas & Proposals
              </h3>
              <p className="text-sm sm:text-base text-medium-text leading-relaxed">
                Community-submitted concepts and solutions
              </p>
            </div>

            {/** Card 2 **/}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-cool-gray hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6">
                <i className="fa-solid fa-tasks text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
                Active Projects
              </h3>
              <p className="text-sm sm:text-base text-medium-text leading-relaxed">
                Initiatives derived from suggestions
              </p>
            </div>

            {/** Card 3 **/}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-cool-gray hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6">
                <i className="fa-solid fa-sync-alt text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
                Remixed Suggestions
              </h3>
              <p className="text-sm sm:text-base text-medium-text leading-relaxed">
                Evolved or improved versions of existing ideas
              </p>
            </div>

            {/** Card 4 **/}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-cool-gray hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6">
                <i className="fa-solid fa-flask text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
                Challenges & Experiments
              </h3>
              <p className="text-sm sm:text-base text-medium-text leading-relaxed">
                Short-term or long-term collaborative activities
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="suggestion-flow"
        className="py-14 sm:py-16 md:py-20 bg-white border-y border-cool-gray"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12">
          {/** Section Heading **/}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-dark-text text-center mb-12 sm:mb-16">
            How Suggestions Are Processed
          </h2>

          {/** Flow Steps Grid **/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {/** Step 1 **/}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-24 h-24 rounded-full bg-deep-blue flex items-center justify-center mb-4 sm:mb-6">
                <i className="fa-solid fa-paper-plane text-white text-3xl"></i>
              </div>
              <div className="bg-light-surface rounded-xl p-4 sm:p-6 min-h-[180px] w-full">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
                  Idea Submission
                </h3>
                <p className="text-sm sm:text-base text-medium-text leading-relaxed">
                  Collects input from multiple channels, anonymous or identified
                </p>
              </div>
            </div>

            {/** Step 2 **/}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-24 h-24 rounded-full bg-dark-cyan flex items-center justify-center mb-4 sm:mb-6">
                <i className="fa-solid fa-comments text-white text-3xl"></i>
              </div>
              <div className="bg-light-surface rounded-xl p-4 sm:p-6 min-h-[180px] w-full">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
                  Engagement & Evaluation
                </h3>
                <p className="text-sm sm:text-base text-medium-text leading-relaxed">
                  Tracks interactions, votes, comments, and AI-powered sentiment
                  analysis
                </p>
              </div>
            </div>

            {/** Step 3 **/}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-24 h-24 rounded-full bg-deep-blue flex items-center justify-center mb-4 sm:mb-6">
                <i className="fa-solid fa-star text-white text-3xl"></i>
              </div>
              <div className="bg-light-surface rounded-xl p-4 sm:p-6 min-h-[180px] w-full">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
                  Priority & Spotlighting
                </h3>
                <p className="text-sm sm:text-base text-medium-text leading-relaxed">
                  High-value or new suggestions are highlighted automatically
                </p>
              </div>
            </div>

            {/** Step 4 **/}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-24 h-24 rounded-full bg-dark-cyan flex items-center justify-center mb-4 sm:mb-6">
                <i className="fa-solid fa-rocket text-white text-3xl"></i>
              </div>
              <div className="bg-light-surface rounded-xl p-4 sm:p-6 min-h-[180px] w-full">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
                  Action & Follow-up
                </h3>
                <p className="text-sm sm:text-base text-medium-text leading-relaxed">
                  Suggestions can evolve into projects, experiments, or
                  initiatives with visible progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="regenerative-model" className="py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="bg-gradient-to-br from-deep-blue to-dark-cyan rounded-3xl p-8 sm:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              {/* Section Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-8 text-center">
                Designed To Evolve
              </h2>

              {/* Grid of Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-seedling text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 sm:mb-2">
                      New suggestions gain initial visibility
                    </h3>
                    <p className="text-white text-opacity-90 text-sm sm:text-base">
                      Fresh ideas are prioritized to ensure they receive
                      attention
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-hourglass-half text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 sm:mb-2">
                      Inactive suggestions decay over time
                    </h3>
                    <p className="text-white text-opacity-90 text-sm sm:text-base">
                      Low-engagement ideas naturally fade to make room for
                      active ones
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-chart-line text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 sm:mb-2">
                      Continuous evaluation ensures high-value ideas surface
                    </h3>
                    <p className="text-white text-opacity-90 text-sm sm:text-base">
                      Real-time analytics identify impactful suggestions
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-code-branch text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 sm:mb-2">
                      Suggestions can be remixed or adapted
                    </h3>
                    <p className="text-white text-opacity-90 text-sm sm:text-base">
                      Ideas evolve into larger initiatives through collaboration
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center pt-6 border-t border-white border-opacity-20">
                <p className="text-lg italic">
                  Keeps the system responsive, active, and fair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuggestionBoxLandingPage;
