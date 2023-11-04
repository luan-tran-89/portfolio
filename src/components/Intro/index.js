import React from "react";
import Typed from "react-typed";
import Links from "../Links";

class Intro extends React.Component {

  onClick() {
    
  }

  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I'm Ba Luan Tran</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Senior Software Developer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="button stroke smoothscroll js-scroll"
                  href="#about"
                  role="button"
                >
                  More About Me
                </a>
              </p>
              <Links />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
