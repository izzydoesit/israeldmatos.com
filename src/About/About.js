import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Alarm from 'react-icons/lib/md/alarm-on';
import Tablet from 'react-icons/lib/fa/tablet';
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import Magic from 'react-icons/lib/fa/magic';
import ProfilePic from './profile-pic-hex.png';
import BulletCard from './BulletCard';
import SkillBar from './SkillBar';
import './About.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

const firstRowIcons = [
  { image: Alarm, label: "Fast", tagLine: "Optimal load times are my highest priority", delay: 250 },
  { image: Tablet, label: "Responsive", tagLine: "My layouts will work on any device, big or small", delay: 350 },
]
const secondRowIcons = [
  { image: ThumbsUp, label: "Intuitive", tagLine: "I design it to be used in the simplest and easiest way posible", delay: 450 },
  { image: Magic, label: "Dynamic", tagLine: "I love adding a little magic to make that page come to life!", delay: 550 },
]

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRowIcons: firstRowIcons,
      secondRowIcons: secondRowIcons
    }
  }

  render() {
    return (
      <section className="flex">
        <ScrollableAnchor id={'about'}>
          <div className="container flex">

            <ScrollAnimation 
              animateOnce={true} 
              animateIn="bounceInLeft"
            >
              <div className="header">About</div>
            </ScrollAnimation>
            <ScrollAnimation 
              animateOnce={true} 
              animateIn="bounceInLeft" 
              delay={200}
            >
              <div className="header-bar"></div>
            </ScrollAnimation>

            <div className="flex row label-wrap">

              <div className="flex row-gt-sm">
                {this.state.firstRowIcons.map((icon, index) =>
                  <BulletCard
                    key={index}
                    index={index}
                    icon={icon}
                  />
                )}
              </div>

              <div className="flex row-gt-sm">
                {this.state.secondRowIcons.map((icon, index) =>
                  <BulletCard
                    key={index}
                    index={index}
                    icon={icon}
                  />
                )}
              </div>
            </div>

            <div className="skills-wrapper flex row-gt-sm">

              <div className="flex flex-50-gt-sm">

                <ScrollAnimation 
                  animateOnce={true}
                  animateIn="bounceInLeft"
                >
                  <div className="bio">
                    <img
                      src={ ProfilePic }
                      className="me"
                      alt="me"
                    />

                    <div className="bio-text">
                      <div className="label bold">Who is this guy?</div>
                      <div className="description">
                        I currently work at <a href="https://www.gemini.com" target="_blank" rel="noopener noreferrer">Gemini</a> playing with APIs and the blockchain all day.
                        <br/>
                        I have a passion for building awe-inspiring UI effects and buttery smooth user experiences.
                        <br/>
                        <a href="#contact">Let's make something special together...</a>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="flex flex-50-gt-sm bars-wrap">

                <ScrollAnimation 
                  animateOnce={true}
                  animateIn="bounceInRight"
                >
                  <SkillBar skill={'CSS'} width={'85%'} rating={'90%'}/>
                  <SkillBar skill={'HTML'} width={'76%'} rating={'81%'}/>
                  <SkillBar skill={'React'} width={'72%'} rating={'77%'}/>
                  <SkillBar skill={'Javascript'} width={'75%'} rating={'80%'}/>
                  <SkillBar skill={'Angular'} width={'60%'} rating={'65%'}/>
                  <SkillBar skill={'Node.js'} width={'50%'} rating={'55%'}/>
                  <SkillBar skill={'Ruby/Rails'} width={'87%'} rating={'92%'}/>
                  <SkillBar skill={'UI Design'} width={'75%'} rating={'73%'}/>
                  <SkillBar skill={'Sketch'} width={'55%'} rating={'45%'}/>
                  <SkillBar skill={'TDD'} width={'85%'} rating={'90%'}/>
                </ScrollAnimation>
              </div>

            </div>
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
