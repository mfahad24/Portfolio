import React from "react";
import ReactTooltip from "react-tooltip";
import "./Portfolio.css";

import WeatherApp from "./WeatherApp.jpg";
import CalendarApp from "./CalendarApp.png";
import TimeToPray from "./TimeToPray.png";
import DonateForZakah from "./DonateForZakah.png";
import Timer from "./Timer.png";
import Fundraiser from "./Fundraiser.jpg"

const projects = [
  {
    link: "https://github.com/mfahad24/ZakahCalculator",
    imgSrc: DonateForZakah,
    alt: "Donation/Zakah Calculator",
    tooltip: "HTML, CSS, JavaScript, React, React Hooks, TypeScript, Fetch, Modular CSS, Vite, Gold API, and Json Bin API (README and live view pending)"
  },
  {
    link: "https://github.com/mfahad24/Fundraiser-Tracker",
    imgSrc: Fundraiser,
    alt: "Fundraiser Tracker with donation meter",
     tooltip: "HTML, CSS, JavaScript, React, React Hooks, TypeScript, Fetch, Modular CSS, Vite, Google Sheets API (README and live view pending)"
  },
  {
    link: "http://jumpy-powder.surge.sh/",
    imgSrc: WeatherApp,
    alt: "Weather App",
    tooltip: "React (Class Components), Fetch, Open Weather API & React Testing Library"
  },
  {
    link: "http://calendar-mf.surge.sh/",
    imgSrc: CalendarApp,
    alt: "Calendar App",
    tooltip: "React (Functional Components), React Hooks, TypeScript, React Testing Library & Material UI"
  },
  {
    link: "https://ionamasjid.org/",
    imgSrc: TimeToPray,
    alt: "Daily Prayer Times",
    tooltip: "HTML, CSS, Vanilla JavaScript, XMLHTTPRequest & Joomla CMS"
  },

  {
    link: "http://windows-timer-app.surge.sh/",
    imgSrc: Timer,
    alt: "Windows Timer App clone",
    tooltip: "React (Functional Components), React Hooks, TypeScript, Axios, Modular CSS, Node, Express, MySQL, React Testing Library & Material UI"
  },

];

function Portfolio() {
  return (
    <div id="portfolio" className="portfoliocontainer">
      {projects.map((project, index) => (
        <div key={index} className={`tile${index % 2 === 0 ? 6 : 7}`}>
          <div className="projectcontainer">
            <a href={project.link} target="_blank" rel="noopener noreferrer" data-tip={project.tooltip}>
              <img className="tileimg" src={project.imgSrc} alt={project.alt} title="Click to visit" />
            </a>
            <ReactTooltip place="bottom" type="dark" effect="solid" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;