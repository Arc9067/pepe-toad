import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Photos from "./Components/Photos";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#64AF5C] relative text-white">
      <Header />
      <Hero />
      <About />
      <Photos />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
