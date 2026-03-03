import SectionIndicator from "../../../components/SectionIndicator";
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

const pageSections = [
  { id: "sys-project-hero-section", label: "Intro" },
  { id: "sys-project-system-entry-point", label: "System Entry Point" },
  { id: "sys-project-core-purpose", label: "Core Purpose" },
  { id: "sys-project-input-engine", label: "Project Input Engine" },
  {
    id: "sys-project-structured-input-expansion",
    label: "Structured Input Expansion",
  },
  {
    id: "sys-project-document-generation-flow",
    label: "Document Generation Flow",
  },
  {
    id: "sys-project-master-document-outputs",
    label: "Master Document Outputs",
  },
  { id: "sys-project-timeline-system", label: "Timeline System" },
  { id: "sys-project-timeline-components", label: "Timeline Components" },
  { id: "sys-project-historical-timeline", label: "Historical Timeline" },
];

const ProjectLandingPage = () => {
  return (
    <>
      <SectionIndicator sections={pageSections} />
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
