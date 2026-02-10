const StageRippleEffectsSection = () => {
  return (
    <section
      id="stage-ripple-effects-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 border-y border-cool-gray"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-dark-cyan to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <i className="fa-solid fa-water text-white text-lg sm:text-2xl lg:text-3xl"></i>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray">
                  Ripple Effects
                </h2>
                <p className="text-sm sm:text-base text-medium-gray font-medium">
                  Stage 7: Compounding Impact · Reduced Fragmentation · Shared
                  Responsibility
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Extend the impact of results beyond a single fix, project, or
                  moment. Ripple Effects capture how visible outcomes influence
                  trust, coordination, learning, and future collaboration—so
                  progress doesn’t reset, it accumulates.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Completed results, contributor attribution, documented
                  decisions, shared learning, and ongoing community engagement.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Stronger alignment, reduced duplication, higher trust, and
                  faster future execution. Work no longer starts from zero—each
                  cycle builds on the last.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-pale-blue border-2 border-dark-cyan rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-4 sm:mb-6">
              Example Use Case — From Website Fixes to Systemic Improvement
            </h4>

            <div className="space-y-3">
              {/* Ripple Effect 1 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-dark-cyan">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-dark-cyan text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      A clearer onboarding experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Ripple Effect 2 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-deep-blue">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-deep-blue text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Shared language across pages
                    </p>
                  </div>
                </div>
              </div>

              {/* Ripple Effect 3 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-cool-gray opacity-60">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-cool-gray text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Faster feedback cycles
                    </p>
                  </div>
                </div>
              </div>

              {/* Ripple Effect 4 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-cool-gray opacity-60">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-cool-gray text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Higher confidence in contributing
                    </p>
                  </div>
                </div>
              </div>

              {/* Ripple Effect 5 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-cool-gray opacity-60">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-cool-gray text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      New contributors now understand where to start, see how
                      input turns into action, and trust that effort won’t be
                      wasted
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-dark-cyan text-white rounded-lg">
              <p className="text-xs sm:text-sm">
                <i className="fa-solid fa-info-circle mr-2"></i>
                Ripple Effects are how TUC combats fragmentation. By making work
                visible, learnings reusable, and contributions traceable,
                progress compounds instead of disappearing—and communities move
                forward together instead of starting over.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageRippleEffectsSection;
