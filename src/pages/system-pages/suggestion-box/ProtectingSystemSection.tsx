const ProtectingSystemSection = () => {
  return (
    <section
      id="integrity-safeguards"
      className="py-16 sm:py-20 bg-white border-y border-cool-gray"
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text text-center mb-12">
          Protecting System Fairness
        </h2>

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
              Algorithm-driven prioritization removes human bias and ensures
              fair visibility for all suggestions
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
              AI monitors for suspicious patterns like vote manipulation or spam
              submissions
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
              Reputation and contribution history influence voting weight to
              reward quality participation
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
              alerts protect system integrity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectingSystemSection;
