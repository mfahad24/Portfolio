import React from "react";
import "./MySkills.css";
import TypeScript from "./TypeScript.png"

function MySkills() {
  return (
    <div id="skills" className="myskillscontainer">
      <div className="skillsbox">
        <i className="fab fa-html5" style={{ color: "#e34f26" }}></i>
        <h3>HTML5</h3>
      </div>
      <div className="skillsbox">
        <i className="fab fa-css3" style={{ color: "#0645ad" }}></i>
        <h3>CSS</h3>
      </div>
      <div className="skillsbox">
        <i className="fab fa-js" style={{ color: "#f7df1e" }}></i>
        <h3>JavaScript</h3>
      </div>
      <div className="skillsbox">
        {" "}
        <i className="fab fa-react" style={{ color: "#61dbfb" }}></i>
        <h3>React</h3>
      </div>
      <div className="skillsbox">
        {" "}
        <img src={TypeScript} style={{ height: "50px", width: "50px", padding: "20px" }}/>
        <h3>TypeScript</h3>
      </div>
      <div className="skillsbox">
        {" "}
        <i className="fab fa-node" style={{ color: "#00769D" }}></i>
        <h3>Express</h3>
      </div>
    </div>
  );
}
export default MySkills;
