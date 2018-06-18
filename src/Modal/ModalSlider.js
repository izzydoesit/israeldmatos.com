import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable'
import { throttle } from 'lodash'
import ModalSlide from './ModalSlide';
import './ModalSlider.css';

export default class ModalSlider extends Component {

  goToPrevSlide = throttle((e) => {
    e.preventDefault();
    const { currentProject, activeModalIndex, updateModalSlide } = this.props;
        
    let index = activeModalIndex;
    --index;

    if (index < 0) {
      index = currentProject.pics.length - 1;
    }

    updateModalSlide(index);
  }, 500, { trailing: false })

  goToNextSlide = throttle((e) => {
    e.preventDefault();
    const { currentProject, activeModalIndex, updateModalSlide } = this.props;
    
    let index = activeModalIndex;
    ++index;
    
    if (index >= currentProject.pics.length) {
      index = 0
    }

    updateModalSlide(index);
  }, 500, { trailing: false })

  render() {
    const { currentProject, activeModalIndex } = this.props;

    return(
      <div className="carousel">
        <Swipeable
          className="modal-swipeable"
          onSwipingLeft={ (e) => this.goToPrevSlide(e) }
          onSwipingRight={ (e) => this.goToNextSlide(e)}
        >
          <div className="wrapper">

            <div className="carousel-container">
              <button
                className="modal-slider-btn left"
                onClick={e => this.goToPrevSlide(e)}
              >
                prev
              </button>

              <ModalSlide 
                { ...this.props }
              />

              <button
                className="modal-slider-btn right"
                onClick={e => this.goToNextSlide(e)}
              >
                next
              </button>
            </div>
          </div>
        </Swipeable>
      </div>
    )
  }
}

ModalSlider.propTypes = {
  children: PropTypes.node
}