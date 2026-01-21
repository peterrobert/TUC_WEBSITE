const HowTucWorksSection = () => {
  return (
    <section
      id="how-tuc-works-section"
      className="py-20 px-8 bg-white border-y border-cool-gray"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-dark-gray mb-4">
            How TUC Works
          </h2>
          <div className="w-24 h-1 bg-dark-cyan mx-auto mb-6"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">
            The TUC pipeline transforms ideas into impact through a series of
            transparent, structured stages. Each stage adds value, filters
            quality, and maintains attribution.
          </p>
        </div>

        <div className="bg-pale-blue border-2 border-deep-blue rounded-lg p-10 mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-gray">Ideas</h4>
            </div>
            <div className="shrink-0 mx-4">
              <i className="fa-solid fa-arrow-right text-3xl text-deep-blue"></i>
            </div>
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-inbox text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-gray">
                Suggestions
              </h4>
            </div>
            <div className="shrink-0 mx-4">
              <i className="fa-solid fa-arrow-right text-3xl text-deep-blue"></i>
            </div>
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-trophy text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-gray">Top10</h4>
            </div>
            <div className="shrink-0 mx-4">
              <i className="fa-solid fa-arrow-right text-3xl text-deep-blue"></i>
            </div>
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-folder-open text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-gray">Projects</h4>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-dark-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-list-check text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-gray">Tasks</h4>
            </div>
            <div className="shrink-0 mx-4">
              <i className="fa-solid fa-arrow-right text-3xl text-dark-cyan"></i>
            </div>
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-dark-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-chart-line text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-gray">Results</h4>
            </div>
            <div className="shrink-0 mx-4">
              <i className="fa-solid fa-arrow-right text-3xl text-dark-cyan"></i>
            </div>
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-dark-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-water text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-gray">
                Ripple Effects
              </h4>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-cool-gray rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-deep-blue rounded-md flex items-center justify-center shrink-0">
                <i className="fa-solid fa-lightbulb text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-2">
                  Ideas
                </h4>
                <p className="text-medium-gray">
                  Raw thoughts, observations, and possibilities. Anyone can
                  contribute.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-cool-gray rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-deep-blue rounded-md flex items-center justify-center shrink-0">
                <i className="fa-solid fa-inbox text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-2">
                  Suggestions
                </h4>
                <p className="text-medium-gray">
                  Structured proposals with context, rationale, and initial
                  evaluation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-cool-gray rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-deep-blue rounded-md flex items-center justify-center shrink-0">
                <i className="fa-solid fa-trophy text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-2">
                  Top10
                </h4>
                <p className="text-medium-gray">
                  Prioritized list of the most valuable suggestions ready for
                  development.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-cool-gray rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-deep-blue rounded-md flex items-center justify-center shrink-0">
                <i className="fa-solid fa-folder-open text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-2">
                  Projects
                </h4>
                <p className="text-medium-gray">
                  Active initiatives with teams, timelines, and clear
                  objectives.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-cool-gray rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-dark-cyan rounded-md flex items-center justify-center shrink-0">
                <i className="fa-solid fa-list-check text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-2">
                  Tasks
                </h4>
                <p className="text-medium-gray">
                  Specific actions that move projects forward, assigned and
                  tracked.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-cool-gray rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-dark-cyan rounded-md flex items-center justify-center shrink-0">
                <i className="fa-solid fa-chart-line text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-2">
                  Results
                </h4>
                <p className="text-medium-gray">
                  Measurable outcomes that demonstrate value and impact.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-cool-gray rounded-lg p-6 col-span-2">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-dark-cyan rounded-md flex items-center justify-center shrink-0">
                <i className="fa-solid fa-water text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-2">
                  Ripple Effects
                </h4>
                <p className="text-medium-gray">
                  Secondary and tertiary impacts that extend beyond the original
                  project, creating lasting value.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-deep-blue text-white rounded-lg p-10 text-center">
          <p className="text-xl leading-relaxed">
            This pipeline reduces waste by ensuring ideas are evaluated before
            resources are committed. It moves work from intention to execution
            systematically, maintaining transparency and attribution at every
            stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowTucWorksSection;
