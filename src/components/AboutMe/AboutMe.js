import React from "react";
import "./AboutMe.css";
function AboutMe() {
  return (
    <div id="aboutme" className="aboutmecontainer">
      {/* <img className="profile" src={Profile}></img> */}
      <blockquote>
        Software Developer currently working in the automotive space at{" "} 
        <a
          className="grandcircus"
          href="https://www.elektrobit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >Elektrobit Automotives
        </a>. Currently, I am using a wide variety of
        technologies to develop infotainment software for the Ford SYNC4
        project.{" "}
      </blockquote>
      {/* <ul className="skills">  <li>Proficient in HTML, CSS & JavaScript</li>
  <li>An excellent troubleshooter and problem solver</li>
  <li>Experience with Vue, React and AngularJs</li></ul> */}
    </div>
  );
}
export default AboutMe;
