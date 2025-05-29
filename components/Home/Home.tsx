"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "./About/About";
import WhyChoose from "./WhyChoose/WhyChoose";
import Software from "./Software/Software";
import Footer from "./Footer/Footer";
import Project from "./Project/Project";
import Review from "./Review/Review";

import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Software />
      <Project />
      <Review />
      <Footer />
    </div>
  );
};
export default Home;
