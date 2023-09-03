import React from "react";
import Home from "../component/Home";
import AboutMe from "../component/AboutMe";
import Inspection from "../component/Inspection";
import Expediting from "../component/Expediting";
import Shipment from "../component/Shipment";
import Contact from "../component/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import Facilities from "../component/Facilities";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/inspection" element={<Inspection />} />
      <Route path="/expediting" element={<Expediting />} />
      <Route path="/shipment" element={<Shipment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/facilities" element={<Facilities />} />

      {/* <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="*" element={<Error />} /> */}
    </Routes>
  );
};

export default Router;
