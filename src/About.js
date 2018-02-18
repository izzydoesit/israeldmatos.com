import React, { Component } from 'react';
import Alarm from 'react-icons/lib/md/alarm-on';
import Tablet from 'react-icons/lib/fa/tablet';
import Laptop from 'react-icons/lib/fa/laptop';
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import Magic from 'react-icons/lib/fa/magic';
import ProfilePic from './profile-pic-hex.png';
import './About.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class About extends Component {

  render() {
    return (
      <section>
        <ScrollableAnchor id={'about'}>
          <div className="container flex">

            <div className="header animated slide-in-left">About</div>
            <div className="header-bar animated slide-in-left"></div>

            <div className="flex row label-wrap">

              <div className="flex row-gt-sm">
              
                <div className="flex bullet-wrap">

                  <div className="hex-wrap animated flip-in-x">
                    <div className="hexagon">
                      {/* <i className="speedometer"></i> */}
                      <Alarm size={80} className="speedometer"/>
                    </div>
                  </div>

                  <div className="waypoint bullet-text fade-in" data-animation="fade-in">
                    <div className="label bold">Fast</div>
                    <div className="description">Optimal load times
                      are my highest priority
                    </div>
                  </div>

                </div>

                <div className="flex bullet-wrap">

                  <div className="hex-wrap animated flip-in-x">
                    <div className="hexagon">
                      <Tablet size={80} className="tablet"/>
                    </div>
                  </div>

                  <div className="bullet-text">
                    <div className="label bold">Responsive</div>
                    <div className="description">My layouts will work on any device,
                      big or small
                    </div>
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
                    <div className="description">I design it to be used in 
                      the simplest and easiest way possible...
                    </div>
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
                    <div className="description">I love adding a little magic 
                      to make that page come to life!</div>
                  </div>

                </div>  
              </div>
            </div>

            <div className="skills-wrapper flex row-gt-sm">

              <div className="flex flex-50-gt-sm">

                <div className="bio animated slide-in-left">
                  <img 
                    src={ ProfilePic }
                    className="me" 
                    alt="me"
                  />
                  <div className="label bold">Who is this guy?</div>
                  <div className="description">
                    Flannel brooklyn four dollar toast bicycle rights enamel pin
                    <br/> 
                    actually mlkshk ramps la croix. Drinking vinegar paleo la 
                    croix
                    <br/>
                    <a href="#contact">Let's make something special</a>
                  </div>
                </div>
              </div>


              <div className="flex flex-50-gt-sm bars-wrap animated slide-in-right">
              
                <div className="bar flex">
                  <div className="bar fill" style={{ width: '85%'}}>
                    <div className="tag bold flex">CSS</div>
                  </div>
                  <span>90%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{ width: '75%'}}>
                    <div className="tag bold flex">HTML</div>
                  </div>
                  <span>80%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{ width: '70%'}}>
                    <div className="tag bold flex">React</div>
                  </div>
                  <span>75%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{ width: '75%'}}>
                    <div className="tag bold flex">JavaScript</div>
                  </div>
                  <span>80%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{ width: '50%'}}>
                    <div className="tag bold flex">Angular</div>
                  </div>
                  <span>50%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{ width: '50%'}}>
                    <div className="tag bold flex">Node.js</div>
                  </div>
                  <span>50%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{ width: '90%'}}>
                    <div className="tag bold flex">Ruby/Rails</div>
                  </div>
                  <span>95%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{ width: '65%'}}>
                    <div className="tag bold flex">UI Design</div>
                  </div>
                  <span>70%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{ width: '45%'}}>
                    <div className="tag bold flex">Sketch</div>
                  </div>
                  <span>40%</span>
                </div>
              </div>

            </div>
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
