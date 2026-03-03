const FinancialModule = () => {
  return (
    <section id="sys-project-financial-module" className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
            Financial Module Integration
          </span>
          <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
            Financial Document Engine
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">
            Automated financial reporting system that generates comprehensive
            accounting documents from project data.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div
            id="financial-balance-sheet"
            className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-balance-scale text-white text-2xl"></i>
              </div>
              <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                Auto-Generated
              </span>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3">
              Balance Sheet
            </h3>
            <p className="text-medium-gray mb-4">
              Comprehensive snapshot of assets, liabilities, and equity at any
              point in time
            </p>
            <div className="flex items-center text-sm text-medium-gray">
              <i className="fa-solid fa-file-pdf text-deep-blue mr-2"></i>
              <span>PDF Export Ready</span>
            </div>
          </div>
          <div
            id="financial-pl"
            className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-chart-line text-white text-2xl"></i>
              </div>
              <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                Auto-Generated
              </span>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3">
              Profit & Loss Statement
            </h3>
            <p className="text-medium-gray mb-4">
              Revenue, expenses, and net income analysis across reporting
              periods
            </p>
            <div className="flex items-center text-sm text-medium-gray">
              <i className="fa-solid fa-file-excel text-dark-cyan mr-2"></i>
              <span>Excel Export Ready</span>
            </div>
          </div>
          <div
            id="financial-cashflow"
            className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-hand-holding-usd text-white text-2xl"></i>
              </div>
              <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                Auto-Generated
              </span>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3">
              Cash Flow Statement
            </h3>
            <p className="text-medium-gray mb-4">
              Operating, investing, and financing activities tracking
            </p>
            <div className="flex items-center text-sm text-medium-gray">
              <i className="fa-solid fa-file-pdf text-deep-blue mr-2"></i>
              <span>PDF Export Ready</span>
            </div>
          </div>
          <div
            id="financial-retained"
            className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-piggy-bank text-white text-2xl"></i>
              </div>
              <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                Auto-Generated
              </span>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3">
              Retained Earnings
            </h3>
            <p className="text-medium-gray mb-4">
              Cumulative net income retained for reinvestment
            </p>
            <div className="flex items-center text-sm text-medium-gray">
              <i className="fa-solid fa-file-alt text-deep-blue mr-2"></i>
              <span>Document Ready</span>
            </div>
          </div>
          <div
            id="financial-ar"
            className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-receipt text-white text-2xl"></i>
              </div>
              <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                Auto-Generated
              </span>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3">
              Accounts Receivable Reports
            </h3>
            <p className="text-medium-gray mb-4">
              Outstanding invoices and payment tracking
            </p>
            <div className="flex items-center text-sm text-medium-gray">
              <i className="fa-solid fa-file-excel text-dark-cyan mr-2"></i>
              <span>Excel Export Ready</span>
            </div>
          </div>
          <div
            id="financial-projections"
            className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-crystal-ball text-white text-2xl"></i>
              </div>
              <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                Auto-Generated
              </span>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3">
              Business Financial Projections
            </h3>
            <p className="text-medium-gray mb-4">
              Forward-looking financial forecasts and scenario modeling
            </p>
            <div className="flex items-center text-sm text-medium-gray">
              <i className="fa-solid fa-file-powerpoint text-deep-blue mr-2"></i>
              <span>Presentation Ready</span>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-pale-blue rounded-xl p-6 border border-cool-gray">
          <div className="flex items-start">
            <i className="fa-solid fa-magic text-deep-blue text-xl mr-4 mt-1"></i>
            <p className="text-medium-gray leading-relaxed">
              <span className="font-semibold text-dark-gray">
                Automated Intelligence:
              </span>{" "}
              All financial documents are generated automatically from
              structured project data, eliminating manual accounting work and
              ensuring real-time accuracy across all reporting periods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialModule;
