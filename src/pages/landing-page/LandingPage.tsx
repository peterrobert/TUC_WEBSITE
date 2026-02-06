import ScrollToTopButton from "../../components/ScrollToTopButton";
import { footerData } from "../../data/footerData";
import landingPageData from "../../data/landingPage";
import Footer from "../../layouts/Footer";
import TUCMeetsYouWhereYouAre from "./ TUCMeetsYouWhereYouAre";
import HeroSection from "./HeroSection";
import HowTucWorkSection from "./HowTucWorkSection";
import MissionStatement from "./MissionStatement";
import TUCEvolution from "./TUCEvolution";
import TUCHowToEngage from "./TUCHowToEngage";
import WhatExistsSection from "./WhatExistsSection";
import WhatIsTucSection from "./WhatIsTucSection";
import WhatMakesDifferentSection from "./WhatMakesDifferentSection";
import WhatMakesPossibleSection from "./WhatMakesPossibleSection";
import WhatTuc from "./WhatTuc";
import WhoIsBuildingSection from "./WhoIsBuildingSection";
import WhyTucSection from "./WhyTucSection";

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
      <HeroSection heroSection={heroSection} />
      <MissionStatement whyTucSection={whyTucSection} />
      <WhyTucSection whyTucSection={whyTucSection} />
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
      <Footer footerData={footerData} />
      <ScrollToTopButton />
    </>
  );
};

export default LandingPage;
