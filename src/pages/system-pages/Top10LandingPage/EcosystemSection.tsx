const EcosystemSection = () => {
  return (
    <section
      id="sys-top10-ecosystem"
      className="py-20 bg-white border-y border-cool-gray"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-light-gray rounded text-xs font-medium text-medium-gray mb-4">
            System Architecture
          </div>
          <h2 className="text-4xl font-serif font-bold text-dark-gray mb-4">
            How Top10 Connects Inside TUC
          </h2>
          <p className="text-medium-gray max-w-2xl mx-auto">
            The Top10 System integrates with multiple TUC components to create a
            cohesive collaboration ecosystem
          </p>
        </div>
        <div className="relative">
          <div className="flex justify-center mb-12">
            <div className="bg-linear-to-br from-deep-blue to-dark-cyan p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-ranking-star text-deep-blue text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Top10 System
                </h3>
                <p className="text-sm text-white text-opacity-80">
                  Central Ranking Engine
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-pale-blue p-6 rounded-lg border-2 border-deep-blue">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-inbox text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray">
                    Suggestion Box
                  </h4>
                  <p className="text-xs text-medium-gray">Idea Intake Layer</p>
                </div>
              </div>
              <p className="text-sm text-medium-gray">
                Feeds new ideas and proposals into the ranking system for
                evaluation
              </p>
            </div>
            <div className="bg-pale-blue p-6 rounded-lg border-2 border-dark-cyan">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-diagram-project text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray">
                    Project Systems
                  </h4>
                  <p className="text-xs text-medium-gray">Execution Layer</p>
                </div>
              </div>
              <p className="text-sm text-medium-gray">
                Tracks active project development and milestone completion
              </p>
            </div>
            <div className="bg-pale-blue p-6 rounded-lg border-2 border-deep-blue">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-users-gear text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray">
                    Collaboration Tools
                  </h4>
                  <p className="text-xs text-medium-gray">Interaction Layer</p>
                </div>
              </div>
              <p className="text-sm text-medium-gray">
                Monitors collaborative activities and team coordination
              </p>
            </div>
            <div className="bg-pale-blue p-6 rounded-lg border-2 border-dark-cyan">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-chart-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray">
                    Contribution Tracking
                  </h4>
                  <p className="text-xs text-medium-gray">Analytics Layer</p>
                </div>
              </div>
              <p className="text-sm text-medium-gray">
                Records individual and collective contribution metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
