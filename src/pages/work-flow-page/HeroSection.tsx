const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center border-b border-cool-gray"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-dark-gray mb-4 sm:mb-6 leading-tight">
          How TUC Works
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-medium-gray font-serif mb-3 sm:mb-4 leading-relaxed">
          A visual explanation of the collaboration workflow
        </p>

        <p className="text-sm sm:text-base md:text-lg text-medium-gray max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
          TUC transforms ideas into impact through a transparent, structured
          process. Each stage adds value, filters quality, and maintains
          attribution moving work from initial suggestion to measurable results.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
// bg-white
