import React from "react";
import "./HeaderImage.css";

function HeaderImage() {
  return (
    <div id="header" className="headerimagecontainer">
      {/* <img src={SpaceImage}></img> */}
      <h1>Mohammed Fahad</h1>
      <h2>Front-End Developer</h2>
      <div className="iconscontainer">
        <a href="https://twitter.com/fahmohh" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        {/* <a href="https://www.facebook.com/koobecaf24" target="_blank"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/amarnamfahad/" target="_blank"><i className="fab fa-instagram"></i></a> */}
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
