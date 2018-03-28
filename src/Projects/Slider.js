import React, { Component } from 'react';
import Slide from './Slide';
import SliderArrow from './SliderArrow';
import SliderIndicator from './SliderIndicator';
import ScrollAnimation from 'react-animate-on-scroll'
import './Slider.css'

import smarterBear from './smarterbear.png';
import colorGame from './colorGame.png';
import curvaFit from './curvaFit.png';
import hackerHaus from './hackerhaus.png';
import frais from './frais.png';

export default class Slider extends Component {

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.props.currentProjectId;
    // let { slides } = this.props;
    let slidesLength = this.props.projects.length;

    --index;

    if (index < 0) {
      index = slidesLength - 1;
    }

    this.props.updateProjectId(index);
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.props.currentProjectId;
    // let { slides } = this.props;
    let slidesLength = this.props.projects.length;

    ++index;

    if (index >= slidesLength) {
      index = 0
    }

    this.props.updateProjectId(index);
  }

  render() {
    
    const { openModal, currentProjectId, updateProjectId, projects } = this.props;

    return (
      <div className="flex slider-container">

          <ScrollAnimation 
            animateOnce={true} 
            animateIn="bounceIn" 
            delay={600}
          >
            <div id="gallery" className="flex row slider-wrapper">
              <SliderArrow
                direction="left"
                onClick={e => this.goToPrevSlide(e)}
              />
              <ul className="slide-list">
                  {projects.map((project, index) =>
                    <Slide
                      key={project.id}
                      index={index}
                      activeIndex={currentProjectId}
                      project={project}
                      openModal={openModal}
                    />
                  )}
              </ul>
              <SliderArrow
                direction="right"
                onClick={e => this.goToNextSlide(e)}
              />
            </div>
          </ScrollAnimation>

          <div className="indicator-wrap">
            <ul className="slider-indicators">
              {projects.map((slide, index) =>
                <SliderIndicator
                  key={index}
                  index={index}
                  activeIndex={currentProjectId}
                  isActive={currentProjectId===index}
                  onClick={e => updateProjectId(index)}
                />
              )}
            </ul>
          </div>
      </div>
    );
  }
}
