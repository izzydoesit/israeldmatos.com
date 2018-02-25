import React, { Component } from 'react';
import Slider from './Slider';
import './Projects.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Projects extends Component {

  render() {

    return (
      <section id="projects-section">
        
        <ScrollableAnchor id={'projects'}>

          <div className="flex container">
            <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
              <div className="header">Projects</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight" animateOnce={true} delay={200}>
              <div className="header-bar"></div>
            </ScrollAnimation>
            <Slider />
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
