import React from 'react';
import "./Portfolio.css";

// import SwipeNChill from './SwipeNChill.png';
import SwipeNChill2 from './SwipeNChill2.png';
import BudgetBuddy from './BudgetBuddy.png';

function Portfolio() {
  return <div id="portfolio" className="portfoliocontainer">
      <div class="tile1">
          <div className="projectcontainer"><img src={BudgetBuddy}></img></div>
          {/* <div class="descriptiontab descriptionone"><h3 className="projecttitle">Budget Buddy</h3><p></p></div> */}
          </div>
          <div class="tile2">
          <div className="projectcontainer"><img src={SwipeNChill2}></img></div>
          {/* <div class="descriptiontab descriptiontwo"><h3 className="projecttitle">Movie Finder</h3><p></p></div> */}
          </div>
      <div class="tile3">  
          <div className="projectcontainer"><img src={BudgetBuddy}></img></div>
          {/* <div class="descriptiontab descriptionthree"><h3 className="projecttitle">Budget Buddy</h3><p></p></div> */}
      </div>

     
    

      
      


  </div>
}
export default Portfolio;