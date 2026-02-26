const ProblemStamentSection = () => {
  return (
    <section id="sys-sb-problem-statement" className="py-14 sm:py-16 md:py-20">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/** Left Column: Text & Tags **/}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-dark-text mb-4 sm:mb-6">
              Why Traditional Suggestion Boxes Fail
            </h2>

            <div className="prose prose-sm sm:prose-lg text-medium-text leading-relaxed space-y-4">
              <p>
                Traditional suggestion boxes fail not because people lack ideas,
                but because systems fail to coordinate them.
              </p>

              <div className="space-y-2">
                <p>Common issues include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ideas disappearing after submission</li>
                  <li>
                    Little visibility into what is being reviewed or acted on
                  </li>
                  <li>Bias or gatekeeping in evaluation</li>
                  <li>No clear path from suggestion to action</li>
                </ul>
              </div>

              <p className="font-semibold text-dark-text">
                The TUC Suggestion Box addresses these failures through
                trustless, regenerative feedback loops, real-time engagement,
                real-time analytics, and permissionless participation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-3 sm:px-4 py-2 bg-light-surface rounded-lg text-xs sm:text-sm font-medium text-dark-text">
                Transparent
              </span>
              <span className="px-3 sm:px-4 py-2 bg-light-surface rounded-lg text-xs sm:text-sm font-medium text-dark-text">
                <i className="fa-solid fa-lock-open text-dark-cyan mr-2"></i>
                Regenerative
              </span>
              <span className="px-3 sm:px-4 py-2 bg-light-surface rounded-lg text-xs sm:text-sm font-medium text-dark-text">
                <i className="fa-solid fa-recycle text-dark-cyan mr-2"></i>
                Real-time
              </span>
              <span className="px-3 sm:px-4 py-2 bg-light-surface rounded-lg text-xs sm:text-sm font-medium text-dark-text">
                <i className="fa-solid fa-bolt text-dark-cyan mr-2"></i>
                Analytics-driven
              </span>
              <span className="px-3 sm:px-4 py-2 bg-light-surface rounded-lg text-xs sm:text-sm font-medium text-dark-text">
                <i className="fa-solid fa-brain text-dark-cyan mr-2"></i>
                Permissionless
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
  );
};

export default ProblemStamentSection;
