import React from "react";
import Hero from "../components/Home/Hero";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";
import Section6 from "../components/Home/Section6";
import Section7 from "../components/Home/Section7";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Testimonial />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default Home;
