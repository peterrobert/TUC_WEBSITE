import ScrollToTopButton from "../../components/ScrollToTopButton";
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
    // whatMakesDifferentData,
    whatMakesPossibleData,
  } = landingPageData;
  return (
    <>
      <HeroSection heroSection={heroSection} />
      <WhyTucSection whyTucSection={whyTucSection} />
      <WhatIsTucSection whatIsTucSection={whatIsTucSection} />
      <HowTucWorkSection howTucWorksSection={howTucWorksSection} />
      <WhatExistsSection whatExistsSection={whatExistsSection} />
      <WhoIsBuildingSection whoIsBuildingSection={whoIsBuildingTucSection} />
      <WhatMakesDifferentSection
      // whatMakesDifferentData={whatMakesDifferentData}
      />
      <WhatMakesPossibleSection whatMakesPossibleData={whatMakesPossibleData} />
      <Footer footerData={footerData} />
      <ScrollToTopButton />
    </>
  );
};

export default LandingPage;
