const SystemDefination = () => {
  return (
    <section
      id="system-definition"
      className="py-14 sm:py-16 md:py-20 bg-white border-y border-cool-gray"
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/** Section Heading **/}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-dark-text text-center mb-6 sm:mb-8">
            What Is TUC Suggestion Box?
          </h2>

          {/** Card Container **/}
          <div className="bg-light-surface rounded-2xl p-6 sm:p-8 md:p-10 space-y-6">
            <p className="text-base sm:text-lg text-medium-text leading-relaxed">
              The TUC Suggestion Box is a regenerative feedback and coordination
              system that converts community input into actionable insight.
            </p>

            <div className="space-y-4">
              <p className="text-medium-text font-medium">It supports:</p>

              <ul className="space-y-4">
                {[
                  "Multi-channel feedback",
                  "Collaboration and discussion tools",
                  "Dashboards, reporting, and analytics",
                  "A customizable interface",
                  "Seamless integration with the broader TUC platform",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fa-solid fa-check-circle text-dark-cyan text-lg sm:text-xl mr-3 sm:mr-4 mt-1"></i>
                    <span className="text-sm sm:text-medium-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-cool-gray">
              <p className="text-sm sm:text-base text-dark-text font-semibold italic">
                It functions as a dynamic, transparent coordination engine where
                suggestions can evolve into projects or initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDefination;
