const TimelineComponents = () => {
  return (
    <section id="timeline-components" className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
            Timeline Components
          </span>
          <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
            Timeline Intelligence Components
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">
            Sophisticated temporal tracking elements that create
            multi-dimensional project chronology visualization.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div
            id="component-dates"
            className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-calendar-alt text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2">
              Start and End Dates
            </h3>
            <p className="text-sm text-medium-gray">
              Precise temporal boundaries for project phases and deliverables
            </p>
          </div>
          <div
            id="component-milestones"
            className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-flag-checkered text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2">
              Milestones
            </h3>
            <p className="text-sm text-medium-gray">
              Critical achievement markers that define project progression
            </p>
          </div>
          <div
            id="component-tasks"
            className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-tasks text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2">
              Major Tasks
            </h3>
            <p className="text-sm text-medium-gray">
              Key work packages with defined scopes and deliverables
            </p>
          </div>
          <div
            id="component-duration"
            className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-hourglass-half text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2">
              Duration Bars
            </h3>
            <p className="text-sm text-medium-gray">
              Visual representation of time allocation across activities
            </p>
          </div>
          <div
            id="component-dependencies"
            className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-project-diagram text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2">
              Task Dependencies
            </h3>
            <p className="text-sm text-medium-gray">
              Relationship mapping between sequential and parallel work streams
            </p>
          </div>
          <div
            id="component-assignments"
            className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-user-check text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2">
              Team Assignments
            </h3>
            <p className="text-sm text-medium-gray">
              Resource allocation and responsibility distribution tracking
            </p>
          </div>
          <div
            id="component-gantt"
            className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-chart-gantt text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2">
              Visual Gantt-style Rendering
            </h3>
            <p className="text-sm text-medium-gray">
              Industry-standard timeline visualization with parallel track
              display
            </p>
          </div>
          <div
            id="component-progress"
            className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-chart-line text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-gray mb-2">
              Progress Tracking
            </h3>
            <p className="text-sm text-medium-gray">
              Real-time completion percentage and velocity metrics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponents;
