import React, { Component } from "react";
import "./TopMenu.css";
import MohammedFahadResume from "./MohammedFahadResume.pdf";

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollPosition: 0 };
  }

  listenToScroll = () => {
    this.setState({
      scrollPosition: window.scrollY
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  render() {
    if (window.scrollY < 150 && window.innerWidth > 600) {
      return (
        <div className="navcontainer">
          <nav className="nav">
            <a href="#skills">My Skills</a>
            <a href="#aboutme">About Me</a>
            <a href="#timeline">Professional</a>
            <a href="#portfolio">Personal</a>
            <a href={MohammedFahadResume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </nav>
        </div>
      );
    } else {
      return (
        <div id="slimnav" className="navcontaineralt">
          <nav className="nav">
            <a href="#skills">My Skills</a>
            <a href="#aboutme">About Me</a>
            <a href="#timeline">Professional</a>
            <a href="#portfolio">Personal</a>
            <a href={MohammedFahadResume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </nav>
        </div>
      );
    }
  }
}

export default TopMenu;
