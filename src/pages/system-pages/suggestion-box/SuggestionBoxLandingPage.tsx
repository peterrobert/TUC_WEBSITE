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
import TransparencyFirstSection from "./TransparencyFirstSection";

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
      <TransparencyFirstSection />

      <Footer footerData={footerData} />
    </>
  );
};

export default SuggestionBoxLandingPage;
