const TimelineSystem = () => {
  return (
    <section id="sys-project-timeline-system" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div id="timeline-content">
            <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
              Timeline System
            </span>
            <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-6">
              Timeline / Schedule / Calendar Engine
            </h2>
            <div className="prose prose-lg">
              <p className="text-lg text-medium-gray leading-relaxed mb-6">
                Projects use timestamp tagging to automatically populate
                multiple temporal visualization formats, creating a
                comprehensive understanding of project chronology and execution
                sequence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-10 h-10 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-timeline text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">
                      Timeline View
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Sequential visualization of project events and milestones
                      in chronological order
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-10 h-10 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">
                      Schedule View
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Resource allocation and task scheduling across project
                      phases
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-10 h-10 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-calendar-days text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">
                      Calendar Integrations
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Synchronization with external calendar systems for unified
                      scheduling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="timeline-visual"
            className="bg-pale-blue rounded-xl p-8 border border-cool-gray"
          >
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-deep-blue"></div>
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-deep-blue rounded-full transform -translate-x-1/2 border-4 border-pale-blue"></div>
                  <div className="ml-16 bg-white rounded-lg p-4 flex-1 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-dark-gray">
                        Project Kickoff
                      </span>
                      <span className="text-xs text-medium-gray">
                        Jan 15, 2024
                      </span>
                    </div>
                    <p className="text-sm text-medium-gray">
                      Initial planning and team assembly
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-dark-cyan rounded-full transform -translate-x-1/2 border-4 border-pale-blue"></div>
                  <div className="ml-16 bg-white rounded-lg p-4 flex-1 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-dark-gray">
                        Discovery Phase
                      </span>
                      <span className="text-xs text-medium-gray">
                        Feb 1, 2024
                      </span>
                    </div>
                    <p className="text-sm text-medium-gray">
                      Research and requirements gathering
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-deep-blue rounded-full transform -translate-x-1/2 border-4 border-pale-blue"></div>
                  <div className="ml-16 bg-white rounded-lg p-4 flex-1 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-dark-gray">
                        Development Sprint 1
                      </span>
                      <span className="text-xs text-medium-gray">
                        Mar 1, 2024
                      </span>
                    </div>
                    <p className="text-sm text-medium-gray">
                      Core functionality implementation
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-light-gray rounded-full transform -translate-x-1/2 border-4 border-pale-blue"></div>
                  <div className="ml-16 bg-white rounded-lg p-4 flex-1 shadow-sm border-2 border-dashed border-cool-gray">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-medium-gray">
                        Launch
                      </span>
                      <span className="text-xs text-medium-gray">
                        Jun 1, 2024
                      </span>
                    </div>
                    <p className="text-sm text-medium-gray">
                      Public release and deployment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSystem;
