import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable'
import { throttle } from 'lodash'
import ModalSlide from './ModalSlide';
import 'font-awesome/css/font-awesome.css'
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

<<<<<<< HEAD
        <div className="wrapper">

          <div className="carousel-container">
            <button
              className="modal-slider-btn"
              onClick={e => this.goToPrevSlide(e)}
              style={ { left: '0' } }
            >
              <i className="fa fa-caret-left bounce-left" />
            </button>
=======
            <div className="carousel-container">
              <button
                className="modal-slider-btn left"
                onClick={e => this.goToPrevSlide(e)}
              >
                prev
              </button>
>>>>>>> modal-slider

              <ModalSlide 
                { ...this.props }
              />

<<<<<<< HEAD
            <button
              className="modal-slider-btn"
              onClick={e => this.goToNextSlide(e)}
              style={ { right: '0' }}
            >
              <i className="fa fa-caret-right bounce-right"/>
            </button>
=======
              <button
                className="modal-slider-btn right"
                onClick={e => this.goToNextSlide(e)}
              >
                next
              </button>
            </div>
>>>>>>> modal-slider
          </div>
        </Swipeable>
      </div>
    )
  }
}

ModalSlider.propTypes = {
  children: PropTypes.node
}