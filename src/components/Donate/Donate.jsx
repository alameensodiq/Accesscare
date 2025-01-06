import React from 'react';
import DonateBanner from './DonateBanner';
import DonateForm from './DonateForm';
import MakeDifference from '../Reusable/MakeDifference';

const Donate = () => {
  return (
    <div className="">

      <DonateBanner />
      <DonateForm />
      <div  className="container mx-auto py-16 relative">
        <MakeDifference
          title1={"Ready To make"}
          title2={" a Difference? "}
          description={"Join our team of volunteers who are making a direct impact on underserved communities. Your time can change lives!"}
        />
      </div>
    </div>
  );
};

export default Donate;
