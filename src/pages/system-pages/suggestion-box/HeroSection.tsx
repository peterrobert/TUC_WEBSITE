const HeroSection = () => {
  return (
    <section id="hero-section" className="bg-white border-b border-cool-gray">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-light-surface rounded-full text-[10px] sm:text-xs font-semibold text-deep-blue uppercase tracking-wider mb-4 sm:mb-6">
            Documentation
          </div>

          <h1 className="font-serif font-bold text-dark-text leading-tight mb-4 sm:mb-6 text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4rem]">
            TUC Suggestion Box
          </h1>

          <p className="text-deep-blue font-semibold mb-4 sm:mb-6 text-xl sm:text-2xl md:text-2xl">
            The World's Most Connected Suggestion Box
          </p>

          <p className="text-medium-text mb-4 sm:mb-6 text-base sm:text-lg md:text-lg leading-relaxed max-w-3xl mx-auto">
            The TUC Suggestion Box transforms feedback into action. It is a
            dynamic, trustless, and regenerative system that empowers
            communities to submit, evaluate, and evolve ideas—while keeping
            progress visible and participation fair.
          </p>

          <p className="text-medium-text italic text-sm sm:text-base md:text-base">
            Not just a place to leave suggestions, but a coordination system
            that helps useful work move forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
