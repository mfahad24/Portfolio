import React, { Component } from 'react';
import "./TopMenu.css";
import OfficialResume from "./OfficialResume.pdf";
  
class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {scrollPosition: 0};
  }

  listenToScroll = () => {
    this.setState({
      scrollPosition: window.scrollY
    });
  }

  componentDidMount(){
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.listenToScroll)
    }
  

  render() {
    console.log("POSITION", this.state.scrollPosition)
    if (window.scrollY < 150 && window.innerWidth > 600) {
    return (
     <div className="navcontainer"><nav className="nav">
  <a href="#skills">My Skills</a> 
  <a href="#aboutme">About Me</a> 
  <a href="#timeline">Timeline</a> 
  <a href="#portfolio">Portfolio</a> 
  <a href={OfficialResume} target="_blank" rel="noopener noreferrer">Resume</a>
</nav></div>
    );
    } else {
      return <div className="navcontaineralt"><nav className="nav">
      <a href="#skills">My Skills</a> 
      <a href="#aboutme">About Me</a> 
      <a href="#timeline">Timeline</a> 
      <a href="#portfolio">Portfolio</a> 
      <a href={OfficialResume} target="_blank" rel="noopener noreferrer">Resume</a>
    
    </nav> 
     {/* <div className="iconscontainer"> */}
        {/* social icons on smaller nav bar */}
    {/* <a href="https://twitter.com/fahmohh"  rel="noopener noreferrer"><i className="fab fa-twitter"></i></a> */}
    {/* <a href="https://www.facebook.com/koobecaf24" target="_blank"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/amarnamfahad/" target="_blank"><i className="fab fa-instagram"></i></a> */}
        {/* <a href="https://www.linkedin.com/in/mfahad24/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/mfahad24" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>

</a>
        <a href="mailto:mohammedfahad@live.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i>

</a> */}

{/* </div> */}
</div>
    }
  }
}


export default TopMenu;