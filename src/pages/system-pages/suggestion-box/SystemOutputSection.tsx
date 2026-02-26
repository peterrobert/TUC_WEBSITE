const SystemOutputSection = () => {
  return (
    <section id="sys-sb-system-output" className="py-20">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text text-center mb-6">
          What The Suggestion Box Produces
        </h2>

        <p className="text-center text-medium-text max-w-3xl mx-auto mb-12">
          The Suggestion Box produces shared artifacts that support coordination
          and follow-through.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Live Prioritized Suggestions List */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center shrink-0 mt-1">
              <i className="fa-solid fa-list-ol text-white text-2xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                Live Prioritized Suggestions List
              </h3>
              <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                Ranking of active suggestions based on engagement and impact
              </p>
            </div>
          </div>

          {/* Spotlighted Suggestions */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center shrink-0 mt-1">
              <i className="fa-solid fa-star text-white text-2xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                Spotlighted Suggestions
              </h3>
              <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                High-engagement and high-appreciation ideas surfaced for
                attention
              </p>
            </div>
          </div>

          {/* Progress Tracking Dashboards */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center shrink-0 mt-1">
              <i className="fa-solid fa-chart-pie text-white text-2xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                Progress Tracking Dashboards
              </h3>
              <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                Visual views of suggestion movement from input to action
              </p>
            </div>
          </div>

          {/* Contributor Reputation Metrics */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center shrink-0 mt-1">
              <i className="fa-solid fa-award text-white text-2xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                Contributor Reputation Metrics
              </h3>
              <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                Transparent tracking of participation and impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemOutputSection;
