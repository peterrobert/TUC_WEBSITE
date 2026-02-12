import ScrollToTopButton from "../../components/ScrollToTopButton";
import SectionIndicator from "../../components/SectionIndicator";
import { footerData } from "../../data/footerData";
import landingPageData from "../../data/landingPage";
import Footer from "../../layouts/Footer";
import TUCMeetsYouWhereYouAre from "./ TUCMeetsYouWhereYouAre";
import HeroSection from "./HeroSection";
import HowTucWorkSection from "./HowTucWorkSection";
import MissionStatement from "./MissionStatement";
import TUCEvolution from "./TUCEvolution";
import TUCHowToEngage from "./TUCHowToEngage";
import TUCQuietLanding from "./TUCSoftClosingAndVision";
import WhatExistsSection from "./WhatExistsSection";
import WhatIsTucSection from "./WhatIsTucSection";
import WhatMakesDifferentSection from "./WhatMakesDifferentSection";
import WhatMakesPossibleSection from "./WhatMakesPossibleSection";
import WhatTuc from "./WhatTuc";
import WhoIsBuildingSection from "./WhoIsBuildingSection";
import WhyTUCExists from "./whyTucExists";
import WhyTucSection from "./WhyTucSection";

const pageSections = [
  { id: "hero", label: "Intro" },
  { id: "mission", label: "Mission Statement" },
  { id: "why-tuc-is-needed", label: "Why TUC Is Needed" },
  { id: "why-exists", label: "Why TUC Exists" },
  { id: "what-tuc", label: "What Is TUC" },
  { id: "definition", label: "What TUC Is Not" },
  { id: "where-you-are", label: "TUC Meets You Where You Are" },
  { id: "who-building", label: "Who Is Building TUC" },
  { id: "how-tuc-evolved", label: "How TUC Evolved" },
  { id: "how-it-works", label: "How TUC Works" },
  { id: "what-exists", label: "What Already Exists" },
  { id: "what-different", label: "What Makes TUC Different" },
  { id: "what-possible", label: "What TUC Makes Possible" },
  { id: "engage", label: "How You Can Engage" },
  { id: "landing", label: "TUC’s Vision" },
];

const LandingPage = () => {
  const {
    heroSection,
    whatIsTucSection,
    whyTucSection,
    whatExistsSection,
    howTucWorksSection,
    whoIsBuildingTucSection,
    // whatMakesDifferentData,
    whatMakesPossibleData,
  } = landingPageData;
  return (
    <>
      <SectionIndicator sections={pageSections} />
      <HeroSection heroSection={heroSection} />
      <MissionStatement whyTucSection={whyTucSection} />
      <WhyTucSection whyTucSection={whyTucSection} />
      <WhyTUCExists />
      <WhatTuc />
      <WhatIsTucSection whatIsTucSection={whatIsTucSection} />
      <TUCMeetsYouWhereYouAre />
      <WhoIsBuildingSection whoIsBuildingSection={whoIsBuildingTucSection} />
      <TUCEvolution />
      <HowTucWorkSection howTucWorksSection={howTucWorksSection} />
      <WhatExistsSection whatExistsSection={whatExistsSection} />
      <WhatMakesDifferentSection />
      <WhatMakesPossibleSection whatMakesPossibleData={whatMakesPossibleData} />
      <TUCHowToEngage />
      <TUCQuietLanding />
      <Footer footerData={footerData} />
      <ScrollToTopButton />
    </>
  );
};

export default LandingPage;
