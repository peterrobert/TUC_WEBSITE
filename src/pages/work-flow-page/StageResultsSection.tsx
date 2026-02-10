const StageResultsSection = () => {
  return (
    <section
      id="stage-results-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 border-y border-cool-gray"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* RIGHT PANEL */}
          <div className="bg-pale-blue border-2 border-dark-cyan rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-4 sm:mb-6">
              Example Use Case — Website Clarity & Structure Improvements —
              Results
            </h4>

            <div className="space-y-3">
              {/* Result 1 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-dark-cyan">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-dark-cyan text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Clear Level 1 / Level 2 / Level 3 navigation implemented
                    </p>
                  </div>
                </div>
              </div>

              {/* Result 2 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-deep-blue">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-deep-blue text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Consistent headings, spacing, and CTAs across pages
                    </p>
                  </div>
                </div>
              </div>

              {/* Result 3 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-cool-gray opacity-60">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-cool-gray text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Stronger opening hook improves first-time understanding
                    </p>
                  </div>
                </div>
              </div>

              {/* Result 4 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-cool-gray opacity-60">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-cool-gray text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Users report feeling “less overwhelmed” and “more
                      oriented”
                    </p>
                  </div>
                </div>
              </div>

              {/* Result 5 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-cool-gray opacity-60">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-cool-gray text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Esther, Elbie, and Frankie see their feedback reflected in
                      real outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-dark-cyan text-white rounded-lg">
              <p className="text-xs sm:text-sm">
                <i className="fa-solid fa-info-circle mr-2"></i>
                What began as individual feedback becomes shared progress.
                Results make contribution visible, learning practical, and value
                compounding—so people don’t just participate, they see the
                impact of their voice.
              </p>
            </div>
          </div>
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-dark-cyan to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <i className="fa-solid fa-chart-line text-white text-lg sm:text-2xl lg:text-3xl"></i>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray">
                  Results
                </h2>
                <p className="text-sm sm:text-base text-medium-gray font-medium">
                  Stage 6: Measured Outcomes · Learning · Compounding Value
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Turn completed work into visible outcomes—so effort is
                  acknowledged, learning is shared, and value compounds over
                  time. Results make progress real, traceable, and meaningful to
                  the people who contributed.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Completed tasks and projects, contributor activity, decisions
                  made, and changes implemented—along with qualitative feedback
                  from real users.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Documented improvements, measurable impact, shared learning,
                  and attribution to contributors. Results feed back into the
                  system to improve future ideas, decisions, and
                  execution—growing both Efficiency of Things (EoT) and Value of
                  Things (VoT).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageResultsSection;
