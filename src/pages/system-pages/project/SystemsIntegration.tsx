const SystemsIntegration = () => {
  return (
    <section id="systems-integration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
            Systems Integration
          </span>
          <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
            Project Module System Connections
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">
            Comprehensive integration architecture connecting the Project Module
            with all TUC ecosystem components.
          </p>
        </div>
        <div className="relative">
          <div className="flex items-center justify-center mb-16">
            <div
              id="hub-center"
              className="bg-linear-to-br from-deep-blue to-dark-cyan rounded-2xl p-8 shadow-2xl relative z-10"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-layer-group text-deep-blue text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Project Module
                </h3>
                <p className="text-white text-opacity-90 text-sm">
                  Central Hub
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div
              id="integration-suggestion"
              className="bg-white rounded-xl p-6 border-2 border-deep-blue hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <i className="fa-solid fa-lightbulb text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">
                Suggestion Box
              </h4>
              <p className="text-sm text-medium-gray mb-3">Idea Intake</p>
              <div className="flex items-center text-xs text-medium-gray">
                <i className="fa-solid fa-arrow-right-arrow-left text-dark-cyan mr-2"></i>
                <span>Bidirectional Sync</span>
              </div>
            </div>
            <div
              id="integration-openitem"
              className="bg-white rounded-xl p-6 border-2 border-dark-cyan hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <i className="fa-solid fa-clipboard-list text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">
                Openitem System
              </h4>
              <p className="text-sm text-medium-gray mb-3">
                Task & Priority Engine
              </p>
              <div className="flex items-center text-xs text-medium-gray">
                <i className="fa-solid fa-arrow-right-arrow-left text-dark-cyan mr-2"></i>
                <span>Real-time Updates</span>
              </div>
            </div>
            <div
              id="integration-profile"
              className="bg-white rounded-xl p-6 border-2 border-deep-blue hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <i className="fa-solid fa-user-circle text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">
                Profile Module
              </h4>
              <p className="text-sm text-medium-gray mb-3">
                User Inputs & Identity
              </p>
              <div className="flex items-center text-xs text-medium-gray">
                <i className="fa-solid fa-arrow-right text-dark-cyan mr-2"></i>
                <span>Data Source</span>
              </div>
            </div>
            <div
              id="integration-top10"
              className="bg-white rounded-xl p-6 border-2 border-dark-cyan hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <i className="fa-solid fa-star text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">
                Top10 System
              </h4>
              <p className="text-sm text-medium-gray mb-3">Visibility Layer</p>
              <div className="flex items-center text-xs text-medium-gray">
                <i className="fa-solid fa-arrow-left text-dark-cyan mr-2"></i>
                <span>Display Feed</span>
              </div>
            </div>
            <div
              id="integration-financial"
              className="bg-white rounded-xl p-6 border-2 border-deep-blue hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <i className="fa-solid fa-dollar-sign text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">
                Financial System
              </h4>
              <p className="text-sm text-medium-gray mb-3">Accounting Engine</p>
              <div className="flex items-center text-xs text-medium-gray">
                <i className="fa-solid fa-arrow-right-arrow-left text-dark-cyan mr-2"></i>
                <span>Financial Data</span>
              </div>
            </div>
            <div
              id="integration-legend"
              className="bg-white rounded-xl p-6 border-2 border-dark-cyan hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <i className="fa-solid fa-book text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">
                Legend System
              </h4>
              <p className="text-sm text-medium-gray mb-3">Document Storage</p>
              <div className="flex items-center text-xs text-medium-gray">
                <i className="fa-solid fa-arrow-left text-dark-cyan mr-2"></i>
                <span>Archive Output</span>
              </div>
            </div>
            <div
              id="integration-proscons"
              className="bg-white rounded-xl p-6 border-2 border-deep-blue hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <i className="fa-solid fa-balance-scale-right text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">
                Pros/Cons Engine
              </h4>
              <p className="text-sm text-medium-gray mb-3">Comparison System</p>
              <div className="flex items-center text-xs text-medium-gray">
                <i className="fa-solid fa-arrow-right-arrow-left text-dark-cyan mr-2"></i>
                <span>Decision Support</span>
              </div>
            </div>
            <div
              id="integration-analytics"
              className="bg-white rounded-xl p-6 border-2 border-dark-cyan hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <i className="fa-solid fa-chart-bar text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">
                Analytics Dashboard
              </h4>
              <p className="text-sm text-medium-gray mb-3">
                Insights & Metrics
              </p>
              <div className="flex items-center text-xs text-medium-gray">
                <i className="fa-solid fa-arrow-left text-dark-cyan mr-2"></i>
                <span>Data Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsIntegration;
