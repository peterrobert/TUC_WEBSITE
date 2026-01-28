import { footerData } from "../../data/footerData";
import Footer from "../../layouts/Footer";

const AboutPage = () => {
  return (
    <>
      {/* HERO */}
      <section
        id="about-hero-section"
        className="min-h-[360px] sm:min-h-[420px] lg:min-h-[520px] flex items-center justify-center bg-white border-b border-cool-gray px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-gray mb-4 sm:mb-6 leading-tight">
            About TUC
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-medium-gray font-serif leading-relaxed max-w-3xl mx-auto">
            A transparent, mission-driven system built by a small team committed
            to integrity, sustainability, and meaningful collaboration.
          </p>
        </div>
      </section>

      {/* PROJECT */}
      <section
        id="the-project-section"
        className="py-12 sm:py-16 lg:py-20 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray mb-3">
              The Project
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-deep-blue"></div>
          </div>

          <div className="bg-white border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-12 mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold mb-4">
              Long-term Purpose
            </h3>

            <div className="space-y-4 text-medium-gray leading-relaxed text-sm sm:text-base lg:text-lg">
              <p>
                TUC exists to solve a fundamental coordination problem: talented
                people have ideas, organizations need those ideas, but the gap
                between having an idea and seeing it implemented is vast.
              </p>
              <p>
                We're creating infrastructure designed to last decades, not
                quarters.
              </p>
              <p>Our purpose is simple: help good ideas find momentum.</p>
            </div>
          </div>

          {/* INTEGRITY GRID */}
          <div className="bg-deep-blue text-white rounded-lg p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold mb-6">
              Integrity-First Philosophy
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                ["shield-halved", "No Shortcuts"],
                ["eye", "Radical Transparency"],
                ["handshake", "Fair Attribution"],
                ["clock", "Patient Building"],
              ].map(([icon, title]) => (
                <div
                  key={title}
                  className="bg-white bg-opacity-10 rounded-lg p-5"
                >
                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-white bg-opacity-20 rounded-md flex items-center justify-center shrink-0">
                      <i className={`fa-solid fa-${icon} text-white`} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{title}</h4>
                      <p className="text-sm text-white text-opacity-90">
                        Structural design prevents compromise and opacity.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="the-team-section"
        className="py-12 sm:py-16 lg:py-20 px-4 bg-white border-y border-cool-gray"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-3">
              The Team
            </h2>
            <div className="w-20 h-1 bg-dark-cyan mb-4" />
            <p className="text-medium-gray max-w-3xl text-sm sm:text-base">
              A small deliberate team focused on sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* MEMBER CARD */}
            {["Jeff", "Peter"].map((name) => (
              <div
                key={name}
                className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                    alt={name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold">
                      {name}
                    </h3>
                    <p className="text-medium-gray">Platform Architect</p>
                  </div>
                </div>

                <p className="text-medium-gray text-sm sm:text-base leading-relaxed">
                  Focused on sustainable infrastructure and system integrity.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta-section"
        className="py-12 sm:py-16 lg:py-20 px-4 bg-white border-t border-cool-gray"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">
            Explore TUC
          </h2>

          <p className="text-medium-gray mb-8 text-sm sm:text-base lg:text-lg">
            Learn more about what we're building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-deep-blue text-white rounded-md hover:bg-bright-blue transition">
              View Overview
            </button>

            <button className="px-6 py-3 border-2 border-deep-blue text-deep-blue rounded-md hover:bg-deep-blue hover:text-white transition">
              Documentation
            </button>

            <button className="px-6 py-3 border-2 border-dark-cyan text-dark-cyan rounded-md hover:bg-dark-cyan hover:text-white transition">
              System Status
            </button>
          </div>
        </div>
      </section>
      <Footer footerData={footerData} />
    </>
  );
};

export default AboutPage;
