type PossibleItem = {
  title: string;
  description: string;
  icon: string;
  icon_color: string;
};

type WhatMakesPossibleSectionData = {
  whatMakesPossibleData: {
    section_title: string;
    section_subtitle: string;
    items: PossibleItem[];
    highlight_title: string;
    highlight_description: string;
    highlight_icon: string;
    highlight_icon_color: string;
  };
};

const WhatMakesPossibleSection = ({
  whatMakesPossibleData,
}: WhatMakesPossibleSectionData) => {
  const {
    section_title,
    section_subtitle,
    items,
    highlight_title,
    highlight_description,
    highlight_icon,
    highlight_icon_color,
  } = whatMakesPossibleData;

  return (
    <section
      id="what-makes-possible-section"
      className="py-14 sm:py-20 px-4 sm:px-8  bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray mb-3 sm:mb-4">
            {section_title}
          </h2>

          <div className="w-16 sm:w-24 h-1 bg-deep-blue mx-auto mb-4 sm:mb-6" />

          <p className="text-base sm:text-lg text-medium-gray max-w-3xl mx-auto">
            {section_subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Standard Cards */}
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-cool-gray rounded-lg p-6 sm:p-8 hover:border-deep-blue transition-colors"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-pale-blue rounded-lg flex items-center justify-center mb-4">
                <i
                  className={`fa-solid ${item.icon} text-2xl sm:text-3xl ${item.icon_color}`}
                />
              </div>

              <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
                {item.title}
              </h4>

              <p className="text-medium-gray text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}

          {/* Highlight Card */}
          <div className="bg-white border-2 border-cool-gray rounded-lg p-6 sm:p-8 hover:border-deep-blue transition-colors col-span-1 sm:col-span-2 lg:col-span-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-pale-blue rounded-lg flex items-center justify-center shrink-0">
                <i
                  className={`fa-solid ${highlight_icon} text-2xl sm:text-3xl ${highlight_icon_color}`}
                />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
                  {highlight_title}
                </h4>

                <p className="text-medium-gray text-sm sm:text-base">
                  {highlight_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesPossibleSection;
