import { footerData } from "../../../data/footerData";
import Footer from "../../../layouts/Footer";
import CollaborationAttribution from "./CollaborationAttribution";
import DesignedToEvolve from "./DesignedToEvolve";
import EligibleContent from "./EligibleContent";
import HeroSection from "./HeroSection";
import ProblemStamentSection from "./ProblemStamentSection";
import ProtectingSystemSection from "./ProtectingSystemSection";
import SuggestionConnection from "./SuggestionConnection";
import SuggestionFlow from "./SuggestionFlow";
import SystemDefination from "./SystemDefination";
import SystemOutputSection from "./SystemOutputSection";

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
      <SystemOutputSection />
      <SuggestionConnection />
      <CollaborationAttribution />

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

      <Footer footerData={footerData} />
    </>
  );
};

export default SuggestionBoxLandingPage;
