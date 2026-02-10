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
              Example Use Case
            </h4>

            <div className="space-y-3">
              {/* ITEM 1 */}
              <div className="bg-white rounded-lg p-3 sm:p-5 border-l-4 border-deep-blue flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Related Suggestions Feature
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray">
                      Impact: High • Feasibility: Medium
                    </p>
                  </div>
                </div>

                <span className="px-2 sm:px-3 py-1 bg-dark-cyan text-white text-xs sm:text-sm rounded-full">
                  Ready
                </span>
              </div>

              {/* ITEM 2 */}
              <div className="bg-white rounded-lg p-3 sm:p-5 border-l-4 border-deep-blue flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Notification System Overhaul
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray">
                      Impact: High • Feasibility: High
                    </p>
                  </div>
                </div>

                <span className="px-2 sm:px-3 py-1 bg-dark-cyan text-white text-xs sm:text-sm rounded-full">
                  Ready
                </span>
              </div>

              {/* ITEM 3 */}
              <div className="bg-white rounded-lg p-3 sm:p-5 border-l-4 border-deep-blue flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Mobile App Foundation
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray">
                      Impact: Medium • Feasibility: Low
                    </p>
                  </div>
                </div>

                <span className="px-2 sm:px-3 py-1 bg-light-gray text-medium-gray text-xs sm:text-sm rounded-full">
                  Evaluating
                </span>
              </div>

              {/* ITEM 4 */}
              <div className="bg-white rounded-lg p-3 sm:p-5 border-l-4 border-cool-gray flex items-center justify-between opacity-60">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-light-gray text-medium-gray rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Advanced Search Filters
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray">
                      Impact: Low • Feasibility: High
                    </p>
                  </div>
                </div>

                <span className="px-2 sm:px-3 py-1 bg-light-gray text-medium-gray text-xs sm:text-sm rounded-full">
                  Pending
                </span>
              </div>
            </div>

            {/* INFO */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-deep-blue text-white rounded-lg">
              <p className="text-xs sm:text-sm">
                <i className="fa-solid fa-info-circle mr-2"></i>Rankings update
                weekly based on community feedback, changing priorities, and
                resource availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageTop10Section;
