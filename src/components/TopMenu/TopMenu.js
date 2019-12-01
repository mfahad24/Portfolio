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
    if (window.scrollY < 150) {
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
    </nav></div>
    }
  }
}


export default TopMenu;