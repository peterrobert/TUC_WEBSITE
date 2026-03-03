const HistoricalTimeline = () => {
  return (
    <section id="historical-timeline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-linear-to-r from-pale-blue to-white rounded-2xl p-12 border border-cool-gray">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
              Historical Timeline Mode
            </span>
            <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-6">
              Historical Project Tracking
            </h2>
            <p className="text-lg text-medium-gray mb-8 leading-relaxed">
              Advanced chronological documentation system that preserves
              complete project history for organizational learning and future
              reference.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-stream text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">
                    Event Sequencing
                  </h4>
                  <p className="text-sm text-medium-gray">
                    Chronological ordering of all project activities and
                    decisions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-calendar-days text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">
                    Date-Based Ordering
                  </h4>
                  <p className="text-sm text-medium-gray">
                    Temporal organization with precise timestamp attribution
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-camera text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">
                    Visual Documentation
                  </h4>
                  <p className="text-sm text-medium-gray">
                    Rich media capture of project states and deliverables
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-file-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">
                    Context Descriptions
                  </h4>
                  <p className="text-sm text-medium-gray">
                    Detailed narratives explaining decisions and outcomes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 col-span-2">
                <div className="shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-code-branch text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">
                    Cause-and-Effect Relationships
                  </h4>
                  <p className="text-sm text-medium-gray">
                    Analytical mapping of decision impacts and consequence
                    chains throughout project lifecycle
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-xl p-6 border border-cool-gray">
              <p className="text-medium-gray leading-relaxed">
                <i className="fa-solid fa-info-circle text-deep-blue mr-2"></i>
                <span className="font-semibold text-dark-gray">
                  Long-term Value:
                </span>{" "}
                Allows comprehensive project traceability and learning reuse,
                building institutional knowledge that improves organizational
                capability over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalTimeline;
