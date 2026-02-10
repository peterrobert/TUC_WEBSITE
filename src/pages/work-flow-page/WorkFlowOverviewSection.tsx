import estherImage from "../../assets/esther.jpg";
import elbieImage from "../../assets/elbie.jpg";
const WorkFlowOverviewSection = () => {
  return (
    <section
      id="stage-ideas-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 border-y border-cool-gray bac"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* HEADER */}
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-deep-blue to-bright-blue rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <i className="fa-solid fa-lightbulb text-white text-lg sm:text-2xl lg:text-3xl"></i>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray">
                  Ideas
                </h2>
                <p className="text-sm sm:text-base text-medium-gray font-medium">
                  Stage 1: Collection · Engagement · Collective Thinking
                </p>
              </div>
            </div>

            {/* TEXT BLOCKS */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Purpose
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Capture unfiltered thinking from anyone in the community.
                  Ideas can be observations, possibilities, or questions—not yet
                  structured proposals. This stage values volume and diversity
                  over polish.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Input
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Raw thoughts, observations, “what if” questions, pain points,
                  and opportunities. No formal structure required. A single
                  sentence or a short paragraph is enough.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-2">
                  Output
                </h4>
                <p className="text-sm sm:text-base text-medium-gray leading-relaxed">
                  Ideas that resonate or show promise move to the Suggestions
                  stage for development. Others remain visible in the idea
                  repository for future reference.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-pale-blue border-2 border-deep-blue rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-dark-gray mb-4 sm:mb-6">
              Example Use Case
            </h4>

            {/* CARD 1 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 border border-cool-gray">
              <div className="flex items-start space-x-3 mb-3">
                <img
                  src={estherImage}
                  alt="User"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm sm:text-base text-dark-gray">
                    Esther
                  </p>
                  <p className="text-xs sm:text-sm text-medium-gray">
                    5 days ago
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-medium-gray italic">
                “I’m noticing consistency issues across the site. Section
                headings, subheadings, spacing, and CTAs don’t follow a clear
                pattern yet. When styles change from page to page—especially
                colors, emphasis, and buttons—it makes the experience feel less
                cohesive and harder to follow.”
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-cool-gray">
              <div className="flex items-start space-x-3 mb-3">
                <img
                  src={elbieImage}
                  alt="User"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm sm:text-base text-dark-gray">
                    Elbie
                  </p>
                  <p className="text-xs sm:text-sm text-medium-gray">
                    2 days ago
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-medium-gray italic">
                “I didn’t feel a clear hook at the beginning. I understand the
                system, but nothing immediately pulled me in or explained why I
                should care right away.”
              </p>
            </div>

            {/* INFO BOX */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-deep-blue text-white rounded-lg">
              <p className="text-xs sm:text-sm">
                <i className="fa-solid fa-info-circle mr-2"></i>
                These early observations are captured in one shared
                place—surfacing patterns in clarity, consistency, and engagement
                early. By sharing their perspectives, contributors help the
                system improve for everyone, building with people, not for them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlowOverviewSection;
