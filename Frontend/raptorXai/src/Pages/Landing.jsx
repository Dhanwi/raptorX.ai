import React from "react";
import Hero from "../Components/LandingPageSections/Hero";
import Safeguarding from "../Components/LandingPageSections/Safeguarding";
import Personalized from "../Components/LandingPageSections/Personalized";
import WhyChooseRaptorX from "../Components/LandingPageSections/WhyChooseRaptorX";
import HowRaptorxWorks from "../Components/LandingPageSections/HOwRaptorxWorks";
import UseCases from "../Components/LandingPageSections/UseCases";

const Landing = () => {
  return (
    <div className="bg-[#020811]">
      <Hero />
      <Safeguarding />
      <Personalized />
      <WhyChooseRaptorX />
      <HowRaptorxWorks />
      <UseCases />
    </div>
  );
};

export default Landing;
