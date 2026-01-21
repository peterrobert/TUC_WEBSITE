import { footerData } from "../../data/footerData";
import landingPageData from "../../data/landingPage";
import Footer from "../../layouts/Footer";
import HeroSection from "./HeroSection";
import HowTucWorkSection from "./HowTucWorkSection";
import WhatExistsSection from "./WhatExistsSection";
import WhatIsTucSection from "./WhatIsTucSection";
import WhatMakesDifferentSection from "./WhatMakesDifferentSection";
import WhatMakesPossibleSection from "./WhatMakesPossibleSection";
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
    whatMakesDifferentData,
    whatMakesPossibleData,
  } = landingPageData;
  return (
    <>
      <HeroSection heroSection={heroSection} />
      <WhatIsTucSection whatIsTucSection={whatIsTucSection} />
      <WhyTucSection whyTucSection={whyTucSection} />
      <WhatExistsSection whatExistsSection={whatExistsSection} />
      <HowTucWorkSection howTucWorksSection={howTucWorksSection} />
      <WhoIsBuildingSection whoIsBuildingSection={whoIsBuildingTucSection} />
      <WhatMakesDifferentSection
        whatMakesDifferentData={whatMakesDifferentData}
      />
      <WhatMakesPossibleSection whatMakesPossibleData={whatMakesPossibleData} />
      <Footer footerData={footerData} />
    </>
  );
};

export default LandingPage;
