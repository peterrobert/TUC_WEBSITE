const SuggestionConnection = () => {
  return (
    <section
      id="sys-sb-suggestion-connection"
      className="py-16 sm:py-20 border-y border-cool-gray bg-white"
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text text-center mb-4">
          How Suggestion Box Connects Inside TUC
        </h2>

        <p className="text-center text-medium-text mb-10 sm:mb-12 max-w-3xl mx-auto">
          The Suggestion Box integrates seamlessly with the broader TUC
          ecosystem.
        </p>

        {/* Responsive Layout */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Central Hub */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-deep-blue flex items-center justify-center shrink-0">
            <div className="text-center text-white px-4">
              <i className="fa-solid fa-inbox text-3xl sm:text-4xl mb-3"></i>
              <div className="font-bold text-base sm:text-lg">
                Suggestion Box
              </div>
              <div className="text-xs opacity-90">Coordination Hub</div>
            </div>
          </div>

          {/* Integration Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Openitem System */}
            <div className="bg-light-surface rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-exclamation-circle text-dark-cyan text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-dark-text mb-2">
                    Openitem System
                  </h3>
                  <p className="text-medium-text text-sm">
                    For priority tracking and task coordination
                  </p>
                </div>
              </div>
            </div>

            {/* Project Systems */}
            <div className="bg-light-surface rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-project-diagram text-deep-blue text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-dark-text mb-2">
                    Project Systems
                  </h3>
                  <p className="text-medium-text text-sm">
                    Where ideas move into execution
                  </p>
                </div>
              </div>
            </div>

            {/* Collaboration Tools */}
            <div className="bg-light-surface rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-users text-dark-cyan text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-dark-text mb-2">
                    Collaboration Tools
                  </h3>
                  <p className="text-medium-text text-sm">
                    For discussion and remixing
                  </p>
                </div>
              </div>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-light-surface rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-chart-bar text-deep-blue text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-dark-text mb-2">
                    Analytics & Reporting
                  </h3>
                  <p className="text-medium-text text-sm">
                    For insight and learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-12 pt-6 border-t border-cool-gray">
          <p className="text-dark-text font-semibold italic">
            The Suggestion Box coordinates and hands off. Execution happens
            elsewhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuggestionConnection;
