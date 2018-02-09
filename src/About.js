import React, { Component } from 'react';
import './About.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id={'about'}>
        <div className="container flex">
          <div className="header animated slide-in-left">About</div>
          <div className="header-bar animated slide-in-left"></div>

          <div className="bullet-wrap">
            <div className="hex-wrap animated flip-in-x">
              <div className="hexagon">
                <i className="speedometer"></i>
              </div>
            </div>

            <div className="bullet-text">
              <div className="label bold">Fast</div>
              <div className="description">is my highest priority</div>
            </div>

            <div className="hex-wrap animated flip-in-x">
              <div className="hexagon">
                <i className="speedometer"></i>
              </div>
            </div>

            <div className="bullet-text">
              <div className="label bold">Responsive</div>
              <div className="description">big or small devices</div>
            </div>

            <div className="hex-wrap animated flip-in-x">
              <div className="hexagon">
                <i className="speedometer"></i>
              </div>
            </div>

            <div className="bullet-text">
              <div className="label bold">Intuitive</div>
              <div className="description">its sooo easy to use!</div>
            </div>

            <div className="hex-wrap animated flip-in-x">
              <div className="hexagon">
                <i className="speedometer"></i>
              </div>
            </div>

            <div className="bullet-text">
              <div className="label bold">Dynamic</div>
              <div className="description">make pages come to life</div>
            </div>
            
          </div>

          <div className="skills-wrap">

            <div className="bio animated slide-in-left">
              <img src="" />
              <div className="label bold">Who is this guy?</div>
              <div className="description">
                I am a Quality Engineer at Marqeta and freelance UI/UX Developer in San Francisco.
                <a href="#contact">Let's make something special</a>
              </div>
            </div>

            <div className="bars animated slide-in-right">
            
              <div className="bar flex">
                <div className="bar fill">
                  <div className="tag bold flex">CSS</div>
                  <span>80%</span>
                </div>
              </div>
              <div className="bar flex">
                <div className="bar fill">
                  <div className="tag bold flex">HTML</div>
                  <span>80%</span>
                </div>
              </div>
              <div className="bar flex">
                <div className="bar fill">
                  <div className="tag bold flex">React</div>
                  <span>80%</span>
                </div>
              </div>
              <div className="bar flex">
                <div className="bar fill">
                  <div className="tag bold flex">JavaScript</div>
                  <span>80%</span>
                </div>
              </div>
              <div className="bar flex">
                <div className="bar fill">
                  <div className="tag bold flex">Angular</div>
                  <span>80%</span>
                </div>
              </div>
              <div className="bar flex">
                <div className="bar fill">
                  <div className="tag bold flex">Node.js</div>
                  <span>80%</span>
                </div>
              </div>
              <div className="bar flex">
                <div className="bar fill">
                  <div className="tag bold flex">Ruby/Rails</div>
                  <span>80%</span>
                </div>
              </div>
              <div className="bar flex">
                <div className="bar fill">
                  <div className="tag bold flex">UI Design</div>
                  <span>80%</span>
                </div>
              </div>
              <div className="bar flex">
                <div className="bar fill">
                  <div className="tag bold flex">Sketch</div>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    )
  }
}
