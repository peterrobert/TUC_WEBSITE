const TransparencySection = () => {
  return (
    <section id="sys-top10-transparency" className="py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block px-3 py-1 bg-white border border-cool-gray rounded text-[11px] sm:text-xs font-medium text-medium-gray mb-2 sm:mb-4">
            Transparency Framework
          </div>
          <h2 className="font-serif font-bold text-dark-gray text-[clamp(1.75rem,4vw,2.5rem)] mb-2 sm:mb-4">
            Designed For Clarity
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-deep-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <i className="fa-solid fa-eye text-white  text-2xl sm:text-3xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
              Visible Ranking Factors
            </h3>
            <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
              All ranking criteria are documented and accessible to participants
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-dark-cyan bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <i className="fa-solid fa-route text-white  text-2xl sm:text-3xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
              Traceable Contribution History
            </h3>
            <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
              Every action and contribution is logged and can be reviewed
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg border border-cool-gray text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-deep-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <i className="fa-solid fa-clipboard-list text-white text-2xl sm:text-3xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-2 sm:mb-3">
              Auditable Activity Logs
            </h3>
            <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
              Complete audit trails ensure accountability and trust
            </p>
          </div>
        </div>

        <div className="text-center bg-pale-blue p-4 sm:p-6 rounded-lg border border-cool-gray">
          <p className="text-sm sm:text-base text-medium-gray italic">
            Participants can understand why something ranks highly instead of
            guessing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
