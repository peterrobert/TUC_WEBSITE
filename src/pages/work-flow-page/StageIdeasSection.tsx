const StageIdeasSection = () => {
  return (
    <section
      id="pipeline-overview-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-3 sm:mb-4">
            The TUC Pipeline
          </h2>

          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-deep-blue mx-auto mb-4 sm:mb-6"></div>

          <p className="text-sm sm:text-base md:text-lg text-medium-gray max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
            Seven interconnected stages that organize reality and reduce
            coordination waste
          </p>
        </div>

        {/* PIPELINE DIAGRAM */}
        <div
          id="pipeline-diagram"
          className="bg-white border-2 border-cool-gray rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 mb-10 sm:mb-14 lg:mb-16"
        >
          {/* TOP ROW */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-6">
            {[
              { icon: "fa-lightbulb", title: "Ideas", desc: "Raw thinking" },
              {
                icon: "fa-inbox",
                title: "Suggestions",
                desc: "Structured proposals",
              },
              { icon: "fa-trophy", title: "Top10", desc: "Prioritized list" },
              {
                icon: "fa-folder-open",
                title: "Projects",
                desc: "Active initiatives",
              },
            ].map((item, index, arr) => (
              <div
                key={index}
                className="flex flex-col items-center md:flex-row flex-1"
              >
                {/* Item */}
                <div className="text-center pipeline-connector flex-1">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-deep-blue to-bright-blue rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <i
                      className={`fa-solid ${item.icon} text-white text-lg sm:text-2xl lg:text-3xl`}
                    ></i>
                  </div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-dark-gray mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-medium-gray">
                    {item.desc}
                  </p>
                </div>

                {/* Arrows */}
                {index < arr.length - 1 && (
                  <>
                    {/* Horizontal arrow for md+ */}
                    <i className="fa-solid fa-arrow-right hidden md:block text-deep-blue text-xl mx-4 arrow-horizontal"></i>

                    {/* Vertical arrow for mobile/tablet */}
                    <i className="fa-solid fa-arrow-down block md:hidden text-deep-blue text-2xl my-2 arrow-vertical"></i>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* BOTTOM ROW */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            {[
              {
                icon: "fa-list-check",
                title: "Tasks",
                desc: "Specific actions",
              },
              {
                icon: "fa-chart-line",
                title: "Results",
                desc: "Measurable outcomes",
              },
              {
                icon: "fa-water",
                title: "Ripple Effects",
                desc: "Extended impact",
              },
            ].map((item, index, arr) => (
              <div
                key={index}
                className="flex flex-col items-center md:flex-row flex-1"
              >
                {/* Item */}
                <div className="text-center pipeline-connector flex-1">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-dark-cyan to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <i
                      className={`fa-solid ${item.icon} text-white text-lg sm:text-2xl lg:text-3xl`}
                    ></i>
                  </div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-dark-gray mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-medium-gray">
                    {item.desc}
                  </p>
                </div>

                {/* Arrows */}
                {index < arr.length - 1 && (
                  <>
                    {/* Horizontal arrow for md+ */}
                    <i className="fa-solid fa-arrow-right hidden md:block text-deep-blue text-xl mx-4 arrow-horizontal"></i>

                    {/* Vertical arrow for mobile/tablet */}
                    <i className="fa-solid fa-arrow-down block md:hidden text-deep-blue text-2xl my-2 arrow-vertical"></i>
                  </>
                )}
              </div>
            ))}
            <div className="hidden md:block flex-1"></div>
          </div>
        </div>

        {/* QUOTE BLOCK */}
        <div className="bg-deep-blue text-white rounded-xl p-5 sm:p-8 lg:p-10 text-center">
          <div className="max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto space-y-4 sm:space-y-5">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-serif leading-relaxed">
              This is the shared path work follows inside TUC. Each stage adds
              clarity, reduces coordination waste, and keeps useful work
              visible.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-serif leading-relaxed">
              <span className="font-semibold">Explore Level 2:</span> See how
              each stage works in practice through real views and examples.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-serif leading-relaxed">
              <span className="font-semibold">Explore Level 3:</span> Learn why
              this pipeline is structured this way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageIdeasSection;
