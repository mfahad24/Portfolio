import React from 'react';
import SpaceImage from './serene.jpg';
import "./HeaderImage.css";

function HeaderImage() {
  return <div className="headerimagecontainer">
      {/* <img src={SpaceImage}></img> */}
<h1>Mohammed Fahad</h1>
<h2>Front-End Developer</h2>
<div className="iconscontainer"><i className="fab fa-twitter"></i><i className="fab fa-facebook-f"></i><i className="fab fa-instagram"></i>


</div>
  </div>
}
export default HeaderImage;