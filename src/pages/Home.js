import React from "react";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Heros from "../components/Heros";
import MidSection from "../components/MidSection";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <Heros />
      <MidSection />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
