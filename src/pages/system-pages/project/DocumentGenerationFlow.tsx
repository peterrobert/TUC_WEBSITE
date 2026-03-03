const DocumentGenerationFlow = () => {
  return (
    <section id="document-generation-flow" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
            Document Generation Flow
          </span>
          <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
            How Input Fields Become Master Documents
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">
            Automated transformation pipeline that converts structured project
            data into professional business documentation.
          </p>
        </div>
        <div className="flex items-center justify-between space-x-6">
          <div
            id="flow-step-1"
            className="flex-1 bg-pale-blue rounded-xl p-8 border-2 border-deep-blue"
          >
            <div className="w-16 h-16 bg-deep-blue rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3 text-center">
              Structured Input Fields
            </h3>
            <p className="text-medium-gray text-center leading-relaxed">
              Project data collected through standardized forms with validation
              rules and data type constraints
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                Forms
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                Validation
              </span>
            </div>
          </div>
          <div className="shrink-0">
            <i className="fa-solid fa-arrow-right text-4xl text-dark-cyan"></i>
          </div>
          <div
            id="flow-step-2"
            className="flex-1 bg-pale-blue rounded-xl p-8 border-2 border-dark-cyan"
          >
            <div className="w-16 h-16 bg-dark-cyan rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3 text-center">
              Field Occupancy Logic
            </h3>
            <p className="text-medium-gray text-center leading-relaxed">
              Active fields are parsed and categorized based on completion
              status and relevance scoring
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                Parser
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                Categorization
              </span>
            </div>
          </div>
          <div className="shrink-0">
            <i className="fa-solid fa-arrow-right text-4xl text-dark-cyan"></i>
          </div>
          <div
            id="flow-step-3"
            className="flex-1 bg-pale-blue rounded-xl p-8 border-2 border-deep-blue"
          >
            <div className="w-16 h-16 bg-deep-blue rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3 text-center">
              Document Builder Engine
            </h3>
            <p className="text-medium-gray text-center leading-relaxed">
              Auto-compiles formatted outputs using template engines and dynamic
              content generation
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                Templates
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                Compiler
              </span>
            </div>
          </div>
          <div className="shrink-0">
            <i className="fa-solid fa-arrow-right text-4xl text-dark-cyan"></i>
          </div>
          <div
            id="flow-step-4"
            className="flex-1 bg-linear-to-br from-deep-blue to-dark-cyan rounded-xl p-8 border-2 border-deep-blue"
          >
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto">
              <i className="fa-solid fa-file-contract text-deep-blue text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              Master Documents Output
            </h3>
            <p className="text-white text-opacity-90 text-center leading-relaxed">
              Business-ready documentation generated in multiple formats with
              professional styling
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="bg-white bg-opacity-20 text-black px-3 py-1 rounded-full text-xs">
                PDF
              </span>
              <span className="bg-white bg-opacity-20 text-black px-3 py-1 rounded-full text-xs">
                DOCX
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentGenerationFlow;
