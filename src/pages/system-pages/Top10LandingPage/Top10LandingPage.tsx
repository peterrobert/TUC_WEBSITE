import { footerData } from "../../../data/footerData";
import Footer from "../../../layouts/Footer";

const Top10LandingPage = () => {
  return (
    <>
      {/* --- Hero Section ---- */}
      <section id="hero-section" className="bg-white border-b border-cool-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-3 sm:px-4 py-1 bg-light-gray rounded-full text-[11px] sm:text-xs font-medium text-medium-gray mb-4 sm:mb-6">
              System Documentation
            </div>

            <h1 className="font-serif font-bold text-dark-gray mb-4 sm:mb-6 leading-tight text-[clamp(2.5rem,6vw,3.75rem)]">
              TUC Top10 System
            </h1>

            <p className="text-medium-gray mb-6 sm:mb-8 font-light leading-relaxed text-[clamp(1.25rem,3vw,1.5rem)]">
              A Dynamic Ranking System for Collective Intelligence
            </p>

            <div className="max-w-3xl mx-auto">
              <p className="text-dark-gray mb-4 sm:mb-6 leading-relaxed text-[clamp(1rem,2vw,1.125rem)]">
                The TUC Top10 System transforms participation into measurable
                impact. It surfaces high-value ideas, projects, and
                contributions using transparent ranking logic, regenerative
                scoring, and collaboration-first design.
              </p>

              <p className="text-medium-gray italic leading-relaxed text-sm sm:text-base">
                Not a popularity contest — a structured engine for visibility,
                recognition, and coordinated progress.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#system-definition"
                className="w-full sm:w-auto px-8 py-3 bg-deep-blue text-white rounded hover:bg-hover-blue transition-colors font-medium text-center"
              >
                Explore the System
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ---- Problem section --- */}
      <section
        id="problem-statement"
        className="py-14 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-block px-3 py-1 bg-white border border-cool-gray rounded text-[11px] sm:text-xs font-medium text-medium-gray mb-2">
                Problem Statement
              </div>

              <h2 className="font-serif font-bold text-dark-gray leading-tight text-[clamp(2rem,4vw,2.5rem)]">
                Why Traditional Rankings Fail
              </h2>

              <div className="space-y-4 text-medium-gray leading-relaxed text-sm sm:text-base">
                <p>
                  Most ranking systems reward short-term attention and noise.
                  Valuable contributions remain hidden, collaboration goes
                  uncredited, and communities struggle to coordinate around
                  meaningful work.
                </p>
                <p>
                  The Top10 System solves this by introducing transparent
                  scoring, contribution tracking, remix attribution, and
                  continuous ranking updates that reflect real participation and
                  long-term value.
                </p>
              </div>

              <div className="pt-3 sm:pt-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-xmark text-red-500 mt-1"></i>
                  <span className="text-sm text-medium-gray">
                    Short-term attention rewards
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-xmark text-red-500 mt-1"></i>
                  <span className="text-sm text-medium-gray">
                    Hidden valuable contributions
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-xmark text-red-500 mt-1"></i>
                  <span className="text-sm text-medium-gray">
                    Uncredited collaboration
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 border border-cool-gray">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-light-gray rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-signal text-medium-gray"></i>
                    </div>

                    <div>
                      <div className="text-xs text-medium-gray">
                        Traditional System
                      </div>
                      <div className="text-sm font-medium">
                        Noise Amplification
                      </div>
                    </div>
                  </div>

                  <i className="fa-solid fa-arrow-trend-up text-red-500 text-lg sm:text-xl"></i>
                </div>

                <div className="border-t border-cool-gray"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-deep-blue rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-chart-line text-white"></i>
                    </div>

                    <div>
                      <div className="text-xs text-medium-gray">
                        Top10 System
                      </div>
                      <div className="text-sm font-medium">
                        Value Recognition
                      </div>
                    </div>
                  </div>

                  <i className="fa-solid fa-arrow-trend-up text-dark-cyan text-lg sm:text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- system defination --- */}
      <section
        id="system-definition"
        className="py-14 sm:py-16 md:py-20 bg-white border-y border-cool-gray"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 bg-light-gray rounded text-[11px] sm:text-xs font-medium text-medium-gray mb-4 sm:mb-6">
            System Definition
          </div>

          <h2 className="font-serif font-bold text-dark-gray mb-6 sm:mb-8 text-[clamp(1.75rem,4vw,2.5rem)]">
            What Is The Top10 System?
          </h2>

          <div className="text-medium-gray leading-relaxed space-y-4 text-sm sm:text-base max-w-3xl mx-auto">
            <p>
              The Top10 System is a structured ranking and visibility framework
              inside TUC that evaluates ideas, projects, and collaborative
              activity using multiple performance signals instead of simple
              upvotes.
            </p>
            <p>
              It functions as a discovery engine that highlights what matters
              most while preserving fairness, attribution, and system integrity.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-pale-blue p-5 sm:p-6 rounded-lg border border-cool-gray">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className="fa-solid fa-ranking-star text-white text-lg sm:text-xl"></i>
              </div>
              <h3 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                Structured Ranking
              </h3>
              <p className="text-sm text-medium-gray">
                Multi-signal evaluation framework
              </p>
            </div>

            <div className="bg-pale-blue p-5 sm:p-6 rounded-lg border border-cool-gray">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-dark-cyan rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className="fa-solid fa-magnifying-glass text-white text-lg sm:text-xl"></i>
              </div>
              <h3 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                Discovery Engine
              </h3>
              <p className="text-sm text-medium-gray">
                Surfaces meaningful contributions
              </p>
            </div>

            <div className="bg-pale-blue p-5 sm:p-6 rounded-lg border border-cool-gray">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className="fa-solid fa-shield-halved text-white text-lg sm:text-xl"></i>
              </div>
              <h3 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                System Integrity
              </h3>
              <p className="text-sm text-medium-gray">
                Fair and transparent attribution
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- Eligible section --- */}
      <section id="eligible-content" className="py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block px-3 py-1 bg-white border border-cool-gray rounded text-[11px] sm:text-xs font-medium text-medium-gray mb-2 sm:mb-4">
              Content Categories
            </div>

            <h2 className="font-serif font-bold text-dark-gray mb-3 sm:mb-4 text-[clamp(1.75rem,4vw,2.5rem)]">
              What Enters The System
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <i className="fa-solid fa-lightbulb text-white  text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2 sm:mb-3">
                Ideas & Proposals
              </h3>
              <p className="text-sm text-medium-gray leading-relaxed">
                Community-submitted concepts and solutions
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <i className="fa-solid fa-diagram-project text-white  text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2 sm:mb-3">
                Active Projects
              </h3>
              <p className="text-sm text-medium-gray leading-relaxed">
                Ongoing builds and collaborative initiatives
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <i className="fa-solid fa-code-branch text-white  text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2 sm:mb-3">
                Remixed Concepts
              </h3>
              <p className="text-sm text-medium-gray leading-relaxed">
                Improved or evolved versions of existing ideas
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <i className="fa-solid fa-flask text-white text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2 sm:mb-3">
                Challenges & Experiments
              </h3>
              <p className="text-sm text-medium-gray leading-relaxed">
                Short-term or long-term collaborative activities
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-medium-gray italic">
              Each category can operate independently while feeding into the
              larger Top10 ecosystem.
            </p>
          </div>
        </div>
      </section>
      {/* --- Ranking Flow Section --- */}
      <section
        id="ranking-flow"
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
      {/* --- Transparency ---- */}
      <section id="transparency-trust" className="py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-block px-3 py-1 bg-white border border-cool-gray rounded text-[11px] sm:text-xs font-medium text-medium-gray mb-2 sm:mb-4">
              Transparency Framework
            </div>
            <h2 className="font-serif font-bold text-dark-gray text-[clamp(1.75rem,4vw,2.5rem)] mb-2 sm:mb-4">
              Designed For Clarity
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-deep-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fa-solid fa-eye text-white  text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
                Visible Ranking Factors
              </h3>
              <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                All ranking criteria are documented and accessible to
                participants
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-dark-cyan bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fa-solid fa-route text-white  text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
                Traceable Contribution History
              </h3>
              <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                Every action and contribution is logged and can be reviewed
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-deep-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fa-solid fa-clipboard-list text-white text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
                Auditable Activity Logs
              </h3>
              <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                Complete audit trails ensure accountability and trust
              </p>
            </div>
          </div>

          <div className="text-center bg-pale-blue p-4 sm:p-6 rounded-lg border border-cool-gray">
            <p className="text-sm sm:text-base text-medium-gray italic">
              Participants can understand why something ranks highly instead of
              guessing.
            </p>
          </div>
        </div>
      </section>

      {/* --- System OutPut --- */}
      <section id="system-outputs" className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-white border border-cool-gray rounded text-xs font-medium text-medium-gray mb-4">
              System Outputs
            </div>
            <h2 className="text-4xl font-serif font-bold text-dark-gray mb-4">
              What The System Produces
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border-l-4 border-deep-blue shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-deep-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-list-ol text-white text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-dark-gray mb-1">
                    Live Top10 Ranked Lists
                  </h3>
                  <p className="text-sm text-medium-gray">
                    Real-time rankings updated continuously based on system
                    signals
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-medium-gray">
                    Primary Output
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-dark-cyan shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-dark-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-trophy text-white text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-dark-gray mb-1">
                    Category Leaderboards
                  </h3>
                  <p className="text-sm text-medium-gray">
                    Specialized rankings for different content types and
                    activities
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-medium-gray">
                    Discovery Tool
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-deep-blue shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-deep-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-compass text-white text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-dark-gray mb-1">
                    Project Discovery Feeds
                  </h3>
                  <p className="text-sm text-medium-gray">
                    Curated streams of emerging and noteworthy contributions
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-medium-gray">
                    Navigation Aid
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-dark-cyan shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-dark-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-id-badge text-white text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-dark-gray mb-1">
                    Contributor Reputation Profiles
                  </h3>
                  <p className="text-sm text-medium-gray">
                    Comprehensive records of participation, impact, and
                    collaboration history
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-medium-gray">
                    Recognition System
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- ecosystem ---- */}
      <section
        id="ecosystem-integration"
        className="py-20 bg-white border-y border-cool-gray"
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-light-gray rounded text-xs font-medium text-medium-gray mb-4">
              System Architecture
            </div>
            <h2 className="text-4xl font-serif font-bold text-dark-gray mb-4">
              How Top10 Connects Inside TUC
            </h2>
            <p className="text-medium-gray max-w-2xl mx-auto">
              The Top10 System integrates with multiple TUC components to create
              a cohesive collaboration ecosystem
            </p>
          </div>
          <div className="relative">
            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-br from-deep-blue to-dark-cyan p-8 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-ranking-star text-deep-blue text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Top10 System
                  </h3>
                  <p className="text-sm text-white text-opacity-80">
                    Central Ranking Engine
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-pale-blue p-6 rounded-lg border-2 border-deep-blue">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-inbox text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray">
                      Suggestion Box
                    </h4>
                    <p className="text-xs text-medium-gray">
                      Idea Intake Layer
                    </p>
                  </div>
                </div>
                <p className="text-sm text-medium-gray">
                  Feeds new ideas and proposals into the ranking system for
                  evaluation
                </p>
              </div>
              <div className="bg-pale-blue p-6 rounded-lg border-2 border-dark-cyan">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-diagram-project text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray">
                      Project Systems
                    </h4>
                    <p className="text-xs text-medium-gray">Execution Layer</p>
                  </div>
                </div>
                <p className="text-sm text-medium-gray">
                  Tracks active project development and milestone completion
                </p>
              </div>
              <div className="bg-pale-blue p-6 rounded-lg border-2 border-deep-blue">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-users-gear text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray">
                      Collaboration Tools
                    </h4>
                    <p className="text-xs text-medium-gray">
                      Interaction Layer
                    </p>
                  </div>
                </div>
                <p className="text-sm text-medium-gray">
                  Monitors collaborative activities and team coordination
                </p>
              </div>
              <div className="bg-pale-blue p-6 rounded-lg border-2 border-dark-cyan">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-chart-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray">
                      Contribution Tracking
                    </h4>
                    <p className="text-xs text-medium-gray">Analytics Layer</p>
                  </div>
                </div>
                <p className="text-sm text-medium-gray">
                  Records individual and collective contribution metrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer footerData={footerData} />
    </>
  );
};

export default Top10LandingPage;
