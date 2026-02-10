const StageTop10Section = () => {
  return (
    <section
      id="stage-top10-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 border-y border-cool-gray"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-deep-blue to-bright-blue rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <i className="fa-solid fa-trophy text-white text-lg sm:text-2xl lg:text-3xl"></i>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray">
                  Top10
                </h2>
                <p className="text-sm sm:text-base text-medium-gray font-medium">
                  Stage 3: Prioritization · Shared Signals · Coordinated Action
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Surface what matters most right now by translating collective
                  input into visible priorities. Top10 helps teams focus effort
                  without pretending there is only one correct answer holding
                  space for tradeoffs, alternatives, and evolving context.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Evaluated suggestions with community feedback, red flags 🚩,
                  impact signals, feasibility awareness, and relevance to
                  current goals. Inputs may include multiple competing options
                  addressing the same underlying problem.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  A prioritized Top10 list that highlights where attention,
                  discussion, and resources should go first. Top10 items remain
                  open to remix, refinement, and replacement as conditions
                  change.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-pale-blue border-2 border-deep-blue rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-4 sm:mb-6">
              Early Feedback → Prioritized Improvements
            </h4>

            <p className="text-sm sm:text-base text-medium-gray mb-6">
              Early feedback surfaced multiple issues affecting clarity and
              engagement. Rather than fixing everything at once, the community
              used <span className="font-semibold">Top10</span> to prioritize
              what would create the greatest immediate improvement.
            </p>

            <div className="space-y-3">
              {/* Item 1 */}
              <div className="bg-white rounded-lg p-3 sm:p-5 border-l-4 border-deep-blue flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Consistency{" "}
                      <span className="text-medium-gray font-normal">
                        (Esther)
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray">
                      Inconsistent headings, spacing, colors, and CTAs reduce
                      cohesion and trust across pages.
                    </p>
                  </div>
                </div>
                <span
                  className="
  inline-flex items-center justify-center
  px-2 sm:px-2.5
  py-2
  bg-dark-cyan text-white
  text-xs sm:text-sm
  leading-none
  whitespace-nowrap
  rounded-full
"
                >
                  Top Red Flag
                </span>
              </div>

              {/* Item 2 */}
              <div className="bg-white rounded-lg p-3 sm:p-5 border-l-4 border-deep-blue flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Missing Hook{" "}
                      <span className="text-medium-gray font-normal">
                        (Elbie)
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray">
                      Visitors don’t immediately understand why TUC matters or
                      what to focus on first.
                    </p>
                  </div>
                </div>
                <span
                  className="
  inline-flex items-center justify-center
  px-2 sm:px-2.5
  py-2
  bg-dark-cyan text-white
  text-xs sm:text-sm
  leading-none
  whitespace-nowrap
  rounded-full
"
                >
                  High Priority
                </span>
              </div>

              {/* Item 3 */}
              <div className="bg-white rounded-lg p-3 sm:p-5 border-l-4 border-deep-blue flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Too Complicated Too Early{" "}
                      <span className="text-medium-gray font-normal">
                        (Frankie)
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray">
                      High-level concepts appear before orientation, increasing
                      cognitive load for new readers.
                    </p>
                  </div>
                </div>
                <span
                  className="
  inline-flex items-center justify-center
  px-2 sm:px-2.5
  py-2
  bg-dark-cyan text-white
  text-xs sm:text-sm
  leading-none
  whitespace-nowrap
  rounded-full
"
                >
                  High Priority
                </span>
              </div>

              {/* Item 4 */}
              <div className="bg-white rounded-lg p-3 sm:p-5 border-l-4 border-cool-gray flex items-center justify-between opacity-60">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-light-gray text-medium-gray rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Section Order{" "}
                      <span className="text-medium-gray font-normal">
                        (Esther)
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray">
                      Key ideas arrive too late in the scroll, delaying clarity
                      and relevance.
                    </p>
                  </div>
                </div>
                <span className="px-2 sm:px-3 py-1 bg-light-gray text-medium-gray text-xs sm:text-sm rounded-full">
                  Pending
                </span>
              </div>

              {/* Item 5 */}
              <div className="bg-white rounded-lg p-3 sm:p-5 border-l-4 border-cool-gray flex items-center justify-between opacity-60">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-light-gray text-medium-gray rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    5
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Language Density
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray">
                      Some sections assume internal knowledge before grounding
                      new readers.
                    </p>
                  </div>
                </div>
                <span className="px-2 sm:px-3 py-1 bg-light-gray text-medium-gray text-xs sm:text-sm rounded-full">
                  Pending
                </span>
              </div>

              {/* Item 6 */}
              <div className="bg-white rounded-lg p-3 sm:p-5 border-l-4 border-cool-gray flex items-center justify-between opacity-60">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-light-gray text-medium-gray rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    6
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Clear Paths to Level 2{" "}
                      <span className="text-medium-gray font-normal">
                        (Esther)
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray">
                      Readers lack obvious ways to go deeper when something
                      resonates.
                    </p>
                  </div>
                </div>
                <span className="px-2 sm:px-3 py-1 bg-light-gray text-medium-gray text-xs sm:text-sm rounded-full">
                  Pending
                </span>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-deep-blue text-white rounded-lg">
              <p className="text-xs sm:text-sm">
                <i className="fa-solid fa-info-circle mr-2"></i>
                Top10 doesn’t lock decisions—it creates alignment. By making
                priorities visible, teams reduce waste, act sooner, and improve
                faster, while preserving alternative ideas and future options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageTop10Section;
