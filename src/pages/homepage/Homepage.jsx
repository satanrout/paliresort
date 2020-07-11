import React from "react";
import "./homepage.css";
import Hero from "../../components/hero/Hero";
import Welcome from "../../components/welcome/Welcome";
import Cards from "../../components/cards/Cards";
import Map from "../../components/map/Map";
import Testimonials from "../../components/testimonials/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Cards />
      <Testimonials />
      <Map />
    </div>
  );
};

export default Homepage;
