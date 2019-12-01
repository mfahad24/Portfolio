import React, { Component } from 'react';
import "./TopMenu.css";
import OfficialResume from "./OfficialResume.pdf";
  
class TopMenu extends Component {
  render() {
    return (
     <div className="navcontainer"><nav className="nav">
  {/* <a href="#header">Home</a>  */}
  <a href="#skills">My Skills</a> 
  <a href="#aboutme">About Me</a> 
  <a href="#timeline">Timeline</a> 
  <a href="#portfolio">Portfolio</a> 
  {/* <a href="/js/">Contact Me</a>  */}
  <a href={OfficialResume} target="_blank" rel="noopener noreferrer">Resume</a>
</nav></div>
    );
  }
}

export default TopMenu;