const ProjectInputEngine = () => {
  return (
    <section id="project-input-engine" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
            Project Input Engine
          </span>
          <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
            Core Project Input Fields
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">
            Comprehensive data collection architecture that captures every
            dimension of project planning and execution.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div
            id="input-card-identity"
            className="bg-pale-blue rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-deep-blue rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-id-card text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3">
              Project Identity
            </h3>
            <ul className="space-y-2 text-medium-gray">
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Project Image</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Idea (bullet points)</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Purpose (bullet points)</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Mission (paragraph)</span>
              </li>
            </ul>
          </div>
          <div
            id="input-card-collaboration"
            className="bg-pale-blue rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-dark-cyan rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-handshake text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3">
              Collaboration Layer
            </h3>
            <ul className="space-y-2 text-medium-gray">
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Collaborators</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Partners</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Customers</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Team Roles</span>
              </li>
            </ul>
          </div>
          <div
            id="input-card-reference"
            className="bg-pale-blue rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-deep-blue rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-link text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3">
              Reference Layer
            </h3>
            <ul className="space-y-2 text-medium-gray">
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>QuickLinks (Figma)</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Documents</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Media Assets</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>External Resources</span>
              </li>
            </ul>
          </div>
          <div
            id="input-card-operational"
            className="bg-pale-blue rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-dark-cyan rounded-xl flex items-center justify-center mb-4">
              <i className="fa-solid fa-gears text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3">
              Operational Data
            </h3>
            <ul className="space-y-2 text-medium-gray">
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Assumptions</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Needs & Requirements</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Risks & Barriers</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                <span>Policies & Standards</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-light-gray rounded-xl p-6 text-center">
          <p className="text-medium-gray">
            <i className="fa-solid fa-info-circle text-dark-cyan mr-2"></i>
            All fields remain editable and configurable per project, allowing
            maximum flexibility while maintaining structural consistency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectInputEngine;
