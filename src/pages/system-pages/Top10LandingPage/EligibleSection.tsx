const EligibleSection = () => {
  return (
    <section
      id="sys-top10-eligible-content"
      className="py-14 sm:py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block px-3 py-1 bg-white border border-cool-gray rounded text-[11px] sm:text-xs font-medium text-medium-gray mb-2 sm:mb-4">
            Content Categories
          </div>

          <h2 className="font-serif font-bold text-dark-gray mb-3 sm:mb-4 text-[clamp(1.75rem,4vw,2.5rem)]">
            What Enters The System
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <i className="fa-solid fa-lightbulb text-white  text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2 sm:mb-3">
              Ideas & Proposals
            </h3>
            <p className="text-sm text-medium-gray leading-relaxed">
              Community-submitted concepts and solutions
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <i className="fa-solid fa-diagram-project text-white  text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2 sm:mb-3">
              Active Projects
            </h3>
            <p className="text-sm text-medium-gray leading-relaxed">
              Ongoing builds and collaborative initiatives
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <i className="fa-solid fa-code-branch text-white  text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2 sm:mb-3">
              Remixed Concepts
            </h3>
            <p className="text-sm text-medium-gray leading-relaxed">
              Improved or evolved versions of existing ideas
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <i className="fa-solid fa-flask text-white text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2 sm:mb-3">
              Challenges & Experiments
            </h3>
            <p className="text-sm text-medium-gray leading-relaxed">
              Short-term or long-term collaborative activities
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-medium-gray italic">
            Each category can operate independently while feeding into the
            larger Top10 ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EligibleSection;
