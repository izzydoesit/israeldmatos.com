import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Alarm from 'react-icons/lib/md/alarm-on';
import Tablet from 'react-icons/lib/fa/tablet';
import Laptop from 'react-icons/lib/fa/laptop';
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import Magic from 'react-icons/lib/fa/magic';
import ProfilePic from './profile-pic-hex.png';
import './About.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

const icons = [
  { icon: Alarm, label: "Fast", tagLine: "Optimal load times are my highest priority" }, 
  { icon: Tablet, label: "Responsive", tagLine: "My layouts will work on any device, big or small" }, 
  { icon: ThumbsUp, label: "Intuitive", tagLine: "I design it to be used in the simplest and easiest way posible" }, 
  { icon: Magic, label: "Dynamic", tagLine: "I love adding a little magic to make that page come to life!" }, 
]

export default class About extends Component {

  render() {
    return (
      <section>
        <ScrollableAnchor id={'about'}>
          <div className="container flex">

            <ScrollAnimation animateIn="bounceInLeft">
              <div className="header">About</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" delay={500}>
              <div className="header-bar"></div>
            </ScrollAnimation>

            <div className="flex row label-wrap">

              <div className="flex row-gt-sm">
              
                <div className="flex bullet-wrap">

                  <ScrollAnimation animateIn="flipInY">
                    <div className="hex-wrap animated flip-in-x">
                      <div className="hexagon">
                        <Alarm size={55} className="speedometer"/>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInUp">
                    <div className="waypoint bullet-text fade-in" data-animation="fade-in">
                      <div className="label bold">Fast</div>
                      <div className="description">Optimal load times
                        are my highest priority
                      </div>
                    </div>
                  </ScrollAnimation>

                </div>

                <div className="flex bullet-wrap">

                  <ScrollAnimation animateIn="flipInY">
                    <div className="hex-wrap">
                      <div className="hexagon">
                        <Tablet size={55} className="tablet"/>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInUp">
                    <div className="bullet-text">
                      <div className="label bold">Responsive</div>
                      <div className="description">My layouts will work on any device,
                        big or small
                      </div>
                    </div>
                  </ScrollAnimation>

                </div>
              </div>

              <div className="flex row-gt-sm">

                <div className="flex bullet-wrap">
                  <ScrollAnimation animateIn="flipInY">
                    <div className="hex-wrap animated flip-in-x">
                      <div className="hexagon">
                        <ThumbsUp size={55} className="thumbsup"/>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInUp">
                    <div className="bullet-text">
                      <div className="label bold">Intuitive</div>
                      <div className="description">Design is simplicity
                      </div>
                    </div>
                  </ScrollAnimation>

                </div>

                <div className="flex bullet-wrap">
                  <ScrollAnimation animateIn="flipInY">
                    <div className="hex-wrap animated flip-in-x">
                      <div className="hexagon">
                        <Magic size={55} className="magic"/>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInUp">
                    <div className="bullet-text">
                      <div className="label bold">Dynamic</div>
                      <div className="description">I love adding a little magic 
                        to make that page come to life!</div>
                    </div>
                  </ScrollAnimation>

                </div>  
              </div>
            </div>

            <div className="skills-wrapper flex row-gt-sm">

              <div className="flex flex-50-gt-sm">
                <ScrollAnimation animateIn="bounceInLeft">
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
                </ScrollAnimation>
              </div>

              <div className="flex flex-50-gt-sm bars-wrap">
                <ScrollAnimation animateIn="bounceInRight">
                
                  <div className="bar flex">
                    <div className="bar fill" style={{ width: '85%'}}>
                      <div className="tag bold flex">CSS</div>
                    </div>
                    <span>90%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={{ width: '76%'}}>
                      <div className="tag bold flex">HTML</div>
                    </div>
                    <span>81%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={{ width: '72%'}}>
                      <div className="tag bold flex">React</div>
                    </div>
                    <span>77%</span>
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
                    <span>55%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={{ width: '60%'}}>
                      <div className="tag bold flex">Node.js</div>
                    </div>
                    <span>62%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={{ width: '87%'}}>
                      <div className="tag bold flex">Ruby/Rails</div>
                    </div>
                    <span>92%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={{ width: '75%'}}>
                      <div className="tag bold flex">UI Design</div>
                    </div>
                    <span>73%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={{ width: '55%'}}>
                      <div className="tag bold flex">Sketch</div>
                    </div>
                    <span>45%</span>
                  </div>
                </ScrollAnimation>
              </div>

            </div>
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
