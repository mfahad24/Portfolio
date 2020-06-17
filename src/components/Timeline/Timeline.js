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
                Graduated from the{" "}
                <a
                  className="grandcircus"
                  href="https://www.grandcircus.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Grand Circus
                </a>{" "}
                Front End Bootcamp. It was a ten week fulltime bootcamp that
                provided me with a solid foundation of coding front-end
                experiences using HTML, CSS, JavaScript, and Angular. Besides
                front end skills, the bootcamp also covered back-end coursework
                like servers, JSON APIs, and SQL.
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h2>
                <time>July 2018</time>
              </h2>
              <p>
                Started as a Wordpress Developer for LivingSpace Sunrooms in
                Plymouth, MI, where I spearheaded the migration, development and
                oversight of the company website using PHP, HTML, CSS, and
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
                Started working at Campbell Ewald in Detroit, MI as a Front End
                Developer. Here I worked with a small team of developers working
                on sites such as{" "}
                <a
                  className="grandcircus"
                  href="https://www.unionbank.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Union Bank
                </a>{" "}
                and{" "}
                <a
                  className="grandcircus"
                  href="https://healthy.kaiserpermanente.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kaiser Permanente
                </a>{" "}
                by applying skills in modern HTML, CSS, and JavaScript on a Vue
                front end framework
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h2>
                <time>August 2019</time>
              </h2>
              <p>
                Began working at Elektrobit Automotives in Farmington Hills, MI
                as a Software Engineer working on the{" "}
                <a
                  className="grandcircus"
                  href="https://www.ford.com/technology/sync/sync-4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FORD SYNC4
                </a>{" "}
                infotainment system.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Timeline;
