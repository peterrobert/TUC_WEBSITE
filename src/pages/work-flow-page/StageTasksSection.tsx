const StageTasksSection = () => {
  return (
    <section
      id="stage-tasks-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-white border-y border-cool-gray"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-dark-cyan to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <i className="fa-solid fa-list-check text-white text-lg sm:text-2xl lg:text-3xl"></i>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray">
                  Tasks
                </h2>
                <p className="text-sm sm:text-base text-medium-gray font-medium">
                  Stage 5: Specific Actions
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Break projects into actionable work units that can be
                  assigned, tracked, and completed. Tasks are the atomic units
                  of execution—specific, measurable, and time-bound.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Project requirements decomposed into discrete actions with
                  clear acceptance criteria, estimated effort, and dependencies
                  mapped. Tasks are sized for completion within days, not weeks.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Completed tasks that aggregate into project deliverables. Each
                  completed task contributes to measurable progress and
                  maintains attribution to the contributor.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-pale-blue border-2 border-dark-cyan rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-4 sm:mb-6">
              Example Use Case
            </h4>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-dark-cyan">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-dark-cyan text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Design database schema for suggestion relationships
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray mt-1">
                      Completed by Marcus T. • 2 days ago
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-deep-blue">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-spinner text-deep-blue text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Implement keyword extraction algorithm
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray mt-1">
                      Assigned to Sarah M. • Due in 3 days
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-cool-gray opacity-60">
                <div className="flex items-start space-x-3">
                  <i className="fa-regular fa-circle text-cool-gray text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Build UI for related suggestions sidebar
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray mt-1">
                      Unassigned • Blocked by #247
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-cool-gray opacity-60">
                <div className="flex items-start space-x-3">
                  <i className="fa-regular fa-circle text-cool-gray text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Write integration tests for linking feature
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray mt-1">
                      Unassigned • Estimated 2 days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-dark-cyan text-white rounded-lg">
              <p className="text-xs sm:text-sm">
                <i className="fa-solid fa-info-circle mr-2"></i>
                Smart task logic automatically surfaces available tasks based on
                contributor skills and availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageTasksSection;
