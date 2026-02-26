const HeroSection = () => {
  return (
    <section
      id="sys-top10-hero-section"
      className="bg-white border-b border-cool-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-3 sm:px-4 py-1 bg-light-gray rounded-full text-[11px] sm:text-xs font-medium text-medium-gray mb-4 sm:mb-6">
            System Documentation
          </div>

          <h1 className="font-serif font-bold text-dark-gray mb-4 sm:mb-6 leading-tight text-[clamp(2.5rem,6vw,3.75rem)]">
            TUC Top10 System
          </h1>

          <p className="text-medium-gray mb-6 sm:mb-8 font-light leading-relaxed text-[clamp(1.25rem,3vw,1.5rem)]">
            A Dynamic Ranking System for Collective Intelligence
          </p>

          <div className="max-w-3xl mx-auto">
            <p className="text-dark-gray mb-4 sm:mb-6 leading-relaxed text-[clamp(1rem,2vw,1.125rem)]">
              The TUC Top10 System transforms participation into measurable
              impact. It surfaces high-value ideas, projects, and contributions
              using transparent ranking logic, regenerative scoring, and
              collaboration-first design.
            </p>

            <p className="text-medium-gray italic leading-relaxed text-sm sm:text-base">
              Not a popularity contest — a structured engine for visibility,
              recognition, and coordinated progress.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#system-definition"
              className="w-full sm:w-auto px-8 py-3 bg-deep-blue text-white rounded hover:bg-hover-blue transition-colors font-medium text-center"
            >
              Explore the System
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
