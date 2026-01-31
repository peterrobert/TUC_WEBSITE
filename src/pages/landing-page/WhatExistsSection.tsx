import { useNavigate } from "react-router-dom";

type WhatExistsSectionProps = {
  whatExistsSection: {
    title: string;
    subtitle: string;
    components: {
      name: string;
      status: string;
      statusType: string;
      description: string;
      progressLabel: string;
      icon: string;
      iconColor: string;
      url: string;
    }[];
    footerNote: string;
  };
};

const WhatExistsSection = ({ whatExistsSection }: WhatExistsSectionProps) => {
  const navigate = useNavigate();
  const { title, subtitle, components, footerNote } = whatExistsSection;

  return (
    <section id="what-exists-section" className="py-14 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-3 sm:mb-4">
            {title}
          </h2>

          <div className="w-16 sm:w-24 h-1 bg-deep-blue mx-auto mb-4 sm:mb-6"></div>

          <p className="text-base sm:text-lg text-medium-gray max-w-3xl mx-auto px-2">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {components.map((component, index) => {
            return (
              <div
                className="bg-white border border-cool-gray rounded-lg p-5 sm:p-6 hover:shadow-lg transition-shadow"
                key={index}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-dark-gray">
                    {component.name}
                  </h3>
                  <span className="px-2 sm:px-3 py-1 bg-light-gray text-medium-gray text-xs sm:text-sm rounded-full font-medium">
                    {component.status}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-medium-gray mb-3 sm:mb-4">
                  {component.description}
                </p>
                <div className="flex items-center text-xs sm:text-sm text-medium-gray">
                  <i
                    className={`fa-solid ${component.icon} text-${component.iconColor} mr-2`}
                  ></i>
                  <span>{component.progressLabel}</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-medium-gray mt-4">
                  <button
                    onClick={() => {
                      navigate(`${component.url}`);
                      window.scrollTo(0, 0);
                    }}
                    className={`px-8 py-1 border-2 border-deep-blue text-deep-blue cursor-pointer rounded-md hover:bg-deep-blue hover:text-white transition-colors font-medium text-sm w-full sm:w-auto`}
                  >
                    How it works
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Footer */}
        <div className="bg-pale-blue border border-cool-gray rounded-lg p-5 sm:p-8 text-center">
          <p className="text-sm sm:text-lg text-medium-gray leading-relaxed">
            <i className="fa-solid fa-info-circle mr-2 text-deep-blue"></i>
            {footerNote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatExistsSection;
