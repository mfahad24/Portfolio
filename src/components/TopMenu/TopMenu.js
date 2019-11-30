import React from 'react';
import "./TopMenu.css";
import OfficialResume from "./OfficialResume.pdf";
function TopMenu() {
  return <div className="navcontainer"><nav className="nav">
  <a href="/html/">Home</a> 
  <a href="/css/">About Me</a> 
  <a href="/css/">Portfolio</a> 
  <a href="/js/">Contact Me</a> 
  <a href={OfficialResume}>Resume</a>
</nav></div>
}
export default TopMenu;