import React from "react";
import "./AboutMe.css";
function AboutMe() {
  return (
    <div id="aboutme" className="aboutmecontainer">
      <blockquote>
        Front-end engineer currently working in the automotive space at{" "}
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
    </div>
  );
}
export default AboutMe;
