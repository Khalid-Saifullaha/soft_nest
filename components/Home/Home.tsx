import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "./About/About";
import WhyChoose from "./WhyChoose/WhyChoose";
import Software from "./Software/Software";
import Footer from "./Footer/Footer";
import Project from "./Project/Project";

export const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Software />
      <Project />
      <Footer />
    </div>
  );
};
export default Home;
