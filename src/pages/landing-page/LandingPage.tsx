import landingPageData from "../../data/landingPage";
import HeroSection from "./HeroSection";
import WhatIsTucSection from "./WhatIsTucSection";

const LandingPage = () => {
  const { heroSection, whatIsTucSection } = landingPageData;
  return (
    <>
      <HeroSection heroSection={heroSection} />
      <WhatIsTucSection whatIsTucSection={whatIsTucSection} />
    </>
  );
};

export default LandingPage;
