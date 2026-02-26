const EligibleContent = () => {
  return (
    <section id="sys-sb-eligible-content" className="py-14 sm:py-16 md:py-20">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
        {/** Section Heading **/}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-dark-text text-center mb-4">
          What Can Be Submitted
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-medium-text mb-12 max-w-2xl mx-auto">
          Each entry can operate independently while feeding into the global
          Suggestion Box ecosystem.
        </p>

        {/** Content Cards Grid **/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/** Card 1 **/}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-cool-gray hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
              Ideas & Proposals
            </h3>
            <p className="text-sm sm:text-base text-medium-text leading-relaxed">
              Community-submitted concepts and solutions
            </p>
          </div>

          {/** Card 2 **/}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-cool-gray hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-tasks text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
              Active Projects
            </h3>
            <p className="text-sm sm:text-base text-medium-text leading-relaxed">
              Initiatives derived from suggestions
            </p>
          </div>

          {/** Card 3 **/}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-cool-gray hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-sync-alt text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
              Remixed Suggestions
            </h3>
            <p className="text-sm sm:text-base text-medium-text leading-relaxed">
              Evolved or improved versions of existing ideas
            </p>
          </div>

          {/** Card 4 **/}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-cool-gray hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-flask text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2 sm:mb-3">
              Challenges & Experiments
            </h3>
            <p className="text-sm sm:text-base text-medium-text leading-relaxed">
              Short-term or long-term collaborative activities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibleContent;
