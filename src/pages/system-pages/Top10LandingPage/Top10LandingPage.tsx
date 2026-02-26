import SectionIndicator from "../../../components/SectionIndicator";
import { footerData } from "../../../data/footerData";
import Footer from "../../../layouts/Footer";
import EcosystemSection from "./EcosystemSection";
import EligibleSection from "./EligibleSection";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import RankingFlowSection from "./RankingFlowSection";
import SystemDefination from "./SystemDefination";
import SystemOutPut from "./SystemOutPut";
import TransparencySection from "./TransparencySection";

const pageSections = [
  { id: "sys-top10-hero-section", label: "Intro" },
  { id: "sys-top10-problem-statement", label: "Problem Statement" },
  { id: "sys-top10-system-definition", label: "System Definition" },
  { id: "sys-top10-eligible-content", label: "Eligible Content" },
  { id: "sys-top10-ranking-flow", label: "Ranking Flow" },
  { id: "sys-top10-transparency", label: "Transparency" },
  { id: "sys-top10-system-output", label: "System Output" },
  { id: "sys-top10-ecosystem", label: "Ecosystem" },
];

const Top10LandingPage = () => {
  return (
    <>
      <SectionIndicator sections={pageSections} />
      {/* --- Hero Section ---- */}
      <HeroSection />
      {/* ---- Problem section --- */}
      <ProblemSection />
      {/* --- system defination --- */}
      <SystemDefination />
      {/* --- Eligible section --- */}
      <EligibleSection />
      {/* --- Ranking Flow Section --- */}
      <RankingFlowSection />
      {/* --- Transparency ---- */}
      <TransparencySection />
      {/* --- System OutPut --- */}
      <SystemOutPut />
      {/* ---- ecosystem ---- */}
      <EcosystemSection />
      {/* --- Footer --- */}
      <Footer footerData={footerData} />
    </>
  );
};

export default Top10LandingPage;
