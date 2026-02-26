import { footerData } from "../../../data/footerData";
import Footer from "../../../layouts/Footer";
import DesignedToEvolve from "./DesignedToEvolve";
import EligibleContent from "./EligibleContent";
import HeroSection from "./HeroSection";
import ProblemStamentSection from "./ProblemStamentSection";
import ProtectingSystemSection from "./ProtectingSystemSection";
import SuggestionFlow from "./SuggestionFlow";
import SystemDefination from "./SystemDefination";

const SuggestionBoxLandingPage = () => {
  return (
    <>
      <HeroSection />
      <ProblemStamentSection />
      <SystemDefination />
      <EligibleContent />
      <SuggestionFlow />
      <DesignedToEvolve />
      <ProtectingSystemSection />

      <section
        id="collaboration-attribution"
        className="py-16 sm:py-20 bg-white border-y border-cool-gray"
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

      <section id="transparency-trust" className="py-16 sm:py-20 bg-white">
        <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text mb-4">
              Designed For Clarity
            </h2>
            <p className="text-medium-text text-base sm:text-lg max-w-2xl mx-auto">
              Users understand why suggestions are prioritized or promoted.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Traceable History */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-deep-blue bg-opacity-10 mx-auto mb-6 flex items-center justify-center">
                <i className="fa-solid fa-history text-white text-3xl"></i>
              </div>
              <h3 className="font-semibold text-xl text-dark-text mb-3">
                Traceable Suggestion History
              </h3>
              <p className="text-medium-text text-sm leading-relaxed">
                Complete audit trail of every suggestion's journey from
                submission to action
              </p>
            </div>

            {/* Visible Evaluation */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-dark-cyan bg-opacity-10 mx-auto mb-6 flex items-center justify-center">
                <i className="fa-solid fa-eye text-white text-3xl"></i>
              </div>
              <h3 className="font-semibold text-xl text-dark-text mb-3">
                Visible Evaluation Criteria
              </h3>
              <p className="text-medium-text text-sm leading-relaxed">
                Clear metrics and spotlighting algorithms ensure transparency in
                prioritization
              </p>
            </div>

            {/* Auditable Decision Logs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-deep-blue bg-opacity-10 mx-auto mb-6 flex items-center justify-center">
                <i className="fa-solid fa-clipboard-check text-white text-3xl"></i>
              </div>
              <h3 className="font-semibold text-xl text-dark-text mb-3">
                Auditable Decision Logs
              </h3>
              <p className="text-medium-text text-sm leading-relaxed">
                Every decision point is recorded and accessible for community
                review
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="system-outputs" className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text text-center mb-12">
            What The Suggestion Box Produces
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Live Prioritized Suggestions List */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-list-ol text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                  Live Prioritized Suggestions List
                </h3>
                <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                  Real-time ranking of all active suggestions based on
                  engagement, impact, and community evaluation
                </p>
              </div>
            </div>

            {/* Spotlighted Suggestions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-star text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                  Spotlighted Suggestions
                </h3>
                <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                  Automatic highlighting of "Most Engaged" and "Most
                  Appreciated" suggestions to surface high-value ideas
                </p>
              </div>
            </div>

            {/* Progress Tracking Dashboards */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-deep-blue bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-chart-pie text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                  Progress Tracking Dashboards
                </h3>
                <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                  Visual representation of suggestion lifecycle from submission
                  through implementation
                </p>
              </div>
            </div>

            {/* Contributor Reputation Metrics */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cool-gray flex items-start space-x-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-dark-cyan bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-award text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg sm:text-xl text-dark-text mb-2">
                  Contributor Reputation Metrics
                </h3>
                <p className="text-medium-text text-sm sm:text-base leading-relaxed">
                  Transparent tracking of individual participation, contribution
                  quality, and community impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="ecosystem-integration"
        className="py-20 border-y border-cool-gray"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-text text-center mb-4">
            How Suggestion Box Connects Inside TUC
          </h2>
          <p className="text-center text-medium-text mb-12 max-w-2xl mx-auto">
            Integrates seamlessly with the broader TUC ecosystem to transform
            suggestions into tangible outcomes
          </p>

          <div className="max-w-5xl mx-auto relative">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-40 sm:h-40 rounded-full bg-deep-blue flex items-center justify-center z-10">
              <div className="text-center text-white">
                <i className="fa-solid fa-inbox text-4xl sm:text-3xl mb-3"></i>
                <div className="font-bold text-lg sm:text-base">
                  Suggestion Box
                </div>
                <div className="text-xs sm:text-[10px] opacity-90">
                  Central Hub
                </div>
              </div>
            </div>

            {/* Integration Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              {/* Node 1 */}
              <div className="bg-light-surface rounded-xl p-6 relative">
                <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-cyan flex items-center justify-center">
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-exclamation-circle text-dark-cyan text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-dark-text mb-2">
                      Openitem System
                    </h3>
                    <p className="text-medium-text text-sm">
                      Priority tracking and task management
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 2 */}
              <div className="bg-light-surface rounded-xl p-6 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-cyan flex items-center justify-center">
                  <i className="fa-solid fa-arrow-left text-white"></i>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-project-diagram text-deep-blue text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-dark-text mb-2">
                      Project Systems
                    </h3>
                    <p className="text-medium-text text-sm">
                      Execution layer for implemented ideas
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 3 */}
              <div className="bg-light-surface rounded-xl p-6 relative mt-16 sm:mt-32">
                <div className="absolute -bottom-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-cyan flex items-center justify-center">
                  <i className="fa-solid fa-arrow-up text-white"></i>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-users text-dark-cyan text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-dark-text mb-2">
                      Collaboration Tools
                    </h3>
                    <p className="text-medium-text text-sm">
                      Discussion forums and team coordination
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 4 */}
              <div className="bg-light-surface rounded-xl p-6 relative mt-16 sm:mt-32">
                <div className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-cyan flex items-center justify-center">
                  <i className="fa-solid fa-arrow-up text-white"></i>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-chart-bar text-deep-blue text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-dark-text mb-2">
                      Analytics & Reporting
                    </h3>
                    <p className="text-medium-text text-sm">
                      Insights and performance dashboards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer footerData={footerData} />
    </>
  );
};

export default SuggestionBoxLandingPage;
