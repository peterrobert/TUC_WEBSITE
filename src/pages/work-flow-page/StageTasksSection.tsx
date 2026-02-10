const StageTasksSection = () => {
  return (
    <section
      id="stage-tasks-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 border-y border-cool-gray"
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
                  Stage 5: Specific Actions · Clear Ownership · Measurable
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
                  Turn aligned projects into executable work. Tasks break shared
                  intent into small, concrete actions that people can pick up,
                  complete, and move forward—without needing to understand the
                  entire system. Tasks are where contribution becomes visible
                  and progress compounds.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Projects decomposed into discrete Job Tickets with:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-medium-gray mt-2 space-y-1">
                  <li>A clear outcome</li>
                  <li>Defined scope and dependencies</li>
                  <li>Acceptance criteria</li>
                  <li>Estimated effort sized in days, not weeks</li>
                  <li>
                    Each task represents one meaningful step forward—no
                    ambiguity, no hidden work.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Completed tasks roll up into project milestones and system
                  improvements. Every task completed:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-medium-gray mt-2 space-y-1">
                  <li>Advances real progress</li>
                  <li>Reduces friction for others</li>
                  <li>
                    Preserves attribution and learning for future contributors
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-pale-blue border-2 border-dark-cyan rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-4 sm:mb-6">
              Example Use Case — Tasks from the 3-Level Design Project
            </h4>

            <div className="space-y-3">
              {/* JT-021 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-dark-cyan">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-circle-check text-dark-cyan text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      JT-021 — Define Level 1 Orientation Rules
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray mt-1">
                      Clarify what content belongs in Level 1<br />
                      Define heading hierarchy, spacing, and CTA placement
                      <br />
                      Output: documented Level 1 design rules used across the
                      site
                    </p>
                  </div>
                </div>
              </div>

              {/* JT-022 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-deep-blue">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-spinner text-deep-blue text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      JT-022 — Design Level 2 Engagement Patterns
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray mt-1">
                      Identify interactive elements that support participation
                      without overload
                      <br />
                      Standardize buttons, highlights, and navigation cues
                      <br />
                      Output: reusable Level 2 UI patterns
                    </p>
                  </div>
                </div>
              </div>

              {/* JT-023 */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-cool-gray opacity-60">
                <div className="flex items-start space-x-3">
                  <i className="fa-regular fa-circle text-cool-gray text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      JT-023 — Map Level 3 Deep-Dive Structure
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray mt-1">
                      Define how advanced users access full system depth
                      <br />
                      Ensure Level 3 is discoverable but never forced
                      <br />
                      Output: clear Level 3 entry points and layout guidelines
                    </p>
                  </div>
                </div>
              </div>

              {/* Source Signals */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-cool-gray opacity-60">
                <div className="flex items-start space-x-3">
                  <i className="fa-regular fa-circle text-cool-gray text-lg sm:text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-gray">
                      Source Signals
                    </p>
                    <p className="text-xs sm:text-sm text-medium-gray mt-1">
                      Esther flagged inconsistency across layout, hierarchy,
                      spacing, and CTAs
                      <br />
                      Frankie flagged early complexity creating drop-off
                      <br />
                      These signals became a Top10 priority and were scoped into
                      a project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-dark-cyan text-white rounded-lg">
              <p className="text-xs sm:text-sm">
                <i className="fa-solid fa-info-circle mr-2"></i>
                Tasks are where TUC’s philosophy becomes practical. By letting
                people do only what they can, work moves faster, waste drops,
                and better solutions emerge—without pressure, hierarchy, or
                bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageTasksSection;
