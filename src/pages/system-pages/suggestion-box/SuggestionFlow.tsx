const SuggestionFlow = () => {
  return (
    <section
      id="sys-sb-suggestion-flow"
      className="py-14 sm:py-16 md:py-20 bg-white border-y border-cool-gray"
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
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
            <div className="bg-light-surface rounded-xl p-4 sm:p-6 min-h-45 w-full">
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
            <div className="bg-light-surface rounded-xl p-4 sm:p-6 min-h-45 w-full">
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
            <div className="bg-light-surface rounded-xl p-4 sm:p-6 min-h-45 w-full">
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
            <div className="bg-light-surface rounded-xl p-4 sm:p-6 min-h-45 w-full">
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
  );
};

export default SuggestionFlow;
