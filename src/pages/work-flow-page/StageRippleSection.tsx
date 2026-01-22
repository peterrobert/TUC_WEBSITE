const StageRippleSection = () => {
  return (
    <section
      id="stage-ripple-section"
      className="py-20 px-8 bg-white border-y border-cool-gray"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-dark-cyan to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <i className="fa-solid fa-water text-white text-3xl"></i>
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold text-dark-gray">
                  Ripple Effects
                </h2>
                <p className="text-medium-gray font-medium">
                  Stage 7: Extended Impact
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>
                <p className="text-medium-gray leading-relaxed">
                  Track secondary and tertiary impacts that extend beyond the
                  original project scope. Ripple effects represent the compound
                  value of good work—how one improvement enables others.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>
                <p className="text-medium-gray leading-relaxed">
                  Observed downstream effects, unexpected benefits, new
                  possibilities unlocked, or patterns that emerged after project
                  completion. Often identified weeks or months later.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>
                <p className="text-medium-gray leading-relaxed">
                  Documentation of lasting value and system-level improvements.
                  Ripple effects demonstrate the true ROI of collaboration
                  infrastructure and inform strategic decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-pale-blue border-2 border-dark-cyan rounded-xl p-8">
            <h4 className="text-xl font-semibold text-dark-gray mb-6">
              Example Use Case
            </h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-l-4 border-dark-cyan">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-arrow-trend-up text-dark-cyan text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-dark-gray mb-2">
                      Increased Collaboration Quality
                    </p>
                    <p className="text-sm text-medium-gray">
                      Users discovering related suggestions led to 23 merged
                      proposals, reducing redundant work and strengthening final
                      implementations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border-l-4 border-dark-cyan">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-users text-dark-cyan text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-dark-gray mb-2">
                      New Contributor Connections
                    </p>
                    <p className="text-sm text-medium-gray">
                      Feature enabled 12 new collaborations between users who
                      didn't know they were working on related problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border-l-4 border-dark-cyan">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-lightbulb text-dark-cyan text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-dark-gray mb-2">
                      Pattern Recognition
                    </p>
                    <p className="text-sm text-medium-gray">
                      Clustering revealed 3 major themes across suggestions,
                      informing strategic roadmap decisions for the next
                      quarter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border-l-4 border-dark-cyan">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-recycle text-dark-cyan text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-dark-gray mb-2">
                      Infrastructure Reuse
                    </p>
                    <p className="text-sm text-medium-gray">
                      The linking algorithm was adapted for project discovery,
                      creating unexpected value in another part of the system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-dark-cyan text-white rounded-lg">
              <p className="text-sm">
                <i className="fa-solid fa-info-circle mr-2"></i>Ripple effects
                are tracked over 6-12 months to capture long-term value that
                immediate results miss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageRippleSection;
