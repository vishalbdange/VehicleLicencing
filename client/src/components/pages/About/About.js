import React from "react";
import Description from "./Description/Description";
import HowItWorks from "./HowItWork/HowItWork";
import AboutUs from "./About Us/AboutUs";
import ContactUs from "./Contact Us/ContactUs";
import Footer from "./Footer/Footer";

const About = () => {
  return (
    <>
      <div style={{ background: "e85a4f" }}>
        <Description />
        <HowItWorks />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default About;
