const SystemOutPut = () => {
  return (
    <section id="sys-top10-system-output" className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-white border border-cool-gray rounded text-xs font-medium text-medium-gray mb-4">
            System Outputs
          </div>
          <h2 className="text-4xl font-serif font-bold text-dark-gray mb-4">
            What The System Produces
          </h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-deep-blue shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-deep-blue rounded-lg flex items-center justify-center shrink-0">
                <i className="fa-solid fa-list-ol text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-dark-gray mb-1">
                  Live Top10 Ranked Lists
                </h3>
                <p className="text-sm text-medium-gray">
                  Real-time rankings updated continuously based on system
                  signals
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-medium-gray">Primary Output</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-dark-cyan shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-dark-cyan rounded-lg flex items-center justify-center shrink-0">
                <i className="fa-solid fa-trophy text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-dark-gray mb-1">
                  Category Leaderboards
                </h3>
                <p className="text-sm text-medium-gray">
                  Specialized rankings for different content types and
                  activities
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-medium-gray">Discovery Tool</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-deep-blue shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-deep-blue rounded-lg flex items-center justify-center shrink-0">
                <i className="fa-solid fa-compass text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-dark-gray mb-1">
                  Project Discovery Feeds
                </h3>
                <p className="text-sm text-medium-gray">
                  Curated streams of emerging and noteworthy contributions
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-medium-gray">Navigation Aid</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-dark-cyan shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-dark-cyan rounded-lg flex items-center justify-center shrink-0">
                <i className="fa-solid fa-id-badge text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-dark-gray mb-1">
                  Contributor Reputation Profiles
                </h3>
                <p className="text-sm text-medium-gray">
                  Comprehensive records of participation, impact, and
                  collaboration history
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-medium-gray">
                  Recognition System
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemOutPut;
