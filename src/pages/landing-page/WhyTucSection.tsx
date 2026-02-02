type PointsType = {
  title: string;
  description: string;
};

type WhyTucSectionProps = {
  whyTucSection: {
    title: string;
    problems: {
      title: string;
      description: string;
    }[];
    quote: {
      text: string;
    };
    mission: {
      title: string;
      description: string;
      points: Array<PointsType>;
    };
  };
};
const WhyTucSection = ({ whyTucSection }: WhyTucSectionProps) => {
  const { title, problems, quote } = whyTucSection;
  const displayproblems = () => {
    return problems.map((problem, index) => {
      return (
        <div
          className="bg-pale-blue border border-cool-gray rounded-lg p-10"
          key={index}
        >
          <h3 className="text-2xl font-serif font-bold text-dark-gray mb-4">
            {problem.title}
          </h3>
          <p className="text-lg text-medium-gray leading-relaxed whitespace-pre-line">
            {problem.description}
          </p>
        </div>
      );
    });
  };
  return (
    <>
      <section
        id="why-tuc-exists-section"
        className="py-20 px-8 bg-white border-y border-cool-gray"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-dark-gray mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-dark-cyan mx-auto"></div>
          </div>
          <div className="border-l-4 border-deep-blue pl-8 py-6 my-12">
            <p className="text-2xl font-serif text-dark-gray leading-relaxed italic">
              We don’t lack good ideas or people willing to help.
            </p>
            <p className="text-2xl font-serif text-dark-gray leading-relaxed italic">
              What’s missing is a reliable way to coordinate effort so useful
              work doesn’t stall, duplicate, or disappear.
            </p>
            <p className="text-2xl font-serif text-dark-gray leading-relaxed italic">
              Here’s what keeps breaking down:
            </p>
          </div>

          <div className="space-y-12">
            {displayproblems()}

            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* CARD 1 */}
                <section id="insight-card-section" className="mb-8 lg:mb-0">
                  <div className="bg-white rounded-xl border border-divider shadow-sm p-10 h-full">
                    <div className="flex items-start space-x-4 mb-8">
                      <div className="flex-1">
                        <h1 className="font-serif font-bold text-4xl text-text-primary mb-2">
                          Lost Potential
                        </h1>
                        <div className="w-24 h-1 bg-accent-primary rounded-full"></div>
                      </div>
                    </div>

                    <div id="impact-section">
                      <h3 className="font-semibold text-lg text-text-primary mb-6 flex items-center">
                        <i className="fa-solid fa-chart-line-down text-accent-primary mr-3"></i>
                        Because of this fragmentation:
                      </h3>

                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <i className="fa-solid fa-circle text-red-400 text-xs mt-2 mr-3"></i>
                          <span className="text-text-secondary">
                            People are underutilized
                          </span>
                        </li>

                        <li className="flex items-start">
                          <i className="fa-solid fa-circle text-red-400 text-xs mt-2 mr-3"></i>
                          <span className="text-text-secondary">
                            Ideas fail to reach execution
                          </span>
                        </li>

                        <li className="flex items-start">
                          <i className="fa-solid fa-circle text-red-400 text-xs mt-2 mr-3"></i>
                          <span className="text-text-secondary">
                            Resources sit idle
                          </span>
                        </li>

                        <li className="flex items-start">
                          <i className="fa-solid fa-circle text-red-400 text-xs mt-2 mr-3"></i>
                          <span className="text-text-secondary">
                            Trust erodes
                          </span>
                        </li>
                        <li className="flex items-start">
                          <i className="fa-solid fa-circle text-red-400 text-xs mt-2 mr-3"></i>
                          <span className="text-text-secondary">
                            Communities repeatedly start over
                          </span>
                        </li>
                      </ul>
                      <h3 className="font-semibold text-lg text-text-primary mt-6 flex items-center">
                        <i className="fa-solid fa-chart-line-down text-accent-primary mr-3"></i>
                        Value exists, but it does not compound.
                      </h3>
                    </div>
                  </div>
                </section>

                {/* CARD 2 — Copy your second section here */}
                <section id="insight-card-section-2">
                  <div className="bg-white rounded-xl border border-divider shadow-sm p-10 h-full">
                    <div className="flex items-start space-x-4 mb-8">
                      <div className="flex-1">
                        <h1 className="font-serif font-bold text-4xl text-text-primary mb-2">
                          In Plain Language
                        </h1>
                        <div className="w-24 h-1 bg-accent-primary rounded-full"></div>
                      </div>
                    </div>
                    <div id="impact-section">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <i className="fa-solid fa-circle text-red-400 text-xs mt-2 mr-3"></i>
                          <span className="text-text-secondary">
                            TUC is a place where helpful work does not
                            disappear.
                          </span>
                        </li>

                        <li className="flex items-start">
                          <i className="fa-solid fa-circle text-red-400 text-xs mt-2 mr-3"></i>
                          <span className="text-text-secondary">
                            It transforms "Someone should do something" into
                            "Here is what is happening, who is involved, and
                            what comes next."
                          </span>
                        </li>

                        <li className="flex items-start">
                          <i className="fa-solid fa-circle text-red-400 text-xs mt-2 mr-3"></i>
                          <span className="text-text-secondary">
                            It gives strong ideas a permanent home — where they
                            can grow, evolve, and be carried forward by many
                            contributors instead of fading into silence.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="border-l-4 border-deep-blue pl-8 py-6 my-12">
              <p className="text-2xl font-serif text-dark-gray leading-relaxed italic">
                {quote.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyTucSection;
