const ComparisonSection = () => {
  return (
    <section
      id="comparison-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
            Traditional vs. TUC Approach
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-deep-blue mx-auto mb-3 sm:mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-medium-gray max-w-3xl mx-auto">
            Understanding the difference in coordination patterns
          </p>
        </div>

        {/* COMPARISON CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* TRADITIONAL APPROACH */}
          <div className="bg-white border-2 border-cool-gray rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-light-gray rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                <i className="fa-solid fa-times text-medium-gray text-base sm:text-xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-dark-gray">
                Traditional Approach
              </h3>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Ideas disappear into email threads and Slack channels",
                "No systematic evaluation before resource commitment",
                "Contributors lose credit as work moves through organization",
                "Projects exist in silos with no cross-pollination",
                "Impact is rarely measured or documented",
                "Coordination happens through meetings and status updates",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-circle text-medium-gray text-[0.5rem] sm:text-xs mr-2 sm:mr-3 mt-1.5 sm:mt-2"></i>
                  <p className="text-sm sm:text-base text-medium-gray">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* TUC APPROACH */}
          <div className="bg-white border-2 border-dark-cyan rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-cyan rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                <i className="fa-solid fa-check text-white text-base sm:text-xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-dark-gray">
                TUC Approach
              </h3>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Ideas captured in structured system with full visibility",
                "Multi-stage evaluation before significant resource investment",
                "Attribution maintained from idea through ripple effects",
                "Related work surfaces automatically through linking",
                "Results measured and ripple effects tracked long-term",
                "Coordination happens through transparent infrastructure",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-circle-check text-dark-cyan text-sm mr-2 sm:mr-3 mt-0.5 sm:mt-1"></i>
                  <p className="text-sm sm:text-base text-medium-gray">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="bg-deep-blue text-white rounded-xl p-6 sm:p-8 lg:p-10 text-center mt-8 sm:mt-10 lg:mt-12">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold mb-2 sm:mb-4">
            The Difference is Structural
          </h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
            TUC doesn't rely on better processes or more disciplined people. The
            pipeline enforces coordination patterns through its architecture.
            You can't skip evaluation stages. You can't lose attribution. The
            system prevents the failure modes that plague traditional
            approaches.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
