import ScrollToTopButton from "../../components/ScrollToTopButton";
import { footerData } from "../../data/footerData";
import Footer from "../../layouts/Footer";
import ContactSection from "./ContactSection";
import CtaSection from "./CtaSection";
import HeroSection from "./HeroSection";
import HowWeWorkSection from "./HowWeWorkSection";
import ProjectSection from "./ProjectSection";
import TeamSection from "./TeamSection";
import ValuesSection from "./ValuesSection";
import WhatWeDontDoSection from "./WhatWeDontDoSection";
import WhyTransparencyMattersSection from "./WhyTransparencyMattersSection";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <TeamSection />
      <ValuesSection />
      <HowWeWorkSection />
      <WhatWeDontDoSection />
      <WhyTransparencyMattersSection />
      <ContactSection />
      <CtaSection />
      <Footer footerData={footerData} />
      <ScrollToTopButton />
    </>
  );
};

export default AboutPage;
