import React from 'react';
import "./Timeline.css";
  
function Timeline() {
    return <div id="timeline" className="timelinecontainer">
<section className="timeline">

  <ul>
    <li>
      <div className="content">
        <h2>
          <time>March 2018</time>
        </h2>
        <p>Graduated from the <a className="grandcircus" href="https://www.grandcircus.co/" target="_blank" rel="noopener noreferrer">Grand Circus</a> Front End Bootcamp. It was a ten week fulltime bootcamp that covered HTML, CSS, Javascript, jQuery, Angular, Ajax, Json, NodeJs, Express, and PostgreSQL. After taking this course, I gained a strong understanding and applicability of these concepts.</p>
      </div>
    </li>
    <li>
      <div className="content">
        <h2>
          <time>July 2018</time>
        </h2>
        <p>Started as a Wordpress Developer for LivingSpace Sunrooms in Plymouth, MI.</p>
      </div>
    </li>
    <li>
      <div className="content">
        <h2>
          <time>January 2019</time>
        </h2>
        <p>Started working at Campbell Ewald in Detroit, MI as a Junior Front End Developer</p>
      </div>
    </li>
    <li>
      <div className="content">
        <h2>
          <time>August 2019</time>
        </h2>
        <p>Began working at Elektrobit Automotives in Farmington Hills, MI as a Software Engineer working on the FORD SYNC4 HMI system</p>
      </div>
    </li>
  </ul>
</section>

    </div>
  }
  export default Timeline;