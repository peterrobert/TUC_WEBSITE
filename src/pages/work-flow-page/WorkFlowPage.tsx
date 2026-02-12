import ScrollToTopButton from "../../components/ScrollToTopButton";
import SectionIndicator from "../../components/SectionIndicator";
import { footerData } from "../../data/footerData";
import Footer from "../../layouts/Footer";
import StageRippleEffectsSection from "./ StageRippleEffectsSection";
import ComparisonSection from "./ComparisonSection";
import HeroSection from "./HeroSection";
import StageIdeasSection from "./StageIdeasSection";
import StageProjectsSection from "./StageProjectsSection";
import StageResultsSection from "./StageResultsSection";
import StageSuggestionsSection from "./StageSuggestionsSection";
import StageTasksSection from "./StageTasksSection";
import StageTop10Section from "./StageTop10Section";
import WorkFlowOverviewSection from "./WorkFlowOverviewSection";

const pageSections = [
  { id: "hero-section", label: "Intro" },
  { id: "pipeline-overview-section", label: "The TUC Pipeline" },
  { id: "stage-ideas-section", label: "Idea" },
  { id: "stage-suggestions-section", label: "Suggestion" },
  { id: "stage-top10-section", label: "Top10" },
  { id: "stage-projects-section", label: "Projects" },
  { id: "stage-tasks-section", label: "Tasks" },
  { id: "stage-results-section", label: "Results" },
  { id: "stage-ripple-effects-section", label: "Ripple Effects" },
  { id: "comparison-section", label: "Traditional vs. TUC Approach" },
];

const WorkFlowPage = () => {
  return (
    <>
      <SectionIndicator sections={pageSections} />
      <HeroSection />
      <StageIdeasSection />
      <WorkFlowOverviewSection />
      <StageSuggestionsSection />
      <StageTop10Section />
      <StageProjectsSection />
      <StageTasksSection />
      <StageResultsSection />
      <StageRippleEffectsSection />
      <ComparisonSection />
      <Footer footerData={footerData} />
      <ScrollToTopButton />
    </>
  );
};

export default WorkFlowPage;
