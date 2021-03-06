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
    const { projects, activeIndex, activeModalIndex, updateModalSlide } = this.props;
    const project = projects[activeIndex];
    let index = activeModalIndex;
    --index;

    if (index < 0) {
      index = project.pics.length - 1;
    }

    updateModalSlide(index);
  }, 500, { trailing: false })

  goToNextSlide = throttle((e) => {
    e.preventDefault();
    const { projects, activeIndex, activeModalIndex, updateModalSlide } = this.props;
    const project = projects[activeIndex];
    let index = activeModalIndex;
    ++index;

    if (index >= project.pics.length) {
      index = 0
    }

    updateModalSlide(index);
  }, 500, { trailing: false })

  render() {

    return(
      <div className="carousel">
        <Swipeable
          className="modal-swipeable"
          onSwipingRight={ (e) => this.goToPrevSlide(e) }
          onSwipingLeft={ (e) => this.goToNextSlide(e)}
        >
          <div className="wrapper">

            <div className="carousel-container">
              <button
                className="modal-slider-btn left"
                onClick={e => this.goToPrevSlide(e)}
              >
                <i className="fa fa-caret-left bounce-left"/>
              </button>

              <ModalSlide { ...this.props } />

              <button
                className="modal-slider-btn"
                onClick={e => this.goToNextSlide(e)}
                style={ { right: '0' }}
              >
                <i className="fa fa-caret-right bounce-right"/>
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