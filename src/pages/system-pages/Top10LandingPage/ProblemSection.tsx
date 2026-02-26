const ProblemSection = () => {
  return (
    <section
      id="sys-top10-problem-statement"
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
                The Top10 System solves this by introducing transparent scoring,
                contribution tracking, remix attribution, and continuous ranking
                updates that reflect real participation and long-term value.
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
                    <div className="text-xs text-medium-gray">Top10 System</div>
                    <div className="text-sm font-medium">Value Recognition</div>
                  </div>
                </div>

                <i className="fa-solid fa-arrow-trend-up text-dark-cyan text-lg sm:text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
