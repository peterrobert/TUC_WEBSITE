import elbieImage from "../../assets/elbie.jpg";
const StageSuggestionsSection = () => {
  return (
    <section
      id="stage-suggestions-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* LEFT PANEL */}
          <div className="bg-pale-blue border-2 border-deep-blue rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-4 sm:mb-6">
              Example Use Case
            </h4>

            <div className="bg-white rounded-lg p-4 sm:p-6 border border-cool-gray">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 sm:px-3 py-1 bg-deep-blue text-white text-xs sm:text-sm rounded-full font-medium">
                  Framed Suggestion
                </span>
                <span className="text-xs sm:text-sm text-medium-gray">
                  Elbie
                </span>
              </div>

              <h5 className="text-base sm:text-lg font-semibold text-dark-gray mb-3">
                Missing Hook at the Beginning
              </h5>

              <div className="space-y-3 text-xs sm:text-sm text-medium-gray">
                <div>
                  <p className="font-medium text-dark-gray mb-1">
                    Observation:
                  </p>
                  <p>
                    “There’s no strong hook at the beginning. Users don’t
                    immediately understand why TUC matters or what to pay
                    attention to first.”
                  </p>
                </div>

                <div>
                  <p className="font-medium text-dark-gray mb-1">Reframing:</p>
                  <p>
                    What began as a quick observation is quickly reframed into
                    an immediate, shared solution—clarifying early relevance
                    before the problem compounds. One person flags the issue;
                    others help shape the response.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-dark-gray mb-1">Outcome:</p>
                  <p>
                    Instead of waiting for perfect answers, progress happens
                    through collective clarity.
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-deep-blue text-white rounded-lg">
                <p className="text-xs sm:text-sm">
                  <i className="fa-solid fa-info-circle mr-2"></i>
                  This is where TUC turns partial insight into real momentum. By
                  allowing people to contribute what they can, holding multiple
                  options, and acting early, teams reduce waste, lower friction,
                  and move faster—growing the Efficiency of Things (EoT) and
                  Value of Things (VoT) before effort compounds in the wrong
                  direction.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-deep-blue to-bright-blue rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <i className="fa-solid fa-inbox text-white text-lg sm:text-2xl lg:text-3xl"></i>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray">
                  Suggestions
                </h2>

                <p className="text-sm sm:text-base text-medium-gray font-medium">
                  Stage 2: Problem Framing · Options · Impact
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>

                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Turn early signals into shared clarity and immediate leverage.
                  This stage exists to quickly frame problems, surface viable
                  options, and identify impact—without forcing premature fixes,
                  rigid plans, or fully scoped projects. Clarity is allowed to
                  emerge collectively, not required upfront.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>

                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  A clearly described issue, why it matters now, and any
                  relevant context. Ideas do not need to be complete or
                  well-formed—others may see solutions, options, or improvements
                  you can’t. When people contribute what they can, the system
                  does the rest.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>

                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Clearly framed problems paired with visible options and
                  anticipated impact. Some suggestions may move into
                  prioritization through Top10, where alternatives can be
                  compared side by side. Others remain active and visible for
                  refinement, remixing, or future use—nothing is wasted or
                  prematurely closed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageSuggestionsSection;
