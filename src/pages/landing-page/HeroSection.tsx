type HeroSectionProps = {
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
    buttons: { name: string; class: string }[];
  };
};

const HeroSection = ({ heroSection }: HeroSectionProps) => {
  const { title, subtitle, description, buttons } = heroSection;

  return (
    <section
      id="hero-section"
      className="min-h-130 sm:min-h-150 lg:min-h-170 flex items-center justify-center  px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-gray mb-4 sm:mb-6 leading-tight">
          {title}
        </h1>

        {/* SUBTITLE */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-medium-gray font-serif mb-6 sm:mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* DESCRIPTION */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-sm sm:text-base lg:text-lg text-medium-gray leading-relaxed">
            {description}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          {buttons.map((buttonText, index) => {
            return (
              <button
                key={index}
                className={`${buttonText.class} w-full sm:w-auto`}
              >
                {buttonText.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
