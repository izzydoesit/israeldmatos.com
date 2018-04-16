import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import { updateModal } from '../actions/modal-actions';

export default class Slider extends Component {

  goToPrevSlide(e) {
    e.preventDefault();
    const { projects, currentProject, updateModal } = this.props;
        
    let index = currentProject.id;
    --index;

    if (index < 0) {
      index = projects.length - 1;
    }

    updateModal(projects[index]);
  }

  goToNextSlide(e) {
    e.preventDefault();
    const { projects, currentProject, updateModal } = this.props;

    let index = currentProject.id;
    ++index;

    if (index >= projects.length) {
      index = 0
    }
    updateModal(projects[index]);
  }

  render() {
    const { projects, currentProject, updateModal, modalOpen } = this.props; 
    console.log('slider modal open', this.props.modalOpen)

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
              <div className="slide-list">
                <Slide
                  key={currentProject.id}
                  index={currentProject.id}
                  { ...this.props }
                />
              </div>
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
                  activeIndex={currentProject.id}
                  updateModal={updateModal}
                />
              )}
            </ul>
          </div>
      </div>
    );
  }
}

Slider.propTypes = {
  updateModal: PropTypes.func.isRequired,
  currentProject: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired
}