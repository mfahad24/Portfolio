import React from "react";
import "./Portfolio.css";

// import SwipeNChill from './SwipeNChill.png';
// import SwipeNChill2 from "./SwipeNChill.png";
// import BudgetBuddy from "./BudgetBuddy.png";
// import UnionBank2 from "./UnionBank2.jpg";
// import KP2 from "./KaiserPermanente2.png";
// import FordSYNC4 from "./FordSYNC.png";
import WeatherApp from "./WeatherApp.jpg";
import CalendarApp from "./CalendarApp.png";
import TimeToPray from "./TimeToPray.png"
import DonateForZakah from "./DonateForZakah.png";
import Timer from "./Timer.png"

function Portfolio() {
  return (
    <>
      <div title="Professional Work Experience" id="portfolio" className="portfoliocontainer">
        {/* <div className="portfolio-section-title">Professional</div> */}
        {/* <div className="tile1">
          <div className="projectcontainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                className="tileimg"
                src={UnionBank2}
                alt="Union Bank"
                title="Union Bank"
              ></img>
            </a>
          </div>
        </div>

        <div className="tile2">
          <div className="projectcontainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                className="tileimg"
                src={KP2}
                alt="Kaiser Permanente"
                title="Kaiser Permanente"
              ></img>
            </a>
          </div>
        </div>
        <div className="tile3">
          <div className="projectcontainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                className="tileimg"
                src={FordSYNC4}
                alt="Ford SYNC"
                title="Ford SYNC"
              ></img>
            </a>
          </div>
        </div> */}
      </div>
      
      <div title="Professional Work Experience"  id="portfolio" className="portfoliocontainer">
      {/* <div className="portfolio-section-title">Personal</div> */}
        {/* <div className="tile4">
          <div className="projectcontainer">
            <a
              href="https://mfahad24.github.io/MovieFinder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="tileimg"
                src={SwipeNChill2}
                alt="Swipe N Chill"
                title="Swipe N Chill"
              ></img>
            </a>
          </div>
        </div> */}

        <div className="tile5">
          <div className="projectcontainer">
            <a href="http://jumpy-powder.surge.sh/" target="_blank" rel="noopener noreferrer">
              <img
                className="tileimg"
                src={WeatherApp}
                alt="Weather App"
                title="Weather App"
              ></img>
            </a>
          </div>
        </div>
        <div className="tile6">
          <div className="projectcontainer">
            <a href="http://calendar-app-2022.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img
                className="tileimg"
                src={CalendarApp}
                alt="Calendar App"
                title="Calendar App"
              ></img>
            </a>
          </div>
        </div>
        <div className="tile6">
          <div className="projectcontainer">
            <a href="https://ionamasjid.org/" target="_blank" rel="noopener noreferrer">
              <img
                className="tileimg"
                src={TimeToPray}
                alt="Daily Prayer Times"
                title="Daily Prayer Times"
              ></img>
            </a>
          </div>

        </div>
        <div className="tile7">
          <div className="projectcontainer">
            <a href="https://ionamasjid.org/portfolio/zakat-calculator.html" target="_blank" rel="noopener noreferrer">
              <img
                className="tileimg"
                src={DonateForZakah}
                alt="Donation/Zakah Calculator"
                title="Donation/Zakah Calculator"
              ></img>
            </a>
          </div>

        </div>
        <div className="tile7">
          <div className="projectcontainer">
            <a href="https://windows-timer-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img
                className="tileimg"
                src={Timer}
                alt="Windows Timer App clone"
                title="Windows Timer App clone"
              ></img>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
export default Portfolio;
