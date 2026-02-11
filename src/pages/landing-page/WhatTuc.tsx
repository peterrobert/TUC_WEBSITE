const WhatTuc = () => {
  return (
    <section
      id="what-tuc"
      className="py-12 sm:py-16 md:py-20 bg-gray-50  border-b border-cool-gray"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white  rounded-2xl border border-cool-gray p-8 sm:p-10 md:p-12 shadow-md">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-text mb-6 sm:mb-8 text-center md:text-left">
            What TUC Is:
          </h3>

          <div className="space-y-4 sm:space-y-6 md:space-y-6 text-base sm:text-lg md:text-lg text-medium-text leading-relaxed">
            <p>
              TUC is a way for people who want to help to find where their
              effort matters—by making ideas, needs, and contributions visible
              without hierarchy or control.
            </p>
            <p>
              It creates shared visibility across people, projects, and
              resources so useful work doesn't get lost, duplicated, or stalled.
            </p>
            <p>
              By lowering barriers to participation and clarifying where help is
              needed, TUC helps individual effort turn into collective progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatTuc;
