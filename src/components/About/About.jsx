import React from "react";
import TopSection from "./TopSection";
import VisionMission from "./VisionMission";
import WhatDriveus from "./WhatDriveus";
import MakeDifference from "../Reusable/MakeDifference";

const About = () => {
  return <div>
    <TopSection />
    <VisionMission />
    <WhatDriveus />
    <MakeDifference
      title1={"Ready To make"}
      title2={" a Difference? "}
      description={"Join our team of volunteers who are making a direct impact on underserved communities. Your time can change lives!"}
    />
  </div>;
};

export default About;
