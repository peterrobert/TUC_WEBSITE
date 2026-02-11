import React from "react";

const TUCMeetsYouWhereYouAre: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="where-you-are">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-4 tracking-tight">
            🧭 TUC Meets You Where You Are
          </h2>
          <div className="w-20 h-1 bg-deep-blue mx-auto"></div>
        </div>

        {/* Intro */}
        <p className="text-center font-sans text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-7">
          Whether you're just curious or ready to dive in, TUC is built in
          layers—so you can explore at your own pace:
        </p>

        {/* Levels */}
        <div className="space-y-8">
          {/* Level 1 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="font-serif font-semibold text-lg text-dark-gray mb-2">
              🟣 Level 1
            </h3>
            <p className="font-sans text-gray-700 leading-7">
              → Clear, simple language to help you understand what TUC is and
              why it matters. No jargon. No pressure. Just the big picture.
            </p>
          </div>

          {/* Level 2 */}
          <div className="border-l-4 border-deep-blue pl-6">
            <h3 className="font-serif font-semibold text-lg text-dark-gray mb-2">
              🔵 Level 2
            </h3>
            <p className="font-sans text-gray-700 leading-7">
              → Real-world structure, roles, and use cases for putting TUC into
              action.
            </p>
          </div>

          {/* Level 3 */}
          <div className="border-l-4 border-orange-400 pl-6">
            <h3 className="font-serif font-semibold text-lg text-dark-gray mb-2">
              🟠 Level 3
            </h3>
            <p className="font-sans text-gray-700 leading-7">
              → Full-system view with ripple effects, red flags, remix logic,
              and deeper design decisions.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-12 text-center space-y-4">
          <p className="font-sans text-dark-gray font-medium">
            → Choose your depth—or come back when you’re ready for more.
          </p>

          <p className="font-sans text-sm text-gray-600">
            📣 We’re making changes as we go—so let us know what we can do to
            make it better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TUCMeetsYouWhereYouAre;
