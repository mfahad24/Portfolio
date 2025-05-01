import React from "react";
import "./Timeline.css";

function Timeline() {
  return (
    <div id="timeline" className="timelinecontainer">
      <section className="timeline">
        <ul>
          <li>
            <div className="content">
              <h2>
                <time>March 2018</time>
              </h2>
              <p>
                Completed Grand Circus’ intensive 10-week Front-End Bootcamp,
                building a solid foundation in HTML, CSS, JavaScript, and
                Angular. Also explored back-end fundamentals—including servers,
                JSON APIs, and SQL—broadening my capabilities beyond front-end
                development.
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h2>
                <time>July 2018</time>
              </h2>
              <p>
                Initiated my journey as a WordPress Developer at LivingSpace
                Sunrooms in Plymouth, MI. Pioneered the migration, development,
                and oversight of the company website using PHP, HTML, CSS, and
                JavaScript.
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h2>
                <time>January 2019</time>
              </h2>
              <p>
                Started as a Front End Developer at Campbell Ewald in Detroit,
                MI. Collaborated with a dynamic team on projects for Union Bank
                and Kaiser Permanente, employing modern HTML, CSS, and
                JavaScript within a Vue front-end framework.
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h2>
                <time>August 2019</time>
              </h2>
              <p>
                Joined Elektrobit Automotives in Farmington Hills, MI as a
                Software Engineer, where I developed React-based applications
                for Ford’s SYNC 4 infotainment system—software currently
                deployed in millions of vehicles.
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h2>
                <time>January 2023</time>
              </h2>
              <p>
                Joined Deloitte as a Frontend Engineer on the IRS Business
                Online Account (BOLA) team. Built scalable UI components and
                maintained high code quality for a platform serving millions of
                U.S. businesses.
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h2>
                <time>July 2024</time>
              </h2>
              <p>
                Started as a Frontend Engineer in July 2024, quickly expanding
                into back-end development, production support, and security
                defect resolution to meet evolving team needs. Led efforts to
                manage critical user messaging on IRS.gov, directly influencing
                the experience of over 2.4 million daily users during peak tax
                season.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Timeline;
