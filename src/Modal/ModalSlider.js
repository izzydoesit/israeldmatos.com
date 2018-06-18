import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalSlide from './ModalSlide';
import './ModalSlider.css';

export default class ModalSlider extends Component {

  goToPrevSlide(e) {
    e.preventDefault();
    const { currentProject, activeModalIndex, updateModalSlide } = this.props;
        
    let index = activeModalIndex;
    --index;

    if (index < 0) {
      index = currentProject.pics.length - 1;
    }

    updateModalSlide(index);
  }

  goToNextSlide(e) {
    e.preventDefault();
    const { currentProject, activeModalIndex, updateModalSlide } = this.props;
    
    let index = activeModalIndex;
    ++index;
    
    if (index >= currentProject.pics.length) {
      index = 0
    }

    updateModalSlide(index);
  }

  render() {
    const { currentProject, activeModalIndex } = this.props;

    return(
      <div className="carousel">

        <div className="wrapper">

          <div className="carousel-container">
            <button
              className="modal-slider-btn"
              onClick={e => this.goToPrevSlide(e)}
            >
              prev
            </button>

            <ModalSlide 
              { ...this.props }
            />

            <button
              className="modal-slider-btn"
              onClick={e => this.goToNextSlide(e)}
            >
              next
            </button>
          </div>
        </div>
      </div>
    )
  }
}

ModalSlider.propTypes = {
  children: PropTypes.node
}