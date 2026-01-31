import { footerData } from "../../../data/footerData";
import Footer from "../../../layouts/Footer";

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
      {/* --- Regenerative Model ---- */}
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
                    <i className="fa-solid fa-seedling text-black text-2xl"></i>
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
                    <i className="fa-solid fa-hourglass-half text-black text-2xl"></i>
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
                    <i className="fa-solid fa-chart-line text-black text-2xl"></i>
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
                    <i className="fa-solid fa-code-branch text-black text-2xl"></i>
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

      <section
        id="collaboration-attribution"
        className="py-16 sm:py-20 bg-white border-y border-cool-gray"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text & Features */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text mb-6">
                Participation Without Ownership Conflict
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center mt-1">
                    <i className="fa-solid fa-user-check text-white"></i>
                  </div>
                  <p className="text-medium-text leading-relaxed">
                    Contributors retain credit for original suggestions
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center mt-1">
                    <i className="fa-solid fa-share-nodes text-white"></i>
                  </div>
                  <p className="text-medium-text leading-relaxed">
                    Remixes or improvements are shared and tracked
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center mt-1">
                    <i className="fa-solid fa-link text-white"></i>
                  </div>
                  <p className="text-medium-text leading-relaxed">
                    Transparent chains of contribution remain visible
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="bg-light-surface rounded-2xl p-6 sm:p-10">
              <div className="space-y-6 sm:space-y-8">
                {/* Original Idea */}
                <div className="flex justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-deep-blue mx-auto mb-3 flex items-center justify-center">
                      <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
                    </div>
                    <div className="text-xs font-semibold text-dark-text">
                      Original Idea
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <i className="fa-solid fa-arrow-down text-2xl text-cool-gray"></i>
                </div>

                {/* Remixes */}
                <div className="flex justify-center space-x-4 sm:space-x-6">
                  {["Remix A", "Remix B", "Remix C"].map((remix) => (
                    <div className="text-center" key={remix}>
                      <div className="w-16 h-16 rounded-full bg-dark-cyan mx-auto mb-2 flex items-center justify-center">
                        <i className="fa-solid fa-code-branch text-white text-xl"></i>
                      </div>
                      <div className="text-xs font-semibold text-dark-text">
                        {remix}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <i className="fa-solid fa-arrow-down text-2xl text-cool-gray"></i>
                </div>

                {/* Final Initiative */}
                <div className="flex justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-deep-blue mx-auto mb-3 flex items-center justify-center">
                      <i className="fa-solid fa-rocket text-white text-2xl"></i>
                    </div>
                    <div className="text-xs font-semibold text-dark-text">
                      Final Initiative
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="transparency-trust" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text mb-4">
              Designed For Clarity
            </h2>
            <p className="text-medium-text text-base sm:text-lg max-w-2xl mx-auto">
              Users understand why suggestions are prioritized or promoted.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Traceable History */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-deep-blue bg-opacity-10 mx-auto mb-6 flex items-center justify-center">
                <i className="fa-solid fa-history text-white text-3xl"></i>
              </div>
              <h3 className="font-semibold text-xl text-dark-text mb-3">
                Traceable Suggestion History
              </h3>
              <p className="text-medium-text text-sm leading-relaxed">
                Complete audit trail of every suggestion's journey from
                submission to action
              </p>
            </div>

            {/* Visible Evaluation */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-dark-cyan bg-opacity-10 mx-auto mb-6 flex items-center justify-center">
                <i className="fa-solid fa-eye text-white text-3xl"></i>
              </div>
              <h3 className="font-semibold text-xl text-dark-text mb-3">
                Visible Evaluation Criteria
              </h3>
              <p className="text-medium-text text-sm leading-relaxed">
                Clear metrics and spotlighting algorithms ensure transparency in
                prioritization
              </p>
            </div>

            {/* Auditable Decision Logs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-deep-blue bg-opacity-10 mx-auto mb-6 flex items-center justify-center">
                <i className="fa-solid fa-clipboard-check text-white text-3xl"></i>
              </div>
              <h3 className="font-semibold text-xl text-dark-text mb-3">
                Auditable Decision Logs
              </h3>
              <p className="text-medium-text text-sm leading-relaxed">
                Every decision point is recorded and accessible for community
                review
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="integrity-safeguards"
        className="py-16 sm:py-20 bg-white border-y border-cool-gray"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text text-center mb-12">
            Protecting System Fairness
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Automated Spotlighting */}
            <div className="bg-light-surface rounded-2xl p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-deep-blue flex items-center justify-center mb-4">
                <i className="fa-solid fa-magic text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg text-dark-text mb-2">
                Automated Spotlighting & Sorting
              </h3>
              <p className="text-medium-text text-sm leading-relaxed">
                Algorithm-driven prioritization removes human bias and ensures
                fair visibility for all suggestions
              </p>
            </div>

            {/* Behavior Anomaly Detection */}
            <div className="bg-light-surface rounded-2xl p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-dark-cyan flex items-center justify-center mb-4">
                <i className="fa-solid fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg text-dark-text mb-2">
                Behavior Anomaly Detection
              </h3>
              <p className="text-medium-text text-sm leading-relaxed">
                AI monitors for suspicious patterns like vote manipulation or
                spam submissions
              </p>
            </div>

            {/* Trust-Weighted Evaluation */}
            <div className="bg-light-surface rounded-2xl p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-deep-blue flex items-center justify-center mb-4">
                <i className="fa-solid fa-balance-scale text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg text-dark-text mb-2">
                Trust-Weighted Evaluation
              </h3>
              <p className="text-medium-text text-sm leading-relaxed">
                Reputation and contribution history influence voting weight to
                reward quality participation
              </p>
            </div>

            {/* Anti-Manipulation Controls */}
            <div className="bg-light-surface rounded-2xl p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-dark-cyan flex items-center justify-center mb-4">
                <i className="fa-solid fa-ban text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg text-dark-text mb-2">
                Anti-Manipulation Controls
              </h3>
              <p className="text-medium-text text-sm leading-relaxed">
                Rate limiting, duplicate detection, and coordinated behavior
                alerts protect system integrity
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="system-outputs" className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text text-center mb-12">
            What The Suggestion Box Produces
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Live Prioritized Suggestions List */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-list-ol text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                  Live Prioritized Suggestions List
                </h3>
                <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                  Real-time ranking of all active suggestions based on
                  engagement, impact, and community evaluation
                </p>
              </div>
            </div>

            {/* Spotlighted Suggestions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-star text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                  Spotlighted Suggestions
                </h3>
                <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                  Automatic highlighting of "Most Engaged" and "Most
                  Appreciated" suggestions to surface high-value ideas
                </p>
              </div>
            </div>

            {/* Progress Tracking Dashboards */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-chart-pie text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                  Progress Tracking Dashboards
                </h3>
                <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                  Visual representation of suggestion lifecycle from submission
                  through implementation
                </p>
              </div>
            </div>

            {/* Contributor Reputation Metrics */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-award text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                  Contributor Reputation Metrics
                </h3>
                <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                  Transparent tracking of individual participation, contribution
                  quality, and community impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="ecosystem-integration"
        className="py-20 border-y border-cool-gray"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text text-center mb-4">
            How Suggestion Box Connects Inside TUC
          </h2>
          <p className="text-center text-medium-text mb-12 max-w-2xl mx-auto">
            Integrates seamlessly with the broader TUC ecosystem to transform
            suggestions into tangible outcomes
          </p>

          <div className="max-w-5xl mx-auto relative">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-40 sm:h-40 rounded-full bg-deep-blue flex items-center justify-center z-10">
              <div className="text-center text-white">
                <i className="fa-solid fa-inbox text-4xl sm:text-3xl mb-3"></i>
                <div className="font-bold text-lg sm:text-base">
                  Suggestion Box
                </div>
                <div className="text-xs sm:text-[10px] opacity-90">
                  Central Hub
                </div>
              </div>
            </div>

            {/* Integration Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              {/* Node 1 */}
              <div className="bg-light-surface rounded-xl p-6 relative">
                <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-cyan flex items-center justify-center">
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-exclamation-circle text-dark-cyan text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-dark-text mb-2">
                      Openitem System
                    </h3>
                    <p className="text-medium-text text-sm">
                      Priority tracking and task management
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 2 */}
              <div className="bg-light-surface rounded-xl p-6 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-cyan flex items-center justify-center">
                  <i className="fa-solid fa-arrow-left text-white"></i>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-project-diagram text-deep-blue text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-dark-text mb-2">
                      Project Systems
                    </h3>
                    <p className="text-medium-text text-sm">
                      Execution layer for implemented ideas
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 3 */}
              <div className="bg-light-surface rounded-xl p-6 relative mt-16 sm:mt-32">
                <div className="absolute -bottom-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-cyan flex items-center justify-center">
                  <i className="fa-solid fa-arrow-up text-white"></i>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-users text-dark-cyan text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-dark-text mb-2">
                      Collaboration Tools
                    </h3>
                    <p className="text-medium-text text-sm">
                      Discussion forums and team coordination
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 4 */}
              <div className="bg-light-surface rounded-xl p-6 relative mt-16 sm:mt-32">
                <div className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-cyan flex items-center justify-center">
                  <i className="fa-solid fa-arrow-up text-white"></i>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-chart-bar text-deep-blue text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-dark-text mb-2">
                      Analytics & Reporting
                    </h3>
                    <p className="text-medium-text text-sm">
                      Insights and performance dashboards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer footerData={footerData} />
    </>
  );
};

export default SuggestionBoxLandingPage;
