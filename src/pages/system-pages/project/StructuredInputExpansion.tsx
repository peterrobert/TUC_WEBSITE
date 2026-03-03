const StructuredInputExpansion = () => {
  return (
    <section id="sys-project-structured-input-expansion" className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
            Structured Input Expansion
          </span>
          <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
            Advanced Project Data Fields
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl">
            Extended data collection framework that captures strategic,
            analytical, and resource dimensions of project planning.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div
            id="expansion-card-swot"
            className="bg-white rounded-xl p-8 border border-cool-gray"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                <i className="fa-solid fa-chart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray">
                SWOT Analysis
              </h3>
            </div>
            <p className="text-medium-gray mb-4">
              Comprehensive strategic assessment framework capturing strengths,
              weaknesses, opportunities, and threats.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-pale-blue px-3 py-2 rounded">Strengths</div>
              <div className="bg-pale-blue px-3 py-2 rounded">Weaknesses</div>
              <div className="bg-pale-blue px-3 py-2 rounded">
                Opportunities
              </div>
              <div className="bg-pale-blue px-3 py-2 rounded">Threats</div>
            </div>
          </div>
          <div
            id="expansion-card-resources"
            className="bg-white rounded-xl p-8 border border-cool-gray"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                <i className="fa-solid fa-box-open text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray">
                Available Resources
              </h3>
            </div>
            <p className="text-medium-gray mb-4">
              Detailed inventory of human capital, financial assets, technology
              infrastructure, and material resources.
            </p>
            <ul className="space-y-2 text-sm text-medium-gray">
              <li className="flex items-center">
                <i className="fa-solid fa-check text-dark-cyan mr-2"></i>Human
                Resources
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-dark-cyan mr-2"></i>
                Financial Assets
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-dark-cyan mr-2"></i>
                Technology Stack
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-dark-cyan mr-2"></i>
                Material Inventory
              </li>
            </ul>
          </div>
          <div
            id="expansion-card-inventory"
            className="bg-white rounded-xl p-8 border border-cool-gray"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                <i className="fa-solid fa-warehouse text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray">
                Inventory System
              </h3>
            </div>
            <p className="text-medium-gray mb-4">
              Real-time tracking of project assets, deliverables, and resource
              allocation across all project phases.
            </p>
            <div className="flex items-center justify-between text-sm mt-4">
              <span className="text-medium-gray">Asset Tracking</span>
              <span className="bg-dark-cyan text-white px-2 py-1 rounded text-xs">
                Active
              </span>
            </div>
          </div>
          <div
            id="expansion-card-vision"
            className="bg-white rounded-xl p-8 border border-cool-gray"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                <i className="fa-solid fa-eye text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray">
                Vision & Mission Statements
              </h3>
            </div>
            <p className="text-medium-gray mb-4">
              Articulated long-term aspirations and core purpose that guide
              strategic decision-making throughout project lifecycle.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <i className="fa-solid fa-quote-left text-dark-cyan mr-2 mt-1"></i>
                <span className="text-medium-gray">Vision Statement</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-quote-left text-white mr-2 mt-1"></i>
                <span className="text-medium-gray">Mission Statement</span>
              </div>
            </div>
          </div>
          <div
            id="expansion-card-goals"
            className="bg-white rounded-xl p-8 border border-cool-gray"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                <i className="fa-solid fa-bullseye text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray">
                Goals & Objectives
              </h3>
            </div>
            <p className="text-medium-gray mb-4">
              Measurable targets and specific outcomes that define project
              success criteria and milestone achievements.
            </p>
            <div className="bg-pale-blue rounded-lg p-3 text-sm text-medium-gray">
              SMART Goals Framework
            </div>
          </div>
          <div
            id="expansion-card-openitems"
            className="bg-white rounded-xl p-8 border border-cool-gray"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                <i className="fa-solid fa-list-check text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray">
                Openitems Mapping
              </h3>
            </div>
            <p className="text-medium-gray mb-4">
              Integration with task management system for granular execution
              tracking and priority management.
            </p>
            <div className="flex items-center space-x-2 text-sm mt-4">
              <span className="bg-deep-blue text-white px-3 py-1 rounded-full">
                High Priority
              </span>
              <span className="bg-light-gray text-medium-gray px-3 py-1 rounded-full">
                Medium
              </span>
            </div>
          </div>
        </div>
        <div className="bg-deep-grey bg-opacity-5 border border-deep-blue border-opacity-20 rounded-xl p-6">
          <div className="flex items-start">
            <i className="fa-solid fa-lightbulb text-deep-blue text-xl mr-4 mt-1"></i>
            <p className="text-medium-gray leading-relaxed">
              <span className="font-semibold text-dark-gray">
                System Intelligence:
              </span>{" "}
              These fields populate downstream project logic and reporting
              systems, creating an interconnected knowledge graph that powers
              automated documentation, analytics dashboards, and predictive
              project insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructuredInputExpansion;
