import ScrollToTopButton from "../../components/ScrollToTopButton";
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

const WorkFlowPage = () => {
  return (
    <>
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
