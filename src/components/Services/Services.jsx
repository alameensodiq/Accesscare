import React from "react";
import ServiceBanner from "./ServiceBanner";
import ServicesList from "./ServicesList";
import LastServiceSec from "./LastServiceSec";

const Services = () => {
  return (
    <>
      <ServiceBanner />
      <ServicesList />
      <LastServiceSec />
    </>
  );
};

export default Services;
