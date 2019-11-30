import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopMenu from './components/TopMenu/TopMenu.js'
import HeaderImage from './components/HeaderImage/HeaderImage.js'
import AboutMe from './components/AboutMe/AboutMe.js'
import Portfolio from  './components/Portfolio/Portfolio.js'
import ArrowUp from './components/ScrollToTop/ScrollToTop.js'
import Signature from './components/Signature/Signature.js'

function App() {
  return (
    <div> <TopMenu></TopMenu>
    <HeaderImage></HeaderImage>
    <AboutMe></AboutMe>
    <Portfolio></Portfolio>
    <ArrowUp></ArrowUp>
    <Signature></Signature>
    </div>

  );
}

export default App;
