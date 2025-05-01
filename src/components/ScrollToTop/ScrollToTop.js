import React, { Component } from "react";
import "./ScrollToTop.css";

class ScrollToTop extends Component {
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
    if (this.state.scrollPosition > 150) {
      return (
        <div className="scrolltotop">
          <a href="#top">
            <i className="fas fa-arrow-circle-up"></i>
          </a>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default ScrollToTop;
