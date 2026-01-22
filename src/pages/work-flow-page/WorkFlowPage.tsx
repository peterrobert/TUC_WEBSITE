import HeroSection from "./HeroSection";
import StageIdeasSection from "./StageIdeasSection";
import StageProjectsSection from "./StageProjectsSection";
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
    </>
  );
};

export default WorkFlowPage;
