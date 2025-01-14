import React from "react";
import Hero from "./Components/Hero";
import ConnectSlide from "./Components/ConnectSlide";
import Impact from "./Components/Impact";
import ImpactSlider from "./Components/ImpactSlider";
import GetInvolved from "./Components/GetInvolved";
import NewsSection from "./Components/NewsSection";
import FaqCom from "./Components/FaqCom";


const Home = () => {
  return (
    <div>
      <Hero />
      <ConnectSlide />
      <Impact />
      <ImpactSlider />
      <GetInvolved />
      <NewsSection />
      <FaqCom />
    </div>
  );
};

export default Home;
