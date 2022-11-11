import React from "react";
import "./Portfolio.css";

import WeatherApp from "./WeatherApp.jpg";
import CalendarApp from "./CalendarApp.png";
import TimeToPray from "./TimeToPray.png";
import DonateForZakah from "./DonateForZakah.png";
import Timer from "./Timer.png";

import Tooltip from "@mui/material/Tooltip";

function Portfolio() {
  return (
    <>
      <div id="portfolio" className="portfoliocontainer"></div>

      <div id="portfolio" className="portfoliocontainer">
        <div className="tile5">
          <div className="projectcontainer">
            <Tooltip
              title="React (Class Components), Fetch API, & React Testing Library"
              disableInteractive
            >
              <a
                href="http://jumpy-powder.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="tileimg"
                  src={WeatherApp}
                  alt="Weather App"
                  title="Click to visit"
                ></img>
              </a>
            </Tooltip>
          </div>
        </div>
        <div className="tile6">
          <div className="projectcontainer">
            <Tooltip
              title="React (Functional Components), React Hooks, TypeScript, React Testing Library & Material UI"
              disableInteractive
            >
              <a
                href="http://calendar-mf.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="tileimg"
                  src={CalendarApp}
                  alt="Calendar App"
                  title="Click to visit"
                ></img>
              </a>
            </Tooltip>
          </div>
        </div>
        <div className="tile6">
          <div className="projectcontainer">
            <Tooltip
              title="HTML, CSS, Vanilla JavaScript, XMLHTTPRequest & Joomla"
              disableInteractive
            >
              <a
                href="https://ionamasjid.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="tileimg"
                  src={TimeToPray}
                  alt="Daily Prayer Times"
                  title="Click to visit"
                ></img>
              </a>
            </Tooltip>
          </div>
        </div>
        <div className="tile7">
          <div className="projectcontainer">
            <Tooltip
              title="HTML, CSS, Vanilla JavaScript, XMLHTTPRequest, Gold API & Joomla"
              disableInteractive
            >
              <a
                href="https://ionamasjid.org/portfolio/zakat-calculator.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="tileimg"
                  src={DonateForZakah}
                  alt="Donation/Zakah Calculator"
                  title="Click to visit"
                ></img>
              </a>
            </Tooltip>
          </div>
        </div>
        <div className="tile7">
          <div className="projectcontainer">
            <Tooltip
              title="React (Functional Components), React Hooks, TypeScript, Axios, Modular CSS, Node, Express, MySQL, React Testing Library & Material UI"
              disableInteractive
            >
              <a
                href="http://windows-timer-app.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="tileimg"
                  src={Timer}
                  alt="Windows Timer App clone"
                  title="Click to visit"
                ></img>
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
