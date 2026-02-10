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
              Example Use Case — From Signal to Project
            </h4>

            <div className="bg-white rounded-lg p-4 sm:p-6 border border-cool-gray">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray">
                  3-Level Design System
                </h5>

                <span
                  className="
        inline-flex items-center justify-center
        px-2 sm:px-2.5 py-0.5
        bg-dark-cyan text-white
        text-xs sm:text-sm
        leading-none whitespace-nowrap
        rounded-full
      "
                >
                  Active Project
                </span>
              </div>

              {/* Source Signals */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                <div className="bg-pale-blue rounded-lg p-3">
                  <p className="text-xs text-medium-gray mb-1">Source</p>
                  <p className="font-semibold text-sm sm:text-base text-dark-gray">
                    Suggestions & Top10
                  </p>
                </div>

                <div className="bg-pale-blue rounded-lg p-3">
                  <p className="text-xs text-medium-gray mb-1">Impact</p>
                  <p className="font-semibold text-sm sm:text-base text-dark-gray">
                    High (Clarity & Trust)
                  </p>
                </div>

                <div className="bg-pale-blue rounded-lg p-3">
                  <p className="text-xs text-medium-gray mb-1">Focus</p>
                  <p className="font-semibold text-sm sm:text-base text-dark-gray">
                    Sequencing & Signals
                  </p>
                </div>

                <div className="bg-pale-blue rounded-lg p-3">
                  <p className="text-xs text-medium-gray mb-1">Outcome</p>
                  <p className="font-semibold text-sm sm:text-base text-dark-gray">
                    Coordinated Execution
                  </p>
                </div>
              </div>

              {/* Signals surfaced */}
              <div className="space-y-2 mb-4">
                <div className="flex items-start text-xs sm:text-sm">
                  <i className="fa-solid fa-circle-check text-dark-cyan mr-2 mt-0.5"></i>
                  <span className="text-medium-gray">
                    Esther flagged inconsistency across headings, spacing,
                    colors, CTAs, and visual hierarchy.
                  </span>
                </div>

                <div className="flex items-start text-xs sm:text-sm">
                  <i className="fa-solid fa-circle-check text-dark-cyan mr-2 mt-0.5"></i>
                  <span className="text-medium-gray">
                    Frankie noted early complexity created friction for
                    first-time visitors.
                  </span>
                </div>

                <div className="flex items-start text-xs sm:text-sm">
                  <i className="fa-solid fa-circle-check text-dark-cyan mr-2 mt-0.5"></i>
                  <span className="text-medium-gray">
                    These signals repeated and rose into the Top10 as
                    high-impact red flags.
                  </span>
                </div>
              </div>

              {/* Project intent */}
              <div className="space-y-2 mb-4">
                <p className="text-sm sm:text-base text-dark-gray font-medium">
                  Why this project exists
                </p>
                <p className="text-xs sm:text-sm text-medium-gray leading-relaxed">
                  Users were being asked to think at different depths without
                  clear orientation. The issue wasn’t content quality — it was
                  sequencing, signaling, and access.
                </p>
              </div>

              {/* Goal */}
              <div className="space-y-2 mb-4">
                <p className="text-sm sm:text-base text-dark-gray font-medium">
                  Project Goal
                </p>

                <div className="flex items-center text-xs sm:text-sm">
                  <i className="fa-solid fa-circle-check text-dark-cyan mr-2"></i>
                  <span className="text-medium-gray">
                    Orient first-time visitors (Level 1)
                  </span>
                </div>

                <div className="flex items-center text-xs sm:text-sm">
                  <i className="fa-solid fa-circle-check text-dark-cyan mr-2"></i>
                  <span className="text-medium-gray">
                    Support practical understanding and participation (Level 2)
                  </span>
                </div>

                <div className="flex items-center text-xs sm:text-sm">
                  <i className="fa-solid fa-circle-check text-dark-cyan mr-2"></i>
                  <span className="text-medium-gray">
                    Preserve full system depth without overwhelm (Level 3)
                  </span>
                </div>
              </div>

              {/* Blue box copy */}
              <div className="bg-deep-blue rounded-lg p-3 text-xs sm:text-sm text-white leading-relaxed">
                Projects in TUC don’t start from assumptions — they start from
                shared signals. By letting suggestions and Top10s shape
                execution, work moves faster, stays relevant, and reflects the
                people it’s built for.
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
                  Stage 4: Active Initiatives · Coordinated Execution · Visible
                  Progress
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Turn prioritized signals into real work. Projects exist to
                  execute on what the community has already aligned around—using
                  clear ownership, shared context, and transparent progress so
                  effort compounds instead of resetting.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Top10 items that have enough clarity, urgency, and support to
                  move forward. Inputs include prioritized red flags 🚩, grouped
                  suggestions, defined goals, and early success criteria.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Active initiatives with committed contributors, scoped
                  milestones, and visible progress. Outcomes are documented,
                  measured, and attributed—then fed forward into Results and
                  future iterations.
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
