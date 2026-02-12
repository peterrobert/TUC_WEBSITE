import React from "react";

const TUCQuietLanding: React.FC = () => {
  return (
    <section
      className="relative py-28 bg-gradient-to-b  via-gray-50"
      id="landing-vision"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Soft Closing Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 px-8 sm:px-14 py-14 text-center mb-24">
          <p className="font-serif text-2xl sm:text-3xl text-dark-gray mb-10">
            Take your time.
          </p>

          <div className="space-y-4 font-sans text-gray-700 text-base sm:text-lg leading-7">
            <p>Explore what resonates.</p>
            <p>Engage when and how it makes sense for you.</p>
          </div>

          <div className="mt-10 max-w-xl mx-auto">
            <p className="font-sans text-gray-600 leading-7">
              There’s no rush and no expectation. TUC is designed to be here
              when you’re ready.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray">
              TUC’s Vision
            </h3>
          </div>

          <div className="w-20 h-1 bg-deep-blue mx-auto mb-10"></div>

          <p className="max-w-3xl mx-auto font-sans text-base sm:text-lg text-gray-700 leading-8">
            TUC envisions a world where opportunity is not limited by access,
            visibility, or privilege—and where people, ideas, and resources that
            want to contribute are no longer underutilized or left disconnected.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TUCQuietLanding;
