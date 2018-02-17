import React, { Component } from 'react';
import Alarm from 'react-icons/lib/md/alarm-on';
import Tablet from 'react-icons/lib/fa/tablet';
import Laptop from 'react-icons/lib/fa/laptop';
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import Magic from 'react-icons/lib/fa/magic';
import ProfilePic from './profilePic.jpg';
import './About.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

const picStyles = {
  height: '300px',
  width: '300px'
}

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <ScrollableAnchor id={'about'}>
          <div className="container flex">
            <div className="header animated slide-in-left">About</div>
            <div className="header-bar animated slide-in-left"></div>

            <div className="flex row label-wrap">

              <div className="flex row-gt-sm">
                <div className="bullet-wrap">

                  <div className="hex-wrap animated flip-in-x">
                    <div className="hexagon">
                      {/* <i className="speedometer"></i> */}
                      <Alarm size={80} className="speedometer"/>
                    </div>
                  </div>

                  <div className="bullet-text">
                    <div className="label bold">Fast</div>
                    <div className="description">is my highest priority</div>
                  </div>

                </div>

                <div className="bullet-wrap">

                  <div className="hex-wrap animated flip-in-x">
                    <div className="hexagon">
                      <Tablet size={80} className="tablet"/>
                    </div>
                  </div>

                  <div className="bullet-text">
                    <div className="label bold">Responsive</div>
                    <div className="description">big or small devices</div>
                  </div>

                </div>
              </div>

              <div className="flex row-gt-sm">

                <div className="flex bullet-wrap">

                  <div className="hex-wrap animated flip-in-x">
                    <div className="hexagon">
                      <ThumbsUp size={80} className="thumbsup"/>
                    </div>
                  </div>

                  <div className="bullet-text">
                    <div className="label bold">Intuitive</div>
                    <div className="description">its sooo easy to use!</div>
                  </div>

                </div>

                <div className="flex bullet-wrap">

                  <div className="hex-wrap animated flip-in-x">
                    <div className="hexagon">
                      <Magic size={80} className="magic"/>
                    </div>
                  </div>

                  <div className="bullet-text">
                    <div className="label bold">Dynamic</div>
                    <div className="description">make pages come to life</div>
                  </div>

                </div>  
              </div>

              <div className="skills-wrapper">

                <div className="skills-wrap">

                  <div className="bio animated slide-in-left">
                    <img 
                      src={ ProfilePic }
                      style={ picStyles }
                      className="me" 
                      alt="me"
                    />
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
            </div>
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
