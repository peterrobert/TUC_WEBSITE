const StageSuggestionsSection = () => {
  return (
    <section
      id="stage-suggestions-section"
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
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 sm:px-3 py-1 bg-deep-blue text-white text-xs sm:text-sm rounded-full font-medium">
                  Suggestion #247
                </span>
                <span className="text-xs sm:text-sm text-medium-gray">
                  Under Review
                </span>
              </div>

              <h5 className="text-base sm:text-lg font-semibold text-dark-gray mb-3">
                Implement Related Suggestions Feature
              </h5>

              <div className="space-y-3 text-xs sm:text-sm text-medium-gray">
                <div>
                  <p className="font-medium text-dark-gray mb-1">Problem:</p>
                  <p>
                    Users can't easily discover related or duplicate
                    suggestions, leading to fragmented discussions and redundant
                    work.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-dark-gray mb-1">
                    Proposed Solution:
                  </p>
                  <p>
                    Add automatic suggestion linking based on keywords and
                    manual linking by users. Display related suggestions in a
                    sidebar.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-dark-gray mb-1">
                    Expected Impact:
                  </p>
                  <p>
                    Reduce duplicate submissions by 40%, improve context for
                    evaluators, strengthen idea clustering.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-cool-gray flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
                  <span className="flex items-center text-medium-gray">
                    <i className="fa-solid fa-thumbs-up mr-1 text-dark-cyan"></i>
                    23
                  </span>

                  <span className="flex items-center text-medium-gray">
                    <i className="fa-solid fa-comment mr-1 text-deep-blue"></i>8
                  </span>
                </div>

                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  alt="Author"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-deep-blue to-bright-blue rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <i className="fa-solid fa-inbox text-white text-lg sm:text-2xl lg:text-3xl"></i>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray">
                  Suggestions
                </h2>

                <p className="text-sm sm:text-base text-medium-gray font-medium">
                  Stage 2: Structured Proposals
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>

                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Transform raw ideas into structured proposals with context,
                  rationale, and initial evaluation criteria. Suggestions are
                  detailed enough for others to understand and evaluate but not
                  yet fully scoped projects.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>

                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Problem statement, proposed solution, expected impact,
                  relevant context, and any supporting evidence. Structured
                  template ensures consistency and completeness.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>

                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Suggestions that receive community support and pass evaluation
                  criteria move to the Top10 prioritization queue. Others remain
                  visible for future consideration or iteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageSuggestionsSection;
