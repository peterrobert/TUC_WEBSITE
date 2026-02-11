type WhatIsTucSectionProps = {
  whatIsTucSection: {
    title: string;
    introCards: { icon: string; title: string; description: string }[];
    mainContent: {
      heading: string;
      description: string;
      features: { icon: string; title: string; description: string }[];
    };
  };
};

const WhatIsTucSection = ({ whatIsTucSection }: WhatIsTucSectionProps) => {
  const { title, introCards, mainContent } = whatIsTucSection;

  const displayIntroCards = introCards.map((card, index) => {
    return (
      <div
        className="bg-white border border-cool-gray rounded-lg p-6 sm:p-8 text-center"
        key={index}
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4">
          <i
            className={`fa-solid ${card.icon} text-xl sm:text-2xl text-medium-gray`}
          ></i>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2">
          {card.title}
        </h3>
        <p className="text-sm sm:text-base text-medium-gray">
          {card.description}
        </p>
      </div>
    );
  });

  return (
    <section id="definition" className="py-14 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-cool-gray rounded-lg p-6 sm:p-10 md:p-12 pb-3.5">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-dark-gray mb-4 sm:mb-6">
            {mainContent.heading}
          </h3>

          <p className="text-base sm:text-lg text-medium-gray leading-relaxed mb-8">
            {mainContent.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {mainContent.features.map((value, index) => {
              return (
                <div className="flex items-start space-x-4" key={index}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-deep-blue rounded-md flex items-center justify-center shrink-0">
                    <i
                      className={`fa-solid ${value.icon}  text-white text-sm sm:text-lg`}
                    ></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm sm:text-base text-medium-gray">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16 pt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-3 sm:mb-4">
            {title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-deep-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {displayIntroCards}
        </div>
      </div>
    </section>
  );
};

export default WhatIsTucSection;
