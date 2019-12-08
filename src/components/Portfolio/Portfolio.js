import React from "react";
import "./Portfolio.css";

// import SwipeNChill from './SwipeNChill.png';
import SwipeNChill2 from "./SwipeNChill.png";
import BudgetBuddy from "./BudgetBuddy.png";
import UnionBank2 from "./UnionBank2.jpg";
import KP2 from "./KaiserPermanente2.png";
import FordSYNC4 from "./FordSYNC.png";

function Portfolio() {
  return (
    <div id="portfolio" className="portfoliocontainer">
      {/* <div className="personal"> */}
      {/* <div><h2>Personal Work</h2></div> */}
      <div className="tile1">
        <div className="projectcontainer">
          <a
            href="https://mfahad24.github.io/Budget-Buddy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="tileimg"
              src={BudgetBuddy}
              alt="Budget Buddy"
              title="Budget Buddy"
            ></img>
            {/* <h2 className="title">Budget Buddy</h2> */}
          </a>
        </div>
        {/* <div className="descriptiontab descriptionone"><h3 className="projecttitle">Budget Buddy</h3><p></p></div> */}
      </div>
      <div className="tile2">
        <div className="projectcontainer">
          <a
            href="https://mfahad24.github.io/MovieFinder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="tileimg"
              src={SwipeNChill2}
              alt="Swipe N Chill"
              title="Swipe N Chill"
            ></img>
            {/* <h2 className="title tile2title">Swipe-N-Chill</h2> */}
          </a>
        </div>
      </div>

      {/* </div> */}

      {/* <div className="professional">
      <div><h2>Professional Work</h2></div> */}
      {/* <div className="tile1">
          <div className="projectcontainer"><a href="https://mfahad24.github.io/Budget-Buddy/" target="_blank" rel="noopener noreferrer"><img class="tileimg" src={BudgetBuddy} alt="Budget Buddy" title="Budget Buddy"></img><h2 className="title">Budget Buddy</h2></a></div>
          {/* <div className="descriptiontab descriptionone"><h3 className="projecttitle">Budget Buddy</h3><p></p></div> */}
      {/* </div> */}
      <div className="tile3">
        <div className="projectcontainer">
          <a
            href="https://mfahad24.github.io/MovieFinder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="tileimg"
              src={UnionBank2}
              alt="Union Bank"
              title="Union Bank"
            ></img>
            {/* <h2 className="title tile3title">Union Bank</h2> */}
          </a>
        </div>
      </div>

      <div className="tile4">
        <div className="projectcontainer">
          <a
            href="https://mfahad24.github.io/MovieFinder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="tileimg"
              src={KP2}
              alt="Kaiser Permanente"
              title="Kaiser Permanente"
            ></img>
            {/* <h2 className="title tile4title">Kaiser Permanente</h2> */}
          </a>
        </div>
      </div>

      <div className="tile5">
        <div className="projectcontainer">
          <a
            href="https://mfahad24.github.io/MovieFinder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="tileimg"
              src={FordSYNC4}
              alt="Ford SYNC"
              title="Ford SYNC"
            ></img>
            {/* <h2 className="title tile5title">Ford Sync 4</h2> */}
          </a>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
export default Portfolio;
