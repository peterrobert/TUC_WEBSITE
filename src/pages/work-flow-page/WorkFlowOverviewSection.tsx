const WorkFlowOverviewSection = () => {
  return (
    <section
      id="stage-ideas-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 border-y border-cool-gray bac"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* HEADER */}
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-deep-blue to-bright-blue rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <i className="fa-solid fa-lightbulb text-white text-lg sm:text-2xl lg:text-3xl"></i>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray">
                  Ideas
                </h2>
                <p className="text-sm sm:text-base text-medium-gray font-medium">
                  Stage 1: Raw Thinking
                </p>
              </div>
            </div>

            {/* TEXT BLOCKS */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Capture unfiltered thinking from anyone in the community.
                  Ideas are observations, possibilities, or questions—not yet
                  structured proposals. This stage values quantity and diversity
                  over polish.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Raw thoughts, observations, "what if" questions, pain points,
                  opportunities. No formal structure required. Can be a single
                  sentence or a paragraph.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Ideas that resonate or show promise move to the Suggestion
                  stage for development. Others remain visible in the idea
                  repository for future reference.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-pale-blue border-2 border-deep-blue rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-4 sm:mb-6">
              Example Use Case
            </h4>

            {/* CARD 1 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 border border-cool-gray">
              <div className="flex items-start space-x-3 mb-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  alt="User"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm sm:text-base text-dark-gray">
                    Sarah M.
                  </p>
                  <p className="text-xs sm:text-sm text-medium-gray">
                    2 days ago
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-medium-gray italic">
                "What if we had a way to see which suggestions are related to
                each other? Sometimes I submit an idea and later realize someone
                else had a similar thought months ago."
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-cool-gray">
              <div className="flex items-start space-x-3 mb-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                  alt="User"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm sm:text-base text-dark-gray">
                    Marcus T.
                  </p>
                  <p className="text-xs sm:text-sm text-medium-gray">
                    5 days ago
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-medium-gray italic">
                "The feedback loop on suggestions feels slow. Maybe we need
                better notification systems when someone comments on our work?"
              </p>
            </div>

            {/* INFO BOX */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-deep-blue text-white rounded-lg">
              <p className="text-xs sm:text-sm">
                <i className="fa-solid fa-info-circle mr-2"></i>Both ideas show
                promise and could be developed into structured suggestions with
                more detail and context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlowOverviewSection;
