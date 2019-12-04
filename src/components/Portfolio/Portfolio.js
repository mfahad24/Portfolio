import React from 'react';
import "./Portfolio.css";

// import SwipeNChill from './SwipeNChill.png';
import SwipeNChill2 from './SwipeNChill2.png';
import BudgetBuddy from './BudgetBuddy.png';

function Portfolio() {
  return <div id="portfolio" className="portfoliocontainer">
      <div className="tile1">
          <div className="projectcontainer"><a href="https://mfahad24.github.io/Budget-Buddy/" target="_blank" rel="noopener noreferrer"><img src={BudgetBuddy} alt="Budget Buddy" title="Budget Buddy"></img></a></div>
          {/* <div className="descriptiontab descriptionone"><h3 className="projecttitle">Budget Buddy</h3><p></p></div> */}
          </div>
          <div className="tile2">
          <div className="projectcontainer"><a href="https://mfahad24.github.io/MovieFinder/" target="_blank" rel="noopener noreferrer"><img src={SwipeNChill2} alt="Swipe N Chill" title="Swipe N Chill"></img></a></div>
          {/* <div className="descriptiontab descriptiontwo"><h3 className="projecttitle">Movie Finder</h3><p></p></div> */}
          </div>
      {/* <div className="tile3">   */}
          {/* <div className="projectcontainer"><img src={BudgetBuddy} alt="Budget Buddy"></img></div> */}
          {/* <div className="descriptiontab descriptionthree"><h3 className="projecttitle">Budget Buddy</h3><p></p></div> */}
      {/* </div> */}

     
    

      
      


  </div>
}
export default Portfolio;