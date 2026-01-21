import landingPageData from "../../data/landingPage";
import HeroSection from "./HeroSection";
import HowTucWorksSection from "./HowTucWorksSection";
import WhatExistsSection from "./WhatExistsSection";
import WhatIsTucSection from "./WhatIsTucSection";
import WhyTucSection from "./WhyTucSection";

const LandingPage = () => {
  const { heroSection, whatIsTucSection, whyTucSection, whatExistsSection } =
    landingPageData;
  return (
    <>
      <HeroSection heroSection={heroSection} />
      <WhatIsTucSection whatIsTucSection={whatIsTucSection} />
      <WhyTucSection whyTucSection={whyTucSection} />
      <WhatExistsSection whatExistsSection={whatExistsSection} />
      <HowTucWorksSection />
    </>
  );
};

export default LandingPage;
