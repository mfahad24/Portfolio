import React from "react";
import "./HeaderImage.css";

function HeaderImage() {
  return (
    <div id="header" className="headerimagecontainer">
      <h1>Mohammed Fahad</h1>
      <h2>Frontend Engineer</h2>
      <div className="iconscontainer">
        <a
          href="https://www.linkedin.com/in/mfahad24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/mfahad24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="mailto:mohammedfahad@live.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}
export default HeaderImage;
