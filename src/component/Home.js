import React from "react";
import AboutMe from "./AboutMe";
import MySlider from "./MySlider";
import Shipment from "./Shipment";
import Inspection from "./Inspection";
import Expediting from "./Expediting";
import Facilities from "./Facilities";

const Home = () => {
  return (
    <>
      <MySlider />
      <AboutMe />
      <Facilities />
      <Shipment />
      <Inspection />
      <Expediting />
    </>
  );
};

export default Home;
