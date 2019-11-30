import React from 'react';
import "./Portfolio.css";

import SwipeNChill from './SwipeNChill.png';
import SwipeNChill2 from './SwipeNChill2.png';
import BudgetBuddy from './BudgetBuddy.png';

function Portfolio() {
  return <div id="portfolio" className="portfoliocontainer">
      <div class="tile1">
          <div className="projectcontainer"><img src={BudgetBuddy}></img><h3 className="projecttitle"></h3></div>
          </div>
          <div class="tile2">
          <div className="projectcontainer"><img src={SwipeNChill2}></img></div>
          </div>
      <div class="tile3">  
          <div className="projectcontainer"><img src={BudgetBuddy}></img></div>
      </div>

     
    

      
      


  </div>
}
export default Portfolio;