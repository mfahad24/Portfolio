import React, { Component } from "react";
import "./TopMenu.css";
import MohammedFahadResume from "./Mohammed-Fahad-Resume.pdf";

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollPosition: 0 };
  }

  listenToScroll = () => {
    this.setState({
      scrollPosition: window.scrollY,
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
            {this.props.isLoading ? (
              <>
                <a href="#skills"></a>
                <a href="#aboutme"></a>
                <a href="#timeline"></a>
                <a href="#portfolio"></a>
                <a
                  href={MohammedFahadResume}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </>
            ) : (
              <>
                <a href="#skills">My Skills</a>
                <a href="#aboutme">About Me</a>
                <a href="#timeline">Timeline</a>
                <a href="#portfolio">Projects</a>
                <a
                  href={MohammedFahadResume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </>
            )}
          </nav>
        </div>
      );
    } else {
      return (
        <div id="slimnav" className="navcontaineralt">
          <nav className="nav">
            {this.props.isLoading ? (
              <>
                <>
                  <a href="#skills"></a>
                  <a href="#aboutme"></a>
                  <a href="#timeline"></a>
                  <a href="#portfolio"></a>
                  <a
                    href={MohammedFahadResume}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </>
              </>
            ) : (
              <>
                <a href="#skills">My Skills</a>
                <a href="#aboutme">About Me</a>
                <a href="#timeline">Timeline</a>
                <a href="#portfolio">Projects</a>
                <a
                  href={MohammedFahadResume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </>
            )}
          </nav>
        </div>
      );
    }
  }
}

export default TopMenu;
