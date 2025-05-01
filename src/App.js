import React, { useState, useEffect } from "react";
import "./App.css";

import TopMenu from "./components/TopMenu/TopMenu.js";
import HeaderImage from "./components/HeaderImage/HeaderImage.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import Portfolio from "./components/Portfolio/Portfolio.js";
import ArrowUp from "./components/ScrollToTop/ScrollToTop.js";
import Signature from "./components/Signature/Signature.js";
import MySkills from "./components/MySkills/MySkills.js";
import Timeline from "./components/Timeline/Timeline.js";

const LoadingSpinner = () => (
  <div className="spinner">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <TopMenu className="fade-in" isLoading={isLoading} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="fade-in">
          <HeaderImage />
          <MySkills />
          <AboutMe />
          <Timeline />
          <Portfolio />
          <ArrowUp />
          <Signature />
        </div>
      )}
    </div>
  );
}

export default App;
