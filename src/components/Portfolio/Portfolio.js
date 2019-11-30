import React from 'react';
import "./Portfolio.css";

import SwipeNChill from './SwipeNChill.png';
import SwipeNChill2 from './SwipeNChill2.png';
import BudgetBuddy from './BudgetBuddy.png';

function Portfolio() {
  return <div id="portfolio" className="portfoliocontainer">
      <div className="projectcontainer tile1"><img src={BudgetBuddy}></img><h3 className="projecttitle"></h3></div>

      <div className="projectcontainer tile2"><img src={SwipeNChill2}></img></div>
      <div className="projectcontainer tile3"><img src={BudgetBuddy}></img></div>

      
      


  </div>
}
export default Portfolio;