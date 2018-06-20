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

  handleMouseEnter = () => {
    console.log('entered')
    this.props.updateHover(true);
  }

  handleMouseLeave = () => {
    this.props.updateHover(false);
  }

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
      
      <ScrollAnimation 
        animateOnce={true} 
        animateIn="bounceIn" 
        delay={600}
      >
        <div className="flex carousel">
                <Swipeable
                  className="project-swipeable"
                  onSwipingLeft={ (e) => this.goToPrevSlide(e) }
                  onSwipingRight={ (e) => this.goToNextSlide(e)}
                >
                  <div className="slider-wrapper">

                    <div
                      id="gallery" 
                      className="slider-container"
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                    >

                      <SliderArrow
                        direction="left"
                        onClick={e => this.goToPrevSlide(e)}
                      />
                      <Slide
                        key={currentProject.id}
                        index={currentProject.id}
                        onSlideClick={this.goToNextSlide}
                        { ...this.props }
                      />
                      <SliderArrow
                        direction="right"
                        onClick={e => this.goToNextSlide(e)}
                      />
                    </div>
                  </div>
                </Swipeable>

            <div className="indicator-wrap">
              <ul className="slider-indicators">
                {projects.map((slide, index) =>
                  <SliderIndicator
                    key={index}
                    index={index}
                    activeIndex={currentProject.id}
                    project={slide}
                    updateModal={updateModal}
                  />
                )}
              </ul>
            </div>
        </div>
      </ScrollAnimation>
    );
  }
}

Slider.propTypes = {
  updateModal: PropTypes.func.isRequired,
  currentProject: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired
}