import landingPageData from "../../data/landingPage";

const HeroSection = () => {
  const { title, subtitle, description, buttons } = landingPageData.heroSection;
  return (
    <section
      id="hero-section"
      className="h-[680px] flex items-center justify-center bg-white border-b border-cool-gray"
    >
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h1 className="text-6xl font-serif font-bold text-dark-gray mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-2xl text-medium-gray font-serif mb-8 leading-relaxed">
          {subtitle}
        </p>
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg text-medium-gray leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          {buttons.map((buttonText, index) => {
            return (
              <button
                key={index}
                className="px-8 py-3 bg-deep-blue text-white rounded-md hover:bg-bright-blue transition-colors font-medium text-lg"
              >
                {buttonText}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
