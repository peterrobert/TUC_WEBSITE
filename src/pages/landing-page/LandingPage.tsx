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
  { id: "definition", label: "Definition" },
  { id: "meets-you", label: "Access" },
  { id: "who-building", label: "Builders" },
  { id: "evolution", label: "Evolution" },
  { id: "how-it-works", label: "How It Works" },
  { id: "what-exists", label: "What Exists" },
  { id: "what-different", label: "Difference" },
  { id: "what-possible", label: "Possibility" },
  { id: "engage", label: "Engage" },
  { id: "landing", label: "Landing" },
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
      <WhatMakesDifferentSection
      // whatMakesDifferentData={whatMakesDifferentData}
      />
      <WhatMakesPossibleSection whatMakesPossibleData={whatMakesPossibleData} />
      <TUCHowToEngage />
      <TUCQuietLanding />
      <Footer footerData={footerData} />
      <ScrollToTopButton />
    </>
  );
};

export default LandingPage;
