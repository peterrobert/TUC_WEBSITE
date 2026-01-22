const StageProjectsSection = () => {
  return (
    <section
      id="stage-projects-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* LEFT PANEL */}
          <div className="bg-pale-blue border-2 border-deep-blue rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-4 sm:mb-6">
              Example Use Case
            </h4>

            <div className="bg-white rounded-lg p-4 sm:p-6 border border-cool-gray">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray">
                  Related Suggestions Feature
                </h5>

                <span className="w-fit px-2 sm:px-3 py-1 bg-dark-cyan text-white text-xs sm:text-sm rounded-full">
                  In Progress
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                <div className="bg-pale-blue rounded-lg p-3">
                  <p className="text-xs text-medium-gray mb-1">Timeline</p>
                  <p className="font-semibold text-sm sm:text-base text-dark-gray">
                    6 weeks
                  </p>
                </div>

                <div className="bg-pale-blue rounded-lg p-3">
                  <p className="text-xs text-medium-gray mb-1">Team Size</p>
                  <p className="font-semibold text-sm sm:text-base text-dark-gray">
                    4 members
                  </p>
                </div>

                <div className="bg-pale-blue rounded-lg p-3">
                  <p className="text-xs text-medium-gray mb-1">Progress</p>
                  <p className="font-semibold text-sm sm:text-base text-dark-gray">
                    40%
                  </p>
                </div>

                <div className="bg-pale-blue rounded-lg p-3">
                  <p className="text-xs text-medium-gray mb-1">Phase</p>
                  <p className="font-semibold text-sm sm:text-base text-dark-gray">
                    Development
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs sm:text-sm">
                  <i className="fa-solid fa-circle-check text-dark-cyan mr-2"></i>
                  <span className="text-medium-gray">
                    Requirements documented
                  </span>
                </div>

                <div className="flex items-center text-xs sm:text-sm">
                  <i className="fa-solid fa-circle-check text-dark-cyan mr-2"></i>
                  <span className="text-medium-gray">Design approved</span>
                </div>

                <div className="flex items-center text-xs sm:text-sm">
                  <i className="fa-solid fa-spinner text-deep-blue mr-2"></i>
                  <span className="text-dark-gray font-medium">
                    Backend implementation
                  </span>
                </div>

                <div className="flex items-center text-xs sm:text-sm opacity-50">
                  <i className="fa-regular fa-circle text-cool-gray mr-2"></i>
                  <span className="text-medium-gray">Testing & QA</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  alt="Team"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                />
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                  alt="Team"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                />
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                  alt="Team"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                />
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg"
                  alt="Team"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-deep-blue to-bright-blue rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <i className="fa-solid fa-folder-open text-white text-lg sm:text-2xl lg:text-3xl"></i>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray">
                  Projects
                </h2>
                <p className="text-sm sm:text-base text-medium-gray font-medium">
                  Stage 4: Active Initiatives
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Execute on prioritized suggestions with dedicated teams, clear
                  objectives, and defined timelines. Projects have committed
                  resources and active management to ensure completion.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Top10 suggestions with full scoping, team assignments,
                  milestone definitions, and success criteria. Projects launch
                  with clear ownership and accountability.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Completed deliverables that move to the Results stage for
                  impact measurement. Project outcomes are documented and
                  attributed to all contributors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageProjectsSection;
