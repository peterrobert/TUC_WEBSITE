const CorePurpose = () => {
  return (
    <section id="sys-project-core-purpose" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
            Core Purpose
          </span>
          <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-6">
            What The Project Module Is Built To Do
          </h2>
        </div>
        <div className="bg-pale-blue rounded-xl p-10 border border-cool-gray">
          <p className="text-lg text-medium-gray mb-8 leading-relaxed">
            The Project Module is designed to create systematic advantages in
            how collaborative work is structured, executed, and preserved:
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-ban text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">
                  Prevent users from starting from scratch
                </h3>
                <p className="text-medium-gray">
                  Leverage existing templates, structures, and knowledge bases
                  to accelerate project initiation.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-copy text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">
                  Reduce duplication of effort
                </h3>
                <p className="text-medium-gray">
                  Identify and reuse existing solutions, preventing redundant
                  work across teams.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-sitemap text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">
                  Increase organizational structure
                </h3>
                <p className="text-medium-gray">
                  Provide consistent frameworks that scale from individual
                  projects to enterprise portfolios.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-users text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">
                  Enable large-scale coordinated collaboration
                </h3>
                <p className="text-medium-gray">
                  Create infrastructure for thousands of contributors to work
                  cohesively on complex initiatives.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-database text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">
                  Aggregate past project knowledge for future reuse
                </h3>
                <p className="text-medium-gray">
                  Build organizational intelligence that compounds over time,
                  making each project smarter than the last.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-cool-gray">
            <p className="text-lg text-dark-gray font-medium text-center">
              It represents a real-world project environment inside TUC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePurpose;
