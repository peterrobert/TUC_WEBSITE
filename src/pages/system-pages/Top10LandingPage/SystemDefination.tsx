const SystemDefination = () => {
  return (
    <section
      id="sys-top10-system-definition"
      className="py-14 sm:py-16 md:py-20 bg-white border-y border-cool-gray"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-3 py-1 bg-light-gray rounded text-[11px] sm:text-xs font-medium text-medium-gray mb-4 sm:mb-6">
          System Definition
        </div>

        <h2 className="font-serif font-bold text-dark-gray mb-6 sm:mb-8 text-[clamp(1.75rem,4vw,2.5rem)]">
          What Is The Top10 System?
        </h2>

        <div className="text-medium-gray leading-relaxed space-y-4 text-sm sm:text-base max-w-3xl mx-auto">
          <p>
            The Top10 System is a structured ranking and visibility framework
            inside TUC that evaluates ideas, projects, and collaborative
            activity using multiple performance signals instead of simple
            upvotes.
          </p>
          <p>
            It functions as a discovery engine that highlights what matters most
            while preserving fairness, attribution, and system integrity.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-pale-blue p-5 sm:p-6 rounded-lg border border-cool-gray">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fa-solid fa-ranking-star text-white text-lg sm:text-xl"></i>
            </div>
            <h3 className="font-semibold text-dark-gray mb-1 sm:mb-2">
              Structured Ranking
            </h3>
            <p className="text-sm text-medium-gray">
              Multi-signal evaluation framework
            </p>
          </div>

          <div className="bg-pale-blue p-5 sm:p-6 rounded-lg border border-cool-gray">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-dark-cyan rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fa-solid fa-magnifying-glass text-white text-lg sm:text-xl"></i>
            </div>
            <h3 className="font-semibold text-dark-gray mb-1 sm:mb-2">
              Discovery Engine
            </h3>
            <p className="text-sm text-medium-gray">
              Surfaces meaningful contributions
            </p>
          </div>

          <div className="bg-pale-blue p-5 sm:p-6 rounded-lg border border-cool-gray">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fa-solid fa-shield-halved text-white text-lg sm:text-xl"></i>
            </div>
            <h3 className="font-semibold text-dark-gray mb-1 sm:mb-2">
              System Integrity
            </h3>
            <p className="text-sm text-medium-gray">
              Fair and transparent attribution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDefination;
