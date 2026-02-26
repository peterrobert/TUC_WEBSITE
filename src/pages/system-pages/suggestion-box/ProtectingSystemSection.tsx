const ProtectingSystemSection = () => {
  return (
    <section
      id="sys-sb-protecting-system"
      className="py-16 sm:py-20 bg-white border-y border-cool-gray"
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text text-center mb-6">
          Protecting System Fairness
        </h2>

        <p className="text-center text-medium-text max-w-3xl mx-auto mb-12">
          The Suggestion Box is designed to reduce bias while remaining open and
          auditable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Automated Spotlighting */}
          <div className="bg-light-surface rounded-2xl p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-deep-blue flex items-center justify-center mb-4">
              <i className="fa-solid fa-magic text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg text-dark-text mb-2">
              Automated Spotlighting & Sorting
            </h3>
            <p className="text-medium-text text-sm leading-relaxed">
              Algorithm-driven prioritization supports fair visibility
            </p>
          </div>

          {/* Behavior Anomaly Detection */}
          <div className="bg-light-surface rounded-2xl p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-dark-cyan flex items-center justify-center mb-4">
              <i className="fa-solid fa-shield-alt text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg text-dark-text mb-2">
              Behavior Anomaly Detection
            </h3>
            <p className="text-medium-text text-sm leading-relaxed">
              Detection monitors suspicious patterns such as manipulation or
              spam
            </p>
          </div>

          {/* Trust-Weighted Evaluation */}
          <div className="bg-light-surface rounded-2xl p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-deep-blue flex items-center justify-center mb-4">
              <i className="fa-solid fa-balance-scale text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg text-dark-text mb-2">
              Trust-Weighted Evaluation
            </h3>
            <p className="text-medium-text text-sm leading-relaxed">
              Contribution history influences voting weight
            </p>
          </div>

          {/* Anti-Manipulation Controls */}
          <div className="bg-light-surface rounded-2xl p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-dark-cyan flex items-center justify-center mb-4">
              <i className="fa-solid fa-ban text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg text-dark-text mb-2">
              Anti-Manipulation Controls
            </h3>
            <p className="text-medium-text text-sm leading-relaxed">
              Rate limiting, duplicate detection, and coordinated behavior
              alerts protect integrity
            </p>
          </div>
        </div>

        <div className="text-center mt-12 pt-6 border-t border-cool-gray">
          <p className="text-dark-text font-semibold italic">
            Automation supports the system while human judgment remains visible
            and accountable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProtectingSystemSection;
