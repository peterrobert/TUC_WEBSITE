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
      points: string[];
    };
  };
};
const WhyTucSection = ({ whyTucSection }: WhyTucSectionProps) => {
  const { title, problems, quote, mission } = whyTucSection;
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
          <p className="text-lg text-medium-gray leading-relaxed">
            {problem.description}
          </p>
        </div>
      );
    });
  };
  return (
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

        <div className="space-y-12">
          {displayproblems()}

          <div className="border-l-4 border-deep-blue pl-8 py-6 my-12">
            <p className="text-2xl font-serif text-dark-gray leading-relaxed italic">
              {quote.text}
            </p>
          </div>

          <div className="bg-deep-blue text-white rounded-lg p-10">
            <h3 className="text-2xl font-serif font-bold mb-4">
              {mission.title}
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              {mission.description}
            </p>
            <ul className="space-y-3 text-lg">
              {mission.points.map((point, index) => {
                return (
                  <li className="flex items-start" key={index}>
                    <i className="fa-solid fa-check mr-3 mt-1 shrink-0"></i>
                    <span>{point}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTucSection;
