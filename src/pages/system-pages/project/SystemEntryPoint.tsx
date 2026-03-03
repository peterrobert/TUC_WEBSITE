const SystemEntryPoint = () => {
  return (
    <section id="sys-project-system-entry-point" className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16">
          <div id="entry-point-content">
            <div className="mb-6">
              <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
                System Entry Point
              </span>
            </div>
            <h2 className="text-4xl font-bold text-dark-gray mb-6">
              Where Projects Begin
            </h2>
            <div className="prose prose-lg">
              <p className="text-lg text-medium-gray leading-relaxed mb-4">
                At TUC everything starts with the Profile, but real impact
                happens inside Projects. Projects are created from ideas,
                passions, skills, needs, and available resources pulled from
                Profile, Suggestion Box, and Openitem systems.
              </p>
              <p className="text-base text-medium-gray leading-relaxed">
                Each project represents a convergence point where individual
                capabilities meet collective opportunity, transforming abstract
                potential into concrete execution frameworks.
              </p>
            </div>
          </div>
          <div
            id="entry-point-visual"
            className="bg-white rounded-xl border border-cool-gray p-8"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 bg-light-gray px-5 py-3 rounded-lg flex-1">
                  <i className="fa-solid fa-user-circle text-deep-blue text-xl"></i>
                  <span className="font-medium text-dark-gray">Profile</span>
                </div>
                <i className="fa-solid fa-arrow-right text-medium-gray mx-4"></i>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 bg-light-gray px-5 py-3 rounded-lg flex-1">
                  <i className="fa-solid fa-lightbulb text-deep-blue text-xl"></i>
                  <span className="font-medium text-dark-gray">
                    Suggestion Box
                  </span>
                </div>
                <i className="fa-solid fa-arrow-right text-medium-gray mx-4"></i>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 bg-light-gray px-5 py-3 rounded-lg flex-1">
                  <i className="fa-solid fa-clipboard-list text-deep-blue text-xl"></i>
                  <span className="font-medium text-dark-gray">
                    Openitem System
                  </span>
                </div>
                <i className="fa-solid fa-arrow-right text-medium-gray mx-4"></i>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-3 bg-deep-blue px-6 py-4 rounded-lg shadow-lg">
                  <i className="fa-solid fa-layer-group text-white text-xl"></i>
                  <span className="font-bold text-white">Project Module</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemEntryPoint;
