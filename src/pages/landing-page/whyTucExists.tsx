import React from "react";

const WhyTUCExists: React.FC = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-gray mb-4">
            ✅ Why TUC Exists
          </h2>
          <div className="w-24 h-1 bg-deep-blue mx-auto"></div>
        </div>

        {/* Core problem */}
        <div className="mb-10">
          <p className="font-sans text-base sm:text-lg text-gray-700 leading-7">
            TUC exists because good ideas, effort, and care are constantly lost
            between intention and execution. People want to help, but there is
            no reliable way to see where effort is needed, who is involved, or
            what happens next.
          </p>
        </div>

        {/* Fragmentation block */}
        <div className="border-l-4 border-orange-400 pl-6 mb-10">
          <p className="font-sans text-gray-700 leading-7">
            Without shared visibility and coordination, work fragments, trust
            erodes, and communities are forced to start over again and again.
            TUC was created to close that gap—so useful work doesn’t disappear,
            value can compound over time, and individual contributions can turn
            into sustained collective progress.
          </p>
        </div>

        {/* Reframing */}
        <div className="bg-white rounded-2xl p-8 mb-10">
          <p className="font-serif text-lg sm:text-xl text-dark-gray font-semibold leading-8">
            TUC exists to reframe underutilization as opportunity.
          </p>
        </div>

        {/* Outcome */}
        <div className="border-l-4 border-deep-blue pl-6">
          <p className="font-sans text-gray-700 leading-7">
            By increasing access and coordination, wasted effort becomes usable
            value—growing the Efficiency of Things (EoT) and Value of Things
            (VoT) through practical collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyTUCExists;
