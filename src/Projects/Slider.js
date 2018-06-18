import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable'
import { throttle } from 'lodash'
import Slide from './Slide';
import SliderArrow from './SliderArrow';
import SliderIndicator from './SliderIndicator';
import ScrollAnimation from 'react-animate-on-scroll'
import './Slider.css'

export default class Slider extends Component {

  goToPrevSlide = throttle((e) => {
    e.preventDefault();
    const { projects, currentProject, updateModal } = this.props;
        
    let index = currentProject.id;
    --index;

    if (index < 0) {
      index = projects.length - 1;
    }

    updateModal(projects[index]);
  }, 500, { trailing: false })

  goToNextSlide = throttle((e) => {
    e.preventDefault();
    const { projects, currentProject, updateModal } = this.props;

    let index = currentProject.id;
    ++index;

    if (index >= projects.length) {
      index = 0
    }
    updateModal(projects[index]);
  }, 500, { trailing: false })

  render() {
    const { projects, currentProject, updateModal, modalIsOpen } = this.props; 

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
              <Swipeable
                className="project-swipeable"
                onSwipingLeft={ (e) => this.goToPrevSlide(e) }
                onSwipingRight={ (e) => this.goToNextSlide(e)}
              >
                <div className="slide-list">
                  <Slide
                    key={currentProject.id}
                    index={currentProject.id}
                    onSlideClick={this.goToNextSlide}
                    { ...this.props }
                  />
                </div>
              </Swipeable>
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