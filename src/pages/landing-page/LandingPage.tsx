import landingPageData from "../../data/landingPage";
import HeroSection from "./HeroSection";
import HowTucWorkSection from "./HowTucWorkSection";
import WhatExistsSection from "./WhatExistsSection";
import WhatIsTucSection from "./WhatIsTucSection";
import WhyTucSection from "./WhyTucSection";

const LandingPage = () => {
  const {
    heroSection,
    whatIsTucSection,
    whyTucSection,
    whatExistsSection,
    howTucWorksSection,
  } = landingPageData;
  return (
    <>
      <HeroSection heroSection={heroSection} />
      <WhatIsTucSection whatIsTucSection={whatIsTucSection} />
      <WhyTucSection whyTucSection={whyTucSection} />
      <WhatExistsSection whatExistsSection={whatExistsSection} />
      <HowTucWorkSection howTucWorksSection={howTucWorksSection} />
    </>
  );
};

export default LandingPage;
