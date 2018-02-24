import React, { Component } from 'react';
import Slider from './Slider';
import './Projects.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Projects extends Component {

  render() {
    return (
      <section>
        <ScrollableAnchor id={'projects'}>

          <div className="flex">
            <ScrollAnimation animateIn="bounceInRight">
              <div className="header">Projects</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight" delay={200}>
              <div className="header-bar"></div>
            </ScrollAnimation>
            <Slider />
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
