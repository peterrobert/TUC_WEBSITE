import SectionIndicator from "../../../components/SectionIndicator";
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

const pageSections = [
  { id: "sys-sb-hero-section", label: "Intro" },
  { id: "sys-sb-problem-statement", label: "Problem statement" },
  { id: "sys-sb-system-definition", label: "System definition" },
  { id: "sys-sb-eligible-content", label: "Eligible content" },
  { id: "sys-sb-suggestion-flow", label: "Suggestion flow" },
  { id: "sys-sb-designed-to-evolve", label: "Designed to evolve" },
  { id: "sys-sb-protecting-system", label: "Protecting the system" },
  { id: "sys-sb-system-output", label: "System output" },
  { id: "sys-sb-suggestion-connection", label: "Suggestion connection" },
  {
    id: "sys-sb-collaboration-attribution",
    label: "Collaboration & attribution",
  },
];

const SuggestionBoxLandingPage = () => {
  return (
    <>
      <SectionIndicator sections={pageSections} />
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
