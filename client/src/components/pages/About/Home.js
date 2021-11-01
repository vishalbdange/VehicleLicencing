import React from "react";
import Description from "./Description/Description";
import AboutUs from "./About Us/AboutUs";
import HowItWorks from "./HowItWork/HowItWork";
import ContactUs from "./Contact Us/ContactUs";

const Home = () => {
  return (
    <>
      <div style={{ background: "e85a4f" }}>
        <Description />
        <HowItWorks />
        <AboutUs />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
