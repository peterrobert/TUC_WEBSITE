import { footerData } from "../../../data/footerData";
import Footer from "../../../layouts/Footer";
import CorePurpose from "./CorePurpose";
import DocumentGenerationFlow from "./DocumentGenerationFlow";
import FinancialModule from "./FinancialModule";
import HeroSection from "./HeroSection";
import HistoricalTimeline from "./HistoricalTimeline";
import MasterDocumentOutputs from "./MasterDocumentOutputs";
import ProjectInputEngine from "./ProjectInputEngine";
import StructuredInputExpansion from "./StructuredInputExpansion";
import SystemEntryPoint from "./SystemEntryPoint";
import SystemsIntegration from "./SystemsIntegration";
import TimelineComponents from "./TimelineComponents";
import TimelineSystem from "./TimelineSystem";

const ProjectLandingPage = () => {
  return (
    <>
      <HeroSection />
      <SystemEntryPoint />
      <CorePurpose />
      <ProjectInputEngine />
      <StructuredInputExpansion />
      <DocumentGenerationFlow />
      <MasterDocumentOutputs />
      <TimelineSystem />
      <TimelineComponents />
      <HistoricalTimeline />
      <FinancialModule />
      <SystemsIntegration />
      <Footer footerData={footerData} />
    </>
  );
};

export default ProjectLandingPage;
