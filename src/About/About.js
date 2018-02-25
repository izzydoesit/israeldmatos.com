import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Alarm from 'react-icons/lib/md/alarm-on';
import Tablet from 'react-icons/lib/fa/tablet';
import Laptop from 'react-icons/lib/fa/laptop';
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import Magic from 'react-icons/lib/fa/magic';
import ProfilePic from './profile-pic-hex.png';
import SkillBar from './SkillBar';
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
      <section className="flex">
        <ScrollableAnchor id={'about'}>
          <div className="container flex">

            <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
              <div className="header">About</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" animateOnce={true} delay={200}>
              <div className="header-bar"></div>
            </ScrollAnimation>

            <div className="flex row label-wrap">

              <div className="flex row-gt-sm">

                <div className="flex bullet-wrap">

                  <ScrollAnimation animateIn="flipInY" delay={250}>
                    <div className="hex-wrap">
                      <div className="hexagon">
                        <Alarm size={55} className="speedometer"/>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInUp" delay={350}>
                    <div className="bullet-text">
                      <div className="label bold">Fast</div>
                      <div className="description">Optimal load times
                        are my highest priority
                      </div>
                    </div>
                  </ScrollAnimation>

                </div>

                <div className="flex bullet-wrap">

                  <ScrollAnimation animateIn="flipInY" delay={350}>
                    <div className="hex-wrap">
                      <div className="hexagon">
                        <Tablet size={55} className="tablet"/>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInUp" delay={450}>
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

                  <ScrollAnimation animateIn="flipInY" delay={300}>
                    <div className="hex-wrap animated flip-in-x">
                      <div className="hexagon">
                        <ThumbsUp size={55} className="thumbsup"/>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInUp" delay={400}>
                    <div className="bullet-text">
                      <div className="label bold">Intuitive</div>
                      <div className="description">Design is simplicity
                      </div>
                    </div>
                  </ScrollAnimation>

                </div>

                <div className="flex bullet-wrap">

                  <ScrollAnimation animateIn="flipInY" delay={400}>
                    <div className="hex-wrap animated flip-in-x">
                      <div className="hexagon">
                        <Magic size={55} className="magic"/>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInUp" delay={500}>
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
                  <div className="bio">
                    <img
                      src={ ProfilePic }
                      className="me"
                      alt="me"
                    />

                    <div className="bio-text">
                      <div className="label bold">Who is this guy?</div>
                      <div className="description">
                        Flannel brooklyn four dollar toast bicycle rights enamel pin
                        <br/>
                        actually mlkshk ramps la croix Drinking vinegar paleo la
                        croix
                        <br/>
                        <a href="#contact">Let's make something special</a>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="flex flex-50-gt-sm bars-wrap">

                <ScrollAnimation animateIn="bounceInRight">
                  <SkillBar skill={'CSS'} width={'85%'} rating={'90%'}/>
                  <SkillBar skill={'HTML'} width={'76%'} rating={'81%'}/>
                  <SkillBar skill={'React'} width={'72%'} rating={'77%'}/>
                  <SkillBar skill={'Javascript'} width={'75%'} rating={'80%'}/>
                  <SkillBar skill={'Angular'} width={'60%'} rating={'65%'}/>
                  <SkillBar skill={'Node.js'} width={'50%'} rating={'55%'}/>
                  <SkillBar skill={'Ruby/Rails'} width={'87%'} rating={'92%'}/>
                  <SkillBar skill={'UI Design'} width={'75%'} rating={'73%'}/>
                  <SkillBar skill={'Sketch'} width={'55%'} rating={'45%'}/>
                </ScrollAnimation>
              </div>

            </div>
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
