import React from "react";
import { isMobile } from "react-device-detect";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showId: 1,
      transformDistance: -494,
      scaleLevel: 1
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (isMobile) {
      this.setState({
        showId: Math.floor(winScroll / 948) + 1,
        transformDistance: -494 + 350 * (winScroll / 2876),
        scaleLevel: 0.3 * (1 - winScroll / 2876) + 0.7
      });
    } else {
      this.setState({
        showId: Math.floor(winScroll / 948) + 1,
        transformDistance: -494 + 494 * (winScroll / 2876), //  -494 -> 0
        scaleLevel: 0.6 * (1 - winScroll / 2876) + 0.4 // 1 -> 0.4
      });
    }
  };

  render() {
    const { scaleLevel, transformDistance } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="sticky-item">
            <div
              className="image-container"
              style={{
                transform: `translate(0px, ${transformDistance}px) scale(${scaleLevel}, ${scaleLevel})`
              }}
            >
              <figure
                className={`image-feature image-portrait-mode-1 ${
                  this.state.showId === 1 ? "show" : ""
                }`}
              />
              <figure
                className={`image-feature image-portrait-mode-2 ${
                  this.state.showId === 2 ? "show" : ""
                }`}
              />
              <figure
                className={`image-feature image-portrait-mode-3 ${
                  this.state.showId === 3 ? "show" : ""
                }`}
              />
              <figure
                className={`image-feature image-portrait-mode-4 ${
                  this.state.showId === 4 ? "show" : ""
                }`}
              />
            </div>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="row-inner medium-4 small-12">
                <p className="font-size">
                  The Lunar Moon has captivated the human imagination throughout
                  history. Though it is ever present, there is so little we
                  know. We wanted to bring the Moon closer, to bring all of our
                  stargazing dreams into reality. Our mission is to inspire as
                  many space lovers as we can, helping to awaken and educate a
                  new generation of astronomy enthusiasts through the power of
                  technology
                </p>
              </div>
            </div>
            <div className="row">
              <div className="row-inner medium-4 small-12">
                <p className="font-size">
                  Printing level height down to 0.05 millimeters Printing error
                  precision of 0.025 millimeters Up to 0.006 millimeters per
                  pixel precision 3D printing accuracy 98%+ modeling accuracy
                  achieved through
                </p>
              </div>
            </div>
            <div className="row">
              <div className="row-inner medium-4 small-12">
                <p className="font-size">
                  Using the most accurate industrial 3D printing technology
                  available today, LUNAR is modeled to 0.006 millimeters per
                  pixel precision, based on data captured by NASA's Lunar
                  Reconnaissance Orbiter.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="row-inner medium-4 small-12">
                <p className="font-size">
                  Using advanced Augmented Reality technology, LUNAR paired with
                  the AstroReality app allows you to learn captivating facts and
                  trivia, simulate Moon missions and embark on personalized
                  lunar adventures from your home or classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
