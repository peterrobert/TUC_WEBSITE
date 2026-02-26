const CollaborationAttribution = () => {
  return (
    <section
      id="collaboration-attribution"
      className="py-16 sm:py-20   border-cool-gray"
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text & Features */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text mb-6">
              Participation Without Ownership Conflict
            </h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center mt-1">
                  <i className="fa-solid fa-user-check text-white"></i>
                </div>
                <p className="text-medium-text leading-relaxed">
                  Contributors retain credit for original suggestions
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center mt-1">
                  <i className="fa-solid fa-share-nodes text-white"></i>
                </div>
                <p className="text-medium-text leading-relaxed">
                  Remixes or improvements are shared and tracked
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center mt-1">
                  <i className="fa-solid fa-link text-white"></i>
                </div>
                <p className="text-medium-text leading-relaxed">
                  Transparent chains of contribution remain visible
                </p>
              </div>
            </div>
          </div>

          {/* Visual Flow */}
          <div className="bg-light-surface rounded-2xl p-6 sm:p-10">
            <div className="space-y-6 sm:space-y-8">
              {/* Original Idea */}
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-deep-blue mx-auto mb-3 flex items-center justify-center">
                    <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
                  </div>
                  <div className="text-xs font-semibold text-dark-text">
                    Original Idea
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <i className="fa-solid fa-arrow-down text-2xl text-cool-gray"></i>
              </div>

              {/* Remixes */}
              <div className="flex justify-center space-x-4 sm:space-x-6">
                {["Remix A", "Remix B", "Remix C"].map((remix) => (
                  <div className="text-center" key={remix}>
                    <div className="w-16 h-16 rounded-full bg-dark-cyan mx-auto mb-2 flex items-center justify-center">
                      <i className="fa-solid fa-code-branch text-white text-xl"></i>
                    </div>
                    <div className="text-xs font-semibold text-dark-text">
                      {remix}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <i className="fa-solid fa-arrow-down text-2xl text-cool-gray"></i>
              </div>

              {/* Final Initiative */}
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-deep-blue mx-auto mb-3 flex items-center justify-center">
                    <i className="fa-solid fa-rocket text-white text-2xl"></i>
                  </div>
                  <div className="text-xs font-semibold text-dark-text">
                    Final Initiative
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationAttribution;
