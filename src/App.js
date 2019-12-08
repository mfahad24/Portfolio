import React from "react";
import "./App.css";

import TopMenu from "./components/TopMenu/TopMenu.js";
import HeaderImage from "./components/HeaderImage/HeaderImage.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import Portfolio from "./components/Portfolio/Portfolio.js";
import ArrowUp from "./components/ScrollToTop/ScrollToTop.js";
import Signature from "./components/Signature/Signature.js";
// import ContactMe from './components/ContactMe/ContactMe.js'
import MySkills from "./components/MySkills/MySkills.js";
import Timeline from "./components/Timeline/Timeline.js";

function App() {
  return (
    <div>
      {" "}
      <TopMenu></TopMenu>
      <HeaderImage></HeaderImage>
      <MySkills></MySkills>
      <AboutMe></AboutMe>
      <Timeline></Timeline>
      <Portfolio></Portfolio>
      {/* <ContactMe></ContactMe> */}
      <ArrowUp></ArrowUp>
      <Signature></Signature>
    </div>
  );
}

export default App;
