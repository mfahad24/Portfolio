import React from 'react';
import SpaceImage from './serene.jpg';
import "./HeaderImage.css";

function HeaderImage() {
  return <div id="header" className="headerimagecontainer">
      {/* <img src={SpaceImage}></img> */}
<h1>Mohammed Fahad</h1>
<h2>Front-End Developer</h2>
<div className="iconscontainer">
    <a href="https://twitter.com/fahmohh"><i className="fab fa-twitter"></i></a>
    <a href="https://www.facebook.com/koobecaf24"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/amarnamfahad/"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/mfahad24/"><i class="fab fa-linkedin-in"></i></a>


</div>
  </div>
}
export default HeaderImage;