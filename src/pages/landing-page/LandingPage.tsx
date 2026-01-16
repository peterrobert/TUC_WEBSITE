import landingPageData from "../../data/landingPage";
import HeroSection from "./HeroSection";
import WhatIsTucSection from "./WhatIsTucSection";
import WhyTucSection from "./WhyTucSection";

const LandingPage = () => {
  const { heroSection, whatIsTucSection, whyTucSection } = landingPageData;
  return (
    <>
      <HeroSection heroSection={heroSection} />
      <WhatIsTucSection whatIsTucSection={whatIsTucSection} />
      <WhyTucSection whyTucSection={whyTucSection} />
    </>
  );
};

export default LandingPage;
