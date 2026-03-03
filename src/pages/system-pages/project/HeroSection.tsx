const HeroSection = () => {
  return (
    <section id="hero-section" className="bg-white border-b border-cool-gray">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-light-gray px-4 py-2 rounded-full mb-6">
            <i className="fa-solid fa-layer-group text-deep-blue text-sm"></i>
            <span className="text-sm font-medium text-medium-gray">
              Project Intelligence System
            </span>
          </div>
          <h1 className="text-6xl font-bold text-dark-gray mb-6 leading-tight">
            TUC Project Module
          </h1>
          <p className="text-2xl text-medium-gray mb-8 font-light">
            Structured Execution Layer for Collective Production
          </p>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-medium-gray leading-relaxed mb-6">
              The Project Module is where ideas reach full operational form. It
              transforms structured input fields into live projects, master
              documents, execution timelines, and collaborative production
              systems.
            </p>
            <div className="bg-pale-blue border-l-4 border-dark-cyan px-6 py-4 rounded-r-lg">
              <p className="text-base text-dark-gray font-medium italic">
                Not task management — a project intelligence engine powered by
                structured inputs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
