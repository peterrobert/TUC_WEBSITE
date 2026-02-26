const DesignedToEvolve = () => {
  return (
    <section id="sys-sb-designed-to-evolve" className="py-16 sm:py-20">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-linear-to-br from-deep-blue to-dark-cyan rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-8 text-center">
              Designed To Evolve
            </h2>

            <p className="text-center text-white text-opacity-90 mb-10 max-w-3xl mx-auto">
              The system is designed to stay responsive over time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-seedling text-black text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 sm:mb-2">
                    New suggestions gain initial visibility
                  </h3>
                  <p className="text-white text-opacity-90 text-sm sm:text-base">
                    Fresh ideas are prioritized to ensure attention
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-hourglass-half text-black text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 sm:mb-2">
                    Inactive suggestions decay over time
                  </h3>
                  <p className="text-white text-opacity-90 text-sm sm:text-base">
                    Low-engagement ideas naturally fade to make room for active
                    ones
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-chart-line text-black text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 sm:mb-2">
                    Continuous evaluation ensures high-value ideas surface
                  </h3>
                  <p className="text-white text-opacity-90 text-sm sm:text-base">
                    Signals identify impactful suggestions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-code-branch text-black text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 sm:mb-2">
                    Suggestions can be remixed or adapted
                  </h3>
                  <p className="text-white text-opacity-90 text-sm sm:text-base">
                    Ideas evolve through collaboration
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-white border-opacity-20">
              <p className="text-lg italic">
                This keeps the system active, fair, and aligned with real
                participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedToEvolve;
